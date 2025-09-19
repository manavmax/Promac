import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ locations, selectedLocation, onLocationSelect }) => {
  const [mapView, setMapView] = useState('satellite');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    services: [],
    status: 'all'
  });

  const mapViewOptions = [
    { value: 'roadmap', label: 'Road', icon: 'Map' },
    { value: 'satellite', label: 'Satellite', icon: 'Satellite' },
    { value: 'hybrid', label: 'Hybrid', icon: 'Layers' }
  ];

  const serviceFilters = [
    'Technical Consultation',
    'Bulk Pickup',
    'Installation Support',
    'Emergency Service',
    'Product Demo'
  ];

  const typeFilters = [
    { value: 'all', label: 'All Locations' },
    { value: 'flagship', label: 'Flagship Stores' },
    { value: 'partner', label: 'Partner Stores' },
    { value: 'warehouse', label: 'Warehouses' },
    { value: 'service', label: 'Service Centers' }
  ];

  const filteredLocations = locations.filter(location => {
    if (filters.type !== 'all' && location.type.toLowerCase() !== filters.type) {
      return false;
    }
    
    if (filters.status !== 'all' && location.status !== filters.status) {
      return false;
    }
    
    if (filters.services.length > 0) {
      const hasService = filters.services.some(service => 
        location.services.includes(service)
      );
      if (!hasService) return false;
    }
    
    return true;
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleServiceFilter = (service) => {
    setFilters(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      services: [],
      status: 'all'
    });
  };

  // City coordinates for accurate marker placement
  const cityCoordinates = [
    { name: 'Delhi', lat: 28.7041, lng: 77.1025, type: 'flagship' },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777, type: 'partner' },
    { name: 'Gurugram', lat: 28.4595, lng: 77.0266, type: 'flagship' },
    { name: 'Pune', lat: 18.5204, lng: 73.8567, type: 'service' },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946, type: 'partner' },
    { name: 'Meerut', lat: 28.9845, lng: 77.7064, type: 'service' }
  ];

  // Center map on Delhi
  const centerLat = 28.7041;
  const centerLng = 77.1025;

  return (
    <div className="space-y-6 bg-gray-900 p-4 rounded-xl">
      {/* Map Controls Header - Above the map */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-black/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg z-30 relative">
        {/* Left side - Map View Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {mapViewOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMapView(option.value)}
                className={`p-2 rounded-md brand-transition ${
                  mapView === option.value
                    ? 'bg-[#ff0c0e] text-white' :'text-white hover:bg-white/20'
                }`}
                title={option.label}
              >
                <Icon name={option.icon} size={16} />
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            iconName="Filter"
            iconPosition="left"
            onClick={() => setShowFilters(!showFilters)}
            className="border-white/30 text-white hover:bg-white/20"
          >
            Filters ({filteredLocations.length})
          </Button>
        </div>

        {/* Right side - Legend */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#ff0c0e] rounded-full border-2 border-white"></div>
              <span className="text-sm text-white">Flagship Store</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#3b82f6] rounded-full border-2 border-white"></div>
              <span className="text-sm text-white">Partner Store</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#10b981] rounded-full border-2 border-white"></div>
              <span className="text-sm text-white">Service Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Panel - Below controls header */}
      {showFilters && (
        <div className="p-4 bg-black/90 backdrop-blur-sm rounded-xl border border-white/20 space-y-4 shadow-lg z-20 relative">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-white">Filter Locations</h4>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-300 hover:text-white"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Location Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff0c0e] bg-gray-800 text-white"
              >
                {typeFilters.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff0c0e] bg-gray-800 text-white"
              >
                <option value="all">All Status</option>
                <option value="open">Open Now</option>
                <option value="closed">Closed</option>
                <option value="closing-soon">Closing Soon</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Services Available
              </label>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {serviceFilters.map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.services.includes(service)}
                      onChange={() => handleServiceFilter(service)}
                      className="text-[#ff0c0e] focus:ring-[#ff0c0e]"
                    />
                    <span className="text-sm text-white">{service}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="flex-1 border-white/30 text-white hover:bg-white/20"
            >
              Clear
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowFilters(false)}
              className="flex-1 bg-[#ff0c0e] hover:bg-[#e00b0c] text-white"
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Map Container - Clean map without frosted glass overlay */}
      <div className="relative h-[600px] lg:h-[700px] rounded-xl overflow-hidden bg-white z-10">

        {/* Google Maps with Custom Markers */}
        <div className="w-full h-full relative">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Promac Electrical Locations"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${centerLat},${centerLng}&z=8&output=embed&t=m`}
            className="w-full h-full border-0"
          />
          

        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;