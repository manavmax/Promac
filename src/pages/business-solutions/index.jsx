import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BusinessAccountTypes from './components/BusinessAccountTypes';
import PricingCalculator from './components/PricingCalculator';
import ProjectConsultation from './components/ProjectConsultation';
import BulkOrderingInterface from './components/BulkOrderingInterface';
import LoyaltyProgram from './components/LoyaltyProgram';
import CaseStudies from './components/CaseStudies';

const BusinessSolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Business Solutions - Promac Electrical | B2B Portal for Contractors & Distributors</title>
        <meta 
          name="description" 
          content="Dedicated B2B portal with bulk pricing, credit terms, and project support services for electrical contractors, distributors, and professionals across India." 
        />
        <meta name="keywords" content="electrical contractor, bulk pricing, business account, distributor, project consultation, loyalty program" />
        <meta property="og:title" content="Business Solutions - Promac Electrical" />
        <meta property="og:description" content="B2B portal with bulk pricing, credit terms, and project support services for electrical professionals." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/business-solutions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <BusinessAccountTypes />
          <PricingCalculator />
          <ProjectConsultation />
          <BulkOrderingInterface />
          <LoyaltyProgram />
          <CaseStudies />
        </main>

        {/* Footer */}
        <footer className="bg-brand-navy text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Business Solutions</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Contractor Accounts</li>
                  <li>Distributor Partnership</li>
                  <li>Industrial Solutions</li>
                  <li>Volume Pricing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Project Consultation</li>
                  <li>Technical Support</li>
                  <li>Bulk Ordering</li>
                  <li>Training Programs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Account Management</li>
                  <li>Credit Terms</li>
                  <li>Delivery Tracking</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Business Hotline: 1800-123-4567</li>
                  <li>Email: business@promac.in</li>
                  <li>Mon-Sat: 9:00 AM - 7:00 PM</li>
                  <li>Emergency: 24/7 Support</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
              <p>&copy; {new Date().getFullYear()} Promac Electrical. All rights reserved. | Powering Business Success</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BusinessSolutions;