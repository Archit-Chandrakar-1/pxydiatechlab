import React from 'react';
import { Calendar, User, ArrowRight, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business Process Automation',
      excerpt: 'Exploring how artificial intelligence is revolutionizing business operations and creating new opportunities for efficiency and growth.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Remote Staffing: Best Practices for 2024',
      excerpt: 'A comprehensive guide to building and managing remote teams effectively in the modern workplace.',
      author: 'Michael Rodriguez',
      date: '2024-12-10',
      category: 'Staffing',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Compliance in the Digital Age: What You Need to Know',
      excerpt: 'Understanding regulatory requirements and compliance strategies for modern businesses operating in digital environments.',
      author: 'Jennifer Park',
      date: '2024-12-05',
      category: 'Compliance',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'IT Consulting Trends: Emerging Technologies to Watch',
      excerpt: 'Discover the latest trends in IT consulting and how emerging technologies are shaping the industry landscape.',
      author: 'David Kim',
      date: '2024-11-28',
      category: 'IT Consulting',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Maximizing ROI with Strategic BPO Partnerships',
      excerpt: 'Learn how to leverage business process outsourcing to drive growth and improve operational efficiency.',
      author: 'Lisa Thompson',
      date: '2024-11-20',
      category: 'BPO Services',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'The Evolution of Payroll Technology',
      excerpt: 'How modern payroll systems are transforming HR operations and improving employee experiences.',
      author: 'Robert Chang',
      date: '2024-11-15',
      category: 'Payroll',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'AI & Technology', 'Staffing', 'Compliance', 'IT Consulting', 'BPO Services', 'Payroll'];

  const scrollLeft = () => {
    const container = document.getElementById('blogs-container');
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('blogs-container');
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="blogs" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Latest Insights.
          </h2>
          <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
            STAY UPDATED WITH TRENDS AND BEST PRACTICES
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-red-600 text-white' 
                  : 'bg-transparent border border-gray-800 text-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Blog Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Blog Container */}
          <div
            id="blogs-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-transparent border border-gray-800 rounded-xl overflow-hidden hover:bg-red-600 hover:border-red-600 transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-red-400 group-hover:text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-300">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 group-hover:text-white/80 mb-3 transition-colors duration-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-white transition-colors duration-300">{post.title}</h3>
                  <p className="text-gray-300 group-hover:text-white/90 text-sm mb-4 line-clamp-3 transition-colors duration-300">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-gray-400 group-hover:text-white/80 transition-colors duration-300" />
                      <span className="text-gray-400 group-hover:text-white/80 text-sm transition-colors duration-300">{post.author}</span>
                    </div>
                    <button className="flex items-center gap-1 text-red-400 group-hover:text-white text-sm font-medium transition-all duration-200 group-hover:gap-2">
                      Read
                      <ArrowRight size={14} className="transition-all duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-white text-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;