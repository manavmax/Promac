import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BulkOrderingInterface = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const recentBulkOrders = [
    {
      id: "BO-2025-001",
      fileName: "Residential_Project_Q1.csv",
      items: 45,
      totalValue: 2850000,
      status: "Processing",
      uploadDate: "05/01/2025"
    },
    {
      id: "BO-2025-002",
      fileName: "Commercial_Complex_Phase2.csv",
      items: 128,
      totalValue: 8750000,
      status: "Approved",
      uploadDate: "03/01/2025"
    },
    {
      id: "BO-2025-003",
      fileName: "Industrial_Upgrade_Dec.csv",
      items: 67,
      totalValue: 4200000,
      status: "Completed",
      uploadDate: "28/12/2024"
    }
  ];

  const handleDrag = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === "dragenter" || e?.type === "dragover") {
      setDragActive(true);
    } else if (e?.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(false);
    
    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      setUploadedFile(e?.dataTransfer?.files?.[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      setUploadedFile(e?.target?.files?.[0]);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'processing': return 'text-warning bg-warning/10';
      case 'approved': return 'text-success bg-success/10';
      case 'completed': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Upload" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Bulk Ordering</h3>
            <p className="text-sm text-muted-foreground">Upload CSV for large procurement lists</p>
          </div>
        </div>
        <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
          Template
        </Button>
      </div>
      {/* File Upload Area */}
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
          dragActive 
            ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {uploadedFile ? (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
              <Icon name="FileText" size={32} className="text-success" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{uploadedFile?.name}</p>
              <p className="text-xs text-muted-foreground">
                {(uploadedFile?.size / 1024)?.toFixed(1)} KB • Ready to process
              </p>
            </div>
            <div className="flex space-x-3 justify-center">
              <Button variant="outline" size="sm" onClick={() => setUploadedFile(null)}>
                Remove
              </Button>
              <Button variant="default" size="sm" iconName="Check" iconPosition="left">
                Process Order
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto">
              <Icon name="Upload" size={32} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Drop your CSV file here</p>
              <p className="text-xs text-muted-foreground">or click to browse files</p>
            </div>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
              className="hidden"
              id="bulk-upload"
            />
            <label htmlFor="bulk-upload">
              <Button variant="outline" size="sm" iconName="Upload" iconPosition="left" asChild>
                <span className="cursor-pointer">Choose File</span>
              </Button>
            </label>
          </div>
        )}
      </div>
      {/* Quick Order Input */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <h4 className="text-sm font-medium text-foreground mb-3">Quick Bulk Entry</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input
            placeholder="Product Code"
            size="sm"
            className="text-xs"
          />
          <Input
            placeholder="Quantity"
            type="number"
            size="sm"
            className="text-xs"
          />
          <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
            Add Item
          </Button>
        </div>
      </div>
      {/* Recent Bulk Orders */}
      <div className="mt-6">
        <h4 className="text-sm font-medium text-foreground mb-4">Recent Bulk Orders</h4>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {recentBulkOrders?.map((order) => (
            <div key={order?.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{order?.fileName}</p>
                  <p className="text-xs text-muted-foreground">
                    {order?.items} items • {formatCurrency(order?.totalValue)} • {order?.uploadDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order?.status)}`}>
                  {order?.status}
                </div>
                <Button variant="ghost" size="xs" iconName="Eye">
                  <span className="sr-only">View order</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulkOrderingInterface;