import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onCompare }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const images = product.images || [product.image];
  const variants = product.variants || [];

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedVariant
    });
    onClose();
  };

  const getStockStatus = (stock) => {
    if (stock > 50) return { text: 'In Stock', color: 'text-green-600', bg: 'bg-green-100' };
    if (stock > 10) return { text: 'Limited Stock', color: 'text-amber-600', bg: 'bg-amber-100' };
    if (stock > 0) return { text: 'Low Stock', color: 'text-red-600', bg: 'bg-red-100' };
    return { text: 'Out of Stock', color: 'text-gray-600', bg: 'bg-gray-100' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-text-primary">Quick View</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 brand-transition ${
                      selectedImage === index ? 'border-brand-navy' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* 360° View Button */}
            <Button
              variant="outline"
              fullWidth
              iconName="RotateCcw"
              iconPosition="left"
              className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
            >
              360° View
            </Button>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Brand & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary font-medium">{product.brand}</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="text-sm text-text-secondary ml-1">({product.reviewCount})</span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-2xl font-bold text-text-primary">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-text-secondary line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${stockStatus.bg} ${stockStatus.color}`}>
                {stockStatus.text}
              </span>
              {product.fastDelivery && (
                <div className="flex items-center space-x-1 text-green-600">
                  <Icon name="Truck" size={16} />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              )}
            </div>

            {/* Key Specifications */}
            <div className="space-y-3">
              <h3 className="font-semibold text-text-primary">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.keySpecs?.map((spec, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-text-secondary">{spec.label}:</span>
                    <span className="text-text-primary font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Variants */}
            {variants.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-text-primary">Available Variants</h3>
                <div className="flex flex-wrap gap-2">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-3 py-2 text-sm rounded-lg border brand-transition ${
                        selectedVariant?.id === variant.id
                          ? 'border-brand-navy bg-brand-navy text-white' :'border-gray-300 text-text-primary hover:border-brand-navy'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-text-primary">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-brand-navy brand-transition"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-brand-navy brand-transition"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button
                variant="outline"
                fullWidth
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                iconName="ShoppingCart"
                iconPosition="left"
                className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
              >
                Add to Cart
              </Button>
              <Button
                variant="default"
                fullWidth
                disabled={product.stock === 0}
                className="cta-primary"
              >
                Buy Now
              </Button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={() => onCompare(product)}
                className="flex items-center space-x-2 text-brand-navy hover:text-brand-orange brand-transition"
              >
                <Icon name="GitCompare" size={16} />
                <span className="text-sm font-medium">Compare</span>
              </button>
              <button className="flex items-center space-x-2 text-brand-navy hover:text-brand-orange brand-transition">
                <Icon name="Heart" size={16} />
                <span className="text-sm font-medium">Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-brand-navy hover:text-brand-orange brand-transition">
                <Icon name="Share2" size={16} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <Icon name="Award" size={16} className="text-blue-600" />
                <span className="text-sm text-text-secondary">Certified:</span>
                <div className="flex space-x-2">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;