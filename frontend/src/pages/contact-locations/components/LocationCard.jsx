import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationCard = ({ location, onGetDirections, onCallLocation }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'text-emerald-600 bg-emerald-100/80';
      case 'closed':
        return 'text-red-600 bg-red-100/80';
      case 'closing-soon':
        return 'text-amber-600 bg-amber-100/80';
      default:
        return 'text-gray-600 bg-gray-100/80';
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'flagship':
        return 'text-[#ff0c0e] bg-[#ff0c0e]/10';
      case 'partner':
        return 'text-blue-600 bg-blue-100/80';
      case 'warehouse':
        return 'text-purple-600 bg-purple-100/80';
      case 'service':
        return 'text-emerald-600 bg-emerald-100/80';
      default:
        return 'text-gray-600 bg-gray-100/80';
    }
  };

  return (
    <div className="relative group h-full">
      {/* Glassmorphism Background with Glossy Effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Card Content */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 flex-shrink-0">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff0c0e] transition-colors duration-300">
              {location.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${getTypeColor(location.type)} border border-current/20 backdrop-blur-sm`}>
                {location.type.charAt(0).toUpperCase() + location.type.slice(1)} Store
              </div>
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusColor(location.status)} border border-current/20 backdrop-blur-sm`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  location.status === 'open' ? 'bg-emerald-500' :
                  location.status === 'closed' ? 'bg-red-500' :
                  'bg-amber-500'
                }`}></div>
                {getStatusText(location.status)}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#ff0c0e]">
              {location.distance}
            </div>
            <div className="text-xs text-gray-300 font-medium">
              away
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6 flex-1">
          <div className="flex items-start space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
            <div className="w-8 h-8 bg-[#ff0c0e]/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Icon name="MapPin" size={16} className="text-[#ff0c0e]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {location.address}
              </p>
              <p className="text-xs text-gray-300 mt-1">
                {location.city}, {location.state} - {location.pincode}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Icon name="Phone" size={16} className="text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {location.phone}
              </p>
              {location.whatsapp && (
                <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center">
                  <Icon name="MessageCircle" size={12} className="mr-1" />
                  WhatsApp Available
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-200">
            <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Icon name="Clock" size={16} className="text-amber-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {location.hours.today}
              </p>
              <p className="text-xs text-gray-300 mt-1">
                {location.hours.week}
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-6 flex-shrink-0">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
            <Icon name="CheckCircle" size={16} className="text-emerald-400 mr-2" />
            Available Services
          </h4>
          <div className="flex flex-wrap gap-2">
            {location.services.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors duration-200 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-6 flex-shrink-0">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
            <Icon name="Package" size={16} className="text-[#ff0c0e] mr-2" />
            Product Categories
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {location.categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-200">
                <div className="w-2 h-2 bg-[#ff0c0e] rounded-full"></div>
                <span className="text-xs text-gray-200 font-medium">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            className="flex-1 bg-white text-gray-800 border-white hover:bg-gray-100 hover:border-gray-200 transition-all duration-300 backdrop-blur-sm"
            onClick={() => onGetDirections(location)}
          >
            Directions
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            className="flex-1 bg-[#ff0c0e] text-white hover:bg-[#e00b0c] shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => onCallLocation(location)}
          >
            Call Now
          </Button>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff0c0e]/5 via-transparent to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LocationCard;