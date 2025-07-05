import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://localhost:3001/api';

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/clients?isActive=true`);
      const data = await response.json();
      if (data.success) {
        setClients(data.data);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
      // Add some demo clients for testing if API fails
      setClients([
        {
          _id: '1',
          name: 'TechCorp Solutions',
          logoURL: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
          websiteURL: 'https://example.com',
          industry: 'Technology',
          featured: true
        },
        {
          _id: '2',
          name: 'Global Innovations',
          logoURL: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
          websiteURL: 'https://example.com',
          industry: 'Innovation',
          featured: false
        },
        {
          _id: '3',
          name: 'Future Systems',
          logoURL: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
          websiteURL: 'https://example.com',
          industry: 'Systems',
          featured: false
        },
        {
          _id: '4',
          name: 'Digital Dynamics',
          logoURL: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
          websiteURL: 'https://example.com',
          industry: 'Digital',
          featured: false
        },
        {
          _id: '5',
          name: 'Smart Solutions',
          logoURL: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200',
          websiteURL: 'https://example.com',
          industry: 'Technology',
          featured: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleClientClick = (websiteURL: string) => {
    window.open(websiteURL, '_blank', 'noopener,noreferrer');
  };

  const scrollLeft = () => {
    const container = document.getElementById('clients-container');
    if (container) {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('clients-container');
    if (container) {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Clients.
          </h2>
          <p className="text-red-500 text-lg font-medium uppercase tracking-wider">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="text-gray-300">Loading our clients...</div>
          </div>
        ) : (
          <>
            {/* Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
              {clients.map((client: any, index) => (
                <div
                  key={client._id || index}
                  onClick={() => handleClientClick(client.websiteURL)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-red-600 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-red-500 relative overflow-hidden h-32 flex items-center justify-center">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Client Logo */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img 
                        src={client.logoURL} 
                        alt={client.name}
                        className="max-w-20 max-h-20 object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                        onError={(e) => {
                          // Fallback to company name if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback text */}
                      <div className="hidden items-center justify-center text-white font-semibold text-sm text-center">
                        <Building2 size={20} className="mb-1" />
                        <span className="text-xs">{client.name}</span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <ExternalLink size={20} className="mx-auto mb-2" />
                        <div className="text-xs font-medium">Visit Website</div>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {client.featured && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        ★
                      </div>
                    )}
                  </div>
                  
                  {/* Client Info */}
                  <div className="mt-3 text-center">
                    <h3 className="text-white font-medium text-sm group-hover:text-red-400 transition-colors duration-200 truncate">
                      {client.name}
                    </h3>
                    {client.industry && (
                      <p className="text-gray-400 text-xs mt-1 truncate">{client.industry}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="text-center">
              <div className="inline-flex items-center gap-8 bg-transparent border border-gray-800 rounded-xl px-8 py-4 hover:bg-red-600 hover:border-red-600 transition-all duration-500 group">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{clients.length}+</div>
                  <div className="text-gray-400 group-hover:text-white text-sm transition-colors duration-300">Trusted Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-800 group-hover:bg-white/30 transition-colors duration-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{clients.filter((c: any) => c.featured).length}</div>
                  <div className="text-gray-400 group-hover:text-white text-sm transition-colors duration-300">Featured Partners</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Clients;