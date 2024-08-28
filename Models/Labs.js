// models/Lab.js
const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
    labId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    services: { type: [String], required: true }
}, { timestamps: true });

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;
