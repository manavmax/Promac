import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BusinessAccountTypes = () => {
  const [selectedType, setSelectedType] = useState('contractor');

  const accountTypes = [
    {
      id: 'contractor',
      title: 'Contractor Account',
      subtitle: 'For electrical contractors and installers',
      icon: 'Wrench',
      color: 'brand-amber',
      features: [
        'Volume discounts up to 25%',
        'Project-based pricing',
        'Extended payment terms (30/60/90 days)',
        'Dedicated account manager',
        'Priority technical support',
        'Installation guide access',
        'Loyalty rewards program',
        'Mobile app with quick reorder'
      ],
      benefits: [
        'Save ₹2-5 lakhs annually on bulk purchases',
        'Faster project completion with priority delivery',
        'Expert consultation for complex installations'
      ],
      minOrder: '₹50,000/month',
      creditLimit: 'Up to ₹25 lakhs'
    },
    {
      id: 'distributor',
      title: 'Distributor Partnership',
      subtitle: 'For electrical component distributors',
      icon: 'Store',
      color: 'action-blue',
      features: [
        'Wholesale pricing tiers',
        'Territory protection rights',
        'Marketing material support',
        'Inventory management tools',
        'Drop-shipping capabilities',
        'Training and certification',
        'Co-op advertising funds',
        'Exclusive product access'
      ],
      benefits: [
        'Margins up to 40% on select products',
        'Protected territory with exclusive rights',
        'Complete marketing support package'
      ],
      minOrder: '₹2,00,000/month',
      creditLimit: 'Up to ₹1 crore'
    },
    {
      id: 'industrial',
      title: 'Industrial Account',
      subtitle: 'For manufacturing and industrial facilities',
      icon: 'Factory',
      color: 'brand-green',
      features: [
        'Custom pricing agreements',
        'Bulk inventory solutions',
        'Scheduled maintenance supplies',
        'Emergency stock availability',
        'Technical consultation',
        'Compliance documentation',
        'Multi-location delivery',
        'Dedicated support team'
      ],
      benefits: [
        'Reduce downtime with guaranteed stock',
        'Streamlined procurement processes',
        'Compliance with industrial standards'
      ],
      minOrder: '₹1,00,000/month',
      creditLimit: 'Up to ₹50 lakhs'
    }
  ];

  const selectedAccount = accountTypes.find(type => type.id === selectedType);

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Choose Your Business Account Type
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Tailored solutions for different business needs with specialized pricing, support, and features designed for your industry.
          </p>
        </div>

        {/* Account Type Selector */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {accountTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`w-full p-6 rounded-xl text-left brand-transition ring-1 ${
                    selectedType === type.id
                      ? 'bg-gradient-to-br from-cyan-600/30 to-indigo-700/30 text-white ring-white/10 shadow-xl'
                      : 'bg-white/5 hover:bg-white/10 text-white ring-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${
                      selectedType === type.id
                        ? 'bg-gradient-to-br from-cyan-500 to-indigo-600'
                        : 'bg-gradient-to-br from-white/10 to-white/5'
                    } w-12 h-12 rounded-lg flex items-center justify-center`}> 
                      <Icon 
                        name={type.icon} 
                        size={24} 
                        color={selectedType === type.id ? '#FFFFFF' : '#A5B4FC'}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white">{type.title}</h3>
                      <p className={`${
                        selectedType === type.id ? 'text-white/80' : 'text-white/60'
                      } text-sm`}>
                        {type.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
              <div className="glass-ios rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10`}>
                  <Icon name={selectedAccount.icon} size={32} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedAccount.title}</h3>
                  <p className="text-white/70">{selectedAccount.subtitle}</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="ShoppingCart" size={16} color="#93C5FD" />
                    <span className="text-sm font-medium text-white/90">Minimum Order</span>
                  </div>
                  <div className="text-xl font-bold text-white">{selectedAccount.minOrder}</div>
                </div>
                <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="CreditCard" size={16} color="#A78BFA" />
                    <span className="text-sm font-medium text-white/90">Credit Limit</span>
                  </div>
                  <div className="text-xl font-bold text-white">{selectedAccount.creditLimit}</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Account Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedAccount.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} color="#ffffff" strokeWidth={3} />
                      </div>
                      <span className="text-white/95 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  {selectedAccount.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="TrendingUp" size={14} color="#ffffff" />
                      </div>
                      <span className="text-white/95">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="UserPlus"
                  iconPosition="left"
                  className="cta-primary flex-1"
                >
                  Apply for {selectedAccount.title}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="!bg-white !text-brand-navy !border !border-white hover:!bg-white"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAccountTypes;