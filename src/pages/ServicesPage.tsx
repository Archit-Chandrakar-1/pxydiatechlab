import React, { useState } from 'react';
import { Shield, Users, Briefcase, Calculator, Target, Monitor, Headphones, ArrowRight } from 'lucide-react';
import ServiceModal from '../components/ServiceModal';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Shield,
      title: 'Compliance Services',
      description: 'Comprehensive regulatory compliance solutions to ensure your business meets all industry standards and requirements.',
      featured: true
    },
    { 
      icon: Users,
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions with skilled professionals to meet your project demands and business cycles.',
      featured: false
    },
    {
      icon: Briefcase,
      title: 'Project Based Hiring',
      description: 'Specialized talent acquisition for specific projects, ensuring the right skills for your unique requirements.',
      featured: false
    },
    {
      icon: Calculator,
      title: 'Payroll Services',
      description: 'Complete payroll management solutions including processing, tax compliance, and employee benefits administration.',
      featured: false
    },
    {
      icon: Target,
      title: 'Direct Staffing',
      description: 'Lateral and volume hiring solutions to build your permanent workforce with top-tier talent.',
      featured: false
    },
    {
      icon: Monitor,
      title: 'IT Consulting Services',
      description: 'Strategic technology consulting to optimize your IT infrastructure and drive digital transformation.',
      featured: false
    },
    {
      icon: Headphones,
      title: 'BPO Services',
      description: 'Business process outsourcing solutions to streamline operations and reduce costs while maintaining quality.',
      featured: false
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <div className="min-h-screen bg-black pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-16">
            <div className="w-16 h-1 bg-red-500 mb-6"></div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Services.
            </h1>
            <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
              WORKING WITH YOU, RATHER THAN FOR YOU
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className={`group relative border-r border-b border-gray-800 p-8 h-64 flex flex-col justify-between transition-all duration-500 hover:bg-red-600 cursor-pointer ${
                  service.featured ? 'bg-red-600' : 'bg-transparent'
                }`}
              >
                {/* Service Icon */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                    service.featured ? 'text-white' : 'text-red-500 group-hover:text-white'
                  }`}>
                    <service.icon size={32} />
                  </div>
                  <ArrowRight 
                    className={`transition-all duration-300 transform group-hover:translate-x-1 ${
                      service.featured ? 'text-white' : 'text-gray-600 group-hover:text-white'
                    }`} 
                    size={24} 
                  />
                </div>
                
                {/* Service Title */}
                <div>
                  <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${
                    service.featured ? 'text-white' : 'text-white group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                
                {/* Hover Description */}
                <div className="absolute inset-0 bg-red-600 p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-white">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ServicesPage;