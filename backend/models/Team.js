const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Team member name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
    maxlength: [100, 'Position cannot exceed 100 characters']
  },
  photoURL: {
    type: String,
    required: [true, 'Photo URL is required'],
    trim: true
  },
  linkedinURL: {
    type: String,
    required: [true, 'LinkedIn URL is required'],
    trim: true,
    match: [/^https?:\/\/(www\.)?linkedin\.com\/.*/, 'Please enter a valid LinkedIn URL']
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  addedBy: {
    type: String,
    default: 'Admin'
  }
}, {
  timestamps: true
});

// Index for better query performance
teamSchema.index({ name: 1 });
teamSchema.index({ isActive: 1, order: 1 });

module.exports = mongoose.model('Team', teamSchema);