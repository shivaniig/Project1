import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Assuming you have a separate CSS file for custom styles
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import jwt_decode from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Admin'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData); 

    try {
      const response = await fetch('http://localhost:8080/api/v1/Auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // localStorage.setItem('token', data.token);
        // toast.success('Login successful!');
        // const decodedToken = jwt_decode(data.token);
        // const userRole = decodedToken.role;
        // if (userRole !== 'admin') {
        //   return <Redirect to="/unauthorized" />;
        }
      
        return <div>Admin Content</div>;

        setTimeout(() => {
          // Navigate based on role
          switch (formData.role) {
            case 'Admin':
              navigate('/admin');
              break;
            case 'Hospital':
              navigate('/hospital');
              break;
            case 'Labs':
              navigate('/labs');
              break;
            case 'Patient':
              navigate('/PatientDashboard');
              break;
            default:
              navigate('/');
              break;
          }
          // Reload the page after navigation
          window.location.reload();
        }, 2000); // Delay of 2 seconds
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  return (
    <div className="container mt-5" style={{ paddingTop: '100px' }}>
      <ToastContainer />
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="role" className="text-black">Role</label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                style={{ border: '1px solid #ced4da' }}
              >
                <option value="Admin">Admin</option>
                <option value="Hospital">Hospital</option>
                <option value="Labs">Labs</option>
                <option value="Patient">Patient</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-[#FF4E50] hover:skew-x-3 px-10 py-4 ease-in hover:rounded-full hover:text-red-600 hover:border-red-500 border-4 rounded-2xl transition-all ease-linear duration-200 border-gray-100 font-bold hover:scale-105 text-white"
            >
              Log in
            </button>
          </form>
          <div className="mt-3 text-center">
            <p className='text-black'>Don't have an account? <Link to="/register" style={{ color: '#FF4E50' }}>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
