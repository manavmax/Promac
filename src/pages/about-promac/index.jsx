import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './components/HeroSection';
import InnovationSection from './components/InnovationSection';
import QualitySection from './components/QualitySection';
import LeadershipSection from './components/LeadershipSection';
import RecognitionSection from './components/RecognitionSection';
import SustainabilitySection from './components/SustainabilitySection';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import { Footer } from '../../components/ui/Footer';

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
      <Helmet>
        <title>About Promac - Leading Electrical Component Distributor in India</title>
        <meta name="description" content="Learn about Promac, India's leading electrical component distributor, powering homes and businesses with quality products and exceptional service for over 25 years." />
      </Helmet>
      
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
      <Footer />
    </div>
  );
};

export default AboutPromac;