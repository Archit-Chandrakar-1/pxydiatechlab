const express = require('express');
const router = express.Router();
const {
  getAllApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats
} = require('../controllers/applicationController');

// @route   GET /api/applications/stats
// @desc    Get application statistics
// @access  Private (Admin)
router.get('/stats', getApplicationStats);

// @route   GET /api/applications
// @desc    Get all applications
// @access  Private (Admin)
router.get('/', getAllApplications);

// @route   GET /api/applications/:id
// @desc    Get single application
// @access  Private (Admin)
router.get('/:id', getApplicationById);

// @route   POST /api/applications
// @desc    Create new application
// @access  Public
router.post('/', createApplication);

// @route   PUT /api/applications/:id
// @desc    Update application
// @access  Private (Admin)
router.put('/:id', updateApplication);

// @route   DELETE /api/applications/:id
// @desc    Delete application
// @access  Private (Admin)
router.delete('/:id', deleteApplication);

module.exports = router;