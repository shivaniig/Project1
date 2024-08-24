const express = require("express");
const authMiddleware = require("../Middlewares/authMiddleware");
const {
  getUserListController,
  getHospitalListController,
  getlabListController,
} = require("../Controllers/AdminController");
const AdminMiddleware = require("../Middlewares/AdminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || USER LIST
router.get( "/user-list",authMiddleware,AdminMiddleware, getUserListController);
//GET || HOSPITAL LIST
router.get("/hospital-list",authMiddleware,AdminMiddleware, getHospitalListController);
//GET || LAB LIST
router.get("/lab-list", authMiddleware, AdminMiddleware, getlabListController);


module.exports = router;
