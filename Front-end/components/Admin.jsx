import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'; // Import the CSS file

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [pastRecords, setPastRecords] = useState([]);
  const [doctorSchedule, setDoctorSchedule] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentView, setCurrentView] = useState('appointments');

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const [appointmentsResponse, patientsResponse, pastRecordsResponse, doctorScheduleResponse] = await Promise.all([
          axios.get('/api/appointments'),
          axios.get('/api/patients'),
          axios.get('/api/pastRecords'),
          axios.get('/api/doctorSchedule'),
        ]);

        if (Array.isArray(appointmentsResponse.data)) setAppointments(appointmentsResponse.data);
        if (Array.isArray(patientsResponse.data)) setPatients(patientsResponse.data);
        if (Array.isArray(pastRecordsResponse.data)) setPastRecords(pastRecordsResponse.data);
        if (Array.isArray(doctorScheduleResponse.data)) setDoctorSchedule(doctorScheduleResponse.data);

      } catch (error) {
        console.error('Error fetching hospital data:', error);
        setAppointments([]);
        setPatients([]);
        setPastRecords([]);
        setDoctorSchedule([]);
      }
    };

    const fetchLabData = async () => {
      try {
        const [timeSlotsResponse, assistantsResponse] = await Promise.all([
          axios.get('/api/labTimeSlots'),
          axios.get('/api/labAssistants'),
        ]);

        if (Array.isArray(timeSlotsResponse.data)) setTimeSlots(timeSlotsResponse.data);
        if (Array.isArray(assistantsResponse.data)) setAssistants(assistantsResponse.data);

      } catch (error) {
        console.error('Error fetching lab data:', error);
        setTimeSlots([]);
        setAssistants([]);
      }
    };

    const fetchUserList = async () => {
      try {
        const response = await axios.get('/api/users');
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Unexpected response format for users:', response.data);
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
      }
    };

    fetchHospitalData();
    fetchLabData();
    fetchUserList();
  }, []);

  const renderList = () => {
    switch (currentView) {
      case 'appointments':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Hospital Appointment List</h2>
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
            <h2 className="text-center mb-4">Hospital Patient Details</h2>
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
            <h2 className="text-center mb-4">Hospital Past Records</h2>
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
      case 'timeSlots':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Lab Time Slots</h2>
            <ul className="list-group">
              {timeSlots.length > 0 ? (
                timeSlots.map(slot => (
                  <li key={slot.id} className="list-group-item">
                    {slot.date} - {slot.startTime} to {slot.endTime}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No time slots available</li>
              )}
            </ul>
          </section>
        );
      case 'assistants':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Lab Assistants List</h2>
            <ul className="list-group">
              {assistants.length > 0 ? (
                assistants.map(assistant => (
                  <li key={assistant.id} className="list-group-item">
                    {assistant.name} - {assistant.position}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No assistants available</li>
              )}
            </ul>
          </section>
        );
      case 'users':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">User List</h2>
            <ul className="list-group">
              {users.length > 0 ? (
                users.map(user => (
                  <li key={user.id} className="list-group-item">
                    {user.name} - {user.email} - {user.role}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No users available</li>
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
          <li className="list-group-item" onClick={() => setCurrentView('appointments')}>
            Hospital Appointments
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('patients')}>
            Hospital Patients
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('pastRecords')}>
            Hospital Past Records
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('doctorSchedule')}>
            Doctor Schedule
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('timeSlots')}>
            Lab Time Slots
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('assistants')}>
            Lab Assistants
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('users')}>
            User List
          </li>
        </ul>
      </div>
      <div className="content" style={{ flex: 1 }}>
        {renderList()}
      </div>
    </div>
  );
};

export default Admin;
