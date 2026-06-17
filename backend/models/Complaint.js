const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
  {
    complaintType: {
      type: String,
      enum: ['waste', 'water', 'drainage'],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      default: null
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'resolved'],
      default: 'pending'
    },
    complaintNumber: {
      type: String,
      unique: true
    },
    submittedBy: {
      type: String,
      default: 'Anonymous'
    },
    email: {
      type: String,
      default: null
    },
    phone: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

// Generate unique complaint number
complaintSchema.pre('save', async function(next) {
  if (!this.complaintNumber) {
    const count = await mongoose.model('Complaint').countDocuments();
    this.complaintNumber = `MPC-${Date.now()}-${count + 1}`;
  }
  next();
});

module.exports = mongoose.model('Complaint', complaintSchema);
