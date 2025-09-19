import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const FloatingActionButton = ({ onAction }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions = [
    {
      id: 'emergency-order',
      label: 'Emergency Order',
      icon: 'Zap',
      color: 'bg-red-500 hover:bg-red-600 text-white',
      urgent: true
    },
    {
      id: 'technical-support',
      label: 'Technical Support',
      icon: 'Headphones',
      color: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    {
      id: 'bulk-quote',
      label: 'Bulk Quote',
      icon: 'Calculator',
      color: 'bg-green-500 hover:bg-green-600 text-white'
    },
    {
      id: 'barcode-scan',
      label: 'Scan Product',
      icon: 'QrCode',
      color: 'bg-purple-500 hover:bg-purple-600 text-white'
    }
  ];

  const handleActionClick = (actionId) => {
    onAction(actionId);
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}
      {/* Action Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 mb-4">
          {quickActions?.map((action, index) => (
            <div
              key={action?.id}
              className="flex items-center space-x-3 animate-in slide-in-from-right duration-200"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                {action?.label}
              </span>
              <button
                onClick={() => handleActionClick(action?.id)}
                className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${action?.color} ${
                  action?.urgent ? 'animate-pulse' : ''
                }`}
              >
                <Icon name={action?.icon} size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-premium flex items-center justify-center transition-all duration-300 transform hover:scale-110 brand-red-glow ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        <Icon name={isExpanded ? "X" : "Plus"} size={24} />
      </button>
      {/* Emergency Indicator */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default FloatingActionButton;