import React, { useState } from 'react';
import './Profile.css';

const ProfileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement the file upload logic here
      console.log('Uploading file:', selectedFile);
      // Reset the file input and preview
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="profile-upload-container">
      <h2 className="text-center mb-4">Upload Profile Picture</h2>
      <div className="profile-upload-content">
        {previewUrl ? (
          <div className="preview-container">
            <img src={previewUrl} alt="Profile Preview" className="profile-preview" />
            <button onClick={handleRemoveImage} className="btn btn-danger mt-2">Remove</button>
          </div>
        ) : (
          <div className="file-input-container">
            <input type="file" onChange={handleFileChange} accept="image/*" className="file-input" />
          </div>
        )}
      </div>
      {selectedFile && (
        <button onClick={handleUpload} className="btn btn-primary mt-4">Upload</button>
      )}
    </div>
  );
};

export default ProfileUpload;
