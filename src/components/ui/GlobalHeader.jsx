import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Home, Package, Building2, Info, HelpCircle, MapPin, MoreHorizontal, ChevronDown, Zap, Lightbulb, Settings, Shield, Wifi, Battery } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../utils/cn';
import { useCart } from '../../contexts/CartContext';
import ProductDropdown from './ProductDropdown';

const navigationItems = [
  { name: 'Home', path: '/homepage', icon: Home },
  { 
    name: 'Products', 
    path: '/product-catalog', 
    icon: Package,
    isDropdown: true
  },
  { name: 'Solutions', path: '/business-solutions', icon: Building2 },
  { name: 'About', path: '/about-promac', icon: Info },
  { name: 'Support', path: '/support-center', icon: HelpCircle },
  { name: 'Contact', path: '/contact-locations', icon: MapPin }
];

const GlobalHeader = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Check if we're past the hero section (typically around 600px)
      setIsPastHero(scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    // Special handling for support center - don't highlight when we're already there
    if (path === '/support-center' && location.pathname === '/support-center') {
      return false;
    }
    return location.pathname === path;
  };

  const handleDropdownToggle = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownMouseEnter = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemName);
    console.log('Dropdown opened:', itemName); // Debug log
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      console.log('Dropdown closed'); // Debug log
    }, 300); // Increased delay to prevent flickering
    setHoverTimeout(timeout);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
    console.log('Dropdown manually closed'); // Debug log
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled && "scrolled"
    )}>
      <nav
        data-state={menuState && 'active'}
        className="w-full">
        <div className={cn(
          'mx-auto max-w-6xl px-6 transition-all duration-500 lg:px-12', 
          isScrolled && 'lg:px-6'
        )}>
          <div className={cn(
            'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 transition-all duration-500',
            isScrolled 
              ? 'header-container scrolled rounded-2xl mx-4 mt-4 backdrop-blur-xl bg-transparent border border-white/20 shadow-2xl' 
              : 'bg-transparent backdrop-blur-sm'
          )}>
            {/* Logo Section - Left */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Navigation Section - Center */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex items-center space-x-6">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    {item.isDropdown ? (
                      <div 
                        className="relative z-40"
                        onMouseEnter={() => handleDropdownMouseEnter(item.name)}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <Link
                          to={item.path}
                          className={cn(
                            "block duration-150 flex items-center space-x-2",
                            "text-white hover:text-gray-200",
                            isActivePath(item.path) && "text-primary font-medium"
                          )}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                          <ChevronDown className="h-3 w-3" />
                        </Link>
                        
                        {/* Premium Product Dropdown */}
                        <ProductDropdown 
                          isOpen={activeDropdown === item.name}
                          onClose={handleDropdownClose}
                        />
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "block duration-150 flex items-center space-x-2",
                          "text-white hover:text-gray-200",
                          isActivePath(item.path) && "text-primary font-medium"
                        )}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart Button - Right */}
            <div className="flex items-center space-x-4">
              <Link
                to="/cart"
                className={cn(
                  "relative p-2 rounded-full brand-transition",
                  "text-white hover:bg-white/10"
                )}
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Button - Right */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState === true ? 'Close Menu' : 'Open Menu'}
                className={cn(
                  "p-2 rounded-full brand-transition",
                  "text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent"
                )}
              >
                <Menu className={`m-auto size-6 duration-200 ${menuState ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
                <X className={`absolute inset-0 m-auto size-6 duration-200 ${menuState ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <img
        src="/assets/images/promac-high-resolution-logo-transparent.png"
        alt="Promac Logo"
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export default GlobalHeader; 