import React from 'react';
import { ArrowRight, Zap, Cpu, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-lg rotate-45 shadow-lg"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <div className="w-6 h-6 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-slow">
          <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Future-Ready
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Tech Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                A Dependable Professional Partnership
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-black transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Zap className="text-red-400" size={24} />
                <span className="text-gray-300">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-red-500" size={24} />
                <span className="text-gray-300">Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="text-red-600" size={24} />
                <span className="text-gray-300">AI-Powered</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* 3D Robot-inspired Animation */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="robot-container">
                {/* Robot Head */}
                <div className="robot-head bg-gradient-to-r from-red-600 to-red-800 rounded-full w-32 h-32 relative mx-auto mb-4 shadow-2xl animate-pulse">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-red-500 to-red-700 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-spin-slow">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-inner"></div>
                    </div>
                  </div>
                  {/* Robot Eyes */}
                  <div className="absolute top-8 left-6 w-4 h-4 bg-red-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-4 h-4 bg-red-300 rounded-full animate-pulse delay-300"></div>
                </div>
                
                {/* Robot Body */}
                <div className="robot-body bg-gradient-to-b from-red-700 to-red-900 w-24 h-40 rounded-lg mx-auto relative shadow-2xl">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg animate-pulse delay-500">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full animate-spin"></div>
                  </div>
                </div>
                
                {/* Robot Arms */}
                <div className="absolute top-32 -left-8 w-6 h-20 bg-gradient-to-b from-red-600 to-red-800 rounded-full animate-wave"></div>
                <div className="absolute top-32 -right-8 w-6 h-20 bg-gradient-to-b from-red-600 to-red-800 rounded-full animate-wave-reverse"></div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-red-600 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;