# MPC Municipality Complaint

A comprehensive web application for municipal complaint management and tracking.

## Features

### Dashboards
1. **Complaint Dashboard** - Submit new complaints
2. **Track Your Complaint Dashboard** - Monitor complaint status

### Complaint Categories
- Waste Complaint
- Water Complaint
- Drainage Complaint

### Complaint Details
- Location (GPS/Text)
- Photo Upload
- Description
- Status Tracking
- Timestamp

## Quick Start

1. **Install Dependencies**
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

2. **Configure Environment**
   - Create `.env` in backend folder
   - Set MongoDB connection string

3. **Run Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm start

   # Terminal 2 - Frontend
   cd frontend && npm start
   ```

4. **Access Application**
   - Open browser to `http://localhost:3000`

## Project Structure

```
MPC/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
├── backend/           # Express API
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API endpoints
│   ├── controllers/   # Business logic
│   ├── uploads/       # Photo storage
│   └── package.json
└── README.md
```

## Documentation
See [Development Guide](./.github/copilot-instructions.md) for detailed setup and API information.
