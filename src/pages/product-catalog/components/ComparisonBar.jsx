import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ComparisonBar = ({ compareList, onRemove, onCompare, onClear }) => {
  if (compareList.length === 0) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Icon name="GitCompare" size={20} className="text-brand-navy" />
              <span className="font-medium text-text-primary">
                Compare Products ({compareList.length}/4)
              </span>
            </div>

            {/* Product List */}
            <div className="flex items-center space-x-3 overflow-x-auto max-w-md lg:max-w-2xl">
              {compareList.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 relative bg-gray-50 rounded-lg p-2 min-w-[120px]"
                >
                  <button
                    onClick={() => onRemove(product.id)}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 brand-transition"
                  >
                    <Icon name="X" size={12} />
                  </button>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-md overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-text-primary truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-brand-navy font-semibold">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Add More Placeholder */}
              {compareList.length < 4 && (
                <div className="flex-shrink-0 w-[120px] h-[100px] border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400">
                  <Icon name="Plus" size={20} />
                  <span className="text-xs mt-1">Add Product</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClear}
              className="text-gray-500 hover:text-red-500"
            >
              Clear All
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={onCompare}
              disabled={compareList.length < 2}
              iconName="GitCompare"
              iconPosition="left"
              className="cta-primary"
            >
              Compare Now
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-3">
          <div className="flex items-center space-x-1">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full ${
                  index < compareList.length ? 'bg-brand-navy' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-text-secondary mt-1 text-center">
            {compareList.length < 2 
              ? 'Add at least 2 products to compare'
              : `${4 - compareList.length} more products can be added`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;