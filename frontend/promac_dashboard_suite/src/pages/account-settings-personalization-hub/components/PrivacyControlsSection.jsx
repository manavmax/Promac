import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const PrivacyControlsSection = () => {
  const [privacySettings, setPrivacySettings] = useState({
    dataCollection: {
      analytics: true,
      personalization: true,
      marketing: false,
      thirdParty: false
    },
    dataSharing: {
      partners: false,
      analytics: true,
      marketing: false,
      research: true
    },
    communication: {
      profileVisible: false,
      orderHistory: false,
      recommendations: true,
      reviews: true
    }
  });

  const [dataRequests] = useState([
    {
      id: 1,
      type: "Data Export",
      status: "Completed",
      requestDate: "2024-12-15",
      completedDate: "2024-12-16",
      description: "Complete account data export"
    },
    {
      id: 2,
      type: "Data Deletion",
      status: "In Progress",
      requestDate: "2024-12-18",
      completedDate: null,
      description: "Delete old order history (2022-2023)"
    }
  ]);

  const handlePrivacyChange = (category, setting, value) => {
    setPrivacySettings(prev => ({
      ...prev,
      [category]: {
        ...prev?.[category],
        [setting]: value
      }
    }));
  };

  const handleDataRequest = (type) => {
    console.log(`Requesting ${type}`);
  };

  const handleSavePrivacySettings = () => {
    console.log('Saving privacy settings:', privacySettings);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-success bg-success/10';
      case 'In Progress': return 'text-warning bg-warning/10';
      case 'Pending': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const privacyCategories = [
    {
      id: 'dataCollection',
      name: 'Data Collection',
      description: 'Control what data we collect about your usage and preferences',
      icon: 'Database',
      settings: [
        { key: 'analytics', label: 'Usage Analytics', description: 'Help us improve our services by sharing usage data' },
        { key: 'personalization', label: 'Personalization Data', description: 'Allow us to personalize your experience' },
        { key: 'marketing', label: 'Marketing Insights', description: 'Use your data for marketing research and campaigns' },
        { key: 'thirdParty', label: 'Third-party Integration', description: 'Share data with trusted partners for enhanced services' }
      ]
    },
    {
      id: 'dataSharing',
      name: 'Data Sharing',
      description: 'Manage how your data is shared with external parties',
      icon: 'Share2',
      settings: [
        { key: 'partners', label: 'Business Partners', description: 'Share data with our business partners' },
        { key: 'analytics', label: 'Analytics Services', description: 'Share anonymized data with analytics providers' },
        { key: 'marketing', label: 'Marketing Platforms', description: 'Share data with marketing and advertising platforms' },
        { key: 'research', label: 'Research Purposes', description: 'Use data for industry research and insights' }
      ]
    },
    {
      id: 'communication',
      name: 'Profile Visibility',
      description: 'Control what information is visible to other users and services',
      icon: 'Eye',
      settings: [
        { key: 'profileVisible', label: 'Public Profile', description: 'Make your profile visible to other users' },
        { key: 'orderHistory', label: 'Order History', description: 'Show your order history in recommendations' },
        { key: 'recommendations', label: 'Product Recommendations', description: 'Use your data to show relevant products' },
        { key: 'reviews', label: 'Review Attribution', description: 'Show your name with product reviews' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Privacy Overview */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Shield" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Privacy Controls</h2>
        </div>

        <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Info" size={20} className="text-primary" />
            <div>
              <h4 className="text-sm font-medium text-foreground">Data Protection Compliance</h4>
              <p className="text-xs text-muted-foreground">
                We comply with Indian data protection laws and international privacy standards. 
                You have full control over your personal data.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="space-y-6">
          {privacyCategories?.map((category) => (
            <div key={category?.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground">{category?.name}</h3>
                  <p className="text-sm text-muted-foreground">{category?.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {category?.settings?.map((setting) => (
                  <div key={setting?.key} className="flex items-start justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1 mr-4">
                      <h4 className="text-sm font-medium text-foreground">{setting?.label}</h4>
                      <p className="text-xs text-muted-foreground">{setting?.description}</p>
                    </div>
                    <Checkbox
                      checked={privacySettings?.[category?.id]?.[setting?.key]}
                      onChange={(e) => handlePrivacyChange(category?.id, setting?.key, e?.target?.checked)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Data Rights */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="FileText" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Your Data Rights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 border border-border rounded-lg text-center">
            <Icon name="Download" size={24} className="text-primary mx-auto mb-2" />
            <h3 className="text-sm font-medium text-foreground mb-1">Export Data</h3>
            <p className="text-xs text-muted-foreground mb-3">Download all your account data</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDataRequest('export')}
              className="w-full"
            >
              Request Export
            </Button>
          </div>

          <div className="p-4 border border-border rounded-lg text-center">
            <Icon name="Edit" size={24} className="text-primary mx-auto mb-2" />
            <h3 className="text-sm font-medium text-foreground mb-1">Correct Data</h3>
            <p className="text-xs text-muted-foreground mb-3">Update incorrect information</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDataRequest('correct')}
              className="w-full"
            >
              Request Correction
            </Button>
          </div>

          <div className="p-4 border border-border rounded-lg text-center">
            <Icon name="Trash2" size={24} className="text-destructive mx-auto mb-2" />
            <h3 className="text-sm font-medium text-foreground mb-1">Delete Data</h3>
            <p className="text-xs text-muted-foreground mb-3">Remove specific data permanently</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDataRequest('delete')}
              className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              Request Deletion
            </Button>
          </div>

          <div className="p-4 border border-border rounded-lg text-center">
            <Icon name="Ban" size={24} className="text-warning mx-auto mb-2" />
            <h3 className="text-sm font-medium text-foreground mb-1">Restrict Processing</h3>
            <p className="text-xs text-muted-foreground mb-3">Limit how we use your data</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDataRequest('restrict')}
              className="w-full"
            >
              Request Restriction
            </Button>
          </div>
        </div>

        {/* Data Request History */}
        <div className="border-t border-border pt-6">
          <h3 className="text-base font-medium text-foreground mb-4">Recent Data Requests</h3>
          <div className="space-y-3">
            {dataRequests?.map((request) => (
              <div
                key={request?.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="FileText" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{request?.type}</h4>
                    <p className="text-xs text-muted-foreground">{request?.description}</p>
                    <p className="text-xs text-muted-foreground">
                      Requested: {new Date(request.requestDate)?.toLocaleDateString('en-IN')}
                      {request?.completedDate && (
                        <> • Completed: {new Date(request.completedDate)?.toLocaleDateString('en-IN')}</>
                      )}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request?.status)}`}>
                  {request?.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Cookie Preferences */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Cookie" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Cookie Preferences</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-foreground">Essential Cookies</h3>
              <p className="text-xs text-muted-foreground">Required for basic website functionality</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Always Active</span>
              <div className="w-8 h-4 bg-success rounded-full flex items-center">
                <div className="w-3 h-3 bg-white rounded-full ml-4"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-foreground">Analytics Cookies</h3>
              <p className="text-xs text-muted-foreground">Help us understand how you use our website</p>
            </div>
            <Checkbox
              checked={privacySettings?.dataCollection?.analytics}
              onChange={(e) => handlePrivacyChange('dataCollection', 'analytics', e?.target?.checked)}
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <h3 className="text-sm font-medium text-foreground">Marketing Cookies</h3>
              <p className="text-xs text-muted-foreground">Used to show you relevant advertisements</p>
            </div>
            <Checkbox
              checked={privacySettings?.dataCollection?.marketing}
              onChange={(e) => handlePrivacyChange('dataCollection', 'marketing', e?.target?.checked)}
            />
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex items-center justify-end">
        <Button
          variant="default"
          onClick={handleSavePrivacySettings}
          iconName="Save"
          iconPosition="left"
          iconSize={16}
        >
          Save Privacy Settings
        </Button>
      </div>
    </div>
  );
};

export default PrivacyControlsSection;