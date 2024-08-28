import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = ({ token }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    donationCenter: '',
    comments: ''
  });

  const [labs, setLabs] = useState([]);

  useEffect(() => {
    // Fetch donation centers with role 'Labs' (case-insensitive)
    axios.get('http://localhost:8080/api/v1/Auth/users', {
      headers: {
        'x-access-token': token
      }
    })
      .then((response) => {
        // Filter users with role 'Labs'
        const labsData = response.data.users.filter(user => user.role.toLowerCase() === 'labs');
        setLabs(labsData);
      })
      .catch((error) => {
        toast.error('There was an error fetching donation centers.');
        console.error('There was an error!', error);
      });
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/data/submit', formData, {
      headers: {
        'x-access-token': token
      }
    })
      .then((response) => {
        toast.success('Form submitted successfully!');
        console.log('Form submitted:', response.data);
      })
      .catch((error) => {
        toast.error('There was an error submitting the form.');
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <ToastContainer />
      <h2 className="text-center mb-4">Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="text-black">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="text-black">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="text-black">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="text-black">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time" className="text-black">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="donationCenter" className="text-black">Labs</label>
          <select
            className="form-control"
            id="donationCenter"
            name="donationCenter"
            value={formData.donationCenter}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          >
            <option value="">Select a lab</option>
            {labs.map((lab) => (
              <option key={lab._id} value={lab.labs}>
                {lab.labs}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments" className="text-black">Address</label>
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="3"
            style={{ border: '1px solid #ced4da' }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#FF4E50] hover:skew-x-3 px-10 py-4 ease-in hover:rounded-full hover:text-red-600 hover:border-red-500 border-4 rounded-2xl transition-all ease-linear duration-200 border-gray-100 font-bold hover:scale-105 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
