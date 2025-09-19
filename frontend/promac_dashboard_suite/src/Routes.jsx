import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import BusinessAccountCommandCenter from './pages/business-account-command-center';
import SmartCartManagementHub from './pages/smart-cart-management-hub';
import AccountSettingsPersonalizationHub from './pages/account-settings-personalization-hub';
import AdvancedCheckoutExperience from './pages/advanced-checkout-experience';
import OrderTrackingManagementSystem from './pages/order-tracking-management-system';
import AdaptiveUserDashboard from './pages/adaptive-user-dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AccountSettingsPersonalizationHub />} />
        <Route path="/business-account-command-center" element={<BusinessAccountCommandCenter />} />
        <Route path="/smart-cart-management-hub" element={<SmartCartManagementHub />} />
        <Route path="/account-settings-personalization-hub" element={<AccountSettingsPersonalizationHub />} />
        <Route path="/advanced-checkout-experience" element={<AdvancedCheckoutExperience />} />
        <Route path="/order-tracking-management-system" element={<OrderTrackingManagementSystem />} />
        <Route path="/adaptive-user-dashboard" element={<AdaptiveUserDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
