import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = () => {
  const [selectedTier, setSelectedTier] = useState('gold');

  const loyaltyTiers = [
    {
      id: 'bronze',
      name: 'Bronze Partner',
      minSpend: '₹2,00,000',
      color: 'amber-600',
      bgColor: 'amber-50',
      icon: 'Award',
      benefits: [
        '2% cashback on all orders',
        'Priority customer support',
        'Quarterly product updates',
        'Basic installation guides',
        'Standard warranty terms'
      ],
      exclusiveFeatures: [
        'Monthly newsletter',
        'Product training webinars'
      ],
      currentPoints: 2450,
      nextTierPoints: 5000,
      progress: 49
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      minSpend: '₹5,00,000',
      color: 'gray-500',
      bgColor: 'gray-50',
      icon: 'Medal',
      benefits: [
        '4% cashback on all orders',
        'Dedicated account manager',
        'Monthly product updates',
        'Advanced installation guides',
        'Extended warranty (2 years)',
        'Free technical consultation'
      ],
      exclusiveFeatures: [
        'Early access to new products',
        'Exclusive partner events',
        'Custom pricing negotiations'
      ],
      currentPoints: 7200,
      nextTierPoints: 10000,
      progress: 72
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      minSpend: '₹10,00,000',
      color: 'yellow-500',
      bgColor: 'yellow-50',
      icon: 'Crown',
      benefits: [
        '6% cashback on all orders',
        'Premium account manager',
        'Weekly product updates',
        'Complete technical library',
        'Extended warranty (3 years)',
        'Unlimited technical support',
        'Priority delivery slots'
      ],
      exclusiveFeatures: [
        'Beta product testing',
        'Annual partner summit',
        'Co-marketing opportunities',
        'Volume discount negotiations'
      ],
      currentPoints: 12500,
      nextTierPoints: 20000,
      progress: 62
    },
    {
      id: 'platinum',
      name: 'Platinum Partner',
      minSpend: '₹20,00,000',
      color: 'purple-600',
      bgColor: 'purple-50',
      icon: 'Gem',
      benefits: [
        '8% cashback on all orders',
        'Executive account manager',
        'Real-time product updates',
        'Complete technical ecosystem',
        'Lifetime warranty coverage',
        '24/7 premium support',
        'Guaranteed delivery slots',
        'Custom product development'
      ],
      exclusiveFeatures: [
        'Product roadmap influence',
        'Executive advisory board',
        'Joint marketing campaigns',
        'Territory exclusivity rights'
      ],
      currentPoints: 25000,
      nextTierPoints: null,
      progress: 100
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'purchase',
      description: 'Order #ORD-2025-001 - Earned 450 points',
      date: '2025-01-25',
      points: '+450',
      icon: 'ShoppingCart'
    },
    {
      id: 2,
      type: 'bonus',
      description: 'Monthly bonus points for Gold tier',
      date: '2025-01-20',
      points: '+1000',
      icon: 'Gift'
    },
    {
      id: 3,
      type: 'referral',
      description: 'Referral bonus - New partner signup',
      date: '2025-01-18',
      points: '+2500',
      icon: 'Users'
    },
    {
      id: 4,
      type: 'redemption',
      description: 'Redeemed points for technical consultation',
      date: '2025-01-15',
      points: '-1500',
      icon: 'Minus'
    }
  ];

  const availableRewards = [
    {
      id: 1,
      title: 'Technical Consultation',
      description: '1-hour consultation with electrical expert',
      points: 1500,
      value: '₹2,500',
      icon: 'MessageCircle',
      category: 'Service'
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'Free delivery on next 3 orders',
      points: 800,
      value: '₹1,200',
      icon: 'Truck',
      category: 'Shipping'
    },
    {
      id: 3,
      title: 'Product Training',
      description: 'Access to premium product training course',
      points: 2000,
      value: '₹3,500',
      icon: 'BookOpen',
      category: 'Education'
    },
    {
      id: 4,
      title: 'Extended Warranty',
      description: 'Additional 1-year warranty on all products',
      points: 3000,
      value: '₹5,000',
      icon: 'Shield',
      category: 'Protection'
    },
    {
      id: 5,
      title: 'Cash Voucher',
      description: '₹5,000 cash voucher for next purchase',
      points: 4000,
      value: '₹5,000',
      icon: 'CreditCard',
      category: 'Credit'
    },
    {
      id: 6,
      title: 'VIP Event Access',
      description: 'Exclusive access to annual partner summit',
      points: 5000,
      value: '₹8,000',
      icon: 'Calendar',
      category: 'Event'
    }
  ];

  const selectedTierData = loyaltyTiers.find(tier => tier.id === selectedTier);

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Contractor Loyalty Program
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Earn rewards, unlock exclusive benefits, and get priority access to new products with our comprehensive loyalty program designed for electrical professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tier Selection & Current Status */}
          <div className="lg:col-span-1 space-y-6">
            {/* Current Tier Status */}
            <div className="glass-ios rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-indigo-600`}>
                  <Icon name={selectedTierData.icon} size={32} color="#FFFFFF" />
                </div>
                <h3 className="text-xl font-bold text-white">{selectedTierData.name}</h3>
                <p className="text-white/70">Current Tier Status</p>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{selectedTierData.currentPoints.toLocaleString()}</div>
                  <div className="text-sm text-white/70">Available Points</div>
                </div>

                {selectedTierData.nextTierPoints && (
                  <>
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className={`bg-gradient-to-r from-cyan-400 to-indigo-500 h-3 rounded-full brand-transition`} style={{ width: `${selectedTierData.progress}%` }}></div>
                    </div>
                    <div className="text-center text-sm text-white/70">
                      {selectedTierData.nextTierPoints - selectedTierData.currentPoints} points to next tier
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Tier Selection */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Loyalty Tiers</h4>
              {loyaltyTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full p-4 rounded-xl text-left brand-transition ring-1 ${
                    selectedTier === tier.id
                      ? 'bg-gradient-to-br from-cyan-600/30 to-indigo-700/30 text-white ring-white/10'
                      : 'bg-white/5 hover:bg-white/10 text-white ring-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600`}>
                      <Icon name={tier.icon} size={20} color="#FFFFFF" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{tier.name}</h5>
                      <p className="text-sm text-white/60">Min. {tier.minSpend}/year</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tier Details & Benefits */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tier Benefits */}
            <div className="glass-ios rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600`}>
                  <Icon name={selectedTierData.icon} size={32} color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTierData.name}</h3>
                  <p className="text-white/70">Minimum annual spend: {selectedTierData.minSpend}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Benefits */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Standard Benefits</h4>
                  <div className="space-y-3">
                    {selectedTierData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={12} color="#FFFFFF" strokeWidth={3} />
                        </div>
                        <span className="text-white/95 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusive Features */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Exclusive Features</h4>
                  <div className="space-y-3">
                    {selectedTierData.exclusiveFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon name="Star" size={12} color="#FFFFFF" strokeWidth={3} />
                        </div>
                        <span className="text-white/95 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Available Rewards */}
            <div className="glass-ios rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Available Rewards</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {availableRewards.map((reward) => (
                  <div key={reward.id} className="glass-effect rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600">
                          <Icon name={reward.icon} size={20} color="#FFFFFF" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{reward.title}</h4>
                          <p className="text-xs text-white/70">{reward.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{reward.points}</div>
                        <div className="text-xs text-white/70">points</div>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 mb-4">{reward.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-cyan-300">Value: {reward.value}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={selectedTierData.currentPoints < reward.points}
                        className="bg-white text-gray-900 border-white hover:bg-white hover:text-black disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500"
                      >
                        {selectedTierData.currentPoints >= reward.points ? 'Redeem' : 'Insufficient Points'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-ios rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-white/8 ring-1 ring-white/10 rounded-lg">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600">
                      <Icon name={activity.icon} size={16} color="#FFFFFF" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{activity.description}</p>
                      <p className="text-xs text-white/70">{activity.date}</p>
                    </div>
                    <div className={`font-semibold ${
                      activity.points.startsWith('+') ? 'text-cyan-300' : 'text-red-400'
                    }`}>
                      {activity.points}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  iconName="History"
                  iconPosition="left"
                  className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
                >
                  View Full History
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;