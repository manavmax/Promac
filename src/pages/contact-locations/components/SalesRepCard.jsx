import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const SalesRepCard = ({ representative, onContact, onScheduleMeeting }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'available':
        return 'text-brand-green bg-green-50';
      case 'busy':
        return 'text-brand-amber bg-amber-50';
      case 'offline':
        return 'text-text-secondary bg-gray-50';
      default:
        return 'text-text-secondary bg-gray-50';
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
    <div className="bg-promac-red-50 border border-promac-red-100 rounded-xl p-6 brand-transition hover:shadow-lg">
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
            representative.availability === 'available' ? 'bg-brand-green' :
            representative.availability === 'busy'? 'bg-brand-amber' : 'bg-text-secondary'
          }`}></div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {representative.name}
          </h3>
          <p className="text-sm text-brand-navy font-medium mb-1">
            {representative.title}
          </p>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            representative.availability === 'available' ? 'bg-promac-red-100 text-promac-red-700' :
            representative.availability === 'busy' ? 'bg-promac-red-200 text-promac-red-700' :
            'bg-promac-red-50 text-promac-red-400'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              representative.availability === 'available' ? 'bg-promac-red-500' :
              representative.availability === 'busy' ? 'bg-promac-red-200' :
              'bg-promac-red-100'
            }`}></div>
            {getAvailabilityText(representative.availability)}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-text-secondary hover:text-text-primary brand-transition"
        >
          <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="MapPin" size={16} className="text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {representative.territory}
            </p>
            <p className="text-xs text-text-secondary">
              Coverage Area
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Phone" size={16} className="text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {representative.phone}
            </p>
            <p className="text-xs text-text-secondary">
              Direct Line
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Mail" size={16} className="text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {representative.email}
            </p>
            <p className="text-xs text-text-secondary">
              Business Email
            </p>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 mb-4 pt-4 border-t border-border">
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-2">
              Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {representative.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-promac-red-100 text-promac-red-700 text-xs rounded-md"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-2">
              Experience & Achievements
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={14} className="text-brand-amber" />
                <span className="text-xs text-text-secondary">
                  {representative.experience} years in electrical industry
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={14} className="text-brand-green" />
                <span className="text-xs text-text-secondary">
                  {representative.clientsServed}+ clients served
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={14} className="text-brand-amber" />
                <span className="text-xs text-text-secondary">
                  {representative.rating}/5.0 customer rating
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-2">
              Languages Spoken
            </h4>
            <div className="flex flex-wrap gap-2">
              {representative.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-promac-red-50 text-promac-red-900 text-xs rounded-md"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-text-primary mb-2">
              Working Hours
            </h4>
            <div className="text-xs text-text-secondary space-y-1">
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
          className="flex-1 text-promac-red-700 border-promac-red-200 hover:bg-promac-red-100 hover:text-promac-red-900"
          onClick={() => onContact(representative, 'phone')}
        >
          Call Now
        </Button>
        <Button
          variant="outline"
          size="sm"
          iconName="Mail"
          iconPosition="left"
          className="flex-1 text-promac-red-700 border-promac-red-200 hover:bg-promac-red-100 hover:text-promac-red-900"
          onClick={() => onContact(representative, 'email')}
        >
          Email
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Calendar"
          iconPosition="left"
          className="flex-1"
          onClick={() => onScheduleMeeting(representative)}
        >
          Schedule
        </Button>
      </div>

      {representative.nextAvailable && (
        <div className="mt-3 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={14} className="text-blue-600" />
            <p className="text-xs text-blue-800">
              Next available: {representative.nextAvailable}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesRepCard;