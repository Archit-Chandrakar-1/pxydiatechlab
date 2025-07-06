import React, { useState, useEffect } from 'react';
import { Award, Zap, Globe, Users, Target, Eye, Heart, Linkedin, ExternalLink } from 'lucide-react';

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  photoURL: string;
  linkedinURL: string;
}

const About = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:3001/api';

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/team`);
      const data = await response.json();
      if (data.success) {
        setTeamMembers(data.data);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
      // Add demo team members for testing if API fails
      setTeamMembers([
        {
          _id: '1',
          name: 'John Smith',
          position: 'CEO & Founder',
          photoURL: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
          linkedinURL: 'https://linkedin.com/in/johnsmith'
        },
        {
          _id: '2',
          name: 'Sarah Johnson',
          position: 'CTO',
          photoURL: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
          linkedinURL: 'https://linkedin.com/in/sarahjohnson'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { icon: Users, value: '100+', label: 'Fortune 500 Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Globe, value: '3+', label: 'Countries' },
    { icon: Zap, value: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Purpose',
      description: 'To enable clients\' business growth and strengthening by supporting them to focus on their core activities. At Pyxidia Techlab, we partner with our clients to expand their business potential by providing the best solutions.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become a nationwide consulting service provider rendering innovative solutions day in and day out, transforming our world by empowering global businesses through applied human intelligence.'
    },
    {
      icon: Heart,
      title: 'Mission',
      description: 'To provide all the business-related consulting services under one roof as per the business requirement, being the ecosystem connecting people, technology, and opportunities through applied human intelligence.'
    }
  ];

  const handleTeamMemberClick = (linkedinURL: string) => {
    window.open(linkedinURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us.
          </h2>
          <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
            EMPOWERING BUSINESSES THROUGH APPLIED HUMAN INTELLIGENCE
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div>
              <p className="text-xl text-white leading-relaxed mb-6">
                We are a global IT consulting and staffing firm that empowers businesses with a range of workforce and project-based solutions, serving over 100 Fortune 500 clients worldwide.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Pyxidia Techlab is owned by IT consulting, staffing & payroll services in India and has a footprint across the globe. Pyxidia empowers businesses through applied human intelligence and offers a spectrum of services that include Workforce Solutions (Contingent Staffing, Bulk/ Project Staffing, Master Vendor, RPO, Direct Hire and Payroll Transition) and Project-Based Solutions (Digital Experience, Technical Operations, Technical Development, Business Operations & Digital Platforms).
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Pyxidia Techlab works with over 100+ Fortune 500 clients across the USA, Canada, and India.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-transparent border border-gray-800 rounded-xl p-6 text-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-red-600 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <stat.icon className="text-white group-hover:text-red-600 transition-colors duration-300" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8">Who We Are</h3>
          <div className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
            <p className="text-lg text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
              Our company is dedicated to helping you to achieve your IT Business Management objectives, Payroll & compliance, Resource Augmentation, Contract & Full-Time Hiring. Using our many years of Business Management experience, we will enable you through education, mentoring and practical examples to discover the one-roof solution for your IT requirements, HR compliances, Payroll services & Resource hiring for contract & full-time positions. We will provide you with our needed services to exclusively support your business and to determine how best to achieve them.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-red-600 group-hover:bg-white rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                  <value.icon className="text-white group-hover:text-red-600 transition-colors duration-300" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Philosophy */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8">Our Brand Philosophy</h3>
          <div className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                We believe intelligence is a combination of technology and human ability translated into intelligent solutions. Today, the organization needs a workforce that can provide intelligent business solutions. While talent needs opportunities to apply their intellect and progress in their career. We empower both through applied human intelligence.
              </p>
              <p className="text-lg text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                For us, intelligence is a way of life. Our Talent Promise At Pyxidia Techlab, we are empowering talent by connecting potential with opportunities through applied human intelligence. We empower our teams to maximize the impact of their intellect, through a performance-oriented, diverse, flexible, and inclusive work environment supported by our continuous learning and development focus.
              </p>
              <p className="text-lg text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                Led by our visionary leadership, fuelled by our values, and driven by our combined intellect, our teams work with some of the largest Fortune 500 clients, defining industry benchmarks while optimizing their careers.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Our Leadership Team</h3>
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-300">Loading team members...</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {teamMembers.map((member: any, index) => (
                <div
                  key={member._id || index}
                  onClick={() => handleTeamMemberClick(member.linkedinURL)}
                  className="group cursor-pointer"
                >
                  <div className="bg-transparent border border-gray-800 rounded-xl p-6 hover:bg-red-600 hover:border-red-600 transition-all duration-500 transform hover:scale-105 text-center">
                    {/* Photo */}
                    <div className="relative mb-4">
                      <img 
                        src={member.photoURL} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-800 group-hover:border-white transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300';
                        }}
                      />
                      {/* LinkedIn Icon Overlay */}
                      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Linkedin size={24} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h4>
                    <p className="text-gray-400 text-xs group-hover:text-white/80 transition-colors duration-300">
                      {member.position}
                    </p>
                    
                    {/* LinkedIn Link Indicator */}
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-center gap-1 text-white text-xs">
                        <ExternalLink size={12} />
                        <span>LinkedIn</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {teamMembers.length === 0 && !loading && (
            <div className="text-center py-8">
              <div className="text-gray-300 mb-4">No team members added yet.</div>
              <div className="text-gray-400 text-sm">Add team members from the admin panel to display them here.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;