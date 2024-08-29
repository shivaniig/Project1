const express = require('express');
const {
    registerController,
    loginController,
    loginUser,
    currentUserController,
    fetchAllUsersController
} = require('../Controllers/AuthController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

// Register || POST
router.post('/register', registerController);

// Login || POST
router.post('/login', loginController);

// Define a separate login route, if needed
router.post('/loginu', loginUser);

// Get current user || GET
router.get('/current-user', authMiddleware, currentUserController);

// Fetch all users || GET
router.get('/users', fetchAllUsersController);

module.exports = router;
