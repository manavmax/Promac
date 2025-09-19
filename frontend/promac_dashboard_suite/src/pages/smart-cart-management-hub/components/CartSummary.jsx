import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ cartItems, onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const navigate = useNavigate();

  const subtotal = cartItems?.reduce((sum, item) => {
    const bulkDiscount = item?.quantity >= 100 ? 15 : item?.quantity >= 50 ? 10 : item?.quantity >= 10 ? 5 : 0;
    const discountedPrice = item?.price * (1 - bulkDiscount / 100);
    return sum + (discountedPrice * item?.quantity);
  }, 0);

  const bulkSavings = cartItems?.reduce((sum, item) => {
    const bulkDiscount = item?.quantity >= 100 ? 15 : item?.quantity >= 50 ? 10 : item?.quantity >= 10 ? 5 : 0;
    const savings = (item?.price * bulkDiscount / 100) * item?.quantity;
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
    navigate('/advanced-checkout-experience');
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-precision sticky top-24">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-foreground mb-6">Order Summary</h2>

        {/* Coupon Section */}
        <div className="mb-6">
          <div className="flex space-x-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e?.target?.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={!!appliedCoupon}
              />
            </div>
            {!appliedCoupon ? (
              <Button
                variant="outline"
                onClick={handleApplyCoupon}
                disabled={!couponCode?.trim()}
                className="px-4"
              >
                Apply
              </Button>
            ) : (
              <Button
                variant="ghost"
                onClick={handleRemoveCoupon}
                iconName="X"
                iconSize={16}
                className="px-3"
              >
                <span className="sr-only">Remove coupon</span>
              </Button>
            )}
          </div>
          
          {appliedCoupon && (
            <div className="mt-2 p-3 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-success" />
                <span className="text-sm text-success font-medium">
                  {appliedCoupon?.code} applied - {appliedCoupon?.label}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal ({cartItems?.length} items)</span>
            <span className="text-foreground">₹{(subtotal + bulkSavings)?.toLocaleString('en-IN')}</span>
          </div>

          {bulkSavings > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-success">Bulk discount savings</span>
              <span className="text-success">-₹{bulkSavings?.toLocaleString('en-IN')}</span>
            </div>
          )}

          {couponDiscount > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-success">Coupon discount ({appliedCoupon?.code})</span>
              <span className="text-success">-₹{couponDiscount?.toLocaleString('en-IN')}</span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">GST ({gstRate}%)</span>
            <span className="text-foreground">₹{gstAmount?.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-muted-foreground">Shipping</span>
              {shippingCost === 0 && (
                <Icon name="CheckCircle" size={12} className="text-success" />
              )}
            </div>
            <span className={shippingCost === 0 ? 'text-success' : 'text-foreground'}>
              {shippingCost === 0 ? 'FREE' : `₹${shippingCost?.toLocaleString('en-IN')}`}
            </span>
          </div>

          {shippingCost > 0 && (
            <div className="text-xs text-muted-foreground">
              Add ₹{(5000 - subtotal)?.toLocaleString('en-IN')} more for free shipping
            </div>
          )}
        </div>

        <div className="border-t border-border pt-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">Total</span>
            <span className="text-2xl font-bold text-foreground">
              ₹{total?.toLocaleString('en-IN')}
            </span>
          </div>
          {(bulkSavings + couponDiscount) > 0 && (
            <div className="text-sm text-success mt-1">
              You saved ₹{(bulkSavings + couponDiscount)?.toLocaleString('en-IN')}!
            </div>
          )}
        </div>

        {/* Payment Methods Preview */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-foreground mb-3">Payment Options</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 p-2 border border-border rounded-lg">
              <Icon name="CreditCard" size={16} className="text-muted-foreground" />
              <span className="text-xs text-foreground">Cards</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border border-border rounded-lg">
              <Icon name="Smartphone" size={16} className="text-muted-foreground" />
              <span className="text-xs text-foreground">UPI</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border border-border rounded-lg">
              <Icon name="Building2" size={16} className="text-muted-foreground" />
              <span className="text-xs text-foreground">Net Banking</span>
            </div>
            <div className="flex items-center space-x-2 p-2 border border-border rounded-lg">
              <Icon name="Wallet" size={16} className="text-muted-foreground" />
              <span className="text-xs text-foreground">Wallet</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <Button
          variant="default"
          size="lg"
          onClick={handleCheckout}
          className="w-full mb-4"
          iconName="ArrowRight"
          iconPosition="right"
        >
          Proceed to Checkout
        </Button>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground">
          <Icon name="Shield" size={14} className="text-success" />
          <span>Secure checkout with 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;