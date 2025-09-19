import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import AuthCartButton from '../../../components/AuthCartButton';
import AuthBuyButton from '../../../components/AuthBuyButton';
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

  const cartItem = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    price: formatPrice(product.price),
    image: product.image,
    quantity: 1
  };

  const handleAddToCartSuccess = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNowSuccess = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      {/* Notification */}
      {showNotification && (
        <div className="absolute top-4 right-4 z-50 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg text-xs">
          Added to cart!
        </div>
      )}
      
      {/* Product Image */}
      <div className="aspect-square bg-gray-50 relative overflow-hidden cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
        <Image
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <Icon name="Package" size={32} className="text-gray-400" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
              NEW
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isWishlisted 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock and Sold Info */}
        <div className="text-sm text-gray-500 mb-4">
          <div className="flex items-center justify-between">
            <span>Stock: {product.stock}</span>
            <span>Sold: {Math.floor(Math.random() * 100) + 50}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <AuthCartButton
            product={cartItem}
            variant="default"
            onSuccess={handleAddToCartSuccess}
            className="flex-1 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Add to Cart
          </AuthCartButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;