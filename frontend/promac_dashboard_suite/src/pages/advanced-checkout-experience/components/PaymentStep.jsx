import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PaymentStep = ({ onNext, onBack, formData, setFormData }) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [upiId, setUpiId] = useState('');
  const [selectedEmi, setSelectedEmi] = useState('');

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      description: 'Pay using UPI ID or QR Code',
      icon: 'Smartphone',
      popular: true,
      processingFee: 0
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay accepted',
      icon: 'CreditCard',
      popular: false,
      processingFee: 0
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All major banks supported',
      icon: 'Building',
      popular: false,
      processingFee: 0
    },
    {
      id: 'business_credit',
      name: 'Business Credit Account',
      description: 'Pay using your Promac credit line',
      icon: 'Building2',
      popular: false,
      processingFee: 0,
      businessOnly: true
    },
    {
      id: 'emi',
      name: 'EMI Options',
      description: 'Convert to easy monthly installments',
      icon: 'Calendar',
      popular: false,
      processingFee: 99
    }
  ];

  const emiOptions = [
    { months: 3, rate: 12, emi: 2890, total: 8670 },
    { months: 6, rate: 13, emi: 1520, total: 9120 },
    { months: 9, rate: 14, emi: 1080, total: 9720 },
    { months: 12, rate: 15, emi: 850, total: 10200 }
  ];

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 
    'Punjab National Bank', 'Bank of Baroda', 'Canara Bank', 'Union Bank'
  ];

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
    setFormData(prev => ({
      ...prev,
      paymentMethod: paymentId
    }));
  };

  const handleNext = () => {
    if (selectedPayment) {
      const paymentData = {
        method: selectedPayment,
        ...(selectedPayment === 'card' && cardDetails),
        ...(selectedPayment === 'upi' && { upiId }),
        ...(selectedPayment === 'emi' && { emiOption: selectedEmi })
      };
      
      setFormData(prev => ({
        ...prev,
        paymentDetails: paymentData
      }));
      onNext();
    }
  };

  const isFormValid = () => {
    if (!selectedPayment) return false;
    
    switch (selectedPayment) {
      case 'card':
        return cardDetails?.number && cardDetails?.expiry && cardDetails?.cvv && cardDetails?.name;
      case 'upi':
        return upiId;
      case 'emi':
        return selectedEmi;
      default:
        return true;
    }
  };

  return (
    <div className="space-y-8">
      {/* Payment Methods */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-semibold text-foreground flex items-center mb-6">
          <Icon name="CreditCard" size={24} className="mr-3 text-primary" />
          Payment Method
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods?.map((method) => (
            <div
              key={method?.id}
              className={`relative border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                selectedPayment === method?.id
                  ? 'border-primary bg-primary/5 shadow-precision'
                  : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }`}
              onClick={() => handlePaymentSelect(method?.id)}
            >
              {method?.popular && (
                <div className="absolute -top-2 left-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Popular
                </div>
              )}
              
              <div className="flex items-start space-x-3">
                <div className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                  selectedPayment === method?.id
                    ? 'border-primary bg-primary' :'border-border'
                }`}>
                  {selectedPayment === method?.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name={method?.icon} size={20} className="text-primary" />
                    <h3 className="font-medium text-foreground">{method?.name}</h3>
                    {method?.businessOnly && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Business
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{method?.description}</p>
                  {method?.processingFee > 0 && (
                    <p className="text-xs text-warning mt-1">Processing fee: ₹{method?.processingFee}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Payment Details Forms */}
      {selectedPayment === 'card' && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Card Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Input
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardDetails?.number}
                onChange={(e) => setCardDetails(prev => ({ ...prev, number: e?.target?.value }))}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Cardholder Name"
                type="text"
                placeholder="Name as on card"
                value={cardDetails?.name}
                onChange={(e) => setCardDetails(prev => ({ ...prev, name: e?.target?.value }))}
                required
              />
            </div>
            <Input
              label="Expiry Date"
              type="text"
              placeholder="MM/YY"
              value={cardDetails?.expiry}
              onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: e?.target?.value }))}
              required
            />
            <Input
              label="CVV"
              type="password"
              placeholder="123"
              value={cardDetails?.cvv}
              onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e?.target?.value }))}
              required
            />
          </div>
          
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center space-x-2 text-success">
              <Icon name="Shield" size={16} />
              <span className="text-sm font-medium">Your card details are encrypted and secure</span>
            </div>
          </div>
        </div>
      )}
      {selectedPayment === 'upi' && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">UPI Payment</h3>
          <div className="space-y-4">
            <Input
              label="UPI ID"
              type="text"
              placeholder="yourname@paytm"
              value={upiId}
              onChange={(e) => setUpiId(e?.target?.value)}
              description="Enter your UPI ID to proceed with payment"
              required
            />
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['PhonePe', 'Google Pay', 'Paytm', 'BHIM']?.map((app) => (
                <button
                  key={app}
                  className="p-3 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all duration-200"
                >
                  {app}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedPayment === 'netbanking' && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Select Your Bank</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {banks?.map((bank) => (
              <button
                key={bank}
                className="p-3 text-left border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:bg-muted/50 transition-all duration-200"
              >
                {bank}
              </button>
            ))}
          </div>
        </div>
      )}
      {selectedPayment === 'business_credit' && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Business Credit Account</h3>
          <div className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <div>
                  <h4 className="font-medium text-success">Credit Approved</h4>
                  <p className="text-sm text-success/80">Available Credit: ₹2,50,000</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Payment Terms</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Net 30 days payment terms</li>
                <li>• 2% early payment discount if paid within 10 days</li>
                <li>• Monthly statement generation</li>
                <li>• GST invoice will be generated automatically</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {selectedPayment === 'emi' && (
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">EMI Options</h3>
          <div className="space-y-3">
            {emiOptions?.map((option) => (
              <div
                key={option?.months}
                className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedEmi === option?.months
                    ? 'border-primary bg-primary/5 shadow-precision'
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
                onClick={() => setSelectedEmi(option?.months)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedEmi === option?.months
                        ? 'border-primary bg-primary' :'border-border'
                    }`}>
                      {selectedEmi === option?.months && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{option?.months} Months</h4>
                      <p className="text-sm text-muted-foreground">Interest Rate: {option?.rate}% p.a.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹{option?.emi?.toLocaleString('en-IN')}/month</p>
                    <p className="text-sm text-muted-foreground">Total: ₹{option?.total?.toLocaleString('en-IN')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Security & Trust */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-medium text-foreground mb-4">Security & Trust</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="Shield" size={20} className="text-success" />
            <div>
              <p className="text-sm font-medium text-foreground">SSL Encrypted</p>
              <p className="text-xs text-muted-foreground">256-bit security</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Award" size={20} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">PCI Compliant</p>
              <p className="text-xs text-muted-foreground">Secure payments</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={20} className="text-warning" />
            <div>
              <p className="text-sm font-medium text-foreground">25+ Years</p>
              <p className="text-xs text-muted-foreground">Trusted brand</p>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="lg"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={20}
        >
          Back to Address
        </Button>
        
        <Button
          variant="default"
          size="lg"
          onClick={handleNext}
          disabled={!isFormValid()}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={20}
        >
          Continue to Business Details
        </Button>
      </div>
    </div>
  );
};

export default PaymentStep;