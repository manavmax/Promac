import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PaymentMethodsSection = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "UPI",
      name: "Primary UPI",
      details: "rajesh@paytm",
      isDefault: true,
      isVerified: true,
      lastUsed: "2024-12-20"
    },
    {
      id: 2,
      type: "Bank Account",
      name: "HDFC Current Account",
      details: "****1234",
      isDefault: false,
      isVerified: true,
      lastUsed: "2024-12-18"
    },
    {
      id: 3,
      type: "Credit Card",
      name: "HDFC Business Card",
      details: "****5678",
      isDefault: false,
      isVerified: true,
      lastUsed: "2024-12-15"
    },
    {
      id: 4,
      type: "Business Credit",
      name: "Promac Credit Line",
      details: "₹2,50,000 available",
      isDefault: false,
      isVerified: true,
      lastUsed: "2024-12-10"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [newPaymentMethod, setNewPaymentMethod] = useState({
    type: "",
    name: "",
    details: ""
  });

  const handleAddPaymentMethod = () => {
    const method = {
      id: Date.now(),
      ...newPaymentMethod,
      isDefault: paymentMethods?.length === 0,
      isVerified: false,
      lastUsed: null
    };
    setPaymentMethods([...paymentMethods, method]);
    setNewPaymentMethod({ type: "", name: "", details: "" });
    setSelectedType("");
    setShowAddForm(false);
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(paymentMethods?.map(method => ({
      ...method,
      isDefault: method?.id === id
    })));
  };

  const handleDeleteMethod = (id) => {
    setPaymentMethods(paymentMethods?.filter(method => method?.id !== id));
  };

  const getPaymentIcon = (type) => {
    switch (type) {
      case 'UPI': return 'Smartphone';
      case 'Bank Account': return 'Building2';
      case 'Credit Card': return 'CreditCard';
      case 'Business Credit': return 'Briefcase';
      default: return 'Wallet';
    }
  };

  const getPaymentColor = (type) => {
    switch (type) {
      case 'UPI': return 'text-blue-600 bg-blue-50';
      case 'Bank Account': return 'text-green-600 bg-green-50';
      case 'Credit Card': return 'text-purple-600 bg-purple-50';
      case 'Business Credit': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const paymentTypes = [
    { value: "UPI", label: "UPI ID", placeholder: "yourname@upi" },
    { value: "Bank Account", label: "Bank Account", placeholder: "Account details" },
    { value: "Credit Card", label: "Credit/Debit Card", placeholder: "Card details" },
    { value: "Business Credit", label: "Business Credit Line", placeholder: "Credit details" }
  ];

  return (
    <div className="bg-card rounded-lg border border-border shadow-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="CreditCard" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Payment Methods</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAddForm(true)}
          iconName="Plus"
          iconPosition="left"
          iconSize={16}
        >
          Add Method
        </Button>
      </div>
      {/* Security Notice */}
      <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="Shield" size={16} className="text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-foreground">PCI DSS Compliant</h4>
            <p className="text-xs text-muted-foreground">
              Your payment information is encrypted and securely stored with bank-level security
            </p>
          </div>
          <Icon name="Lock" size={16} className="text-primary" />
        </div>
      </div>
      {/* Add Payment Method Form */}
      {showAddForm && (
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
          <h3 className="text-lg font-medium text-foreground mb-4">Add Payment Method</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Payment Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {paymentTypes?.map((type) => (
                  <button
                    key={type?.value}
                    onClick={() => {
                      setSelectedType(type?.value);
                      setNewPaymentMethod({...newPaymentMethod, type: type?.value});
                    }}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedType === type?.value
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:border-primary/30'
                    }`}
                  >
                    {type?.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedType && (
              <>
                <Input
                  label="Method Name"
                  type="text"
                  placeholder="e.g., Primary UPI, Business Card"
                  value={newPaymentMethod?.name}
                  onChange={(e) => setNewPaymentMethod({...newPaymentMethod, name: e?.target?.value})}
                  required
                />
                <Input
                  label={`${selectedType} Details`}
                  type="text"
                  placeholder={paymentTypes?.find(t => t?.value === selectedType)?.placeholder}
                  value={newPaymentMethod?.details}
                  onChange={(e) => setNewPaymentMethod({...newPaymentMethod, details: e?.target?.value})}
                  required
                />
              </>
            )}
          </div>
          <div className="flex items-center justify-end space-x-3 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setShowAddForm(false);
                setSelectedType("");
                setNewPaymentMethod({ type: "", name: "", details: "" });
              }}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleAddPaymentMethod}
              disabled={!selectedType || !newPaymentMethod?.name || !newPaymentMethod?.details}
              iconName="Save"
              iconPosition="left"
              iconSize={16}
            >
              Add Method
            </Button>
          </div>
        </div>
      )}
      {/* Payment Methods List */}
      <div className="space-y-4">
        {paymentMethods?.map((method) => (
          <div
            key={method?.id}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              method?.isDefault
                ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 flex-1">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  method?.isDefault ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={getPaymentIcon(method?.type)} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-base font-medium text-foreground">{method?.name}</h3>
                    {method?.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Default
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentColor(method?.type)}`}>
                      {method?.type}
                    </span>
                    {method?.isVerified && (
                      <div className="flex items-center space-x-1">
                        <Icon name="CheckCircle" size={14} className="text-success" />
                        <span className="text-xs text-success">Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{method?.details}</p>
                  {method?.lastUsed && (
                    <p className="text-xs text-muted-foreground">
                      Last used: {new Date(method.lastUsed)?.toLocaleDateString('en-IN')}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                {!method?.isDefault && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSetDefault(method?.id)}
                    className="text-xs"
                  >
                    Set Default
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  iconName="Edit"
                  iconSize={16}
                >
                  <span className="sr-only">Edit payment method</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteMethod(method?.id)}
                  iconName="Trash2"
                  iconSize={16}
                  className="text-destructive hover:text-destructive"
                >
                  <span className="sr-only">Delete payment method</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {paymentMethods?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="CreditCard" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No payment methods added</h3>
          <p className="text-muted-foreground mb-4">Add your payment methods for faster checkout</p>
          <Button
            variant="outline"
            onClick={() => setShowAddForm(true)}
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
          >
            Add First Method
          </Button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodsSection;