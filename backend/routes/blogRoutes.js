const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogStats
} = require('../controllers/blogController');

// @route   GET /api/blogs/stats
// @desc    Get blog statistics
// @access  Private (Admin)
router.get('/stats', getBlogStats);

// @route   GET /api/blogs
// @desc    Get all blogs
// @access  Public
router.get('/', getAllBlogs);

// @route   GET /api/blogs/:id
// @desc    Get single blog
// @access  Public
router.get('/:id', getBlogById);

// @route   POST /api/blogs
// @desc    Create new blog
// @access  Private (Admin)
router.post('/', createBlog);

// @route   PUT /api/blogs/:id
// @desc    Update blog
// @access  Private (Admin)
router.put('/:id', updateBlog);

// @route   DELETE /api/blogs/:id
// @desc    Delete blog
// @access  Private (Admin)
router.delete('/:id', deleteBlog);

module.exports = router;