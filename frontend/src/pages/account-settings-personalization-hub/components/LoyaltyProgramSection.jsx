import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgramSection = () => {
  const [loyaltyData] = useState({
    currentTier: "Gold",
    points: 12450,
    nextTier: "Platinum",
    pointsToNextTier: 2550,
    totalSpent: 850000,
    memberSince: "2022-03-15"
  });

  const [rewardHistory] = useState([
    {
      id: 1,
      type: "earned",
      points: 250,
      description: "Order #ORD-2024-001234",
      date: "2024-12-20",
      status: "completed"
    },
    {
      id: 2,
      type: "redeemed",
      points: -500,
      description: "₹50 discount on Order #ORD-2024-001230",
      date: "2024-12-18",
      status: "completed"
    },
    {
      id: 3,
      type: "earned",
      points: 180,
      description: "Order #ORD-2024-001225",
      date: "2024-12-15",
      status: "completed"
    },
    {
      id: 4,
      type: "bonus",
      points: 1000,
      description: "Gold tier welcome bonus",
      date: "2024-12-10",
      status: "completed"
    }
  ]);

  const [availableRewards] = useState([
    {
      id: 1,
      name: "₹50 Discount",
      description: "Get ₹50 off on orders above ₹5,000",
      pointsCost: 500,
      category: "discount",
      validTill: "2025-01-31"
    },
    {
      id: 2,
      name: "₹100 Discount",
      description: "Get ₹100 off on orders above ₹10,000",
      pointsCost: 1000,
      category: "discount",
      validTill: "2025-01-31"
    },
    {
      id: 3,
      name: "Free Shipping",
      description: "Free shipping on your next 3 orders",
      pointsCost: 750,
      category: "shipping",
      validTill: "2025-02-28"
    },
    {
      id: 4,
      name: "Priority Support",
      description: "24/7 priority technical support for 30 days",
      pointsCost: 2000,
      category: "support",
      validTill: "2025-03-31"
    }
  ]);

  const tierBenefits = {
    Bronze: ["1% cashback", "Standard support", "Basic warranty"],
    Silver: ["2% cashback", "Priority support", "Extended warranty", "Free shipping above ₹5,000"],
    Gold: ["3% cashback", "24/7 support", "Premium warranty", "Free shipping above ₹2,500", "Bulk pricing access"],
    Platinum: ["5% cashback", "Dedicated account manager", "Premium warranty", "Free shipping on all orders", "Exclusive bulk pricing", "Early access to new products"]
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Bronze': return 'text-amber-600 bg-amber-50';
      case 'Silver': return 'text-gray-600 bg-gray-50';
      case 'Gold': return 'text-yellow-600 bg-yellow-50';
      case 'Platinum': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRewardIcon = (category) => {
    switch (category) {
      case 'discount': return 'Tag';
      case 'shipping': return 'Truck';
      case 'support': return 'Headphones';
      default: return 'Gift';
    }
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'earned': return 'Plus';
      case 'redeemed': return 'Minus';
      case 'bonus': return 'Gift';
      default: return 'Circle';
    }
  };

  const getTransactionColor = (type) => {
    switch (type) {
      case 'earned': return 'text-success';
      case 'redeemed': return 'text-warning';
      case 'bonus': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const handleRedeemReward = (rewardId) => {
    console.log('Redeeming reward:', rewardId);
  };

  const progressPercentage = ((loyaltyData?.points / (loyaltyData?.points + loyaltyData?.pointsToNextTier)) * 100);

  return (
    <div className="space-y-6">
      {/* Loyalty Status */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Crown" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Loyalty Program</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Status */}
          <div className="space-y-4">
            <div className="text-center p-6 bg-electrical-gradient rounded-lg text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Crown" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{loyaltyData?.currentTier} Member</h3>
              <p className="text-white/80">Member since {new Date(loyaltyData.memberSince)?.toLocaleDateString('en-IN')}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <h4 className="text-2xl font-bold text-primary">{loyaltyData?.points?.toLocaleString('en-IN')}</h4>
                <p className="text-sm text-muted-foreground">Available Points</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <h4 className="text-2xl font-bold text-success">₹{loyaltyData?.totalSpent?.toLocaleString('en-IN')}</h4>
                <p className="text-sm text-muted-foreground">Total Spent</p>
              </div>
            </div>
          </div>

          {/* Progress to Next Tier */}
          <div className="space-y-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTierColor(loyaltyData?.currentTier)}`}>
                  {loyaltyData?.currentTier}
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTierColor(loyaltyData?.nextTier)}`}>
                  {loyaltyData?.nextTier}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 mb-2">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-500" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {loyaltyData?.pointsToNextTier?.toLocaleString('en-IN')} points to {loyaltyData?.nextTier}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Current Benefits:</h4>
              {tierBenefits?.[loyaltyData?.currentTier]?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Available Rewards */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Gift" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Available Rewards</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableRewards?.map((reward) => (
            <div
              key={reward?.id}
              className="p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={getRewardIcon(reward?.category)} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-foreground">{reward?.name}</h3>
                    <p className="text-sm text-muted-foreground">{reward?.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-warning" />
                  <span className="text-sm font-medium text-foreground">
                    {reward?.pointsCost?.toLocaleString('en-IN')} points
                  </span>
                </div>
                <Button
                  variant={loyaltyData?.points >= reward?.pointsCost ? "default" : "outline"}
                  size="sm"
                  disabled={loyaltyData?.points < reward?.pointsCost}
                  onClick={() => handleRedeemReward(reward?.id)}
                >
                  {loyaltyData?.points >= reward?.pointsCost ? "Redeem" : "Not Enough Points"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Valid till {new Date(reward.validTill)?.toLocaleDateString('en-IN')}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Points History */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="History" size={24} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Points History</h2>
          </div>
          <Button variant="outline" size="sm" iconName="Download" iconSize={16}>
            Export
          </Button>
        </div>

        <div className="space-y-3">
          {rewardHistory?.map((transaction) => (
            <div
              key={transaction?.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  transaction?.type === 'earned' ? 'bg-success/10' : 
                  transaction?.type === 'redeemed' ? 'bg-warning/10' : 'bg-primary/10'
                }`}>
                  <Icon 
                    name={getTransactionIcon(transaction?.type)} 
                    size={16} 
                    className={getTransactionColor(transaction?.type)} 
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{transaction?.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(transaction.date)?.toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${getTransactionColor(transaction?.type)}`}>
                  {transaction?.points > 0 ? '+' : ''}{transaction?.points?.toLocaleString('en-IN')} pts
                </p>
                <p className="text-xs text-muted-foreground capitalize">{transaction?.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View All Transactions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgramSection;