import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CheckoutHeader = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, name: 'Address & Delivery', icon: 'MapPin' },
    { id: 2, name: 'Payment Method', icon: 'CreditCard' },
    { id: 3, name: 'Business Details', icon: 'Building2' },
    { id: 4, name: 'Order Confirmation', icon: 'CheckCircle' }
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Back */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/smart-cart-management-hub"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="text-sm font-medium">Back to Cart</span>
            </Link>
            
            <div className="hidden sm:flex items-center space-x-3 ml-6">
              <div className="w-8 h-8 bg-electrical-gradient rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={18} color="#FF0C0D" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">Promac Checkout</h1>
                <p className="text-xs text-muted-foreground">Secure & Fast</p>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center space-x-2 text-success">
            <Icon name="Shield" size={16} />
            <span className="text-xs font-medium">SSL Secured</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="pb-6">
          <div className="flex items-center justify-between">
            {steps?.map((step, index) => (
              <div key={step?.id} className="flex items-center">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    currentStep > step?.id 
                      ? 'bg-success border-success text-white' 
                      : currentStep === step?.id
                        ? 'bg-primary border-primary text-white' :'bg-background border-border text-muted-foreground'
                  }`}>
                    {currentStep > step?.id ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <Icon name={step?.icon} size={16} />
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step?.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">Step {step?.id}</p>
                  </div>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className={`w-12 sm:w-20 h-0.5 mx-4 ${
                    currentStep > step?.id ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;