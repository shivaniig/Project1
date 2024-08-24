// const express=require('express')
// const { createInventoryController } = require('../Controllers/InventoryController')
// const router=express.Router()
// //routes
// //ADD INVENTORY ||POST
// router.post('./create-inventory', authMiddleware,createInventoryController)
// module.exports=router

// routes.js
// const express = require('express');
// const router = express.Router();
// const inventoryController = require('./controllers/inventoryController');
// const authMiddleware = require('../Middlewares/authMiddleware');

// // CRUD routes for blood test reports
// router.post('./create-inventory', authMiddleware,createInventoryController);
// router.get('./create-inventory', authMiddleware,);
// router.get('./create-inventory', inventoryController.getReportById);
// router.put('./create-inventory', inventoryController.updateReportById);
// router.delete('./create-inventory', inventoryController.deleteReportById);

// module.exports = router;
const express = require('express');
const router = express.Router();
const inventoryController = require('../Controllers/InventoryController');
const authMiddleware = require('../Middlewares/authMiddleware'); // Ensure this path is correct

// CRUD routes for blood test reports

// Create a new inventory report
router.post('/create-inventory', authMiddleware, inventoryController.createReport);

// Get all inventory reports
router.get('/get', authMiddleware, inventoryController.getAllReports);

// Get a single inventory report by ID
router.get('/get/:id', authMiddleware, inventoryController.getReportById);

// Update a single inventory report by ID
router.put('/update/:id', authMiddleware, inventoryController.updateReportById);

// Delete a single inventory report by ID
router.delete('/delete/:id', authMiddleware, inventoryController.deleteReportById);

module.exports = router;

