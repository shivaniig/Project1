const express = require('express');
const router = express.Router();
const authenticate = require('../Middlewares/authenticate');
const { submitData, getData } = require('../Controllers/DataController');

router.post('/submit', authenticate, submitData);
router.get('/', authenticate, getData);

module.exports = router;
