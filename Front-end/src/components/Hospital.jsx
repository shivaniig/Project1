import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hospital.css'; 

const Hospital = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [pastRecords, setPastRecords] = useState([]);
  const [doctorSchedule, setDoctorSchedule] = useState([]);
  const [currentView, setCurrentView] = useState('appointments');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
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

    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/patients');
        if (Array.isArray(response.data)) {
          setPatients(response.data);
        } else {
          console.error('Unexpected response format for patients:', response.data);
          setPatients([]);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
        setPatients([]);
      }
    };

    const fetchPastRecords = async () => {
      try {
        const response = await axios.get('/api/pastRecords');
        if (Array.isArray(response.data)) {
          setPastRecords(response.data);
        } else {
          console.error('Unexpected response format for past records:', response.data);
          setPastRecords([]);
        }
      } catch (error) {
        console.error('Error fetching past records:', error);
        setPastRecords([]);
      }
    };

    const fetchDoctorSchedule = async () => {
      try {
        const response = await axios.get('/api/doctorSchedule');
        if (Array.isArray(response.data)) {
          setDoctorSchedule(response.data);
        } else {
          console.error('Unexpected response format for doctor schedule:', response.data);
          setDoctorSchedule([]);
        }
      } catch (error) {
        console.error('Error fetching doctor schedule:', error);
        setDoctorSchedule([]);
      }
    };

    fetchAppointments();
    fetchPatients();
    fetchPastRecords();
    fetchDoctorSchedule();
  }, []);

  const renderList = () => {
    switch (currentView) {
      case 'appointments':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Appointment List</h2>
            <ul className="list-group">
              {appointments.length > 0 ? (
                appointments.map(appointment => (
                  <li key={appointment.id} className="list-group-item">
                    {appointment.date} - {appointment.time} - {appointment.patientName}
                  </li>
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
                    {patient.name} - {patient.age} - {patient.condition}
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
                    {record.patientName} - {record.date} - {record.details}
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
                    {schedule.doctorName} - {schedule.date} - {schedule.time}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No doctor schedules available</li>
              )}
            </ul>
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
    </div>
  );
};

export default Hospital;
