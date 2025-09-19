import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProjectConsultation = () => {
  const [selectedService, setSelectedService] = useState('plan-review');
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    timeline: '',
    budget: '',
    contactPerson: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const consultationServices = [
    {
      id: 'plan-review',
      title: 'Electrical Plan Review',
      description: 'Upload your electrical plans for expert review and product recommendations',
      icon: 'FileText',
      features: [
        'Technical plan analysis',
        'Product recommendations',
        'Cost optimization suggestions',
        'Compliance verification',
        'Load calculation review'
      ],
      duration: '2-3 business days',
      price: 'Free for business accounts'
    },
    {
      id: 'video-consultation',
      title: 'Video Consultation',
      description: 'One-on-one consultation with our electrical experts via video call',
      icon: 'Video',
      features: [
        '30-60 minute sessions',
        'Screen sharing capability',
        'Real-time problem solving',
        'Follow-up documentation',
        'Recording available'
      ],
      duration: '30-60 minutes',
      price: '₹2,500 per session'
    },
    {
      id: 'site-visit',
      title: 'On-Site Consultation',
      description: 'Expert visits your project site for detailed assessment and recommendations',
      icon: 'MapPin',
      features: [
        'Physical site inspection',
        'Detailed assessment report',
        'Installation guidance',
        'Quality assurance check',
        'Training for your team'
      ],
      duration: '4-6 hours',
      price: '₹15,000 + travel costs'
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'End-to-end project management for large electrical installations',
      icon: 'Briefcase',
      features: [
        'Complete project oversight',
        'Timeline management',
        'Quality control',
        'Vendor coordination',
        'Progress reporting'
      ],
      duration: 'Project duration',
      price: 'Custom pricing'
    }
  ];

  const projectTypeOptions = [
    { value: 'residential', label: 'Residential Building' },
    { value: 'commercial', label: 'Commercial Complex' },
    { value: 'industrial', label: 'Industrial Facility' },
    { value: 'infrastructure', label: 'Infrastructure Project' },
    { value: 'renovation', label: 'Renovation/Upgrade' },
    { value: 'maintenance', label: 'Maintenance Project' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (Within 1 week)' },
    { value: '1-month', label: '1 Month' },
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '1-year', label: '1 Year' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: '1-5-lakhs', label: '₹1-5 Lakhs' },
    { value: '5-10-lakhs', label: '₹5-10 Lakhs' },
    { value: '10-25-lakhs', label: '₹10-25 Lakhs' },
    { value: '25-50-lakhs', label: '₹25-50 Lakhs' },
    { value: '50-lakhs-plus', label: '₹50 Lakhs+' },
    { value: 'not-decided', label: 'Not Decided Yet' }
  ];

  const selectedServiceData = consultationServices.find(service => service.id === selectedService);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Consultation request:', { service: selectedService, ...formData });
  };

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Project Consultation Services
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Get expert guidance for your electrical projects. From plan reviews to on-site consultations, our team of certified electricians is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Choose Service Type</h3>
            <div className="space-y-4">
              {consultationServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full p-4 rounded-xl text-left brand-transition ring-1 ${
                    selectedService === service.id
                      ? 'bg-gradient-to-br from-cyan-600/30 to-indigo-700/30 text-white ring-white/10 shadow-xl'
                      : 'bg-white/5 hover:bg-white/10 text-white ring-white/10'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedService === service.id
                        ? 'bg-gradient-to-br from-cyan-500 to-indigo-600' :'bg-white/10'
                    }`}>
                      <Icon 
                        name={service.icon} 
                        size={20} 
                        color={selectedService === service.id ? '#FFFFFF' : '#A5B4FC'}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className={`text-sm ${
                        selectedService === service.id ? 'text-white/80' : 'text-white/60'
                      }`}>
                        {service.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs">
                        <span className={selectedService === service.id ? 'text-cyan-300' : 'text-white/70'}>
                          {service.duration}
                        </span>
                        <span className={selectedService === service.id ? 'text-cyan-300' : 'text-white/70'}>
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details & Form */}
          <div className="lg:col-span-2">
            {/* Service Details */}
            <div className="glass-ios rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                  <Icon name={selectedServiceData.icon} size={32} color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedServiceData.title}</h3>
                  <p className="text-white/70">{selectedServiceData.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={16} color="#93C5FD" />
                    <span className="text-sm font-medium text-white/90">Duration</span>
                  </div>
                  <div className="font-semibold text-white">{selectedServiceData.duration}</div>
                </div>
                <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="CreditCard" size={16} color="#A78BFA" />
                    <span className="text-sm font-medium text-white/90">Pricing</span>
                  </div>
                  <div className="font-semibold text-white">{selectedServiceData.price}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedServiceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={10} color="#FFFFFF" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-white/95">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="glass-ios rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Request Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Project Name"
                    type="text"
                    placeholder="Enter project name"
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    required
                    className="!bg-white !text-black !border-white placeholder:text-gray-500"
                  />
                  <Select
                    label="Project Type"
                    options={projectTypeOptions}
                    value={formData.projectType}
                    onChange={(value) => handleInputChange('projectType', value)}
                    placeholder="Select project type"
                    required
                    className="select-light"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Select
                    label="Timeline"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => handleInputChange('timeline', value)}
                    placeholder="Select timeline"
                    required
                    className="select-light"
                  />
                  <Select
                    label="Budget Range"
                    options={budgetOptions}
                    value={formData.budget}
                    onChange={(value) => handleInputChange('budget', value)}
                    placeholder="Select budget range"
                    required
                    className="select-light"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Contact Person"
                    type="text"
                    placeholder="Your full name"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    required
                    className="!bg-white !text-black !border-white placeholder:text-gray-500"
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="!bg-white !text-black !border-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="!bg-white !text-black !border-white placeholder:text-gray-500"
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="!bg-white !text-black !border-white placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white placeholder-white/50 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none"
                    placeholder="Describe your project requirements, challenges, and specific areas where you need consultation..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    iconName="Send"
                    iconPosition="left"
                    className="cta-primary flex-1"
                  >
                    Request Consultation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-white text-gray-900 border-white hover:bg-gray-100 hover:text-black"
                  >
                    Schedule Call
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectConsultation;