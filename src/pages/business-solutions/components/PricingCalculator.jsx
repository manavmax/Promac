import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PricingCalculator = () => {
  const [orderVolume, setOrderVolume] = useState('');
  const [accountType, setAccountType] = useState('contractor');
  const [location, setLocation] = useState('mumbai');
  const [calculations, setCalculations] = useState(null);

  const accountOptions = [
    { value: 'contractor', label: 'Contractor Account' },
    { value: 'distributor', label: 'Distributor Partnership' },
    { value: 'industrial', label: 'Industrial Account' }
  ];

  const locationOptions = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'pune', label: 'Pune' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'ahmedabad', label: 'Ahmedabad' }
  ];

  const discountTiers = {
    contractor: [
      { min: 50000, max: 100000, discount: 5 },
      { min: 100000, max: 250000, discount: 10 },
      { min: 250000, max: 500000, discount: 15 },
      { min: 500000, max: 1000000, discount: 20 },
      { min: 1000000, max: Infinity, discount: 25 }
    ],
    distributor: [
      { min: 200000, max: 500000, discount: 15 },
      { min: 500000, max: 1000000, discount: 25 },
      { min: 1000000, max: 2500000, discount: 30 },
      { min: 2500000, max: 5000000, discount: 35 },
      { min: 5000000, max: Infinity, discount: 40 }
    ],
    industrial: [
      { min: 100000, max: 250000, discount: 8 },
      { min: 250000, max: 500000, discount: 12 },
      { min: 500000, max: 1000000, discount: 18 },
      { min: 1000000, max: 2500000, discount: 22 },
      { min: 2500000, max: Infinity, discount: 28 }
    ]
  };

  const deliveryCharges = {
    mumbai: 0,
    delhi: 500,
    bangalore: 750,
    chennai: 800,
    kolkata: 900,
    pune: 300,
    hyderabad: 700,
    ahmedabad: 600
  };

  const calculatePricing = () => {
    if (!orderVolume || orderVolume <= 0) return;

    const volume = parseFloat(orderVolume);
    const tiers = discountTiers[accountType];
    const applicableTier = tiers.find(tier => volume >= tier.min && volume < tier.max);
    
    if (!applicableTier) return;

    const discount = applicableTier.discount;
    const discountAmount = (volume * discount) / 100;
    const finalAmount = volume - discountAmount;
    const gst = finalAmount * 0.18;
    const delivery = volume >= 100000 ? 0 : deliveryCharges[location];
    const totalAmount = finalAmount + gst + delivery;
    const savings = discountAmount;
    const annualSavings = savings * 12;

    setCalculations({
      originalAmount: volume,
      discount,
      discountAmount,
      finalAmount,
      gst,
      delivery,
      totalAmount,
      savings,
      annualSavings
    });
  };

  useEffect(() => {
    if (orderVolume) {
      calculatePricing();
    }
  }, [orderVolume, accountType, location]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Volume Pricing Calculator
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Calculate your potential savings with our volume discount structure. Get real-time pricing with delivery estimates across major Indian cities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
            <div className="glass-ios rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                <Icon name="Calculator" size={24} color="#FFFFFF" />
              </div>
              <h3 className="text-2xl font-bold text-white">Calculate Your Savings</h3>
            </div>

            <div className="space-y-6">
              <Input
                label="Monthly Order Volume"
                type="number"
                placeholder="Enter amount in ₹"
                value={orderVolume}
                onChange={(e) => setOrderVolume(e.target.value)}
                description="Minimum order varies by account type"
                className="bg-promac-red-50 text-black placeholder:text-muted-foreground"
              />

              <Select
                label="Account Type"
                options={accountOptions}
                value={accountType}
                onChange={setAccountType}
                description="Different account types have different discount structures"
                className="select-light"
              />

              <Select
                label="Delivery Location"
                options={locationOptions}
                value={location}
                onChange={setLocation}
                description="Delivery charges vary by location"
                className="select-light"
              />

              <Button
                variant="default"
                fullWidth
                iconName="Calculator"
                iconPosition="left"
                className="cta-primary"
                onClick={calculatePricing}
                disabled={!orderVolume}
              >
                Calculate Pricing
              </Button>
            </div>

            {/* Discount Tiers Info */}
            <div className="mt-8 p-6 bg-white/8 rounded-lg ring-1 ring-white/10">
              <h4 className="font-semibold text-white mb-4">Discount Tiers</h4>
              <div className="space-y-2">
                {discountTiers[accountType].map((tier, index) => (
                  <div key={index} className="flex justify-between text-sm text-white/80">
                    <span>
                      {formatCurrency(tier.min)} - {tier.max === Infinity ? '∞' : formatCurrency(tier.max)}
                    </span>
                    <span className="font-medium text-cyan-300">{tier.discount}% off</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {calculations ? (
              <>
                {/* Pricing Breakdown */}
                <div className="glass-ios rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-teal-400 to-cyan-500">
                      <Icon name="Receipt" size={24} color="#FFFFFF" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Pricing Breakdown</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-white/10 text-white/80">
                      <span>Original Amount</span>
                      <span className="font-semibold text-white">{formatCurrency(calculations.originalAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 text-white/80">
                      <span>Volume Discount ({calculations.discount}%)</span>
                      <span className="font-semibold text-cyan-300">-{formatCurrency(calculations.discountAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 text-white/80">
                      <span>Subtotal</span>
                      <span className="font-semibold text-white">{formatCurrency(calculations.finalAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 text-white/80">
                      <span>GST (18%)</span>
                      <span className="font-semibold text-white">{formatCurrency(calculations.gst)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10 text-white/80">
                      <span>Delivery Charges</span>
                      <span className="font-semibold text-white">
                        {calculations.delivery === 0 ? 'FREE' : formatCurrency(calculations.delivery)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 rounded-lg px-4 bg-white/5">
                      <span className="font-bold text-white">Total Amount</span>
                      <span className="font-bold text-xl text-white">{formatCurrency(calculations.totalAmount)}</span>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600">
                  <div className="text-center">
                    <Icon name="TrendingUp" size={48} color="white" className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Your Savings</h3>
                    <div className="text-4xl font-bold mb-2">{formatCurrency(calculations.savings)}</div>
                    <p className="text-white/90 mb-4">Monthly savings with volume discount</p>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-sm text-white/80">Projected Annual Savings</div>
                      <div className="text-2xl font-bold">{formatCurrency(calculations.annualSavings)}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="UserPlus"
                    iconPosition="left"
                    className="cta-primary"
                  >
                    Apply for Business Account
                  </Button>
                </div>
              </>
            ) : (
              <div className="glass-effect rounded-2xl p-12 text-center">
                <Icon name="Calculator" size={64} color="#FFFFFF" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Ready to Calculate?</h3>
                <p className="text-white/70">
                  Enter your monthly order volume to see potential savings and pricing breakdown.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;