import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionsPanel = () => {
  const quickActions = [
    {
      id: 1,
      title: "Emergency Order",
      description: "Place urgent orders with priority delivery",
      icon: "Zap",
      color: "bg-error/10 text-error",
      action: () => console.log("Emergency order"),
      urgent: true
    },
    {
      id: 2,
      title: "Bulk Quote Request",
      description: "Get competitive quotes for large orders",
      icon: "Calculator",
      color: "bg-warning/10 text-warning",
      action: () => console.log("Bulk quote"),
      urgent: false
    },
    {
      id: 3,
      title: "Technical Consultation",
      description: "Book expert consultation for projects",
      icon: "Headphones",
      color: "bg-success/10 text-success",
      action: () => console.log("Technical consultation"),
      urgent: false
    },
    {
      id: 4,
      title: "Credit Limit Increase",
      description: "Request higher credit limits",
      icon: "CreditCard",
      color: "bg-primary/10 text-primary",
      action: () => console.log("Credit increase"),
      urgent: false
    },
    {
      id: 5,
      title: "Inventory Sync",
      description: "Sync with your inventory management",
      icon: "RefreshCw",
      color: "bg-muted text-muted-foreground",
      action: () => console.log("Inventory sync"),
      urgent: false
    },
    {
      id: 6,
      title: "Volume Discounts",
      description: "Check available volume pricing",
      icon: "Percent",
      color: "bg-success/10 text-success",
      action: () => console.log("Volume discounts"),
      urgent: false
    }
  ];

  const recentNotifications = [
    {
      id: 1,
      title: "New Volume Discount Available",
      message: "15% discount on Schneider products for orders above ₹5L",
      time: "2 hours ago",
      type: "discount",
      urgent: true
    },
    {
      id: 2,
      title: "Credit Payment Due",
      message: "Payment of ₹2,45,000 due on 15th January 2025",
      time: "4 hours ago",
      type: "payment",
      urgent: true
    },
    {
      id: 3,
      title: "Project Approval Required",
      message: "Commercial Complex Phase 2 order needs approval",
      time: "6 hours ago",
      type: "approval",
      urgent: false
    },
    {
      id: 4,
      title: "New Product Launch",
      message: "ABB\'s new smart switches now available",
      time: "1 day ago",
      type: "product",
      urgent: false
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'discount': return 'Percent';
      case 'payment': return 'CreditCard';
      case 'approval': return 'CheckCircle';
      case 'product': return 'Package';
      default: return 'Bell';
    }
  };

  const getNotificationColor = (type, urgent) => {
    if (urgent) return 'text-error';
    switch (type) {
      case 'discount': return 'text-success';
      case 'payment': return 'text-warning';
      case 'approval': return 'text-primary';
      case 'product': return 'text-muted-foreground';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions Grid */}
      <div className="glass-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
            <p className="text-sm text-muted-foreground">Frequently used business tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions?.map((action) => (
            <button
              key={action?.id}
              onClick={action?.action}
              className="relative p-4 border border-border rounded-lg hover:bg-muted/50 precision-hover transition-all duration-200 text-left focus-ring group"
            >
              {action?.urgent && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full pulse-electrical"></div>
              )}
              
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action?.color}`}>
                  <Icon name={action?.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {action?.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {action?.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Recent Notifications */}
      <div className="glass-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Recent Notifications</h3>
            <p className="text-sm text-muted-foreground">Important updates and alerts</p>
          </div>
          <Button variant="outline" size="sm" iconName="Bell" iconPosition="left">
            View All
          </Button>
        </div>

        <div className="space-y-4 max-h-80 overflow-y-auto">
          {recentNotifications?.map((notification) => (
            <div 
              key={notification?.id} 
              className="flex items-start space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                notification?.urgent ? 'bg-error/10' : 'bg-muted'
              }`}>
                <Icon 
                  name={getNotificationIcon(notification?.type)} 
                  size={16} 
                  className={getNotificationColor(notification?.type, notification?.urgent)} 
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-medium text-foreground">{notification?.title}</h4>
                  {notification?.urgent && (
                    <div className="w-2 h-2 bg-error rounded-full ml-2 mt-1"></div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {notification?.message}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{notification?.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              {recentNotifications?.filter(n => n?.urgent)?.length} urgent notifications
            </p>
            <Button variant="ghost" size="sm" iconName="Settings" iconPosition="left">
              Notification Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsPanel;