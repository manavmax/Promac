import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const NotificationPreferences = () => {
  const [preferences, setPreferences] = useState({
    orderUpdates: {
      email: true,
      sms: true,
      push: true,
      whatsapp: false
    },
    promotional: {
      email: true,
      sms: false,
      push: true,
      whatsapp: false
    },
    technical: {
      email: true,
      sms: false,
      push: false,
      whatsapp: false
    },
    security: {
      email: true,
      sms: true,
      push: true,
      whatsapp: false
    },
    business: {
      email: true,
      sms: true,
      push: true,
      whatsapp: true
    }
  });

  const handlePreferenceChange = (category, channel, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev?.[category],
        [channel]: value
      }
    }));
  };

  const notificationCategories = [
    {
      id: 'orderUpdates',
      name: 'Order Updates',
      description: 'Order confirmations, shipping updates, and delivery notifications',
      icon: 'Package',
      color: 'text-blue-600'
    },
    {
      id: 'promotional',
      name: 'Promotional Offers',
      description: 'Special deals, discounts, and new product announcements',
      icon: 'Tag',
      color: 'text-green-600'
    },
    {
      id: 'technical',
      name: 'Technical Newsletters',
      description: 'Product guides, installation tips, and industry insights',
      icon: 'BookOpen',
      color: 'text-purple-600'
    },
    {
      id: 'security',
      name: 'Security Alerts',
      description: 'Login notifications, password changes, and security updates',
      icon: 'Shield',
      color: 'text-red-600'
    },
    {
      id: 'business',
      name: 'Business Account',
      description: 'Credit updates, bulk order confirmations, and account statements',
      icon: 'Briefcase',
      color: 'text-orange-600'
    }
  ];

  const channels = [
    { id: 'email', name: 'Email', icon: 'Mail' },
    { id: 'sms', name: 'SMS', icon: 'MessageSquare' },
    { id: 'push', name: 'Push', icon: 'Bell' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle' }
  ];

  const handleSavePreferences = () => {
    console.log('Saving preferences:', preferences);
    // Mock save functionality
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Bell" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Notification Preferences</h2>
        </div>
      </div>
      <div className="mb-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center space-x-3">
          <Icon name="Info" size={20} className="text-primary" />
          <div>
            <h4 className="text-sm font-medium text-foreground">Customize Your Experience</h4>
            <p className="text-xs text-muted-foreground">
              Choose how you want to receive different types of notifications. You can always change these settings later.
            </p>
          </div>
        </div>
      </div>
      {/* Notification Categories */}
      <div className="space-y-6">
        {notificationCategories?.map((category) => (
          <div key={category?.id} className="border border-border rounded-lg p-4">
            <div className="flex items-start space-x-3 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${category?.color}`}>
                <Icon name={category?.icon} size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-medium text-foreground">{category?.name}</h3>
                <p className="text-sm text-muted-foreground">{category?.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {channels?.map((channel) => (
                <div key={channel?.id} className="flex items-center space-x-3">
                  <Checkbox
                    checked={preferences?.[category?.id]?.[channel?.id]}
                    onChange={(e) => handlePreferenceChange(category?.id, channel?.id, e?.target?.checked)}
                  />
                  <div className="flex items-center space-x-2">
                    <Icon name={channel?.icon} size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{channel?.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Quick Settings */}
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <h3 className="text-base font-medium text-foreground mb-3">Quick Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Volume2" size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Do Not Disturb</span>
            </div>
            <Checkbox
             
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
            <div className="flex items-center space-x-3">
              <Icon name="Clock" size={16} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Quiet Hours (10 PM - 8 AM)</span>
            </div>
            <Checkbox
              checked
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      {/* Frequency Settings */}
      <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Zap" size={16} className="text-success" />
          <h4 className="text-sm font-medium text-foreground">Smart Notifications</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          We'll intelligently group similar notifications and send them at optimal times to reduce interruptions.
        </p>
        <div className="flex items-center space-x-3">
          <Checkbox
            checked
            onChange={() => {}}
          />
          <span className="text-sm text-foreground">Enable smart notification bundling</span>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex items-center justify-end mt-6 pt-4 border-t border-border">
        <button
          onClick={handleSavePreferences}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2"
        >
          <Icon name="Save" size={16} />
          <span>Save Preferences</span>
        </button>
      </div>
    </div>
  );
};

export default NotificationPreferences;