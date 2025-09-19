import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
// Carousel removed. We'll use a custom FlipTiles grid below

const WhyPromacSection = () => {

  const differentiators = [
    {
      id: 1,
      icon: "Award",
      title: "BIS Certified Quality",
      description: "All products meet Bureau of Indian Standards with rigorous quality testing and compliance verification",
      metric: "100%",
      metricLabel: "Certified Products",
      color: "brand-green"
    },
    {
      id: 2,
      icon: "Clock",
      title: "25+ Years Expertise",
      description: "Quarter-century of electrical industry experience serving contractors, distributors, and homeowners",
      metric: "25+",
      metricLabel: "Years Experience",
      color: "brand-navy"
    },
    {
      id: 3,
      icon: "Users",
      title: "50,000+ Projects",
      description: "Successfully completed projects across residential, commercial, and industrial sectors nationwide",
      metric: "50K+",
      metricLabel: "Projects Completed",
      color: "action-blue"
    },
    {
      id: 4,
      icon: "Star",
      title: "99.2% Satisfaction",
      description: "Exceptional customer satisfaction rate with dedicated support and quality assurance programs",
      metric: "99.2%",
      metricLabel: "Customer Satisfaction",
      color: "brand-amber"
    },
    {
      id: 5,
      icon: "Truck",
      title: "Pan-India Delivery",
      description: "Nationwide delivery network ensuring fast and reliable product delivery to your doorstep",
      metric: "24-48hrs",
      metricLabel: "Delivery Time",
      color: "brand-orange"
    },
    {
      id: 6,
      icon: "Headphones",
      title: "Expert Support",
      description: "Technical support team with electrical engineers providing installation guidance and troubleshooting",
      metric: "24/7",
      metricLabel: "Support Available",
      color: "brand-green"
    }
  ];

  return (
    <section className="py-16 section-premium performance-lite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h5 className="text-xs uppercase tracking-wide text-blue-400">Why Choose Us</h5>
          <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight">
            <span className="text-white">Experience the </span>
            <span className="text-[#FF0C0D]">Promac</span>
            <span className="text-white"> Difference</span>
          </h2>
          <p className="max-w-prose text-sm text-text-secondary mx-auto">
            Experience the difference with India's most trusted electrical components supplier, combining decades of expertise with modern technology and uncompromising quality standards.
          </p>
        </div>

        {/* Differentiators - Premium morphing grid */}
        <MorphingGrid differentiators={differentiators} />

        {/* Bottom CTA Section */}
          <div className="mt-8 text-center">
          <div className="glass-ios rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Ready to Experience the Promac Difference?
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Promac for their electrical needs. From small home repairs to large industrial projects, we're your reliable partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/product-catalog" className="cta-primary px-6 py-3 rounded-full font-semibold flex items-center space-x-2">
                  <Icon name="ShoppingCart" size={18} />
                  <span>Start Shopping</span>
                </Link>
                <Link to="/support-center" className="cta-secondary px-6 py-3 rounded-full font-semibold text-white flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <span>Talk to Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPromacSection;

// Flip tiles subcomponent
function FlipTiles({ differentiators }) {
  const getScore = (id) => (id === 1 ? 100 : id === 2 ? 95 : id === 3 ? 98 : id === 4 ? 99 : id === 5 ? 96 : 97);
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {differentiators.map((item) => {
        const score = getScore(item.id);
        return (
          <div
            key={item.id}
            className="group perspective">
            <div className="relative h-full w-full rounded-3xl [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
              {/* front */}
              <div className="absolute inset-0 backface-hidden glass-ios ring-1 ring-white/10 rounded-3xl p-7 shadow-xl overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(60%_60%_at_100%_40%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_0%_100%,rgba(217,70,239,0.12),transparent)]" />
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{item.metric}</div>
                    <div className="text-xs text-slate-300">{item.metricLabel}</div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                <div className="mt-5 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-1 bg-white" style={{ width: `${score}%` }} />
                </div>
              </div>
              {/* back */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden glass-ios ring-1 ring-white/10 rounded-3xl p-7 shadow-xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="text-sm text-slate-300">Quality Score</div>
                  <div className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{score}%</div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                    <div className="glass-ios rounded-lg p-3"><div className="font-semibold text-white">BIS</div><div>Certified</div></div>
                    <div className="glass-ios rounded-lg p-3"><div className="font-semibold text-white">ISO</div><div>9001:2015</div></div>
                    <div className="glass-ios rounded-lg p-3"><div className="font-semibold text-white">Support</div><div>24/7</div></div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button className="px-4 py-2 rounded-full text-sm font-semibold bg-white hover:bg-gray-100 text-white font-medium">Learn more</button>
                  <div className="text-xs text-slate-300">Flip to see stats</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Spotlight + stat grid subcomponent
function SpotlightStats({ differentiators }) {
  const getScore = (id) => (id === 1 ? 100 : id === 2 ? 95 : id === 3 ? 98 : id === 4 ? 99 : id === 5 ? 96 : 97);
  const primary = differentiators[0];
  const rest = differentiators.slice(1);
  const score = getScore(primary.id);
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Spotlight card */}
      <div className="lg:col-span-6 group relative overflow-hidden rounded-3xl p-10 glass-ios ring-1 ring-white/10 shadow-xl">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(60%_60%_at_100%_40%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_0%_100%,rgba(217,70,239,0.12),transparent)]" />
        <div className="flex items-center justify-between">
          <div className="p-4 rounded-2xl bg-white/10 ring-1 ring-white/15"><Icon name={primary.icon} size={30} className="text-white" /></div>
          <div className="text-right">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{primary.metric}</div>
            <div className="text-sm text-slate-300">{primary.metricLabel}</div>
          </div>
        </div>
        <h3 className="mt-6 text-3xl font-bold text-white">{primary.title}</h3>
        <p className="mt-2 text-text-secondary leading-relaxed">{primary.description}</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
            <div className="text-xs text-slate-300">Quality</div>
            <div className="mt-1 text-xl font-bold text-white">{score}%</div>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
            <div className="text-xs text-slate-300">Certs</div>
            <div className="mt-1 text-xl font-bold text-white">BIS, ISO</div>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
            <div className="text-xs text-slate-300">Support</div>
            <div className="mt-1 text-xl font-bold text-white">24/7</div>
          </div>
        </div>
        <div className="mt-8 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="h-2 rounded-full bg-white" style={{ width: `${score}%` }} />
        </div>
      </div>

      {/* Stat grid */}
      <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
        {rest.map((item) => {
          const s = getScore(item.id);
          return (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl p-7 glass-ios ring-1 ring-white/10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(60%_60%_at_100%_40%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_0%_100%,rgba(217,70,239,0.12),transparent)]" />
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-white/10 ring-1 ring-white/15"><Icon name={item.icon} size={24} className="text-white" /></div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{item.metric}</div>
                  <div className="text-xs text-slate-300">{item.metricLabel}</div>
                </div>
              </div>
              <h4 className="mt-4 text-xl font-bold text-white">{item.title}</h4>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              <div className="mt-5 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-1 bg-white" style={{ width: `${s}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Milestone timeline subcomponent
function MilestoneTimeline({ differentiators }) {
  const getScore = (id) => (id === 1 ? 100 : id === 2 ? 95 : id === 3 ? 98 : id === 4 ? 99 : id === 5 ? 96 : 97);
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-400/40 via-indigo-400/30 to-fuchsia-400/20" />

      <div className="space-y-10">
        {differentiators.map((item, idx) => {
          const score = getScore(item.id);
          const isLeft = idx % 2 === 0;
          return (
            <div key={item.id} className={`grid lg:grid-cols-2 gap-6 items-stretch ${isLeft ? '' : ''}`}>
              <div className={`hidden lg:block ${isLeft ? 'order-1' : 'order-2'}`} />
              <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative group">
                  {/* node */}
                  <div className={`hidden lg:block absolute ${isLeft ? '-left-9' : '-right-9'} top-8 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shadow-[0_0_20px_rgba(99,102,241,0.6)]`} />
                  <div className="rounded-3xl p-8 glass-ios ring-1 ring-white/10 shadow-xl overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(60%_60%_at_100%_40%,rgba(99,102,241,0.12),transparent),radial-gradient(60%_60%_at_0%_100%,rgba(217,70,239,0.12),transparent)]" />
                    <div className="flex items-start justify-between">
                      <div className="p-4 rounded-2xl bg-white/10 ring-1 ring-white/15"><Icon name={item.icon} size={26} className="text-white" /></div>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">{item.metric}</div>
                        <div className="text-xs text-slate-300">{item.metricLabel}</div>
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    <div className="mt-6 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-1.5 bg-white" style={{ width: `${score}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// New ribbon grid subcomponent (non-repetitive design)
function RibbonGrid({ differentiators }) {
  const getScore = (id) => (id === 1 ? 100 : id === 2 ? 95 : id === 3 ? 98 : id === 4 ? 99 : id === 5 ? 96 : 97);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {differentiators.map((item, idx) => {
        const score = getScore(item.id);
        return (
          <div key={item.id} className="relative overflow-hidden rounded-3xl p-6 bg-white/5 ring-1 ring-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.35)]">
            {/* ribbon */}
            <div className="absolute -right-16 -top-10 rotate-12">
              <div className="px-10 py-2 rounded-full bg-gradient-to-r from-[#FF0C0D] to-[#FFA52E] text-black text-xs font-extrabold tracking-widest uppercase">
                {item.metricLabel}
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="p-4 rounded-2xl bg-white/10 ring-1 ring-white/15"><Icon name={item.icon} size={28} className="text-white" /></div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-white inline-flex items-baseline gap-1">
                  <span>{item.metric}</span>
                </div>
                <div className="text-xs text-slate-300">{item.metricLabel}</div>
              </div>
            </div>
            <h4 className="mt-4 text-2xl font-bold text-white">{item.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            <div className="mt-6 relative h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-white" style={{ width: `${score}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Premium morphing grid with dynamic layouts (used by premium websites)
function MorphingGrid({ differentiators }) {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <div className="relative">
      {/* Background ambient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.03),transparent_50%)]" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {differentiators.map((item, idx) => {
          const isHovered = hoveredId === item.id;
          const isLarge = idx === 0 || idx === 3; // Strategic large cards
          
          return (
            <div
              key={item.id}
              className={`relative group transition-all duration-700 ease-out ${
                isLarge ? 'md:col-span-2 lg:col-span-1' : ''
              } ${isHovered ? 'scale-105 z-10' : 'scale-100'}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Premium card with morphing borders */}
              <div className={`
                relative h-full rounded-3xl p-6 overflow-hidden
                bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                ring-1 ring-white/10 backdrop-blur-sm
                transition-all duration-700 ease-out
                ${isHovered ? 'ring-white/25 shadow-2xl shadow-black/20' : 'shadow-lg'}
              `}>
                
                {/* Morphing border effect */}
                <div className={`
                  absolute inset-0 rounded-3xl
                  bg-gradient-to-r from-transparent via-white/5 to-transparent
                  transition-all duration-1000 ease-out
                  ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
                `} />
                
                {/* Content wrapper */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Header with premium metrics */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`
                      p-3 rounded-2xl transition-all duration-500
                      ${isHovered 
                        ? 'bg-gradient-to-br from-white/20 to-white/10 scale-110' 
                        : 'bg-white/10'
                      }
                    `}>
                      <Icon 
                        name={item.icon} 
                        size={24} 
                        className={`transition-colors duration-500 ${
                          isHovered ? 'text-[#FF0C0D]' : 'text-white'
                        }`} 
                      />
                    </div>
                    
                    <div className="text-right">
                      <div className={`
                        text-3xl font-black transition-all duration-500
                        ${isHovered ? 'text-[#FF0C0D] scale-110' : 'text-white'}
                      `}>
                        {item.metric}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className={`
                      text-xl font-bold mb-3 transition-all duration-500
                      ${isHovered ? 'text-[#FF0C0D]' : 'text-white'}
                    `}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Premium progress indicator */}
                  <div className="mt-6">
                    <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`
                          absolute inset-y-0 left-0 h-full rounded-full
                          bg-white
                          transition-all duration-1000 ease-out
                          ${isHovered ? 'scale-x-110' : 'scale-x-100'}
                        `}
                        style={{ 
                          width: `${(item.id === 1 ? 100 : item.id === 2 ? 95 : item.id === 3 ? 98 : item.id === 4 ? 99 : item.id === 5 ? 96 : 97)}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`
                  absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                  bg-gradient-to-br from-[#FF0C0D]/20 via-transparent to-cyan-400/20
                  ${isHovered ? 'opacity-100' : ''}
                `} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}