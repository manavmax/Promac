import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Products', path: '/product-catalog', icon: 'Package' },
    { name: 'Solutions', path: '/business-solutions', icon: 'Building2' },
    { name: 'About', path: '/about-promac', icon: 'Info' },
    { name: 'Support', path: '/support-center', icon: 'HelpCircle' }
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-locations', icon: 'MapPin' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-hero shadow-brand' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 brand-transition hover:opacity-80"
            onClick={closeMobileMenu}
          >
            <img
              src="/assets/images/promac-high-resolution-logo-transparent.png"
              alt="Promac Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium brand-transition flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-brand-navy text-white shadow-primary'
                    : 'text-text-primary hover:bg-muted hover:text-brand-navy'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-primary hover:bg-muted hover:text-brand-navy brand-transition flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-xl shadow-glass opacity-0 invisible group-hover:opacity-100 group-hover:visible brand-transition z-60">
                <div className="p-2">
                  {secondaryItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium brand-transition ${
                        isActivePath(item.path)
                          ? 'bg-brand-navy text-white' :'text-text-primary hover:bg-white/50'
                      }`}
                    >
                      <Icon name={item.icon} size={16} />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
            >
              Call Us
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="ShoppingCart"
              iconPosition="left"
              className="cta-primary"
            >
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted brand-transition"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/20 brand-transition ${
            isMobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="p-4 space-y-2">
            {[...navigationItems, ...secondaryItems].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium brand-transition ${
                  isActivePath(item.path)
                    ? 'bg-brand-navy text-white shadow-primary'
                    : 'text-text-primary hover:bg-white/50'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-white/20 space-y-2">
              <Button
                variant="outline"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
              >
                Call Us
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="ShoppingCart"
                iconPosition="left"
                className="cta-primary"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;