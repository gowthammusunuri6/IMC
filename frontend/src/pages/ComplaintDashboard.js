import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

function ComplaintDashboard() {
  const complaintTypes = [
    {
      id: 'waste',
      name: '🗑️ Waste Complaint',
      description: 'Report issues related to waste management, garbage collection',
      color: '#FF6B6B'
    },
    {
      id: 'water',
      name: '💧 Water Complaint',
      description: 'Report water supply issues, leaks, water quality problems',
      color: '#4ECDC4'
    },
    {
      id: 'drainage',
      name: '🌊 Drainage Complaint',
      description: 'Report drainage issues, blocked pipes, flooding problems',
      color: '#45B7D1'
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>File a Complaint</h2>
        <p>Select the type of complaint you want to file</p>
      </div>

      <div className="complaint-grid">
        {complaintTypes.map((type) => (
          <Link to={`/submit/${type.id}`} key={type.id} className="complaint-card" style={{ borderLeftColor: type.color }}>
            <div className="card-content">
              <h3>{type.name}</h3>
              <p>{type.description}</p>
              <button className="submit-btn" style={{ backgroundColor: type.color }}>
                File Complaint →
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ComplaintDashboard;
