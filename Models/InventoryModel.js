// module.exports = mongoose.model('InventoryModel', InventorySchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roles = ['Patient', 'Hospital', 'Lab'];

const InventorySchema = new Schema({
    role: {
        type: String,
        enum: roles,
        required: true
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    labId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab'
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    testResults: {
        type: Map,
        of: String,
        required: true
    },
    analysis: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

InventorySchema.pre('save', function(next) {
    if (this.role === 'Patient' && !this.patientId) {
        return next(new Error('patientId is required when role is patient'));
    } else if (this.role === 'Hospital' && !this.hospitalId) {
        return next(new Error('hospitalId is required when role is hospital'));
    } else if (this.role === 'Lab' && !this.labId) {
        return next(new Error('labId is required when role is lab'));
    }
    next();
});

module.exports = mongoose.model('InventoryModel', InventorySchema);
