import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = ({ token }) => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/doctors', doctor, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Doctor added successfully');
      setDoctor({ name: '', specialty: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error adding doctor', error);
    }
  };

  return (
    <div className="doctor-form-container">
      <h2>Add Doctor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={doctor.name} onChange={handleInputChange} />
        </label>
        <label>
          Specialty:
          <input type="text" name="specialty" value={doctor.specialty} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={doctor.phone} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={doctor.email} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default DoctorForm;
