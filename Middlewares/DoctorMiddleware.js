const { check, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const createDoctor = require('../Controllers/DoctorController')


router.post(
  '/doctors',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('name', 'Name must be at least 3 characters').isLength({ min: 3 }),
    check('type', 'Type is required').not().isEmpty(),
    check('type', 'Type must be a valid profession').isIn(['Cardiologist', 'Dermatologist', 'Neurologist']),
    check('details', 'Details must be at least 10 characters').optional().isLength({ min: 10 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createDoctor
);
