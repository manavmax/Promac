import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const BulkOrderingInterface = () => {
  const [activeTab, setActiveTab] = useState('quick-order');
  const [orderItems, setOrderItems] = useState([
    { id: 1, productCode: 'SW-001', productName: 'Modular Switch 16A', quantity: 100, unitPrice: 125, total: 12500 },
    { id: 2, productCode: 'CB-015', productName: 'MCB 32A Single Pole', quantity: 50, unitPrice: 285, total: 14250 },
    { id: 3, productCode: 'WR-008', productName: 'Copper Wire 2.5mm²', quantity: 200, unitPrice: 45, total: 9000 }
  ]);

  const [recurringOrders, setRecurringOrders] = useState([
    {
      id: 1,
      name: 'Monthly Maintenance Supplies',
      frequency: 'Monthly',
      nextDelivery: '2025-08-15',
      items: 15,
      value: '₹45,000',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Quarterly Project Materials',
      frequency: 'Quarterly',
      nextDelivery: '2025-09-01',
      items: 8,
      value: '₹1,25,000',
      status: 'Active'
    }
  ]);

  const [newRecurringOrder, setNewRecurringOrder] = useState({
    name: '',
    frequency: '',
    startDate: '',
    deliveryLocation: ''
  });

  const deliveryLocations = [
    { value: 'mumbai-office', label: 'Mumbai Office - Andheri East' },
    { value: 'mumbai-warehouse', label: 'Mumbai Warehouse - Bhiwandi' },
    { value: 'pune-site', label: 'Pune Construction Site - Hinjewadi' },
    { value: 'delhi-branch', label: 'Delhi Branch - Connaught Place' }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'half-yearly', label: 'Half Yearly' }
  ];

  const tabs = [
    { id: 'quick-order', label: 'Quick Order', icon: 'Zap' },
    { id: 'csv-upload', label: 'CSV Upload', icon: 'Upload' },
    { id: 'recurring-orders', label: 'Recurring Orders', icon: 'RotateCcw' },
    { id: 'multi-location', label: 'Multi-Location', icon: 'MapPin' }
  ];

  const addOrderItem = () => {
    const newItem = {
      id: Date.now(),
      productCode: '',
      productName: '',
      quantity: 0,
      unitPrice: 0,
      total: 0
    };
    setOrderItems([...orderItems, newItem]);
  };

  const updateOrderItem = (id, field, value) => {
    setOrderItems(items => 
      items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'unitPrice') {
            updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
          }
          return updatedItem;
        }
        return item;
      })
    );
  };

  const removeOrderItem = (id) => {
    setOrderItems(items => items.filter(item => item.id !== id));
  };

  const calculateOrderTotal = () => {
    return orderItems.reduce((sum, item) => sum + item.total, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleRecurringOrderChange = (field, value) => {
    setNewRecurringOrder(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const createRecurringOrder = () => {
    if (newRecurringOrder.name && newRecurringOrder.frequency && newRecurringOrder.startDate && newRecurringOrder.deliveryLocation) {
      const newOrder = {
        id: Date.now(),
        name: newRecurringOrder.name,
        frequency: newRecurringOrder.frequency,
        nextDelivery: newRecurringOrder.startDate,
        items: 0,
        value: '₹0',
        status: 'Active'
      };
      setRecurringOrders(prev => [...prev, newOrder]);
      setNewRecurringOrder({
        name: '',
        frequency: '',
        startDate: '',
        deliveryLocation: ''
      });
    }
  };

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Bulk Ordering Interface
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Streamlined bulk ordering with CSV upload, recurring orders, and multi-location delivery coordination for efficient procurement management.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="glass-ios rounded-xl p-2 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium brand-transition ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-cyan-600/40 to-indigo-700/40 text-white shadow-xl'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon name={tab.icon} size={18} color={activeTab === tab.id ? '#FFFFFF' : '#93C5FD'} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'quick-order' && (
                <div className="glass-ios rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                    <Icon name="Zap" size={24} color="#FFFFFF" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quick Order Entry</h3>
                </div>
                <Button
                  variant="outline"
                  iconName="Plus"
                  iconPosition="left"
                  onClick={addOrderItem}
                  className="bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  Add Item
                </Button>
              </div>

              {/* Order Items Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full">
                   <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-2 font-semibold text-white">Product Code</th>
                      <th className="text-left py-3 px-2 font-semibold text-white">Product Name</th>
                      <th className="text-left py-3 px-2 font-semibold text-white">Quantity</th>
                      <th className="text-left py-3 px-2 font-semibold text-white">Unit Price</th>
                      <th className="text-left py-3 px-2 font-semibold text-white">Total</th>
                      <th className="text-left py-3 px-2 font-semibold text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id} className="border-b border-white/5">
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={item.productCode}
                            onChange={(e) => updateOrderItem(item.id, 'productCode', e.target.value)}
                            className="w-full px-3 py-2 border border-white/10 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                            placeholder="SW-001"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="text"
                            value={item.productName}
                            onChange={(e) => updateOrderItem(item.id, 'productName', e.target.value)}
                            className="w-full px-3 py-2 border border-white/10 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                            placeholder="Product name"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateOrderItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-white/10 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                            placeholder="0"
                          />
                        </td>
                        <td className="py-3 px-2">
                          <input
                            type="number"
                            value={item.unitPrice}
                            onChange={(e) => updateOrderItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-white/10 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                            placeholder="0.00"
                          />
                        </td>
                        <td className="py-3 px-2 font-semibold text-white">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="py-3 px-2">
                          <button
                            onClick={() => removeOrderItem(item.id)}
                            className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg brand-transition"
                          >
                            <Icon name="Trash2" size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Order Summary */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-lg font-semibold text-white">
                  Total Items: {orderItems.length}
                </div>
                <div className="text-2xl font-bold text-white">
                  Order Total: {formatCurrency(calculateOrderTotal())}
                </div>
              </div>

              {/* Delivery Options */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <Select
                  label="Delivery Location"
                  options={deliveryLocations}
                  placeholder="Select delivery location"
                  className="select-light"
                />
                <Input
                  label="Preferred Delivery Date"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="input-light"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="cta-primary flex-1"
                >
                  Place Order
                </Button>
                 <Button
                  variant="outline"
                  size="lg"
                  iconName="Save"
                  iconPosition="left"
                   className="bg-white text-gray-900 border-white hover:bg-gray-100"
                >
                  Save as Draft
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'csv-upload' && (
                <div className="glass-ios rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                  <Icon name="Upload" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-2xl font-bold text-white">CSV Upload</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Upload Area */}
                <div>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-white/40 brand-transition">
                    <Icon name="Upload" size={48} color="#94A3B8" className="mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Upload CSV File</h4>
                    <p className="text-white/70 mb-4">
                      Drag and drop your CSV file here, or click to browse
                    </p>
                    <Button
                      variant="outline"
                      iconName="FileText"
                      iconPosition="left"
                      className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
                    >
                      Choose File
                    </Button>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      iconName="Download"
                      iconPosition="left"
                      className="text-white hover:bg-white/10"
                    >
                      Download CSV Template
                    </Button>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">CSV Format Instructions</h4>
                  <div className="space-y-4">
                    <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2">Required Columns</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• Product Code (e.g., SW-001)</li>
                        <li>• Quantity (numeric value)</li>
                        <li>• Delivery Location (optional)</li>
                        <li>• Special Instructions (optional)</li>
                      </ul>
                    </div>

                    <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2">File Requirements</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• Maximum file size: 5MB</li>
                        <li>• Supported format: .csv only</li>
                        <li>• Maximum 1000 items per upload</li>
                        <li>• UTF-8 encoding recommended</li>
                      </ul>
                    </div>

                    <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-4">
                      <h5 className="font-medium text-white mb-2">Pro Tips</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        <li>• Use our template for best results</li>
                        <li>• Validate product codes before upload</li>
                        <li>• Check inventory availability</li>
                        <li>• Review pricing before confirming</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recurring-orders' && (
            <div className="glass-ios rounded-2xl p-8 overflow-visible">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600">
                    <Icon name="RotateCcw" size={24} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Recurring Orders</h3>
                </div>
                <Button
                  variant="outline"
                  iconName="Plus"
                  iconPosition="left"
                  className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
                >
                  Create New Schedule
                </Button>
              </div>

              {/* Existing Recurring Orders */}
              <div className="space-y-4 mb-8">
                {recurringOrders.map((order) => (
                  <div key={order.id} className="glass-ios rounded-xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600">
                          <Icon name="Package" size={20} color="white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{order.name}</h4>
                          <div className="flex items-center space-x-4 text-sm text-white/70">
                            <span>{order.frequency}</span>
                            <span>•</span>
                            <span>{order.items} items</span>
                            <span>•</span>
                            <span>{order.value}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm text-white/70">Next Delivery</div>
                          <div className="font-medium text-white">{order.nextDelivery}</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Active' ?'bg-green-500/20 text-green-400' :'bg-gray-500/20 text-gray-300'
                        }`}>
                          {order.status}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-white hover:bg-white/10 rounded-lg brand-transition">
                            <Icon name="Edit" size={16} />
                          </button>
                          <button className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg brand-transition">
                            <Icon name="Trash2" size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Create New Recurring Order */}
              <div className="glass-ios rounded-xl p-6 overflow-visible">
                <h4 className="font-semibold text-white mb-4">Create New Recurring Order</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Input
                    label="Order Name"
                    placeholder="e.g., Monthly Supplies"
                    value={newRecurringOrder.name}
                    onChange={(e) => handleRecurringOrderChange('name', e.target.value)}
                    className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                  />
                  <Select
                    label="Frequency"
                    options={frequencyOptions}
                    value={newRecurringOrder.frequency}
                    onChange={(value) => handleRecurringOrderChange('frequency', value)}
                    placeholder="Select frequency"
                    className="select-light"
                  />
                  <Input
                    label="Start Date"
                    type="date"
                    value={newRecurringOrder.startDate}
                    onChange={(e) => handleRecurringOrderChange('startDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="bg-white text-black border-gray-300"
                  />
                  <Select
                    label="Delivery Location"
                    options={deliveryLocations}
                    value={newRecurringOrder.deliveryLocation}
                    onChange={(value) => handleRecurringOrderChange('deliveryLocation', value)}
                    placeholder="Select location"
                    className="select-light"
                  />
                </div>
                <div className="mt-4">
                  <Button
                    variant="default"
                    iconName="Plus"
                    iconPosition="left"
                    className="bg-[#FF0C0D] text-white hover:bg-[#FF0C0D]/90"
                    onClick={createRecurringOrder}
                    disabled={!newRecurringOrder.name || !newRecurringOrder.frequency || !newRecurringOrder.startDate || !newRecurringOrder.deliveryLocation}
                  >
                    Create Schedule
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'multi-location' && (
                <div className="glass-ios rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20 ring-1 ring-white/10">
                  <Icon name="MapPin" size={24} color="#FFFFFF" />
                </div>
                <h3 className="text-2xl font-bold text-white">Multi-Location Delivery</h3>
              </div>

              <div className="space-y-6">
                {/* Location 1 */}
                <div className="glass-effect rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Mumbai Office - Andheri East</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Trash2"
                      className="text-red-400 hover:bg-red-500/10"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <Input
                      label="Product Code"
                      placeholder="SW-001"
                      className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                    />
                    <Input
                      label="Quantity"
                      type="number"
                      placeholder="100"
                      className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                    />
                    <Input
                      label="Delivery Date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-white text-black border-gray-300"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Plus"
                    iconPosition="left"
                    className="bg-white text-black border-gray-300 hover:bg-white hover:text-black"
                  >
                    Add Item
                  </Button>
                </div>

                {/* Location 2 */}
                <div className="glass-effect rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white">Pune Construction Site - Hinjewadi</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Trash2"
                      className="text-red-400 hover:bg-red-500/10"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 mb-4">
                    <Input
                      label="Product Code"
                      placeholder="CB-015"
                      className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                    />
                    <Input
                      label="Quantity"
                      type="number"
                      placeholder="50"
                      className="bg-white text-black border-gray-300 placeholder:text-gray-500"
                    />
                    <Input
                      label="Delivery Date"
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="bg-white text-black border-gray-300"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Plus"
                    iconPosition="left"
                    className="bg-white text-black border-gray-300 hover:bg-white hover:text-black"
                  >
                    Add Item
                  </Button>
                </div>

                {/* Add Location */}
                <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center">
                  <Icon name="MapPin" size={32} color="#94A3B8" className="mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">Add Another Location</h4>
                  <p className="text-white/70 mb-4">
                    Coordinate deliveries to multiple locations in a single order
                  </p>
                  <Button
                    variant="outline"
                    iconName="Plus"
                    iconPosition="left"
                    className="bg-white text-black border-gray-300 hover:bg-white hover:text-black"
                  >
                    Add Location
                  </Button>
                </div>

                {/* Order Summary */}
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-4">Multi-Location Order Summary</h4>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-sm text-white/70">Locations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">150</div>
                      <div className="text-sm text-white/70">Total Items</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">₹26,750</div>
                      <div className="text-sm text-white/70">Total Value</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Truck"
                    iconPosition="left"
                    className="cta-primary flex-1"
                  >
                    Coordinate Delivery
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Schedule Delivery
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BulkOrderingInterface;