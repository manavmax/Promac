import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AddressStep = ({ onNext, formData, setFormData }) => {
  const [selectedAddress, setSelectedAddress] = useState('existing');
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    fullName: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    landmark: '',
    addressType: 'home'
  });

  const savedAddresses = [
    {
      id: 1,
      type: 'home',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      address: '123, MG Road, Sector 15\nGurgaon, Haryana - 122001',
      landmark: 'Near Metro Station',
      isDefault: true
    },
    {
      id: 2,
      type: 'work',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      address: '456, Cyber City, DLF Phase 2\nGurgaon, Haryana - 122002',
      landmark: 'Tower B, 5th Floor',
      isDefault: false
    }
  ];

  const deliverySlots = [
    { id: 1, date: '2025-01-07', day: 'Today', slots: ['10:00 AM - 12:00 PM', '2:00 PM - 4:00 PM', '6:00 PM - 8:00 PM'] },
    { id: 2, date: '2025-01-08', day: 'Tomorrow', slots: ['9:00 AM - 11:00 AM', '12:00 PM - 2:00 PM', '4:00 PM - 6:00 PM'] },
    { id: 3, date: '2025-01-09', day: 'Day After', slots: ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'] }
  ];

  const [selectedSlot, setSelectedSlot] = useState({ date: '2025-01-07', time: '10:00 AM - 12:00 PM' });

  const handleAddressSelect = (addressId) => {
    setSelectedAddress(addressId);
    const address = savedAddresses?.find(addr => addr?.id === addressId);
    setFormData(prev => ({
      ...prev,
      shippingAddress: address
    }));
  };

  const handleNewAddressSubmit = () => {
    if (newAddress?.fullName && newAddress?.phone && newAddress?.addressLine1 && newAddress?.city && newAddress?.pincode) {
      setFormData(prev => ({
        ...prev,
        shippingAddress: { ...newAddress, id: Date.now() }
      }));
      setIsAddingNew(false);
      setSelectedAddress('new');
    }
  };

  const handleNext = () => {
    if ((selectedAddress !== 'new' && selectedAddress) || (selectedAddress === 'new' && formData?.shippingAddress)) {
      setFormData(prev => ({
        ...prev,
        deliverySlot: selectedSlot
      }));
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      {/* Back to Cart Button */}
      <div className="flex justify-start">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.history.back()}
          iconName="ArrowLeft"
          iconPosition="left"
          iconSize={16}
          className="border-gray-300 text-white hover:border-black hover:text-white font-light"
        >
          Back to Cart
        </Button>
      </div>
      
      {/* Delivery Address Section */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-light text-black flex items-center">
            <Icon name="MapPin" size={24} className="mr-3 text-red-600" />
            Delivery Address
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAddingNew(true)}
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
            className="border-black bg-black text-white hover:bg-white hover:text-black font-light"
          >
            Add New Address
          </Button>
        </div>

        {/* Saved Addresses */}
        <div className="space-y-4 mb-6">
          {savedAddresses?.map((address) => (
            <div
              key={address?.id}
              className={`border p-4 cursor-pointer transition-all duration-200 ${
                selectedAddress === address?.id
                  ? 'border-black bg-gray-50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50'
              }`}
              onClick={() => handleAddressSelect(address?.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                    selectedAddress === address?.id
                      ? 'border-black bg-black' :'border-gray-300'
                  }`}>
                    {selectedAddress === address?.id && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-light rounded-full ${
                        address?.type === 'home' ?'bg-red-100 text-red-600' :'bg-gray-100 text-gray-600'
                      }`}>
                        {address?.type === 'home' ? 'Home' : 'Work'}
                      </span>
                      {address?.isDefault && (
                        <span className="px-2 py-1 text-xs font-light bg-gray-100 text-gray-600 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <h3 className="font-light text-black">{address?.name}</h3>
                    <p className="text-sm text-gray-600 font-light mt-1">{address?.phone}</p>
                    <p className="text-sm text-black font-light mt-2 whitespace-pre-line">{address?.address}</p>
                    {address?.landmark && (
                      <p className="text-sm text-gray-600 font-light mt-1">Landmark: {address?.landmark}</p>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 hover:text-black"
                  iconName="Edit"
                  iconSize={16}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add New Address Form */}
        {isAddingNew && (
          <div className="border border-border rounded-lg p-6 bg-muted/20">
            <h3 className="text-lg font-medium text-black mb-4">Add New Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter full name"
                value={newAddress?.fullName}
                onChange={(e) => setNewAddress(prev => ({ ...prev, fullName: e?.target?.value }))}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={newAddress?.phone}
                onChange={(e) => setNewAddress(prev => ({ ...prev, phone: e?.target?.value }))}
                required
              />
              <div className="md:col-span-2">
                <Input
                  label="Address Line 1"
                  type="text"
                  placeholder="House/Flat/Office No., Building Name"
                  value={newAddress?.addressLine1}
                  onChange={(e) => setNewAddress(prev => ({ ...prev, addressLine1: e?.target?.value }))}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Input
                  label="Address Line 2"
                  type="text"
                  placeholder="Area, Street, Sector, Village"
                  value={newAddress?.addressLine2}
                  onChange={(e) => setNewAddress(prev => ({ ...prev, addressLine2: e?.target?.value }))}
                />
              </div>
              <Input
                label="City"
                type="text"
                placeholder="Enter city"
                value={newAddress?.city}
                onChange={(e) => setNewAddress(prev => ({ ...prev, city: e?.target?.value }))}
                required
              />
              <Input
                label="State"
                type="text"
                placeholder="Enter state"
                value={newAddress?.state}
                onChange={(e) => setNewAddress(prev => ({ ...prev, state: e?.target?.value }))}
                required
              />
              <Input
                label="PIN Code"
                type="text"
                placeholder="110001"
                value={newAddress?.pincode}
                onChange={(e) => setNewAddress(prev => ({ ...prev, pincode: e?.target?.value }))}
                required
              />
              <Input
                label="Landmark (Optional)"
                type="text"
                placeholder="Near Metro Station"
                value={newAddress?.landmark}
                onChange={(e) => setNewAddress(prev => ({ ...prev, landmark: e?.target?.value }))}
              />
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Button
                variant="default"
                onClick={handleNewAddressSubmit}
                iconName="Check"
                iconPosition="left"
                iconSize={16}
              >
                Save Address
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsAddingNew(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* Delivery Schedule Section */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h2 className="text-xl font-light text-black flex items-center mb-6">
          <Icon name="Clock" size={24} className="mr-3 text-red-600" />
          Delivery Schedule
        </h2>

        <div className="space-y-4">
          {deliverySlots?.map((slot) => (
            <div key={slot?.id} className="border border-gray-200 p-4">
              <h3 className="font-light text-black mb-3">
                {slot?.day} ({new Date(slot.date)?.toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  day: 'numeric', 
                  month: 'short' 
                })})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {slot?.slots?.map((timeSlot) => (
                  <button
                    key={timeSlot}
                    onClick={() => setSelectedSlot({ date: slot?.date, time: timeSlot })}
                    className={`p-3 text-sm font-light border transition-all duration-200 ${
                      selectedSlot?.date === slot?.date && selectedSlot?.time === timeSlot
                        ? 'border-black bg-black text-white shadow-sm'
                        : 'border-gray-300 text-black hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {timeSlot}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 border border-gray-200">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-red-600 mt-0.5" />
            <div className="text-sm text-gray-600">
              <p className="font-light text-black mb-1">Delivery Information:</p>
              <ul className="space-y-1 font-light">
                <li>• Free delivery on orders above ₹5,000</li>
                <li>• Express delivery available for urgent orders</li>
                <li>• Technical installation support available</li>
                <li>• SMS & WhatsApp tracking updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Continue Button */}
      <div className="flex justify-end">
        <Button
          variant="default"
          size="lg"
          onClick={handleNext}
          disabled={!selectedAddress || (!formData?.shippingAddress && selectedAddress !== 'existing')}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={20}
          className="bg-black hover:bg-gray-800 text-white font-light"
        >
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default AddressStep;