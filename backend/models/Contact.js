const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
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
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  jobTitle: {
    type: String,
    trim: true,
    maxlength: [100, 'Job title cannot exceed 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  subject: {
    type: String,
    trim: true,
    maxlength: [200, 'Subject cannot exceed 200 characters']
  },
  serviceInterest: {
    type: String,
    enum: [
      'Compliance Services',
      'Contract Staffing',
      'Project Based Hiring',
      'Payroll Services',
      'Direct Staffing',
      'IT Consulting Services',
      'BPO Services',
      'General Inquiry'
    ]
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Urgent'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Responded', 'Closed'],
    default: 'New'
  },
  source: {
    type: String,
    enum: ['Website', 'Email', 'Phone', 'Social Media', 'Referral', 'Other'],
    default: 'Website'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  respondedAt: Date,
  respondedBy: String,
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ serviceInterest: 1 });
contactSchema.index({ company: 1 });

module.exports = mongoose.model('Contact', contactSchema);