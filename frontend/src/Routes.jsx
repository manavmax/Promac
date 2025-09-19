import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalHeader from "./components/ui/GlobalHeader";
import ProtectedRoute from "./components/ProtectedRoute";
// Add your imports here
import Homepage from "./pages/homepage";
import ProductCatalog from "./pages/product-catalog";
import BusinessSolutions from "./pages/business-solutions";
import SupportCenter from "./pages/support-center";
import AboutPromac from "./pages/about-promac";
import ContactLocations from "./pages/contact-locations";
import ProductDetail from "./pages/product-detail";
import NotFound from "./pages/NotFound";

// Policy Pages
import TermsConditions from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/privacy-policy";
import RefundReturnPolicy from "./pages/refund-return-policy";
import DeliveryShipping from "./pages/delivery-shipping";
import CancellationPolicy from "./pages/cancellation-policy";
import PaymentPolicy from "./pages/payment-policy";
import DisclaimerPolicy from "./pages/disclaimer-policy";
import B2BBulkOrdersPolicy from "./pages/b2b-bulk-orders-policy";

// Sitemap
import Sitemap from "./pages/sitemap";

// Dashboard imports
import AdaptiveUserDashboard from "./pages/adaptive-user-dashboard";
import SmartCartManagementHub from "./pages/smart-cart-management-hub";
import AdvancedCheckoutExperience from "./pages/advanced-checkout-experience";
import OrderTrackingManagementSystem from "./pages/order-tracking-management-system";
import BusinessAccountCommandCenter from "./pages/business-account-command-center";
import AccountSettingsPersonalizationHub from "./pages/account-settings-personalization-hub";

const AppContent = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith('/product/');
  const isDashboardPage = location.pathname.startsWith('/dashboard') || 
                         location.pathname.startsWith('/cart') || 
                         location.pathname.startsWith('/checkout') || 
                         location.pathname.startsWith('/orders') || 
                         (location.pathname.startsWith('/business') && location.pathname !== '/business-solutions') || 
                         location.pathname.startsWith('/account');
  
  return (
    <ErrorBoundary>
      {!isProductDetail && !isDashboardPage && <GlobalHeader />}
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/support-center" element={<SupportCenter />} />
        <Route path="/about-promac" element={<AboutPromac />} />
        <Route path="/contact-locations" element={<ContactLocations />} />
        
        {/* Policy Pages */}
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-return-policy" element={<RefundReturnPolicy />} />
        <Route path="/delivery-shipping" element={<DeliveryShipping />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/disclaimer-policy" element={<DisclaimerPolicy />} />
        <Route path="/b2b-bulk-orders-policy" element={<B2BBulkOrdersPolicy />} />
        
        {/* Sitemap */}
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AdaptiveUserDashboard />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute>
            <SmartCartManagementHub />
          </ProtectedRoute>
        } />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <AdvancedCheckoutExperience />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute>
            <OrderTrackingManagementSystem />
          </ProtectedRoute>
        } />
        <Route path="/business" element={
          <ProtectedRoute>
            <BusinessAccountCommandCenter />
          </ProtectedRoute>
        } />
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountSettingsPersonalizationHub />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default Routes;