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
    <div className="py-24 relative overflow-hidden min-h-screen">
      {/* Premium Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-black/20">
            <Icon name="Star" size={16} className="mr-2 text-[#ff0c0e]" />
            Premium Warranty Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Comprehensive{' '}
            <span className="text-[#ff0c0e]">
              Warranty Protection
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Manage your warranty claims, register products, and access comprehensive coverage information
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-2 shadow-lg shadow-black/20">
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
                      ? 'bg-[#ff0c0e] text-white shadow-lg'
                      : 'text-white hover:text-white hover:bg-white/10'
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
        <div>
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
                      className="group relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 p-8 hover:border-[#ff0c0e]/50 hover:shadow-2xl hover:shadow-[#ff0c0e]/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {/* Glossy Glassmorphism Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-[#ff0c0e] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon name={warranty.icon} size={32} color="white" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-[#ff0c0e] transition-colors duration-300">
                          {warranty.name}
                        </h3>
                        
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-[#ff0c0e] mb-2">
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
                              <Icon name="Check" size={16} className="text-[#ff0c0e] mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button className="w-full py-3 bg-white text-white font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="relative rounded-3xl border border-white/20 p-12 overflow-hidden group">
                {/* Glossy Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { name: 'File New Claim', icon: 'Plus', color: 'from-[#ff0c0e] to-[#e00b0c]' },
                      { name: 'Register Product', icon: 'Package', color: 'from-[#ff0c0e] to-[#e00b0c]' },
                      { name: 'Check Status', icon: 'Search', color: 'from-[#ff0c0e] to-[#e00b0c]' },
                      { name: 'Download Certificate', icon: 'Download', color: 'from-[#ff0c0e] to-[#e00b0c]' }
                    ].map((action, index) => (
                      <button
                        key={action.name}
                        className="group p-6 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 hover:border-[#ff0c0e]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff0c0e]/20"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon name={action.icon} size={24} color="white" />
                        </div>
                        <h4 className="text-white font-semibold text-center group-hover:text-[#ff0c0e] transition-colors duration-300">
                          {action.name}
                        </h4>
                      </button>
                    ))}
                  </div>
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
                <button className="px-6 py-3 bg-[#ff0c0e] hover:bg-[#e00b0c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#ff0c0e]/25">
                  <Icon name="Plus" size={20} className="mr-2 inline" />
                  File New Claim
                </button>
              </div>
              
              <div className="space-y-4">
                {recentClaims.map((claim, index) => (
                  <div
                    key={claim.id}
                    className="group relative bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/20 p-6 hover:border-[#ff0c0e]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff0c0e]/20 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glossy Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff0c0e] transition-colors duration-300">{claim.product}</h3>
                          <p className="text-gray-400 text-sm mb-2">Serial: {claim.serialNumber}</p>
                          <p className="text-gray-300">{claim.issue}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <span className="px-3 py-1 bg-[#ff0c0e] text-white text-xs font-semibold rounded-full shadow-lg">
                            {claim.status}
                          </span>
                          <span className="px-3 py-1 bg-[#ff0c0e] text-white text-xs font-semibold rounded-full shadow-lg">
                            {claim.priority}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>Submitted: {new Date(claim.submittedDate).toLocaleDateString()}</span>
                        <span>Updated: {new Date(claim.lastUpdated).toLocaleDateString()}</span>
                      </div>
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
              
              <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 p-8 overflow-hidden group">
                {/* Glossy Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <form className="relative z-10 space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Product Type</label>
                    <select className="w-full bg-white/10 backdrop-blur-2xl text-white border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff0c0e] focus:ring-2 focus:ring-[#ff0c0e]/20 transition-all duration-300">
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
                      className="w-full bg-white/10 backdrop-blur-2xl text-white border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff0c0e] focus:ring-2 focus:ring-[#ff0c0e]/20 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Purchase Date</label>
                    <input
                      type="date"
                      className="w-full bg-white/10 backdrop-blur-2xl text-white border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff0c0e] focus:ring-2 focus:ring-[#ff0c0e]/20 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Installation Address</label>
                    <textarea
                      placeholder="Enter installation address"
                      rows={3}
                      className="w-full bg-white/10 backdrop-blur-2xl text-white border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[#ff0c0e] focus:ring-2 focus:ring-[#ff0c0e]/20 transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#ff0c0e] hover:bg-[#e00b0c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#ff0c0e]/25"
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
                  { name: 'Live Chat', icon: 'MessageCircle', description: 'Get instant help from our support team' },
                  { name: 'Phone Support', icon: 'Phone', description: 'Call us for immediate assistance' },
                  { name: 'Email Support', icon: 'Mail', description: 'Send us detailed information' }
                ].map((method, index) => (
                  <div
                    key={method.name}
                    className="group relative bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/20 p-6 text-center hover:border-[#ff0c0e]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff0c0e]/20 overflow-hidden"
                  >
                    {/* Glossy Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-[#ff0c0e] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon name={method.icon} size={32} color="white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff0c0e] transition-colors duration-300">{method.name}</h3>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* FAQ Section */}
              <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 p-8 overflow-hidden group">
                {/* Glossy Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      { question: 'What is covered under standard warranty?', answer: 'Standard warranty covers manufacturing defects, material failures, and performance issues under normal operating conditions.' },
                      { question: 'How long does warranty processing take?', answer: 'Most warranty claims are processed within 5-7 business days. Complex cases may take up to 14 days.' },
                      { question: 'Can I extend my warranty period?', answer: 'Yes, you can upgrade to extended warranty plans at any time during the standard warranty period.' }
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-white/20 pb-4 last:border-b-0">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-[#ff0c0e] transition-colors duration-300">{faq.question}</h4>
                        <p className="text-gray-400 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
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