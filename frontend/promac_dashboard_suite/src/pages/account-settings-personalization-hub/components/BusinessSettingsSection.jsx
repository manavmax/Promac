import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';


const BusinessSettingsSection = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@kumarelectrical.com",
      role: "Manager",
      permissions: ["view_orders", "place_orders", "manage_addresses"],
      status: "Active",
      lastActive: "2024-12-20"
    },
    {
      id: 2,
      name: "Amit Patel",
      email: "amit@kumarelectrical.com",
      role: "Purchaser",
      permissions: ["view_orders", "place_orders"],
      status: "Active",
      lastActive: "2024-12-19"
    },
    {
      id: 3,
      name: "Suresh Kumar",
      email: "suresh@kumarelectrical.com",
      role: "Viewer",
      permissions: ["view_orders"],
      status: "Pending",
      lastActive: null
    }
  ]);

  const [approvalSettings, setApprovalSettings] = useState({
    requireApprovalAbove: 50000,
    autoApproveBelow: 10000,
    approvers: ["rajesh@kumarelectrical.com", "priya@kumarelectrical.com"]
  });

  const [spendingLimits, setSpendingLimits] = useState({
    dailyLimit: 100000,
    monthlyLimit: 2500000,
    perOrderLimit: 500000
  });

  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Viewer"
  });

  const handleAddMember = () => {
    const member = {
      id: Date.now(),
      ...newMember,
      permissions: getRolePermissions(newMember?.role),
      status: "Pending",
      lastActive: null
    };
    setTeamMembers([...teamMembers, member]);
    setNewMember({ name: "", email: "", role: "Viewer" });
    setShowAddMember(false);
  };

  const getRolePermissions = (role) => {
    switch (role) {
      case 'Admin': return ["view_orders", "place_orders", "manage_addresses", "manage_team", "view_reports"];
      case 'Manager': return ["view_orders", "place_orders", "manage_addresses"];
      case 'Purchaser': return ["view_orders", "place_orders"];
      case 'Viewer': return ["view_orders"];
      default: return ["view_orders"];
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin': return 'text-red-600 bg-red-50';
      case 'Manager': return 'text-blue-600 bg-blue-50';
      case 'Purchaser': return 'text-green-600 bg-green-50';
      case 'Viewer': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-success bg-success/10';
      case 'Pending': return 'text-warning bg-warning/10';
      case 'Inactive': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const handleRemoveMember = (id) => {
    setTeamMembers(teamMembers?.filter(member => member?.id !== id));
  };

  const handleSaveSettings = () => {
    console.log('Saving business settings:', { approvalSettings, spendingLimits });
  };

  return (
    <div className="space-y-6">
      {/* Team Management */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Users" size={24} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Team Management</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAddMember(true)}
            iconName="UserPlus"
            iconPosition="left"
            iconSize={16}
          >
            Add Member
          </Button>
        </div>

        {/* Add Member Form */}
        {showAddMember && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-lg font-medium text-foreground mb-4">Add Team Member</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter full name"
                value={newMember?.name}
                onChange={(e) => setNewMember({...newMember, name: e?.target?.value})}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter email address"
                value={newMember?.email}
                onChange={(e) => setNewMember({...newMember, email: e?.target?.value})}
                required
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Role</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Viewer', 'Purchaser', 'Manager', 'Admin']?.map((role) => (
                    <button
                      key={role}
                      onClick={() => setNewMember({...newMember, role})}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        newMember?.role === role
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary/30'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 mt-4">
              <Button
                variant="outline"
                onClick={() => setShowAddMember(false)}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleAddMember}
                disabled={!newMember?.name || !newMember?.email}
                iconName="UserPlus"
                iconPosition="left"
                iconSize={16}
              >
                Send Invitation
              </Button>
            </div>
          </div>
        )}

        {/* Team Members List */}
        <div className="space-y-3">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-sm font-medium text-foreground">{member?.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(member?.role)}`}>
                      {member?.role}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(member?.status)}`}>
                      {member?.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{member?.email}</p>
                  {member?.lastActive && (
                    <p className="text-xs text-muted-foreground">
                      Last active: {new Date(member.lastActive)?.toLocaleDateString('en-IN')}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  iconName="Edit"
                  iconSize={16}
                >
                  <span className="sr-only">Edit member</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveMember(member?.id)}
                  iconName="Trash2"
                  iconSize={16}
                  className="text-destructive hover:text-destructive"
                >
                  <span className="sr-only">Remove member</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Approval Workflows */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="CheckSquare" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Approval Workflows</h2>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Require Approval Above"
              type="number"
              value={approvalSettings?.requireApprovalAbove}
              onChange={(e) => setApprovalSettings({
                ...approvalSettings,
                requireApprovalAbove: parseInt(e?.target?.value)
              })}
              description="Orders above this amount need approval"
            />
            <Input
              label="Auto-Approve Below"
              type="number"
              value={approvalSettings?.autoApproveBelow}
              onChange={(e) => setApprovalSettings({
                ...approvalSettings,
                autoApproveBelow: parseInt(e?.target?.value)
              })}
              description="Orders below this amount are auto-approved"
            />
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="text-sm font-medium text-foreground mb-3">Approval Chain</h4>
            <div className="space-y-2">
              {approvalSettings?.approvers?.map((approver, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-background rounded border border-border">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      Level {index + 1}
                    </span>
                    <span className="text-sm text-foreground">{approver}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    iconName="X"
                    iconSize={14}
                  >
                    <span className="sr-only">Remove approver</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Spending Limits */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="CreditCard" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Spending Limits</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Daily Limit"
            type="number"
            value={spendingLimits?.dailyLimit}
            onChange={(e) => setSpendingLimits({
              ...spendingLimits,
              dailyLimit: parseInt(e?.target?.value)
            })}
            description="Maximum daily spending"
          />
          <Input
            label="Monthly Limit"
            type="number"
            value={spendingLimits?.monthlyLimit}
            onChange={(e) => setSpendingLimits({
              ...spendingLimits,
              monthlyLimit: parseInt(e?.target?.value)
            })}
            description="Maximum monthly spending"
          />
          <Input
            label="Per Order Limit"
            type="number"
            value={spendingLimits?.perOrderLimit}
            onChange={(e) => setSpendingLimits({
              ...spendingLimits,
              perOrderLimit: parseInt(e?.target?.value)
            })}
            description="Maximum per order amount"
          />
        </div>

        <div className="mt-4 p-4 bg-warning/5 border border-warning/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="AlertTriangle" size={16} className="text-warning" />
            <h4 className="text-sm font-medium text-foreground">Current Usage</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Daily: ₹45,000 / ₹{spendingLimits?.dailyLimit?.toLocaleString('en-IN')}</p>
              <div className="w-full bg-muted rounded-full h-2 mt-1">
                <div className="bg-warning h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Monthly: ₹8,50,000 / ₹{spendingLimits?.monthlyLimit?.toLocaleString('en-IN')}</p>
              <div className="w-full bg-muted rounded-full h-2 mt-1">
                <div className="bg-success h-2 rounded-full" style={{ width: '34%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Last Order: ₹25,000 / ₹{spendingLimits?.perOrderLimit?.toLocaleString('en-IN')}</p>
              <div className="w-full bg-muted rounded-full h-2 mt-1">
                <div className="bg-success h-2 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="flex items-center justify-end">
        <Button
          variant="default"
          onClick={handleSaveSettings}
          iconName="Save"
          iconPosition="left"
          iconSize={16}
        >
          Save Business Settings
        </Button>
      </div>
    </div>
  );
};

export default BusinessSettingsSection;