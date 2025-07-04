import React from 'react';
import { X, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  featured?: boolean;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  // Detailed service information
  const serviceDetails: Record<string, any> = {
    'Compliance Services': {
      fullDescription: 'Our comprehensive compliance services ensure your business meets all regulatory requirements while maintaining operational efficiency. We provide end-to-end compliance solutions that protect your organization from legal risks and regulatory penalties.',
      keyFeatures: [
        'Regulatory Assessment & Gap Analysis',
        'Policy Development & Implementation',
        'Compliance Training & Education',
        'Audit Support & Documentation',
        'Risk Management & Mitigation',
        'Ongoing Monitoring & Reporting'
      ],
      benefits: [
        'Reduced Legal Risk',
        'Enhanced Reputation',
        'Operational Efficiency',
        'Cost Savings',
        'Peace of Mind'
      ],
      industries: ['Healthcare', 'Financial Services', 'Manufacturing', 'Technology', 'Retail'],
      stats: {
        experience: '10+ Years',
        clients: '200+ Companies',
        success: '99% Compliance Rate'
      }
    },
    'Contract Staffing': {
      fullDescription: 'Flexible workforce solutions designed to meet your dynamic business needs. Our contract staffing services provide skilled professionals who can quickly integrate into your team and deliver results from day one.',
      keyFeatures: [
        'Rapid Talent Deployment',
        'Skill-Matched Professionals',
        'Flexible Contract Terms',
        'Performance Monitoring',
        'Seamless Integration',
        'Cost-Effective Solutions'
      ],
      benefits: [
        'Reduced Hiring Time',
        'Lower Overhead Costs',
        'Access to Specialized Skills',
        'Scalable Workforce',
        'Risk Mitigation'
      ],
      industries: ['IT & Software', 'Engineering', 'Healthcare', 'Finance', 'Marketing'],
      stats: {
        experience: '8+ Years',
        clients: '150+ Projects',
        success: '95% Retention Rate'
      }
    },
    'Project Based Hiring': {
      fullDescription: 'Specialized talent acquisition for specific projects requiring unique skill sets. We understand that every project has distinct requirements and provide tailored hiring solutions to ensure project success.',
      keyFeatures: [
        'Project-Specific Talent Matching',
        'Rapid Deployment',
        'Performance-Based Selection',
        'Team Integration Support',
        'Project Timeline Alignment',
        'Quality Assurance'
      ],
      benefits: [
        'Expert Skill Access',
        'Faster Project Delivery',
        'Reduced Training Costs',
        'Enhanced Project Quality',
        'Flexible Engagement'
      ],
      industries: ['Software Development', 'Construction', 'Consulting', 'Research', 'Design'],
      stats: {
        experience: '7+ Years',
        clients: '300+ Projects',
        success: '92% On-Time Delivery'
      }
    },
    'Payroll Services': {
      fullDescription: 'Complete payroll management solutions that handle all aspects of employee compensation, from processing to compliance. Our advanced systems ensure accuracy, timeliness, and full regulatory compliance.',
      keyFeatures: [
        'Automated Payroll Processing',
        'Tax Compliance Management',
        'Benefits Administration',
        'Time & Attendance Integration',
        'Employee Self-Service Portal',
        'Detailed Reporting & Analytics'
      ],
      benefits: [
        'Reduced Administrative Burden',
        'Improved Accuracy',
        'Enhanced Security',
        'Cost Savings',
        'Employee Satisfaction'
      ],
      industries: ['All Industries', 'Small Business', 'Enterprise', 'Non-Profit', 'Government'],
      stats: {
        experience: '12+ Years',
        clients: '500+ Companies',
        success: '99.9% Accuracy Rate'
      }
    },
    'Direct Staffing': {
      fullDescription: 'Permanent placement solutions for building your core workforce with top-tier talent. Our direct staffing services focus on finding candidates who align with your company culture and long-term objectives.',
      keyFeatures: [
        'Comprehensive Candidate Screening',
        'Cultural Fit Assessment',
        'Executive Search Services',
        'Volume Hiring Solutions',
        'Onboarding Support',
        'Replacement Guarantee'
      ],
      benefits: [
        'Higher Quality Hires',
        'Reduced Turnover',
        'Faster Time-to-Fill',
        'Cost-Effective Recruitment',
        'Long-term Success'
      ],
      industries: ['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Sales'],
      stats: {
        experience: '9+ Years',
        clients: '250+ Companies',
        success: '88% Retention After 1 Year'
      }
    },
    'IT Consulting Services': {
      fullDescription: 'Strategic technology consulting to optimize your IT infrastructure and drive digital transformation. Our experts help you leverage technology to achieve business objectives and maintain competitive advantage.',
      keyFeatures: [
        'IT Strategy Development',
        'Infrastructure Assessment',
        'Digital Transformation',
        'Cloud Migration Services',
        'Cybersecurity Solutions',
        'Technology Implementation'
      ],
      benefits: [
        'Improved Efficiency',
        'Enhanced Security',
        'Cost Optimization',
        'Scalable Solutions',
        'Competitive Advantage'
      ],
      industries: ['Enterprise', 'Healthcare', 'Financial Services', 'Education', 'Government'],
      stats: {
        experience: '15+ Years',
        clients: '180+ Organizations',
        success: '96% Project Success Rate'
      }
    },
    'BPO Services': {
      fullDescription: 'Business process outsourcing solutions that streamline operations and reduce costs while maintaining the highest quality standards. We handle non-core business functions so you can focus on strategic growth.',
      keyFeatures: [
        'Process Analysis & Optimization',
        'Quality Management Systems',
        'Technology Integration',
        'Performance Monitoring',
        'Scalable Operations',
        '24/7 Support Services'
      ],
      benefits: [
        'Reduced Operational Costs',
        'Improved Service Quality',
        'Enhanced Focus on Core Business',
        'Access to Specialized Expertise',
        'Scalable Operations'
      ],
      industries: ['Customer Service', 'Finance & Accounting', 'HR Services', 'Data Processing', 'Technical Support'],
      stats: {
        experience: '11+ Years',
        clients: '120+ Businesses',
        success: '94% Client Satisfaction'
      }
    }
  };

  const details = serviceDetails[service.title] || {};

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <service.icon size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {details.fullDescription || service.description}
              </p>
            </div>

            {/* Stats */}
            {details.stats && (
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{details.stats.experience}</div>
                  <div className="text-gray-600 text-sm">Experience</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{details.stats.clients}</div>
                  <div className="text-gray-600 text-sm">Served</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle size={20} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{details.stats.success}</div>
                  <div className="text-gray-600 text-sm">Success</div>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Features */}
              {details.keyFeatures && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {details.keyFeatures.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Benefits */}
              {details.benefits && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {details.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Industries */}
            {details.industries && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industries We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {details.industries.map((industry: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-700">Let's discuss how our {service.title.toLowerCase()} can benefit your business.</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      onClose();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Quote
                    <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={onClose}
                    className="border border-red-500 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;