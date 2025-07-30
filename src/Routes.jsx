import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ProductCatalog from "pages/product-catalog";
import BusinessSolutions from "pages/business-solutions";
import SupportCenter from "pages/support-center";
import AboutPromac from "pages/about-promac";
import ContactLocations from "pages/contact-locations";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/product-catalog" element={<ProductCatalog />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/support-center" element={<SupportCenter />} />
        <Route path="/about-promac" element={<AboutPromac />} />
        <Route path="/contact-locations" element={<ContactLocations />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;