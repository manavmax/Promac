import React from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AnalyticsCard = ({ analyticsData, accountType }) => {
  const monthlyData = [
    { month: 'Jan', orders: 45, revenue: 125000 },
    { month: 'Feb', orders: 52, revenue: 142000 },
    { month: 'Mar', orders: 48, revenue: 138000 },
    { month: 'Apr', orders: 61, revenue: 165000 },
    { month: 'May', orders: 55, revenue: 158000 },
    { month: 'Jun', orders: 67, revenue: 182000 }
  ];

  const performanceMetrics = [
    {
      title: 'Monthly Revenue',
      value: `₹${analyticsData?.monthlyRevenue?.toLocaleString('en-IN')}`,
      change: '+12.5%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'text-green-600'
    },
    {
      title: 'Order Volume',
      value: analyticsData?.orderVolume,
      change: '+8.3%',
      trend: 'up',
      icon: 'Package',
      color: 'text-blue-600'
    },
    {
      title: 'Customer Growth',
      value: `+${analyticsData?.customerGrowth}`,
      change: '+15.2%',
      trend: 'up',
      icon: 'Users',
      color: 'text-purple-600'
    },
    {
      title: 'Territory Coverage',
      value: `${analyticsData?.territoryCoverage}%`,
      change: '+2.1%',
      trend: 'up',
      icon: 'MapPin',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Performance Analytics</h2>
        <Icon name="BarChart3" size={20} className="text-primary" />
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {performanceMetrics?.map((metric, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <Icon name={metric?.icon} size={20} className={metric?.color} />
              <div className={`flex items-center space-x-1 text-xs font-medium ${
                metric?.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <Icon 
                  name={metric?.trend === 'up' ? 'ArrowUp' : 'ArrowDown'} 
                  size={12} 
                />
                <span>{metric?.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {metric?.value}
            </div>
            <div className="text-sm text-gray-600">
              {metric?.title}
            </div>
          </div>
        ))}
      </div>
      {/* Charts */}
      <div className="space-y-8">
        {/* Revenue Trend */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6b7280"
                  fontSize={12}
                  tickFormatter={(value) => `₹${(value / 1000)?.toFixed(0)}K`}
                />
                <Tooltip 
                  formatter={(value) => [`₹${value?.toLocaleString('en-IN')}`, 'Revenue']}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FF0C0D" 
                  strokeWidth={3}
                  dot={{ fill: '#FF0C0D', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#FF0C0D', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Volume */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Order Volume</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6b7280"
                  fontSize={12}
                />
                <Tooltip 
                  formatter={(value) => [value, 'Orders']}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="orders" 
                  fill="#FF0C0D"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Insights */}
      <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900 mb-1">Key Insights</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Revenue growth accelerated by 12.5% this month</li>
              <li>• Order volume shows consistent upward trend</li>
              <li>• Customer acquisition rate improved significantly</li>
              {accountType === 'distributor' && (
                <li>• Territory expansion opportunities identified in 3 new regions</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;