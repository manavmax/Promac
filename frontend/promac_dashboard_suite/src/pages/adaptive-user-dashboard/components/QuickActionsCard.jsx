import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActionsCard = ({ accountType, onAction }) => {
  const getQuickActions = () => {
    const baseActions = [
      {
        id: 'reorder',
        title: 'Reorder Favorites',
        description: 'Quick reorder from your frequently bought items',
        icon: 'RotateCcw',
        color: 'text-primary',
        bgColor: 'bg-primary/10'
      },
      {
        id: 'inventory',
        title: 'Check Inventory',
        description: 'Real-time stock availability',
        icon: 'Package',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      },
      {
        id: 'invoices',
        title: 'Download Invoices',
        description: 'Access your billing documents',
        icon: 'FileText',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      }
    ];

    if (accountType === 'contractor') {
      baseActions?.push({
        id: 'consultation',
        title: 'Book Consultation',
        description: 'Schedule expert technical advice',
        icon: 'Calendar',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50'
      });
    }

    if (accountType === 'distributor') {
      baseActions?.push({
        id: 'analytics',
        title: 'View Analytics',
        description: 'Performance and sales insights',
        icon: 'BarChart3',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      });
    }

    return baseActions;
  };

  const actions = getQuickActions();

  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
        <Icon name="Zap" size={20} className="text-primary" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={() => onAction(action?.id)}
            className="group p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 text-left precision-hover"
          >
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 ${action?.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={action?.icon} size={20} className={action?.color} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {action?.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {action?.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* Emergency Contact */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Button
          variant="outline"
          fullWidth
          iconName="Phone"
          iconPosition="left"
          className="text-primary border-primary/30 hover:bg-primary hover:text-white"
          onClick={() => onAction('emergency-contact')}
        >
          24/7 Emergency Support
        </Button>
      </div>
    </div>
  );
};

export default QuickActionsCard;