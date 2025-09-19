import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WelcomeHeader = ({ user, accountType, loyaltyTier, onQuickAction }) => {
  const getTierColor = (tier) => {
    switch (tier) {
      case 'Gold': return 'text-yellow-500';
      case 'Silver': return 'text-gray-400';
      case 'Bronze': return 'text-amber-600';
      default: return 'text-muted-foreground';
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'Gold': return 'Crown';
      case 'Silver': return 'Award';
      case 'Bronze': return 'Medal';
      default: return 'User';
    }
  };

  const getAccountTypeLabel = (type) => {
    switch (type) {
      case 'contractor': return 'Contractor Account';
      case 'distributor': return 'Distributor Partner';
      case 'business': return 'Business Account';
      default: return 'Individual Account';
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 border border-primary/20 rounded-full"></div>
      </div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
              <Icon name="User" size={28} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                Welcome back, {user?.name}!
              </h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="text-sm font-medium">{getAccountTypeLabel(accountType)}</span>
                <div className="flex items-center space-x-2">
                  <Icon name={getTierIcon(loyaltyTier)} size={16} className={getTierColor(loyaltyTier)} />
                  <span className={`text-sm font-medium ${getTierColor(loyaltyTier)}`}>
                    {loyaltyTier} Member
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Zap"
              iconPosition="left"
              className="bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-white"
              onClick={() => onQuickAction('emergency')}
            >
              Emergency Order
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Headphones"
              iconPosition="left"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900"
              onClick={() => onQuickAction('support')}
            >
              Expert Support
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{user?.stats?.totalOrders}</div>
            <div className="text-sm text-gray-400">Total Orders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">₹{user?.stats?.totalSpent?.toLocaleString('en-IN')}</div>
            <div className="text-sm text-gray-400">Total Spent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">{user?.stats?.rewardPoints}</div>
            <div className="text-sm text-gray-400">Reward Points</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">{user?.stats?.activeProjects || 0}</div>
            <div className="text-sm text-gray-400">Active Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;