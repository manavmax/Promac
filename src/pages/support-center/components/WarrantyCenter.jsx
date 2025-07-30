import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';


const WarrantyCenter = () => {
  const [activeTab, setActiveTab] = useState('check');
  const [warrantyNumber, setWarrantyNumber] = useState('');
  const [claimForm, setClaimForm] = useState({
    productModel: '',
    purchaseDate: '',
    issueDescription: '',
    contactPhone: '',
    contactEmail: ''
  });

  const warrantyStatuses = [
    {
      id: 'WR2025001234',
      productName: 'Promac 32A MCB - Series Pro',
      model: 'PM-MCB-32A-PRO',
      purchaseDate: '2024-08-15',
      warrantyPeriod: '5 years',
      status: 'Active',
      expiryDate: '2029-08-15',
      registeredTo: 'Amit Sharma Electricals',
      serialNumber: 'PM240815001234',
      coverageType: 'Comprehensive'
    },
    {
      id: 'WR2025001235',
      productName: 'Promac ELCB 40A/30mA',
      model: 'PM-ELCB-40A-30MA',
      purchaseDate: '2024-06-20',
      warrantyPeriod: '3 years',
      status: 'Claim Processed',
      expiryDate: '2027-06-20',
      registeredTo: 'Mumbai Residential Complex',
      serialNumber: 'PM240620001235',
      coverageType: 'Standard'
    }
  ];

  const activeClaims = [
    {
      id: 'CL2025000123',
      warrantyId: 'WR2025001234',
      productName: 'Promac 32A MCB - Series Pro',
      issueType: 'Frequent Tripping',
      submittedDate: '2025-01-20',
      status: 'Under Review',
      expectedResolution: '2025-01-30',
      assignedTechnician: 'Rajesh Kumar',
      technicianPhone: '+91 98765 43210',
      updates: [
        { date: '2025-01-20', status: 'Claim Submitted', description: 'Initial claim received and documented' },
        { date: '2025-01-22', status: 'Technical Review', description: 'Product specifications verified' },
        { date: '2025-01-25', status: 'Under Review', description: 'Technician assigned for evaluation' }
      ]
    },
    {
      id: 'CL2025000124',
      warrantyId: 'WR2025001235',
      productName: 'Promac ELCB 40A/30mA',
      issueType: 'Physical Damage',
      submittedDate: '2025-01-18',
      status: 'Approved',
      expectedResolution: '2025-01-28',
      assignedTechnician: 'Priya Patel',
      technicianPhone: '+91 87654 32109',
      updates: [
        { date: '2025-01-18', status: 'Claim Submitted', description: 'Claim with photos submitted' },
        { date: '2025-01-19', status: 'Documentation Review', description: 'Photos and purchase proof verified' },
        { date: '2025-01-21', status: 'Approved', description: 'Replacement approved, shipping initiated' }
      ]
    }
  ];

  const handleWarrantyCheck = (e) => {
    e.preventDefault();
    // Mock warranty check logic
    console.log('Checking warranty for:', warrantyNumber);
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    // Mock claim submission logic
    console.log('Submitting claim:', claimForm);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-brand-green text-white';
      case 'Expired': return 'bg-red-500 text-white';
      case 'Claim Processed': return 'bg-brand-amber text-brand-navy';
      case 'Under Review': return 'bg-action-blue text-white';
      case 'Approved': return 'bg-brand-green text-white';
      case 'Rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Warranty Center
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Check warranty status, submit claims, and track your product coverage
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8">
        {[
          { id: 'check', name: 'Check Warranty', icon: 'Search' },
          { id: 'claim', name: 'Submit Claim', icon: 'FileText' },
          { id: 'track', name: 'Track Claims', icon: 'Truck' },
          { id: 'coverage', name: 'Coverage Info', icon: 'Shield' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium brand-transition m-1 ${
              activeTab === tab.id
                ? 'bg-brand-navy text-white shadow-primary'
                : 'bg-white text-text-primary border border-gray-200 hover:border-brand-navy hover:text-brand-navy'
            }`}
          >
            <Icon name={tab.icon} size={18} />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Check Warranty Tab */}
      {activeTab === 'check' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">Check Warranty Status</h3>
            
            <form onSubmit={handleWarrantyCheck} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  label="Warranty Number or Serial Number"
                  type="text"
                  value={warrantyNumber}
                  onChange={(e) => setWarrantyNumber(e.target.value)}
                  placeholder="Enter warranty number (e.g., WR2025001234)"
                  className="flex-1"
                  required
                />
                <div className="sm:pt-6">
                  <Button
                    type="submit"
                    variant="default"
                    iconName="Search"
                    iconPosition="left"
                    className="bg-brand-navy hover:bg-brand-navy/90 w-full sm:w-auto"
                  >
                    Check Status
                  </Button>
                </div>
              </div>
            </form>

            {/* Sample Warranty Results */}
            <div className="space-y-6">
              {warrantyStatuses.map((warranty) => (
                <div key={warranty.id} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary">{warranty.productName}</h4>
                      <p className="text-text-secondary">Model: {warranty.model}</p>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0 ${getStatusColor(warranty.status)}`}>
                      {warranty.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-text-secondary">Warranty ID:</span>
                      <p className="font-medium text-text-primary">{warranty.id}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Purchase Date:</span>
                      <p className="font-medium text-text-primary">{new Date(warranty.purchaseDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Warranty Period:</span>
                      <p className="font-medium text-text-primary">{warranty.warrantyPeriod}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Expires On:</span>
                      <p className="font-medium text-text-primary">{new Date(warranty.expiryDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Registered To:</span>
                      <p className="font-medium text-text-primary">{warranty.registeredTo}</p>
                    </div>
                    <div>
                      <span className="text-text-secondary">Coverage Type:</span>
                      <p className="font-medium text-text-primary">{warranty.coverageType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Submit Claim Tab */}
      {activeTab === 'claim' && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">Submit Warranty Claim</h3>
            
            <form onSubmit={handleClaimSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Product Model"
                  type="text"
                  value={claimForm.productModel}
                  onChange={(e) => setClaimForm({...claimForm, productModel: e.target.value})}
                  placeholder="e.g., PM-MCB-32A-PRO"
                  required
                />
                <Input
                  label="Purchase Date"
                  type="date"
                  value={claimForm.purchaseDate}
                  onChange={(e) => setClaimForm({...claimForm, purchaseDate: e.target.value})}
                  required
                />
                <Input
                  label="Contact Phone"
                  type="tel"
                  value={claimForm.contactPhone}
                  onChange={(e) => setClaimForm({...claimForm, contactPhone: e.target.value})}
                  placeholder="+91 98765 43210"
                  required
                />
                <Input
                  label="Contact Email"
                  type="email"
                  value={claimForm.contactEmail}
                  onChange={(e) => setClaimForm({...claimForm, contactEmail: e.target.value})}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Issue Description *
                </label>
                <textarea
                  value={claimForm.issueDescription}
                  onChange={(e) => setClaimForm({...claimForm, issueDescription: e.target.value})}
                  placeholder="Please describe the issue in detail..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-navy"
                  required
                />
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Icon name="Upload" size={48} className="text-text-secondary mx-auto mb-4" />
                <h4 className="text-lg font-medium text-text-primary mb-2">Upload Photos</h4>
                <p className="text-text-secondary mb-4">
                  Upload clear photos of the product and the issue (Max 5 files, 10MB each)
                </p>
                <Button
                  variant="outline"
                  iconName="Camera"
                  iconPosition="left"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                  Choose Files
                </Button>
              </div>
              
              <div className="flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-300 text-text-secondary hover:bg-gray-50"
                >
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  iconName="Send"
                  iconPosition="left"
                  className="bg-brand-navy hover:bg-brand-navy/90"
                >
                  Submit Claim
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Track Claims Tab */}
      {activeTab === 'track' && (
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {activeClaims.map((claim) => (
              <div key={claim.id} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">{claim.productName}</h3>
                    <p className="text-text-secondary">Claim ID: {claim.id}</p>
                  </div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mt-2 lg:mt-0 ${getStatusColor(claim.status)}`}>
                    {claim.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-text-secondary">Issue Type:</span>
                    <p className="font-medium text-text-primary">{claim.issueType}</p>
                  </div>
                  <div>
                    <span className="text-text-secondary">Submitted:</span>
                    <p className="font-medium text-text-primary">{new Date(claim.submittedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-text-secondary">Expected Resolution:</span>
                    <p className="font-medium text-text-primary">{new Date(claim.expectedResolution).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-text-secondary">Assigned Technician:</span>
                    <p className="font-medium text-text-primary">{claim.assignedTechnician}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Claim Progress</h4>
                  <div className="space-y-4">
                    {claim.updates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-brand-navy rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="font-medium text-text-primary">{update.status}</span>
                            <span className="text-sm text-text-secondary">{new Date(update.date).toLocaleDateString()}</span>
                          </div>
                          <p className="text-text-secondary text-sm">{update.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <Button
                    variant="outline"
                    iconName="Phone"
                    iconPosition="left"
                    className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    Call Technician
                  </Button>
                  <Button
                    variant="default"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-brand-navy hover:bg-brand-navy/90"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Coverage Info Tab */}
      {activeTab === 'coverage' && (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Warranty Coverage Types</h3>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-navy mb-2">Standard Warranty</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Manufacturing defects coverage</li>
                    <li>• 2-3 years coverage period</li>
                    <li>• Free replacement for defective parts</li>
                    <li>• Technical support included</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-amber mb-2">Comprehensive Warranty</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• All standard warranty benefits</li>
                    <li>• Extended 5-year coverage</li>
                    <li>• Accidental damage protection</li>
                    <li>• Priority technical support</li>
                    <li>• On-site service available</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-green mb-2">Commercial Warranty</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Bulk installation coverage</li>
                    <li>• Dedicated account manager</li>
                    <li>• 24/7 emergency support</li>
                    <li>• Preventive maintenance included</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6">What's Covered</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-green mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Manufacturing Defects</h4>
                    <p className="text-sm text-text-secondary">Any defects in materials or workmanship</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-green mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Electrical Failures</h4>
                    <p className="text-sm text-text-secondary">Component failures under normal usage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-green mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Performance Issues</h4>
                    <p className="text-sm text-text-secondary">Products not meeting specified performance</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-6 mt-8">What's Not Covered</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="XCircle" size={20} className="text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Physical Damage</h4>
                    <p className="text-sm text-text-secondary">Damage due to mishandling or accidents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="XCircle" size={20} className="text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Improper Installation</h4>
                    <p className="text-sm text-text-secondary">Issues arising from incorrect installation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="XCircle" size={20} className="text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-text-primary">Normal Wear & Tear</h4>
                    <p className="text-sm text-text-secondary">Expected degradation over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WarrantyCenter;