import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Sidebar = ({ isCollapsed = false, onToggle }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/adaptive-user-dashboard',
      icon: 'LayoutDashboard',
      description: 'Overview & Analytics'
    },
    {
      name: 'Smart Cart',
      path: '/smart-cart-management-hub',
      icon: 'ShoppingCart',
      description: 'Cart Management'
    },
    {
      name: 'Checkout',
      path: '/advanced-checkout-experience',
      icon: 'CreditCard',
      description: 'Payment Processing'
    },
    {
      name: 'Order Tracking',
      path: '/order-tracking-management-system',
      icon: 'Package',
      description: 'Track Orders'
    },
    {
      name: 'Business Center',
      path: '/business-account-command-center',
      icon: 'Building2',
      description: 'Business Tools'
    },
    {
      name: 'Account Settings',
      path: '/account-settings-personalization-hub',
      icon: 'Settings',
      description: 'Profile & Preferences'
    }
  ];

  const quickActions = [
    {
      name: 'Emergency Order',
      icon: 'Zap',
      action: () => console.log('Emergency order'),
      color: 'text-primary'
    },
    {
      name: 'Expert Support',
      icon: 'Headphones',
      action: () => console.log('Expert support'),
      color: 'text-success'
    },
    {
      name: 'Bulk Quote',
      icon: 'Calculator',
      action: () => console.log('Bulk quote'),
      color: 'text-warning'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={`flex items-center justify-between p-6 border-b border-border ${isCollapsed ? 'px-4' : ''}`}>
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-electrical-gradient rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={18} color="#FF0C0D" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Promac</h2>
              <p className="text-xs text-muted-foreground">Electrical Suite</p>
            </div>
          </div>
        )}
        
        {/* Desktop Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="hidden lg:flex"
          iconName={isCollapsed ? "ChevronRight" : "ChevronLeft"}
          iconSize={16}
        >
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        {/* Mobile Close */}
        <Button
          variant="ghost"
          size="icon"
          onClick={closeMobile}
          className="lg:hidden"
          iconName="X"
          iconSize={20}
        >
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        <div className={`space-y-1 ${isCollapsed ? 'space-y-2' : ''}`}>
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              onClick={closeMobile}
              className={`group flex items-center rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                isCollapsed ? 'p-3 justify-center' : 'px-3 py-2'
              } ${
                isActivePath(item?.path)
                  ? 'bg-primary text-primary-foreground shadow-precision'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted precision-hover'
              }`}
              title={isCollapsed ? item?.name : ''}
            >
              <Icon 
                name={item?.icon} 
                size={20} 
                className={`${isCollapsed ? '' : 'mr-3'} ${
                  isActivePath(item?.path) ? 'text-primary-foreground' : 'text-current'
                }`} 
              />
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <div className="truncate">{item?.name}</div>
                  <div className={`text-xs truncate ${
                    isActivePath(item?.path) 
                      ? 'text-primary-foreground/80' 
                      : 'text-muted-foreground'
                  }`}>
                    {item?.description}
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="pt-6 mt-6 border-t border-border">
            <h3 className="px-3 mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Quick Actions
            </h3>
            <div className="space-y-1">
              {quickActions?.map((action, index) => (
                <button
                  key={index}
                  onClick={action?.action}
                  className="w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted precision-hover transition-all duration-200 focus-ring"
                >
                  <Icon 
                    name={action?.icon} 
                    size={18} 
                    className={`mr-3 ${action?.color}`} 
                  />
                  <span>{action?.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className={`p-4 border-t border-border ${isCollapsed ? 'px-2' : ''}`}>
        {!isCollapsed ? (
          <div className="glass-card p-4 rounded-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={16} className="text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Premium Account</p>
                <p className="text-xs text-muted-foreground">Expert Support Active</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              iconName="Crown"
              iconPosition="left"
              iconSize={14}
            >
              Upgrade Plan
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10"
              iconName="Crown"
              iconSize={18}
              title="Upgrade Plan"
            >
              <span className="sr-only">Upgrade Plan</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside 
        className={`hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex-col bg-card border-r border-border shadow-premium transition-all duration-300 ${
          isCollapsed ? 'lg:w-20' : 'lg:w-80'
        }`}
      >
        {sidebarContent}
      </aside>
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={closeMobile}
        >
          <aside 
            className="fixed inset-y-0 left-0 w-80 bg-card border-r border-border shadow-premium-lg"
            onClick={(e) => e?.stopPropagation()}
          >
            {sidebarContent}
          </aside>
        </div>
      )}
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 shadow-premium brand-red-glow"
        iconName="Menu"
        iconSize={20}
      >
        <span className="sr-only">Open sidebar</span>
      </Button>
    </>
  );
};

export default Sidebar;