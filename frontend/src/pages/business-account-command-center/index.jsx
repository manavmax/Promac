import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Sidebar from '../../components/ui/Sidebar';
import CreditAccountCard from './components/CreditAccountCard';
import ProjectManagementCard from './components/ProjectManagementCard';
import BulkOrderingInterface from './components/BulkOrderingInterface';
import AnalyticsInsights from './components/AnalyticsInsights';
import QuickActionsPanel from './components/QuickActionsPanel';
import BrandIntegrationPanel from './components/BrandIntegrationPanel';

const BusinessAccountCommandCenter = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Mock data for credit account
  const creditData = {
    accountId: "PA-2025-001",
    limit: 5000000,
    used: 1850000,
    available: 3150000,
    paymentDue: 245000,
    dueDate: "15 Jan 2025"
  };

  // Mock data for projects
  const projects = [
    {
      id: "PRJ-001",
      name: "Residential Complex Phase 1",
      location: "Gurgaon, Haryana",
      status: "Active",
      budget: 2500000,
      spent: 1850000,
      progress: 74,
      dueDate: "28 Feb 2025"
    },
    {
      id: "PRJ-002",
      name: "Commercial Office Building",
      location: "Noida, UP",
      status: "Pending",
      budget: 4200000,
      spent: 850000,
      progress: 20,
      dueDate: "15 Mar 2025"
    },
    {
      id: "PRJ-003",
      name: "Industrial Warehouse Setup",
      location: "Faridabad, Haryana",
      status: "Active",
      budget: 1800000,
      spent: 1620000,
      progress: 90,
      dueDate: "10 Feb 2025"
    },
    {
      id: "PRJ-004",
      name: "Smart Home Integration",
      location: "Delhi NCR",
      status: "Delayed",
      budget: 950000,
      spent: 475000,
      progress: 50,
      dueDate: "05 Feb 2025"
    }
  ];

  const navigationTabs = [
    { id: 'overview', name: 'Overview', icon: 'LayoutDashboard' },
    { id: 'bulk-ordering', name: 'Bulk Ordering', icon: 'Upload' },
    { id: 'analytics', name: 'Analytics', icon: 'BarChart3' },
    { id: 'integrations', name: 'Brand Integration', icon: 'Zap' },
    { id: 'quick-actions', name: 'Quick Actions', icon: 'Bolt' }
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-1 space-y-6">
              <CreditAccountCard creditData={creditData} />
              <ProjectManagementCard projects={projects} />
            </div>
            <div className="xl:col-span-2">
              <AnalyticsInsights />
            </div>
          </div>
        );
      case 'bulk-ordering':
        return <BulkOrderingInterface />;
      case 'analytics':
        return <AnalyticsInsights />;
      case 'integrations':
        return <BrandIntegrationPanel />;
      case 'quick-actions':
        return <QuickActionsPanel />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar 
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-80'} pt-16`}>
        <div className="p-6 space-y-6">
          {/* Page Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-electrical-gradient rounded-xl flex items-center justify-center shadow-premium">
                  <Icon name="Building2" size={24} color="#FF0C0D" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Business Command Center</h1>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive B2B portal for electrical procurement management
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>{formatDate(currentTime)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{formatTime(currentTime)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full pulse-electrical"></div>
                  <span className="text-success font-medium">System Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                className="hidden sm:flex"
              >
                Export Report
              </Button>
              <Button
                variant="default"
                iconName="Plus"
                iconPosition="left"
              >
                New Project
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Orders</p>
                  <p className="text-xl font-semibold text-foreground">289</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="CreditCard" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Credit Available</p>
                  <p className="text-xl font-semibold text-foreground">₹31.5L</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Icon name="FolderOpen" size={20} className="text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-xl font-semibold text-foreground">4</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="AlertCircle" size={20} className="text-error" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending Approvals</p>
                  <p className="text-xl font-semibold text-foreground">7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="glass-card p-1 rounded-lg border border-border">
            <div className="flex flex-wrap gap-1">
              {navigationTabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-precision'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted precision-hover'
                  }`}
                >
                  <Icon 
                    name={tab?.icon} 
                    size={16} 
                    className={activeTab === tab?.id ? 'text-primary-foreground' : 'text-current'} 
                  />
                  <span className="hidden sm:inline">{tab?.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>

          {/* Quick Navigation */}
          <div className="glass-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/cart"
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 focus-ring"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ShoppingCart" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Smart Cart</h4>
                  <p className="text-xs text-muted-foreground">Manage your cart items</p>
                </div>
              </Link>

              <Link
                to="/checkout"
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 focus-ring"
              >
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="CreditCard" size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Checkout</h4>
                  <p className="text-xs text-muted-foreground">Complete your orders</p>
                </div>
              </Link>

              <Link
                to="/orders"
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 focus-ring"
              >
                <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Icon name="Package" size={20} className="text-warning" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Order Tracking</h4>
                  <p className="text-xs text-muted-foreground">Track your orders</p>
                </div>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 focus-ring"
              >
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name="LayoutDashboard" size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Dashboard</h4>
                  <p className="text-xs text-muted-foreground">Main dashboard view</p>
                </div>
              </Link>

              <Link
                to="/account"
                className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 focus-ring"
              >
                <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="Settings" size={20} className="text-error" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">Settings</h4>
                  <p className="text-xs text-muted-foreground">Account preferences</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessAccountCommandCenter;