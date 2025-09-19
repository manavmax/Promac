import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ isCollapsed = false, onToggle }) => {
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Schneider Electric MCB 32A",
      brand: "Schneider Electric",
      model: "Acti9 iC60N",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
      quantity: 5,
      price: 1250,
      originalPrice: 1400,
      gst: 18
    },
    {
      id: 2,
      name: "Legrand Modular Switch",
      brand: "Legrand",
      model: "Myrius 6A",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      quantity: 10,
      price: 185,
      originalPrice: 220,
      gst: 18
    },
    {
      id: 3,
      name: "Havells LED Panel Light",
      brand: "Havells",
      model: "Adore 18W",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
      quantity: 8,
      price: 890,
      originalPrice: 1050,
      gst: 12
    }
  ];

  const subtotal = cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  const savings = cartItems?.reduce((sum, item) => sum + ((item?.originalPrice - item?.price) * item?.quantity), 0);
  const gstAmount = cartItems?.reduce((sum, item) => sum + ((item?.price * item?.quantity * item?.gst) / 100), 0);
  const promoDiscount = isPromoApplied ? 500 : 0;
  const deliveryCharges = subtotal > 5000 ? 0 : 150;
  const total = subtotal + gstAmount - promoDiscount + deliveryCharges;

  const handlePromoApply = () => {
    if (promoCode?.toLowerCase() === 'promac25') {
      setIsPromoApplied(true);
    }
  };

  return (
    <div className={`bg-white border border-gray-200 shadow-sm rounded-none transition-all duration-300 ${
      isCollapsed ? 'lg:w-16' : 'lg:w-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        {!isCollapsed && (
          <h2 className="text-lg font-light text-black">Order Summary</h2>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="lg:flex hidden"
          iconName={isCollapsed ? "ChevronLeft" : "ChevronRight"}
          iconSize={16}
        />
      </div>
      {!isCollapsed ? (
        <div className="p-6 space-y-6">
          {/* Items List */}
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {cartItems?.map((item) => (
              <div key={item?.id} className="flex items-start space-x-3">
                <div className="relative">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs font-light">
                    {item?.quantity}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-light text-black truncate">{item?.name}</h3>
                  <p className="text-xs text-gray-600 font-light">{item?.brand} • {item?.model}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm font-light text-black">₹{item?.price?.toLocaleString('en-IN')}</span>
                    {item?.originalPrice > item?.price && (
                      <span className="text-xs text-gray-400 line-through font-light">₹{item?.originalPrice?.toLocaleString('en-IN')}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promo Code */}
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e?.target?.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-none bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black font-light"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handlePromoApply}
                disabled={!promoCode || isPromoApplied}
                className="border-black bg-black text-white hover:bg-white hover:text-black font-light"
              >
                Apply
              </Button>
            </div>
            {isPromoApplied && (
              <div className="flex items-center space-x-2 text-red-600">
                <Icon name="CheckCircle" size={16} />
                <span className="text-sm font-light">PROMAC25 applied successfully!</span>
              </div>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">Subtotal ({cartItems?.reduce((sum, item) => sum + item?.quantity, 0)} items)</span>
              <span className="text-black font-light">₹{subtotal?.toLocaleString('en-IN')}</span>
            </div>
            
            {savings > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-light">You Save</span>
                <span className="text-red-600 font-light">-₹{savings?.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">GST</span>
              <span className="text-black font-light">₹{gstAmount?.toLocaleString('en-IN')}</span>
            </div>

            {promoDiscount > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-light">Promo Discount</span>
                <span className="text-red-600 font-light">-₹{promoDiscount?.toLocaleString('en-IN')}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-gray-600 font-light">Delivery Charges</span>
              <span className={deliveryCharges === 0 ? "text-red-600 font-light" : "text-black font-light"}>
                {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges?.toLocaleString('en-IN')}`}
              </span>
            </div>

            <div className="flex justify-between text-lg font-light pt-3 border-t border-gray-200">
              <span className="text-black">Total</span>
              <span className="text-black">₹{total?.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 text-red-600">
              <Icon name="Shield" size={16} />
              <span className="text-xs font-light">SSL Encrypted & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Award" size={16} />
              <span className="text-xs font-light">BIS Certified Products</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="Truck" size={16} />
              <span className="text-xs font-light">Free delivery on orders above ₹5,000</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <Icon name="ShoppingBag" size={16} className="text-primary" />
          </div>
          <p className="text-xs font-medium text-foreground">{cartItems?.reduce((sum, item) => sum + item?.quantity, 0)}</p>
          <p className="text-xs text-muted-foreground">Items</p>
          <p className="text-sm font-semibold text-primary mt-2">₹{total?.toLocaleString('en-IN')}</p>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;