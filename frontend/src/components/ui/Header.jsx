import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      name: 'Cart',
      path: '/cart',
      icon: 'ShoppingCart'
    },
    {
      name: 'Orders',
      path: '/orders',
      icon: 'Package'
    },
    {
      name: 'Business',
      path: '/business',
      icon: 'Building2'
    }
  ];

  const moreMenuItems = [
    {
      name: 'Checkout',
      path: '/checkout',
      icon: 'CreditCard'
    },
    {
      name: 'Settings',
      path: '/account',
      icon: 'Settings'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-premium border-b border-border' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo Section */}
          <Link 
            to="/dashboard" 
            className="flex items-center space-x-3 focus-ring rounded-lg"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-electrical-gradient rounded-lg flex items-center justify-center shadow-premium">
                <Icon 
                  name="Zap" 
                  size={24} 
                  color="#FF0C0D" 
                  className="drop-shadow-sm" 
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-red rounded-full pulse-electrical"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground tracking-brand-tight">
                Promac
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Dashboard Suite
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-precision'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted precision-hover'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={18} 
                  className={isActivePath(item?.path) ? 'text-primary-foreground' : 'text-current'} 
                />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted precision-hover transition-all duration-200 focus-ring">
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-premium-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon 
                        name={item?.icon} 
                        size={16} 
                        className={isActivePath(item?.path) ? 'text-primary' : 'text-muted-foreground'} 
                      />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
              iconName="Search"
              iconSize={20}
            >
              <span className="sr-only">Search</span>
            </Button>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              iconName="Bell"
              iconSize={20}
            >
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            {/* User Menu */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                iconName="User"
                iconSize={20}
              >
                <span className="sr-only">User menu</span>
              </Button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-premium-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-medium text-popover-foreground">John Contractor</p>
                    <p className="text-xs text-muted-foreground">john@electrical.com</p>
                  </div>
                  <Link
                    to="/account"
                    className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-popover-foreground hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name="Settings" size={16} className="text-muted-foreground" />
                    <span>Account Settings</span>
                  </Link>
                  <button className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-popover-foreground hover:bg-muted transition-colors duration-200 w-full text-left">
                    <Icon name="LogOut" size={16} className="text-muted-foreground" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
              iconName={isMenuOpen ? "X" : "Menu"}
              iconSize={20}
            >
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="px-6 py-4 space-y-2">
              {[...navigationItems, ...moreMenuItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-precision'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={20} 
                    className={isActivePath(item?.path) ? 'text-primary-foreground' : 'text-current'} 
                  />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border">
                <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 w-full text-left">
                  <Icon name="Search" size={20} />
                  <span>Search Products</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;