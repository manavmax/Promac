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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact & Locations - Promac Electrical | Find Stores & Get Support</title>
        <meta name="description" content="Find Promac Electrical stores near you, contact our sales team, book consultations, and access 24/7 emergency support. Pan-India presence with expert technical assistance." />
        <meta name="keywords" content="promac locations, electrical stores, contact promac, emergency electrical support, sales representatives, consultation booking" />
      </Helmet>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-action-blue"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Connect with
                <span className="block text-brand-amber">Promac Experts</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Find our stores, connect with sales representatives, book consultations, and access 24/7 emergency support across India
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-brand-navy"
                  onClick={() => setActiveTab('emergency')}
                >
                  Emergency Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-2">50+</div>
                <div className="text-sm text-text-secondary">Store Locations</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-2">24/7</div>
                <div className="text-sm text-text-secondary">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-2">&lt;30min</div>
                <div className="text-sm text-text-secondary">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} color="white" />
                </div>
                <div className="text-3xl font-bold text-brand-navy mb-2">15+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium brand-transition ${
                    activeTab === tab.id
                      ? 'bg-brand-navy text-white shadow-primary'
                      : 'bg-white text-text-primary hover:bg-brand-navy/10'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'locations' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Find Promac Stores Near You
                  </h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                    Visit our flagship stores, partner locations, and service centers across India for expert guidance and product demonstrations
                  </p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                  <div className="flex-1 max-w-md">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                      <input
                        type="text"
                        placeholder="Search by store name, city, or address..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-navy"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city === 'all' ? 'All Cities' : city}
                        </option>
                      ))}
                    </select>
                    <Button
                      variant="outline"
                      iconName="Navigation"
                      iconPosition="left"
                      className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
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
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                    <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      No locations found
                    </h3>
                    <p className="text-text-secondary">
                      Try adjusting your search criteria or contact us for assistance
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-text-secondary">
                    Have questions about our products or need technical assistance? We're here to help!
                  </p>
                </div>
                <ContactForm type="general" onSubmit={handleContactSubmit} />
              </div>
            )}

            {activeTab === 'consultation' && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Book Expert Consultation
                  </h2>
                  <p className="text-lg text-text-secondary">
                    Get personalized advice from our electrical experts for your project requirements
                  </p>
                </div>
                <ContactForm type="consultation" onSubmit={handleConsultationSubmit} />
              </div>
            )}

            {activeTab === 'representatives' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">
                    Meet Our Sales Team
                  </h2>
                  <p className="text-lg text-text-secondary max-w-3xl mx-auto">
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
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Visit Our Headquarters
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Experience our state-of-the-art facility with advanced warehouse operations, quality control processes, and customer service excellence
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="Building2" size={24} className="text-brand-navy" />
                    <h3 className="text-xl font-semibold text-text-primary">
                      Promac Headquarters
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={16} className="text-text-secondary mt-1" />
                      <div>
                        <p className="text-text-primary font-medium">
                          Promac Electrical Industries Pvt. Ltd.
                        </p>
                        <p className="text-sm text-text-secondary">
                          Plot No. 123, Industrial Area Phase-II,<br />
                          Sector 62, Noida, Uttar Pradesh - 201309
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-text-secondary" />
                      <p className="text-text-primary">+91 120 4567 890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-text-secondary" />
                      <p className="text-text-primary">info@promac.in</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={16} className="text-text-secondary" />
                      <p className="text-text-primary">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-effect rounded-xl p-4 text-center">
                    <Icon name="Package" size={32} className="text-brand-navy mx-auto mb-2" />
                    <h4 className="font-semibold text-text-primary mb-1">50,000+</h4>
                    <p className="text-sm text-text-secondary">Products in Stock</p>
                  </div>
                  <div className="glass-effect rounded-xl p-4 text-center">
                    <Icon name="Truck" size={32} className="text-brand-green mx-auto mb-2" />
                    <h4 className="font-semibold text-text-primary mb-1">Same Day</h4>
                    <p className="text-sm text-text-secondary">Dispatch Available</p>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  iconName="Navigation"
                  iconPosition="left"
                  className="w-full cta-primary"
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=28.6139,77.2090', '_blank')}
                >
                  Get Directions to Headquarters
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Promac Headquarters Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=28.6139,77.2090&z=15&output=embed"
                  />
                </div>
                <div className="absolute top-4 right-4 glass-effect rounded-lg p-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Maximize"
                    className="text-text-primary border-white/20 hover:bg-white/50"
                  >
                    Full Screen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Inquiry */}
        <section className="py-16 bg-gradient-to-r from-brand-navy to-action-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Partnership?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our growing network of distributors and partners across India. Explore business opportunities with Promac Electrical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Handshake"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                Become a Partner
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Store"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                Distributor Inquiry
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactLocations;