import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderCard = ({ order, onTrackOrder, onDownloadInvoice, onInitiateReturn }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
        return 'text-blue-600 bg-blue-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'shipped':
        return 'text-purple-600 bg-purple-50';
      case 'out for delivery':
        return 'text-orange-600 bg-orange-50';
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'urgent':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'high':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'normal':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    })?.format(amount);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-premium hover:shadow-premium-lg transition-all duration-300 precision-hover">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                Order #{order?.orderNumber}
              </h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order?.status)}`}>
                {order?.status}
              </span>
              {order?.priority !== 'normal' && (
                <span className={`px-2 py-1 rounded border text-xs font-medium ${getPriorityColor(order?.priority)}`}>
                  {order?.priority?.toUpperCase()}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Calendar" size={16} />
                <span>Ordered: {formatDate(order?.orderDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Package" size={16} />
                <span>{order?.items?.length} item{order?.items?.length > 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="IndianRupee" size={16} />
                <span>{formatCurrency(order?.totalAmount)}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
            >
              {isExpanded ? 'Less' : 'Details'}
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onTrackOrder(order?.id)}
              iconName="MapPin"
              iconPosition="left"
            >
              Track
            </Button>
          </div>
        </div>
      </div>
      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-6 space-y-6">
          {/* Items List */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Order Items</h4>
            <div className="space-y-3">
              {order?.items?.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                  <div className="w-12 h-12 bg-background rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item?.name}</p>
                    <p className="text-xs text-muted-foreground">{item?.specifications}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">Qty: {item?.quantity}</p>
                    <p className="text-xs text-muted-foreground">{formatCurrency(item?.price)}</p>
                  </div>
                  {item?.warrantyEligible && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-200">
                        <Icon name="Shield" size={12} className="mr-1" />
                        Warranty
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Delivery Address</h4>
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium text-foreground">{order?.deliveryAddress?.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {order?.deliveryAddress?.street}<br />
                  {order?.deliveryAddress?.city}, {order?.deliveryAddress?.state} {order?.deliveryAddress?.pincode}<br />
                  Phone: {order?.deliveryAddress?.phone}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Delivery Partner</h4>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{order?.deliveryPartner?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Tracking: {order?.deliveryPartner?.trackingId}
                    </p>
                  </div>
                </div>
                {order?.estimatedDelivery && (
                  <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Expected: {formatDate(order?.estimatedDelivery)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownloadInvoice(order?.id)}
              iconName="Download"
              iconPosition="left"
            >
              Download Invoice
            </Button>
            {order?.status === 'delivered' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onInitiateReturn(order?.id)}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Return/Exchange
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Contact Support
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Star"
              iconPosition="left"
            >
              Rate Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;