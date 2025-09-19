import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Rajesh",
    lastName: "Kumar",
    email: "rajesh.kumar@electricalworks.com",
    phone: "+91 98765 43210",
    businessName: "Kumar Electrical Solutions",
    gstNumber: "27ABCDE1234F1Z5",
    licenseNumber: "EL/2023/MH/001234",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Mock save functionality
    console.log('Profile saved:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data in real implementation
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-premium p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="User" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Profile Information</h2>
        </div>
        {!isEditing && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            iconName="Edit"
            iconPosition="left"
            iconSize={16}
          >
            Edit Profile
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Avatar Section */}
        <div className="lg:col-span-1">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={profileData?.avatar}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              {isEditing && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute -bottom-2 -right-2 rounded-full bg-background"
                  iconName="Camera"
                  iconSize={16}
                >
                  <span className="sr-only">Change avatar</span>
                </Button>
              )}
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-foreground">
                {profileData?.firstName} {profileData?.lastName}
              </h3>
              <p className="text-sm text-muted-foreground">{profileData?.businessName}</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-xs text-success font-medium">Verified Business Account</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={profileData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              disabled={!isEditing}
              required
            />

            <Input
              label="Last Name"
              type="text"
              value={profileData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              disabled={!isEditing}
              required
            />

            <Input
              label="Email Address"
              type="email"
              value={profileData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              disabled={!isEditing}
              description="Primary contact for all communications"
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              value={profileData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              disabled={!isEditing}
              required
            />

            <Input
              label="Business Name"
              type="text"
              value={profileData?.businessName}
              onChange={(e) => handleInputChange('businessName', e?.target?.value)}
              disabled={!isEditing}
              description="Registered business name"
            />

            <Input
              label="GST Number"
              type="text"
              value={profileData?.gstNumber}
              onChange={(e) => handleInputChange('gstNumber', e?.target?.value)}
              disabled={!isEditing}
              description="For business tax compliance"
            />

            <div className="md:col-span-2">
              <Input
                label="Electrical License Number"
                type="text"
                value={profileData?.licenseNumber}
                onChange={(e) => handleInputChange('licenseNumber', e?.target?.value)}
                disabled={!isEditing}
                description="Professional electrical contractor license"
              />
            </div>
          </div>

          {/* Business Verification Status */}
          <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="Shield" size={16} className="text-success" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-foreground">Business Verification Complete</h4>
                <p className="text-xs text-muted-foreground">
                  GST certificate and electrical license verified on Dec 15, 2024
                </p>
              </div>
              <Button variant="ghost" size="sm" iconName="ExternalLink" iconSize={14}>
                View Documents
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t border-border">
              <Button
                variant="outline"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleSave}
                iconName="Save"
                iconPosition="left"
                iconSize={16}
              >
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;