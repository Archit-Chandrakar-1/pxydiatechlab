import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  FileText, 
  Building2, 
  UserCheck,
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X,
  Upload,
  ExternalLink,
  Linkedin,
  MapPin,
  Clock,
  Award
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [clients, setClients] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const API_BASE_URL = 'http://localhost:3001/api';

  // Fetch data based on active tab
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      switch (activeTab) {
        case 'jobs':
          const jobsRes = await fetch(`${API_BASE_URL}/jobs`);
          const jobsData = await jobsRes.json();
          if (jobsData.success) setJobs(jobsData.data);
          break;
        case 'applications':
          const appsRes = await fetch(`${API_BASE_URL}/applications`);
          const appsData = await appsRes.json();
          if (appsData.success) setApplications(appsData.data);
          break;
        case 'contacts':
          const contactsRes = await fetch(`${API_BASE_URL}/contacts`);
          const contactsData = await contactsRes.json();
          if (contactsData.success) setContacts(contactsData.data);
          break;
        case 'blogs':
          const blogsRes = await fetch(`${API_BASE_URL}/blogs`);
          const blogsData = await blogsRes.json();
          if (blogsData.success) setBlogs(blogsData.data);
          break;
        case 'clients':
          const clientsRes = await fetch(`${API_BASE_URL}/clients`);
          const clientsData = await clientsRes.json();
          if (clientsData.success) setClients(clientsData.data);
          break;
        case 'team':
          const teamRes = await fetch(`${API_BASE_URL}/team`);
          const teamData = await teamRes.json();
          if (teamData.success) setTeamMembers(teamData.data);
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, type: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/${type}/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleSave = async (data: any, type: string, isEdit: boolean = false) => {
    try {
      const url = isEdit ? `${API_BASE_URL}/${type}/${data._id}` : `${API_BASE_URL}/${type}`;
      const method = isEdit ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setEditingItem(null);
        setShowForm(false);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'applications', label: 'Applications', icon: UserCheck },
    { id: 'contacts', label: 'Contacts', icon: MessageSquare },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'clients', label: 'Our Clients', icon: Building2 },
    { id: 'team', label: 'Leadership Team', icon: Users },
  ];

  // Job Form Component
  const JobForm = ({ job, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      title: job?.title || '',
      department: job?.department || '',
      mode: job?.mode || 'On-site',
      type: job?.type || 'Full-time',
      experience: job?.experience || '',
      location: job?.location || '',
      description: job?.description || '',
      requirements: job?.requirements || [''],
      benefits: job?.benefits || [''],
      salary: {
        min: job?.salary?.min || '',
        max: job?.salary?.max || '',
        currency: job?.salary?.currency || 'USD'
      },
      isActive: job?.isActive ?? true,
      applicationDeadline: job?.applicationDeadline ? new Date(job.applicationDeadline).toISOString().split('T')[0] : ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const submitData = {
        ...formData,
        requirements: formData.requirements.filter(req => req.trim() !== ''),
        benefits: formData.benefits.filter(benefit => benefit.trim() !== ''),
        salary: {
          ...formData.salary,
          min: formData.salary.min ? Number(formData.salary.min) : undefined,
          max: formData.salary.max ? Number(formData.salary.max) : undefined
        },
        applicationDeadline: formData.applicationDeadline ? new Date(formData.applicationDeadline) : undefined
      };
      onSave(submitData);
    };

    const addRequirement = () => {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, '']
      });
    };

    const removeRequirement = (index: number) => {
      setFormData({
        ...formData,
        requirements: formData.requirements.filter((_, i) => i !== index)
      });
    };

    const updateRequirement = (index: number, value: string) => {
      const newRequirements = [...formData.requirements];
      newRequirements[index] = value;
      setFormData({
        ...formData,
        requirements: newRequirements
      });
    };

    const addBenefit = () => {
      setFormData({
        ...formData,
        benefits: [...formData.benefits, '']
      });
    };

    const removeBenefit = (index: number) => {
      setFormData({
        ...formData,
        benefits: formData.benefits.filter((_, i) => i !== index)
      });
    };

    const updateBenefit = (index: number, value: string) => {
      const newBenefits = [...formData.benefits];
      newBenefits[index] = value;
      setFormData({
        ...formData,
        benefits: newBenefits
      });
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">
            {job ? 'Edit Job' : 'Add Job'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
                <input
                  type="text"
                  required
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Mode *</label>
                <select
                  required
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type *</label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required *</label>
                <input
                  type="text"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., 2-5 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                placeholder="Describe the role and responsibilities..."
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
              {formData.requirements.map((requirement, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={requirement}
                    onChange={(e) => updateRequirement(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter requirement..."
                  />
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addRequirement}
                className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
              >
                <Plus size={16} />
                Add Requirement
              </button>
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Benefits</label>
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter benefit..."
                  />
                  <button
                    type="button"
                    onClick={() => removeBenefit(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addBenefit}
                className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
              >
                <Plus size={16} />
                Add Benefit
              </button>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="number"
                    value={formData.salary.min}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      salary: { ...formData.salary, min: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Min salary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    value={formData.salary.max}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      salary: { ...formData.salary, max: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Max salary"
                  />
                </div>
                <div>
                  <select
                    value={formData.salary.currency}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      salary: { ...formData.salary, currency: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                <input
                  type="date"
                  value={formData.applicationDeadline}
                  onChange={(e) => setFormData({ ...formData, applicationDeadline: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex items-center pt-6">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active Job Posting</label>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <Save size={16} className="inline mr-2" />
                Save Job
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                <X size={16} className="inline mr-2" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Team Member Form Component
  const TeamMemberForm = ({ member, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      name: member?.name || '',
      position: member?.position || '',
      photoURL: member?.photoURL || '',
      linkedinURL: member?.linkedinURL || '',
      bio: member?.bio || '',
      isActive: member?.isActive ?? true,
      order: member?.order || 0
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">
            {member ? 'Edit Team Member' : 'Add Team Member'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
              <input
                type="text"
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL *</label>
              <input
                type="url"
                required
                value={formData.photoURL}
                onChange={(e) => setFormData({ ...formData, photoURL: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="https://example.com/photo.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL *</label>
              <input
                type="url"
                required
                value={formData.linkedinURL}
                onChange={(e) => setFormData({ ...formData, linkedinURL: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="https://linkedin.com/in/username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={3}
                placeholder="Brief bio (optional)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active</label>
            </div>
            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <Save size={16} className="inline mr-2" />
                Save
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                <X size={16} className="inline mr-2" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Client Form Component
  const ClientForm = ({ client, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      name: client?.name || '',
      logoURL: client?.logoURL || '',
      websiteURL: client?.websiteURL || '',
      description: client?.description || '',
      industry: client?.industry || '',
      isActive: client?.isActive ?? true,
      featured: client?.featured || false
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">
            {client ? 'Edit Client' : 'Add Client'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL *</label>
              <input
                type="url"
                required
                value={formData.logoURL}
                onChange={(e) => setFormData({ ...formData, logoURL: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="https://example.com/logo.png"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website URL *</label>
              <input
                type="url"
                required
                value={formData.websiteURL}
                onChange={(e) => setFormData({ ...formData, websiteURL: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={3}
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured</label>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <button
                type="submit"
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <Save size={16} className="inline mr-2" />
                Save
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
              >
                <X size={16} className="inline mr-2" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your Pyxidia Techlab content</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                ← Back to Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Tab Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h2>
                  {(activeTab === 'jobs' || activeTab === 'clients' || activeTab === 'team') && (
                    <button
                      onClick={() => setShowForm(true)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Add {activeTab === 'jobs' ? 'Job' : activeTab === 'clients' ? 'Client' : 'Team Member'}
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="text-gray-500">Loading...</div>
                  </div>
                ) : (
                  <>
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-blue-100">Total Jobs</p>
                              <p className="text-3xl font-bold">{jobs.length}</p>
                            </div>
                            <Briefcase size={32} className="text-blue-200" />
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-green-100">Applications</p>
                              <p className="text-3xl font-bold">{applications.length}</p>
                            </div>
                            <UserCheck size={32} className="text-green-200" />
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-purple-100">Contacts</p>
                              <p className="text-3xl font-bold">{contacts.length}</p>
                            </div>
                            <MessageSquare size={32} className="text-purple-200" />
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-red-100">Blog Posts</p>
                              <p className="text-3xl font-bold">{blogs.length}</p>
                            </div>
                            <FileText size={32} className="text-red-200" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Jobs Tab */}
                    {activeTab === 'jobs' && (
                      <div>
                        {jobs.length > 0 ? (
                          <div className="space-y-4">
                            {jobs.map((job: any) => (
                              <div key={job._id} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                      <span className={`px-2 py-1 rounded-full text-xs ${
                                        job.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                      }`}>
                                        {job.isActive ? 'Active' : 'Inactive'}
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
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
                                      <div className="flex items-center gap-1">
                                        <Users size={16} />
                                        <span>{job.mode}</span>
                                      </div>
                                    </div>
                                    {job.description && (
                                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{job.description}</p>
                                    )}
                                    {job.salary && (job.salary.min || job.salary.max) && (
                                      <p className="text-gray-600 text-sm">
                                        Salary: {job.salary.min && `${job.salary.min.toLocaleString()}`}
                                        {job.salary.min && job.salary.max && ' - '}
                                        {job.salary.max && `${job.salary.max.toLocaleString()}`}
                                        {job.salary.currency && ` ${job.salary.currency}`}
                                      </p>
                                    )}
                                    {job.applicationDeadline && (
                                      <p className="text-gray-600 text-sm">
                                        Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
                                      </p>
                                    )}
                                  </div>
                                  <div className="flex gap-2 ml-4">
                                    <button
                                      onClick={() => {
                                        setEditingItem(job);
                                        setShowForm(true);
                                      }}
                                      className="text-blue-600 hover:text-blue-700 p-2"
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(job._id, 'jobs')}
                                      className="text-red-600 hover:text-red-700 p-2"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
                            <p className="text-gray-600 mb-4">Create your first job posting to get started.</p>
                            <button
                              onClick={() => setShowForm(true)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Add Job
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Team Tab */}
                    {activeTab === 'team' && (
                      <div>
                        {teamMembers.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.map((member: any) => (
                              <div key={member._id} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex items-center gap-4 mb-4">
                                  <img
                                    src={member.photoURL}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.src = 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300';
                                    }}
                                  />
                                  <div>
                                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-gray-600">{member.position}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className={`px-2 py-1 rounded-full text-xs ${
                                        member.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                      }`}>
                                        {member.isActive ? 'Active' : 'Inactive'}
                                      </span>
                                      <span className="text-xs text-gray-500">Order: {member.order}</span>
                                    </div>
                                  </div>
                                </div>
                                {member.bio && (
                                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                                )}
                                <div className="flex items-center justify-between">
                                  <a
                                    href={member.linkedinURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                                  >
                                    <Linkedin size={16} />
                                    LinkedIn
                                  </a>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => {
                                        setEditingItem(member);
                                        setShowForm(true);
                                      }}
                                      className="text-blue-600 hover:text-blue-700"
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(member._id, 'team')}
                                      className="text-red-600 hover:text-red-700"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <Users size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No team members yet</h3>
                            <p className="text-gray-600 mb-4">Add your first team member to get started.</p>
                            <button
                              onClick={() => setShowForm(true)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Add Team Member
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Clients Tab */}
                    {activeTab === 'clients' && (
                      <div>
                        {clients.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {clients.map((client: any) => (
                              <div key={client._id} className="border border-gray-200 rounded-lg p-6">
                                <div className="flex items-center gap-4 mb-4">
                                  <img
                                    src={client.logoURL}
                                    alt={client.name}
                                    className="w-16 h-16 object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                  <div>
                                    <h3 className="font-semibold text-gray-900">{client.name}</h3>
                                    {client.industry && (
                                      <p className="text-gray-600">{client.industry}</p>
                                    )}
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className={`px-2 py-1 rounded-full text-xs ${
                                        client.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                      }`}>
                                        {client.isActive ? 'Active' : 'Inactive'}
                                      </span>
                                      {client.featured && (
                                        <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {client.description && (
                                  <p className="text-gray-600 text-sm mb-4">{client.description}</p>
                                )}
                                <div className="flex items-center justify-between">
                                  <a
                                    href={client.websiteURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                                  >
                                    <ExternalLink size={16} />
                                    Website
                                  </a>
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => {
                                        setEditingItem(client);
                                        setShowForm(true);
                                      }}
                                      className="text-blue-600 hover:text-blue-700"
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      onClick={() => handleDelete(client._id, 'clients')}
                                      className="text-red-600 hover:text-red-700"
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <Building2 size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No clients yet</h3>
                            <p className="text-gray-600 mb-4">Add your first client to get started.</p>
                            <button
                              onClick={() => setShowForm(true)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Add Client
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Other tabs content would go here */}
                    {activeTab !== 'overview' && activeTab !== 'jobs' && activeTab !== 'team' && activeTab !== 'clients' && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Content for {activeTab} tab coming soon...</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forms */}
      {showForm && activeTab === 'jobs' && (
        <JobForm
          job={editingItem}
          onSave={(data: any) => handleSave(data, 'jobs', !!editingItem)}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}

      {showForm && activeTab === 'team' && (
        <TeamMemberForm
          member={editingItem}
          onSave={(data: any) => handleSave(data, 'team', !!editingItem)}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}

      {showForm && activeTab === 'clients' && (
        <ClientForm
          client={editingItem}
          onSave={(data: any) => handleSave(data, 'clients', !!editingItem)}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;