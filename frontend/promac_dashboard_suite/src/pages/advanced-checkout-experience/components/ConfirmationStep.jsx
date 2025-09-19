import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ConfirmationStep = ({ onBack, formData }) => {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();

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
  const gstAmount = cartItems?.reduce((sum, item) => sum + ((item?.price * item?.quantity * item?.gst) / 100), 0);
  const deliveryCharges = subtotal > 5000 ? 0 : 150;
  const total = subtotal + gstAmount + deliveryCharges;

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    
    // Simulate order placement
    setTimeout(() => {
      const orderNum = `PMC${Date.now()?.toString()?.slice(-8)}`;
      setOrderNumber(orderNum);
      setOrderPlaced(true);
      setIsPlacingOrder(false);
    }, 3000);
  };

  const handleContinueShopping = () => {
    navigate('/adaptive-user-dashboard');
  };

  const handleTrackOrder = () => {
    navigate('/order-tracking-management-system');
  };

  if (orderPlaced) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Success Animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={48} className="text-success" />
          </div>
          <div className="absolute inset-0 w-24 h-24 bg-success/20 rounded-full mx-auto animate-ping"></div>
        </div>
        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Order Placed Successfully!</h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your order. We've received your request and will process it shortly.
          </p>
        </div>
        {/* Order Details */}
        <div className="bg-card rounded-lg border border-border p-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Order Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number:</span>
                  <span className="font-medium text-foreground">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Date:</span>
                  <span className="text-foreground">{new Date()?.toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount:</span>
                  <span className="font-semibold text-primary">₹{total?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method:</span>
                  <span className="text-foreground capitalize">{formData?.paymentMethod?.replace('_', ' ')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Delivery Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Delivery:</span>
                  <span className="text-foreground">
                    {new Date(formData.deliverySlot?.date)?.toLocaleDateString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time Slot:</span>
                  <span className="text-foreground">{formData?.deliverySlot?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Address:</span>
                  <span className="text-foreground text-right">
                    {formData?.shippingAddress?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Package" size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Order Processing</h4>
                <p className="text-muted-foreground">We'll prepare your items for shipment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" size={16} className="text-warning" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Dispatch</h4>
                <p className="text-muted-foreground">Your order will be dispatched soon</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Home" size={16} className="text-success" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Delivery</h4>
                <p className="text-muted-foreground">Delivered to your doorstep</p>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={handleTrackOrder}
            iconName="Package"
            iconPosition="left"
            iconSize={20}
          >
            Track Your Order
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleContinueShopping}
            iconName="ShoppingBag"
            iconPosition="left"
            iconSize={20}
          >
            Continue Shopping
          </Button>
        </div>
        {/* Support Information */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Need help? Contact our support team at <span className="text-primary font-medium">1800-123-4567</span></p>
          <p>or email us at <span className="text-primary font-medium">support@promac.com</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Order Review Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">Review Your Order</h1>
        <p className="text-muted-foreground">Please review all details before placing your order</p>
      </div>
      {/* Order Items */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center">
          <Icon name="ShoppingBag" size={20} className="mr-2 text-primary" />
          Order Items ({cartItems?.reduce((sum, item) => sum + item?.quantity, 0)} items)
        </h2>
        
        <div className="space-y-4">
          {cartItems?.map((item) => (
            <div key={item?.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
              <Image
                src={item?.image}
                alt={item?.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item?.name}</h3>
                <p className="text-sm text-muted-foreground">{item?.brand} • {item?.model}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm font-semibold text-foreground">₹{item?.price?.toLocaleString('en-IN')}</span>
                  {item?.originalPrice > item?.price && (
                    <span className="text-xs text-muted-foreground line-through">₹{item?.originalPrice?.toLocaleString('en-IN')}</span>
                  )}
                  <span className="text-xs text-muted-foreground">× {item?.quantity}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">₹{(item?.price * item?.quantity)?.toLocaleString('en-IN')}</p>
                <p className="text-xs text-muted-foreground">GST: {item?.gst}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Delivery & Payment Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery Information */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="MapPin" size={20} className="mr-2 text-primary" />
            Delivery Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Delivery Address</h4>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{formData?.shippingAddress?.name}</p>
                <p>{formData?.shippingAddress?.phone}</p>
                <p className="mt-1 whitespace-pre-line">{formData?.shippingAddress?.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">Delivery Schedule</h4>
              <div className="text-sm">
                <p className="text-foreground">
                  {new Date(formData.deliverySlot?.date)?.toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </p>
                <p className="text-muted-foreground">{formData?.deliverySlot?.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="CreditCard" size={20} className="mr-2 text-primary" />
            Payment Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Payment Method</h4>
              <p className="text-sm text-muted-foreground capitalize">
                {formData?.paymentMethod?.replace('_', ' ')}
              </p>
            </div>
            
            {formData?.businessInfo && (
              <div>
                <h4 className="font-medium text-foreground mb-2">Business Details</h4>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{formData?.businessInfo?.businessDetails?.companyName}</p>
                  <p>GST: {formData?.businessInfo?.businessDetails?.gstNumber}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Price Summary */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Price Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal ({cartItems?.reduce((sum, item) => sum + item?.quantity, 0)} items)</span>
            <span className="text-foreground">₹{subtotal?.toLocaleString('en-IN')}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">GST</span>
            <span className="text-foreground">₹{gstAmount?.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Charges</span>
            <span className={deliveryCharges === 0 ? "text-success font-medium" : "text-foreground"}>
              {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges?.toLocaleString('en-IN')}`}
            </span>
          </div>

          <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
            <span className="text-foreground">Total Amount</span>
            <span className="text-primary">₹{total?.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary mt-1"
            required
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the <span className="text-primary font-medium cursor-pointer">Terms & Conditions</span> and <span className="text-primary font-medium cursor-pointer">Privacy Policy</span>. 
            I understand that this order is subject to availability and Promac's standard delivery terms.
          </label>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          disabled={isPlacingOrder}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={20}
        >
          Back to Business Details
        </Button>
        
        <Button
          variant="default"
          size="lg"
          onClick={handlePlaceOrder}
          loading={isPlacingOrder}
          iconName="CheckCircle"
          iconPosition="right"
          iconSize={20}
          className="min-w-[200px]"
        >
          {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStep;