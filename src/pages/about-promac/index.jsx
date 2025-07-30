import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import LeadershipSection from './components/LeadershipSection';
import QualitySection from './components/QualitySection';
import SustainabilitySection from './components/SustainabilitySection';
import InnovationSection from './components/InnovationSection';
import TeamSection from './components/TeamSection';
import RecognitionSection from './components/RecognitionSection';

const AboutPromac = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'About Promac - Leading Electrical Component Distributor in India';
    
    // Add scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Company Timeline */}
        <TimelineSection />
        
        {/* Leadership Team */}
        <LeadershipSection />
        
        {/* Quality Assurance */}
        <QualitySection />
        
        {/* Sustainability Initiatives */}
        <SustainabilitySection />
        
        {/* Innovation Lab */}
        <InnovationSection />
        
        {/* Team & Culture */}
        <TeamSection />
        
        {/* Recognition & Awards */}
        <RecognitionSection />
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-amber rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Promac</h3>
                  <p className="text-white/80 text-sm">Electrical Excellence</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                India's leading electrical component distributor, powering homes and businesses 
                with quality products and exceptional service for over 25 years.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <div className="space-y-2">
                <a href="/about-promac" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">About Us</a>
                <a href="/about-promac" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Leadership</a>
                <a href="/about-promac" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Careers</a>
                <a href="/about-promac" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Press</a>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Products</h4>
              <div className="space-y-2">
                <a href="/product-catalog" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Switches & Sockets</a>
                <a href="/product-catalog" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Circuit Breakers</a>
                <a href="/product-catalog" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Smart Home</a>
                <a href="/product-catalog" className="block text-white/80 hover:text-brand-amber brand-transition text-sm">Industrial</a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/80">1800-PROMAC-1</p>
                <p className="text-white/80">info@promacelectrical.com</p>
                <p className="text-white/80">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Promac Electrical. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/80 hover:text-brand-amber brand-transition text-sm">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-brand-amber brand-transition text-sm">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-brand-amber brand-transition text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPromac;