import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/ui/Footer';
import { 
  Home, 
  Package, 
  Building2, 
  Info, 
  HelpCircle, 
  MapPin, 
  LayoutDashboard, 
  ShoppingCart, 
  CreditCard, 
  FileText, 
  Building,
  Shield,
  Truck,
  RotateCcw,
  XCircle,
  DollarSign,
  AlertTriangle,
  Users,
  Search,
  ExternalLink
} from 'lucide-react';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapData = {
    main: [
      {
        title: "Home",
        path: "/homepage",
        icon: Home,
        description: "Main homepage with product highlights and company overview"
      },
      {
        title: "Product Catalog",
        path: "/product-catalog",
        icon: Package,
        description: "Browse our complete range of electrical components and products"
      },
      {
        title: "Business Solutions",
        path: "/business-solutions",
        icon: Building2,
        description: "Tailored solutions for contractors, distributors, and businesses"
      },
      {
        title: "About Promac",
        path: "/about-promac",
        icon: Info,
        description: "Learn about our company history, mission, and values"
      },
      {
        title: "Support Center",
        path: "/support-center",
        icon: HelpCircle,
        description: "Get help, documentation, and technical support"
      },
      {
        title: "Contact & Locations",
        path: "/contact-locations",
        icon: MapPin,
        description: "Find our offices, warehouses, and contact information"
      }
    ],
    userAccount: [
      {
        title: "User Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        description: "Personal dashboard for account management",
        protected: true
      },
      {
        title: "Shopping Cart",
        path: "/cart",
        icon: ShoppingCart,
        description: "Manage your cart and saved items",
        protected: true
      },
      {
        title: "Checkout",
        path: "/checkout",
        icon: CreditCard,
        description: "Complete your purchase securely",
        protected: true
      },
      {
        title: "Order Tracking",
        path: "/orders",
        icon: FileText,
        description: "Track your orders and view order history",
        protected: true
      },
      {
        title: "Account Settings",
        path: "/account",
        icon: Users,
        description: "Manage your account preferences and personal information",
        protected: true
      }
    ],
    business: [
      {
        title: "Business Account Center",
        path: "/business",
        icon: Building,
        description: "B2B portal for bulk orders and business management",
        protected: true
      }
    ],
    legal: [
      {
        title: "Terms & Conditions",
        path: "/terms-conditions",
        icon: FileText,
        description: "Terms of service and usage conditions"
      },
      {
        title: "Privacy Policy",
        path: "/privacy-policy",
        icon: Shield,
        description: "How we collect, use, and protect your data"
      },
      {
        title: "Refund & Return Policy",
        path: "/refund-return-policy",
        icon: RotateCcw,
        description: "Our return and refund procedures"
      },
      {
        title: "Delivery & Shipping",
        path: "/delivery-shipping",
        icon: Truck,
        description: "Shipping information and delivery timelines"
      },
      {
        title: "Cancellation Policy",
        path: "/cancellation-policy",
        icon: XCircle,
        description: "Order cancellation terms and procedures"
      },
      {
        title: "Payment Policy",
        path: "/payment-policy",
        icon: DollarSign,
        description: "Accepted payment methods and security measures"
      },
      {
        title: "Disclaimer Policy",
        path: "/disclaimer-policy",
        icon: AlertTriangle,
        description: "Legal disclaimers and liability limitations"
      },
      {
        title: "B2B / Bulk Orders Policy",
        path: "/b2b-bulk-orders-policy",
        icon: Building,
        description: "Terms for business accounts and bulk orders"
      }
    ]
  };

  const SitemapSection = ({ title, items, description }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <IconComponent className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                    {item.protected && (
                      <span className="ml-2 text-xs text-amber-600 font-normal">(Login Required)</span>
                    )}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-2 flex items-center text-xs text-gray-400">
                    <span className="truncate">{item.path}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Sitemap - Promac Electrical | Complete Website Navigation</title>
        <meta 
          name="description" 
          content="Complete sitemap of Promac Electrical website. Find all pages, products, services, and resources in one organized view. Easy navigation for customers and search engines." 
        />
        <meta name="keywords" content="sitemap, navigation, website map, Promac Electrical, electrical components, B2B, B2C, product catalog" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://promacelectrical.com/sitemap" />
        
        {/* Structured Data for Sitemap */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Promac Electrical",
            "url": "https://promacelectrical.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://promacelectrical.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                ...sitemapData.main.map((item, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": item.title,
                  "url": `https://promacelectrical.com${item.path}`
                }))
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center space-x-3 mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                  <h1 className="text-3xl font-light text-gray-900">
                    Website Sitemap
                  </h1>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Navigate through all pages and sections of the Promac Electrical website. 
                  Find products, services, support resources, and account management tools.
                </p>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                  <span>Last Updated: {new Date().toLocaleDateString()}</span>
                  <span>•</span>
                  <span>Total Pages: {Object.values(sitemapData).flat().length}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                
                {/* Quick Navigation */}
                <div className="mb-12 p-6 bg-gray-50 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <a href="#main-pages" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Main Pages
                    </a>
                    <a href="#user-account" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      User Account
                    </a>
                    <a href="#business" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Business Portal
                    </a>
                    <a href="#legal" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Legal & Policies
                    </a>
                  </div>
                </div>

                {/* Main Pages */}
                <div id="main-pages">
                  <SitemapSection
                    title="Main Pages"
                    items={sitemapData.main}
                    description="Core website pages including homepage, product catalog, and company information"
                  />
                </div>

                {/* User Account Pages */}
                <div id="user-account">
                  <SitemapSection
                    title="User Account & Shopping"
                    items={sitemapData.userAccount}
                    description="Account management, shopping cart, checkout, and order tracking (requires login)"
                  />
                </div>

                {/* Business Portal */}
                <div id="business">
                  <SitemapSection
                    title="Business Portal"
                    items={sitemapData.business}
                    description="B2B features for contractors, distributors, and business customers (requires business account)"
                  />
                </div>

                {/* Legal & Policies */}
                <div id="legal">
                  <SitemapSection
                    title="Legal & Policies"
                    items={sitemapData.legal}
                    description="Terms of service, privacy policy, shipping information, and other legal documents"
                  />
                </div>

                {/* SEO Information */}
                <div className="mt-16 p-6 bg-blue-50 rounded-lg">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Search Engine Optimization</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">For Search Engines</h3>
                      <ul className="space-y-1">
                        <li>• All pages are crawlable and indexable</li>
                        <li>• Proper meta tags and structured data</li>
                        <li>• Mobile-friendly responsive design</li>
                        <li>• Fast loading times and optimized images</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">For Users</h3>
                      <ul className="space-y-1">
                        <li>• Clear navigation and breadcrumbs</li>
                        <li>• Search functionality available</li>
                        <li>• Accessible design and keyboard navigation</li>
                        <li>• Comprehensive help and support resources</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help Finding Something?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Search</h3>
                      <p className="text-gray-600">Use our search functionality to find specific products or information quickly.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Support</h3>
                      <p className="text-gray-600">Visit our <Link to="/support-center" className="text-blue-600 hover:text-blue-800">Support Center</Link> for help and documentation.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-600">Get in touch via our <Link to="/contact-locations" className="text-blue-600 hover:text-blue-800">Contact page</Link> for personalized assistance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
