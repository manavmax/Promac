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
  const discountedPrice = item?.price * (1 - bulkPricing?.discount / 100);
  const totalPrice = discountedPrice * quantity;
  const savings = (item?.price - discountedPrice) * quantity;

  return (
    <div className="bg-card border border-border rounded-lg shadow-precision hover:shadow-premium transition-all duration-200">
      <div className="p-4">
        <div className="flex items-start space-x-4">
          {/* Product Image */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
              <Image
                src={item?.image}
                alt={item?.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
                  {item?.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  SKU: {item?.sku} | Brand: {item?.brand}
                </p>
                
                {/* Stock Status */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                    item?.stock > 50 
                      ? 'bg-success/10 text-success' 
                      : item?.stock > 10 
                        ? 'bg-warning/10 text-warning' :'bg-error/10 text-error'
                  }`}>
                    <Icon 
                      name={item?.stock > 50 ? "CheckCircle" : item?.stock > 10 ? "AlertTriangle" : "AlertCircle"} 
                      size={12} 
                    />
                    <span>
                      {item?.stock > 50 ? 'In Stock' : item?.stock > 10 ? 'Limited Stock' : 'Low Stock'}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {item?.stock} units available
                  </span>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="Truck" size={12} />
                  <span>{item?.deliveryTime}</span>
                </div>
              </div>

              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(item?.id)}
                className="text-muted-foreground hover:text-error"
                iconName="Trash2"
                iconSize={16}
              >
                <span className="sr-only">Remove item</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Quantity and Pricing */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            {/* Quantity Controls */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-foreground">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  iconName="Minus"
                  iconSize={14}
                  className="w-8 h-8"
                >
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <span className="w-12 text-center text-sm font-medium bg-muted px-2 py-1 rounded">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= item?.stock}
                  iconName="Plus"
                  iconSize={14}
                  className="w-8 h-8"
                >
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right">
              <div className="flex items-center space-x-2">
                {bulkPricing?.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{(item?.price * quantity)?.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-lg font-semibold text-foreground">
                  ₹{totalPrice?.toLocaleString('en-IN')}
                </span>
              </div>
              {bulkPricing?.discount > 0 && (
                <div className="text-xs text-success">
                  Save ₹{savings?.toLocaleString('en-IN')} ({bulkPricing?.label})
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                ₹{discountedPrice?.toLocaleString('en-IN')} per unit
              </div>
            </div>
          </div>

          {/* Bulk Pricing Indicator */}
          {quantity < 100 && (
            <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">
                  {quantity < 10 
                    ? `Add ${10 - quantity} more for 5% discount`
                    : quantity < 50 
                      ? `Add ${50 - quantity} more for 10% discount`
                      : `Add ${100 - quantity} more for 15% discount`
                  }
                </span>
                <span className="text-primary font-medium">
                  {quantity < 10 ? '5% off' : quantity < 50 ? '10% off' : '15% off'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Expandable Technical Details */}
        <div className="mt-4">
          <Button
            variant="ghost"
            onClick={() => onToggleExpand(item?.id)}
            className="w-full justify-between p-2 h-auto"
            iconName={item?.expanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
          >
            <span className="text-sm font-medium">Technical Specifications</span>
          </Button>

          {item?.expanded && (
            <div className="mt-3 p-4 bg-muted/50 rounded-lg space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {item?.specifications?.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{spec?.label}:</span>
                    <span className="text-foreground font-medium">{spec?.value}</span>
                  </div>
                ))}
              </div>
              
              {item?.compatibility && (
                <div className="pt-3 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2">Compatibility</h4>
                  <div className="flex flex-wrap gap-2">
                    {item?.compatibility?.map((comp, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-success/10 text-success text-xs rounded-full"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;