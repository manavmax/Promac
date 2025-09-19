import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CreditAccountCard = ({ creditData }) => {
  const utilizationPercentage = (creditData?.used / creditData?.limit) * 100;
  
  const getUtilizationColor = (percentage) => {
    if (percentage >= 90) return 'text-error';
    if (percentage >= 75) return 'text-warning';
    return 'text-success';
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
    <div className="glass-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="CreditCard" size={24} className="text-success" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Credit Account</h3>
            <p className="text-sm text-muted-foreground">Account ID: {creditData?.accountId}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">{formatCurrency(creditData?.available)}</p>
          <p className="text-sm text-muted-foreground">Available Credit</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Credit Limit</span>
          <span className="text-sm font-medium text-foreground">{formatCurrency(creditData?.limit)}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Used Credit</span>
          <span className="text-sm font-medium text-foreground">{formatCurrency(creditData?.used)}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Utilization</span>
            <span className={`text-sm font-medium ${getUtilizationColor(utilizationPercentage)}`}>
              {utilizationPercentage?.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                utilizationPercentage >= 90 ? 'bg-error' :
                utilizationPercentage >= 75 ? 'bg-warning' : 'bg-success'
              }`}
              style={{ width: `${Math.min(utilizationPercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Payment Due</span>
            <span className="text-sm font-medium text-foreground">{formatCurrency(creditData?.paymentDue)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Due Date</span>
            <span className="text-sm font-medium text-primary">{creditData?.dueDate}</span>
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left" className="flex-1">
            Download Statement
          </Button>
          <Button variant="default" size="sm" iconName="CreditCard" iconPosition="left" className="flex-1">
            Make Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditAccountCard;