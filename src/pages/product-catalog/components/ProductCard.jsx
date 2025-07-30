import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onCompare, onQuickView, isComparing = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getStockStatus = (stock) => {
    if (stock > 50) return { text: 'In Stock', color: 'text-green-600', bg: 'bg-green-100' };
    if (stock > 10) return { text: 'Limited Stock', color: 'text-amber-600', bg: 'bg-amber-100' };
    if (stock > 0) return { text: 'Low Stock', color: 'text-red-600', bg: 'bg-red-100' };
    return { text: 'Out of Stock', color: 'text-gray-600', bg: 'bg-gray-100' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg border border-promac-red-100 hover:border-promac-red-300 brand-transition overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-promac-red-50">
        <Image
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover group-hover:scale-105 brand-transition ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-promac-red-100 animate-pulse flex items-center justify-center">
            <Icon name="Package" size={32} className="text-promac-red-200" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-promac-red-400 text-white text-xs font-medium rounded-full">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-1 bg-promac-red-600 text-white text-xs font-medium rounded-full">
              Best Seller
            </span>
          )}
          {product.certifications?.includes('BIS') && (
            <span className="px-2 py-1 bg-promac-red-200 text-promac-red-900 text-xs font-medium rounded-full flex items-center space-x-1">
              <Icon name="Award" size={10} />
              <span>BIS</span>
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 brand-transition">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-full shadow-md brand-transition ${
              isWishlisted 
                ? 'bg-promac-red-500 text-white' :'bg-white text-promac-red-400 hover:text-promac-red-600'
            }`}
          >
            <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onQuickView(product)}
            className="p-2 bg-white text-promac-red-400 hover:text-promac-red-600 rounded-full shadow-md brand-transition"
          >
            <Icon name="Eye" size={16} />
          </button>
          <button
            onClick={() => onCompare(product)}
            className={`p-2 rounded-full shadow-md brand-transition ${
              isComparing
                ? 'bg-promac-red-700 text-white' :'bg-white text-promac-red-400 hover:text-promac-red-700'
            }`}
          >
            <Icon name="GitCompare" size={16} />
          </button>
        </div>

        {/* Stock Status */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.stock > 50 ? 'bg-promac-red-100 text-promac-red-700' :
            product.stock > 10 ? 'bg-promac-red-200 text-promac-red-700' :
            product.stock > 0 ? 'bg-promac-red-300 text-promac-red-900' :
            'bg-promac-red-50 text-promac-red-400'
          }`}>
            {stockStatus.text}
          </span>
        </div>

        {/* Bulk Pricing Indicator */}
        {product.bulkPricing && (
          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-1 bg-brand-amber text-text-primary text-xs font-medium rounded-full flex items-center space-x-1">
              <Icon name="Package2" size={10} />
              <span>Bulk</span>
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand & Model */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary font-medium">{product.brand}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="text-xs text-text-secondary ml-1">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-brand-navy brand-transition">
          {product.name}
        </h3>

        {/* Key Specifications */}
        <div className="space-y-1 mb-3">
          {product.keySpecs?.slice(0, 2).map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-text-secondary">{spec.label}:</span>
              <span className="text-text-primary font-medium">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-text-secondary line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-green-600 font-medium">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
          {product.bulkPricing && (
            <button className="text-xs text-brand-navy hover:text-brand-orange brand-transition">
              Bulk Pricing
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName="ShoppingCart"
            iconPosition="left"
            disabled={product.stock === 0}
            className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            Add to Cart
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            disabled={product.stock === 0}
            className="cta-primary"
          >
            Buy Now
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-3 text-xs text-text-secondary">
            {product.fastDelivery && (
              <div className="flex items-center space-x-1">
                <Icon name="Truck" size={12} />
                <span>Fast Delivery</span>
              </div>
            )}
            {product.warranty && (
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={12} />
                <span>{product.warranty}</span>
              </div>
            )}
          </div>
          <button className="text-xs text-brand-navy hover:text-brand-orange brand-transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;