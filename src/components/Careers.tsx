import React, { useState, useEffect } from 'react';
import { Briefcase, Users, TrendingUp, Award, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:3001/api';

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/jobs?isActive=true`);
      const data = await response.json();
      if (data.success) {
        setJobs(data.data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear advancement paths'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage, retirement plans, and more'
    }
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-black via-red-900/20 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology and business solutions
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-black/70 transition-all duration-300 transform hover:scale-105 border border-red-900/30"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-red-900/30">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h3>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-300">Loading positions...</div>
            </div>
          ) : jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job: any, index) => (
                <div
                  key={job._id || index}
                  className="bg-black/30 rounded-lg p-6 hover:bg-black/50 transition-all duration-300 border border-red-900/20 hover:border-red-500/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold text-white mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award size={16} />
                          <span>{job.experience}</span>
                        </div>
                        {job.mode && (
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>{job.mode}</span>
                          </div>
                        )}
                      </div>
                      {job.description && (
                        <p className="text-gray-400 text-sm mt-2 line-clamp-2">{job.description}</p>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-300 mb-4">No open positions at the moment.</div>
              <div className="text-gray-400 text-sm">Check back soon for new opportunities!</div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Don't see a position that fits? We're always looking for talented individuals.</p>
          <button className="border-2 border-red-400 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-black transition-all duration-300">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;