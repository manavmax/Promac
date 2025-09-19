import React from 'react';
import { Avatar, AvatarImage } from '../../../components/ui/Avatar';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      author: {
        name: "Rajesh Kumar",
        handle: "Electrical Contractor",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      text: "Promac's Smart MCB Pro Series transformed our commercial project efficiency. The IoT monitoring capabilities helped us identify potential issues before they became problems. Their technical support team guided us through the installation process seamlessly.",
      rating: 5
    },
    {
      author: {
        name: "Priya Sharma",
        handle: "Homeowner",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      text: "As a first-time home renovator, I was overwhelmed by electrical choices. Promac's DIY guides and customer support made everything clear. The modular switches we installed look premium and the smart home integration works perfectly.",
      rating: 5
    },
    {
      author: {
        name: "Amit Patel",
        handle: "Project Manager",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg"
      },
      text: "Working with Promac for our industrial project was exceptional. Their bulk pricing, timely delivery, and quality assurance helped us complete the project ahead of schedule. The BIS certification gave our clients complete confidence.",
      rating: 5
    },
    {
      author: {
        name: "Deepak Singh",
        handle: "IT Professional",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      text: "The smart home automation products from Promac exceeded expectations. Voice control integration, mobile app connectivity, and energy monitoring features make our home truly intelligent. Installation was surprisingly simple with their guides.",
      rating: 5
    },
    {
      author: {
        name: "Sneha Reddy",
        handle: "Interior Designer",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      text: "Promac's LED lighting solutions have been a game-changer for my design projects. The color accuracy and dimming capabilities allow me to create the perfect ambiance for any space. My clients are always impressed with the results.",
      rating: 5
    },
    {
      author: {
        name: "Vikram Joshi",
        handle: "Smart Home Consultant",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      text: "The integration capabilities of Promac's smart home products are outstanding. I can seamlessly connect different systems and create comprehensive automation solutions. The reliability and performance have made them my go-to choice for all projects.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Success </span>
            <span className="text-[#FF0C0D]">Stories</span>
            <span className="text-white"> from Our Customers</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Real experiences from contractors and homeowners who trust Promac for their electrical projects
          </p>
        </div>
      </div>

      {/* Infinite Carousel Container - Full Viewport Width */}
      <div className="relative w-screen overflow-hidden">
          {/* Carousel Track - Single direction right to left */}
          <div className="flex animate-marquee [--duration:60s] hover:[animation-play-state:paused]">
            {/* Multiple sets for seamless infinite loop */}
            {[...Array(4)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className="flex shrink-0 gap-6 [gap:1.5rem]">
                {testimonials.map((testimonial, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex-shrink-0 w-80 glass-card-premium rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-white/20">
                        <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                      </Avatar>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-white leading-none">
                          {testimonial.author.name}
                        </h3>
                        <p className="text-sm text-slate-300 mt-1">
                          {testimonial.author.handle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          className={`w-4 h-4 ${
                            starIndex < testimonial.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-600'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-slate-200 leading-relaxed text-sm">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default TestimonialCarousel;