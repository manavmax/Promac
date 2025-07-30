import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CategoryMegaMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('residential');

  const categories = {
    residential: {
      name: 'Residential',
      icon: 'Home',
      color: 'text-brand-green',
      bgColor: 'bg-green-50',
      products: [
        {
          name: 'Switches & Outlets',
          items: ['Modular Switches', 'Socket Outlets', 'USB Charging Points', 'Fan Regulators'],
          icon: 'ToggleLeft'
        },
        {
          name: 'Circuit Protection',
          items: ['MCBs', 'RCCBs', 'Distribution Boards', 'Surge Protectors'],
          icon: 'Shield'
        },
        {
          name: 'Smart Devices',
          items: ['Smart Switches', 'Motion Sensors', 'Smart Plugs', 'WiFi Controllers'],
          icon: 'Smartphone'
        },
        {
          name: 'Lighting Solutions',
          items: ['LED Fixtures', 'Decorative Lights', 'Emergency Lights', 'Street Lights'],
          icon: 'Lightbulb'
        }
      ]
    },
    commercial: {
      name: 'Commercial',
      icon: 'Building2',
      color: 'text-action-blue',
      bgColor: 'bg-blue-50',
      products: [
        {
          name: 'Power Distribution',
          items: ['Panel Boards', 'Bus Ducts', 'Cable Trays', 'Junction Boxes'],
          icon: 'Zap'
        },
        {
          name: 'Motor Controls',
          items: ['Contactors', 'Overload Relays', 'Soft Starters', 'VFDs'],
          icon: 'Settings'
        },
        {
          name: 'Safety Systems',
          items: ['Fire Alarms', 'Emergency Lighting', 'Exit Signs', 'Smoke Detectors'],
          icon: 'AlertTriangle'
        },
        {
          name: 'Energy Management',
          items: ['Energy Meters', 'Power Analyzers', 'Load Controllers', 'Capacitor Banks'],
          icon: 'Activity'
        }
      ]
    },
    industrial: {
      name: 'Industrial',
      icon: 'Factory',
      color: 'text-brand-orange',
      bgColor: 'bg-orange-50',
      products: [
        {
          name: 'Heavy Duty Controls',
          items: ['Industrial Contactors', 'Motor Starters', 'Control Panels', 'Push Buttons'],
          icon: 'Cpu'
        },
        {
          name: 'Protection Devices',
          items: ['Industrial MCBs', 'ACBs', 'Isolators', 'Earth Leakage'],
          icon: 'ShieldCheck'
        },
        {
          name: 'Automation',
          items: ['PLCs', 'HMIs', 'Sensors', 'Actuators'],
          icon: 'Bot'
        },
        {
          name: 'Power Quality',
          items: ['Harmonic Filters', 'Voltage Stabilizers', 'UPS Systems', 'Transformers'],
          icon: 'Gauge'
        }
      ]
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="absolute top-16 left-0 right-0 glass-effect border-t border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex space-x-8">
            {/* Category Tabs */}
            <div className="w-64 space-y-2">
              {Object.entries(categories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left brand-transition ${
                    activeCategory === key
                      ? `${category.bgColor} ${category.color} shadow-sm`
                      : 'text-text-primary hover:bg-white/50'
                  }`}
                >
                  <Icon name={category.icon} size={20} />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {categories[activeCategory].products.map((product, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Icon name={product.icon} size={18} className={categories[activeCategory].color} />
                      <h3 className="font-semibold text-text-primary">{product.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {product.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button className="text-sm text-text-secondary hover:text-brand-navy brand-transition">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured Banner */}
              <div className="mt-8 p-4 bg-gradient-to-r from-brand-navy to-action-blue rounded-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">New BIS Certified Products</h3>
                    <p className="text-sm opacity-90">Explore our latest certified electrical components</p>
                  </div>
                  <Icon name="Award" size={24} className="opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryMegaMenu;