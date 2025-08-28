import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../contexts/CartContext';

const ProductCard = ({ product, onCompare, onQuickView, isComparing = false }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: formatPrice(product.price),
      image: product.image,
      quantity: 1
    };
    
    addToCart(cartItem);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: formatPrice(product.price),
      image: product.image,
      quantity: 1
    };
    
    addToCart(cartItem);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Notification */}
      {showNotification && (
        <div className="absolute top-4 right-4 z-50 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs">
          Added to cart!
        </div>
      )}
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-promac-red-50 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
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
            <span className="px-3 py-1 bg-[#FF0C0D] text-white text-xs font-medium rounded-full min-w-[40px] justify-center">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              Best Seller
            </span>
          )}
          {product.certifications?.includes('BIS') && (
            <span className="px-1 py-1 bg-green-200 text-green-800 text-xs font-medium rounded-full flex items-center">
              <Icon name="Award" size={8} />
              <span className="ml-0.5">BIS</span>
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 brand-transition">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className={`p-2 rounded-full shadow-md brand-transition ${
              isWishlisted 
                ? 'bg-blue-500 text-white' :'bg-white text-blue-500 hover:text-blue-600'
            }`}
          >
            <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 bg-white text-green-500 hover:text-green-600 rounded-full shadow-md brand-transition"
          >
            <Icon name="Eye" size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompare(product);
            }}
            className={`p-2 rounded-full shadow-md brand-transition ${
              isComparing
                ? 'bg-purple-600 text-white' :'bg-white text-purple-500 hover:text-purple-600'
            }`}
          >
            <Icon name="GitCompare" size={16} />
          </button>
        </div>

        {/* Stock Status */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.stock > 50 ? 'bg-green-100 text-green-700' :
            product.stock > 10 ? 'bg-yellow-200 text-yellow-700' :
            product.stock > 0 ? 'bg-orange-200 text-orange-700' :
            'bg-gray-100 text-gray-600'
          }`}>
            {stockStatus.text}
          </span>
        </div>

        {/* Bulk Pricing Indicator */}
        {product.bulkPricing && (
          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs font-medium rounded-full flex items-center space-x-1">
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
          <span className="text-xs text-gray-600 font-medium">{product.brand}</span>
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
            <span className="text-xs text-gray-600 ml-1">({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 
          className="font-semibold text-black mb-2 line-clamp-2 group-hover:text-blue-600 brand-transition cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>

        {/* Key Specifications */}
        <div className="space-y-1 mb-3">
          {product.keySpecs?.slice(0, 2).map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-gray-600">{spec.label}:</span>
              <span className="text-black font-medium">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-black">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
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
            <button className="text-xs text-blue-600 hover:text-blue-800 brand-transition">
              Bulk Pricing
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4 action-buttons">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="ShoppingCart"
            iconPosition="left"
            disabled={product.stock === 0}
            onClick={handleAddToCart}
            className="bg-red-600 text-white hover:bg-red-700 !opacity-100 !visible"
          >
            Add to Cart
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            disabled={product.stock === 0}
            onClick={handleBuyNow}
            className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white hover:from-slate-800 hover:to-slate-900 !opacity-100 !visible"
          >
            Buy Now
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-xs text-gray-600">
            <div className="flex items-center space-x-1">
              <Icon name="Truck" size={12} />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={12} />
              <span>{product.warranty} Years</span>
            </div>
          </div>
          <button 
            className="text-xs text-blue-600 hover:text-blue-800 brand-transition"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;