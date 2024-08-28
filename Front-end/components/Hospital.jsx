import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HospitalForm'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hospital = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [pastRecords, setPastRecords] = useState([]);
  const [doctorSchedule, setDoctorSchedule] = useState([]);
  const [currentView, setCurrentView] = useState('appointments');
  const [showDoctorForm, setShowDoctorForm] = useState(false);
  const [newDoctor, setNewDoctor] = useState({ name: '', type: '', details: '' });

  useEffect(() => {
    const fetchData = async (url, setState) => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found in local storage');
        }

        const response = await axios.get(url, {
          headers: {
            'x-access-token': token
          }
        });

        if (Array.isArray(response.data)) {
          setState(response.data);
        } else {
          console.error(`Unexpected response format for ${url}:`, response.data);
          setState([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        setState([]);
      }
    };

    fetchData('http://localhost:8080/api/v1/data', setAppointments);
    fetchData('http://localhost:8080/api/v1/data', setPatients);
    fetchData('http://localhost:8080/api/v1/pastRecords', setPastRecords);
    fetchData('http://localhost:8080/api/v1/doctors', setDoctorSchedule);
  }, []);

  const handleDoctorFormChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const handleDoctorFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found in local storage');
      }

      await axios.post('http://localhost:8080/api/v1/doctors', newDoctor, {
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/json'
        }
      });

      toast.success('Doctor added successfully!');
      setNewDoctor({ name: '', type: '', details: '' });
      setShowDoctorForm(false);
      fetchDoctorSchedule(); // Update the doctor list after adding
    } catch (error) {
      console.error('Error adding doctor:', error.response ? error.response.data : error.message);
      toast.error('Failed to add doctor');
    }
  };

  const fetchDoctorSchedule = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found in local storage');
      }

      const response = await axios.get('http://localhost:8080/api/v1/doctors', {
        headers: {
          'x-access-token': token
        }
      });

      if (Array.isArray(response.data)) {
        setDoctorSchedule(response.data);
      } else {
        console.error('Unexpected response format for doctor schedule:', response.data);
        setDoctorSchedule([]);
      }
    } catch (error) {
      console.error('Error fetching doctor schedule:', error.message);
      setDoctorSchedule([]);
    }
  };

  const renderList = () => {
    switch (currentView) {
      case 'appointments':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Appointment List</h2>
            <ul className="list-group">
              {appointments.length > 0 ? (
                appointments.map(appointment => (
                  <Link
                    key={appointment.id}
                    to={`/HospitalForm`} 
                    className="list-group-item"
                  >
                    {appointment.date} - {appointment.time} - {appointment.name}
                  </Link>
                ))
              ) : (
                <li className="list-group-item">No appointments available</li>
              )}
            </ul>
          </section>
        );
      case 'patients':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Patient Details</h2>
            <ul className="list-group">
              {patients.length > 0 ? (
                patients.map(patient => (
                  <li key={patient.id} className="list-group-item">
                    {patient.name}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No patient details available</li>
              )}
            </ul>
          </section>
        );
      case 'pastRecords':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Past Records</h2>
            <ul className="list-group">
              {pastRecords.length > 0 ? (
                pastRecords.map(record => (
                  <li key={record.id} className="list-group-item">
                    {record.patientName} - {record.date} - {record.d}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No past records available</li>
              )}
            </ul>
          </section>
        );
      case 'doctorSchedule':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Doctor Schedule</h2>
            <ul className="list-group">
              {doctorSchedule.length > 0 ? (
                doctorSchedule.map(schedule => (
                  <li key={schedule.id} className="list-group-item">
                    {schedule.name}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No doctor schedules available</li>
              )}
            </ul>
            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowDoctorForm(!showDoctorForm)}
            >
              {showDoctorForm ? 'Hide Form' : 'Add Doctor'}
            </button>
            {showDoctorForm && (
              <form onSubmit={handleDoctorFormSubmit} className="mt-4">
                <div className="form-group mb-2">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newDoctor.name}
                    onChange={handleDoctorFormChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="type">Type:</label>
                  <input
                    type="text"
                    id="type"
                    name="type"
                    value={newDoctor.type}
                    onChange={handleDoctorFormChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="details">Details:</label>
                  <textarea
                    id="details"
                    name="details"
                    value={newDoctor.details}
                    onChange={handleDoctorFormChange}
                    className="form-control"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-success mt-2">
                  Submit
                </button>
              </form>
            )}
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container d-flex">
      <div className="sidebar">
        <ul className="list-group">
          <li
            className={`list-group-item ${currentView === 'appointments' ? 'active' : ''}`}
            onClick={() => setCurrentView('appointments')}
          >
            Appointments
          </li>
          <li
            className={`list-group-item ${currentView === 'patients' ? 'active' : ''}`}
            onClick={() => setCurrentView('patients')}
          >
            Patients
          </li>
          <li
            className={`list-group-item ${currentView === 'pastRecords' ? 'active' : ''}`}
            onClick={() => setCurrentView('pastRecords')}
          >
            Past Records
          </li>
          <li
            className={`list-group-item ${currentView === 'doctorSchedule' ? 'active' : ''}`}
            onClick={() => setCurrentView('doctorSchedule')}
          >
            Doctor Schedule
          </li>
        </ul>
      </div>
      <div className="content" style={{ flex: 1 }}>
        {renderList()}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hospital;
