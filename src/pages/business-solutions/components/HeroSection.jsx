import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { SlidingNumber } from '../../../components/ui/sliding-number';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 rounded-lg ring-1 ring-white/10 shadow-xl shadow-cyan-500/20 flex items-center justify-center">
                    <Icon name="Building2" size={24} color="#FFFFFF" strokeWidth={2.5} />
                  </div>
                  <span className="font-semibold text-lg bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow">Business Solutions</span>
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
                  <div className="w-8 h-8 rounded-lg ring-1 ring-white/10 bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 shadow-md shadow-cyan-500/10 flex items-center justify-center">
                    <Icon name="Percent" size={16} color="#A5F3FC" />
                  </div>
                  <span className="text-sm font-medium">Volume Discounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg ring-1 ring-white/10 bg-gradient-to-br from-violet-500/20 to-fuchsia-600/20 shadow-md shadow-fuchsia-500/10 flex items-center justify-center">
                    <Icon name="CreditCard" size={16} color="#C4B5FD" />
                  </div>
                  <span className="text-sm font-medium">Credit Terms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg ring-1 ring-white/10 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 shadow-md shadow-indigo-500/10 flex items-center justify-center">
                    <Icon name="Headphones" size={16} color="#A5B4FC" />
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
                  className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
                >
                  Calculate Savings
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-ios rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">Quick Stats</h3>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-1 ring-white/20 shadow-lg shadow-cyan-500/20"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-400 inline-flex items-baseline gap-1">
                        <SlidingNumber value={5000} delay={150} />
                        <span>+</span>
                      </div>
                      <div className="text-white/90 text-sm">Active Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-violet-400 inline-flex items-baseline gap-1">
                        <span className="mr-1">₹</span>
                        <SlidingNumber value={50} delay={250} />
                        <span>L+</span>
                      </div>
                      <div className="text-white/90 text-sm">Monthly Volume</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-indigo-300 inline-flex items-baseline gap-1">
                        <SlidingNumber value={24} delay={350} />
                        <span>/7</span>
                      </div>
                      <div className="text-white/90 text-sm">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-cyan-300 inline-flex items-baseline gap-1">
                        <SlidingNumber value={99.8} delay={450} />
                        <span>%</span>
                      </div>
                      <div className="text-white/90 text-sm">Uptime</div>
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