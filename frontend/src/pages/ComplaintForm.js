import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ComplaintForm.css';

function ComplaintForm() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    complaintType: type || 'waste',
    location: '',
    description: '',
    submittedBy: '',
    email: '',
    phone: '',
    photo: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      photo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const data = new FormData();
      data.append('complaintType', formData.complaintType);
      data.append('location', formData.location);
      data.append('description', formData.description);
      data.append('submittedBy', formData.submittedBy || 'Anonymous');
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      if (formData.photo) {
        data.append('photo', formData.photo);
      }

      const response = await axios.post('/api/complaints', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage(`✅ Complaint submitted successfully! Your complaint number: ${response.data.complaint.complaintNumber}`);
      setFormData({
        complaintType: type || 'waste',
        location: '',
        description: '',
        submittedBy: '',
        email: '',
        phone: '',
        photo: null
      });
      
      setTimeout(() => {
        navigate('/track');
      }, 2000);
    } catch (error) {
      setMessage(`❌ Error: ${error.response?.data?.error || 'Failed to submit complaint'}`);
    } finally {
      setLoading(false);
    }
  };

  const complaintTypeNames = {
    'waste': '🗑️ Waste Complaint',
    'water': '💧 Water Complaint',
    'drainage': '🌊 Drainage Complaint'
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{complaintTypeNames[formData.complaintType] || 'Submit Complaint'}</h2>
        <p>Please provide detailed information about your complaint</p>
      </div>

      {message && (
        <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="complaint-form">
        <div className="form-group">
          <label htmlFor="complaintType">Complaint Type *</label>
          <select 
            id="complaintType"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleInputChange}
            required
          >
            <option value="waste">Waste Complaint</option>
            <option value="water">Water Complaint</option>
            <option value="drainage">Drainage Complaint</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter the location of the complaint"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a detailed description of your complaint"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload Photo (Optional)</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
          {formData.photo && (
            <p className="file-name">Selected: {formData.photo.name}</p>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="submittedBy">Your Name</label>
            <input
              type="text"
              id="submittedBy"
              name="submittedBy"
              placeholder="Enter your name (optional)"
              value={formData.submittedBy}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Complaint'}
        </button>
      </form>
    </div>
  );
}

export default ComplaintForm;
