import React from 'react';
import { Award, Zap, Globe, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '25+', label: 'Countries' },
    { icon: Zap, value: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-red-900/20 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Pyxidia Techlab</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We are a forward-thinking technology company specializing in innovative solutions that bridge the gap between cutting-edge technology and business success.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our mission is to empower businesses with AI-driven solutions, comprehensive staffing services, and strategic technology consulting that drives measurable growth and operational excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Industry-leading expertise in technology solutions</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Comprehensive staffing and consulting services</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-300">Commitment to innovation and excellence</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/70 transition-all duration-300 transform hover:scale-105 border border-red-900/30"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;