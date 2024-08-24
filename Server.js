const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectionDb = require('./Config/Db');
const mongoose = require('mongoose');
const InventoryModel = require('./Models/InventoryModel');
const Hospital = require('./Models/Hospital');
const Labs = require('./Models/Labs');
const Data = require('./Models/Data'); // Import the Data model
dotenv.config();
const jwt = require('jsonwebtoken');
const authenticate = require('./Middlewares/authenticate.js');

// MongoDB connection
connectionDb();

// Create Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/test', (req, res) => {
    res.send('Server is running');
});

// Define API routes
app.use('/api/v1/test', require('./Routes/TestRoutes'));
app.use('/api/v1/Auth', require('./Routes/Auth'));
app.use('/api/v1/get-inventory', require('./Routes/inventoryRoutes'));

app.post('/api/v1/auth/inventory/create-inventory', async (req, res) => {
    try {
        const inventory = new InventoryModel(req.body);
        await inventory.save();
        res.status(201).send(inventory);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.put('/api/v1/get-inventory', require('./Routes/inventoryRoutes'));
app.use('/api/v1/Admin', require('./Routes/AdminRoutes'));

// GET API for hospitals
app.get('/api/hospitals', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET API for labs
app.get('/api/labs', async (req, res) => {
    try {
        const labs = await Labs.find();
        res.json(labs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Submit form data
app.use('/api/v1/data', require('./Routes/DataRoute.js'));

app.use('/api/v1', require('./Routes/HospitalRoute.js'));
app.use('/api/v1', require('./Routes/DoctorRoute.js'));
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlue.white);
});
