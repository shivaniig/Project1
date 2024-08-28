const express = require('express');
const router = express.Router();
const { createComment } = require('../Controllers/HospitalController'); // Ensure the path matches

// POST /api/v1/comments
router.post('/comments', createComment);

module.exports = router;
