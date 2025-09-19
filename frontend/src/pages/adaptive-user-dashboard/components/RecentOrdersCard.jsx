import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecentOrdersCard = ({ orders, onViewAll }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-50';
      case 'shipped': return 'text-blue-600 bg-blue-50';
      case 'processing': return 'text-yellow-600 bg-yellow-50';
      case 'cancelled': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'processing': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Package';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
        <Button
          variant="ghost"
          size="sm"
          iconName="ArrowRight"
          iconPosition="right"
          onClick={onViewAll}
        >
          View All
        </Button>
      </div>
      <div className="space-y-4">
        {orders?.slice(0, 4)?.map((order) => (
          <div
            key={order?.id}
            className="group p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 precision-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon name="Package" size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                    Order #{order?.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date)?.toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(order?.status)}`}>
                <Icon name={getStatusIcon(order?.status)} size={12} />
                <span>{order?.status}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {order?.itemCount} item{order?.itemCount > 1 ? 's' : ''}
                </span>
                <span className="text-sm font-medium text-gray-900">
                  ₹{order?.total?.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  asChild
                >
                  <Link to={`/orders?order=${order?.id}`}>
                    Track
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Reorder
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {orders?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Package" size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-4">Start shopping to see your orders here</p>
          <Button
            variant="default"
            iconName="ShoppingCart"
            iconPosition="left"
            asChild
          >
            <Link to="/cart">
              Start Shopping
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecentOrdersCard;