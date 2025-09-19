import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Home, Package, Building2, Info, HelpCircle, MapPin, MoreHorizontal, ChevronDown, Zap, Lightbulb, Settings, Shield, Wifi, Battery, User, LayoutDashboard, CreditCard, FileText, Building } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../utils/cn';
import { useCart } from '../../contexts/CartContext';
import ProductDropdown from './ProductDropdown';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

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
  
  // Check if we're on the product catalog page
  const isProductPage = location.pathname === '/product-catalog';

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
          (isScrolled || isProductPage) && 'lg:px-6'
        )}>
          <div className={cn(
            'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-6 transition-all duration-500',
            isProductPage 
              ? 'header-container scrolled rounded-2xl mx-4 mt-4 backdrop-blur-xl bg-transparent border border-white/20 shadow-2xl' 
              : isScrolled 
                ? 'header-container scrolled rounded-2xl mx-4 mt-4 backdrop-blur-xl bg-transparent border border-white/20 shadow-2xl' 
                : 'bg-transparent backdrop-blur-sm'
          )}>
            {/* Logo Section - Left */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Navigation Section - Center */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
              <ul className="flex items-center space-x-4">
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

            {/* Cart Button and Authentication - Right */}
            <div className="flex items-center space-x-6">
              {/* Cart Icon - Only show when signed in */}
              <SignedIn>
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
              </SignedIn>

              {/* Clerk Authentication */}
              <SignedOut>
                <div className="flex items-center space-x-2">
                  <SignInButton mode="modal">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="bg-white text-gray-900 hover:bg-gray-100 px-3 py-1.5 text-sm"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-brand-red hover:bg-brand-red/90 text-white px-3 py-1.5 text-sm"
                    >
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8",
                      userButtonPopoverCard: "bg-white border border-gray-200 shadow-xl",
                      userButtonPopoverActionButton: "text-gray-700 hover:bg-gray-100",
                      userButtonPopoverFooter: "hidden"
                    }
                  }}
                />
              </SignedIn>
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

      {/* Mobile Navigation Menu */}
      {menuState && (
        <div className="mobile-nav-menu lg:hidden">
          <button
            onClick={() => setMenuState(false)}
            className="mobile-nav-close"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMenuState(false)}
                className={cn(
                  "mobile-nav-item",
                  isActivePath(item.path) && "text-[#ff0c0e]"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile Cart Link - Only show when signed in */}
            <SignedIn>
              <Link
                to="/cart"
                onClick={() => setMenuState(false)}
                className="mobile-nav-item"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Cart ({totalItems})</span>
              </Link>
            </SignedIn>

            {/* Mobile Authentication */}
            <div className="border-t border-white/20 pt-3 mt-3">
              <SignedOut>
                <div className="flex flex-col gap-2 px-4">
                  <SignInButton mode="modal">
                    <button className="w-full bg-white text-gray-900 py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full bg-brand-red text-white py-2.5 px-4 rounded-lg hover:bg-brand-red/90 transition-colors text-sm">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              
              <SignedIn>
                <div className="px-4">
                  <p className="text-xs text-white/60 mb-2">My Account</p>
                  <div className="flex items-center justify-center">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "h-10 w-10",
                          userButtonPopoverCard: "bg-white border border-gray-200 shadow-xl",
                          userButtonPopoverActionButton: "text-gray-700 hover:bg-gray-100",
                          userButtonPopoverFooter: "hidden"
                        }
                      }}
                    />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Logo = ({ className }) => {
  return (
    <Link to="/homepage" className={cn('flex items-center space-x-2 hover:opacity-80 transition-opacity', className)}>
      <img
        src="/assets/images/promac-high-resolution-logo-transparent.png"
        alt="Promac Logo"
        className="h-8 w-auto object-contain"
      />
    </Link>
  );
};

export default GlobalHeader; 