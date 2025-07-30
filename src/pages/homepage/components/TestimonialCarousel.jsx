import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      type: "contractor",
      name: "Rajesh Kumar",
      designation: "Electrical Contractor",
      company: "Kumar Electricals, Mumbai",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      content: `Promac's Smart MCB Pro Series transformed our commercial project efficiency. The IoT monitoring capabilities helped us identify potential issues before they became problems. Their technical support team guided us through the installation process seamlessly.`,
      project: "Commercial Complex - 50 Units",
      products: ["Smart MCB Pro", "Distribution Boards", "LED Panels"],
      savings: "₹2.5L saved in maintenance costs"
    },
    {
      id: 2,
      type: "homeowner",
      name: "Priya Sharma",
      designation: "Homeowner",
      company: "Bangalore",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      content: `As a first-time home renovator, I was overwhelmed by electrical choices. Promac's DIY guides and customer support made everything clear. The modular switches we installed look premium and the smart home integration works perfectly.`,
      project: "3BHK Home Renovation",
      products: ["Modular Switches", "Smart Plugs", "LED Lighting"],
      savings: "30% reduction in electricity bills"
    },
    {
      id: 3,
      type: "contractor",
      name: "Amit Patel",
      designation: "Project Manager",
      company: "Patel Construction, Ahmedabad",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      rating: 5,
      content: `Working with Promac for our industrial project was exceptional. Their bulk pricing, timely delivery, and quality assurance helped us complete the project ahead of schedule. The BIS certification gave our clients complete confidence.`,
      project: "Manufacturing Plant - 200KW Setup",
      products: ["Industrial Contactors", "Motor Starters", "Control Panels"],
      savings: "15% cost reduction vs competitors"
    },
    {
      id: 4,
      type: "homeowner",
      name: "Deepak Singh",
      designation: "IT Professional",
      company: "Delhi NCR",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      rating: 5,
      content: `The smart home automation products from Promac exceeded expectations. Voice control integration, mobile app connectivity, and energy monitoring features make our home truly intelligent. Installation was surprisingly simple with their guides.`,
      project: "Smart Home Automation",
      products: ["Smart Switches", "Motion Sensors", "WiFi Plugs"],
      savings: "25% energy consumption reduction"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-headline">
            Success Stories from Our Customers
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real experiences from contractors and homeowners who trust Promac for their electrical projects
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="glass-hero rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Side */}
              <div className="space-y-6">
                {/* User Type Badge */}
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    currentTestimonial.type === 'contractor' ?'bg-brand-navy/10 text-brand-navy' :'bg-brand-green/10 text-brand-green'
                  }`}>
                    {currentTestimonial.type === 'contractor' ? 'Professional Contractor' : 'Homeowner'}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-brand-amber fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-text-primary leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Project Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} className="text-brand-navy" />
                    <span className="text-sm font-medium text-brand-navy">{currentTestimonial.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-brand-green" />
                    <span className="text-sm font-medium text-brand-green">{currentTestimonial.savings}</span>
                  </div>
                </div>

                {/* Products Used */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-secondary">Products Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-amber/10 text-brand-navy text-xs font-medium rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-navy">{currentTestimonial.name}</h4>
                    <p className="text-sm text-text-secondary">
                      {currentTestimonial.designation} • {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-navy/5 to-brand-amber/5">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-brand-navy to-action-blue rounded-full flex items-center justify-center">
                        <Icon 
                          name={currentTestimonial.type === 'contractor' ? 'HardHat' : 'Home'} 
                          size={40} 
                          className="text-white" 
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-brand-navy">{currentTestimonial.project}</h3>
                        <p className="text-text-secondary">{currentTestimonial.savings}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-xl">
                  <Icon name="Quote" size={24} className="text-brand-amber" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full glass-effect hover:bg-white/20 brand-transition"
            >
              <Icon name="ChevronLeft" size={24} className="text-brand-navy" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full brand-transition ${
                    index === currentIndex 
                      ? 'bg-brand-navy' :'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full glass-effect hover:bg-white/20 brand-transition"
            >
              <Icon name="ChevronRight" size={24} className="text-brand-navy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;