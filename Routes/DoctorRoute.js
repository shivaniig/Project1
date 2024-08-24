// DoctorRoute.js
const express = require('express');
const router = express.Router();
const { createDoctor, getDoctors } = require('../Controllers/DoctorController');
// const { verifyToken } = require('../Middlewares/DoctorMiddleware');

// Protect the route

// @route   POST /api/v1/doctors
// @desc    Create a new doctor
// @access  Public or Protected (depending on your authentication setup)
router.post('/doctors', createDoctor);

router.get('/doctors', getDoctors);

module.exports = router;
