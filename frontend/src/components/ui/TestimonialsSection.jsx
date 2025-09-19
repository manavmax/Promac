import { cn } from "../../lib/utils"
import { TestimonialCard } from "./TestimonialCard"

export const TestimonialsSection = ({ 
  title,
  description,
  testimonials,
  className 
}) => {
  return (
    <section className={cn(
      "py-20 section-premium",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]">
              {[...Array(6)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`duplicate-${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-gray-900 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-gray-900 sm:block" />
        </div>
      </div>
    </section>
  )
}
