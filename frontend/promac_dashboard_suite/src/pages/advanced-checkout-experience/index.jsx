import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CheckoutHeader from './components/CheckoutHeader';
import OrderSummary from './components/OrderSummary';
import AddressStep from './components/AddressStep';
import PaymentStep from './components/PaymentStep';
import BusinessStep from './components/BusinessStep';
import ConfirmationStep from './components/ConfirmationStep';

const AdvancedCheckoutExperience = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSummaryCollapsed, setIsSummaryCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    shippingAddress: null,
    deliverySlot: null,
    paymentMethod: '',
    paymentDetails: null,
    businessInfo: null
  });

  // Auto-collapse summary on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSummaryCollapsed(true);
      } else {
        setIsSummaryCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <AddressStep
            onNext={handleNextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 2:
        return (
          <PaymentStep
            onNext={handleNextStep}
            onBack={handlePrevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 3:
        return (
          <BusinessStep
            onNext={handleNextStep}
            onBack={handlePrevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            onBack={handlePrevStep}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Secure Checkout - Promac Electrical</title>
        <meta name="description" content="Complete your electrical components purchase with our secure, multi-step checkout process. SSL encrypted, GST compliant, and trusted by contractors across India." />
        <meta name="keywords" content="secure checkout, electrical components, GST invoice, business account, contractor supplies" />
      </Helmet>
      <div className="min-h-screen bg-electrical-gradient">
        {/* Checkout Header */}
        <CheckoutHeader currentStep={currentStep} totalSteps={4} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Steps */}
            <div className={`transition-all duration-300 ${
              isSummaryCollapsed ? 'lg:w-full' : 'lg:w-2/3'
            }`}>
              <div className="bg-background rounded-lg shadow-premium-lg">
                <div className="p-6 lg:p-8">
                  {renderCurrentStep()}
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className={`transition-all duration-300 ${
              isSummaryCollapsed ? 'lg:w-auto' : 'lg:w-1/3'
            }`}>
              <div className="sticky top-24">
                <OrderSummary
                  isCollapsed={isSummaryCollapsed}
                  onToggle={() => setIsSummaryCollapsed(!isSummaryCollapsed)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals Footer */}
        <div className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">SSL Secured</h3>
                  <p className="text-xs text-muted-foreground">256-bit encryption</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">BIS Certified</h3>
                  <p className="text-xs text-muted-foreground">Quality assured</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">25+ Years</h3>
                  <p className="text-xs text-muted-foreground">Trusted experience</p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Free Delivery</h3>
                  <p className="text-xs text-muted-foreground">Orders above ₹5,000</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground">
                © {new Date()?.getFullYear()} Promac Electrical. All rights reserved. | 
                <span className="text-primary mx-1">Privacy Policy</span> | 
                <span className="text-primary mx-1">Terms of Service</span> | 
                <span className="text-primary mx-1">Support: 1800-123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedCheckoutExperience;