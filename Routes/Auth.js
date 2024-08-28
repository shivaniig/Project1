const express = require('express')
const { registerController,
    loginController,
    currentUserController, } = require('../Controllers/AuthController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router()
//Register || post
router.post('/register', registerController)

//login||post
router.post('/login', loginController);

//get current user||get
router.get('/current-user', authMiddleware, currentUserController);

module.exports = router

