import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SupportRouter = ({ onRouteSelect }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const supportRoutes = [
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Connect instantly with our technical experts for real-time assistance',
      icon: 'MessageCircle',
      available: true,
      responseTime: '< 2 minutes',
      features: ['Real-time chat', 'File sharing', 'Screen sharing', 'Instant response']
    },
    {
      id: 'video-call',
      title: 'Video Consultation',
      description: 'Schedule a video call with our electrical engineers for complex issues',
      icon: 'Video',
      available: true,
      responseTime: 'Same day',
      features: ['HD video quality', 'Screen recording', 'Expert engineers', 'Flexible scheduling']
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Browse our comprehensive library of guides and documentation',
      icon: 'BookOpen',
      available: true,
      responseTime: 'Instant',
      features: ['10,000+ articles', 'Video tutorials', 'PDF downloads', 'Search optimized']
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Get help from verified contractors and electrical professionals',
      icon: 'Users',
      available: true,
      responseTime: '< 1 hour',
      features: ['Verified experts', 'Project sharing', 'Best practices', 'Networking']
    },
    {
      id: 'warranty',
      title: 'Warranty Claims',
      description: 'Process warranty claims with photo upload and tracking',
      icon: 'Shield',
      available: true,
      responseTime: '24-48 hours',
      features: ['Photo upload', 'Status tracking', 'Fast processing', 'Expert review']
    },
    {
      id: 'returns',
      title: 'Returns & Exchange',
      description: 'Initiate returns with prepaid shipping labels and status tracking',
      icon: 'RotateCcw',
      available: true,
      responseTime: '2-3 days',
      features: ['Prepaid shipping', 'Easy tracking', 'Quick refunds', 'No questions asked']
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] to-[#0F172A]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1D4ED8]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-[#1E293B] border border-[#475569] rounded-full text-white text-sm font-semibold mb-6">
            <Icon name="Star" size={16} className="mr-2 text-[#3B82F6]" />
            Premium Support Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose Your{' '}
            <span className="text-[#3B82F6]">
              Support Channel
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Select the most convenient way to get the help you need from our world-class support team
          </p>
        </div>
        
        {/* Support Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportRoutes.map((route, index) => (
            <div
              key={route.id}
              onMouseEnter={() => setHoveredCard(route.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => onRouteSelect(route.id)}
              className={`group relative cursor-pointer transition-all duration-500 transform ${
                hoveredCard === route.id ? 'scale-105 -translate-y-2' : 'scale-100'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-[#1E293B] rounded-3xl border border-[#475569] opacity-80"></div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-[#1E293B] border border-[#475569] rounded-2xl flex items-center justify-center group-hover:border-[#3B82F6] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon name={route.icon} size={28} color="#3B82F6" strokeWidth={2} />
                  </div>
                  
                  {route.available && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-[#3B82F6]">Available</span>
                    </div>
                  )}
                </div>
                
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">
                    {route.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {route.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {route.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
                        <Icon name="Check" size={12} className="text-[#3B82F6] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Response Time and Arrow */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-white bg-[#1E293B] px-3 py-2 rounded-full border border-[#475569]">
                    {route.responseTime}
                  </span>
                  
                  <div className="w-10 h-10 bg-[#1E293B] border border-[#475569] rounded-full flex items-center justify-center group-hover:border-[#3B82F6] group-hover:scale-110 transition-transform duration-300">
                    <Icon 
                      name="ArrowRight" 
                      size={18} 
                      className="text-[#3B82F6] group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent border-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-[#1E293B] rounded-3xl border border-[#475569] p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or technical issues
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onRouteSelect('live-chat')}
                className="px-8 py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/25"
              >
                <Icon name="MessageCircle" size={20} className="mr-2 inline" />
                Start Live Chat
              </button>
              <button
                onClick={() => onRouteSelect('video-call')}
                className="px-8 py-4 bg-[#1E293B] border border-[#475569] text-white font-semibold rounded-xl hover:border-[#3B82F6] hover:bg-[#334155] transition-all duration-300 hover:scale-105"
              >
                <Icon name="Video" size={20} className="mr-2 inline" />
                Schedule Video Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportRouter;