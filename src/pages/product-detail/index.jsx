import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
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
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop"
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
      description: "Premium modular switch from Schneider Electric with superior quality and safety standards. Features include easy installation, durable construction, and BIS certification for reliability.",
      features: [
        "Easy installation with snap-on mechanism",
        "Durable PC/ABS construction",
        "BIS certified for safety",
        "Compatible with standard wiring",
        "Available in multiple current ratings",
        "2-year warranty included"
      ],
      reviews: [
        {
          id: 1,
          user: "Rahul Sharma",
          rating: 5,
          date: "2024-01-15",
          comment: "Excellent quality product. Easy to install and works perfectly."
        },
        {
          id: 2,
          user: "Priya Patel",
          rating: 4,
          date: "2024-01-10",
          comment: "Good product, fast delivery. Would recommend."
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
      reviews: [
        {
          id: 1,
          user: "Amit Kumar",
          rating: 5,
          date: "2024-01-12",
          comment: "Excellent circuit breaker, provides reliable protection."
        },
        {
          id: 2,
          user: "Suresh Patel",
          rating: 4,
          date: "2024-01-08",
          comment: "Good quality product, installation was straightforward."
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
        { label: 'Installation', value: 'Surface Mount' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: false,
      fastDelivery: true,
      warranty: '1 Year',
      variants: [
        { id: 'v1', name: 'Single Gang', price: 2850 },
        { id: 'v2', name: 'Double Gang', price: 3850 },
        { id: 'v3', name: 'Triple Gang', price: 4850 }
      ],
      description: "Smart WiFi switch from ABB with remote control and voice assistant compatibility. Features include mobile app control, energy monitoring, and scheduling capabilities.",
      features: [
        "WiFi connectivity for remote control",
        "Voice assistant compatibility",
        "Mobile app control",
        "Energy monitoring capabilities",
        "Scheduling and automation",
        "1-year warranty included"
      ],
      reviews: [
        {
          id: 1,
          user: "Deepak Singh",
          rating: 4,
          date: "2024-01-18",
          comment: "Great smart switch, easy to set up and use."
        },
        {
          id: 2,
          user: "Rajesh Kumar",
          rating: 4,
          date: "2024-01-15",
          comment: "Good functionality, app works well."
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
        { id: 'v1', name: 'Single Socket', price: 185 },
        { id: 'v2', name: 'Double Socket', price: 285 },
        { id: 'v3', name: 'Triple Socket', price: 385 }
      ],
      description: "High-quality socket outlet from Legrand with fire retardant material and modern design. Features include easy installation, durable construction, and ISI certification.",
      features: [
        "Fire retardant material for safety",
        "Modern design aesthetics",
        "ISI certified for reliability",
        "Easy installation process",
        "Multiple socket configurations",
        "2-year warranty coverage"
      ],
      reviews: [
        {
          id: 1,
          user: "Priya Sharma",
          rating: 4,
          date: "2024-01-10",
          comment: "Good quality socket, installation was easy."
        },
        {
          id: 2,
          user: "Vikram Patel",
          rating: 5,
          date: "2024-01-05",
          comment: "Excellent product, very durable."
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
        { label: 'Installation', value: 'Surface Mount' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: false,
      warranty: '3 Years',
      variants: [
        { id: 'v1', name: '18W', price: 750 },
        { id: 'v2', name: '24W', price: 850 },
        { id: 'v3', name: '36W', price: 1150 }
      ],
      description: "Energy-efficient LED panel light from Havells with high luminosity and long life span. Features include low power consumption, excellent light output, and ISI certification.",
      features: [
        "Energy-efficient LED technology",
        "High luminosity output",
        "Long life span of 25,000 hours",
        "ISI certified for quality",
        "Low power consumption",
        "3-year warranty coverage"
      ],
      reviews: [
        {
          id: 1,
          user: "Anita Desai",
          rating: 5,
          date: "2024-01-15",
          comment: "Excellent light output, very energy efficient."
        },
        {
          id: 2,
          user: "Ramesh Kumar",
          rating: 4,
          date: "2024-01-12",
          comment: "Good quality light, installation was simple."
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
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
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
        { label: 'Installation', value: 'Screw Base' },
        { label: 'Life Span', value: '15,000 Hours' }
      ],
      bulkPricing: false,
      fastDelivery: true,
      warranty: '2 Years',
      variants: [
        { id: 'v1', name: '9W White', price: 650 },
        { id: 'v2', name: '9W Color', price: 750 },
        { id: 'v3', name: '12W Color', price: 850 }
      ],
      description: "Smart WiFi bulb from Philips with 16 million color options and voice control. Features include mobile app control, scheduling, and compatibility with major voice assistants.",
      features: [
        "16 million color options",
        "WiFi connectivity for remote control",
        "Voice assistant compatibility",
        "Mobile app control",
        "Scheduling and automation",
        "2-year warranty included"
      ],
      reviews: [
        {
          id: 1,
          user: "Sneha Patel",
          rating: 4,
          date: "2024-01-18",
          comment: "Great smart bulb, colors are vibrant."
        },
        {
          id: 2,
          user: "Arun Kumar",
          rating: 5,
          date: "2024-01-14",
          comment: "Excellent functionality, app works perfectly."
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
      certifications: ['BIS', 'CE'],
      createdAt: '2024-01-18',
      keySpecs: [
        { label: 'Current Rating', value: '40A' },
        { label: 'Sensitivity', value: '30mA' },
        { label: 'Poles', value: '2 Pole' },
        { label: 'Breaking Capacity', value: '6kA' },
        { label: 'Installation', value: 'DIN Rail' },
        { label: 'Protection', value: 'IP20' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '3 Years',
      variants: [
        { id: 'v1', name: '25A 30mA', price: 2850 },
        { id: 'v2', name: '40A 30mA', price: 3450 },
        { id: 'v3', name: '63A 30mA', price: 4250 }
      ],
      description: "Residual Current Circuit Breaker from Schneider Electric with high sensitivity and reliable protection. Features include advanced trip mechanism, durable construction, and CE certification.",
      features: [
        "High sensitivity trip mechanism",
        "Reliable earth fault protection",
        "CE certified for safety",
        "Easy DIN rail installation",
        "Multiple current ratings available",
        "3-year warranty coverage"
      ],
      reviews: [
        {
          id: 1,
          user: "Mohan Singh",
          rating: 5,
          date: "2024-01-20",
          comment: "Excellent protection device, very reliable."
        },
        {
          id: 2,
          user: "Lakshmi Devi",
          rating: 4,
          date: "2024-01-16",
          comment: "Good quality product, installation was easy."
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
        { label: 'Installation', value: 'Surface Mount' },
        { label: 'Protection', value: 'IP65' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '5 Years',
      variants: [
        { id: 'v1', name: '16A', price: 3200 },
        { id: 'v2', name: '32A', price: 4200 },
        { id: 'v3', name: '63A', price: 5800 }
      ],
      description: "High-performance power distribution unit from Eaton with advanced protection features and industrial-grade construction. Features include high breaking capacity, durable enclosure, and comprehensive safety certifications.",
      features: [
        "High breaking capacity for industrial applications",
        "Industrial-grade construction and materials",
        "Multiple safety certifications (BIS, CE, ISO)",
        "Easy installation and maintenance",
        "Comprehensive protection features",
        "5-year warranty coverage"
      ],
      reviews: [
        {
          id: 1,
          user: "Rajesh Kumar",
          rating: 5,
          date: "2024-01-25",
          comment: "Excellent industrial-grade product, very reliable."
        },
        {
          id: 2,
          user: "Anita Desai",
          rating: 4,
          date: "2024-01-20",
          comment: "Great quality, installation was straightforward."
        }
      ]
    }
  ];

  // Find the product by ID
  console.log('Looking for product ID:', id, 'Type:', typeof id);
  const product = mockProducts.find(p => p.id === parseInt(id));
  console.log('Found product:', product);
  
  // If product not found, show error
  if (!product) {
    console.log('Product not found for ID:', id);
    console.log('Available product IDs:', mockProducts.map(p => p.id));
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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

  const handleAddToCart = () => {
    const rawPrice = selectedVariant?.price || product.price;
    const formattedPrice = formatPrice(rawPrice);
    
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: formattedPrice,
      image: product.image,
      quantity,
      selectedVariant
    };
    
    addToCart(cartItem);
    setNotificationMessage('Product added to cart successfully!');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleBuyNow = () => {
    // Add to cart first
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: formatPrice(selectedVariant?.price || product.price),
      image: product.image,
      quantity,
      selectedVariant
    };
    
    addToCart(cartItem);
    setNotificationMessage('Product added to cart! Redirecting to catalog...');
    setShowNotification(true);
    
    // Navigate to catalog after a short delay
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
          <Icon name="Check" size={16} />
          <span>{notificationMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Brand Logo - Left */}
          <div className="flex items-center">
            <img 
              src="/assets/images/promac-high-resolution-logo-transparent.png" 
              alt="PROMAC" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Close Button - Right */}
          <button
            onClick={() => navigate('/product-catalog')}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <Icon name="X" size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
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

          {/* Product Info */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 font-medium">{product.brand}</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-1">({product.reviewCount})</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-black">{product.name}</h1>

            <div className="flex items-center space-x-3">
              <span className="text-4xl font-bold text-black">
                {formatPrice(selectedVariant?.price || product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Available Variants</h3>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 text-sm rounded-lg border brand-transition ${
                        selectedVariant?.id === variant.id
                          ? 'border-slate-600 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white' 
                          : 'border-gray-300 text-black hover:border-slate-600'
                      }`}
                    >
                      {variant.name} - {formatPrice(variant.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold text-black">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 brand-transition text-gray-600 hover:text-blue-600"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="w-20 text-center font-medium text-black text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-600 brand-transition text-gray-600 hover:text-blue-600"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button
                variant="outline"
                fullWidth
                onClick={handleAddToCart}
                iconName="ShoppingCart"
                iconPosition="left"
                className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white border-slate-600 hover:from-slate-800 hover:to-slate-900"
              >
                Add to Cart
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={handleBuyNow}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Buy Now
              </Button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={handleCompare}
                className={`flex items-center space-x-2 brand-transition ${
                  isComparing ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon name="GitCompare" size={16} />
                <span className="text-sm font-medium">Compare</span>
              </button>
              <button
                onClick={handleToggleWishlist}
                className={`flex items-center space-x-2 brand-transition ${
                  isWishlisted ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                }`}
              >
                <Icon name="Heart" size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                <span className="text-sm font-medium">Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 brand-transition">
                <Icon name="Share2" size={16} />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail; 