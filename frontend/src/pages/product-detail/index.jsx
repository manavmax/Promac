import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import AuthCartButton from '../../components/AuthCartButton';
import AuthBuyButton from '../../components/AuthBuyButton';
import AuthWishlistButton from '../../components/AuthWishlistButton';
import AuthReviewButton from '../../components/AuthReviewButton';
import { Footer } from '../../components/ui/Footer';
import { useCart } from '../../contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock products data - same as in product catalog
  const mockProducts = [
    {
      id: 1,
      name: "Schneider Electric Modular Switch 16A",
      brand: "Schneider Electric",
      price: 245,
      originalPrice: 295,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
      ],
      rating: 4.5,
      reviewCount: 128,
      stock: 45,
      isNew: true,
      isBestSeller: false,
      certifications: ['BIS', 'ISI'],
      createdAt: '2024-01-15',
      keySpecs: [
        { label: 'Current Rating', value: '16A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'PC/ABS' },
        { label: 'Color', value: 'White' },
        { label: 'Installation', value: 'Surface Mount' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '2 Years',
      variants: [
        { id: 'v1', name: '6A', price: 195 },
        { id: 'v2', name: '16A', price: 245 },
        { id: 'v3', name: '25A', price: 345 }
      ],
      description: "Premium modular switch from Schneider Electric with superior quality and safety standards. Features include easy installation, durable construction, and BIS certification for reliability. This switch is designed for residential and commercial applications, providing reliable electrical control with modern aesthetics.",
      features: [
        "Easy installation with snap-on mechanism",
        "Durable PC/ABS construction",
        "BIS certified for safety",
        "Compatible with standard wiring",
        "Available in multiple current ratings",
        "2-year warranty included"
      ],
      ingredients: [
        "PC/ABS Material",
        "Copper Contacts",
        "Fire Retardant Components",
        "UV Stabilized Housing"
      ],
      sustainability: [
        "Recyclable materials used in construction",
        "Energy efficient design",
        "Long-lasting durability reduces waste",
        "Compliant with environmental standards"
      ],
      howToUse: [
        "Turn off power supply before installation",
        "Remove existing switch carefully",
        "Connect wires according to color coding",
        "Secure switch in place with screws",
        "Test functionality before use"
      ],
      reviews: [
        {
          id: 1,
          user: "Rahul Sharma",
          rating: 5,
          date: "2024-01-15",
          title: "EXCELLENT QUALITY",
          comment: "Excellent quality product. Easy to install and works perfectly. The build quality is outstanding and it looks great in my home.",
          verified: true,
          location: "Mumbai, India"
        },
        {
          id: 2,
          user: "Priya Patel",
          rating: 4,
          date: "2024-01-10",
          title: "GOOD PRODUCT",
          comment: "Good product, fast delivery. Would recommend to others. Installation was straightforward and the switch works smoothly.",
          verified: true,
          location: "Delhi, India"
        },
        {
          id: 3,
          user: "Amit Kumar",
          rating: 5,
          date: "2024-01-08",
          title: "PERFECT SWITCH",
          comment: "Perfect switch for my needs. The quality is top-notch and the price is reasonable. Very satisfied with this purchase.",
          verified: true,
          location: "Bangalore, India"
        }
      ]
    },
    {
      id: 2,
      name: "Siemens Circuit Breaker MCB 32A",
      brand: "Siemens",
      price: 1250,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
      ],
      rating: 4.8,
      reviewCount: 89,
      stock: 23,
      isNew: false,
      isBestSeller: true,
      certifications: ['BIS', 'CE'],
      createdAt: '2024-01-10',
      keySpecs: [
        { label: 'Current Rating', value: '32A' },
        { label: 'Breaking Capacity', value: '10kA' },
        { label: 'Poles', value: 'Single Pole' },
        { label: 'Curve Type', value: 'C-Curve' },
        { label: 'Installation', value: 'DIN Rail' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '3 Years',
      variants: [
        { id: 'v1', name: '16A', price: 950 },
        { id: 'v2', name: '32A', price: 1250 },
        { id: 'v3', name: '40A', price: 1550 }
      ],
      description: "High-quality circuit breaker from Siemens with superior protection and reliability. Features include advanced trip mechanism, durable construction, and CE certification for safety.",
      features: [
        "Advanced trip mechanism for precise protection",
        "Durable construction for long service life",
        "CE certified for safety standards",
        "Easy DIN rail installation",
        "Multiple current ratings available",
        "3-year warranty coverage"
      ],
      ingredients: [
        "High-grade Plastic Housing",
        "Copper Alloy Contacts",
        "Thermal Trip Unit",
        "Magnetic Trip Unit"
      ],
      sustainability: [
        "RoHS compliant materials",
        "Energy efficient operation",
        "Recyclable components",
        "Long service life reduces replacement"
      ],
      howToUse: [
        "Install on DIN rail in electrical panel",
        "Connect load and supply wires",
        "Ensure proper torque on connections",
        "Test trip mechanism after installation",
        "Regular maintenance recommended"
      ],
      reviews: [
        {
          id: 1,
          user: "Amit Kumar",
          rating: 5,
          date: "2024-01-12",
          title: "RELIABLE PROTECTION",
          comment: "Excellent circuit breaker, provides reliable protection. The build quality is exceptional and installation was easy.",
          verified: true,
          location: "Chennai, India"
        },
        {
          id: 2,
          user: "Suresh Patel",
          rating: 4,
          date: "2024-01-08",
          title: "GOOD QUALITY",
          comment: "Good quality product, installation was straightforward. Works as expected and provides good protection.",
          verified: true,
          location: "Pune, India"
        }
      ]
    },
    {
      id: 3,
      name: "ABB Smart WiFi Switch with App Control",
      brand: "ABB",
      price: 2850,
      originalPrice: 3200,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop"
      ],
      rating: 4.3,
      reviewCount: 67,
      stock: 12,
      isNew: true,
      isBestSeller: false,
      certifications: ['BIS', 'WiFi'],
      createdAt: '2024-01-20',
      keySpecs: [
        { label: 'Connectivity', value: 'WiFi 2.4GHz' },
        { label: 'Load Capacity', value: '10A' },
        { label: 'App Support', value: 'iOS/Android' },
        { label: 'Voice Control', value: 'Alexa/Google' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'PC/ABS' }
      ],
      bulkPricing: false,
      fastDelivery: true,
      warranty: '1 Year',
      variants: [
        { id: 'v1', name: '6A', price: 2450 },
        { id: 'v2', name: '10A', price: 2850 },
        { id: 'v3', name: '16A', price: 3250 }
      ],
      description: "Smart WiFi switch from ABB with advanced app control and voice integration. Features include remote control, scheduling, and compatibility with major smart home platforms.",
      features: [
        "WiFi connectivity for remote control",
        "Mobile app for iOS and Android",
        "Voice control with Alexa and Google Assistant",
        "Scheduling and automation features",
        "Energy monitoring capabilities",
        "Easy installation and setup"
      ],
      ingredients: [
        "PC/ABS Housing",
        "WiFi Module",
        "Copper Contacts",
        "Smart Control Board"
      ],
      sustainability: [
        "Energy efficient operation",
        "Reduces standby power consumption",
        "Recyclable materials",
        "Long-lasting design"
      ],
      howToUse: [
        "Download the ABB Smart Home app",
        "Connect to WiFi network",
        "Follow in-app setup instructions",
        "Configure voice assistants if desired",
        "Set up schedules and automations"
      ],
      reviews: [
        {
          id: 1,
          user: "Rajesh Kumar",
          rating: 5,
          date: "2024-01-18",
          title: "EXCELLENT SMART SWITCH",
          comment: "Great smart switch with reliable WiFi connectivity. The app is user-friendly and voice control works perfectly with Alexa.",
          verified: true,
          location: "Hyderabad, India"
        },
        {
          id: 2,
          user: "Priya Singh",
          rating: 4,
          date: "2024-01-15",
          title: "GOOD PRODUCT",
          comment: "Good smart switch, easy to install and configure. App works well and scheduling feature is very useful.",
          verified: true,
          location: "Mumbai, India"
        }
      ]
    },
    {
      id: 4,
      name: "Legrand Myrius Socket Outlet 16A",
      brand: "Legrand",
      price: 185,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop"
      ],
      rating: 4.2,
      reviewCount: 156,
      stock: 78,
      isNew: false,
      isBestSeller: true,
      certifications: ['BIS', 'ISI'],
      createdAt: '2024-01-05',
      keySpecs: [
        { label: 'Current Rating', value: '16A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'Fire Retardant' },
        { label: 'Finish', value: 'Matte White' },
        { label: 'Installation', value: 'Surface Mount' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '2 Years',
      variants: [
        { id: 'v1', name: '6A', price: 145 },
        { id: 'v2', name: '16A', price: 185 },
        { id: 'v3', name: '25A', price: 225 }
      ],
      description: "Premium socket outlet from Legrand with fire retardant material and matte white finish. Features superior build quality and safety standards.",
      features: [
        "Fire retardant material construction",
        "Matte white finish for modern look",
        "Easy installation with snap-on mechanism",
        "BIS and ISI certified for safety",
        "Durable contacts for long service life",
        "Compatible with standard plugs"
      ],
      ingredients: [
        "Fire Retardant Plastic",
        "Copper Alloy Contacts",
        "UV Stabilized Housing",
        "Safety Components"
      ],
      sustainability: [
        "Fire retardant materials for safety",
        "Long-lasting durability",
        "Recyclable components",
        "Energy efficient design"
      ],
      howToUse: [
        "Turn off power supply before installation",
        "Remove existing socket carefully",
        "Connect wires according to color coding",
        "Secure socket in place with screws",
        "Test functionality before use"
      ],
      reviews: [
        {
          id: 1,
          user: "Amit Verma",
          rating: 4,
          date: "2024-01-12",
          title: "GOOD QUALITY SOCKET",
          comment: "Good quality socket with nice finish. Installation was easy and it looks great in my home.",
          verified: true,
          location: "Delhi, India"
        },
        {
          id: 2,
          user: "Sunita Patel",
          rating: 5,
          date: "2024-01-08",
          title: "EXCELLENT PRODUCT",
          comment: "Excellent socket outlet, very good build quality and the matte finish looks premium.",
          verified: true,
          location: "Ahmedabad, India"
        }
      ]
    },
    {
      id: 5,
      name: "Havells LED Panel Light 24W",
      brand: "Havells",
      price: 850,
      originalPrice: 950,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
      ],
      rating: 4.6,
      reviewCount: 203,
      stock: 34,
      isNew: false,
      isBestSeller: true,
      certifications: ['BIS', 'ISI'],
      createdAt: '2024-01-08',
      keySpecs: [
        { label: 'Power', value: '24W' },
        { label: 'Luminosity', value: '2400 Lumens' },
        { label: 'Color Temperature', value: '6500K' },
        { label: 'Life Span', value: '25,000 Hours' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'Aluminum' }
      ],
      bulkPricing: true,
      fastDelivery: false,
      warranty: '3 Years',
      variants: [
        { id: 'v1', name: '12W', price: 650 },
        { id: 'v2', name: '24W', price: 850 },
        { id: 'v3', name: '36W', price: 1150 }
      ],
      description: "Energy-efficient LED panel light from Havells with high luminosity and long lifespan. Perfect for commercial and residential applications.",
      features: [
        "High luminosity with low power consumption",
        "Long lifespan of 25,000 hours",
        "Cool white light (6500K)",
        "Aluminum construction for heat dissipation",
        "Easy installation with mounting brackets",
        "3-year warranty coverage"
      ],
      ingredients: [
        "LED Chips",
        "Aluminum Heat Sink",
        "PC Diffuser",
        "Driver Circuit"
      ],
      sustainability: [
        "Energy efficient LED technology",
        "Long lifespan reduces waste",
        "Recyclable aluminum construction",
        "Low carbon footprint"
      ],
      howToUse: [
        "Turn off power supply before installation",
        "Mount the panel using provided brackets",
        "Connect wires according to instructions",
        "Secure the panel in place",
        "Test the light before final installation"
      ],
      reviews: [
        {
          id: 1,
          user: "Vikram Singh",
          rating: 5,
          date: "2024-01-14",
          title: "BRIGHT AND EFFICIENT",
          comment: "Very bright light with excellent energy efficiency. Perfect for my office space and the installation was straightforward.",
          verified: true,
          location: "Bangalore, India"
        },
        {
          id: 2,
          user: "Meera Sharma",
          rating: 4,
          date: "2024-01-10",
          title: "GOOD LED PANEL",
          comment: "Good LED panel light, bright and efficient. The build quality is solid and it looks modern.",
          verified: true,
          location: "Pune, India"
        }
      ]
    },
    {
      id: 6,
      name: "Philips Smart WiFi Bulb",
      brand: "Philips",
      price: 650,
      originalPrice: 750,
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
      ],
      rating: 4.4,
      reviewCount: 89,
      stock: 56,
      isNew: true,
      isBestSeller: false,
      certifications: ['BIS', 'WiFi'],
      createdAt: '2024-01-12',
      keySpecs: [
        { label: 'Power', value: '9W' },
        { label: 'Connectivity', value: 'WiFi 2.4GHz' },
        { label: 'Color Range', value: '16 Million' },
        { label: 'Voice Control', value: 'Alexa/Google' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Life Span', value: '15,000 Hours' }
      ],
      bulkPricing: false,
      fastDelivery: true,
      warranty: '2 Years',
      variants: [
        { id: 'v1', name: '9W', price: 650 },
        { id: 'v2', name: '12W', price: 850 },
        { id: 'v3', name: '15W', price: 1050 }
      ],
      description: "Smart WiFi bulb from Philips with 16 million color options and voice control. Features app control, scheduling, and compatibility with smart home systems.",
      features: [
        "16 million color options",
        "WiFi connectivity for remote control",
        "Voice control with Alexa and Google",
        "Mobile app for easy control",
        "Scheduling and automation features",
        "Energy efficient LED technology"
      ],
      ingredients: [
        "LED Chips",
        "WiFi Module",
        "Smart Driver",
        "Heat Sink"
      ],
      sustainability: [
        "Energy efficient LED technology",
        "Long lifespan reduces waste",
        "Smart features reduce energy consumption",
        "Recyclable materials"
      ],
      howToUse: [
        "Download the Philips Hue app",
        "Connect to WiFi network",
        "Follow app setup instructions",
        "Configure voice assistants",
        "Set up scenes and schedules"
      ],
      reviews: [
        {
          id: 1,
          user: "Arjun Patel",
          rating: 4,
          date: "2024-01-16",
          title: "GREAT SMART BULB",
          comment: "Great smart bulb with excellent color options. The app is easy to use and voice control works well.",
          verified: true,
          location: "Chennai, India"
        },
        {
          id: 2,
          user: "Kavya Reddy",
          rating: 5,
          date: "2024-01-13",
          title: "AMAZING COLORS",
          comment: "Amazing color options and very easy to control. Perfect for creating different moods in my home.",
          verified: true,
          location: "Hyderabad, India"
        }
      ]
    },
    {
      id: 7,
      name: "Schneider RCCB 40A 30mA",
      brand: "Schneider Electric",
      price: 3450,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
      ],
      rating: 4.7,
      reviewCount: 45,
      stock: 18,
      isNew: true,
      isBestSeller: false,
      createdAt: '2024-01-18',
      certifications: ['BIS', 'CE'],
      keySpecs: [
        { label: 'Current Rating', value: '40A' },
        { label: 'Sensitivity', value: '30mA' },
        { label: 'Poles', value: '4-Pole' },
        { label: 'Type', value: 'AC Type' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Installation', value: 'DIN Rail' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '3 Years',
      variants: [
        { id: 'v1', name: '25A', price: 2850 },
        { id: 'v2', name: '40A', price: 3450 },
        { id: 'v3', name: '63A', price: 4250 }
      ],
      description: "High-quality RCCB from Schneider Electric with 30mA sensitivity for enhanced safety. Features 4-pole design and AC type protection.",
      features: [
        "30mA sensitivity for enhanced safety",
        "4-pole design for comprehensive protection",
        "AC type for general applications",
        "DIN rail mounting for easy installation",
        "High breaking capacity",
        "3-year warranty coverage"
      ],
      ingredients: [
        "High-grade Plastic Housing",
        "Copper Alloy Contacts",
        "Residual Current Transformer",
        "Trip Mechanism"
      ],
      sustainability: [
        "Enhanced safety reduces accidents",
        "Long service life",
        "Recyclable materials",
        "Energy efficient operation"
      ],
      howToUse: [
        "Install on DIN rail in electrical panel",
        "Connect load and supply wires",
        "Ensure proper torque on connections",
        "Test RCCB functionality",
        "Regular testing recommended"
      ],
      reviews: [
        {
          id: 1,
          user: "Ravi Kumar",
          rating: 5,
          date: "2024-01-20",
          title: "EXCELLENT SAFETY DEVICE",
          comment: "Excellent RCCB with reliable protection. Installation was easy and it provides great safety for my electrical system.",
          verified: true,
          location: "Mumbai, India"
        },
        {
          id: 2,
          user: "Deepak Sharma",
          rating: 4,
          date: "2024-01-17",
          title: "GOOD QUALITY RCCB",
          comment: "Good quality RCCB, works as expected. The build quality is solid and installation was straightforward.",
          verified: true,
          location: "Delhi, India"
        }
      ]
    },
    {
      id: 8,
      name: "Eaton Power Distribution Unit 32A",
      brand: "Eaton",
      price: 4200,
      originalPrice: 4800,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
      ],
      rating: 4.8,
      reviewCount: 67,
      stock: 15,
      isNew: true,
      isBestSeller: false,
      certifications: ['BIS', 'CE', 'ISO'],
      createdAt: '2024-01-22',
      keySpecs: [
        { label: 'Current Rating', value: '32A' },
        { label: 'Voltage', value: '400V AC' },
        { label: 'Poles', value: '3 Pole' },
        { label: 'Breaking Capacity', value: '25kA' },
        { label: 'Installation', value: 'DIN Rail' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '5 Years',
      variants: [
        { id: 'v1', name: '25A', price: 3800 },
        { id: 'v2', name: '32A', price: 4200 },
        { id: 'v3', name: '40A', price: 4800 }
      ],
      description: "Professional power distribution unit from Eaton with high breaking capacity and 3-pole design. Ideal for industrial and commercial applications.",
      features: [
        "High breaking capacity of 25kA",
        "3-pole design for balanced distribution",
        "DIN rail mounting for easy installation",
        "IP20 protection rating",
        "5-year warranty coverage",
        "ISO certified quality"
      ],
      ingredients: [
        "High-grade Steel Housing",
        "Copper Busbars",
        "Arc Quenching Chambers",
        "Trip Units"
      ],
      sustainability: [
        "High efficiency reduces energy loss",
        "Long service life",
        "Recyclable steel construction",
        "Reduces electrical waste"
      ],
      howToUse: [
        "Install on DIN rail in electrical panel",
        "Connect supply and load connections",
        "Ensure proper torque on all connections",
        "Test functionality after installation",
        "Regular maintenance recommended"
      ],
      reviews: [
        {
          id: 1,
          user: "Suresh Agarwal",
          rating: 5,
          date: "2024-01-24",
          title: "PROFESSIONAL GRADE UNIT",
          comment: "Professional grade power distribution unit. Excellent build quality and reliable performance for industrial use.",
          verified: true,
          location: "Gurgaon, India"
        },
        {
          id: 2,
          user: "Anita Joshi",
          rating: 4,
          date: "2024-01-21",
          title: "GOOD INDUSTRIAL UNIT",
          comment: "Good industrial power distribution unit. Installation was easy and it provides reliable power distribution.",
          verified: true,
          location: "Pune, India"
        }
      ]
    }
  ];

  // Find the product by ID
  const product = mockProducts.find(p => p.id === parseInt(id));
  
  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Icon name="Package" size={64} className="text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button
            onClick={() => navigate('/product-catalog')}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCartItem = () => {
    const rawPrice = selectedVariant?.price || product.price;
    const formattedPrice = formatPrice(rawPrice);
    
    return {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: formattedPrice,
      image: product.image,
      quantity,
      selectedVariant
    };
  };

  const handleAddToCartSuccess = () => {
    setNotificationMessage('Product added to cart successfully!');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleBuyNowSuccess = () => {
    setNotificationMessage('Product added to cart! Redirecting to catalog...');
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
      navigate('/product-catalog');
    }, 1500);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (isWishlisted) {
      const updatedWishlist = wishlist.filter(item => item.id !== product.id);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    } else {
      const updatedWishlist = [...wishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  const handleCompare = () => {
    setIsComparing(!isComparing);
    const compareList = JSON.parse(localStorage.getItem('compareList') || '[]');
    if (isComparing) {
      const updatedCompareList = compareList.filter(item => item.id !== product.id);
      localStorage.setItem('compareList', JSON.stringify(updatedCompareList));
    } else {
      const updatedCompareList = [...compareList, product];
      localStorage.setItem('compareList', JSON.stringify(updatedCompareList));
    }
  };

  const tabs = [
    { id: 'description', label: 'DESCRIPTION' },
    { id: 'ingredients', label: 'INGREDIENTS' },
    { id: 'sustainability', label: 'SUSTAINABILITY' },
    { id: 'howToUse', label: 'HOW TO USE' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
  return (
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>{product.description}</p>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'ingredients':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.ingredients?.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Package" size={16} className="text-blue-600" />
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'sustainability':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.sustainability?.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <Icon name="Leaf" size={16} className="text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'howToUse':
        return (
          <div className="space-y-4">
            <div className="space-y-3">
              {product.howToUse?.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Promac Electrical</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.brand}, electrical components, Promac Electrical`} />
        <link rel="canonical" href={`https://promacelectrical.com/product/${product.id}`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Simple Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 z-50 bg-black text-white px-4 py-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">{notificationMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clean Breadcrumbs with Back Button */}
        <div className="border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <nav className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="hover:text-gray-900 cursor-pointer">Home</span>
                <span>/</span>
                <span className="hover:text-gray-900 cursor-pointer">Products</span>
                <span>/</span>
                <span className="text-gray-900 font-medium">{product.name}</span>
              </nav>
              
              <button
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Icon name="ArrowLeft" size={16} />
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Simple Product Gallery */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex space-x-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index 
                        ? 'border-black' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Clean Product Information */}
            <div className="space-y-6">
              {/* Product Header */}
              <div className="space-y-4">
                {/* Simple Badges */}
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded">
                    {product.brand}
                  </span>
                  {product.isNew && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-900 text-sm font-medium rounded">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-900 text-sm font-medium rounded">
                      BESTSELLER
                    </span>
                  )}
                </div>
                
                {/* Product Title */}
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>
                
                {/* Simple Rating */}
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Simple Pricing */}
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">
                  {formatPrice(selectedVariant?.price || product.price)}
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
              </div>

              {/* Simple Quantity Selector */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Icon name="Minus" size={16} className="text-gray-600" />
                  </button>
                  <div className="px-4 py-3 text-lg font-medium text-gray-900 bg-gray-50 min-w-[60px] text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Icon name="Plus" size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Simple Action Buttons */}
              <div className="flex space-x-3">
                <AuthCartButton
                  product={getCartItem()}
                  variant="default"
                  onSuccess={handleAddToCartSuccess}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Icon name="ShoppingCart" size={16} />
                  <span>Add to Cart</span>
                </AuthCartButton>
                
                <AuthBuyButton
                  product={getCartItem()}
                  variant="default"
                  onSuccess={handleBuyNowSuccess}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Buy Now
                </AuthBuyButton>
              </div>
                
                <AuthWishlistButton
                  product={product}
                  isWishlisted={isWishlisted}
                  onToggle={handleToggleWishlist}
                />

              {/* Simple Trust Indicators */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Icon name="Shield" size={16} className="text-gray-600 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Secure Payment</span>
                  </div>
                  <div>
                    <Icon name="Truck" size={16} className="text-gray-600 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Free Shipping</span>
                  </div>
                  <div>
                    <Icon name="RefreshCw" size={16} className="text-gray-600 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Easy Returns</span>
                  </div>
                </div>
              </div>

              {/* Simple Product Specifications */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                        activeTab === tab.id
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                
                <div className="min-h-[200px]">
                  {renderTabContent()}
                </div>
              </div>

              {/* Simple Product Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded">
                  MADE IN INDIA
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-900 text-xs font-medium rounded">
                  CERTIFIED QUALITY
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-900 text-xs font-medium rounded">
                  TESTED & APPROVED
                </span>
              </div>

              {/* Simple Social Sharing */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                    <Icon name="Facebook" size={16} />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                    <Icon name="Twitter" size={16} />
                  </button>
                  <button className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
                    <Icon name="Share2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Customer Reviews Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
                <p className="text-gray-600">See what our customers are saying about this product</p>
              </div>
              <AuthReviewButton variant="outline">
                Write a review
              </AuthReviewButton>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Simple Rating Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{product.rating}</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}
                        fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600 text-sm">Based on {product.reviewCount} reviews</div>
                </div>

                {/* Simple Rating Breakdown */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 mb-3">Rating Distribution</h4>
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = Math.floor(Math.random() * 20) + 1;
                    const percentage = (count / product.reviewCount) * 100;
                    return (
                      <div key={rating} className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700 w-4">{rating}</span>
                        <Icon name="Star" size={12} className="text-yellow-400" fill="currentColor" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-6">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Simple Reviews List */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div 
                      key={review.id}
                      className="bg-white border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white font-medium">
                            {review.user.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-gray-900">{review.user}</span>
                              {review.verified && (
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="text-gray-600 text-sm">{review.location}</div>
                          </div>
                        </div>
                        <div className="text-gray-500 text-sm">{review.date}</div>
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                            fill={i < review.rating ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      
                      <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{review.comment}</p>
                      
                      {/* Simple Review Actions */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                          <Icon name="ThumbsUp" size={14} />
                          <span>Helpful</span>
                        </button>
                        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                          <Icon name="MessageCircle" size={14} />
                          <span>Reply</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simple Pagination */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Related Products Section */}
        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">You may also like</h2>
              <p className="text-gray-600">Discover more products that complement your purchase</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockProducts.slice(0, 4).map((relatedProduct) => (
                <div 
                  key={relatedProduct.id}
                  className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}
                            fill={i < Math.floor(relatedProduct.rating) ? 'currentColor' : 'none'}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">({relatedProduct.reviewCount})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      <Button 
                        size="sm" 
                        className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail; 