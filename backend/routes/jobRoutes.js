const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  getJobStats
} = require('../controllers/jobController');

// @route   GET /api/jobs/stats
// @desc    Get job statistics
// @access  Private (Admin)
router.get('/stats', getJobStats);

// @route   GET /api/jobs
// @desc    Get all jobs
// @access  Public
router.get('/', getAllJobs);

// @route   GET /api/jobs/:id
// @desc    Get single job
// @access  Public
router.get('/:id', getJobById);

// @route   POST /api/jobs
// @desc    Create new job
// @access  Private (Admin)
router.post('/', createJob);

// @route   PUT /api/jobs/:id
// @desc    Update job
// @access  Private (Admin)
router.put('/:id', updateJob);

// @route   DELETE /api/jobs/:id
// @desc    Delete job
// @access  Private (Admin)
router.delete('/:id', deleteJob);

module.exports = router;