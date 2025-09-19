import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import OrderCard from './components/OrderCard';
import OrderTimeline from './components/OrderTimeline';
import OrderFilters from './components/OrderFilters';
import ReturnExchangeModal from './components/ReturnExchangeModal';
import OrderStats from './components/OrderStats';

const OrderTrackingManagementSystem = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    timeRange: 'all',
    category: 'all',
    search: '',
    fromDate: '',
    toDate: '',
    minAmount: '',
    maxAmount: ''
  });

  // Mock data for orders
  const mockOrders = [
    {
      id: 'ORD001',
      orderNumber: 'PM2025001234',
      status: 'Out for Delivery',
      priority: 'urgent',
      orderDate: '2025-01-03T10:30:00Z',
      estimatedDelivery: '2025-01-06T18:00:00Z',
      totalAmount: 45750,
      items: [
        {
          id: 'item1',
          name: 'Schneider Electric Acti 9 MCB 32A',
          specifications: '32A, C-Curve, Single Pole',
          quantity: 10,
          price: 2850,
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
          warrantyEligible: true
        },
        {
          id: 'item2',
          name: 'Havells Crabtree Athena 16A Socket',
          specifications: '16A, 3-Pin, White Finish',
          quantity: 25,
          price: 680,
          image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
          warrantyEligible: true
        }
      ],
      deliveryAddress: {
        name: 'Rajesh Kumar',
        street: 'Plot 45, Sector 12, Industrial Area',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001',
        phone: '+91 98765 43210'
      },
      deliveryPartner: {
        name: 'Blue Dart Express',
        trackingId: 'BD2025010312345',
        phone: '+91 1800 123 4567'
      },
      timeline: {
        confirmed: '2025-01-03T10:30:00Z',
        processing: '2025-01-03T14:15:00Z',
        shipped: '2025-01-04T09:20:00Z',
        outForDelivery: '2025-01-06T08:00:00Z',
        delivered: null
      }
    },
    {
      id: 'ORD002',
      orderNumber: 'PM2025001235',
      status: 'Delivered',
      priority: 'normal',
      orderDate: '2025-01-01T15:45:00Z',
      estimatedDelivery: '2025-01-04T17:00:00Z',
      totalAmount: 28950,
      items: [
        {
          id: 'item3',
          name: 'Polycab FR PVC Wire 2.5 sq mm',
          specifications: '2.5 sq mm, Red, 90m Coil',
          quantity: 5,
          price: 3200,
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
          warrantyEligible: false
        },
        {
          id: 'item4',
          name: 'Legrand Myrius 6A Switch',
          specifications: '6A, 1-Way, Pearl White',
          quantity: 30,
          price: 485,
          image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
          warrantyEligible: true
        }
      ],
      deliveryAddress: {
        name: 'Priya Sharma',
        street: 'A-204, Green Valley Apartments',
        city: 'Noida',
        state: 'Uttar Pradesh',
        pincode: '201301',
        phone: '+91 87654 32109'
      },
      deliveryPartner: {
        name: 'DTDC Express',
        trackingId: 'DT2025010145678',
        phone: '+91 1800 234 5678'
      },
      timeline: {
        confirmed: '2025-01-01T15:45:00Z',
        processing: '2025-01-01T18:30:00Z',
        shipped: '2025-01-02T11:15:00Z',
        outForDelivery: '2025-01-04T09:30:00Z',
        delivered: '2025-01-04T16:45:00Z'
      }
    },
    {
      id: 'ORD003',
      orderNumber: 'PM2025001236',
      status: 'Processing',
      priority: 'high',
      orderDate: '2025-01-05T09:15:00Z',
      estimatedDelivery: '2025-01-08T18:00:00Z',
      totalAmount: 67200,
      items: [
        {
          id: 'item5',
          name: 'ABB System Pro M Compact Distribution Board',
          specifications: '12-Way, IP40, Metal Enclosure',
          quantity: 2,
          price: 18500,
          image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
          warrantyEligible: true
        },
        {
          id: 'item6',
          name: 'Siemens 5SL6 MCB 20A',
          specifications: '20A, B-Curve, Double Pole',
          quantity: 15,
          price: 2080,
          image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
          warrantyEligible: true
        }
      ],
      deliveryAddress: {
        name: 'Amit Patel',
        street: 'Shop 12, Electrical Market',
        city: 'Ahmedabad',
        state: 'Gujarat',
        pincode: '380001',
        phone: '+91 76543 21098'
      },
      deliveryPartner: {
        name: 'Delhivery',
        trackingId: 'DL2025010567890',
        phone: '+91 1800 345 6789'
      },
      timeline: {
        confirmed: '2025-01-05T09:15:00Z',
        processing: '2025-01-05T11:30:00Z',
        shipped: null,
        outForDelivery: null,
        delivered: null
      }
    }
  ];

  // Mock stats data
  const mockStats = {
    totalOrders: 156,
    activeOrders: 23,
    deliveredOrders: 128,
    totalSpent: 485750
  };

  const handleTrackOrder = (orderId) => {
    const order = mockOrders?.find(o => o?.id === orderId);
    setSelectedOrder(order);
    setShowTimeline(true);
  };

  const handleDownloadInvoice = (orderId) => {
    console.log('Downloading invoice for order:', orderId);
    // Mock download functionality
    alert('Invoice download started. Check your downloads folder.');
  };

  const handleInitiateReturn = (orderId) => {
    const order = mockOrders?.find(o => o?.id === orderId);
    setSelectedOrder(order);
    setShowReturnModal(true);
  };

  const handleSubmitReturn = (returnData) => {
    console.log('Return request submitted:', returnData);
    alert('Return request submitted successfully. You will receive a confirmation email shortly.');
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      status: 'all',
      timeRange: 'all',
      category: 'all',
      search: '',
      fromDate: '',
      toDate: '',
      minAmount: '',
      maxAmount: ''
    });
  };

  const filteredOrders = mockOrders?.filter(order => {
    if (filters?.status !== 'all' && order?.status?.toLowerCase() !== filters?.status) {
      return false;
    }
    if (filters?.search && !order?.orderNumber?.toLowerCase()?.includes(filters?.search?.toLowerCase()) &&
        !order?.items?.some(item => item?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()))) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Order Tracking & Management
                </h1>
                <p className="text-muted-foreground">
                  Track your orders, manage returns, and download invoices
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Export Orders
                </Button>
                <Link to="/smart-cart-management-hub">
                  <Button
                    variant="default"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Order Statistics */}
          <div className="mb-8">
            <OrderStats stats={mockStats} />
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-premium">
              <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4"
                  iconName="Search"
                  iconPosition="left"
                >
                  <div className="text-left">
                    <div className="font-medium">Track by Number</div>
                    <div className="text-xs text-muted-foreground">Enter order number</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4"
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  <div className="text-left">
                    <div className="font-medium">Return/Exchange</div>
                    <div className="text-xs text-muted-foreground">Initiate return process</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4"
                  iconName="FileText"
                  iconPosition="left"
                >
                  <div className="text-left">
                    <div className="font-medium">Download Invoices</div>
                    <div className="text-xs text-muted-foreground">GST compliant bills</div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-auto p-4"
                  iconName="Headphones"
                  iconPosition="left"
                >
                  <div className="text-left">
                    <div className="font-medium">Support</div>
                    <div className="text-xs text-muted-foreground">Get help with orders</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <OrderFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">
                Your Orders ({filteredOrders?.length})
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="px-3 py-1 border border-border rounded-lg text-sm bg-background text-foreground">
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                  <option value="amount_high">Amount: High to Low</option>
                  <option value="amount_low">Amount: Low to High</option>
                  <option value="status">Status</option>
                </select>
              </div>
            </div>

            {filteredOrders?.length > 0 ? (
              <div className="space-y-6">
                {filteredOrders?.map((order) => (
                  <OrderCard
                    key={order?.id}
                    order={order}
                    onTrackOrder={handleTrackOrder}
                    onDownloadInvoice={handleDownloadInvoice}
                    onInitiateReturn={handleInitiateReturn}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No Orders Found</h3>
                <p className="text-muted-foreground mb-6">
                  No orders match your current filters. Try adjusting your search criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RefreshCw"
                  iconPosition="left"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Load More */}
          {filteredOrders?.length > 0 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                iconName="ChevronDown"
                iconPosition="right"
              >
                Load More Orders
              </Button>
            </div>
          )}
        </div>
      </main>
      {/* Modals */}
      <OrderTimeline
        order={selectedOrder}
        isVisible={showTimeline}
        onClose={() => setShowTimeline(false)}
      />
      <ReturnExchangeModal
        order={selectedOrder}
        isVisible={showReturnModal}
        onClose={() => setShowReturnModal(false)}
        onSubmitReturn={handleSubmitReturn}
      />
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-electrical-gradient rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} color="#FF0C0D" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Promac</h3>
                  <p className="text-xs text-muted-foreground">Electrical Excellence</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                25+ years of electrical expertise, now digitally enhanced for your convenience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/adaptive-user-dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link to="/smart-cart-management-hub" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shopping Cart
                </Link>
                <Link to="/business-account-command-center" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Business Account
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">24/7 Technical Support</p>
                <p className="text-sm text-muted-foreground">+91 1800 123 4567</p>
                <p className="text-sm text-muted-foreground">support@promac.in</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted text-xs font-medium rounded">BIS</span>
                <span className="px-2 py-1 bg-muted text-xs font-medium rounded">ISI</span>
                <span className="px-2 py-1 bg-muted text-xs font-medium rounded">CE</span>
                <span className="px-2 py-1 bg-muted text-xs font-medium rounded">ISO</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} Promac Electrical. All rights reserved. | Made with precision for electrical professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderTrackingManagementSystem;