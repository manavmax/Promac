import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const SecuritySection = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [loginActivity] = useState([
    {
      id: 1,
      device: "Chrome on Windows",
      location: "Mumbai, Maharashtra",
      ip: "203.192.xxx.xxx",
      time: "2024-12-20 14:30:00",
      status: "Current Session"
    },
    {
      id: 2,
      device: "Mobile App on Android",
      location: "Mumbai, Maharashtra",
      ip: "203.192.xxx.xxx",
      time: "2024-12-20 09:15:00",
      status: "Active"
    },
    {
      id: 3,
      device: "Safari on iPhone",
      location: "Pune, Maharashtra",
      ip: "49.207.xxx.xxx",
      time: "2024-12-19 18:45:00",
      status: "Ended"
    }
  ]);

  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = () => {
    setPasswordError('');
    
    if (passwordData?.newPassword !== passwordData?.confirmPassword) {
      setPasswordError("Passwords don't match!");
      return;
    }
    
    if (passwordData?.newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long!");
      return;
    }
    
    console.log('Password change requested');
    setShowChangePassword(false);
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setPasswordError('');
  };

  const handleLogoutDevice = (deviceId) => {
    console.log('Logging out device:', deviceId);
  };

  const getDeviceIcon = (device) => {
    if (device?.includes('Mobile') || device?.includes('iPhone') || device?.includes('Android')) {
      return 'Smartphone';
    } else if (device?.includes('Chrome') || device?.includes('Safari') || device?.includes('Firefox')) {
      return 'Monitor';
    }
    return 'Laptop';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Current Session': return 'text-primary bg-primary/10';
      case 'Active': return 'text-success bg-success/10';
      case 'Ended': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Password & Authentication */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="Lock" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Password & Authentication</h2>
        </div>

        <div className="space-y-4">
          {/* Password Section */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Key" size={20} className="text-muted-foreground" />
              <div>
                <h3 className="text-sm font-medium text-foreground">Password</h3>
                <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChangePassword(true)}
            >
              Change Password
            </Button>
          </div>

          {/* Change Password Form */}
          {showChangePassword && (
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-base font-medium text-foreground mb-4">Change Password</h3>
              <div className="space-y-4">
                <Input
                  label="Current Password"
                  type="password"
                  value={passwordData?.currentPassword}
                  onChange={(e) => setPasswordData({...passwordData, currentPassword: e?.target?.value})}
                  required
                />
                <Input
                  label="New Password"
                  type="password"
                  value={passwordData?.newPassword}
                  onChange={(e) => setPasswordData({...passwordData, newPassword: e?.target?.value})}
                  description="Must be at least 8 characters with uppercase, lowercase, and numbers"
                  required
                />
                <Input
                  label="Confirm New Password"
                  type="password"
                  value={passwordData?.confirmPassword}
                  onChange={(e) => setPasswordData({...passwordData, confirmPassword: e?.target?.value})}
                  error={passwordError}
                  required
                />
              </div>
              <div className="flex items-center justify-end space-x-3 mt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowChangePassword(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="default"
                  onClick={handlePasswordChange}
                  iconName="Save"
                  iconPosition="left"
                  iconSize={16}
                >
                  Update Password
                </Button>
              </div>
            </div>
          )}

          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} className="text-success" />
              <div>
                <h3 className="text-sm font-medium text-foreground">Two-Factor Authentication</h3>
                <p className="text-xs text-muted-foreground">
                  {twoFactorEnabled ? 'Enabled via SMS to +91 98765 43210' : 'Add an extra layer of security'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={twoFactorEnabled}
                onChange={(e) => setTwoFactorEnabled(e?.target?.checked)}
              />
              <Button variant="ghost" size="sm" iconName="Settings" iconSize={16}>
                Configure
              </Button>
            </div>
          </div>

          {/* Biometric Authentication */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Fingerprint" size={20} className="text-muted-foreground" />
              <div>
                <h3 className="text-sm font-medium text-foreground">Biometric Authentication</h3>
                <p className="text-xs text-muted-foreground">Use fingerprint or face recognition for mobile app</p>
              </div>
            </div>
            <Checkbox
              checked={biometricEnabled}
              onChange={(e) => setBiometricEnabled(e?.target?.checked)}
            />
          </div>
        </div>
      </div>
      {/* Login Activity */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Activity" size={24} className="text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Login Activity</h2>
          </div>
          <Button variant="outline" size="sm" iconName="RefreshCw" iconSize={16}>
            Refresh
          </Button>
        </div>

        <div className="space-y-3">
          {loginActivity?.map((activity) => (
            <div
              key={activity?.id}
              className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={getDeviceIcon(activity?.device)} size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">{activity?.device}</h3>
                  <p className="text-xs text-muted-foreground">
                    {activity?.location} • {activity?.ip}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(activity.time)?.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(activity?.status)}`}>
                  {activity?.status}
                </span>
                {activity?.status === 'Active' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLogoutDevice(activity?.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    End Session
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-warning/5 border border-warning/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" size={16} className="text-warning" />
            <p className="text-xs text-foreground">
              If you notice any suspicious activity, please change your password immediately and contact support.
            </p>
          </div>
        </div>
      </div>
      {/* Account Security Score */}
      <div className="bg-card rounded-lg border border-border shadow-premium p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Icon name="ShieldCheck" size={24} className="text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Security Score</h2>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 bg-muted rounded-full h-3">
            <div className="bg-success h-3 rounded-full" style={{ width: '85%' }}></div>
          </div>
          <span className="text-2xl font-bold text-success">85%</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm text-foreground">Strong password</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm text-foreground">Two-factor authentication</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-sm text-foreground">Verified email address</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="XCircle" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Biometric authentication</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Good security!</strong> Enable biometric authentication to reach 100% security score.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;