const express = require('express');
const router = express.Router();
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  getClientStats
} = require('../controllers/clientController');

// @route   GET /api/clients/stats
// @desc    Get client statistics
// @access  Private (Admin)
router.get('/stats', getClientStats);

// @route   GET /api/clients
// @desc    Get all clients
// @access  Public
router.get('/', getAllClients);

// @route   GET /api/clients/:id
// @desc    Get single client
// @access  Public
router.get('/:id', getClientById);

// @route   POST /api/clients
// @desc    Create new client
// @access  Private (Admin)
router.post('/', createClient);

// @route   PUT /api/clients/:id
// @desc    Update client
// @access  Private (Admin)
router.put('/:id', updateClient);

// @route   DELETE /api/clients/:id
// @desc    Delete client
// @access  Private (Admin)
router.delete('/:id', deleteClient);

module.exports = router;