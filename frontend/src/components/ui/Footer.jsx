import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

export const Footer = ({ variant = 'default' }) => {
  const handleContactClick = (type) => {
    switch(type) {
      case 'phone':
        window.open('tel:+919876543210', '_self');
        break;
      case 'email':
        window.open('mailto:info@promacelectrical.com', '_self');
        break;
      case 'location':
        window.open('https://maps.google.com/?q=Mumbai,Maharashtra,India', '_blank');
        break;
      default:
        break;
    }
  };

  const handleLegalClick = (type) => {
    const legalPages = {
      privacy: '/privacy-policy',
      terms: '/terms-conditions',
      refund: '/refund-return-policy',
      delivery: '/delivery-shipping',
      cancellation: '/cancellation-policy',
      payment: '/payment-policy',
      disclaimer: '/disclaimer-policy',
      b2b: '/b2b-bulk-orders-policy'
    };
    
    // Navigate to the actual policy pages
    if (legalPages[type]) {
      window.location.href = legalPages[type];
    }
  };

  const getFooterClassName = () => {
    switch (variant) {
      case 'business-solutions':
        return 'text-white py-12 business-solutions-footer';
      case 'about-promac':
        return 'text-white py-12 about-promac-footer';
      case 'support-center':
        return 'text-white py-12 support-center-footer';
      default:
        return 'text-white py-12 homepage-unified-footer';
    }
  };

  return (
    <footer className={getFooterClassName()}>
      {/* Glassmorphism Background for Contact Page */}
      {variant === 'contact-locations' && (
        <>
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
              `,
              backgroundSize: '200px 200px'
            }}></div>
          </div>
        </>
      )}
      
      <div className={`${variant === 'contact-locations' ? 'relative z-10' : ''} container mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Link to="/homepage" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/assets/images/promac-high-resolution-logo-transparent.png" 
                  alt="Promac Electrical" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              India's trusted electrical components supplier with 25+ years of expertise, serving contractors, distributors, and homeowners nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product-catalog" className="text-text-secondary hover:text-brand-amber brand-transition">Products</Link></li>
              <li><Link to="/business-solutions" className="text-text-secondary hover:text-brand-amber brand-transition">Business Solutions</Link></li>
              <li><Link to="/about-promac" className="text-text-secondary hover:text-brand-amber brand-transition">About Us</Link></li>
              <li><Link to="/contact-locations" className="text-text-secondary hover:text-brand-amber brand-transition">Contact</Link></li>
              <li><Link to="/support-center" className="text-text-secondary hover:text-brand-amber brand-transition">Support</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Products</h4>
            <div className="space-y-2">
              <Link to="/product-catalog" className="block text-text-secondary hover:text-brand-amber brand-transition text-sm">Switches & Sockets</Link>
              <Link to="/product-catalog" className="block text-text-secondary hover:text-brand-amber brand-transition text-sm">Circuit Breakers</Link>
              <Link to="/product-catalog" className="block text-text-secondary hover:text-brand-amber brand-transition text-sm">Smart Home</Link>
              <Link to="/product-catalog" className="block text-text-secondary hover:text-brand-amber brand-transition text-sm">Industrial</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => handleContactClick('phone')}
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-amber brand-transition cursor-pointer w-full text-left"
              >
                <Icon name="Phone" size={16} className="text-brand-amber" />
                <span>+91 98765 43210</span>
              </button>
              <button 
                onClick={() => handleContactClick('email')}
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-amber brand-transition cursor-pointer w-full text-left"
              >
                <Icon name="Mail" size={16} className="text-brand-amber" />
                <span>info@promacelectrical.com</span>
              </button>
              <button 
                onClick={() => handleContactClick('location')}
                className="flex items-center space-x-2 text-text-secondary hover:text-brand-amber brand-transition cursor-pointer w-full text-left"
              >
                <Icon name="MapPin" size={16} className="text-brand-amber" />
                <span>Mumbai, Maharashtra, India</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Promac Electrical. All rights reserved.
            </p>
            <Link 
              to="/sitemap"
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition"
            >
              Sitemap
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 sm:mt-0">
            <button 
              onClick={() => handleLegalClick('privacy')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLegalClick('terms')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => handleLegalClick('refund')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Refund & Return
            </button>
            <button 
              onClick={() => handleLegalClick('delivery')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Delivery & Shipping
            </button>
            <button 
              onClick={() => handleLegalClick('cancellation')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Cancellation Policy
            </button>
            <button 
              onClick={() => handleLegalClick('payment')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Payment Policy
            </button>
            <button 
              onClick={() => handleLegalClick('disclaimer')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              Disclaimer Policy
            </button>
            <button 
              onClick={() => handleLegalClick('b2b')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer text-left"
            >
              B2B / Bulk Orders
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}; 