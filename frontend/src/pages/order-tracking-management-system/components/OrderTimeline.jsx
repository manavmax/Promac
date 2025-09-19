import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderTimeline = ({ order, isVisible, onClose }) => {
  if (!isVisible) return null;

  const timelineSteps = [
    {
      id: 'confirmed',
      title: 'Order Confirmed',
      description: 'Your order has been confirmed and is being prepared',
      icon: 'CheckCircle',
      completed: true,
      timestamp: order?.timeline?.confirmed
    },
    {
      id: 'processing',
      title: 'Processing',
      description: 'Items are being picked and packed at our warehouse',
      icon: 'Package',
      completed: order?.timeline?.processing !== null,
      timestamp: order?.timeline?.processing
    },
    {
      id: 'shipped',
      title: 'Shipped',
      description: 'Your order has been dispatched and is on its way',
      icon: 'Truck',
      completed: order?.timeline?.shipped !== null,
      timestamp: order?.timeline?.shipped
    },
    {
      id: 'outForDelivery',
      title: 'Out for Delivery',
      description: 'Your order is out for delivery and will arrive soon',
      icon: 'MapPin',
      completed: order?.timeline?.outForDelivery !== null,
      timestamp: order?.timeline?.outForDelivery
    },
    {
      id: 'delivered',
      title: 'Delivered',
      description: 'Your order has been successfully delivered',
      icon: 'Home',
      completed: order?.timeline?.delivered !== null,
      timestamp: order?.timeline?.delivered
    }
  ];

  const formatDateTime = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString)?.toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCurrentStep = () => {
    for (let i = timelineSteps?.length - 1; i >= 0; i--) {
      if (timelineSteps?.[i]?.completed) {
        return i;
      }
    }
    return 0;
  };

  const currentStep = getCurrentStep();

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-premium-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Order Tracking</h2>
            <p className="text-sm text-muted-foreground">Order #{order?.orderNumber}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Timeline */}
        <div className="p-6">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            <div 
              className="absolute left-6 top-0 w-0.5 bg-primary transition-all duration-1000"
              style={{ height: `${(currentStep / (timelineSteps?.length - 1)) * 100}%` }}
            ></div>

            {/* Timeline Steps */}
            <div className="space-y-8">
              {timelineSteps?.map((step, index) => (
                <div key={step?.id} className="relative flex items-start">
                  {/* Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    step?.completed 
                      ? 'bg-primary border-primary' 
                      : index === currentStep + 1
                        ? 'bg-primary/10 border-primary animate-pulse' :'bg-background border-border'
                  }`}>
                    <Icon 
                      name={step?.icon} 
                      size={20} 
                      className={step?.completed ? 'text-primary-foreground' : 'text-muted-foreground'} 
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-semibold ${
                        step?.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step?.title}
                      </h3>
                      {step?.timestamp && (
                        <span className="text-sm text-muted-foreground">
                          {formatDateTime(step?.timestamp)}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mt-1 ${
                      step?.completed ? 'text-muted-foreground' : 'text-muted-foreground/60'
                    }`}>
                      {step?.description}
                    </p>

                    {/* Additional Info for Current Step */}
                    {index === currentStep && step?.completed && (
                      <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-primary">
                          <Icon name="Info" size={16} />
                          <span className="font-medium">Current Status</span>
                        </div>
                        {step?.id === 'shipped' && order?.deliveryPartner && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            <p>Tracking ID: {order?.deliveryPartner?.trackingId}</p>
                            <p>Carrier: {order?.deliveryPartner?.name}</p>
                          </div>
                        )}
                        {step?.id === 'outForDelivery' && order?.estimatedDelivery && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            <p>Expected delivery: {formatDateTime(order?.estimatedDelivery)}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          {order?.deliveryPartner && (
            <div className="mt-8 p-4 bg-muted/30 rounded-lg">
              <h4 className="text-sm font-semibold text-foreground mb-3">Delivery Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Delivery Partner</p>
                  <p className="font-medium text-foreground">{order?.deliveryPartner?.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tracking ID</p>
                  <p className="font-medium text-foreground">{order?.deliveryPartner?.trackingId}</p>
                </div>
                {order?.estimatedDelivery && (
                  <div>
                    <p className="text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium text-foreground">{formatDateTime(order?.estimatedDelivery)}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Delivery Address</p>
                  <p className="font-medium text-foreground">
                    {order?.deliveryAddress?.city}, {order?.deliveryAddress?.state}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200">
              <Icon name="MessageCircle" size={16} />
              <span>Contact Support</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-200">
              <Icon name="Download" size={16} />
              <span>Download Invoice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;