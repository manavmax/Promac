import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BusinessStep = ({ onNext, onBack, formData, setFormData }) => {
  const [businessDetails, setBusinessDetails] = useState({
    companyName: 'Kumar Electrical Works',
    gstNumber: '07AABCU9603R1ZX',
    panNumber: 'AABCU9603R',
    billingAddress: {
      addressLine1: '123, MG Road, Sector 15',
      addressLine2: 'Industrial Area',
      city: 'Gurgaon',
      state: 'Haryana',
      pincode: '122001'
    },
    contactPerson: 'Rajesh Kumar',
    designation: 'Proprietor',
    email: 'rajesh@kumarelectrical.com',
    phone: '+91 98765 43210'
  });

  const [invoicePreferences, setInvoicePreferences] = useState({
    invoiceType: 'tax_invoice',
    deliveryNote: true,
    emailInvoice: true,
    whatsappInvoice: false,
    printedInvoice: true
  });

  const [projectDetails, setProjectDetails] = useState({
    projectName: 'Residential Complex - Phase 2',
    projectCode: 'RC-P2-2025',
    siteAddress: 'Sector 45, Gurgaon',
    expectedDelivery: '2025-01-15',
    specialInstructions: 'Deliver to site office. Contact site engineer before delivery.'
  });

  const [isSameAsBilling, setIsSameAsBilling] = useState(true);

  const handleBusinessDetailChange = (field, value) => {
    setBusinessDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBillingAddressChange = (field, value) => {
    setBusinessDetails(prev => ({
      ...prev,
      billingAddress: {
        ...prev?.billingAddress,
        [field]: value
      }
    }));
  };

  const handleNext = () => {
    const businessData = {
      businessDetails,
      invoicePreferences,
      projectDetails,
      isSameAsBilling
    };
    
    setFormData(prev => ({
      ...prev,
      businessInfo: businessData
    }));
    onNext();
  };

  return (
    <div className="space-y-8">
      {/* Business Information */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h2 className="text-xl font-light text-black flex items-center mb-6">
          <Icon name="Building2" size={24} className="mr-3 text-primary" />
          Business Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Input
              label="Company Name"
              type="text"
              placeholder="Enter company name"
              value={businessDetails?.companyName}
              onChange={(e) => handleBusinessDetailChange('companyName', e?.target?.value)}
              required
            />
          </div>

          <Input
            label="GST Number"
            type="text"
            placeholder="07AABCU9603R1ZX"
            value={businessDetails?.gstNumber}
            onChange={(e) => handleBusinessDetailChange('gstNumber', e?.target?.value)}
            description="15-digit GST identification number"
            required
          />

          <Input
            label="PAN Number"
            type="text"
            placeholder="AABCU9603R"
            value={businessDetails?.panNumber}
            onChange={(e) => handleBusinessDetailChange('panNumber', e?.target?.value)}
            description="10-character PAN number"
            required
          />

          <Input
            label="Contact Person"
            type="text"
            placeholder="Enter contact person name"
            value={businessDetails?.contactPerson}
            onChange={(e) => handleBusinessDetailChange('contactPerson', e?.target?.value)}
            required
          />

          <Input
            label="Designation"
            type="text"
            placeholder="Enter designation"
            value={businessDetails?.designation}
            onChange={(e) => handleBusinessDetailChange('designation', e?.target?.value)}
            required
          />

          <Input
            label="Business Email"
            type="email"
            placeholder="business@company.com"
            value={businessDetails?.email}
            onChange={(e) => handleBusinessDetailChange('email', e?.target?.value)}
            required
          />

          <Input
            label="Business Phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={businessDetails?.phone}
            onChange={(e) => handleBusinessDetailChange('phone', e?.target?.value)}
            required
          />
        </div>
      </div>
      {/* Billing Address */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-light text-black">Billing Address</h3>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isSameAsBilling}
              onChange={(e) => setIsSameAsBilling(e?.target?.checked)}
              className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
            />
            <span className="text-sm text-black font-light">Same as delivery address</span>
          </label>
        </div>

        {!isSameAsBilling && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Input
                label="Address Line 1"
                type="text"
                placeholder="Building, Street"
                value={businessDetails?.billingAddress?.addressLine1}
                onChange={(e) => handleBillingAddressChange('addressLine1', e?.target?.value)}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Input
                label="Address Line 2"
                type="text"
                placeholder="Area, Landmark"
                value={businessDetails?.billingAddress?.addressLine2}
                onChange={(e) => handleBillingAddressChange('addressLine2', e?.target?.value)}
              />
            </div>
            <Input
              label="City"
              type="text"
              placeholder="Enter city"
              value={businessDetails?.billingAddress?.city}
              onChange={(e) => handleBillingAddressChange('city', e?.target?.value)}
              required
            />
            <Input
              label="State"
              type="text"
              placeholder="Enter state"
              value={businessDetails?.billingAddress?.state}
              onChange={(e) => handleBillingAddressChange('state', e?.target?.value)}
              required
            />
            <Input
              label="PIN Code"
              type="text"
              placeholder="110001"
              value={businessDetails?.billingAddress?.pincode}
              onChange={(e) => handleBillingAddressChange('pincode', e?.target?.value)}
              required
            />
          </div>
        )}
      </div>
      {/* Project Details */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h3 className="text-lg font-light text-black mb-6 flex items-center">
          <Icon name="FolderOpen" size={20} className="mr-2 text-primary" />
          Project Details (Optional)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Project Name"
            type="text"
            placeholder="Enter project name"
            value={projectDetails?.projectName}
            onChange={(e) => setProjectDetails(prev => ({ ...prev, projectName: e?.target?.value }))}
          />

          <Input
            label="Project Code"
            type="text"
            placeholder="Enter project code"
            value={projectDetails?.projectCode}
            onChange={(e) => setProjectDetails(prev => ({ ...prev, projectCode: e?.target?.value }))}
          />

          <Input
            label="Site Address"
            type="text"
            placeholder="Enter site address"
            value={projectDetails?.siteAddress}
            onChange={(e) => setProjectDetails(prev => ({ ...prev, siteAddress: e?.target?.value }))}
          />

          <Input
            label="Expected Delivery"
            type="date"
            value={projectDetails?.expectedDelivery}
            onChange={(e) => setProjectDetails(prev => ({ ...prev, expectedDelivery: e?.target?.value }))}
          />

          <div className="md:col-span-2">
            <label className="block text-sm font-light text-black mb-2">
              Special Instructions
            </label>
            <textarea
              placeholder="Any special delivery or handling instructions..."
              value={projectDetails?.specialInstructions}
              onChange={(e) => setProjectDetails(prev => ({ ...prev, specialInstructions: e?.target?.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-none"
            />
          </div>
        </div>
      </div>
      {/* Invoice Preferences */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-none p-6">
        <h3 className="text-lg font-light text-black mb-6 flex items-center">
          <Icon name="FileText" size={20} className="mr-2 text-primary" />
          Invoice Preferences
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-light text-black mb-3">Invoice Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'tax_invoice', name: 'Tax Invoice', description: 'Standard GST invoice' },
                { id: 'proforma', name: 'Proforma Invoice', description: 'Quotation format' }
              ]?.map((type) => (
                <div
                  key={type?.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    invoicePreferences?.invoiceType === type?.id
                      ? 'border-black bg-black/10' :'border-gray-200 hover:border-black/50'
                  }`}
                  onClick={() => setInvoicePreferences(prev => ({ ...prev, invoiceType: type?.id }))}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      invoicePreferences?.invoiceType === type?.id
                        ? 'border-black bg-black' :'border-gray-200'
                    }`}>
                      {invoicePreferences?.invoiceType === type?.id && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-light text-black">{type?.name}</h4>
                      <p className="text-sm text-gray-600">{type?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-light text-black mb-3">Delivery Options</label>
            <div className="space-y-3">
              {[
                { key: 'emailInvoice', label: 'Email Invoice', description: 'Send invoice to registered email' },
                { key: 'whatsappInvoice', label: 'WhatsApp Invoice', description: 'Send invoice via WhatsApp' },
                { key: 'printedInvoice', label: 'Printed Invoice', description: 'Include printed copy with delivery' },
                { key: 'deliveryNote', label: 'Delivery Note', description: 'Include delivery challan' }
              ]?.map((option) => (
                <label key={option?.key} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={invoicePreferences?.[option?.key]}
                    onChange={(e) => setInvoicePreferences(prev => ({ 
                      ...prev, 
                      [option?.key]: e?.target?.checked 
                    }))}
                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2 mt-0.5"
                  />
                  <div>
                    <span className="text-sm font-light text-black">{option?.label}</span>
                    <p className="text-xs text-gray-600">{option?.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* GST Information */}
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-primary mt-0.5" />
          <div className="text-sm text-gray-600">
            <p className="font-light text-black mb-2">GST Information:</p>
            <ul className="space-y-1">
              <li>• GST will be calculated based on your registered state</li>
              <li>• IGST applicable for inter-state transactions</li>
              <li>• CGST + SGST applicable for intra-state transactions</li>
              <li>• Input Tax Credit (ITC) eligible as per GST rules</li>
              <li>• E-invoice will be generated for orders above ₹5,00,000</li>
            </ul>
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
          Back to Payment
        </Button>
        
        <Button
          variant="default"
          size="lg"
          onClick={handleNext}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={20}
          className="bg-black hover:bg-gray-800 text-white font-light"
        >
          Review Order
        </Button>
      </div>
    </div>
  );
};

export default BusinessStep;