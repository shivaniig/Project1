import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Index from '../components/Index';
import Header from '../components/Header';
import AppointmentForm from '../components/AppointmentForm'; // Assuming you have the AppointmentForm component
import Login from '../components/Login'; // Import Login component
import Register from '../components/Register'; // Import Register component
import PatientDashboard from '../components/PatientDashboard';
import './assets/css/vendor/bootstrap.min.css';
import './assets/css/plugins/fontawesome-all.min.css';
import './assets/css/plugins/feature.css';
import './assets/css/plugins/animation.css';
import './assets/css/plugins/slick.css';
import './assets/css/plugins/slick-theme.css';
import './assets/css/plugins/bootstrap-select.min.css';
import './assets/css/plugins/prism.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hospital from '../components/Hospital';
import Labs from '../components/Labs';
import Admin from '../components/Admin';
import Chatbot from '../components/Chatbot';
import UserGuide from '../components/UserGuide';
import ProfileUpload from '../components/Profile';
import DataDisplay from '../components/DataDisplat';
import HospitalForm from '../components/HospitalForm'
import DoctorForm from '../components/DoctorForm';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/appointment" element={<AppointmentForm token={token} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/userguide" element={<UserGuide />} />
        <Route path="/patientdashboard" element={<PatientDashboard token={token} /> } />
        <Route path="/profileupload" element={<ProfileUpload />} />
        <Route path="/DataDisplay" element={<DataDisplay />}  token={token} />
        <Route path="/HospitalForm" element={<HospitalForm />}   />
        <Route path="/DoctorForm" element={<DoctorForm />}   />


      </Routes>
    </Router>
  );
};

export default App;
