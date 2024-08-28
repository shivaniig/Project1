import React, { useState, useEffect } from 'react';

function Header({ dashboardType }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const getMenuItems = () => {
    console.log('Dashboard Type:', dashboardType); // Check what dashboardType is being passed
    switch (dashboardType) {
      case 'patient':
        return (
          <>
            <li><a href="/patient/dashboard">Dashboard</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/reports">My Reports</a></li>
            <li><a href="/profile">Profile</a></li>
          </>
        );
      case 'lab':
        return (
          <>
            <li><a href="/lab/dashboard">Dashboard</a></li>
            <li><a href="/test-results">Test Results</a></li>
            <li><a href="/patient-requests">Patient Requests</a></li>
            <li><a href="/profile">Profile</a></li>
          </>
        );
      case 'hospital':
        return (
          <>
            <li><a href="/hospital/dashboard">Dashboard</a></li>
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/test-reports">Test Reports</a></li>
            <li><a href="/profile">Profile</a></li>
          </>
        );
      case 'admin':
        return (
          <>
            <li><a href="/admin/dashboard">Dashboard</a></li>
            <li><a href="/user-management">User Management</a></li>
            <li><a href="/reports">Reports</a></li>
            <li><a href="/settings">Settings</a></li>
          </>
        );
      default:
        return (
          <>
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li className="has-dropdown has-menu-child-item position-relative">
              <a href="#">Tools <i className="fa-regular fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="/Appointment"><span>Appointment with Doctor</span></a></li>
                <li><a href="/chatbot"><span>Analyze Your Reports With Chat Bot</span></a></li>
              </ul>
            </li>
            <li><a href="/userguide">How to use</a></li>
          </>
        );
    }
  };

  return (
    <header className="header-default header-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-2 col-md-6 col-6">
            <div className="logo">
              <a href="/">
                <img className="logo-light" src="src/assets/images/logo/Blood Donation Logo.png" alt="Logo" width={150} height={200} />
              </a>
            </div>
          </div>

          <div className="col-lg-8 d-none d-lg-block">
            <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
              <ul className="mainmenu">
                {getMenuItems()}
              </ul>
            </nav>
          </div>

          <div className="col-lg-2 col-md-6 col-6 position-static">
            <div className="header-right">
              <div className="header-btn hover:scale-105 transition-all duration-500">
                {isLoggedIn ? (
                  <button className="rainbow-gradient-btn" onClick={handleLogout}>
                    <span className="hover:bg-white hover:text-[#FF4E50] transition-all duration-500">Logout</span>
                  </button>
                ) : (
                  <a className="rainbow-gradient-btn" href="/register" target="_blank" rel="noopener noreferrer">
                    <span className="hover:bg-white hover:text-[#FF4E50] transition-all duration-500">Get Started</span>
                  </a>
                )}
              </div>

              <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="fa-sharp fa-regular fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
