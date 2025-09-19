import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SalesRepCard = ({ representative, onContact, onScheduleMeeting }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-green-400 bg-green-900/20';
      case 'busy':
        return 'text-yellow-400 bg-yellow-900/20';
      case 'offline':
        return 'text-gray-400 bg-gray-900/20';
      default:
        return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getAvailabilityText = (status) => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'busy':
        return 'In Meeting';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02]">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={representative.avatar}
              alt={representative.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
            representative.availability === 'available' ? 'bg-green-400' :
            representative.availability === 'busy'? 'bg-yellow-400' : 'bg-gray-400'
          }`}></div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {representative.name}
          </h3>
          <p className="text-sm text-gray-300 font-medium mb-1">
            {representative.title}
          </p>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            representative.availability === 'available' ? 'bg-green-900/30 text-green-300 border border-green-500/30' :
            representative.availability === 'busy' ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-500/30' :
            'bg-gray-900/30 text-gray-300 border border-gray-500/30'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              representative.availability === 'available' ? 'bg-green-400' :
              representative.availability === 'busy' ? 'bg-yellow-400' :
              'bg-gray-400'
            }`}></div>
            {getAvailabilityText(representative.availability)}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-400 hover:text-white transition-all duration-300"
        >
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="MapPin" size={16} className="text-gray-400" />
          <div className="flex-1">
            <p className="text-sm text-white">
              {representative.territory}
            </p>
            <p className="text-xs text-gray-400">
              Coverage Area
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Phone" size={16} className="text-gray-400" />
          <div className="flex-1">
            <p className="text-sm text-white">
              {representative.phone}
            </p>
            <p className="text-xs text-gray-400">
              Direct Line
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Mail" size={16} className="text-gray-400" />
          <div className="flex-1">
            <p className="text-sm text-white">
              {representative.email}
            </p>
            <p className="text-xs text-gray-400">
              Business Email
            </p>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 mb-4 pt-4 border-t border-white/20">
          <div>
            <h4 className="text-sm font-medium text-white mb-2">
              Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {representative.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md border border-white/20"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-2">
              Experience & Achievements
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={14} className="text-yellow-400" />
                <span className="text-xs text-gray-300">
                  {representative.experience} years in electrical industry
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={14} className="text-green-400" />
                <span className="text-xs text-gray-300">
                  {representative.clientsServed}+ clients served
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={14} className="text-yellow-400" />
                <span className="text-xs text-gray-300">
                  {representative.rating}/5.0 customer rating
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-2">
              Languages Spoken
            </h4>
            <div className="flex flex-wrap gap-2">
              {representative.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md border border-white/20"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-white mb-2">
              Working Hours
            </h4>
            <div className="text-xs text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>{representative.workingHours.weekdays}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>{representative.workingHours.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>{representative.workingHours.sunday}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          iconName="Phone"
          iconPosition="left"
          className="flex-1 text-white border-white/30 hover:bg-white/20 hover:text-white hover:border-white/50 backdrop-blur-sm"
          onClick={() => onContact(representative, 'phone')}
        >
          Call Now
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="Mail"
          iconPosition="left"
          className="flex-1 text-white border-white/30 hover:bg-white/20 hover:text-white hover:border-white/50 backdrop-blur-sm"
          onClick={() => onContact(representative, 'email')}
        >
          Email
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Calendar"
          iconPosition="left"
          className="flex-1 bg-[#ff0c0e] text-white hover:bg-[#e00b0c] border-[#ff0c0e]"
          onClick={() => onScheduleMeeting(representative)}
        >
          Schedule
        </Button>
      </div>

      {representative.nextAvailable && (
        <div className="mt-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={14} className="text-blue-400" />
            <p className="text-xs text-blue-300">
              Next available: {representative.nextAvailable}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesRepCard;