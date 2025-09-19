import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BrandIntegrationPanel = () => {
  const brandPartners = [
    {
      id: 1,
      name: "Schneider Electric",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      status: "Connected",
      products: 1250,
      lastSync: "2 hours ago",
      availability: 98.5,
      specialOffers: 3,
      color: "text-success"
    },
    {
      id: 2,
      name: "Siemens",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center",
      status: "Connected",
      products: 890,
      lastSync: "4 hours ago",
      availability: 95.2,
      specialOffers: 2,
      color: "text-success"
    },
    {
      id: 3,
      name: "ABB",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      status: "Syncing",
      products: 675,
      lastSync: "Syncing...",
      availability: 92.8,
      specialOffers: 1,
      color: "text-warning"
    },
    {
      id: 4,
      name: "Legrand",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center",
      status: "Connected",
      products: 540,
      lastSync: "1 hour ago",
      availability: 97.1,
      specialOffers: 4,
      color: "text-success"
    },
    {
      id: 5,
      name: "Havells",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      status: "Error",
      products: 420,
      lastSync: "6 hours ago",
      availability: 0,
      specialOffers: 0,
      color: "text-error"
    },
    {
      id: 6,
      name: "Polycab",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop&crop=center",
      status: "Connected",
      products: 380,
      lastSync: "30 minutes ago",
      availability: 94.6,
      specialOffers: 2,
      color: "text-success"
    }
  ];

  const realtimePricing = [
    {
      id: 1,
      brand: "Schneider",
      product: "Acti 9 MCB 32A",
      currentPrice: 450,
      previousPrice: 475,
      change: -5.3,
      stock: 150,
      category: "Circuit Breakers"
    },
    {
      id: 2,
      brand: "Siemens",
      product: "5SL6 MCB 16A",
      currentPrice: 380,
      previousPrice: 365,
      change: 4.1,
      stock: 89,
      category: "Circuit Breakers"
    },
    {
      id: 3,
      brand: "Legrand",
      product: "Arteor Switch 16A",
      currentPrice: 125,
      previousPrice: 125,
      change: 0,
      stock: 245,
      category: "Switches"
    },
    {
      id: 4,
      brand: "ABB",
      product: "System Pro M Compact",
      currentPrice: 2850,
      previousPrice: 2900,
      change: -1.7,
      stock: 12,
      category: "Distribution Boards"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'connected': return 'CheckCircle';
      case 'syncing': return 'RefreshCw';
      case 'error': return 'AlertCircle';
      default: return 'Circle';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Brand Partners Overview */}
      <div className="glass-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Brand Integration Status</h3>
            <p className="text-sm text-muted-foreground">Real-time connectivity with major electrical brands</p>
          </div>
          <Button variant="outline" size="sm" iconName="RefreshCw" iconPosition="left">
            Sync All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandPartners?.map((brand) => (
            <div key={brand?.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={brand?.logo} 
                      alt={brand?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{brand?.name}</h4>
                    <p className="text-xs text-muted-foreground">{brand?.products} products</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={getStatusIcon(brand?.status)} 
                    size={16} 
                    className={`${brand?.color} ${brand?.status === 'Syncing' ? 'animate-spin' : ''}`} 
                  />
                  <span className={`text-xs font-medium ${brand?.color}`}>
                    {brand?.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Availability</span>
                  <span className="text-xs font-medium text-foreground">{brand?.availability}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      brand?.availability >= 95 ? 'bg-success' :
                      brand?.availability >= 90 ? 'bg-warning' : 'bg-error'
                    }`}
                    style={{ width: `${brand?.availability}%` }}
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-muted-foreground">Last sync: {brand?.lastSync}</span>
                  {brand?.specialOffers > 0 && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Tag" size={12} className="text-primary" />
                      <span className="text-xs font-medium text-primary">{brand?.specialOffers} offers</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Real-time Pricing */}
      <div className="glass-card p-6 rounded-xl border border-border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Real-time Pricing Updates</h3>
            <p className="text-sm text-muted-foreground">Live pricing from integrated brand partners</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full pulse-electrical"></div>
            <span className="text-xs text-success font-medium">Live Updates</span>
          </div>
        </div>

        <div className="space-y-3">
          {realtimePricing?.map((item) => (
            <div key={item?.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="flex items-center space-x-4 flex-1 min-w-0">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{item?.brand?.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground truncate">{item?.product}</h4>
                  <p className="text-xs text-muted-foreground">{item?.brand} • {item?.category}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{formatCurrency(item?.currentPrice)}</p>
                  <div className="flex items-center space-x-1">
                    <Icon 
                      name={item?.change >= 0 ? "TrendingUp" : "TrendingDown"} 
                      size={12} 
                      className={item?.change >= 0 ? "text-error" : "text-success"} 
                    />
                    <span className={`text-xs font-medium ${item?.change >= 0 ? "text-error" : "text-success"}`}>
                      {Math.abs(item?.change)}%
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{item?.stock}</p>
                  <p className="text-xs text-muted-foreground">in stock</p>
                </div>

                <Button variant="outline" size="sm" iconName="ShoppingCart" iconPosition="left">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Prices updated every 15 minutes • Last update: 2 minutes ago
            </p>
            <Button variant="ghost" size="sm" iconName="ExternalLink" iconPosition="left">
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandIntegrationPanel;