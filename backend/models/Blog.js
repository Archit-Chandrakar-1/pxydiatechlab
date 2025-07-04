const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Blog title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Blog content is required'],
    maxlength: [50000, 'Content cannot exceed 50000 characters']
  },
  excerpt: {
    type: String,
    maxlength: [500, 'Excerpt cannot exceed 500 characters']
  },
  imageURL: {
    type: String,
    trim: true
  },
  author: {
    name: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
      maxlength: [100, 'Author name cannot exceed 100 characters']
    },
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    bio: {
      type: String,
      maxlength: [500, 'Author bio cannot exceed 500 characters']
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'AI & Technology',
      'Staffing',
      'Compliance',
      'IT Consulting',
      'BPO Services',
      'Payroll',
      'Industry News',
      'Best Practices',
      'Case Studies',
      'Company Updates'
    ]
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Each tag cannot exceed 30 characters']
  }],
  status: {
    type: String,
    enum: ['Draft', 'Published', 'Archived'],
    default: 'Draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  readTime: {
    type: Number, // in minutes
    min: [1, 'Read time must be at least 1 minute']
  },
  views: {
    type: Number,
    default: 0,
    min: [0, 'Views cannot be negative']
  },
  likes: {
    type: Number,
    default: 0,
    min: [0, 'Likes cannot be negative']
  },
  publishedAt: Date,
  scheduledAt: Date,
  seo: {
    metaTitle: {
      type: String,
      maxlength: [60, 'Meta title cannot exceed 60 characters']
    },
    metaDescription: {
      type: String,
      maxlength: [160, 'Meta description cannot exceed 160 characters']
    },
    keywords: [{
      type: String,
      maxlength: [50, 'Each keyword cannot exceed 50 characters']
    }]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Auto-generate slug from title
blogSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Auto-generate excerpt if not provided
  if (this.isModified('content') && !this.excerpt) {
    this.excerpt = this.content.substring(0, 200) + '...';
  }
  
  // Calculate read time based on content length
  if (this.isModified('content')) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  
  // Set publishedAt when status changes to Published
  if (this.isModified('status') && this.status === 'Published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Index for better search and query performance
blogSchema.index({ title: 'text', content: 'text', excerpt: 'text' });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ slug: 1 });
blogSchema.index({ featured: 1, publishedAt: -1 });

module.exports = mongoose.model('Blog', blogSchema);