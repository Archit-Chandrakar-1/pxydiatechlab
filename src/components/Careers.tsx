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
    <section id="careers" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Join Our Team.
          </h2>
          <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
            BE PART OF A DYNAMIC TEAM SHAPING THE FUTURE
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-transparent border border-gray-800 rounded-xl p-8 text-center hover:bg-red-600 hover:border-red-600 transition-all duration-500 transform hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-red-600 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                <benefit.icon className="text-white group-hover:text-red-600 transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors duration-300">{benefit.title}</h3>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-transparent border border-gray-800 rounded-xl p-8 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
          <h3 className="text-3xl font-bold text-white mb-8 text-center group-hover:text-white transition-colors duration-300">Open Positions</h3>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Loading positions...</div>
            </div>
          ) : jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job: any, index) => (
                <div
                  key={job._id || index}
                  className="bg-black/30 border border-gray-700 rounded-lg p-6 hover:bg-black/50 hover:border-red-500/50 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/30"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 group-hover:text-white/80 transition-colors duration-300">
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
                        <p className="text-gray-400 group-hover:text-white/70 text-sm mt-2 line-clamp-2 transition-colors duration-300">{job.description}</p>
                      )}
                    </div>
                    <button className="bg-red-600 hover:bg-white text-white hover:text-red-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-300 group-hover:text-white mb-4 transition-colors duration-300">No open positions at the moment.</div>
              <div className="text-gray-400 group-hover:text-white/70 text-sm transition-colors duration-300">Check back soon for new opportunities!</div>
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