import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import BusinessAccountTypes from './components/BusinessAccountTypes';
import BulkOrderingInterface from './components/BulkOrderingInterface';
import PricingCalculator from './components/PricingCalculator';
import LoyaltyProgram from './components/LoyaltyProgram';
import ProjectConsultation from './components/ProjectConsultation';
import CaseStudies from './components/CaseStudies';
import { Footer } from '../../components/ui/Footer';
import LightRays from '../../components/ui/LightRays';

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
                  {/* LightRays Background for Header and Hero */}
        <div className="relative">
          <div className="absolute inset-0 h-[calc(70vh+4rem)]">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
            
            {/* Header and Hero Content */}
            <div className="relative z-10">
              <main className="pt-16">
                <HeroSection />
              </main>
            </div>
          </div>

          {/* Rest of Content */}
          <BusinessAccountTypes />
          <div className="section-divider" />
          <PricingCalculator />
          <div className="section-divider" />
          <ProjectConsultation />
          <div className="section-divider" />
          <BulkOrderingInterface />
          <div className="section-divider" />
          <LoyaltyProgram />
          <div className="section-divider" />
          <CaseStudies />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default BusinessSolutions;