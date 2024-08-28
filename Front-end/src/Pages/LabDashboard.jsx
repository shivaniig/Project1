import React from 'react';
import Header from '../components/Header';
import './Dashboard.css';

function LabDashboard() {
  return (
    <>
      <Header dashboardType="lab" />
      <div className="lab-dashboard-container">
        <div className="dashboard-section">
          <h2>Welcome to the Lab Dashboard</h2>
          <p>View and manage test results, and handle patient requests.</p>
        </div>
        <div className="dashboard-section">
          <h3>Test Results</h3>
          <p>Review and manage laboratory test results.</p>
          {/* Add a table or list to display test results */}
        </div>
        <div className="dashboard-section">
          <h3>Patient Requests</h3>
          <p>Handle patient requests for lab tests and information.</p>
          {/* Add a table or list to display patient requests */}
        </div>
        <div className="dashboard-section">
          <h3>Profile</h3>
          <p>Update lab information and contact details.</p>
          {/* Add a form or details section to update profile */}
        </div>
      </div>
    </>
  );
}

export default LabDashboard;
