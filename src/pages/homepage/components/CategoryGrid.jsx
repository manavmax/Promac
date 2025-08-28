import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategoryGrid = () => {
  const [selectedId, setSelectedId] = useState(1);



  const categories = [
    {
      id: 1,
      name: "Circuit Protection",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
      productCount: "250+ Products",
      subcategories: ["MCBs", "RCCBs", "Isolators", "Distribution Boards"],
      specifications: "6A to 63A ratings",
      featured: true
    },
    {
      id: 2,
      name: "Lighting Solutions",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=80",
      productCount: "180+ Products",
      subcategories: ["LED Panels", "Street Lights", "Flood Lights", "Emergency Lights"],
      specifications: "3W to 200W range"
    },
    {
      id: 3,
      name: "Switches & Sockets",
      icon: "ToggleLeft",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      productCount: "320+ Products",
      subcategories: ["Modular Switches", "Industrial Sockets", "USB Outlets", "Smart Switches"],
      specifications: "6A to 32A capacity"
    },
    {
      id: 4,
      name: "Cables & Wires",
      icon: "Cable",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      productCount: "150+ Products",
      subcategories: ["House Wires", "Armoured Cables", "Control Cables", "Flexible Cords"],
      specifications: "0.75mm² to 400mm²"
    },
    {
      id: 5,
      name: "Smart Home",
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
      productCount: "95+ Products",
      subcategories: ["Smart Switches", "Motion Sensors", "Smart Plugs", "Home Automation"],
      specifications: "WiFi & Bluetooth enabled",
      featured: true
    },
    {
      id: 6,
      name: "Industrial Equipment",
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      productCount: "200+ Products",
      subcategories: ["Contactors", "Relays", "Motor Starters", "Control Panels"],
      specifications: "Up to 1000V rating"
    }
  ];

  const selected = useMemo(() => categories.find(c => c.id === selectedId) || categories[0], [selectedId]);

  return (
    <section className="py-16 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Explore Our </span>
            <span className="text-[#FF0C0D]">Product</span>
            <span className="text-white"> Categories</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover comprehensive electrical solutions across all categories with technical specifications and expert guidance
          </p>
        </div>

        {/* Custom layout: Circuit Protection + Lighting Solutions side by side, others below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Circuit Protection - Left */}
          <Link
            to="/product-catalog?category=circuit-protection"
            className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-slate-900/40 h-80 lg:h-96"
            onMouseEnter={() => setSelectedId(1)}
          >
            <Image src={categories[0].image} alt={categories[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="relative h-full w-full p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-xl p-3 bg-white/10 ring-1 ring-white/20">
                  <Icon name={categories[0].icon} size={20} color="#FFFFFF" />
                </span>
                <span className="text-white/80 text-sm">{categories[0].productCount}</span>
              </div>
              <h3 className="font-extrabold text-white tracking-tight text-3xl mb-2">{categories[0].name}</h3>
              <p className="text-white/80 text-sm mb-4">{categories[0].specifications}</p>
              <div className="flex flex-wrap gap-2">
                {categories[0].subcategories.map((sub, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full text-xs bg-white/10 text-white/90 ring-1 ring-white/15">{sub}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Lighting Solutions - Right */}
          <Link
            to="/product-catalog?category=lighting-solutions"
            className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-slate-900/40 h-80 lg:h-96"
            onMouseEnter={() => setSelectedId(2)}
          >
            <Image src={categories[1].image} alt={categories[1].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="relative h-full w-full p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded-xl p-3 bg-white/10 ring-1 ring-white/20">
                  <Icon name={categories[1].icon} size={20} color="#FFFFFF" />
                </span>
                <span className="text-white/80 text-sm">{categories[1].productCount}</span>
              </div>
              <h3 className="font-extrabold text-white tracking-tight text-3xl mb-2">{categories[1].name}</h3>
              <p className="text-white/80 text-sm mb-4">{categories[1].specifications}</p>
              <div className="flex flex-wrap gap-2">
                {categories[1].subcategories.map((sub, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full text-xs bg-white/10 text-white/90 ring-1 ring-white/15">{sub}</span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* Remaining categories in their original treemap layout */}
        {(() => {
          // Sort remaining categories by numeric product count (desc)
          const remainingCategories = categories.slice(2).map((c) => ({
            ...c,
            count: parseInt(String(c.productCount).replace(/\D/g, ''), 10) || 0,
          }));
          const sorted = [...remainingCategories].sort((a, b) => b.count - a.count);
          // Top 2: large, next 2: medium, rest: small
          const sizeMap = new Map();
          sorted.forEach((c, idx) => {
            sizeMap.set(
              c.id,
              idx < 2 ? 'L' : idx < 4 ? 'M' : 'S'
            );
          });

          return (
            <div className="grid grid-cols-6 gap-4 auto-rows-[120px] sm:auto-rows-[140px] md:auto-rows-[160px] lg:auto-rows-[180px]">
              {remainingCategories.map((c) => {
                const size = sizeMap.get(c.id);
                const spanCls =
                  size === 'L'
                    ? 'col-span-6 sm:col-span-4 row-span-3'
                    : size === 'M'
                    ? 'col-span-6 sm:col-span-3 row-span-2'
                    : 'col-span-6 sm:col-span-2 row-span-2';
                return (
                  <Link
                    key={`tile-${c.id}`}
                    to={`/product-catalog?category=${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-slate-900/40 ${spanCls}`}
                    onMouseEnter={() => setSelectedId(c.id)}
                  >
                    <Image src={c.image} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="relative h-full w-full p-5 sm:p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="rounded-xl p-3 bg-white/10 ring-1 ring-white/20">
                          <Icon name={c.icon} size={18} color="#FFFFFF" />
                        </span>
                        <span className="text-white/80 text-xs sm:text-sm">{c.productCount}</span>
                      </div>
                      <h3 className={`font-extrabold text-white tracking-tight ${size === 'L' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>{c.name}</h3>
                      <p className="text-white/80 text-xs sm:text-sm mt-1">{c.specifications}</p>
                      <div className={`mt-3 sm:mt-4 flex flex-wrap gap-2 ${size === 'S' ? 'hidden sm:flex' : ''}`}>
                        {c.subcategories.map((sub, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs bg-white/10 text-white/90 ring-1 ring-white/15">{sub}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })()}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/product-catalog">
            <button className="px-8 py-3 rounded-full font-semibold text-white flex items-center space-x-2 mx-auto bg-[#FF0C0D] hover:bg-[#FF0C0D]/90 shadow-lg transition-colors duration-200">
              <Icon name="ArrowRight" size={18} />
              <span>View All Categories</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;