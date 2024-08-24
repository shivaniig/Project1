const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  appointmentId: { type: String, required: true },
  comment: { type: String, required: true },
  doctor: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  donationCenter: { type: String, required: true },
});

module.exports = mongoose.model('Comment', CommentSchema);
