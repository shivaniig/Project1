const express = require('express')
const { registerController,
    loginController,loginUser,
    currentUserController,fetchAllUsersController } = require('../Controllers/AuthController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router()
//Register || post
router.post('/register', registerController)

//login||post
router.post('/login', loginController);

// Define the login route
router.post('/loginu', loginUser);

//get current user||get
router.get('/current-user', authMiddleware, currentUserController);

router.get('/users',  fetchAllUsersController);


module.exports = router

