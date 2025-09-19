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
    <div className="py-24 relative overflow-hidden min-h-screen">
      {/* Premium Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-black/20">
            <Icon name="Star" size={16} className="mr-2 text-[#ff0c0e]" />
            Premium Support Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose Your{' '}
            <span className="text-[#ff0c0e]">
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
              {/* Card Background - Dark Grey Translucent (Same as CTA Buttons) */}
              <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-xl shadow-white/10"></div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#ff0c0e]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8 h-full">
                {/* Icon and Status */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800/40 backdrop-blur-2xl border border-white/25 rounded-2xl flex items-center justify-center group-hover:border-[#ff0c0e] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/15">
                    <Icon name={route.icon} size={28} color="#ff0c0e" strokeWidth={2} />
                  </div>
                  
                  {route.available && (
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#ff0c0e] rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-[#ff0c0e]">Available</span>
                    </div>
                  )}
                </div>
                
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff0c0e] transition-colors duration-300">
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
                        <Icon name="Check" size={12} className="text-[#ff0c0e] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Response Time and Arrow */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-white bg-gray-800/40 backdrop-blur-2xl px-3 py-2 rounded-full border border-white/25 shadow-lg shadow-white/15">
                    {route.responseTime}
                  </span>
                  
                  <div className="w-10 h-10 bg-gray-800/40 backdrop-blur-2xl border border-white/25 rounded-full flex items-center justify-center group-hover:border-[#ff0c0e] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-white/15">
                    <Icon 
                      name="ArrowRight" 
                      size={18} 
                      className="text-[#ff0c0e] group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent border-[#ff0c0e] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center mt-20 relative">
          {/* Additional background coverage for bottom section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <div className="bg-white/8 backdrop-blur-2xl rounded-t-3xl border border-white/20 p-12 shadow-xl shadow-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to help you with any questions or technical issues
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                              <button
                onClick={() => onRouteSelect('live-chat')}
                className="px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/25 text-white font-semibold rounded-xl hover:border-[#ff0c0e] hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/15"
              >
                                  <Icon name="MessageCircle" size={20} className="mr-2 inline text-[#ff0c0e]" />
                Start Live Chat
              </button>
              <button
                onClick={() => onRouteSelect('video-call')}
                className="px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/25 text-white font-semibold rounded-xl hover:border-[#ff0c0e] hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/15"
              >
                <Icon name="Video" size={20} className="mr-2 inline text-[#ff0c0e]" />
                Schedule Video Call
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportRouter;