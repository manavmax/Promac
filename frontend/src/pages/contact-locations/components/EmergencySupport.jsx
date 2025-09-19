import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencySupport = ({ onEmergencyContact }) => {
  const [selectedEmergency, setSelectedEmergency] = useState(null);

  const emergencyTypes = [
    {
      id: 'power-outage',
      title: 'Power Outage',
      description: 'Complete power failure or electrical system breakdown',
      icon: 'Zap',
      severity: 'critical',
      responseTime: '30 minutes',
      color: 'red'
    },
    {
      id: 'electrical-fire',
      title: 'Electrical Fire Risk',
      description: 'Sparking, burning smell, or visible electrical hazards',
      icon: 'Flame',
      severity: 'critical',
      responseTime: '15 minutes',
      color: 'red'
    },
    {
      id: 'equipment-failure',
      title: 'Critical Equipment Failure',
      description: 'Essential electrical equipment malfunction',
      icon: 'AlertTriangle',
      severity: 'high',
      responseTime: '1 hour',
      color: 'amber'
    },
    {
      id: 'safety-hazard',
      title: 'Electrical Safety Hazard',
      description: 'Exposed wires, water damage, or safety concerns',
      icon: 'Shield',
      severity: 'high',
      responseTime: '45 minutes',
      color: 'amber'
    }
  ];

  const emergencyContacts = [
    {
      type: 'hotline',
      title: '24/7 Emergency Hotline',
      number: '1800-PROMAC-911',
      description: 'Immediate response for critical electrical emergencies',
      icon: 'Phone',
      available: true
    },
    {
      type: 'whatsapp',
      title: 'WhatsApp Emergency',
      number: '+91 98765 43210',
      description: 'Send photos/videos of the issue for quick assessment',
      icon: 'MessageCircle',
      available: true
    },
    {
      type: 'video',
      title: 'Video Emergency Call',
      number: 'Video Call Available',
      description: 'Live video consultation with electrical experts',
      icon: 'Video',
      available: true
    }
  ];

  const safetyTips = [
    {
      icon: 'AlertCircle',
      title: 'Turn off main power',
      description: 'Switch off the main electrical supply if safe to do so'
    },
    {
      icon: 'Users',
      title: 'Evacuate if necessary',
      description: 'Move people away from the affected area'
    },
    {
      icon: 'Phone',
      title: 'Call emergency services',
      description: 'Contact fire department (101) for electrical fires'
    },
    {
      icon: 'Shield',
      title: 'Do not touch',
      description: 'Avoid touching electrical equipment or water near electricity'
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500/50 bg-red-900/20 backdrop-blur-sm';
      case 'high':
        return 'border-amber-500/50 bg-amber-900/20 backdrop-blur-sm';
      default:
        return 'border-gray-500/50 bg-gray-900/20 backdrop-blur-sm';
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'red':
        return 'text-red-400';
      case 'amber':
        return 'text-amber-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 text-white rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon name="AlertTriangle" size={24} color="white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              Emergency Electrical Support
            </h2>
            <p className="text-red-100">
              24/7 immediate assistance for critical electrical issues
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyContacts.map((contact) => (
            <Button
              key={contact.type}
              variant="outline"
              size="lg"
              iconName={contact.icon}
              iconPosition="left"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 justify-start"
              onClick={() => onEmergencyContact(contact)}
            >
              <div className="text-left">
                <div className="font-semibold">{contact.title}</div>
                <div className="text-sm opacity-80">{contact.number}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Emergency Types */}
      <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-2xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          Select Emergency Type
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyTypes.map((emergency) => (
            <div
              key={emergency.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                selectedEmergency?.id === emergency.id
                  ? 'border-[#ff0c0e] bg-[#ff0c0e]/10 backdrop-blur-sm'
                  : getSeverityColor(emergency.severity)
              }`}
              onClick={() => setSelectedEmergency(emergency)}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm ${
                  emergency.severity === 'critical' ? 'bg-red-900/30 border border-red-500/30' : 'bg-amber-900/30 border border-amber-500/30'
                }`}>
                  <Icon 
                    name={emergency.icon} 
                    size={20} 
                    className={getIconColor(emergency.color)} 
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">
                    {emergency.title}
                  </h4>
                  <p className="text-sm text-gray-300 mb-2">
                    {emergency.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm ${
                      emergency.severity === 'critical' ?'bg-red-900/30 text-red-300 border border-red-500/30' :'bg-amber-900/30 text-amber-300 border border-amber-500/30'
                    }`}>
                      {emergency.severity.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-400">
                        {emergency.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedEmergency && (
          <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-blue-300">
                Emergency Response Protocol
              </h4>
              <span className="text-sm text-blue-400">
                Response Time: {selectedEmergency.responseTime}
              </span>
            </div>
            <p className="text-sm text-blue-300 mb-4">
              You've selected: <strong>{selectedEmergency.title}</strong>
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              onClick={() => onEmergencyContact({ 
                type: 'emergency', 
                emergency: selectedEmergency 
              })}
            >
              Call Emergency Support Now
            </Button>
          </div>
        )}
      </div>

      {/* Safety Guidelines */}
      <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-2xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          Immediate Safety Steps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg backdrop-blur-sm hover:bg-yellow-900/30 transition-all duration-300">
              <div className="w-8 h-8 bg-yellow-900/30 border border-yellow-500/30 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                <Icon name={tip.icon} size={16} className="text-yellow-400" />
              </div>
              <div>
                <h4 className="font-medium text-yellow-300 mb-1">
                  {tip.title}
                </h4>
                <p className="text-sm text-yellow-200">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Services Info */}
      <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 shadow-2xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          Emergency Service Coverage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">
              Pan-India Coverage
            </h4>
            <p className="text-sm text-gray-300">
              Emergency support available across all major cities and towns
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Clock" size={24} className="text-[#ff0c0e]" />
            </div>
            <h4 className="font-semibold text-white mb-2">
              24/7 Availability
            </h4>
            <p className="text-sm text-gray-300">
              Round-the-clock emergency response team ready to assist
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-white mb-2">
              Expert Technicians
            </h4>
            <p className="text-sm text-gray-300">
              Certified electrical experts with emergency response training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySupport;