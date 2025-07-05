const express = require('express');
const router = express.Router();
const {
  getAllTeamMembers,
  getTeamMemberById,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
  getTeamStats
} = require('../controllers/teamController');

// @route   GET /api/team/stats
// @desc    Get team statistics
// @access  Private (Admin)
router.get('/stats', getTeamStats);

// @route   GET /api/team
// @desc    Get all team members
// @access  Public
router.get('/', getAllTeamMembers);

// @route   GET /api/team/:id
// @desc    Get single team member
// @access  Public
router.get('/:id', getTeamMemberById);

// @route   POST /api/team
// @desc    Create new team member
// @access  Private (Admin)
router.post('/', createTeamMember);

// @route   PUT /api/team/:id
// @desc    Update team member
// @access  Private (Admin)
router.put('/:id', updateTeamMember);

// @route   DELETE /api/team/:id
// @desc    Delete team member
// @access  Private (Admin)
router.delete('/:id', deleteTeamMember);

module.exports = router;