import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, SendHorizonal, Menu, X, Zap, ShoppingCart, Play, Phone, Home, Package, Building2, Info, HelpCircle, MapPin, MoreHorizontal } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { AnimatedGroup } from '../../../components/ui/AnimatedGroup';
import { cn } from '../../../utils/cn';
import { InfiniteSlider } from '../../../components/ui/InfiniteSlider';
import { ProgressiveBlur } from '../../../components/ui/ProgressiveBlur';
import { AuroraBackground } from '../../../components/ui/aurora-background';
import { Typewriter } from '../../../components/ui/typewriter';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const HeroSection = () => {
  return (
    <>
      <AuroraBackground className="w-full dark unified-hero">
        <div className="pt-20 pb-16 w-full flex items-center justify-center min-h-screen relative">
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="relative z-10 mx-auto max-w-4xl text-center mt-36">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
              >
                <h1 className="text-center text-4xl font-medium sm:text-5xl md:text-6xl text-white">
                  Powering
                  <span className="text-[#FF0C0D] block">
                    <Typewriter
                      text={["Excellence", "Tomorrow"]}
                      speed={100}
                      waitTime={2000}
                      deleteSpeed={50}
                      loop={true}
                      className="text-[#FF0C0D]"
                      showCursor={false}
                    />
                  </span>
                  <span className="text-gray-300 text-3xl lg:text-4xl">Since 1998</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-300">
                  Trusted by contractors, distributors, and homeowners nationwide. 
                  Premium electrical components with unmatched quality and service.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/product-catalog">
                    <Button
                      size="lg"
                      className="rounded-full px-8 py-4 text-lg bg-[#FF0C0D] hover:bg-[#FF0C0D]/90 text-white"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Explore Products
                    </Button>
                  </Link>
                  <Link to="/contact-locations">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 py-4 text-lg border-2 border-white bg-white text-black hover:bg-[#3B81F6] hover:border-[#3B81F6] hover:text-white"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us
                    </Button>
                  </Link>
                </div>

                {/* LogoCloud section positioned below buttons */}
                <div className="mt-32 w-full">
                  <LogoCloud />
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </AuroraBackground>
    </>
  );
};

const AppComponent = () => {
  return (
    <div className="relative space-y-3 rounded-[1rem] bg-white/5 p-4">
      <div className="flex items-center gap-1.5 text-orange-400">
        <Zap className="h-5 w-5" />
        <div className="text-sm font-medium">Quality Metrics</div>
      </div>
      <div className="space-y-3">
        <div className="text-foreground border-b border-white/10 pb-3 text-sm font-medium">
          This year, our products have achieved higher quality ratings than ever before.
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-foreground align-baseline text-xl font-medium">99.8%</span>
              <span className="text-muted-foreground text-xs">Quality Score</span>
            </div>
            <div className="flex h-5 items-center rounded bg-gradient-to-l from-emerald-400 to-indigo-600 px-2 text-xs text-white">2024</div>
          </div>
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-foreground align-baseline text-xl font-medium">98.5%</span>
              <span className="text-muted-foreground text-xs">Quality Score</span>
            </div>
            <div className="text-foreground bg-muted flex h-5 w-2/3 items-center rounded px-2 text-xs dark:bg-white/20">2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LogoCloud = () => {
  const logos = [
    { name: "Schneider Electric", src: "/assets/images/images__3_-removebg-preview.png" },
    { name: "Siemens", src: "/assets/images/siemens_logo_white.png" },
    { name: "ABB", src: "/assets/images/ABB_Logo_Print_CMYK_White.png" },
    { name: "Eaton", src: "/assets/images/eaton-logo-white.png" },
    { name: "Legrand", src: "/assets/images/images__2_-removebg-preview.png" },
    { name: "Havells", src: "/assets/images/images__1_-removebg-preview.png" },
    { name: "Crompton", src: "/assets/images/images-removebg-preview.png" },
    { name: "Philips", src: "/assets/images/Philips-Logo-removebg-preview.png" },
    { name: "Osram", src: "/assets/images/osram-logo.png" },
    { name: "Hager", src: "/assets/images/hager-logo-partenaire-fc-integration-domotique-nice.png" }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center md:flex-row max-w-4xl mx-auto">
        <div className="inline md:max-w-44 md:border-r md:border-white/20 md:pr-6 mb-4 md:mb-0">
          <div className="text-center md:text-end text-sm text-white">
            <div className="font-medium">Powering the best</div>
            <div className="font-medium">teams</div>
          </div>
        </div>
        <div className="relative py-4 md:w-[calc(100%-11rem)] overflow-hidden">
          <div className="flex items-center animate-scroll" style={{ width: 'max-content' }}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center w-24 h-12 mx-6 flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto grayscale brightness-0 invert"
                  style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
                  onError={(e) => {
                    console.log('Image failed to load:', logo.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center w-24 h-12 mx-6 flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto grayscale brightness-0 invert"
                  style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
                  onError={(e) => {
                    console.log('Image failed to load:', logo.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;