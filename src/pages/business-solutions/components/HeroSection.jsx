import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-action-blue to-brand-navy min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-brand-amber rounded-lg flex items-center justify-center">
                    <Icon name="Building2" size={24} color="#1A237E" strokeWidth={2.5} />
                  </div>
                  <span className="text-brand-amber font-semibold text-lg">Business Solutions</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Power Your Business
                  <span className="block text-brand-amber">Forward</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                  Dedicated B2B portal with bulk pricing, credit terms, and project support services designed for contractors, distributors, and electrical professionals.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-amber/20 rounded-lg flex items-center justify-center">
                    <Icon name="Percent" size={16} color="#FFC107" />
                  </div>
                  <span className="text-sm font-medium">Volume Discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-amber/20 rounded-lg flex items-center justify-center">
                    <Icon name="CreditCard" size={16} color="#FFC107" />
                  </div>
                  <span className="text-sm font-medium">Credit Terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-amber/20 rounded-lg flex items-center justify-center">
                    <Icon name="Headphones" size={16} color="#FFC107" />
                  </div>
                  <span className="text-sm font-medium">Priority Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="UserPlus"
                  iconPosition="left"
                  className="cta-primary text-brand-navy font-semibold"
                >
                  Apply for Business Account
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  Calculate Savings
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Quick Stats</h3>
                    <div className="w-3 h-3 bg-brand-amber rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-amber">5000+</div>
                      <div className="text-white/80 text-sm">Active Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-amber">₹50L+</div>
                      <div className="text-white/80 text-sm">Monthly Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-amber">24/7</div>
                      <div className="text-white/80 text-sm">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-amber">99.8%</div>
                      <div className="text-white/80 text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;