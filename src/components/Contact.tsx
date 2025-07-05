import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In Touch.
          </h2>
          <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
            READY TO TRANSFORM YOUR BUSINESS?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">info@pyxidiatechlab.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Office</h3>
                  <p className="text-gray-300">123 Tech Street, Innovation District</p>
                </div>
              </div>
            </div>
            
            <div className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">Why Choose Pyxidia Techlab?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Expert team with industry experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Customized solutions for your needs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Proven track record of success</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 group-hover:text-white mb-2 transition-colors duration-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 group-hover:border-white/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 group-hover:bg-white/10"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 group-hover:text-white mb-2 transition-colors duration-300">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 group-hover:border-white/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 group-hover:bg-white/10"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 group-hover:text-white mb-2 transition-colors duration-300">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 group-hover:border-white/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 group-hover:bg-white/10"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 group-hover:text-white mb-2 transition-colors duration-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 group-hover:border-white/30 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400 group-hover:bg-white/10"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-white text-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-red-600"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;