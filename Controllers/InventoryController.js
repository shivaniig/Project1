// controllers/inventoryController.js
const InventoryModel = require('../Models/InventoryModel');

// Create a new blood test report
exports.createReport = async (req, res) => {
    try {
        const newReport = new InventoryModel(req.body);
        const savedReport = await newReport.save();
        res.status(201).json(savedReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Get all blood test reports
exports.getAllReports = async (req, res) => {
    try {
        const reports = await InventoryModel.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Get a single blood test report by ID
exports.getReportById = async (req, res) => {
    try {
        const report = await InventoryModel.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Update a blood test report by ID
exports.updateReportById = async (req, res) => {
    try {
        const updatedReport = await InventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedReport) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.status(200).json(updatedReport);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Delete a blood test report by ID
exports.deleteReportById = async (req, res) => {
    try {
        const deletedReport = await InventoryModel.findByIdAndDelete(req.params.id);
        if (!deletedReport) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.status(200).json({ message: 'Report deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
