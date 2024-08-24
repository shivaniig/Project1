// Controllers/DoctorController.js
const Doctor = require('../Models/Doctor');

// @desc    Create a new doctor
// @route   POST /api/v1/doctors
// @access  Public or Protected (depending on your authentication setup)
const createDoctor = async (req, res) => {
    try {
        const { name, type, details } = req.body;

        if (!name || !type) {
            return res.status(400).json({ message: 'Name and type are required.' });
        }

        const newDoctor = new Doctor({
            name,
            type,
            details,
        });

        await newDoctor.save();

        res.status(201).json({
            message: 'Doctor created successfully!',
            doctor: newDoctor,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all doctors
// @route   GET /api/v1/doctors
// @access  Public or Protected (depending on your authentication setup)
const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find(); // Retrieve all doctors from the database
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createDoctor,
    getDoctors, // Export the new getDoctors function
};
