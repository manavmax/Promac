import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    certification: true,
    voltage: true,
    availability: true,
    price: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filterSections = {
    category: {
      title: 'Product Category',
      options: [
        { id: 'switches', label: 'Switches & Outlets', count: 245 },
        { id: 'circuit-breakers', label: 'Circuit Breakers', count: 189 },
        { id: 'smart-devices', label: 'Smart Devices', count: 156 },
        { id: 'lighting', label: 'Lighting Solutions', count: 298 },
        { id: 'motor-controls', label: 'Motor Controls', count: 134 },
        { id: 'safety-systems', label: 'Safety Systems', count: 87 }
      ]
    },
    brand: {
      title: 'Brand Partners',
      options: [
        { id: 'schneider', label: 'Schneider Electric', count: 312 },
        { id: 'siemens', label: 'Siemens', count: 278 },
        { id: 'abb', label: 'ABB', count: 234 },
        { id: 'legrand', label: 'Legrand', count: 198 },
        { id: 'havells', label: 'Havells', count: 167 },
        { id: 'anchor', label: 'Anchor by Panasonic', count: 145 }
      ]
    },
    certification: {
      title: 'Certifications',
      options: [
        { id: 'bis', label: 'BIS Certified', count: 892 },
        { id: 'isi', label: 'ISI Mark', count: 756 },
        { id: 'ce', label: 'CE Marking', count: 445 },
        { id: 'rohs', label: 'RoHS Compliant', count: 334 },
        { id: 'iso', label: 'ISO Certified', count: 289 }
      ]
    },
    voltage: {
      title: 'Voltage Rating',
      options: [
        { id: '230v', label: '230V AC', count: 567 },
        { id: '415v', label: '415V AC', count: 234 },
        { id: '12v', label: '12V DC', count: 123 },
        { id: '24v', label: '24V DC', count: 89 },
        { id: '110v', label: '110V AC', count: 67 }
      ]
    },
    availability: {
      title: 'Availability',
      options: [
        { id: 'in-stock', label: 'In Stock', count: 1245 },
        { id: 'bulk-available', label: 'Bulk Available', count: 892 },
        { id: 'same-day-delivery', label: 'Same Day Delivery', count: 567 }
      ]
    }
  };

  const handlePriceFilter = () => {
    onFilterChange('price', { min: priceRange.min, max: priceRange.max });
  };

  const handleFilterToggle = (filterType, value) => {
    const currentFilters = filters[filterType] || [];
    let newValues;
    
    if (currentFilters.includes(value)) {
      newValues = currentFilters.filter(v => v !== value);
    } else {
      newValues = [...currentFilters, value];
    }
    
    onFilterChange(filterType, newValues.length > 0 ? newValues : []);
  };

  const clearAllFilters = () => {
    onFilterChange('clear', null);
    setPriceRange({ min: '', max: '' });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 lg:w-72 
        bg-white rounded-2xl shadow-xl border border-gray-100 z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-8 lg:p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-text-primary">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              iconName="X"
            />
          </div>

          {/* Filter Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-black">Filters</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-brand-orange hover:text-brand-orange"
            >
              Clear All
            </Button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-6">
            {Object.entries(filterSections).map(([key, section]) => (
              <div key={key} className="border-b border-gray-200 pb-6">
                <button
                  onClick={() => toggleSection(key)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h3 className="font-medium text-black">{section.title}</h3>
                  <Icon 
                    name={expandedSections[key] ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </button>

                {expandedSections[key] && (
                  <div className="space-y-3">
                    {section.options.map((option) => (
                      <div key={option.id} className="flex items-center justify-between">
                        <Checkbox
                          label={option.label}
                          checked={filters[key]?.includes(option.id) || false}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            const currentFilters = filters[key] || [];
                            const newFilters = isChecked
                              ? [...currentFilters, option.id]
                              : currentFilters.filter(id => id !== option.id);
                            onFilterChange(key, newFilters);
                          }}
                          className="text-sm text-black"
                        />
                        <span className="text-xs text-gray-600">({option.count})</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Price Range */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full text-left mb-4"
              >
                <h3 className="font-medium text-text-primary">Price Range (₹)</h3>
                <Icon 
                  name={expandedSections.price ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                />
              </button>

              {expandedSections.price && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      className="text-sm"
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      className="text-sm"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={handlePriceFilter}
                  >
                    Apply Price Filter
                  </Button>

                  {/* Quick Price Ranges */}
                  <div className="space-y-2">
                    <p className="text-xs text-text-secondary">Quick Ranges:</p>
                    {[
                      { label: 'Under ₹500', min: 0, max: 500 },
                      { label: '₹500 - ₹2,000', min: 500, max: 2000 },
                      { label: '₹2,000 - ₹10,000', min: 2000, max: 10000 },
                      { label: 'Above ₹10,000', min: 10000, max: null }
                    ].map((range, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setPriceRange({ min: range.min.toString(), max: range.max?.toString() || '' });
                          onFilterChange('price', { min: range.min, max: range.max });
                        }}
                        className="block w-full text-left text-xs text-brand-navy hover:text-brand-orange brand-transition"
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>


          </div>

          {/* Mobile Apply Button */}
          <div className="mt-8 lg:hidden">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="cta-primary"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;