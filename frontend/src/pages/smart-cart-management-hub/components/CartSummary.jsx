import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ cartItems, onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('cards');
  const navigate = useNavigate();

  const subtotal = cartItems?.reduce((sum, item) => {
    const bulkDiscount = item?.quantity >= 100 ? 15 : item?.quantity >= 50 ? 10 : item?.quantity >= 10 ? 5 : 0;
    // Convert price string to number (remove ₹ and commas)
    const priceNumber = parseFloat(item?.price?.toString().replace('₹', '').replace(',', '')) || 0;
    const discountedPrice = priceNumber * (1 - bulkDiscount / 100);
    return sum + (discountedPrice * item?.quantity);
  }, 0);

  const bulkSavings = cartItems?.reduce((sum, item) => {
    const bulkDiscount = item?.quantity >= 100 ? 15 : item?.quantity >= 50 ? 10 : item?.quantity >= 10 ? 5 : 0;
    // Convert price string to number (remove ₹ and commas)
    const priceNumber = parseFloat(item?.price?.toString().replace('₹', '').replace(',', '')) || 0;
    const savings = (priceNumber * bulkDiscount / 100) * item?.quantity;
    return sum + savings;
  }, 0);

  const shippingCost = subtotal > 5000 ? 0 : 150;
  const gstRate = 18;
  const gstAmount = subtotal * (gstRate / 100);
  const couponDiscount = appliedCoupon ? subtotal * (appliedCoupon?.discount / 100) : 0;
  const total = subtotal + gstAmount + shippingCost - couponDiscount;

  const handleApplyCoupon = () => {
    // Mock coupon validation
    const validCoupons = {
      'ELECTRICAL10': { discount: 10, label: '10% off on electrical items' },
      'BULK15': { discount: 15, label: '15% off on bulk orders' },
      'NEWUSER20': { discount: 20, label: '20% off for new users' }
    };

    if (validCoupons?.[couponCode?.toUpperCase()]) {
      setAppliedCoupon({
        code: couponCode?.toUpperCase(),
        ...validCoupons?.[couponCode?.toUpperCase()]
      });
      onApplyCoupon(couponCode?.toUpperCase());
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="p-8">
        <h2 className="text-2xl font-light text-black mb-8 tracking-tight">Order Summary</h2>

        {/* Coupon Section */}
        <div className="mb-8">
          <div className="flex space-x-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e?.target?.value)}
                className="w-full px-4 py-3 border border-gray-300 bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-200"
                disabled={!!appliedCoupon}
              />
            </div>
            {!appliedCoupon ? (
              <Button
                variant="outline"
                onClick={handleApplyCoupon}
                disabled={!couponCode?.trim()}
                className="px-6 bg-black border-black text-white hover:bg-gray-800 hover:border-gray-800 font-light"
              >
                Apply
              </Button>
            ) : (
              <Button
                variant="ghost"
                onClick={handleRemoveCoupon}
                iconName="X"
                iconSize={16}
                className="px-3 text-gray-600 hover:text-black hover:bg-gray-100"
              >
                <span className="sr-only">Remove coupon</span>
              </Button>
            )}
          </div>
          
          {appliedCoupon && (
            <div className="mt-4 p-4 bg-gray-100 border border-gray-200">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={18} className="text-black" />
                <span className="text-sm text-black font-light">
                  {appliedCoupon?.code} applied - {appliedCoupon?.label}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-light">Subtotal ({cartItems?.length} items)</span>
            <span className="text-black font-light">₹{(subtotal + bulkSavings)?.toLocaleString('en-IN')}</span>
          </div>

          {bulkSavings > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-black">Bulk discount savings</span>
              <span className="text-black font-light">-₹{bulkSavings?.toLocaleString('en-IN')}</span>
            </div>
          )}

          {couponDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-black">Coupon discount ({appliedCoupon?.code})</span>
              <span className="text-black font-light">-₹{couponDiscount?.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-gray-600 font-light">GST ({gstRate}%)</span>
            <span className="text-black font-light">₹{gstAmount?.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 font-light">Shipping</span>
              {shippingCost === 0 && (
                <Icon name="CheckCircle" size={14} className="text-black" />
              )}
            </div>
            <span className={shippingCost === 0 ? 'text-black font-light' : 'text-black font-light'}>
              {shippingCost === 0 ? 'FREE' : `₹${shippingCost?.toLocaleString('en-IN')}`}
            </span>
          </div>

          {shippingCost > 0 && (
            <div className="text-xs text-gray-600 bg-gray-100 p-3 border border-gray-200 font-light">
              Add ₹{(5000 - subtotal)?.toLocaleString('en-IN')} more for free shipping
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 pt-6 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-xl font-light text-black">Total</span>
            <span className="text-3xl font-light text-black">
              ₹{total?.toLocaleString('en-IN')}
            </span>
          </div>
          {(bulkSavings + couponDiscount) > 0 && (
            <div className="text-sm text-black font-light mt-3 bg-gray-100 p-3 border border-gray-200">
              You saved ₹{(bulkSavings + couponDiscount)?.toLocaleString('en-IN')}!
            </div>
          )}
        </div>

        {/* Payment Methods Preview */}
        <div className="mb-8">
          <h3 className="text-sm font-light text-black mb-4">Payment Options</h3>
          <div className="grid grid-cols-2 gap-3">
            <div 
              className={`flex items-center space-x-3 p-3 border cursor-pointer transition-all duration-200 ${
                selectedPayment === 'cards' 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-100 text-black'
              }`}
              onClick={() => setSelectedPayment('cards')}
            >
              <Icon name="CreditCard" size={18} className={selectedPayment === 'cards' ? 'text-white' : 'text-black'} />
              <span className={`text-sm font-light ${selectedPayment === 'cards' ? 'text-white' : 'text-black'}`}>Cards</span>
              {selectedPayment === 'cards' && (
                <Icon name="Check" size={16} className="text-white ml-auto" />
              )}
            </div>
            <div 
              className={`flex items-center space-x-3 p-3 border cursor-pointer transition-all duration-200 ${
                selectedPayment === 'upi' 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-100 text-black'
              }`}
              onClick={() => setSelectedPayment('upi')}
            >
              <Icon name="Smartphone" size={18} className={selectedPayment === 'upi' ? 'text-white' : 'text-black'} />
              <span className={`text-sm font-light ${selectedPayment === 'upi' ? 'text-white' : 'text-black'}`}>UPI</span>
              {selectedPayment === 'upi' && (
                <Icon name="Check" size={16} className="text-white ml-auto" />
              )}
            </div>
            <div 
              className={`flex items-center space-x-3 p-3 border cursor-pointer transition-all duration-200 ${
                selectedPayment === 'netbanking' 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-100 text-black'
              }`}
              onClick={() => setSelectedPayment('netbanking')}
            >
              <Icon name="Building2" size={18} className={selectedPayment === 'netbanking' ? 'text-white' : 'text-black'} />
              <span className={`text-sm font-light ${selectedPayment === 'netbanking' ? 'text-white' : 'text-black'}`}>Net Banking</span>
              {selectedPayment === 'netbanking' && (
                <Icon name="Check" size={16} className="text-white ml-auto" />
              )}
            </div>
            <div 
              className={`flex items-center space-x-3 p-3 border cursor-pointer transition-all duration-200 ${
                selectedPayment === 'wallet' 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white hover:bg-gray-100 text-black'
              }`}
              onClick={() => setSelectedPayment('wallet')}
            >
              <Icon name="Wallet" size={18} className={selectedPayment === 'wallet' ? 'text-white' : 'text-black'} />
              <span className={`text-sm font-light ${selectedPayment === 'wallet' ? 'text-white' : 'text-black'}`}>Wallet</span>
              {selectedPayment === 'wallet' && (
                <Icon name="Check" size={16} className="text-white ml-auto" />
              )}
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          variant="default"
          size="lg"
          onClick={handleCheckout}
          className="w-full mb-6 bg-black hover:bg-gray-800 text-white font-light py-4 shadow-sm hover:shadow-md transition-all duration-200"
          iconName="ArrowRight"
          iconPosition="right"
        >
          Proceed to Checkout
        </Button>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 bg-gray-100 p-3 border border-gray-200">
          <Icon name="Shield" size={16} className="text-black" />
          <span className="font-light">Secure checkout with 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;