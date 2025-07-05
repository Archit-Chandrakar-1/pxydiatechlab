import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/pyxidia-techlab-logo.png" 
              alt="Pyxidia Techlab" 
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              A forward-thinking technology company specializing in innovative solutions that bridge the gap between cutting-edge technology and business success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Compliance Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contract Staffing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Project Based Hiring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Payroll Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Direct Staffing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">IT Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">BPO Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-red-400 transition-colors">About Us</a></li>
              <li><a href="#clients" className="text-gray-400 hover:text-red-400 transition-colors">Our Clients</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-red-400 transition-colors">Careers</a></li>
              <li><a href="#blogs" className="text-gray-400 hover:text-red-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-red-400" />
                <span className="text-gray-400">info@pyxidiatechlab.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-red-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-red-400" />
                <span className="text-gray-400">123 Tech Street, Innovation District</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pyxidia Techlab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;