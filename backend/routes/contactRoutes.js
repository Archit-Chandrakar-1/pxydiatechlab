const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  getContactStats
} = require('../controllers/contactController');

// @route   GET /api/contacts/stats
// @desc    Get contact statistics
// @access  Private (Admin)
router.get('/stats', getContactStats);

// @route   GET /api/contacts
// @desc    Get all contacts
// @access  Private (Admin)
router.get('/', getAllContacts);

// @route   GET /api/contacts/:id
// @desc    Get single contact
// @access  Private (Admin)
router.get('/:id', getContactById);

// @route   POST /api/contacts
// @desc    Create new contact
// @access  Public
router.post('/', createContact);

// @route   PUT /api/contacts/:id
// @desc    Update contact
// @access  Private (Admin)
router.put('/:id', updateContact);

// @route   DELETE /api/contacts/:id
// @desc    Delete contact
// @access  Private (Admin)
router.delete('/:id', deleteContact);

module.exports = router;