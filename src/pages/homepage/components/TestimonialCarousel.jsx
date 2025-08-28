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
    <section className="py-20 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Success </span>
            <span className="text-[#FF0C0D]">Stories</span>
            <span className="text-white"> from Our Customers</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real experiences from contractors and homeowners who trust Promac for their electrical projects
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-ios rounded-3xl p-6 lg:p-8 shadow-xl bg-white/5 ring-1 ring-white/10">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Content Side */}
              <div className="space-y-4">
                {/* User Type Badge */}
                <div className="flex items-center space-x-3">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white ring-1 ring-white/15">
                    {currentTestimonial.type === 'contractor' ? 'Professional Contractor' : 'Homeowner'}
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base text-slate-200 leading-relaxed italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Building" size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{currentTestimonial.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">{currentTestimonial.savings}</span>
                  </div>
                </div>

                {/* Products Used */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-300">Products Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.products.map((product, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-200 text-xs font-medium rounded-full border border-blue-400/30"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{currentTestimonial.name}</h4>
                    <p className="text-sm text-slate-300">
                      {currentTestimonial.designation} • {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 ring-1 ring-white/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto bg-[#FF0C0D] rounded-full flex items-center justify-center shadow-xl">
                        <Icon 
                          name={currentTestimonial.type === 'contractor' ? 'HardHat' : 'Home'} 
                          size={40} 
                          className="text-white" 
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">{currentTestimonial.project}</h3>
                        <p className="text-slate-300">{currentTestimonial.savings}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements removed per request */}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="h-12 w-12 rounded-2xl bg-white/10 ring-1 ring-white/15 shadow-lg hover:bg-white/15 hover:ring-white/25 transition-colors duration-200 grid place-items-center"
            >
              <Icon name="ChevronLeft" size={22} className="text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-3.5 w-3.5 rounded-full transition-all duration-200 ring-1 ${
                    index === currentIndex
                      ? 'bg-[#FF0C0D] ring-[#FF0C0D]/40 shadow-[0_0_12px_rgba(255,12,13,0.45)]'
                      : 'bg-white/60 hover:bg-white ring-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="h-12 w-12 rounded-2xl bg-white/10 ring-1 ring-white/15 shadow-lg hover:bg-white/15 hover:ring-white/25 transition-colors duration-200 grid place-items-center"
            >
              <Icon name="ChevronRight" size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;