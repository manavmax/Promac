import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AddressBookSection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "Home",
      name: "Rajesh Kumar",
      address: "A-204, Shanti Apartments, Sector 15",
      city: "Navi Mumbai",
      state: "Maharashtra",
      pincode: "400614",
      phone: "+91 98765 43210",
      isDefault: true,
      projectType: "Residential"
    },
    {
      id: 2,
      type: "Office",
      name: "Kumar Electrical Solutions",
      address: "Shop No. 12, Electrical Market, Lamington Road",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400007",
      phone: "+91 98765 43211",
      isDefault: false,
      projectType: "Commercial"
    },
    {
      id: 3,
      type: "Site",
      name: "Sunrise Towers Project",
      address: "Plot No. 45, MIDC Industrial Area",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411019",
      phone: "+91 98765 43212",
      isDefault: false,
      projectType: "Industrial"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    type: "",
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    projectType: "Residential"
  });

  const handleAddAddress = () => {
    const address = {
      id: Date.now(),
      ...newAddress,
      isDefault: addresses?.length === 0
    };
    setAddresses([...addresses, address]);
    setNewAddress({
      type: "",
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      projectType: "Residential"
    });
    setShowAddForm(false);
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses?.map(addr => ({
      ...addr,
      isDefault: addr?.id === id
    })));
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses?.filter(addr => addr?.id !== id));
  };

  const getProjectTypeColor = (type) => {
    switch (type) {
      case 'Residential': return 'text-blue-600 bg-blue-50';
      case 'Commercial': return 'text-green-600 bg-green-50';
      case 'Industrial': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getAddressTypeIcon = (type) => {
    switch (type) {
      case 'Home': return 'Home';
      case 'Office': return 'Building2';
      case 'Site': return 'MapPin';
      default: return 'MapPin';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="MapPin" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Address Book</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAddForm(true)}
          iconName="Plus"
          iconPosition="left"
          iconSize={16}
        >
          Add Address
        </Button>
      </div>
      {/* Add Address Form */}
      {showAddForm && (
        <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
          <h3 className="text-lg font-medium text-foreground mb-4">Add New Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Address Type"
              type="text"
              placeholder="Home, Office, Site, etc."
              value={newAddress?.type}
              onChange={(e) => setNewAddress({...newAddress, type: e?.target?.value})}
              required
            />
            <Input
              label="Contact Name"
              type="text"
              placeholder="Full name"
              value={newAddress?.name}
              onChange={(e) => setNewAddress({...newAddress, name: e?.target?.value})}
              required
            />
            <div className="md:col-span-2">
              <Input
                label="Address"
                type="text"
                placeholder="Street address, building, apartment"
                value={newAddress?.address}
                onChange={(e) => setNewAddress({...newAddress, address: e?.target?.value})}
                required
              />
            </div>
            <Input
              label="City"
              type="text"
              placeholder="City"
              value={newAddress?.city}
              onChange={(e) => setNewAddress({...newAddress, city: e?.target?.value})}
              required
            />
            <Input
              label="State"
              type="text"
              placeholder="State"
              value={newAddress?.state}
              onChange={(e) => setNewAddress({...newAddress, state: e?.target?.value})}
              required
            />
            <Input
              label="PIN Code"
              type="text"
              placeholder="6-digit PIN code"
              value={newAddress?.pincode}
              onChange={(e) => setNewAddress({...newAddress, pincode: e?.target?.value})}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Contact phone number"
              value={newAddress?.phone}
              onChange={(e) => setNewAddress({...newAddress, phone: e?.target?.value})}
              required
            />
          </div>
          <div className="flex items-center justify-end space-x-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleAddAddress}
              iconName="Save"
              iconPosition="left"
              iconSize={16}
            >
              Save Address
            </Button>
          </div>
        </div>
      )}
      {/* Address List */}
      <div className="space-y-4">
        {addresses?.map((address) => (
          <div
            key={address?.id}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              address?.isDefault
                ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  address?.isDefault ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={getAddressTypeIcon(address?.type)} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-base font-medium text-foreground">{address?.type}</h3>
                    {address?.isDefault && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Default
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getProjectTypeColor(address?.projectType)}`}>
                      {address?.projectType}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{address?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {address?.address}, {address?.city}, {address?.state} - {address?.pincode}
                  </p>
                  <p className="text-sm text-muted-foreground">{address?.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                {!address?.isDefault && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSetDefault(address?.id)}
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
                  <span className="sr-only">Edit address</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteAddress(address?.id)}
                  iconName="Trash2"
                  iconSize={16}
                  className="text-destructive hover:text-destructive"
                >
                  <span className="sr-only">Delete address</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {addresses?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="MapPin" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No addresses added</h3>
          <p className="text-muted-foreground mb-4">Add your delivery addresses for faster checkout</p>
          <Button
            variant="outline"
            onClick={() => setShowAddForm(true)}
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
          >
            Add First Address
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddressBookSection;