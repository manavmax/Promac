import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

export const Footer = () => {
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
      terms: '/terms-of-service',
      sitemap: '/sitemap'
    };
    
    // For now, show alerts with information
    const messages = {
      privacy: 'Privacy Policy: We respect your privacy and protect your personal information. Contact us for detailed policy.',
      terms: 'Terms of Service: Our terms ensure fair and transparent business practices. Contact us for complete terms.',
      sitemap: 'Sitemap: Navigate through all pages of our website easily.'
    };
    
    alert(messages[type]);
  };

  return (
    <footer className="text-white py-12 homepage-unified-footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/images/promac-high-resolution-logo-transparent.png" 
                alt="Promac Electrical" 
                className="h-12 w-auto"
              />
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
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Promac Electrical. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <button 
              onClick={() => handleLegalClick('privacy')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLegalClick('terms')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLegalClick('sitemap')}
              className="text-text-secondary hover:text-brand-amber text-sm brand-transition cursor-pointer"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}; 