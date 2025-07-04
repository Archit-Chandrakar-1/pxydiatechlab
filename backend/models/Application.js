const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Applicant name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  resumeURL: {
    type: String,
    required: [true, 'Resume URL is required'],
    trim: true
  },
  coverLetter: {
    type: String,
    maxlength: [2000, 'Cover letter cannot exceed 2000 characters']
  },
  message: {
    type: String,
    maxlength: [1000, 'Message cannot exceed 1000 characters']
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: [true, 'Job ID is required']
  },
  status: {
    type: String,
    enum: ['Pending', 'Reviewed', 'Shortlisted', 'Interviewed', 'Rejected', 'Hired'],
    default: 'Pending'
  },
  experience: {
    years: {
      type: Number,
      min: [0, 'Experience years cannot be negative'],
      max: [50, 'Experience years cannot exceed 50']
    },
    description: {
      type: String,
      maxlength: [1000, 'Experience description cannot exceed 1000 characters']
    }
  },
  skills: [{
    type: String,
    maxlength: [50, 'Each skill cannot exceed 50 characters']
  }],
  education: {
    degree: String,
    institution: String,
    year: Number
  },
  appliedAt: {
    type: Date,
    default: Date.now
  },
  reviewedAt: Date,
  reviewedBy: String,
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual to populate job details
applicationSchema.virtual('job', {
  ref: 'Job',
  localField: 'jobId',
  foreignField: '_id',
  justOne: true
});

// Index for better query performance
applicationSchema.index({ jobId: 1, createdAt: -1 });
applicationSchema.index({ email: 1, jobId: 1 }, { unique: true }); // Prevent duplicate applications
applicationSchema.index({ status: 1 });

module.exports = mongoose.model('Application', applicationSchema);