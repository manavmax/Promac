import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import QuickActionsCard from './components/QuickActionsCard';
import RecentOrdersCard from './components/RecentOrdersCard';
import RecommendedProductsCard from './components/RecommendedProductsCard';
import NotificationsCard from './components/NotificationsCard';
import ProjectManagementCard from './components/ProjectManagementCard';
import AnalyticsCard from './components/AnalyticsCard';
import FloatingActionButton from './components/FloatingActionButton';

const AdaptiveUserDashboard = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('contractor'); // contractor, distributor, individual, business
  const [notifications, setNotifications] = useState([]);

  // Mock user data
  const userData = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@electrical.com",
    accountType: accountType,
    loyaltyTier: "Gold",
    stats: {
      totalOrders: 156,
      totalSpent: 485000,
      rewardPoints: 2450,
      activeProjects: 8
    }
  };

  // Mock recent orders
  const recentOrders = [
    {
      id: "ORD-2025-001",
      orderNumber: "PM2025001",
      date: "2025-01-05T10:30:00Z",
      status: "Delivered",
      itemCount: 12,
      total: 15750
    },
    {
      id: "ORD-2025-002",
      orderNumber: "PM2025002",
      date: "2025-01-04T14:20:00Z",
      status: "Shipped",
      itemCount: 8,
      total: 8900
    },
    {
      id: "ORD-2025-003",
      orderNumber: "PM2025003",
      date: "2025-01-03T09:15:00Z",
      status: "Processing",
      itemCount: 25,
      total: 32500
    },
    {
      id: "ORD-2025-004",
      orderNumber: "PM2025004",
      date: "2025-01-02T16:45:00Z",
      status: "Delivered",
      itemCount: 6,
      total: 4200
    }
  ];

  // Mock recommended products
  const recommendedProducts = [
    {
      id: "PROD-001",
      name: "Schneider Electric MCB 32A Single Pole",
      brand: "Schneider Electric",
      price: 285,
      originalPrice: 320,
      discount: 11,
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      inStock: true
    },
    {
      id: "PROD-002",
      name: "Legrand Modular Switch 16A",
      brand: "Legrand",
      price: 145,
      originalPrice: 165,
      discount: 12,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
      inStock: true
    },
    {
      id: "PROD-003",
      name: "Havells LED Panel Light 18W",
      brand: "Havells",
      price: 890,
      originalPrice: 1050,
      discount: 15,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      inStock: false
    },
    {
      id: "PROD-004",
      name: "Anchor Roma Classic Switch",
      brand: "Anchor",
      price: 95,
      originalPrice: 110,
      discount: 14,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 78,
      inStock: true
    }
  ];

  // Mock projects (for contractor/business accounts)
  const projects = [
    {
      id: "PROJ-001",
      name: "Residential Complex Wiring - Phase 2",
      location: "Gurgaon, Haryana",
      status: "In-Progress",
      progress: 65,
      dueDate: "2025-02-15T00:00:00Z",
      budget: 850000,
      teamSize: 12
    },
    {
      id: "PROJ-002",
      name: "Commercial Office Electrical Setup",
      location: "Noida, UP",
      status: "Planning",
      progress: 25,
      dueDate: "2025-03-20T00:00:00Z",
      budget: 1200000,
      teamSize: 8
    },
    {
      id: "PROJ-003",
      name: "Industrial Panel Installation",
      location: "Faridabad, Haryana",
      status: "Completed",
      progress: 100,
      dueDate: "2024-12-30T00:00:00Z",
      budget: 650000,
      teamSize: 6
    }
  ];

  // Mock analytics data (for distributor accounts)
  const analyticsData = {
    monthlyRevenue: 2850000,
    orderVolume: 342,
    customerGrowth: 28,
    territoryCoverage: 85
  };

  // Initialize notifications
  useEffect(() => {
    const mockNotifications = [
      {
        id: "NOT-001",
        type: "urgent",
        title: "Emergency Stock Alert",
        message: "MCB 32A stock running low - only 15 units remaining",
        timestamp: "2025-01-06T08:30:00Z",
        read: false,
        urgent: true
      },
      {
        id: "NOT-002",
        type: "order",
        title: "Order Shipped",
        message: "Your order #PM2025002 has been shipped and will arrive tomorrow",
        timestamp: "2025-01-06T07:15:00Z",
        read: false,
        urgent: false
      },
      {
        id: "NOT-003",
        type: "promotion",
        title: "Special Offer - 20% Off",
        message: "Limited time offer on Schneider Electric products",
        timestamp: "2025-01-05T18:00:00Z",
        read: true,
        urgent: false
      },
      {
        id: "NOT-004",
        type: "support",
        title: "Consultation Confirmed",
        message: "Your technical consultation is scheduled for Jan 8, 2025 at 2:00 PM",
        timestamp: "2025-01-05T14:30:00Z",
        read: false,
        urgent: false
      },
      {
        id: "NOT-005",
        type: "system",
        title: "Account Upgrade Available",
        message: "Upgrade to Premium for exclusive benefits and priority support",
        timestamp: "2025-01-04T10:00:00Z",
        read: true,
        urgent: false
      }
    ];
    setNotifications(mockNotifications);
  }, []);

  // Handle quick actions
  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 'emergency': console.log('Emergency order initiated');
        break;
      case 'support': console.log('Expert support requested');
        break;
      case 'reorder': navigate('/smart-cart-management-hub');
        break;
      case 'inventory': console.log('Checking inventory');
        break;
      case 'invoices': console.log('Downloading invoices');
        break;
      case 'consultation': console.log('Booking consultation');
        break;
      case 'analytics': navigate('/business-account-command-center');
        break;
      case 'emergency-contact': console.log('Emergency contact initiated');
        break;
      default:
        console.log('Unknown action:', actionId);
    }
  };

  // Handle floating action button
  const handleFloatingAction = (actionId) => {
    switch (actionId) {
      case 'emergency-order': console.log('Emergency order via FAB');
        break;
      case 'technical-support': console.log('Technical support via FAB');
        break;
      case 'bulk-quote': console.log('Bulk quote via FAB');
        break;
      case 'barcode-scan': console.log('Barcode scan initiated');
        break;
      default:
        console.log('Unknown FAB action:', actionId);
    }
  };

  // Handle notifications
  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => 
      prev?.map(notification => 
        notification?.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev?.map(notification => ({ ...notification, read: true }))
    );
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product?.name);
    // Navigate to cart or show success message
  };

  // Handle view all orders
  const handleViewAllOrders = () => {
    navigate('/order-tracking-management-system');
  };

  // Handle create project
  const handleCreateProject = () => {
    console.log('Creating new project');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Header */}
          <WelcomeHeader
            user={userData}
            accountType={accountType}
            loyaltyTier={userData?.loyaltyTier}
            onQuickAction={handleQuickAction}
          />

          {/* Account Type Selector (for demo purposes) */}
          <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Demo: Switch Account Type</h3>
            <div className="flex flex-wrap gap-2">
              {['individual', 'contractor', 'distributor', 'business']?.map((type) => (
                <button
                  key={type}
                  onClick={() => setAccountType(type)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    accountType === type
                      ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type?.charAt(0)?.toUpperCase() + type?.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Orders */}
              <RecentOrdersCard
                orders={recentOrders}
                onViewAll={handleViewAllOrders}
              />

              {/* Project Management (Contractor/Business only) */}
              {(accountType === 'contractor' || accountType === 'business') && (
                <ProjectManagementCard
                  projects={projects}
                  onCreateProject={handleCreateProject}
                />
              )}

              {/* Analytics (Distributor only) */}
              {accountType === 'distributor' && (
                <AnalyticsCard
                  analyticsData={analyticsData}
                  accountType={accountType}
                />
              )}

              {/* Recommended Products */}
              <RecommendedProductsCard
                products={recommendedProducts}
                onAddToCart={handleAddToCart}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <QuickActionsCard
                accountType={accountType}
                onAction={handleQuickAction}
              />

              {/* Notifications */}
              <NotificationsCard
                notifications={notifications}
                onMarkAsRead={handleMarkAsRead}
                onMarkAllAsRead={handleMarkAllAsRead}
              />
            </div>
          </div>
        </div>
      </main>
      {/* Floating Action Button */}
      <FloatingActionButton onAction={handleFloatingAction} />
    </div>
  );
};

export default AdaptiveUserDashboard;