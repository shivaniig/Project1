const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../Utils/authUtils'); // Ensure this utility is used if needed

// Register controller
const registerController = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already exists',
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserModel({
            ...req.body,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(200).send({
            success: true,
            message: 'User registered successfully',
            user: newUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register API',
            error,
        });
    }
};

// Login controller
const loginController = async (req, res) => {
    try {
        const User = await UserModel.findOne({ email: req.body.email });
        if (!User) {
            return res.status(404).send({
                success: false,
                message: 'User not found',
            });
        }

        // Check role
        if (User.role !== req.body.role) {
            return res.status(500).send({
                success: false,
                message: 'Role does not match',
            });
        }

        // Compare password
        const comparePassword = await bcrypt.compare(req.body.password, User.password);
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).send({
            success: true,
            message: 'Login successfully',
            token,
            user: User,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login API',
            error,
        });
    }
};

// Separate login user controller
const loginUser = async (req, res) => {
    try {
        const User = await UserModel.findOne({ email: req.body.email });
        if (!User) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(req.body.password, User.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: User._id, role: User.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, user: User });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get current user controller
const currentUserController = async (req, res) => {
    try {
        const User = await UserModel.findOne({ _id: req.userId }); // Adjust to use req.userId from token
        return res.status(200).send({
            success: true,
            message: 'User fetched successfully',
            user: User,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Unable to get current user',
            error,
        });
    }
};

// Fetch all users controller
const fetchAllUsersController = async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.status(200).send({
            success: true,
            message: 'Users fetched successfully',
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching users',
            error,
        });
    }
};

module.exports = {
    registerController,
    loginController,
    loginUser,
    currentUserController,
    fetchAllUsersController,
};
