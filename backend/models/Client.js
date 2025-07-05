const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
    maxlength: [100, 'Client name cannot exceed 100 characters']
  },
  logoURL: {
    type: String,
    required: [true, 'Client logo URL is required'],
    trim: true
  },
  websiteURL: {
    type: String,
    required: [true, 'Client website URL is required'],
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid website URL']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  industry: {
    type: String,
    trim: true,
    maxlength: [100, 'Industry cannot exceed 100 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  addedBy: {
    type: String,
    default: 'Admin'
  }
}, {
  timestamps: true
});

// Index for better query performance
clientSchema.index({ name: 1 });
clientSchema.index({ isActive: 1, createdAt: -1 });
clientSchema.index({ featured: 1, isActive: 1 });

module.exports = mongoose.model('Client', clientSchema);