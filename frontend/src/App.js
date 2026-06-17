import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComplaintDashboard from './pages/ComplaintDashboard';
import TrackComplaint from './pages/TrackComplaint';
import ComplaintForm from './pages/ComplaintForm';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [complaints, setComplaints] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-brand">
            <span className="logo">🏛️</span>
            <h1>IMC Indian Municipality Complaint</h1>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/complaint" element={<ComplaintDashboard />} />
            <Route path="/track" element={<TrackComplaint complaints={complaints} />} />
            <Route path="/submit/:type" element={<ComplaintForm onSubmit={setComplaints} />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 IMC Indian Municipality Complaint. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
