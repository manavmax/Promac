import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Footer } from '../../components/ui/Footer';
import LocationCard from './components/LocationCard';
import ContactForm from './components/ContactForm';
import InteractiveMap from './components/InteractiveMap';
import SalesRepCard from './components/SalesRepCard';
import EmergencySupport from './components/EmergencySupport';
import { DarkGradientBg } from '../../components/ui/elegant-dark-pattern.jsx';

const ContactLocations = () => {
  const [activeTab, setActiveTab] = useState('locations');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('all');

  // Mock data for locations
  const locations = [
    {
      id: 1,
      name: "Promac Flagship Store - Mumbai",
      type: "flagship",
      status: "open",
      distance: "2.5 km",
      address: "Shop No. 15-16, Ground Floor, Electrical Market Complex",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      phone: "+91 22 2345 6789",
      whatsapp: true,
      hours: {
        today: "9:00 AM - 8:00 PM",
        week: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM"
      },
      services: ["Technical Consultation", "Bulk Pickup", "Installation Support", "Product Demo"],
      categories: ["Switches & Sockets", "Wiring Cables", "Circuit Breakers", "LED Lighting", "Smart Home", "Industrial Equipment"],
      lat: 19.0760,
      lng: 72.8777
    },
    {
      id: 2,
      name: "Promac Partner Store - Delhi",
      type: "partner",
      status: "open",
      distance: "5.2 km",
      address: "B-45, Electrical Components Market, Bhagirath Palace",
      city: "Delhi",
      state: "Delhi",
      pincode: "110006",
      phone: "+91 11 2345 6789",
      whatsapp: true,
      hours: {
        today: "9:30 AM - 7:30 PM",
        week: "Mon-Sat: 9:30 AM - 7:30 PM, Sun: Closed"
      },
      services: ["Technical Consultation", "Emergency Service", "Product Demo"],
      categories: ["Switches & Sockets", "Wiring Cables", "Circuit Breakers", "LED Lighting"],
      lat: 28.6139,
      lng: 77.2090
    },
    {
      id: 3,
      name: "Promac Service Center - Bangalore",
      type: "service",
      status: "closing-soon",
      distance: "8.1 km",
      address: "No. 123, 1st Floor, Electronics City Phase 1",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560100",
      phone: "+91 80 2345 6789",
      whatsapp: false,
      hours: {
        today: "10:00 AM - 6:00 PM (Closes in 30 mins)",
        week: "Mon-Fri: 10:00 AM - 6:00 PM, Sat-Sun: Closed"
      },
      services: ["Technical Consultation", "Installation Support", "Emergency Service"],
      categories: ["Industrial Equipment", "Automation Systems", "Control Panels"],
      lat: 12.9716,
      lng: 77.5946
    },
    {
      id: 4,
      name: "Promac Warehouse - Chennai",
      type: "warehouse",
      status: "closed",
      distance: "12.3 km",
      address: "Plot No. 67, Industrial Estate, Ambattur",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: "600058",
      phone: "+91 44 2345 6789",
      whatsapp: true,
      hours: {
        today: "Closed",
        week: "Mon-Fri: 8:00 AM - 5:00 PM, Sat-Sun: Closed"
      },
      services: ["Bulk Pickup", "Wholesale Orders"],
      categories: ["All Categories Available"],
      lat: 13.0827,
      lng: 80.2707
    },
    {
      id: 5,
      name: "Promac Partner Store - Pune",
      type: "partner",
      status: "open",
      distance: "3.8 km",
      address: "Shop 12, Electrical Plaza, FC Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411005",
      phone: "+91 20 2345 6789",
      whatsapp: true,
      hours: {
        today: "9:00 AM - 8:00 PM",
        week: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM"
      },
      services: ["Technical Consultation", "Product Demo", "Installation Support"],
      categories: ["Switches & Sockets", "LED Lighting", "Smart Home", "Wiring Cables"],
      lat: 18.5204,
      lng: 73.8567
    },
    {
      id: 6,
      name: "Promac Flagship Store - Hyderabad",
      type: "flagship",
      status: "open",
      distance: "6.7 km",
      address: "2nd Floor, Electrical Complex, Secunderabad",
      city: "Hyderabad",
      state: "Telangana",
      pincode: "500003",
      phone: "+91 40 2345 6789",
      whatsapp: true,
      hours: {
        today: "9:00 AM - 8:00 PM",
        week: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM"
      },
      services: ["Technical Consultation", "Bulk Pickup", "Installation Support", "Product Demo", "Emergency Service"],
      categories: ["Switches & Sockets", "Wiring Cables", "Circuit Breakers", "LED Lighting", "Smart Home", "Industrial Equipment"],
      lat: 17.3850,
      lng: 78.4867
    }
  ];

  // Mock data for sales representatives
  const salesRepresentatives = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Senior Sales Manager - North India",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      territory: "Delhi, Punjab, Haryana, Uttar Pradesh",
      phone: "+91 98765 43210",
      email: "rajesh.kumar@promac.in",
      availability: "available",
      specializations: ["Industrial Solutions", "Smart Home Systems", "Commercial Projects"],
      experience: 8,
      clientsServed: 250,
      rating: 4.8,
      languages: ["Hindi", "English", "Punjabi"],
      workingHours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed"
      },
      nextAvailable: null
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Regional Sales Manager - West India",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      territory: "Mumbai, Pune, Gujarat, Rajasthan",
      phone: "+91 98765 43211",
      email: "priya.sharma@promac.in",
      availability: "busy",
      specializations: ["Residential Solutions", "LED Lighting", "Energy Management"],
      experience: 6,
      clientsServed: 180,
      rating: 4.9,
      languages: ["Hindi", "English", "Marathi", "Gujarati"],
      workingHours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed"
      },
      nextAvailable: "Today at 3:30 PM"
    },
    {
      id: 3,
      name: "Suresh Reddy",
      title: "Technical Sales Specialist - South India",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      territory: "Bangalore, Chennai, Hyderabad, Kerala",
      phone: "+91 98765 43212",
      email: "suresh.reddy@promac.in",
      availability: "available",
      specializations: ["Automation Systems", "Control Panels", "Industrial Wiring"],
      experience: 12,
      clientsServed: 320,
      rating: 4.7,
      languages: ["English", "Telugu", "Tamil", "Kannada"],
      workingHours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed"
      },
      nextAvailable: null
    },
    {
      id: 4,
      name: "Amit Patel",
      title: "Business Development Manager - East India",
      avatar: "https://randomuser.me/api/portraits/men/28.jpg",
      territory: "Kolkata, Bhubaneswar, Guwahati, Patna",
      phone: "+91 98765 43213",
      email: "amit.patel@promac.in",
      availability: "offline",
      specializations: ["Commercial Projects", "Bulk Solutions", "Distribution Networks"],
      experience: 10,
      clientsServed: 200,
      rating: 4.6,
      languages: ["Hindi", "English", "Bengali", "Gujarati"],
      workingHours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed"
      },
      nextAvailable: "Tomorrow at 9:00 AM"
    }
  ];

  const cities = ['all', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'];

  const tabs = [
    { id: 'locations', label: 'Store Locations', icon: 'MapPin' },
    { id: 'contact', label: 'Contact Us', icon: 'MessageSquare' },
    { id: 'consultation', label: 'Book Consultation', icon: 'Users' },
    { id: 'representatives', label: 'Sales Team', icon: 'UserCheck' },
    { id: 'emergency', label: 'Emergency Support', icon: 'AlertTriangle' }
  ];

  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'all' || location.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleGetDirections = (location) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  const handleCallLocation = (location) => {
    window.open(`tel:${location.phone}`, '_self');
  };

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleConsultationSubmit = (formData) => {
    console.log('Consultation form submitted:', formData);
    alert('Consultation request submitted! Our expert will contact you within 4 hours.');
  };

  const handleRepresentativeContact = (rep, method) => {
    if (method === 'phone') {
      window.open(`tel:${rep.phone}`, '_self');
    } else if (method === 'email') {
      window.open(`mailto:${rep.email}`, '_self');
    }
  };

  const handleScheduleMeeting = (rep) => {
    alert(`Scheduling meeting with ${rep.name}. You will be redirected to the calendar booking system.`);
  };

  const handleEmergencyContact = (contact) => {
    if (contact.type === 'hotline' || contact.type === 'emergency') {
      window.open('tel:1800-PROMAC-911', '_self');
    } else if (contact.type === 'whatsapp') {
      window.open('https://wa.me/919876543210', '_blank');
    } else if (contact.type === 'video') {
      alert('Connecting to video emergency support...');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section Background - Elegant Dark Pattern */}
      <div className="absolute inset-0 z-0">
        <DarkGradientBg />
      </div>
      
      <Helmet>
        <title>Contact & Locations - Promac Electrical | Find Stores & Get Support</title>
        <meta name="description" content="Find Promac Electrical stores near you, contact our sales team, book consultations, and access 24/7 emergency support. Pan-India presence with expert technical assistance." />
        <meta name="keywords" content="promac locations, electrical stores, contact promac, emergency electrical support, sales representatives, consultation booking" />
      </Helmet>

      <main className="pt-16 relative z-10">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Connect with
                <span className="block">
                  <span className="text-[#ff0c0e]">Promac</span>
                  <span className="text-white"> Experts</span>
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
                Find our stores, connect with sales representatives, book consultations, and access 24/7 emergency support across India
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  className="cta-primary"
                  onClick={() => setActiveTab('locations')}
                >
                  Find Nearest Store
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="bg-white text-brand-navy hover:bg-gray-100"
                  onClick={() => setActiveTab('emergency')}
                >
                  Emergency Support
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats - Now part of hero section */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-300">Store Locations</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">&lt;30min</div>
                <div className="text-sm text-gray-300">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ff0c0e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>


        </section>

        {/* Content Sections */}
        <section className="py-16 relative overflow-hidden bg-black">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
              `,
              backgroundSize: '200px 200px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation Tabs - Moved from hero section */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#ff0c0e] text-white shadow-lg shadow-[#ff0c0e]/25'
                      : 'bg-white/10 backdrop-blur-2xl text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            {activeTab === 'locations' && (
              <div className="space-y-8">
                {/* Search and Filter */}
                <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Icon
                        name="Search"
                        size={20}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Search locations, services, or products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c0e] bg-white text-gray-800"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff0c0e] bg-white text-gray-800"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city} className="bg-white text-gray-800">
                          {city === 'all' ? 'All Cities' : city}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="default"
                      iconName="Navigation"
                      iconPosition="left"
                      className="bg-[#ff0c0e] text-white hover:bg-[#e00b0c]"
                    >
                      Use My Location
                    </Button>
                  </div>
                </div>

                {/* Interactive Map */}
                <InteractiveMap
                  locations={filteredLocations}
                  selectedLocation={selectedLocation}
                  onLocationSelect={handleLocationSelect}
                />

                {/* Location Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
                  {filteredLocations.map((location) => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onGetDirections={handleGetDirections}
                      onCallLocation={handleCallLocation}
                    />
                  ))}
                </div>

                {filteredLocations.length === 0 && (
                  <div className="text-center py-12">
                    <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      No locations found
                    </h3>
                    <p className="text-gray-300">
                      Try adjusting your search criteria or contact us for assistance
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-300">
                    Have questions about our products or need technical assistance? We're here to help!
                  </p>
                </div>
                <ContactForm type="general" onSubmit={handleContactSubmit} />
              </div>
            )}

            {activeTab === 'consultation' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Book Expert Consultation
                  </h2>
                  <p className="text-lg text-gray-300">
                    Get personalized advice from our electrical experts for your project requirements
                  </p>
                </div>
                <ContactForm type="consultation" onSubmit={handleConsultationSubmit} />
              </div>
            )}

            {activeTab === 'representatives' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Meet Our Sales Team
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Connect directly with our regional sales representatives for personalized service and business solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {salesRepresentatives.map((rep) => (
                    <SalesRepCard
                      key={rep.id}
                      representative={rep}
                      onContact={handleRepresentativeContact}
                      onScheduleMeeting={handleScheduleMeeting}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'emergency' && (
              <div className="max-w-4xl mx-auto">
                <EmergencySupport onEmergencyContact={handleEmergencyContact} />
              </div>
            )}
          </div>
        </section>

        {/* Headquarters Showcase */}
        <section className="py-16 relative overflow-hidden bg-black">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
              `,
              backgroundSize: '200px 200px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Headquarters
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Visit our state-of-the-art headquarters in Mumbai, where innovation meets excellence
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Promac Electrical Headquarters
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Located in the heart of Mumbai's business district, our headquarters serves as the central hub for all our operations. 
                    Here you'll find our executive offices, training facilities, and innovation center.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-[#ff0c0e] mb-1">25+</div>
                    <div className="text-sm text-gray-300">Years Experience</div>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-[#ff0c0e] mb-1">500+</div>
                    <div className="text-sm text-gray-300">Team Members</div>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-[#ff0c0e] mb-1">50+</div>
                    <div className="text-sm text-gray-300">Cities Served</div>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-[#ff0c0e] mb-1">24/7</div>
                    <div className="text-sm text-gray-300">Support Available</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="MapPin"
                    iconPosition="left"
                    className="bg-[#ff0c0e] text-white hover:bg-[#e00b0c]"
                  >
                    Get Directions
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    className="bg-white text-black hover:bg-gray-100 border-white"
                  >
                    Call Headquarters
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Icon name="Building" size={64} className="mx-auto mb-4" />
                      <p className="text-lg">Headquarters Image</p>
                      <p className="text-sm">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Inquiry */}
        <section className="py-16 relative overflow-hidden bg-black">
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
          
          {/* Glossy Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-40"></div>
          
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)
              `,
              backgroundSize: '200px 200px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative">
              {/* Glassmorphism Card Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl opacity-40"></div>
              
              {/* Card Content */}
              <div className="relative p-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Interested in Partnership?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join our growing network of distributors and partners across India. Explore business opportunities with Promac Electrical.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Handshake"
                    iconPosition="left"
                    className="bg-[#ff0c0e] text-white hover:bg-[#e00b0c] transition-all duration-300"
                  >
                    Become a Partner
                  </Button>
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Store"
                    iconPosition="left"
                    className="bg-white text-black hover:bg-gray-100 transition-all duration-300 border-white"
                  >
                    Distributor Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer variant="contact-locations" />
    </div>
  );
};

export default ContactLocations;