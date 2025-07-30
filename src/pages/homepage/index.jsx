import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import WhyPromacSection from './components/WhyPromacSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import InnovationSpotlight from './components/InnovationSpotlight';
import TrustSignals from './components/TrustSignals';

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

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
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
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Category Grid */}
          <CategoryGrid />

          {/* Why Promac Section */}
          <WhyPromacSection />

          {/* Testimonial Carousel */}
          <TestimonialCarousel />

          {/* Innovation Spotlight */}
          <InnovationSpotlight />

          {/* Trust Signals */}
          <TrustSignals />
        </main>

        {/* Footer */}
        <footer className="bg-brand-navy text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-amber to-brand-orange rounded-lg flex items-center justify-center">
                    <span className="text-brand-navy font-bold text-lg">P</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Promac Electrical</h3>
                    <p className="text-white/80 text-sm">Powering Excellence</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  India's trusted electrical components supplier with 25+ years of expertise, serving contractors, distributors, and homeowners nationwide.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/product-catalog" className="text-white/80 hover:text-brand-amber brand-transition">Products</a></li>
                  <li><a href="/business-solutions" className="text-white/80 hover:text-brand-amber brand-transition">Business Solutions</a></li>
                  <li><a href="/about-promac" className="text-white/80 hover:text-brand-amber brand-transition">About Us</a></li>
                  <li><a href="/support-center" className="text-white/80 hover:text-brand-amber brand-transition">Support</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/contact-locations" className="text-white/80 hover:text-brand-amber brand-transition">Contact Us</a></li>
                  <li><a href="/support-center" className="text-white/80 hover:text-brand-amber brand-transition">Help Center</a></li>
                  <li><span className="text-white/80">24/7 Technical Support</span></li>
                  <li><span className="text-white/80">Installation Guides</span></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Get in Touch</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-brand-amber">📞</span>
                    <span className="text-white/80">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-brand-amber">✉️</span>
                    <span className="text-white/80">info@promacelectrical.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-brand-amber">📍</span>
                    <span className="text-white/80">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Promac Electrical. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-white/60 hover:text-brand-amber text-sm brand-transition">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-brand-amber text-sm brand-transition">Terms of Service</a>
                <a href="#" className="text-white/60 hover:text-brand-amber text-sm brand-transition">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;