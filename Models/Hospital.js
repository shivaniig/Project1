const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    hospitalId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    departments: { type: [String], required: true }
}, { timestamps: true });

const Hospital = mongoose.model('Hospital', hospitalSchema);

const addHospital = async (hospitalData) => {
    try {
      const existingHospital = await Hospital.findOne({ hospitalId: hospitalData.hospitalId });
      if (existingHospital) {
        console.log('Hospital with this ID already exists.');
        return; // or handle as needed
      }
  
      const newHospital = new Hospital(hospitalData);
      await newHospital.save();
      console.log('Hospital added successfully');
    } catch (error) {
      console.error('Error adding data to the database:', error);
    }
};

module.exports = {
  Hospital,
  addHospital
};
