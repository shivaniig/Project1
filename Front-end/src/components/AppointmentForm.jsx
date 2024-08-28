import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    //AppointmentCenter: '',
    comments: ''
  });

  // const [AppointmentCenter, setAppointmentCenter] = useState([]);

  // useEffect(() => {
  //   // Fetch donation centers or use static data
  //   const centers = [
  //     'Center 1',
  //     'Center 2',
  //     'Center 3'
  //   ];
  //   setAppointmentCenter(centers);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send formData to the server here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '100px', paddingBottom:'100px'}}>
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
        {/* <div className="form-group">
          <label htmlFor="donationCenter" className="text-black">Appoi Center</label>
          <select
            className="form-control"
            id="donationCenter"
            name="donationCenter"
            value={formData.donationCenter}
            onChange={handleChange}
            required
            style={{ border: '1px solid #ced4da' }}
          >
            <option value="">Select a center</option>
            {donationCenters.map((center, index) => (
              <option key={index} value={center}>{center}</option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="comments" className="text-black">Comments</label>
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
        {/* <button type="submit" className="btn btn-primary mt-3 hover:bg-white hover:text-[FF4E50]" style={{ backgroundColor: '#FF4E50', borderColor: '#FF4E50', padding: '10px 20px', fontSize: '16px', borderRadius: '25px' }}>Submit</button> */}
        <button
  type="submit"
  className="bg-[#FF4E50] hover:skew-x-3 px-10 py-4 ease-in hover:rounded-full hover:text-red-600 hover:border-red-500  border-4 rounded-2xl  transition-all ease-linear duration-200 border-gray-100  font-bold hover:scale-105 text-white" >
  Submit
</button>

      </form>
    </div>
  );
};

export default AppointmentForm;
