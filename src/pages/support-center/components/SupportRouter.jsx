import React from 'react';
import Icon from '../../../components/AppIcon';

const SupportRouter = ({ onRouteSelect }) => {
  const supportRoutes = [
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Connect instantly with our technical experts for real-time assistance',
      icon: 'MessageCircle',
      color: 'bg-brand-green',
      available: true,
      responseTime: '< 2 minutes'
    },
    {
      id: 'video-call',
      title: 'Video Consultation',
      description: 'Schedule a video call with our electrical engineers for complex issues',
      icon: 'Video',
      color: 'bg-action-blue',
      available: true,
      responseTime: 'Same day'
    },
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Browse our comprehensive library of guides and documentation',
      icon: 'BookOpen',
      color: 'bg-brand-amber',
      available: true,
      responseTime: 'Instant'
    },
    {
      id: 'community',
      title: 'Community Forum',
      description: 'Get help from verified contractors and electrical professionals',
      icon: 'Users',
      color: 'bg-brand-orange',
      available: true,
      responseTime: '< 1 hour'
    },
    {
      id: 'warranty',
      title: 'Warranty Claims',
      description: 'Process warranty claims with photo upload and tracking',
      icon: 'Shield',
      color: 'bg-brand-navy',
      available: true,
      responseTime: '24-48 hours'
    },
    {
      id: 'returns',
      title: 'Returns & Exchange',
      description: 'Initiate returns with prepaid shipping labels and status tracking',
      icon: 'RotateCcw',
      color: 'bg-text-secondary',
      available: true,
      responseTime: '2-3 days'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Choose Your Support Channel
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Select the most convenient way to get the help you need
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {supportRoutes.map((route) => (
          <div
            key={route.id}
            onClick={() => onRouteSelect(route.id)}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl brand-transition cursor-pointer border border-gray-100 hover:border-brand-amber/30"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${route.color} rounded-xl flex items-center justify-center group-hover:scale-110 brand-transition`}>
                <Icon name={route.icon} size={24} color="white" strokeWidth={2} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-brand-navy brand-transition">
                    {route.title}
                  </h3>
                  {route.available && (
                    <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse"></div>
                  )}
                </div>
                
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {route.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-navy bg-brand-navy/10 px-2 py-1 rounded-full">
                    {route.responseTime}
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-text-secondary group-hover:text-brand-navy group-hover:translate-x-1 brand-transition" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportRouter;