import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Users, 
  Mail, 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Download,
  Search,
  Filter,
  Calendar,
  MapPin,
  Clock,
  Building,
  User,
  Phone,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    mode: 'On-site',
    type: 'Full-time',
    experience: '',
    location: '',
    description: '',
    requirements: [],
    benefits: [],
    salary: {
      min: '',
      max: '',
      currency: 'USD'
    }
  });
  
  const [blogForm, setBlogForm] = useState({
    title: '',
    content: '',
    imageURL: '',
    author: {
      name: '',
      email: '',
      bio: ''
    },
    category: 'Company Updates',
    tags: [],
    status: 'Published'
  });

  const API_BASE_URL = 'http://localhost:3001/api';

  // Fetch data functions
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/jobs`);
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

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/applications`);
      const data = await response.json();
      if (data.success) {
        setApplications(data.data);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/contacts`);
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/blogs`);
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load data when tab changes
  useEffect(() => {
    switch (activeTab) {
      case 'jobs':
        fetchJobs();
        break;
      case 'applications':
        fetchApplications();
        break;
      case 'contacts':
        fetchContacts();
        break;
      case 'blogs':
        fetchBlogs();
        break;
    }
  }, [activeTab]);

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...jobForm,
          salary: {
            min: jobForm.salary.min ? Number(jobForm.salary.min) : undefined,
            max: jobForm.salary.max ? Number(jobForm.salary.max) : undefined,
            currency: jobForm.salary.currency
          }
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        alert('Job created successfully!');
        setJobForm({
          title: '',
          department: '',
          mode: 'On-site',
          type: 'Full-time',
          experience: '',
          location: '',
          description: '',
          requirements: [],
          benefits: [],
          salary: { min: '', max: '', currency: 'USD' }
        });
        fetchJobs(); // Refresh the jobs list
      } else {
        alert('Error creating job: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error creating job:', error);
      alert('Error creating job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogForm),
      });
      
      const data = await response.json();
      if (data.success) {
        alert('Blog created successfully!');
        setBlogForm({
          title: '',
          content: '',
          imageURL: '',
          author: { name: '', email: '', bio: '' },
          category: 'Company Updates',
          tags: [],
          status: 'Published'
        });
        fetchBlogs(); // Refresh the blogs list
      } else {
        alert('Error creating blog: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Error creating blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        if (data.success) {
          alert('Job deleted successfully!');
          fetchJobs(); // Refresh the jobs list
        } else {
          alert('Error deleting job: ' + (data.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error deleting job:', error);
        alert('Error deleting job. Please try again.');
      }
    }
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/blogs/${blogId}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        if (data.success) {
          alert('Blog deleted successfully!');
          fetchBlogs(); // Refresh the blogs list
        } else {
          alert('Error deleting blog: ' + (data.message || 'Unknown error'));
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Error deleting blog. Please try again.');
      }
    }
  };

  const sidebarItems = [
    { id: 'jobs', label: 'Jobs Management', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: Users },
    { id: 'contacts', label: 'Contact Submissions', icon: Mail },
    { id: 'blogs', label: 'Blog Management', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black border-r border-gray-800 min-h-screen">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-8">Admin Dashboard</h2>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {loading && (
            <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Loading...
            </div>
          )}

          {/* Jobs Management */}
          {activeTab === 'jobs' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Jobs Management</h1>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    <Filter size={20} />
                    Filter
                  </button>
                </div>
              </div>

              {/* Add Job Form */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-6">Add New Job</h2>
                <form onSubmit={handleJobSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={jobForm.title}
                      onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Department"
                      value={jobForm.department}
                      onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <select
                      value={jobForm.type}
                      onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                    <select
                      value={jobForm.mode}
                      onChange={(e) => setJobForm({ ...jobForm, mode: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="On-site">On-site</option>
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Location"
                      value={jobForm.location}
                      onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Experience (e.g., 3+ years)"
                      value={jobForm.experience}
                      onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Job Description"
                    value={jobForm.description}
                    onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  ></textarea>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="number"
                      placeholder="Min Salary"
                      value={jobForm.salary.min}
                      onChange={(e) => setJobForm({ 
                        ...jobForm, 
                        salary: { ...jobForm.salary, min: e.target.value }
                      })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Max Salary"
                      value={jobForm.salary.max}
                      onChange={(e) => setJobForm({ 
                        ...jobForm, 
                        salary: { ...jobForm.salary, max: e.target.value }
                      })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50"
                    >
                      <Plus size={20} />
                      {loading ? 'Adding...' : 'Add Job'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Jobs Table */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Job Title</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Department</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Mode</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Location</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Experience</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Posted</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {jobs.map((job: any) => (
                        <tr key={job._id} className="hover:bg-gray-750">
                          <td className="px-6 py-4 text-white font-medium">{job.title}</td>
                          <td className="px-6 py-4 text-gray-300">{job.department}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-blue-600 text-blue-100 rounded-full text-xs">
                              {job.type}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-600 text-green-100 rounded-full text-xs">
                              {job.mode}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{job.location}</td>
                          <td className="px-6 py-4 text-gray-300">{job.experience}</td>
                          <td className="px-6 py-4 text-gray-300">
                            {new Date(job.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                                <Edit size={16} />
                              </button>
                              <button 
                                onClick={() => handleDeleteJob(job._id)}
                                className="p-2 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {jobs.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      No jobs found. Add your first job above.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Applications */}
          {activeTab === 'applications' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Candidate Applications</h1>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search applications..."
                      className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Download size={20} />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Candidate</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Job Applied</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Resume</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Message</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Applied Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {applications.map((app: any) => (
                        <tr key={app._id} className="hover:bg-gray-750">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-white font-medium">{app.name}</div>
                              <div className="text-gray-400 text-sm">{app.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{app.job?.title || 'N/A'}</td>
                          <td className="px-6 py-4">
                            <a 
                              href={app.resumeURL} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                            >
                              <Download size={16} />
                              View Resume
                            </a>
                          </td>
                          <td className="px-6 py-4 text-gray-300 max-w-xs truncate">{app.message || 'No message'}</td>
                          <td className="px-6 py-4 text-gray-300">
                            {new Date(app.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              app.status === 'Pending' ? 'bg-yellow-600 text-yellow-100' :
                              app.status === 'Reviewed' ? 'bg-blue-600 text-blue-100' :
                              app.status === 'Shortlisted' ? 'bg-green-600 text-green-100' :
                              app.status === 'Rejected' ? 'bg-red-600 text-red-100' :
                              'bg-gray-600 text-gray-100'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 text-green-400 hover:bg-green-600 hover:text-white rounded-lg transition-colors">
                                <Eye size={16} />
                              </button>
                              <button className="p-2 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {applications.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      No applications found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Contact Submissions */}
          {activeTab === 'contacts' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Contact Submissions</h1>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <Download size={20} />
                    Export
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Contact</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Company</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Service Interest</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Message</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Submitted</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {contacts.map((contact: any) => (
                        <tr key={contact._id} className="hover:bg-gray-750">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-white font-medium">{contact.name}</div>
                              <div className="text-gray-400 text-sm">{contact.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{contact.company || 'N/A'}</td>
                          <td className="px-6 py-4 text-gray-300">{contact.serviceInterest || 'N/A'}</td>
                          <td className="px-6 py-4 text-gray-300 max-w-xs truncate">{contact.message}</td>
                          <td className="px-6 py-4 text-gray-300">
                            {new Date(contact.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              contact.status === 'New' ? 'bg-blue-600 text-blue-100' :
                              contact.status === 'In Progress' ? 'bg-yellow-600 text-yellow-100' :
                              contact.status === 'Responded' ? 'bg-green-600 text-green-100' :
                              'bg-gray-600 text-gray-100'
                            }`}>
                              {contact.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                                <Eye size={16} />
                              </button>
                              <button className="p-2 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {contacts.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                      No contact submissions found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Blog Management */}
          {activeTab === 'blogs' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Blog Management</h1>
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  <Plus size={20} />
                  New Blog
                </button>
              </div>

              {/* Add Blog Form */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-6">Create New Blog Post</h2>
                <form onSubmit={handleBlogSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Blog Title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="url"
                      placeholder="Featured Image URL"
                      value={blogForm.imageURL}
                      onChange={(e) => setBlogForm({ ...blogForm, imageURL: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Author Name"
                      value={blogForm.author.name}
                      onChange={(e) => setBlogForm({ 
                        ...blogForm, 
                        author: { ...blogForm.author, name: e.target.value }
                      })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Author Email"
                      value={blogForm.author.email}
                      onChange={(e) => setBlogForm({ 
                        ...blogForm, 
                        author: { ...blogForm.author, email: e.target.value }
                      })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                      className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="AI & Technology">AI & Technology</option>
                      <option value="Staffing">Staffing</option>
                      <option value="Compliance">Compliance</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="BPO Services">BPO Services</option>
                      <option value="Payroll">Payroll</option>
                      <option value="Industry News">Industry News</option>
                      <option value="Best Practices">Best Practices</option>
                      <option value="Case Studies">Case Studies</option>
                      <option value="Company Updates">Company Updates</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Blog Content"
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    rows={8}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    required
                  ></textarea>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold disabled:opacity-50"
                    >
                      {loading ? 'Publishing...' : 'Publish Blog'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setBlogForm({ ...blogForm, status: 'Draft' })}
                      className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                    >
                      Save Draft
                    </button>
                  </div>
                </form>
              </div>

              {/* Blogs List */}
              <div className="grid gap-6">
                {blogs.map((blog: any) => (
                  <div key={blog._id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            blog.status === 'Published' 
                              ? 'bg-green-600 text-green-100' 
                              : 'bg-yellow-600 text-yellow-100'
                          }`}>
                            {blog.status}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3 line-clamp-3">{blog.excerpt || blog.content.substring(0, 200) + '...'}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                          <span>By: {blog.author?.name || 'Unknown'}</span>
                          <span>Category: {blog.category}</span>
                          <span>Views: {blog.views || 0}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-green-400 hover:bg-green-600 hover:text-white rounded-lg transition-colors">
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => handleDeleteBlog(blog._id)}
                          className="p-2 text-red-400 hover:bg-red-600 hover:text-white rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {blogs.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    No blogs found. Create your first blog above.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;