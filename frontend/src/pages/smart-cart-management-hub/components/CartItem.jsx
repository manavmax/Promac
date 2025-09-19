import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onToggleExpand }) => {
  const [quantity, setQuantity] = useState(item?.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    onUpdateQuantity(item?.id, newQuantity);
  };

  const getBulkPricing = () => {
    if (quantity >= 100) return { discount: 15, label: '100+ units' };
    if (quantity >= 50) return { discount: 10, label: '50+ units' };
    if (quantity >= 10) return { discount: 5, label: '10+ units' };
    return { discount: 0, label: 'Regular price' };
  };

  const bulkPricing = getBulkPricing();
  // Convert price string to number (remove ₹ and commas)
  const priceNumber = parseFloat(item?.price?.toString().replace('₹', '').replace(',', '')) || 0;
  const discountedPrice = priceNumber * (1 - bulkPricing?.discount / 100);
  const totalPrice = discountedPrice * quantity;
  const savings = (priceNumber - discountedPrice) * quantity;

  return (
    <div className="bg-white border border-gray-200 rounded-none shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="p-8">
        <div className="flex items-start space-x-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gray-100 overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all duration-200">
              <Image
                src={item?.image}
                alt={item?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-light text-black mb-2 line-clamp-2 leading-tight">
                  {item?.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 font-light">
                  SKU: {item?.sku} | Brand: {item?.brand}
                </p>
                
                {/* Stock Status */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`flex items-center space-x-2 px-3 py-1.5 border text-xs font-light ${
                    item?.stock > 50 
                      ? 'bg-black text-white border-black' 
                      : item?.stock > 10 
                        ? 'bg-gray-100 text-black border-gray-300' 
                        : 'bg-white text-black border-gray-400'
                  }`}>
                    <Icon 
                      name={item?.stock > 50 ? "CheckCircle" : item?.stock > 10 ? "AlertTriangle" : "AlertCircle"} 
                      size={14} 
                    />
                    <span>
                      {item?.stock > 50 ? 'In Stock' : item?.stock > 10 ? 'Limited Stock' : 'Low Stock'}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-light">
                    {item?.stock} units available
                  </span>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="Truck" size={14} className="text-black" />
                  <span className="font-light">{item?.deliveryTime}</span>
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(item?.id)}
                className="text-gray-400 hover:text-black hover:bg-gray-100 transition-all duration-200"
                iconName="Trash2"
                iconSize={18}
              >
                <span className="sr-only">Remove item</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Quantity and Pricing */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            {/* Quantity Controls */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-light text-black">Quantity:</span>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  iconName="Minus"
                  iconSize={16}
                  className="w-10 h-10 bg-white border-gray-300 text-black hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-16 text-center text-lg font-light bg-gray-100 border border-gray-300 text-black px-3 py-2">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= item?.stock}
                  iconName="Plus"
                  iconSize={16}
                  className="w-10 h-10 bg-white border-gray-300 text-black hover:bg-gray-100 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right">
              <div className="flex items-center space-x-3">
                {bulkPricing?.discount > 0 && (
                  <span className="text-sm text-gray-400 line-through font-light">
                    ₹{(priceNumber * quantity)?.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-2xl font-light text-black">
                  ₹{totalPrice?.toLocaleString('en-IN')}
                </span>
              </div>
              {bulkPricing?.discount > 0 && (
                <div className="text-sm text-black font-light mt-1">
                  Save ₹{savings?.toLocaleString('en-IN')} ({bulkPricing?.label})
                </div>
              )}
              <div className="text-sm text-gray-600 mt-1 font-light">
                ₹{discountedPrice?.toLocaleString('en-IN')} per unit
              </div>
            </div>
          </div>

          {/* Bulk Pricing Indicator */}
          {quantity < 100 && (
            <div className="mt-6 p-4 bg-gray-100 border border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black font-light">
                  {quantity < 10 
                    ? `Add ${10 - quantity} more for 5% discount`
                    : quantity < 50 
                      ? `Add ${50 - quantity} more for 10% discount`
                      : `Add ${100 - quantity} more for 15% discount`
                  }
                </span>
                <span className="text-black font-light bg-white px-3 py-1 border border-gray-300">
                  {quantity < 10 ? '5% off' : quantity < 50 ? '10% off' : '15% off'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Expandable Technical Details */}
        <div className="mt-8">
          <Button
            variant="ghost"
            onClick={() => onToggleExpand(item?.id)}
            className="w-full justify-between p-4 h-auto bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-all duration-200 text-black"
            iconName={item?.expanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={18}
          >
            <span className="text-sm font-light text-black">Technical Specifications</span>
          </Button>

          {item?.expanded && (
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {item?.specifications?.length > 0 ? (
                  item.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600 font-light">{spec?.label}:</span>
                      <span className="text-black font-light">{spec?.value}</span>
                    </div>
                  ))
                ) : (
                  // Default specifications if none provided
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Brand:</span>
                      <span className="text-black font-light">{item?.brand || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">SKU:</span>
                      <span className="text-black font-light">{item?.sku || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Price:</span>
                      <span className="text-black font-light">{item?.price || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Quantity:</span>
                      <span className="text-black font-light">{item?.quantity || 1}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Category:</span>
                      <span className="text-black font-light">{item?.category || 'Electrical'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-light">Certification:</span>
                      <span className="text-black font-light">ISI, BIS</span>
                    </div>
                  </>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-sm font-light text-black mb-3">Compatibility</h4>
                <div className="flex flex-wrap gap-2">
                  {item?.compatibility?.length > 0 ? (
                    item.compatibility.map((comp, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-white text-black text-xs font-light border border-gray-300"
                      >
                        {comp}
                      </span>
                    ))
                  ) : (
                    // Default compatibility tags
                    <>
                      <span className="px-3 py-1.5 bg-white text-black text-xs font-light border border-gray-300">
                        Standard Installation
                      </span>
                      <span className="px-3 py-1.5 bg-white text-black text-xs font-light border border-gray-300">
                        Professional Grade
                      </span>
                      <span className="px-3 py-1.5 bg-white text-black text-xs font-light border border-gray-300">
                        Quality Assured
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;