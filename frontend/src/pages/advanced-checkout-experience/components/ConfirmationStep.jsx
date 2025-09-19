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
    navigate('/dashboard');
  };

  const handleTrackOrder = () => {
    navigate('/orders');
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
          <h1 className="text-3xl font-bold text-black">Order Placed Successfully!</h1>
          <p className="text-lg text-gray-600">
            Thank you for your order. We've received your request and will process it shortly.
          </p>
        </div>
        {/* Order Details */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-light text-black mb-3">Order Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-light text-black">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="text-black">{new Date()?.toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-light text-primary">₹{total?.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="text-black capitalize">{formData?.paymentMethod?.replace('_', ' ')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-light text-black mb-3">Delivery Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Delivery:</span>
                  <span className="text-black">
                    {new Date(formData.deliverySlot?.date)?.toLocaleDateString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time Slot:</span>
                  <span className="text-black">{formData?.deliverySlot?.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Address:</span>
                  <span className="text-black text-right">
                    {formData?.shippingAddress?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Next Steps */}
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-light text-black mb-4">What happens next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Package" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-light text-black">Order Processing</h4>
                <p className="text-gray-600">We'll prepare your items for shipment</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-light text-black">Dispatch</h4>
                <p className="text-gray-600">Your order will be dispatched soon</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Home" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-light text-black">Delivery</h4>
                <p className="text-gray-600">Delivered to your doorstep</p>
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
            className="bg-black hover:bg-gray-800 text-white font-light"
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
        <div className="text-center text-sm text-gray-600">
          <p>Need help? Contact our support team at <span className="text-primary font-light">1800-123-4567</span></p>
          <p>or email us at <span className="text-primary font-light">support@promac.com</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back to Cart Button */}
      <div className="flex justify-start">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.history.back()}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={16}
          className="border-gray-300 text-white hover:border-black hover:text-white font-light"
        >
          Back to Cart
        </Button>
      </div>
      
      {/* Order Review Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-2">Review Your Order</h1>
        <p className="text-gray-600">Please review all details before placing your order</p>
      </div>
      {/* Order Items */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h2 className="text-lg font-light text-black mb-4 flex items-center">
          <Icon name="ShoppingBag" size={20} className="mr-2 text-primary" />
          Order Items ({cartItems?.reduce((sum, item) => sum + item?.quantity, 0)} items)
        </h2>
        
        <div className="space-y-4">
          {cartItems?.map((item) => (
            <div key={item?.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
              <Image
                src={item?.image}
                alt={item?.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-light text-black">{item?.name}</h3>
                <p className="text-sm text-gray-600">{item?.brand} • {item?.model}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm font-light text-black">₹{item?.price?.toLocaleString('en-IN')}</span>
                  {item?.originalPrice > item?.price && (
                    <span className="text-xs text-gray-600 line-through">₹{item?.originalPrice?.toLocaleString('en-IN')}</span>
                  )}
                  <span className="text-xs text-gray-600">× {item?.quantity}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-light text-black">₹{(item?.price * item?.quantity)?.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-600">GST: {item?.gst}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Delivery & Payment Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery Information */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
          <h3 className="text-lg font-light text-black mb-4 flex items-center">
            <Icon name="MapPin" size={20} className="mr-2 text-primary" />
            Delivery Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-light text-black mb-2">Delivery Address</h4>
              <div className="text-sm text-gray-600">
                <p className="font-light text-black">{formData?.shippingAddress?.name}</p>
                <p>{formData?.shippingAddress?.phone}</p>
                <p className="mt-1 whitespace-pre-line">{formData?.shippingAddress?.address}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-light text-black mb-2">Delivery Schedule</h4>
              <div className="text-sm">
                <p className="text-black">
                  {new Date(formData.deliverySlot?.date)?.toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </p>
                <p className="text-gray-600">{formData?.deliverySlot?.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
          <h3 className="text-lg font-light text-black mb-4 flex items-center">
            <Icon name="CreditCard" size={20} className="mr-2 text-primary" />
            Payment Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-light text-black mb-2">Payment Method</h4>
              <p className="text-sm text-gray-600 capitalize">
                {formData?.paymentMethod?.replace('_', ' ')}
              </p>
            </div>
            
            {formData?.businessInfo && (
              <div>
                <h4 className="font-light text-black mb-2">Business Details</h4>
                <div className="text-sm text-gray-600">
                  <p className="font-light text-black">{formData?.businessInfo?.businessDetails?.companyName}</p>
                  <p>GST: {formData?.businessInfo?.businessDetails?.gstNumber}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Price Summary */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h3 className="text-lg font-light text-black mb-4">Price Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal ({cartItems?.reduce((sum, item) => sum + item?.quantity, 0)} items)</span>
            <span className="text-black">₹{subtotal?.toLocaleString('en-IN')}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">GST</span>
            <span className="text-black">₹{gstAmount?.toLocaleString('en-IN')}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery Charges</span>
            <span className={deliveryCharges === 0 ? "text-success font-light" : "text-black"}>
              {deliveryCharges === 0 ? 'FREE' : `₹${deliveryCharges?.toLocaleString('en-IN')}`}
            </span>
          </div>

          <div className="flex justify-between text-lg font-light pt-3 border-t border-gray-200">
            <span className="text-black">Total Amount</span>
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
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2 mt-1"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the <span className="text-primary font-light cursor-pointer">Terms & Conditions</span> and <span className="text-primary font-light cursor-pointer">Privacy Policy</span>. 
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
          className="min-w-[200px] bg-black hover:bg-gray-800 text-white font-light"
        >
          {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationStep;