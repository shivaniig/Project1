import React, { useState, useEffect } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status on component mount
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, []);

  const handleLogout = () => {
    // Clear token from storage
    localStorage.removeItem('token');
    // Update state to reflect the logout
    setIsLoggedIn(false);
    // Optionally redirect to home page or login page
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <header className="rainbow-header header-default header-transparent header-sticky">
      <div className="container position-relative">
        <div className="row align-items-center row--0">
          <div className="col-lg-2 col-md-6 col-6">
            <div className="logo">
              <a href="/">
                <img className="logo-light" src="src/assets/images/logo/Blood Donation Logo.png" alt="ChatBot Logo" width={150} height={200} />
              </a>
            </div>
          </div>

          <div className="col-lg-8 d-none d-lg-block">
            <nav className="mainmenu-nav d-none d-lg-flex justify-content-center">
              <ul className="mainmenu">
                <li><a href="/" className="hover:text-black">Home</a></li>
                <li className="has-dropdown has-menu-child-item position-relative">
                  <a href="#">Tools <i className="fa-regular fa-chevron-down"></i></a>
                  <ul className="submenu">
                    <li><a href="/appointment"><span>Appointment with Doctor</span></a></li>
                    <li><a href="/chatbot"><span>Analyze Your Reports With Chat Bot</span></a></li>
                  </ul>
                </li>
                <li><a href="/userguide">How to use</a></li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-2 col-md-6 col-6 position-static">
        
            <div className="header-right">
              {/* Start Header Btn */}
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
               
               
              {/* End Header Btn */}
              

              {/* Start Mobile-Menu-Bar */}
              <div className="mobile-menu-bar ml--5 d-flex justify-content-end d-lg-none">
                <div className="hamberger">
                  <button className="hamberger-button">
                    <i className="fa-sharp fa-regular fa-bars"></i>
                  </button>
                </div>
              </div>
              {/* End Mobile-Menu-Bar */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
