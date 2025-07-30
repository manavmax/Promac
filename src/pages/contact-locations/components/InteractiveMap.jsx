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

  // Mock coordinates for demonstration
  const centerLat = 20.5937;
  const centerLng = 78.9629;

  return (
    <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden glass-effect">
      {/* Map Controls */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <div className="glass-effect rounded-lg p-2">
          <div className="flex space-x-1">
            {mapViewOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMapView(option.value)}
                className={`p-2 rounded-md brand-transition ${
                  mapView === option.value
                    ? 'bg-brand-navy text-white' :'text-text-secondary hover:bg-white/50'
                }`}
                title={option.label}
              >
                <Icon name={option.icon} size={16} />
              </button>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          iconName="Filter"
          iconPosition="left"
          onClick={() => setShowFilters(!showFilters)}
          className="glass-effect border-white/20 text-text-primary hover:bg-white/50"
        >
          Filters ({filteredLocations.length})
        </Button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="absolute top-4 left-4 mt-20 z-20 w-80 glass-effect rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-text-primary">Filter Locations</h4>
            <button
              onClick={() => setShowFilters(false)}
              className="text-text-secondary hover:text-text-primary"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Location Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-navy"
            >
              {typeFilters.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-brand-navy"
            >
              <option value="all">All Status</option>
              <option value="open">Open Now</option>
              <option value="closed">Closed</option>
              <option value="closing-soon">Closing Soon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Services Available
            </label>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {serviceFilters.map((service) => (
                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.services.includes(service)}
                    onChange={() => handleServiceFilter(service)}
                    className="text-brand-navy focus:ring-brand-navy"
                  />
                  <span className="text-sm text-text-primary">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="flex-1"
            >
              Clear
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => setShowFilters(false)}
              className="flex-1 cta-primary"
            >
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 z-10 glass-effect rounded-lg p-3">
        <h5 className="text-xs font-medium text-text-primary mb-2">Legend</h5>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-navy rounded-full"></div>
            <span className="text-xs text-text-secondary">Flagship Store</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-amber rounded-full"></div>
            <span className="text-xs text-text-secondary">Partner Store</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-brand-green rounded-full"></div>
            <span className="text-xs text-text-secondary">Service Center</span>
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-4 right-4 z-10 glass-effect rounded-lg p-1">
        <div className="flex flex-col space-y-1">
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-white/50 rounded-md brand-transition">
            <Icon name="Plus" size={16} />
          </button>
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-white/50 rounded-md brand-transition">
            <Icon name="Minus" size={16} />
          </button>
          <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-white/50 rounded-md brand-transition">
            <Icon name="Maximize" size={16} />
          </button>
        </div>
      </div>

      {/* Google Maps Embed */}
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        title="Promac Electrical Locations"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${centerLat},${centerLng}&z=6&output=embed`}
        className="w-full h-full"
      />

      {/* Location Markers Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {filteredLocations.map((location, index) => (
          <div
            key={location.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${20 + (index % 5) * 15}%`,
              top: `${20 + Math.floor(index / 5) * 20}%`
            }}
            onClick={() => onLocationSelect(location)}
          >
            <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg brand-transition hover:scale-110 ${
              location.type === 'flagship' ? 'bg-brand-navy' :
              location.type === 'partner' ? 'bg-brand-amber' :
              location.type === 'service'? 'bg-brand-green' : 'bg-text-secondary'
            }`}>
              <div className="w-full h-full rounded-full animate-pulse opacity-50 bg-current"></div>
            </div>
            {selectedLocation?.id === location.id && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-text-primary text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                {location.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;