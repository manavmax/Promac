import React, { useState } from 'react';
import Icon from '../AppIcon';
import { shareProduct, getShareMethods } from '../../utils/shareUtils';

const ShareModal = ({ product, isOpen, onClose, onShareSuccess }) => {
  const [isSharing, setIsSharing] = useState(false);
  const shareMethods = getShareMethods();

  const handleShare = async (method) => {
    if (!product) return;
    
    setIsSharing(true);
    try {
      const result = await shareProduct(product, method);
      if (result.success) {
        onShareSuccess?.(result.message);
      }
    } catch (error) {
      console.error('Share error:', error);
    } finally {
      setIsSharing(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-brand-navy">Share Product</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Product Info */}
        {product && (
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-brand-navy">{product.name}</h4>
                <p className="text-sm text-text-secondary">{product.price}</p>
              </div>
            </div>
          </div>
        )}

        {/* Share Methods */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {shareMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handleShare(method.id)}
                disabled={isSharing}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon name={method.icon} size={24} className="text-brand-navy" />
                </div>
                <span className="text-xs font-medium text-brand-navy">{method.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-gray-100 text-brand-navy rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal; 