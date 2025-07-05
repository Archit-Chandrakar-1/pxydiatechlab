import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

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
              <a href="https://www.linkedin.com/company/pyxidiatechlab/" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/Pyxidiatech" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/pyxidia_techlab/" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@pyxidiatech" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube size={20} />
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
                <span className="text-gray-400">business@pyxidiatech.com</span>
                <span className="text-gray-400">career@pyxidiatech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-red-400" />
                <span className="text-gray-400"> 0771- 65094</span>
                <span className="text-gray-400">+91 93997 54876</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-red-400" />
                <span className="text-gray-400">Second Floor,Tower, B, ZUDIO, Katoratalab Nirmal, 32, Shailendra Nagar, Raipur, Chhattisgarh 492001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
           © PYXIDIA TECHLAB LLP. All Rights Reserved.


          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;