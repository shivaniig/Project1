const UserModel = require('../Models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { generateToken } = require('../Utils/authUtils');

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
  
  

//login call back
const loginController = async (req, res) => {
    try {
        const User = await UserModel.findOne({ email: req.body.email })
        if (!User) {
            return res.status(404).send({
                success: false,
                message: "user not found"
            });
        }
        //check role
        if (User.role !== req.body.role) {
            return res.status(500).send({
                success: false,
                message: 'Role doesnot match'
            })
        }
        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, User.password)
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "invalid credentials",
            });
        }
        const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        return res.status(200).send({
            success: true,
            message: "login successfully",
            token,
            User,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login Api',
            error,
        })
    }
};


const loginUser = async (req, res) => {
    try {
        const User = await UserModel.findOne({ email: req.body.email });
        if (!User) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(req.body.password, User.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: User._id, role: User.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, user: User });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


//get current user
const currentUserController = async (req, res) => {
    try {
        const User = await UserModel.findOne({ _id: req.body.userId });
        return res.status(200).send({
            sucess: true,
            message: "User fetched Successfully",
            User,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Unable to get current user',
            error,
        })
    }
};

const fetchAllUsersController = async (req, res) => {
    try {
        const users = await UserModel.find({});
        return res.status(200).send({
            success: true,
            message: "Users fetched successfully",
            users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in fetching users",
            error,
        });
    }
};
module.exports = { registerController, loginController,loginUser, currentUserController, fetchAllUsersController };