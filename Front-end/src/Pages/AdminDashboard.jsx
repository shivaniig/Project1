import React from 'react';
import Header from '../components/Header';
import './Dashboard.css'; // Import the scoped CSS

function AdminDashboard() {
  return (
    <>
      <Header dashboardType="admin" />
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          <div className="dashboard-section">
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Manage users, view system reports, and configure settings from here.</p>
          </div>
          <div className="dashboard-section">
            <h3>User Management</h3>
            <p>View and manage users across the system.</p>
            {/* Add a table or list to display users */}
          </div>
          <div className="dashboard-section">
            <h3>Reports</h3>
            <p>Access and analyze various system reports.</p>
            {/* Add a table or list to display reports */}
          </div>
          <div className="dashboard-section">
            <h3>Settings</h3>
            <p>Configure system-wide settings and preferences.</p>
            {/* Add settings management options */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
