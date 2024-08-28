import React from 'react';
import Header from './components/Header';
import './Dashboard.css';

function HospitalDashboard() {
  return (
    <>
      <Header dashboardType="hospital" />
      <div className="hospital-dashboard-container">
        <div className="dashboard-section">
          <h2>Welcome to the Hospital Dashboard</h2>
          <p>Here you can manage appointments, view test reports, and update your profile.</p>
        </div>
        <div className="dashboard-section">
          <h3>Appointments</h3>
          <p>View and manage upcoming patient appointments.</p>
          {/* Add a table or list to display appointments */}
        </div>
        <div className="dashboard-section">
          <h3>Test Reports</h3>
          <p>Access and manage patient test reports.</p>
          {/* Add a table or list to display test reports */}
        </div>
        <div className="dashboard-section">
          <h3>Profile</h3>
          <p>Update hospital information and contact details.</p>
          {/* Add a form or details section to update profile */}
        </div>
      </div>
    </>
  );
}

export default HospitalDashboard;
