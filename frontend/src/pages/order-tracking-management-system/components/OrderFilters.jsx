import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const OrderFilters = ({ filters, onFiltersChange, onClearFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusOptions = [
    { value: 'all', label: 'All Orders', count: 45 },
    { value: 'confirmed', label: 'Confirmed', count: 8 },
    { value: 'processing', label: 'Processing', count: 12 },
    { value: 'shipped', label: 'Shipped', count: 15 },
    { value: 'delivered', label: 'Delivered', count: 8 },
    { value: 'cancelled', label: 'Cancelled', count: 2 }
  ];

  const timeRangeOptions = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: '3months', label: 'Last 3 Months' },
    { value: 'year', label: 'This Year' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'switches', label: 'Switches & Sockets' },
    { value: 'wires', label: 'Wires & Cables' },
    { value: 'lighting', label: 'Lighting Solutions' },
    { value: 'panels', label: 'Distribution Panels' },
    { value: 'protection', label: 'Protection Devices' },
    { value: 'automation', label: 'Home Automation' }
  ];

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters?.status !== 'all') count++;
    if (filters?.timeRange !== 'all') count++;
    if (filters?.category !== 'all') count++;
    if (filters?.search) count++;
    return count;
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <div className="bg-card border border-border rounded-lg shadow-premium">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
            >
              Clear
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>
      </div>
      {/* Quick Status Filters */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {statusOptions?.map((status) => (
            <button
              key={status?.value}
              onClick={() => handleFilterChange('status', status?.value)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filters?.status === status?.value
                  ? 'bg-primary text-primary-foreground shadow-precision'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <span>{status?.label}</span>
              <span className={`px-1.5 py-0.5 rounded text-xs ${
                filters?.status === status?.value
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-background text-muted-foreground'
              }`}>
                {status?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Expanded Filters */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
          {/* Search */}
          <div>
            <Input
              type="search"
              placeholder="Search by order number, product name..."
              value={filters?.search || ''}
              onChange={(e) => handleFilterChange('search', e?.target?.value)}
              className="w-full"
            />
          </div>

          {/* Time Range and Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Time Range
              </label>
              <div className="space-y-1">
                {timeRangeOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => handleFilterChange('timeRange', option?.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      filters?.timeRange === option?.value
                        ? 'bg-primary/10 text-primary font-medium' :'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {option?.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Category
              </label>
              <div className="space-y-1">
                {categoryOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => handleFilterChange('category', option?.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                      filters?.category === option?.value
                        ? 'bg-primary/10 text-primary font-medium' :'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {option?.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Date Range Picker */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="date"
              label="From Date"
              value={filters?.fromDate || ''}
              onChange={(e) => handleFilterChange('fromDate', e?.target?.value)}
            />
            <Input
              type="date"
              label="To Date"
              value={filters?.toDate || ''}
              onChange={(e) => handleFilterChange('toDate', e?.target?.value)}
            />
          </div>

          {/* Amount Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              label="Min Amount (₹)"
              placeholder="0"
              value={filters?.minAmount || ''}
              onChange={(e) => handleFilterChange('minAmount', e?.target?.value)}
            />
            <Input
              type="number"
              label="Max Amount (₹)"
              placeholder="100000"
              value={filters?.maxAmount || ''}
              onChange={(e) => handleFilterChange('maxAmount', e?.target?.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderFilters;