import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import GlobalHeader from "./components/ui/GlobalHeader";
// Add your imports here
import Homepage from "./pages/homepage";
import ProductCatalog from "./pages/product-catalog";
import BusinessSolutions from "./pages/business-solutions";
import SupportCenter from "./pages/support-center";
import AboutPromac from "./pages/about-promac";
import ContactLocations from "./pages/contact-locations";
import ProductDetail from "./pages/product-detail";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith('/product/');
  
  return (
    <ErrorBoundary>
      {!isProductDetail && <GlobalHeader />}
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