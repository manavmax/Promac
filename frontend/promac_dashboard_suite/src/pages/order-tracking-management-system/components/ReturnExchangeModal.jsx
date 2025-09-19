import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ReturnExchangeModal = ({ order, isVisible, onClose, onSubmitReturn }) => {
  const [returnType, setReturnType] = useState('return');
  const [selectedItems, setSelectedItems] = useState([]);
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [refundMethod, setRefundMethod] = useState('original');

  if (!isVisible) return null;

  const returnReasons = [
    { value: 'defective', label: 'Defective Product', description: 'Product arrived damaged or not working' },
    { value: 'wrong_item', label: 'Wrong Item', description: 'Received different product than ordered' },
    { value: 'not_as_described', label: 'Not as Described', description: 'Product doesn\'t match description' },
    { value: 'quality_issues', label: 'Quality Issues', description: 'Product quality below expectations' },
    { value: 'compatibility', label: 'Compatibility Issues', description: 'Product not compatible with setup' },
    { value: 'changed_mind', label: 'Changed Mind', description: 'No longer need this product' },
    { value: 'other', label: 'Other', description: 'Please specify in description' }
  ];

  const refundMethods = [
    { value: 'original', label: 'Original Payment Method', description: 'Refund to original payment source' },
    { value: 'wallet', label: 'Promac Wallet', description: 'Credit to your Promac wallet for future purchases' },
    { value: 'bank', label: 'Bank Transfer', description: 'Direct transfer to your bank account' }
  ];

  const handleItemSelection = (itemId) => {
    setSelectedItems(prev => 
      prev?.includes(itemId) 
        ? prev?.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmit = () => {
    const returnData = {
      orderId: order?.id,
      type: returnType,
      items: selectedItems,
      reason,
      description,
      pickupDate,
      refundMethod
    };
    onSubmitReturn(returnData);
    onClose();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    })?.format(amount);
  };

  const getSelectedItemsTotal = () => {
    return order?.items?.filter(item => selectedItems?.includes(item?.id))?.reduce((total, item) => total + (item?.price * item?.quantity), 0);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg shadow-premium-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Return/Exchange Request</h2>
            <p className="text-sm text-muted-foreground">Order #{order?.orderNumber}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Return Type Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Request Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setReturnType('return')}
                className={`p-4 border rounded-lg text-left transition-all duration-200 ${
                  returnType === 'return'
                    ? 'border-primary bg-primary/5 shadow-precision' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name="RotateCcw" size={20} className={returnType === 'return' ? 'text-primary' : 'text-muted-foreground'} />
                  <div>
                    <h4 className="font-medium text-foreground">Return</h4>
                    <p className="text-sm text-muted-foreground">Get refund for returned items</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setReturnType('exchange')}
                className={`p-4 border rounded-lg text-left transition-all duration-200 ${
                  returnType === 'exchange' ?'border-primary bg-primary/5 shadow-precision' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name="RefreshCw" size={20} className={returnType === 'exchange' ? 'text-primary' : 'text-muted-foreground'} />
                  <div>
                    <h4 className="font-medium text-foreground">Exchange</h4>
                    <p className="text-sm text-muted-foreground">Replace with different item</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Item Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Select Items</h3>
            <div className="space-y-3">
              {order?.items?.map((item) => (
                <div
                  key={item?.id}
                  className={`p-4 border rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedItems?.includes(item?.id)
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleItemSelection(item?.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                      selectedItems?.includes(item?.id)
                        ? 'border-primary bg-primary' :'border-border'
                    }`}>
                      {selectedItems?.includes(item?.id) && (
                        <Icon name="Check" size={12} className="text-primary-foreground" />
                      )}
                    </div>
                    <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item?.name}</h4>
                      <p className="text-sm text-muted-foreground">{item?.specifications}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">Qty: {item?.quantity}</p>
                      <p className="text-sm text-muted-foreground">{formatCurrency(item?.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedItems?.length > 0 && (
              <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">
                    Selected Items Total:
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    {formatCurrency(getSelectedItemsTotal())}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Reason Selection */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Reason for {returnType}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {returnReasons?.map((reasonOption) => (
                <button
                  key={reasonOption?.value}
                  onClick={() => setReason(reasonOption?.value)}
                  className={`p-3 border rounded-lg text-left transition-all duration-200 ${
                    reason === reasonOption?.value
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                >
                  <h4 className="font-medium text-foreground">{reasonOption?.label}</h4>
                  <p className="text-sm text-muted-foreground">{reasonOption?.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <Input
              label="Additional Details"
              type="textarea"
              placeholder="Please provide additional details about the issue..."
              value={description}
              onChange={(e) => setDescription(e?.target?.value)}
              description="Help us understand the issue better"
              className="min-h-[100px]"
            />
          </div>

          {/* Pickup Date */}
          <div>
            <Input
              label="Preferred Pickup Date"
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e?.target?.value)}
              description="We'll schedule pickup within 2-3 business days"
              min={new Date()?.toISOString()?.split('T')?.[0]}
            />
          </div>

          {/* Refund Method (for returns) */}
          {returnType === 'return' && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Refund Method</h3>
              <div className="space-y-3">
                {refundMethods?.map((method) => (
                  <button
                    key={method?.value}
                    onClick={() => setRefundMethod(method?.value)}
                    className={`w-full p-3 border rounded-lg text-left transition-all duration-200 ${
                      refundMethod === method?.value
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 border-2 rounded-full ${
                        refundMethod === method?.value
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {refundMethod === method?.value && (
                          <div className="w-full h-full rounded-full bg-primary-foreground scale-50"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method?.label}</h4>
                        <p className="text-sm text-muted-foreground">{method?.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={selectedItems?.length === 0 || !reason}
              iconName="Send"
              iconPosition="left"
            >
              Submit {returnType === 'return' ? 'Return' : 'Exchange'} Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnExchangeModal;