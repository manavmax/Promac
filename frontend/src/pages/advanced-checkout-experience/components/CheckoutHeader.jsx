import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CheckoutHeader = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, name: 'Address & Delivery', icon: 'MapPin' },
    { id: 2, name: 'Payment Method', icon: 'CreditCard' },
    { id: 3, name: 'Business Details', icon: 'Building2' },
    { id: 4, name: 'Order Confirmation', icon: 'CheckCircle' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/images/promac-high-resolution-logo-transparent.png"
              alt="Promac Electrical"
              className="h-8 w-auto"
            />
          </div>

          {/* Security Badge */}
          <div className="flex items-center space-x-2 text-red-600">
            <Icon name="Shield" size={16} />
            <span className="text-xs font-light">SSL Secured</span>
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
                      ? 'bg-black border-black text-white' 
                      : currentStep === step?.id
                        ? 'bg-black border-black text-white' :'bg-white border-gray-300 text-gray-600'
                  }`}>
                    {currentStep > step?.id ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <Icon name={step?.icon} size={16} />
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-light ${
                      currentStep >= step?.id ? 'text-black' : 'text-gray-600'
                    }`}>
                      {step?.name}
                    </p>
                    <p className="text-xs text-gray-600 font-light">Step {step?.id}</p>
                  </div>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className={`w-12 sm:w-20 h-0.5 mx-4 ${
                    currentStep > step?.id ? 'bg-black' : 'bg-gray-300'
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