import React from 'react';
import ProductCard from './ProductCard';
import Icon from '../../../components/AppIcon';

const ProductGrid = ({ 
  products, 
  loading, 
  onCompare, 
  onQuickView, 
  compareList = [],
  viewMode = 'grid' 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="aspect-square bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="flex space-x-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse flex-1" />
                <div className="h-8 bg-gray-200 rounded animate-pulse flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Icon name="Package" size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">No Products Found</h3>
        <p className="text-text-secondary mb-6 max-w-md">
          We couldn't find any products matching your current filters. Try adjusting your search criteria or browse our categories.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 bg-brand-navy text-white rounded-lg hover:bg-opacity-90 brand-transition">
            Clear Filters
          </button>
          <button className="px-6 py-2 border border-brand-navy text-brand-navy rounded-lg hover:bg-brand-navy hover:text-white brand-transition">
            Browse Categories
          </button>
        </div>
      </div>
    );
  }

  const gridClasses = {
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
    list: 'space-y-4'
  };

  return (
    <div className={gridClasses[viewMode]}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onCompare={onCompare}
          onQuickView={onQuickView}
          isComparing={compareList.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;