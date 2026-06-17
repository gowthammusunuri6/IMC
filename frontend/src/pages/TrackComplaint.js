import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/TrackComplaint.css';

function TrackComplaint() {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  const fetchComplaints = useCallback(async () => {
    setLoading(true);
    try {
      const url = filter === 'all' 
        ? '/api/complaints' 
        : `/api/complaints?status=${filter}`;
      const response = await axios.get(url);
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  const getStatusBadge = (status) => {
    const statusColors = {
      'pending': '#FFB347',
      'in-progress': '#87CEEB',
      'resolved': '#90EE90'
    };
    return (
      <span className="status-badge" style={{ backgroundColor: statusColors[status] }}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getComplaintTypeIcon = (type) => {
    const icons = {
      'waste': '🗑️',
      'water': '💧',
      'drainage': '🌊'
    };
    return icons[type] || '📋';
  };

  return (
    <div className="track-container">
      <div className="track-header">
        <h2>Track Your Complaints</h2>
        <p>Monitor the status of your submitted complaints</p>
      </div>

      <div className="filter-section">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Complaints
        </button>
        <button 
          className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
          onClick={() => setFilter('in-progress')}
        >
          In Progress
        </button>
        <button 
          className={`filter-btn ${filter === 'resolved' ? 'active' : ''}`}
          onClick={() => setFilter('resolved')}
        >
          Resolved
        </button>
      </div>

      {loading ? (
        <div className="loading">Loading complaints...</div>
      ) : complaints.length === 0 ? (
        <div className="no-complaints">
          <p>No complaints found</p>
        </div>
      ) : (
        <div className="complaints-list">
          {complaints.map((complaint) => (
            <div key={complaint._id} className="complaint-item">
              <div className="complaint-header">
                <span className="complaint-type">
                  {getComplaintTypeIcon(complaint.complaintType)} {complaint.complaintType.toUpperCase()}
                </span>
                {getStatusBadge(complaint.status)}
              </div>
              <div className="complaint-number">
                Complaint #: {complaint.complaintNumber}
              </div>
              <div className="complaint-body">
                <p><strong>Location:</strong> {complaint.location}</p>
                <p><strong>Description:</strong> {complaint.description}</p>
                <p><strong>Filed:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
              </div>
              {complaint.photo && (
                <div className="complaint-photo">
                  <img src={`/uploads/${complaint.photo}`} alt="Complaint" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrackComplaint;
