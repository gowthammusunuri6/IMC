# MPC Municipality Complaint - Development Guide

## Project Overview
MPC Municipality Complaint is a full-stack web application for managing municipal complaints across waste, water, and drainage categories.

## Application Features
- **Complaint Dashboard**: Browse and file new complaints
- **Track Your Complaint Dashboard**: Monitor complaint status
- **Complaint Categories**: Waste, Water, Drainage complaints
- **Photo Upload**: File attachments for complaints
- **Real-time Tracking**: Follow complaint progress

## Project Structure
- `/frontend` - React-based UI
- `/backend` - Node.js/Express API server
- `/backend/uploads` - Photo storage

## Tech Stack
- **Frontend**: React, Axios, CSS3
- **Backend**: Node.js, Express, Multer
- **Database**: MongoDB
- **File Upload**: Multer

## Development Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation Steps

#### Backend Setup
```bash
cd backend
npm install
```

#### Frontend Setup
```bash
cd frontend
npm install
```

### Environment Configuration
Create `.env` file in backend directory:
```
MONGODB_URI=mongodb://localhost:27017/mpc
PORT=5000
NODE_ENV=development
```

## Running the Application

### Start Backend Server
```bash
cd backend
npm start
```
Server runs on `http://localhost:5000`

### Start Frontend Development Server
```bash
cd frontend
npm start
```
Application opens at `http://localhost:3000`

## API Endpoints

### Complaints
- `POST /api/complaints` - Submit new complaint
- `GET /api/complaints` - Get all complaints
- `GET /api/complaints/:id` - Get complaint details
- `PUT /api/complaints/:id` - Update complaint status

### File Upload
- Photo uploads handled via multipart form data

## Build & Deployment
```bash
# Frontend build
cd frontend
npm run build

# Backend production
cd backend
npm start
```
