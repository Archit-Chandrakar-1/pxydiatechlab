const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Job title cannot exceed 100 characters']
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true,
    maxlength: [50, 'Department cannot exceed 50 characters']
  },
  mode: {
    type: String,
    enum: ['Remote', 'On-site', 'Hybrid'],
    default: 'On-site'
  },
  type: {
    type: String,
    required: [true, 'Job type is required'],
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'],
    default: 'Full-time'
  },
  experience: {
    type: String,
    required: [true, 'Experience requirement is required'],
    trim: true,
    maxlength: [50, 'Experience requirement cannot exceed 50 characters']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  description: {
    type: String,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  requirements: [{
    type: String,
    maxlength: [200, 'Each requirement cannot exceed 200 characters']
  }],
  benefits: [{
    type: String,
    maxlength: [200, 'Each benefit cannot exceed 200 characters']
  }],
  salary: {
    min: {
      type: Number,
      min: [0, 'Minimum salary cannot be negative']
    },
    max: {
      type: Number,
      min: [0, 'Maximum salary cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD',
      maxlength: [3, 'Currency code cannot exceed 3 characters']
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  applicationDeadline: {
    type: Date
  },
  postedBy: {
    type: String,
    default: 'Admin'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for application count
jobSchema.virtual('applicationCount', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'jobId',
  count: true
});

// Index for better search performance
jobSchema.index({ title: 'text', department: 'text', location: 'text' });
jobSchema.index({ isActive: 1, createdAt: -1 });

module.exports = mongoose.model('Job', jobSchema);