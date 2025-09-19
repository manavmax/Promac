import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Sidebar from '../../components/ui/Sidebar';
import ProfileSection from './components/ProfileSection';
import AddressBookSection from './components/AddressBookSection';
import PaymentMethodsSection from './components/PaymentMethodsSection';
import NotificationPreferences from './components/NotificationPreferences';
import SecuritySection from './components/SecuritySection';
import BusinessSettingsSection from './components/BusinessSettingsSection';
import LoyaltyProgramSection from './components/LoyaltyProgramSection';
import PrivacyControlsSection from './components/PrivacyControlsSection';

const AccountSettingsPersonalizationHub = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settingsTabs = [
    {
      id: 'profile',
      name: 'Profile',
      icon: 'User',
      description: 'Personal information and business details'
    },
    {
      id: 'addresses',
      name: 'Addresses',
      icon: 'MapPin',
      description: 'Delivery addresses and locations'
    },
    {
      id: 'payments',
      name: 'Payment Methods',
      icon: 'CreditCard',
      description: 'Cards, UPI, and business credit'
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: 'Bell',
      description: 'Communication preferences'
    },
    {
      id: 'security',
      name: 'Security',
      icon: 'Shield',
      description: 'Password and authentication'
    },
    {
      id: 'business',
      name: 'Business Settings',
      icon: 'Building2',
      description: 'Team management and workflows'
    },
    {
      id: 'loyalty',
      name: 'Loyalty Program',
      icon: 'Crown',
      description: 'Points, rewards, and benefits'
    },
    {
      id: 'privacy',
      name: 'Privacy Controls',
      icon: 'Lock',
      description: 'Data protection and preferences'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSection />;
      case 'addresses':
        return <AddressBookSection />;
      case 'payments':
        return <PaymentMethodsSection />;
      case 'notifications':
        return <NotificationPreferences />;
      case 'security':
        return <SecuritySection />;
      case 'business':
        return <BusinessSettingsSection />;
      case 'loyalty':
        return <LoyaltyProgramSection />;
      case 'privacy':
        return <PrivacyControlsSection />;
      default:
        return <ProfileSection />;
    }
  };

  const currentTab = settingsTabs?.find(tab => tab?.id === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className={`transition-all duration-300 ${
        isMobile ? 'lg:ml-0' : sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'
      } pt-16`}>
        <div className="w-full">
          {/* Header Section */}
          <div className="bg-electrical-gradient text-white">
            <div className="px-6 py-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-4 mb-4">
                  <Link 
                    to="/adaptive-user-dashboard"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                  >
                    <Icon name="ArrowLeft" size={20} />
                    <span className="text-sm">Back to Dashboard</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Settings" size={32} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Account Settings & Personalization</h1>
                    <p className="text-white/80 text-lg">
                      Customize your Promac experience and manage your account preferences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Settings Navigation */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg border border-border shadow-premium p-4 sticky top-24">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Settings</h2>
                  <nav className="space-y-1">
                    {settingsTabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                          activeTab === tab?.id
                            ? 'bg-primary text-primary-foreground shadow-precision'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted precision-hover'
                        }`}
                      >
                        <Icon 
                          name={tab?.icon} 
                          size={18} 
                          className={activeTab === tab?.id ? 'text-primary-foreground' : 'text-current'} 
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{tab?.name}</div>
                          <div className={`text-xs truncate ${
                            activeTab === tab?.id 
                              ? 'text-primary-foreground/80' 
                              : 'text-muted-foreground'
                          }`}>
                            {tab?.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>

                  {/* Quick Actions */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        iconName="Download"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Export Data
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                        iconName="Headphones"
                        iconPosition="left"
                        iconSize={16}
                      >
                        Contact Support
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings Content */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={currentTab?.icon} size={24} className="text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">{currentTab?.name}</h2>
                  </div>
                  <p className="text-muted-foreground">{currentTab?.description}</p>
                </div>

                {renderTabContent()}
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="bg-muted/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="bg-card rounded-lg border border-border shadow-premium p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Headphones" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Need Help?</h3>
                      <p className="text-muted-foreground">
                        Our technical support team is available 24/7 to assist with account settings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      iconName="MessageCircle"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Live Chat
                    </Button>
                    <Button
                      variant="default"
                      iconName="Phone"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Call Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-electrical-gradient rounded flex items-center justify-center">
                      <Icon name="Zap" size={14} color="#FFFFFF" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Promac Electrical</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    © {new Date()?.getFullYear()} All rights reserved
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <Link to="#" className="hover:text-foreground transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="#" className="hover:text-foreground transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="#" className="hover:text-foreground transition-colors duration-200">
                    Data Protection
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default AccountSettingsPersonalizationHub;