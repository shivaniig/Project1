import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import Login from './components/Login';
import Register from './components/Register';
import PatientDashboard from '../components/PatientDashboard';
import Hospital from './components/Hospital';
import Labs from './components/Labs';
import Admin from './components/Admin';
import Chatbot from './components/Chatbot';
import UserGuide from './components/UserGuide';
import ProfileUpload from './components/Profile';
import DataDisplay from './components/DataDisplay';
import HospitalForm from './components/HospitalForm';
import DoctorForm from './components/DoctorForm';
import Loader from './components/Loader';

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

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return loading ? (
    <Loader />
  ) : (
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
        <Route path="/patientdashboard" element={<PatientDashboard token={token} />} />
        <Route path="/profileupload" element={<ProfileUpload />} />
        <Route path="/DataDisplay" element={<DataDisplay token={token} />} />
        <Route path="/HospitalForm" element={<HospitalForm token={token} />} />
        <Route path="/DoctorForm" element={<DoctorForm token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
