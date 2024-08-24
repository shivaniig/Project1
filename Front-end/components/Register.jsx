import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Assuming you have a separate CSS file for custom styles

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'Patient', // Default role
    name: '',
    labs: '',
    hospital: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const [selectedRole, setSelectedRole] = useState('Patient');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setFormData({ ...formData, role });
  };

  const validateForm = () => {
    const { email, password, address, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      toast.error('Invalid email format.');
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error('Phone number must be 10 digits.');
      return false;
    }
    if (address.trim() === '') {
      toast.error('Address cannot be empty.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:8080/api/v1/Auth/register', formData);
      if (response.data.success) {
        toast.success('Registration successful!');
        localStorage.setItem('token', response.data.token); // Save the token if needed
        switch (selectedRole) {
          case 'Patient':
            navigate('/appointment');
            break;
          case 'Admin':
            navigate('/admin');
            break;
          case 'Labs':
            navigate('/labs');
            break;
          case 'Hospital':
            navigate('/hospital');
            break;
          default:
            navigate('/');
            break;
        }
      } else {
        toast.error(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '100px' }}>
      <div className="card mx-auto" style={{ maxWidth: '800px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Register</h2>

          <div className="text-center mb-4">
            <button
              className={`btn ${selectedRole === 'Patient' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
              onClick={() => handleRoleChange('Patient')}
            >
              Patient
            </button>
            <button
              className={`btn ${selectedRole === 'Admin' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
              onClick={() => handleRoleChange('Admin')}
            >
              Admin
            </button>
            <button
              className={`btn ${selectedRole === 'Labs' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
              onClick={() => handleRoleChange('Labs')}
            >
              Labs
            </button>
            <button
              className={`btn ${selectedRole === 'Hospital' ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
              onClick={() => handleRoleChange('Hospital')}
            >
              Hospital
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {selectedRole === 'Admin' && (
              <div className="form-group">
                <label htmlFor="name" className="text-black">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ border: '1px solid #ced4da' }}
                />
              </div>
            )}

            {selectedRole === 'Labs' && (
              <div className="form-group">
                <label htmlFor="labs" className="text-black">Labs</label>
                <input
                  type="text"
                  className="form-control"
                  id="labs"
                  name="labs"
                  value={formData.labs}
                  onChange={handleChange}
                  required
                  style={{ border: '1px solid #ced4da' }}
                />
              </div>
            )}

            {selectedRole === 'Hospital' && (
              <div className="form-group">
                <label htmlFor="hospital" className="text-black">Hospital</label>
                <input
                  type="text"
                  className="form-control"
                  id="hospital"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  required
                  style={{ border: '1px solid #ced4da' }}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="text-black">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ border: '1px solid #ced4da' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-black">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ border: '1px solid #ced4da' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="text-black">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ border: '1px solid #ced4da' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-black">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ border: '1px solid #ced4da' }}
              />
            </div>
            <button
              type="submit"
              className="bg-[#FF4E50] hover:skew-x-3 px-10 py-4 ease-in hover:rounded-full hover:text-red-600 hover:border-red-500  border-4 rounded-2xl  transition-all ease-linear duration-200 border-gray-100  font-bold hover:scale-105 text-white"
            >
              Register
            </button>
          </form>
          <div className="mt-3 text-center">
            <p className='text-black'>Already have an account? <Link to="/login" style={{ color: '#FF4E50' }}>Login</Link></p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
