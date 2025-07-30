import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredProducts = [
    {
      id: 1,
      name: "Smart MCB Pro Series",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "IoT-enabled circuit breakers with remote monitoring",
      price: "₹2,850",
      category: "Circuit Protection"
    },
    {
      id: 2,
      name: "LED Panel Light Ultra",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
      description: "Energy-efficient panel lights with dimming control",
      price: "₹1,250",
      category: "Lighting Solutions"
    },
    {
      id: 3,
      name: "Industrial Socket Series",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
      description: "Heavy-duty sockets for industrial applications",
      price: "₹850",
      category: "Switches & Sockets"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentProduct = featuredProducts[currentProductIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className={`space-y-8 brand-transition ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-brand-navy">Trusted by 50,000+ Projects</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-headline leading-tight">
                Powering Your
                <span className="block text-transparent bg-gradient-to-r from-brand-navy via-action-blue to-brand-amber bg-clip-text">
                  Projects with Precision
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
                India's premier electrical components marketplace where professional contractors and homeowners discover quality solutions backed by 25+ years of expertise and BIS certification.
              </p>
            </div>

            {/* User Type Detection */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="glass-effect p-4 rounded-xl hover:bg-white/20 brand-transition cursor-pointer">
                <Icon name="HardHat" size={24} className="text-brand-navy mb-2" />
                <h3 className="font-semibold text-sm text-brand-navy">Contractors</h3>
                <p className="text-xs text-text-secondary">Bulk pricing available</p>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:bg-white/20 brand-transition cursor-pointer">
                <Icon name="Home" size={24} className="text-brand-navy mb-2" />
                <h3 className="font-semibold text-sm text-brand-navy">Homeowners</h3>
                <p className="text-xs text-text-secondary">DIY guides included</p>
              </div>
              <div className="glass-effect p-4 rounded-xl hover:bg-white/20 brand-transition cursor-pointer">
                <Icon name="Building2" size={24} className="text-brand-navy mb-2" />
                <h3 className="font-semibold text-sm text-brand-navy">Distributors</h3>
                <p className="text-xs text-text-secondary">Partnership opportunities</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product-catalog">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="cta-primary w-full sm:w-auto"
                >
                  Shop Products
                </Button>
              </Link>
              <Link to="/business-solutions">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Building2"
                  iconPosition="left"
                  className="cta-secondary w-full sm:w-auto"
                >
                  Business Solutions
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-brand-green" />
                <span className="text-sm font-medium text-text-secondary">BIS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} className="text-brand-amber" />
                <span className="text-sm font-medium text-text-secondary">99.2% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={20} className="text-action-blue" />
                <span className="text-sm font-medium text-text-secondary">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Product Showcase Side */}
          <div className={`relative brand-transition ${isVisible ? 'scroll-reveal revealed' : 'scroll-reveal'}`}>
            <div className="relative">
              {/* Main Product Display */}
              <div className="glass-hero rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-64 h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      className="w-full h-full object-cover brand-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-brand-amber/20 text-brand-navy text-xs font-medium rounded-full">
                      {currentProduct.category}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">{currentProduct.name}</h3>
                    <p className="text-text-secondary text-sm">{currentProduct.description}</p>
                    <div className="text-2xl font-bold text-brand-green">{currentProduct.price}</div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    360° View
                  </Button>
                </div>
              </div>

              {/* Product Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {featuredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-3 h-3 rounded-full brand-transition ${
                      index === currentProductIndex 
                        ? 'bg-brand-navy' :'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-xl">
                <Icon name="Zap" size={24} className="text-brand-amber" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-xl">
                <Icon name="Award" size={24} className="text-brand-green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-brand-navy opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;