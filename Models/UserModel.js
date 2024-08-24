const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: { type: String, required: true },
  name: {
    type: String,
    required: function () {
      return this.role === 'Admin';
    }
  },
  labs: {
    type: String,
    required: function () {
      return this.role === 'Labs';
    }
  },
  hospital: {
    type: String,
    required: function () {
      return this.role === 'Hospital';
    }
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
