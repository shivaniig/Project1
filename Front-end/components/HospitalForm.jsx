import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HospitalForm.css';

const HospitalForm = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [comments, setComments] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem('token'); // Adjust if your token storage is different

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/data', {
          headers: { 'x-access-token': token },
        });
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error('Unexpected response format for appointments:', response.data);
          setAppointments([]);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setAppointments([]);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/doctors', {
          headers: { 'x-access-token': token },
        });
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setDoctors([]);
      }
    };

    fetchAppointments();
    fetchDoctors();
  }, [token]);

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!selectedAppointment) {
      toast.error('Please select an appointment');
      return;
    }

    if (!selectedDoctor) {
      toast.error('Please select a doctor');
      return;
    }

    if (!comments.trim()) {
      toast.error('Please enter your comments');
      return;
    }

    const doctorName = doctors.find((doc) => doc._id === selectedDoctor)?.name || '';

    const commentData = {
      appointmentId: selectedAppointment._id,
      comment: comments,
      doctor: doctorName,
      name: selectedAppointment.name,
      email: selectedAppointment.email,
      phone: selectedAppointment.phone,
      date: selectedAppointment.date,
      time: selectedAppointment.time,
      donationCenter: selectedAppointment.donationCenter,
    };

    try {
      await axios.post('http://localhost:8080/api/v1/comments', commentData, {
        headers: { 'x-access-token': token },
      });
      toast.success('Comment submitted successfully!');
      setComments('');
      setSelectedDoctor('');
    } catch (error) {
      console.error('Error submitting comment:', error.response ? error.response.data : error.message);
      toast.error('Failed to submit comment');
    }
  };

  return (
    <div className="container d-flex">
      <div className="sidebar">
        <ul className="list-group">
          {appointments.map((appointment) => (
            <li key={appointment._id} className="list-group-item" onClick={() => handleAppointmentClick(appointment)}>
              {appointment.date} - {appointment.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-content" style={{ flex: 1, marginTop: '120px' }}>
        {selectedAppointment ? (
          <div>
            <h2>Appointment Details</h2>
            <p><strong>Name:</strong> {selectedAppointment.name}</p>
            <p><strong>Email:</strong> {selectedAppointment.email}</p>
            <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Donation Center:</strong> {selectedAppointment.donationCenter}</p>
            <p><strong>Comments:</strong> {selectedAppointment.comments}</p>

            <h3>assistant List</h3>
            <div className="relative inline-block text-left">
              <button
                className="bg-[#FF4E50] mb-4 px-10 py-4 ease-in hover:text-red-600 hover:border-red-500 border-4 rounded-2xl transition-all ease-linear duration-200 border-gray-100 font-bold hover:scale-105 text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedDoctor ? doctors.find((doc) => doc._id === selectedDoctor).name : 'Select assistant'}
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 max-h-48 overflow-y-auto" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor._id}
                        className="dropdown-item block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => {
                          setSelectedDoctor(doctor._id);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {doctor.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <h3>Submit Your Comments</h3>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Enter your comments here"
                className="form-control"
              ></textarea>
              <br />
              <button
                type="submit"
                className="bg-[#FF4E50] hover:skew-x-3 px-10 py-4 ease-in hover:rounded-full hover:text-red-600 hover:border-red-500 border-4 rounded-2xl transition-all ease-linear duration-200 border-gray-100 font-bold hover:scale-105 text-white"
              >
                Submit Comment
              </button>
            </form>
          </div>
        ) : (
          <p>Select an appointment to see details</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default HospitalForm;
