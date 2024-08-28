import React, { useState } from 'react';
import axios from 'axios';

const HospitalForm = ({ token }) => {
  const [hospital, setHospital] = useState({
    name: '',
    location: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospital({ ...hospital, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/hospitals', hospital, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Hospital added successfully');
      setHospital({ name: '', location: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error adding hospital', error);
    }
  };

  return (
    <div className="hospital-form-container">
      <h2>Add Hospital</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={hospital.name} onChange={handleInputChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={hospital.location} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={hospital.phone} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={hospital.email} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
};

export default HospitalForm;
