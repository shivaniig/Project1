import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Labs.css'; // Import the CSS file

const Labs = () => {
  const [appointments, setAppointments] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [pastRecords, setPastRecords] = useState([]);
  const [assistants, setAssistants] = useState([]);
  const [currentView, setCurrentView] = useState('appointments');

  useEffect(() => {
    // Fetch all the necessary data from the server
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/labAppointments');
        if (Array.isArray(response.data)) {
          setAppointments(response.data);
        } else {
          console.error('Unexpected response format for appointments:', response.data);
          setAppointments([]);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setAppointments([]); // Ensure appointments is an array even on error
      }
    };

    const fetchTimeSlots = async () => {
      try {
        const response = await axios.get('/api/labTimeSlots');
        if (Array.isArray(response.data)) {
          setTimeSlots(response.data);
        } else {
          console.error('Unexpected response format for time slots:', response.data);
          setTimeSlots([]);
        }
      } catch (error) {
        console.error('Error fetching time slots:', error);
        setTimeSlots([]); // Ensure timeSlots is an array even on error
      }
    };

    const fetchPastRecords = async () => {
      try {
        const response = await axios.get('/api/labPastRecords');
        if (Array.isArray(response.data)) {
          setPastRecords(response.data);
        } else {
          console.error('Unexpected response format for past records:', response.data);
          setPastRecords([]);
        }
      } catch (error) {
        console.error('Error fetching past records:', error);
        setPastRecords([]); // Ensure pastRecords is an array even on error
      }
    };

    const fetchAssistants = async () => {
      try {
        const response = await axios.get('/api/labAssistants');
        if (Array.isArray(response.data)) {
          setAssistants(response.data);
        } else {
          console.error('Unexpected response format for assistants:', response.data);
          setAssistants([]);
        }
      } catch (error) {
        console.error('Error fetching assistants:', error);
        setAssistants([]); // Ensure assistants is an array even on error
      }
    };

    fetchAppointments();
    fetchTimeSlots();
    fetchPastRecords();
    fetchAssistants();
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
      case 'timeSlots':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Time Slots</h2>
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
      case 'assistants':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Assistants List</h2>
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
      default:
        return null;
    }
  };

  return (
    <div className="container d-flex">
      <div className="sidebar">
        <ul className="list-group">
          <li className="list-group-item" onClick={() => setCurrentView('appointments')}>
            Appointments
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('timeSlots')}>
            Time Slots
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('pastRecords')}>
            Past Records
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('assistants')}>
            Assistants List
          </li>
        </ul>
      </div>
      <div className="content" style={{ flex: 1 }}>
        {renderList()}
      </div>
    </div>
  );
};

export default Labs;
