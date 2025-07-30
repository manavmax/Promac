import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const ContactForm = ({ type = 'general', onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    attachments: [],
    urgency: 'normal',
    preferredContact: 'email',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (type === 'consultation' && !formData.projectType.trim()) {
      newErrors.projectType = 'Project type is required for consultation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit?.(formData);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
        attachments: [],
        urgency: 'normal',
        preferredContact: 'email',
        newsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const urgencyOptions = [
    { value: 'low', label: 'Low Priority', color: 'text-green-600' },
    { value: 'normal', label: 'Normal', color: 'text-blue-600' },
    { value: 'high', label: 'High Priority', color: 'text-brand-amber' },
    { value: 'urgent', label: 'Urgent', color: 'text-red-600' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email', icon: 'Mail' },
    { value: 'phone', label: 'Phone Call', icon: 'Phone' },
    { value: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
    { value: 'video', label: 'Video Call', icon: 'Video' }
  ];

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
          <Icon name={type === 'consultation' ? 'Users' : 'MessageSquare'} size={20} color="white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {type === 'consultation' ? 'Request Consultation' : 'Contact Us'}
          </h3>
          <p className="text-sm text-text-secondary">
            {type === 'consultation' ?'Get expert advice for your electrical project' :'We\'ll get back to you within 24 hours'
            }
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
            required
          />

          <Input
            label="Company Name"
            type="text"
            placeholder="Your company (optional)"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </div>

        {type === 'consultation' && (
          <Input
            label="Project Type"
            type="text"
            placeholder="e.g., Commercial wiring, Home automation, Industrial setup"
            value={formData.projectType}
            onChange={(e) => handleInputChange('projectType', e.target.value)}
            error={errors.projectType}
            required
          />
        )}

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent resize-none"
            rows={4}
            placeholder={type === 'consultation' 
              ? "Describe your project requirements, timeline, and any specific challenges you're facing..." :"How can we help you today?"
            }
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Priority Level
            </label>
            <div className="space-y-2">
              {urgencyOptions.map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="urgency"
                    value={option.value}
                    checked={formData.urgency === option.value}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="text-brand-navy focus:ring-brand-navy"
                  />
                  <span className={`text-sm ${option.color}`}>
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Preferred Contact Method
            </label>
            <div className="space-y-2">
              {contactMethods.map((method) => (
                <label key={method.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method.value}
                    checked={formData.preferredContact === method.value}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                    className="text-brand-navy focus:ring-brand-navy"
                  />
                  <Icon name={method.icon} size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-primary">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <Checkbox
            label="Subscribe to our newsletter for electrical tips and product updates"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="left"
          className="cta-primary"
        >
          {isSubmitting ? 'Sending...' : type === 'consultation' ? 'Request Consultation' : 'Send Message'}
        </Button>
      </form>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm text-blue-800 font-medium">
              Response Time Guarantee
            </p>
            <p className="text-xs text-blue-600 mt-1">
              General inquiries: Within 24 hours • Technical consultations: Within 4 hours • Urgent requests: Within 2 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;