import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WarrantyCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const warrantyTypes = [
    {
      id: 1,
      name: 'Standard Warranty',
      duration: '2 Years',
      coverage: 'Manufacturing Defects',
      icon: 'Shield',
      color: 'from-[#10B981] to-[#34D399]',
      features: [
        'Free replacement of defective parts',
        'Labor costs covered',
        'Technical support included',
        'Return shipping covered'
      ]
    },
    {
      id: 2,
      name: 'Extended Warranty',
      duration: '5 Years',
      coverage: 'Comprehensive Protection',
      icon: 'Star',
      color: 'from-[#F59E0B] to-[#FBBF24]',
      features: [
        'All standard warranty benefits',
        'Extended coverage period',
        'Priority support access',
        'Annual maintenance check'
      ]
    },
    {
      id: 3,
      name: 'Premium Warranty',
      duration: '10 Years',
      coverage: 'Maximum Protection',
      icon: 'Crown',
      color: 'from-[#8B5CF6] to-[#A78BFA]',
      features: [
        'Complete system coverage',
        'On-site service included',
        'Dedicated support manager',
        'Performance guarantees'
      ]
    }
  ];

  const recentClaims = [
    {
      id: 1,
      product: 'MCB 32A 3-Pole',
      serialNumber: 'MCB-32A-3P-2024-001',
      issue: 'Intermittent tripping under normal load',
      status: 'In Progress',
      priority: 'High',
      submittedDate: '2025-01-15',
      lastUpdated: '2025-01-16'
    },
    {
      id: 2,
      product: 'ELCB 63A 4-Pole',
      serialNumber: 'ELCB-63A-4P-2024-045',
      issue: 'False tripping during operation',
      status: 'Approved',
      priority: 'Medium',
      submittedDate: '2025-01-12',
      lastUpdated: '2025-01-14'
    },
    {
      id: 3,
      product: 'Distribution Board 200A',
      serialNumber: 'DB-200A-2024-023',
      issue: 'Terminal overheating under load',
      status: 'Completed',
      priority: 'High',
      submittedDate: '2025-01-08',
      lastUpdated: '2025-01-13'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'from-[#EF4444] to-[#F87171]';
      case 'Medium': return 'from-[#F59E0B] to-[#FBBF24]';
      case 'Low': return 'from-[#10B981] to-[#34D399]';
      default: return 'from-[#6B7280] to-[#9CA3AF]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'from-[#F59E0B] to-[#FBBF24]';
      case 'Approved': return 'from-[#10B981] to-[#34D399]';
      case 'Completed': return 'from-[#8B5CF6] to-[#A78BFA]';
      case 'Pending': return 'from-[#6B7280] to-[#9CA3AF]';
      default: return 'from-[#6B7280] to-[#9CA3AF]';
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] min-h-screen py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full text-white text-sm font-semibold mb-6">
            <Icon name="Shield" size={16} className="mr-2" />
            Warranty Center
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
              Warranty Protection
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Manage your warranty claims, register products, and access comprehensive coverage information
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex justify-center">
            <div className="bg-[#1F2937] rounded-2xl border border-[#374151] p-2">
              {[
                { id: 'overview', name: 'Overview', icon: 'Grid3x3' },
                { id: 'claims', name: 'My Claims', icon: 'FileText' },
                { id: 'register', name: 'Register Product', icon: 'Plus' },
                { id: 'support', name: 'Support', icon: 'HelpCircle' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#374151]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={tab.icon} size={20} />
                    <span className="font-medium">{tab.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Warranty Coverage Options */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Warranty Coverage Options
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {warrantyTypes.map((warranty, index) => (
                    <div
                      key={warranty.id}
                      className="group bg-[#1F2937] rounded-3xl border border-[#374151] p-8 hover:border-[#F59E0B]/50 hover:shadow-xl hover:shadow-[#F59E0B]/10 transition-all duration-500 hover:scale-105"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${warranty.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={warranty.icon} size={32} color="white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-white text-center mb-4">
                        {warranty.name}
                      </h3>
                      
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-[#F59E0B] mb-2">
                          {warranty.duration}
                        </div>
                        <p className="text-gray-400 text-sm">
                          {warranty.coverage}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-3 mb-6">
                        {warranty.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <Icon name="Check" size={16} className="text-[#10B981] mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full py-3 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-semibold rounded-xl hover:from-[#FBBF24] hover:to-[#F59E0B] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F59E0B]/25">
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-3xl border border-[#374151] p-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'File New Claim', icon: 'Plus', color: 'from-[#EF4444] to-[#F87171]' },
                    { name: 'Register Product', icon: 'Package', color: 'from-[#3B82F6] to-[#60A5FA]' },
                    { name: 'Check Status', icon: 'Search', color: 'from-[#10B981] to-[#34D399]' },
                    { name: 'Download Certificate', icon: 'Download', color: 'from-[#8B5CF6] to-[#A78BFA]' }
                  ].map((action, index) => (
                    <button
                      key={action.name}
                      className="group p-6 bg-[#1F2937] rounded-2xl border border-[#374151] hover:border-[#F59E0B]/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={action.icon} size={24} color="white" />
                      </div>
                      <h4 className="text-white font-semibold text-center group-hover:text-[#F59E0B] transition-colors duration-300">
                        {action.name}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* My Claims Tab */}
          {activeTab === 'claims' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white">
                  Warranty Claims
                </h2>
                <button className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-semibold rounded-xl hover:from-[#34D399] hover:to-[#10B981] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/25">
                  <Icon name="Plus" size={20} className="mr-2 inline" />
                  File New Claim
                </button>
              </div>
              
              <div className="space-y-4">
                {recentClaims.map((claim, index) => (
                  <div
                    key={claim.id}
                    className="bg-[#1F2937] rounded-2xl border border-[#374151] p-6 hover:border-[#F59E0B]/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">{claim.product}</h3>
                        <p className="text-gray-400 text-sm mb-2">Serial: {claim.serialNumber}</p>
                        <p className="text-gray-300">{claim.issue}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(claim.status)} text-white text-xs font-semibold rounded-full`}>
                          {claim.status}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${getPriorityColor(claim.priority)} text-white text-xs font-semibold rounded-full`}>
                          {claim.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Submitted: {new Date(claim.submittedDate).toLocaleDateString()}</span>
                      <span>Updated: {new Date(claim.lastUpdated).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Register Product Tab */}
          {activeTab === 'register' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Register Your Product
              </h2>
              
              <div className="bg-[#1F2937] rounded-3xl border border-[#374151] p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Product Type</label>
                    <select className="w-full bg-[#374151] text-white border border-[#4B5563] rounded-xl px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20">
                      <option>Select Product Type</option>
                      <option>MCB (Miniature Circuit Breaker)</option>
                      <option>ELCB (Earth Leakage Circuit Breaker)</option>
                      <option>Distribution Board</option>
                      <option>Switchgear</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Serial Number</label>
                    <input
                      type="text"
                      placeholder="Enter product serial number"
                      className="w-full bg-[#374151] text-white border border-[#4B5563] rounded-xl px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Purchase Date</label>
                    <input
                      type="date"
                      className="w-full bg-[#374151] text-white border border-[#4B5563] rounded-xl px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Installation Address</label>
                    <textarea
                      placeholder="Enter installation address"
                      rows={3}
                      className="w-full bg-[#374151] text-white border border-[#4B5563] rounded-xl px-4 py-3 focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-semibold rounded-xl hover:from-[#FBBF24] hover:to-[#F59E0B] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F59E0B]/25"
                  >
                    Register Product
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Support Tab */}
          {activeTab === 'support' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Warranty Support
              </h2>
              
              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Live Chat', icon: 'MessageCircle', color: 'from-[#10B981] to-[#34D399]', description: 'Get instant help from our support team' },
                  { name: 'Phone Support', icon: 'Phone', color: 'from-[#3B82F6] to-[#60A5FA]', description: 'Call us for immediate assistance' },
                  { name: 'Email Support', icon: 'Mail', color: 'from-[#8B5CF6] to-[#A78BFA]', description: 'Send us detailed information' }
                ].map((method, index) => (
                  <div
                    key={method.name}
                    className="bg-[#1F2937] rounded-2xl border border-[#374151] p-6 text-center hover:border-[#F59E0B]/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={method.icon} size={32} color="white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.name}</h3>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                ))}
              </div>
              
              {/* FAQ Section */}
              <div className="bg-[#1F2937] rounded-3xl border border-[#374151] p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    { question: 'What is covered under standard warranty?', answer: 'Standard warranty covers manufacturing defects, material failures, and performance issues under normal operating conditions.' },
                    { question: 'How long does warranty processing take?', answer: 'Most warranty claims are processed within 5-7 business days. Complex cases may take up to 14 days.' },
                    { question: 'Can I extend my warranty period?', answer: 'Yes, you can upgrade to extended warranty plans at any time during the standard warranty period.' }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-[#374151] pb-4 last:border-b-0">
                      <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WarrantyCenter;