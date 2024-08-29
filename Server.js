const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectionDb = require('./Config/Db');
const InventoryModel = require('./Models/InventoryModel');
const Hospital = require('./Models/Hospital');
const Labs = require('./Models/Labs');
const jwt = require('jsonwebtoken');
const authenticate = require('./Middlewares/authenticate.js');

// Load environment variables
dotenv.config();

// MongoDB connection
connectionDb();

// Create Express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes

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
app.use('/api/v1/Admin', require('./Routes/AdminRoutes'));
app.use('/api/v1/data', require('./Routes/DataRoute.js'));
app.use('/api/v1', require('./Routes/HospitalRoute.js'));
app.use('/api/v1', require('./Routes/DoctorRoute.js'));

// POST: Create inventory
app.post('/api/v1/auth/inventory/create-inventory', async (req, res) => {
    try {
        const inventory = new InventoryModel(req.body);
        await inventory.save();
        res.status(201).send(inventory);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// PUT: Update inventory
app.put('/api/v1/get-inventory', require('./Routes/inventoryRoutes'));

// POST: User registration
app.post('/api/v1/Auth', (req, res) => {
  const { role, name, labs, hospital, email, password, address, phone } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Email already registered.' });
  }

  // Save user to "database"
  const newUser = { role, name, labs, hospital, email, password, address, phone };
  users.push(newUser);
  console.log('User registered:', newUser);

  // Dummy token generation
  const token = 'dummy-token'; // Replace with actual token generation logic if needed

  // Send success response
  res.json({
    success: true,
    message: 'Registration successful!',
    token: token,
  });
});

// GET: Fetch all hospitals
app.get('/api/hospitals', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.json(hospitals);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET: Fetch all labs
app.get('/api/labs', async (req, res) => {
    try {
        const labs = await Labs.find();
        res.json(labs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgBlue.white);
});
