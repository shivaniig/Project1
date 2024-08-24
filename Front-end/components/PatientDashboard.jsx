import React, { useState } from 'react';
import './PatientDashboard.css';
import AppointmentForm from './AppointmentForm'; // Import the AppointmentForm component
import Chatbot from './Chatbot';

const PatientDashboard = ({ token }) => {
  const [currentView, setCurrentView] = useState('notifications');

  const demoNotifications = [
    { id: 1, message: 'Your appointment is scheduled for tomorrow at 10 AM.' },
    { id: 2, message: 'You have a new message from Dr. Smith.' },
  ];

  const demoFeedback = [
    { id: 1, providerName: 'Dr. John Doe', comment: 'Great experience!' },
    { id: 2, providerName: 'Dr. Jane Smith', comment: 'Very helpful and attentive.' },
  ];

  const demoTestResults = [
    { id: 1, testName: 'Blood Test', date: '2024-07-15', result: 'Normal' },
    { id: 2, testName: 'X-Ray', date: '2024-07-20', result: 'No issues found' },
  ];

  const renderList = () => {
    switch (currentView) {
      case 'Appointment': // Corrected spelling
        return (
          <section className="card-content  mt-0">
            <AppointmentForm token={token} />
          </section>
        );
      case 'notifications':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Contact Notifications</h2>
            <ul className="list-group">
              {demoNotifications.length > 0 ? (
                demoNotifications.map(notification => (
                  <li key={notification.id} className="list-group-item">
                    {notification.message}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No notifications available</li>
              )}
            </ul>
          </section>
        );
      case 'feedback':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Provider Feedback</h2>
            <ul className="list-group">
              {demoFeedback.length > 0 ? (
                demoFeedback.map(item => (
                  <li key={item.id} className="list-group-item">
                    {item.providerName} - {item.comment}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No feedback available</li>
              )}
            </ul>
          </section>
        );
      case 'testResults':
        return (
          <section className="card-content">
            <h2 className="text-center mb-4">Test Results</h2>
            <ul className="list-group">
              {demoTestResults.length > 0 ? (
                demoTestResults.map(result => (
                  <li key={result.id} className="list-group-item">
                    {result.testName} - {result.date} - {result.result}
                  </li>
                ))
              ) : (
                <li className="list-group-item">No test results available</li>
              )}
            </ul>
          </section>
        );
      case 'chatBot':
        return (
          <section className="pt-0 mt-0">
           <Chatbot />
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
        <li className="list-group-item" onClick={() => setCurrentView('Appointment')}>
            Appointment Form
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('notifications')}>
            Contact Notifications
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('feedback')}>
            Provider Feedback
          </li>
          <li className="list-group-item" onClick={() => setCurrentView('testResults')}>
            Test Results
          </li>
          
          <li className="list-group-item" onClick={() => setCurrentView('chatBot')}>
            Chat Bot
          </li>
        </ul>
      </div>
      <div className="content" style={{ flex: 1 }}>
        {renderList()}
      </div>
    </div>
  );
};

export default PatientDashboard;
