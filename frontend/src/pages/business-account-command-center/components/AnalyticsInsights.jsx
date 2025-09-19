import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AnalyticsInsights = () => {
  const monthlySpending = [
    { month: 'Oct', amount: 2850000, orders: 45 },
    { month: 'Nov', amount: 3200000, orders: 52 },
    { month: 'Dec', amount: 4100000, orders: 68 },
    { month: 'Jan', amount: 3750000, orders: 61 },
    { month: 'Feb', amount: 2900000, orders: 48 },
    { month: 'Mar', amount: 3450000, orders: 55 }
  ];

  const categorySpending = [
    { name: 'Switches & Sockets', value: 35, amount: 1225000, color: '#FF0C0D' },
    { name: 'Cables & Wires', value: 28, amount: 980000, color: '#FF4444' },
    { name: 'Circuit Breakers', value: 20, amount: 700000, color: '#FF7777' },
    { name: 'Lighting', value: 12, amount: 420000, color: '#FFAAAA' },
    { name: 'Others', value: 5, amount: 175000, color: '#FFDDDD' }
  ];

  const brandPerformance = [
    { brand: 'Schneider', orders: 145, value: 5200000, growth: 12.5 },
    { brand: 'Siemens', orders: 98, value: 3800000, growth: 8.3 },
    { brand: 'ABB', orders: 76, value: 2900000, growth: -2.1 },
    { brand: 'Legrand', orders: 54, value: 2100000, growth: 15.7 },
    { brand: 'Havells', orders: 42, value: 1600000, growth: 6.9 }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const formatCompactCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000)?.toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000)?.toFixed(1)}L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000)?.toFixed(1)}K`;
    }
    return `₹${amount}`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-premium">
          <p className="text-sm font-medium text-popover-foreground">{label}</p>
          <p className="text-sm text-primary">
            Amount: {formatCurrency(payload?.[0]?.value)}
          </p>
          {payload?.[0]?.payload?.orders && (
            <p className="text-sm text-muted-foreground">
              Orders: {payload?.[0]?.payload?.orders}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-lg border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <p className="text-lg font-semibold text-foreground">₹3.45Cr</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="ShoppingCart" size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Orders</p>
              <p className="text-lg font-semibold text-foreground">289</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
              <Icon name="Package" size={20} className="text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Order</p>
              <p className="text-lg font-semibold text-foreground">₹1.19L</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-4 rounded-lg border border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
              <Icon name="Percent" size={20} className="text-error" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Savings</p>
              <p className="text-lg font-semibold text-foreground">₹4.2L</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Spending Trend */}
        <div className="glass-card p-6 rounded-xl border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Monthly Spending Trend</h3>
              <p className="text-sm text-muted-foreground">Last 6 months performance</p>
            </div>
            <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
              Export
            </Button>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySpending}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  tickFormatter={formatCompactCurrency}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="amount" fill="#FF0C0D" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="glass-card p-6 rounded-xl border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Category Distribution</h3>
              <p className="text-sm text-muted-foreground">Spending by product category</p>
            </div>
          </div>
          
          <div className="h-64 flex items-center">
            <div className="w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categorySpending}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categorySpending?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name, props) => [
                      `${value}% (${formatCurrency(props?.payload?.amount)})`,
                      props?.payload?.name
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-2">
              {categorySpending?.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category?.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{category?.name}</p>
                    <p className="text-xs text-muted-foreground">{category?.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Brand Performance */}
      <div className="glass-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Brand Performance</h3>
            <p className="text-sm text-muted-foreground">Top performing brands this quarter</p>
          </div>
          <Button variant="outline" size="sm" iconName="BarChart3" iconPosition="left">
            Detailed Report
          </Button>
        </div>

        <div className="space-y-4">
          {brandPerformance?.map((brand, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{brand?.brand?.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{brand?.brand}</p>
                  <p className="text-xs text-muted-foreground">{brand?.orders} orders</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{formatCurrency(brand?.value)}</p>
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={brand?.growth >= 0 ? "TrendingUp" : "TrendingDown"} 
                    size={12} 
                    className={brand?.growth >= 0 ? "text-success" : "text-error"} 
                  />
                  <span className={`text-xs font-medium ${brand?.growth >= 0 ? "text-success" : "text-error"}`}>
                    {Math.abs(brand?.growth)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsInsights;