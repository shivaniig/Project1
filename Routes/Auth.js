const express = require('express')
const { registerController,
<<<<<<< HEAD
    loginController,
    currentUserController, } = require('../Controllers/AuthController');
=======
    loginController,loginUser,
    currentUserController,fetchAllUsersController } = require('../Controllers/AuthController');
>>>>>>> 37b630e4e0f87a42152b3abb4e7ef207803a2b30
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router()
//Register || post
router.post('/register', registerController)

//login||post
router.post('/login', loginController);

<<<<<<< HEAD
//get current user||get
router.get('/current-user', authMiddleware, currentUserController);

=======
// Define the login route
router.post('/loginu', loginUser);

//get current user||get
router.get('/current-user', authMiddleware, currentUserController);

router.get('/users',  fetchAllUsersController);


>>>>>>> 37b630e4e0f87a42152b3abb4e7ef207803a2b30
module.exports = router

