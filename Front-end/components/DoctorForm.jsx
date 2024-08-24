import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorForm = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    type: '',
    details: '',
  });

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/v1/doctors', doctorData, {
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Doctor information submitted successfully!');
      setDoctorData({ name: '', type: '', details: '' }); // Clear the form after submission
    } catch (error) {
      console.error('Error submitting doctor information:', error.response ? error.response.data : error.message);
      toast.error('Failed to submit doctor information');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Doctor Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={doctorData.name}
            onChange={handleChange}
            placeholder="Enter doctor's name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-lg font-medium">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={doctorData.type}
            onChange={handleChange}
            placeholder="Enter doctor's type"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="details" className="block text-lg font-medium">
            Details
          </label>
          <textarea
            id="details"
            name="details"
            value={doctorData.details}
            onChange={handleChange}
            placeholder="Enter doctor's details"
            rows="4"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DoctorForm;
