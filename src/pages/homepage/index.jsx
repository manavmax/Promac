import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import WhyPromacSection from './components/WhyPromacSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import InnovationSpotlight from './components/InnovationSpotlight';
import TrustSignals from './components/TrustSignals';
import { Footer } from '../../components/ui/Footer';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Initialize scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe reveal elements (legacy + new)
    const scrollElements = document.querySelectorAll('.scroll-reveal, .reveal-up');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Promac Electrical - Powering Your Projects with Precision | Premium Electrical Components</title>
        <meta 
          name="description" 
          content="India's premier electrical components marketplace. Trusted by 50,000+ projects with BIS certified products, 25+ years expertise, and 99.2% customer satisfaction. Shop switches, MCBs, lighting, and smart home solutions." 
        />
        <meta name="keywords" content="electrical components, MCB, switches, lighting, smart home, BIS certified, electrical supplies India, Promac" />
        <meta property="og:title" content="Promac Electrical - Premium Electrical Components Marketplace" />
        <meta property="og:description" content="Discover quality electrical solutions with 25+ years expertise, BIS certification, and smart home integration. Trusted by contractors and homeowners across India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://promacelectrical.com/homepage" />
        <link rel="canonical" href="https://promacelectrical.com/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main>
          {/* Hero Section with integrated header */}
          <HeroSection />

          {/* Unified Flow Wrapper (post-hero) */}
          <div className="homepage-unified">
            {/* Category Grid */}
            <section className="section-wrap reveal-up">
              <CategoryGrid />
            </section>
            <div className="section-divider" aria-hidden="true" />

            {/* Why Promac Section */}
            <section className="section-wrap reveal-up">
              <WhyPromacSection />
            </section>
            <div className="section-divider" aria-hidden="true" />

            {/* Testimonial Carousel */}
            <section className="section-wrap reveal-up">
              <TestimonialCarousel />
            </section>
            <div className="section-divider" aria-hidden="true" />

            {/* Innovation Spotlight */}
            <section className="section-wrap reveal-up">
              <InnovationSpotlight />
            </section>
            <div className="section-divider" aria-hidden="true" />

            {/* Trust Signals */}
            <section className="section-wrap reveal-up">
              <TrustSignals />
            </section>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;