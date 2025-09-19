import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalSupport = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSupport, setSelectedSupport] = useState(null);

  const supportOptions = [
    {
      id: 'expert-consultation',
      title: 'Expert Consultation',
      description: 'Get personalized advice from our electrical engineers',
      icon: 'UserCheck',
      availability: 'Available now',
      estimatedTime: '15-30 minutes',
      type: 'video-call'
    },
    {
      id: 'technical-specs',
      title: 'Technical Specifications',
      description: 'Detailed product specifications and compatibility guide',
      icon: 'FileText',
      availability: 'Instant access',
      estimatedTime: '5 minutes',
      type: 'document'
    },
    {
      id: 'installation-guide',
      title: 'Installation Support',
      description: 'Step-by-step installation guidance and safety tips',
      icon: 'Tool',
      availability: 'Available now',
      estimatedTime: '20-45 minutes',
      type: 'video-guide'
    },
    {
      id: 'bulk-pricing',
      title: 'Bulk Order Assistance',
      description: 'Custom pricing for large quantity orders',
      icon: 'Calculator',
      availability: 'Business hours',
      estimatedTime: '10-15 minutes',
      type: 'phone-call'
    }
  ];

  const handleSupportRequest = (supportType) => {
    setSelectedSupport(supportType);
    // Mock support request
    console.log(`Requesting ${supportType?.title} support`);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-precision">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Headphones" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Technical Support</h2>
              <p className="text-sm text-muted-foreground">25+ years of electrical expertise</p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconSize={20}
          >
            <span className="sr-only">Toggle support options</span>
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button
            variant="outline"
            size="sm"
            iconName="Phone"
            iconPosition="left"
            iconSize={16}
            className="justify-start"
          >
            Call Expert
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={16}
            className="justify-start"
          >
            Live Chat
          </Button>
        </div>

        {/* Expert Availability */}
        <div className="flex items-center space-x-2 p-3 bg-success/10 border border-success/20 rounded-lg mb-4">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm text-success font-medium">Expert available now</span>
          <span className="text-xs text-muted-foreground">Avg. response time: 2 minutes</span>
        </div>

        {/* Expanded Support Options */}
        {isExpanded && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground mb-3">Choose Support Type</h3>
            
            {supportOptions?.map((option) => (
              <div
                key={option?.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedSupport?.id === option?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
                onClick={() => handleSupportRequest(option)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    selectedSupport?.id === option?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={option?.icon} size={16} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      {option?.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {option?.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {option?.estimatedTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon 
                            name={option?.availability === 'Available now' ? 'CheckCircle' : 'Clock'} 
                            size={12} 
                            className={option?.availability === 'Available now' ? 'text-success' : 'text-warning'} 
                          />
                          <span className={`text-xs ${
                            option?.availability === 'Available now' ? 'text-success' : 'text-warning'
                          }`}>
                            {option?.availability}
                          </span>
                        </div>
                      </div>
                      
                      {selectedSupport?.id === option?.id && (
                        <Button
                          variant="default"
                          size="sm"
                          iconName="ArrowRight"
                          iconPosition="right"
                          iconSize={14}
                        >
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="text-sm font-medium text-foreground mb-3">Direct Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">+91 1800-123-4567</span>
                  <span className="text-xs text-success">Toll-free</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">support@promac.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {!isExpanded && (
          <Button
            variant="default"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="w-full"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Get Technical Support
          </Button>
        )}
      </div>
    </div>
  );
};

export default TechnicalSupport;