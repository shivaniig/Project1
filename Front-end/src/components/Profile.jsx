import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ token }) => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Fetch the user profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };

    fetchProfile();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/profile', profile, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error updating profile data', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {editMode ? (
        <div>
          <label>
            Name:
            <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={profile.phone} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={profile.address} onChange={handleInputChange} />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
