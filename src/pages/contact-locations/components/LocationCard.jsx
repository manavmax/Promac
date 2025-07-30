import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationCard = ({ location, onGetDirections, onCallLocation }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'text-brand-green bg-green-50';
      case 'closed':
        return 'text-red-600 bg-red-50';
      case 'closing-soon':
        return 'text-brand-amber bg-amber-50';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open':
        return 'Open Now';
      case 'closed':
        return 'Closed';
      case 'closing-soon':
        return 'Closing Soon';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-promac-red-50 border border-promac-red-100 rounded-xl p-6 brand-transition hover:shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {location.name}
          </h3>
          <p className="text-sm text-text-secondary mb-2">
            {location.type}
          </p>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            location.status === 'open' ? 'bg-promac-red-100 text-promac-red-700' :
            location.status === 'closed' ? 'bg-promac-red-50 text-promac-red-400' :
            location.status === 'closing-soon' ? 'bg-promac-red-200 text-promac-red-700' :
            'bg-promac-red-50 text-promac-red-400'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              location.status === 'open' ? 'bg-promac-red-500' :
              location.status === 'closed' ? 'bg-promac-red-400' :
              'bg-promac-red-200'
            }`}></div>
            {getStatusText(location.status)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-brand-navy">
            {location.distance}
          </div>
          <div className="text-xs text-text-secondary">
            away
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-3">
          <Icon name="MapPin" size={16} className="text-text-secondary mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {location.address}
            </p>
            <p className="text-xs text-text-secondary">
              {location.city}, {location.state} - {location.pincode}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Phone" size={16} className="text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {location.phone}
            </p>
            {location.whatsapp && (
              <p className="text-xs text-brand-green">
                WhatsApp Available
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Icon name="Clock" size={16} className="text-text-secondary" />
          <div className="flex-1">
            <p className="text-sm text-text-primary">
              {location.hours.today}
            </p>
            <p className="text-xs text-text-secondary">
              {location.hours.week}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-text-primary mb-2">
          Available Services
        </h4>
        <div className="flex flex-wrap gap-2">
          {location.services.map((service, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-promac-red-100 text-promac-red-700 text-xs rounded-md"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-text-primary mb-2">
          Product Categories
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {location.categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-promac-red-400 rounded-full"></div>
              <span className="text-xs text-promac-red-900">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          iconName="Navigation"
          iconPosition="left"
          className="flex-1 text-promac-red-700 border-promac-red-200 hover:bg-promac-red-100 hover:text-promac-red-900"
          onClick={() => onGetDirections(location)}
        >
          Directions
        </Button>
        <Button
          variant="default"
          size="sm"
          iconName="Phone"
          iconPosition="left"
          className="flex-1"
          onClick={() => onCallLocation(location)}
        >
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;