import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h1>Welcome to IMC</h1>
          <p>Indian Municipality Complaint Management System</p>
        </div>

        <div className="home-options">
          <Link to="/complaint" className="option-card complaint-card">
            <div className="option-icon">📋</div>
            <h2>File a Complaint</h2>
            <p>Report issues related to waste, water, or drainage problems</p>
            <button className="option-btn">Get Started →</button>
          </Link>

          <Link to="/track" className="option-card track-card">
            <div className="option-icon">🔍</div>
            <h2>Track Complaint</h2>
            <p>Monitor the status of your submitted complaints</p>
            <button className="option-btn">View Status →</button>
          </Link>
        </div>

        <div className="home-features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h3>Quick Submission</h3>
            <p>File complaints in seconds</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <h3>Real-time Tracking</h3>
            <p>Monitor progress instantly</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <h3>Secure & Private</h3>
            <p>Your data is protected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
