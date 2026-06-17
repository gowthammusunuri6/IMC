# MPC Municipality Complaint - Getting Started

## Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas cloud instance)
- **Git** (optional)

## Step-by-Step Setup

### 1. Backend Setup

Open a terminal in the project root:

```bash
cd backend
npm install
```

**Configure Environment Variables:**

Create a `.env` file in the `backend` folder:

```
MONGODB_URI=mongodb://localhost:27017/mpc_municipality
PORT=5000
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
Replace MONGODB_URI with:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mpc_municipality?retryWrites=true&w=majority
```

**Start the Backend Server:**

```bash
npm start
```

✅ Server will run on `http://localhost:5000`

### 2. Frontend Setup

Open a NEW terminal (keep backend running):

```bash
cd frontend
npm install
```

**Start the Frontend Development Server:**

```bash
npm start
```

✅ Application will open at `http://localhost:3000`

## How to Use the Application

### Filing a Complaint

1. Click on the **"📋 Complaint"** tab in the navigation bar
2. Select one of three complaint types:
   - 🗑️ **Waste Complaint** - For garbage and waste management issues
   - 💧 **Water Complaint** - For water supply problems
   - 🌊 **Drainage Complaint** - For drainage and flooding issues
3. Fill in the complaint form with:
   - **Location** - Where the issue is located
   - **Description** - Detailed description of the issue
   - **Photo** - Upload an image (optional, max 5MB)
   - **Name** - Your name (optional)
   - **Email & Phone** - Contact information (optional)
4. Click **"Submit Complaint"**
5. Your complaint number will be displayed

### Tracking a Complaint

1. Click on the **"🔍 Track Complaint"** tab
2. View all your submitted complaints
3. Filter complaints by status:
   - **Pending** - Complaint received
   - **In Progress** - Being handled
   - **Resolved** - Issue fixed
4. Click on any complaint to see full details

## Project Structure

```
MPC/
├── backend/
│   ├── controllers/
│   │   └── complaintController.js    # Business logic
│   ├── models/
│   │   └── Complaint.js              # Database schema
│   ├── routes/
│   │   └── complaints.js             # API routes
│   ├── uploads/                      # Photo storage
│   ├── server.js                     # Express server
│   ├── package.json
│   └── .env                          # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/               # React components
│   │   ├── pages/
│   │   │   ├── ComplaintDashboard.js
│   │   │   ├── TrackComplaint.js
│   │   │   └── ComplaintForm.js
│   │   ├── styles/                   # CSS files
│   │   ├── App.js                    # Main app component
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
│
└── README.md
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Create Complaint
```
POST /complaints
Content-Type: multipart/form-data

Parameters:
- complaintType: 'waste' | 'water' | 'drainage'
- location: string (required)
- description: string (required)
- photo: file (optional)
- submittedBy: string (optional)
- email: string (optional)
- phone: string (optional)

Response:
{
  "message": "Complaint submitted successfully",
  "complaint": {
    "_id": "...",
    "complaintNumber": "MPC-1234567890-1",
    "status": "pending",
    "createdAt": "..."
  }
}
```

#### Get All Complaints
```
GET /complaints?type=waste&status=pending

Query Parameters:
- type: 'waste' | 'water' | 'drainage' (optional)
- status: 'pending' | 'in-progress' | 'resolved' (optional)

Response: Array of complaint objects
```

#### Get Complaint by ID
```
GET /complaints/:id
Response: Single complaint object
```

#### Update Complaint Status
```
PUT /complaints/:id
Body: { "status": "in-progress" | "resolved" }
Response: Updated complaint object
```

#### Delete Complaint
```
DELETE /complaints/:id
Response: { "message": "Complaint deleted successfully" }
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally: `mongod`
- Or use MongoDB Atlas with correct credentials
- Check MONGODB_URI in .env file

### Port Already in Use
```bash
# Change PORT in .env file
PORT=5001
```

### Frontend Can't Connect to Backend
- Verify backend is running on port 5000
- Check proxy setting in frontend/package.json
- Clear browser cache (Ctrl+Shift+Delete)

### Photo Upload Not Working
- Check `backend/uploads/` folder exists
- Ensure file size is less than 5MB
- Only image files are allowed (jpg, png, gif, webp)

## Development Commands

**Backend:**
```bash
npm start       # Start server
npm run dev     # Start with nodemon (auto-restart)
```

**Frontend:**
```bash
npm start       # Start dev server
npm run build   # Build for production
npm test        # Run tests
```

## Production Deployment

### Build Frontend
```bash
cd frontend
npm run build
```

### Start Backend (Production)
```bash
cd backend
NODE_ENV=production npm start
```

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check browser console for errors
4. Check server logs in terminal

---

**Happy Complaining!** 🎉
