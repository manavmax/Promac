import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Orders',
      value: stats?.totalOrders,
      change: '+12%',
      changeType: 'positive',
      icon: 'Package',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'All time orders'
    },
    {
      title: 'Active Orders',
      value: stats?.activeOrders,
      change: '+5%',
      changeType: 'positive',
      icon: 'Truck',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'In progress'
    },
    {
      title: 'Delivered',
      value: stats?.deliveredOrders,
      change: '+8%',
      changeType: 'positive',
      icon: 'CheckCircle',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Successfully delivered'
    },
    {
      title: 'Total Spent',
      value: `₹${stats?.totalSpent?.toLocaleString('en-IN')}`,
      change: '+15%',
      changeType: 'positive',
      icon: 'IndianRupee',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'This year'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-6 shadow-premium hover:shadow-premium-lg transition-all duration-300 precision-hover"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              stat?.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <Icon 
                name={stat?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
              />
              <span>{stat?.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat?.value}</h3>
            <p className="text-sm font-medium text-foreground">{stat?.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStats;