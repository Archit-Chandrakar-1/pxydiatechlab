const Joi = require('joi');

// Job validation schema
const validateJob = (job) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    department: Joi.string().min(2).max(50).required(),
    mode: Joi.string().valid('Remote', 'On-site', 'Hybrid').required(),
    type: Joi.string().valid('Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance').required(),
    experience: Joi.string().min(1).max(50).required(),
    location: Joi.string().min(2).max(100).required(),
    description: Joi.string().max(2000),
    requirements: Joi.array().items(Joi.string().max(200)),
    benefits: Joi.array().items(Joi.string().max(200)),
    salary: Joi.object({
      min: Joi.number().min(0),
      max: Joi.number().min(0),
      currency: Joi.string().max(3).default('USD')
    }),
    isActive: Joi.boolean().default(true),
    applicationDeadline: Joi.date(),
    postedBy: Joi.string().default('Admin')
  });

  return schema.validate(job);
};

// Application validation schema
const validateApplication = (application) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(20),
    resumeURL: Joi.string().uri().required(),
    coverLetter: Joi.string().max(2000),
    message: Joi.string().max(1000),
    jobId: Joi.string().required(),
    experience: Joi.object({
      years: Joi.number().min(0).max(50),
      description: Joi.string().max(1000)
    }),
    skills: Joi.array().items(Joi.string().max(50)),
    education: Joi.object({
      degree: Joi.string(),
      institution: Joi.string(),
      year: Joi.number()
    })
  });

  return schema.validate(application);
};

// Contact validation schema
const validateContact = (contact) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().max(20),
    company: Joi.string().max(100),
    jobTitle: Joi.string().max(100),
    message: Joi.string().min(10).max(2000).required(),
    subject: Joi.string().max(200),
    serviceInterest: Joi.string().valid(
      'Compliance Services',
      'Contract Staffing',
      'Project Based Hiring',
      'Payroll Services',
      'Direct Staffing',
      'IT Consulting Services',
      'BPO Services',
      'General Inquiry'
    ),
    priority: Joi.string().valid('Low', 'Medium', 'High', 'Urgent').default('Medium'),
    source: Joi.string().valid('Website', 'Email', 'Phone', 'Social Media', 'Referral', 'Other').default('Website')
  });

  return schema.validate(contact);
};

// Blog validation schema
const validateBlog = (blog) => {
  const schema = Joi.object({
    title: Joi.string().min(5).max(200).required(),
    slug: Joi.string(),
    content: Joi.string().min(50).max(50000).required(),
    excerpt: Joi.string().max(500),
    imageURL: Joi.string().uri(),
    author: Joi.object({
      name: Joi.string().min(2).max(100).required(),
      email: Joi.string().email(),
      bio: Joi.string().max(500)
    }).required(),
    category: Joi.string().valid(
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
    ).required(),
    tags: Joi.array().items(Joi.string().max(30)),
    status: Joi.string().valid('Draft', 'Published', 'Archived').default('Draft'),
    featured: Joi.boolean().default(false),
    scheduledAt: Joi.date(),
    seo: Joi.object({
      metaTitle: Joi.string().max(60),
      metaDescription: Joi.string().max(160),
      keywords: Joi.array().items(Joi.string().max(50))
    })
  });

  return schema.validate(blog);
};

// Client validation schema
const validateClient = (client) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    logoURL: Joi.string().uri().required(),
    websiteURL: Joi.string().uri().required(),
    description: Joi.string().max(500),
    industry: Joi.string().max(100),
    isActive: Joi.boolean().default(true),
    featured: Joi.boolean().default(false),
    addedBy: Joi.string().default('Admin')
  });

  return schema.validate(client);
};

// Team validation schema
const validateTeam = (team) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    position: Joi.string().min(2).max(100).required(),
    photoURL: Joi.string().uri().required(),
    linkedinURL: Joi.string().uri().pattern(/^https?:\/\/(www\.)?linkedin\.com\/.*/).required().messages({
      'string.pattern.base': 'Please enter a valid LinkedIn URL'
    }),
    bio: Joi.string().max(500),
    isActive: Joi.boolean().default(true),
    order: Joi.number().default(0),
    addedBy: Joi.string().default('Admin')
  });

  return schema.validate(team);
};

module.exports = {
  validateJob,
  validateApplication,
  validateContact,
  validateBlog,
  validateClient,
  validateTeam
};