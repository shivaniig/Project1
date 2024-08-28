import React from 'react';
import Header from '../components/Header';
import './Dashboard.css'; // Import the scoped CSS

function PatientDashboard() {
  return (
    <>
      <Header dashboardType="patient" />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <div className="dashboard-section">
            <h2>Welcome to the Patient Dashboard</h2>
            <p>Manage your appointments, view test reports, and update your profile.</p>
          </div>
          <div className="dashboard-section">
            <h3>Appointments</h3>
            <p>View and manage your upcoming medical appointments.</p>
            {/* Add a table or list to display appointments */}
          </div>
          <div className="dashboard-section">
            <h3>My Reports</h3>
            <p>Access and view your blood test reports and medical history.</p>
            {/* Add a table or list to display reports */}
          </div>
          <div className="dashboard-section">
            <h3>Profile</h3>
            <p>Update your personal details and contact information.</p>
            {/* Add a form or details section to update profile */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;
