import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortingControls = ({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  resultsCount,
  onFilterToggle 
}) => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Best Match', icon: 'Target' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'rating', label: 'Customer Rating', icon: 'Star' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'popularity', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'name-az', label: 'Name: A to Z', icon: 'ArrowUp' },
    { value: 'name-za', label: 'Name: Z to A', icon: 'ArrowDown' }
  ];

  const getCurrentSortLabel = () => {
    const current = sortOptions.find(option => option.value === sortBy);
    return current ? current.label : 'Sort by';
  };

  const handleSortSelect = (value) => {
    onSortChange(value);
    setShowSortDropdown(false);
  };

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4 sticky top-16 z-30">
      <div className="flex items-center space-x-4">
        {/* Mobile Filter Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={onFilterToggle}
          iconName="Filter"
          iconPosition="left"
          className="lg:hidden"
        >
          Filters
        </Button>

        {/* Results Count */}
        <div className="hidden sm:block">
          <p className="text-sm text-text-secondary">
            Showing <span className="font-medium text-text-primary">{resultsCount.toLocaleString('en-IN')}</span> products
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Sort Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
            iconName="ChevronDown"
            iconPosition="right"
            className="min-w-[140px] justify-between"
          >
            <span className="truncate">{getCurrentSortLabel()}</span>
          </Button>

          {showSortDropdown && (
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 z-40"
                onClick={() => setShowSortDropdown(false)}
              />
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                <div className="p-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortSelect(option.value)}
                      className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg brand-transition ${
                        sortBy === option.value
                          ? 'bg-brand-navy text-white' :'text-text-primary hover:bg-gray-50'
                      }`}
                    >
                      <Icon 
                        name={option.icon} 
                        size={16} 
                        className={sortBy === option.value ? 'text-white' : 'text-gray-400'}
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                      {sortBy === option.value && (
                        <Icon name="Check" size={16} className="text-white ml-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md brand-transition ${
              viewMode === 'grid' ?'bg-white text-brand-navy shadow-sm' :'text-gray-500 hover:text-gray-700'
            }`}
            title="Grid View"
          >
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-md brand-transition ${
              viewMode === 'list' ?'bg-white text-brand-navy shadow-sm' :'text-gray-500 hover:text-gray-700'
            }`}
            title="List View"
          >
            <Icon name="List" size={16} />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Download"
            title="Export Results"
            className="text-gray-500 hover:text-brand-navy"
          />
          <Button
            variant="ghost"
            size="sm"
            iconName="Share2"
            title="Share Results"
            className="text-gray-500 hover:text-brand-navy"
          />
        </div>
      </div>
    </div>
  );
};

export default SortingControls;