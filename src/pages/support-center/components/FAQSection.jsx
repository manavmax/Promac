import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All FAQs', count: 45 },
    { id: 'products', name: 'Products', count: 18 },
    { id: 'installation', name: 'Installation', count: 12 },
    { id: 'warranty', name: 'Warranty', count: 8 },
    { id: 'ordering', name: 'Ordering', count: 7 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'products',
      question: 'What is the difference between MCB and MCCB?',
      answer: `MCB (Miniature Circuit Breaker) and MCCB (Molded Case Circuit Breaker) differ primarily in their current ratings and applications:

**MCB Features:**
• Current rating: 0.5A to 125A
• Suitable for residential and light commercial use
• Fixed thermal and magnetic trip settings
• Compact size and easy installation
• Lower breaking capacity (typically 6kA to 10kA)

**MCCB Features:**
• Current rating: 15A to 2500A
• Designed for industrial and heavy commercial applications
• Adjustable thermal and magnetic trip settings
• Larger size with higher breaking capacity (up to 200kA)
• Better protection coordination capabilities

Choose MCB for home and small office applications, MCCB for industrial and large commercial installations.`,
      tags: ['MCB', 'MCCB', 'Circuit Protection', 'Product Comparison']
    },
    {
      id: 2,
      category: 'installation',
      question: 'How do I properly install an ELCB in my distribution board?',
      answer: `Follow these steps for safe ELCB installation:

**Pre-Installation:**
• Turn off main power supply
• Verify ELCB rating matches your load requirements
• Check that the distribution board has adequate space

**Installation Steps:**
1. Mount the ELCB on DIN rail in the distribution board
2. Connect the incoming live wire to the ELCB input terminal
3. Connect the outgoing live wire to the ELCB output terminal
4. Connect neutral wires through the ELCB neutral terminals
5. Ensure proper earthing connection
6. Test the ELCB using the test button before energizing

**Safety Notes:**
• Always use appropriate PPE during installation
• Follow local electrical codes and BIS standards
• Consider hiring a certified electrician for complex installations`,
      tags: ['ELCB', 'Installation', 'Safety', 'Distribution Board']
    },
    {
      id: 3,
      category: 'warranty',
      question: 'What does Promac warranty cover and for how long?',
      answer: `Promac offers comprehensive warranty coverage:

**Standard Warranty (2-3 years):**
• Manufacturing defects in materials and workmanship
• Electrical component failures under normal usage
• Free replacement of defective products
• Technical support and guidance

**Comprehensive Warranty (5 years):**
• All standard warranty benefits
• Extended coverage period
• Accidental damage protection (limited)
• Priority technical support
• On-site service for commercial installations

**What's NOT Covered:**
• Physical damage due to mishandling
• Damage from improper installation
• Normal wear and tear
• Modifications or repairs by unauthorized personnel

**Claim Process:**
Submit warranty claims through our online portal with purchase proof and product photos. Most claims are processed within 24-48 hours.`,
      tags: ['Warranty', 'Coverage', 'Claims', 'Support']
    },
    {
      id: 4,
      category: 'products',question: 'How do I select the right MCB rating for my circuit?',
      answer: `MCB rating selection depends on several factors:

**Load Calculation:**
• Calculate total connected load in the circuit
• Add 25% safety margin for future expansion
• Consider starting current for motor loads

**Common Ratings:**
• 6A: Lighting circuits (up to 1.3kW)
• 10A: Power outlets (up to 2.2kW)
• 16A: Heavy appliances (up to 3.5kW)
• 20A: Air conditioners (up to 4.4kW)
• 32A: Electric geysers, ovens (up to 7kW)

**Selection Criteria:**
• MCB rating should be 125% of full load current
• Consider cable current carrying capacity
• Ensure coordination with upstream protection
• Follow IS 13947 standards for residential installations

**Professional Tip:**
When in doubt, consult with a certified electrician or use our online MCB selection tool for accurate recommendations.`,
      tags: ['MCB', 'Rating Selection', 'Load Calculation', 'Electrical Design']
    },
    {
      id: 5,
      category: 'ordering',question: 'What are the minimum order quantities for bulk purchases?',
      answer: `Promac offers flexible ordering options:

**Retail Orders:**
• No minimum order quantity
• Individual product purchases welcome
• Standard retail pricing applies
• Free shipping on orders above ₹2,500

**Bulk Orders (Contractor/Distributor):**
• Minimum 50 pieces per product type
• Tiered pricing based on quantity
• Volume discounts up to 25%
• Dedicated account manager support

**Project Orders:**
• Custom quotations for large projects
• Flexible payment terms available
• Technical consultation included
• Delivery scheduling as per project timeline

**Special Programs:**
• Contractor loyalty program with additional benefits
• Seasonal promotions and special offers
• Trade credit facilities for qualified businesses

Contact our sales team at +91 1800-123-4567 for personalized bulk pricing and terms.`,
      tags: ['Bulk Orders', 'Pricing', 'Minimum Quantity', 'Contractor Program']
    },
    {
      id: 6,
      category: 'installation',question: 'What safety precautions should I take during electrical installation?',
      answer: `Safety is paramount in electrical work:

**Personal Protective Equipment (PPE):**
• Insulated gloves rated for working voltage
• Safety glasses with side shields
• Non-conductive footwear
• Flame-resistant clothing
• Hard hat for overhead work

**Work Procedures:**
• Always turn off power at the main breaker
• Use lockout/tagout procedures
• Test circuits with a multimeter before working
• Never work alone on electrical installations
• Keep a first aid kit readily available

**Tool Safety:**
• Use insulated tools rated for electrical work
• Inspect tools before each use
• Keep tools clean and dry
• Replace damaged tools immediately

**Emergency Preparedness:**
• Know the location of main electrical shutoffs
• Keep emergency contact numbers handy
• Have a fire extinguisher suitable for electrical fires
• Know basic first aid for electrical shock

**When to Call a Professional:**
• Complex wiring installations
• Main panel upgrades
• Any work you're not confident about
• Commercial or industrial installations`,
      tags: ['Safety', 'PPE', 'Installation', 'Emergency Procedures']
    },
    {
      id: 7,
      category: 'products',
      question: 'What is the lifespan of Promac electrical products?',
      answer: `Promac products are designed for long-term reliability:

**Typical Lifespan:**
• MCBs: 15-20 years under normal conditions
• ELCBs: 12-15 years with regular testing
• Distribution Boards: 20-25 years
• Contactors: 10-15 years depending on usage
• Switches & Sockets: 15-20 years

**Factors Affecting Lifespan:**
• Operating environment (temperature, humidity)
• Frequency of operation
• Load characteristics
• Quality of installation
• Regular maintenance

**Maximizing Product Life:**
• Follow proper installation procedures
• Conduct regular visual inspections
• Test safety devices monthly
• Keep electrical panels clean and dry
• Address issues promptly

**End-of-Life Indicators:**
• Frequent tripping without apparent cause
• Physical damage or burning smell
• Loose connections or overheating
• Failure to reset properly
• Age exceeding recommended service life

**Replacement Recommendations:**
Consider proactive replacement of critical safety devices after 80% of expected lifespan to maintain optimal protection.`,
      tags: ['Product Lifespan', 'Maintenance', 'Replacement', 'Reliability']
    },
    {
      id: 8,
      category: 'warranty',
      question: 'How do I register my Promac products for warranty?',
      answer: `Warranty registration is simple and important:

**Online Registration:**
• Visit promacelectrical.com/warranty
• Enter product serial number and purchase details
• Upload purchase receipt/invoice
• Receive confirmation email with warranty certificate

**Required Information:**
• Product model and serial number
• Purchase date and dealer information
• Installation location and contact details
• Product photos (for verification)

**Registration Benefits:**
• Faster warranty claim processing
• Automatic warranty expiry notifications
• Product recall notifications (if applicable)
• Access to exclusive support resources

**Alternative Methods:**
• WhatsApp: Send details to +91 98765-43210
• Email: warranty@promacelectrical.com
• Phone: Call 1800-123-4567 for assistance
• Dealer: Many authorized dealers can register on your behalf

**Important Notes:**
• Register within 30 days of purchase for full benefits
• Keep purchase receipts safe as proof of purchase
• Registration is free and takes less than 5 minutes
• Bulk registration available for contractors and distributors`,
      tags: ['Warranty Registration', 'Online Process', 'Benefits', 'Support']
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  );

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Find quick answers to common questions about our products, installation, and services
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium brand-transition ${
              selectedCategory === category.id
                ? 'bg-brand-navy text-white shadow-primary'
                : 'bg-white text-text-primary border border-gray-200 hover:border-brand-navy hover:text-brand-navy'
            }`}
          >
            <span>{category.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 brand-transition"
            >
              <h3 className="text-lg font-semibold text-text-primary pr-4">
                {faq.question}
              </h3>
              <Icon
                name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-text-secondary flex-shrink-0"
              />
            </button>
            
            {openFAQ === faq.id && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <div className="prose prose-sm max-w-none">
                    {faq.answer.split('\n').map((paragraph, index) => {
                      if (paragraph.trim() === '') return null;
                      
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h4 key={index} className="font-semibold text-text-primary mt-4 mb-2">
                            {paragraph.replace(/\*\*/g, '')}
                          </h4>
                        );
                      }
                      
                      if (paragraph.startsWith('•')) {
                        return (
                          <li key={index} className="text-text-secondary ml-4 mb-1">
                            {paragraph.substring(1).trim()}
                          </li>
                        );
                      }
                      
                      return (
                        <p key={index} className="text-text-secondary mb-3 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                    {faq.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-text-secondary px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <Icon name="HelpCircle" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-text-primary mb-2">No FAQs found</h3>
          <p className="text-text-secondary">Try selecting a different category</p>
        </div>
      )}

      {/* Contact Support */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-navy to-action-blue rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our technical experts are here to help. Get personalized assistance for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-navy px-6 py-3 rounded-lg font-semibold hover:bg-white/90 brand-transition flex items-center justify-center space-x-2">
              <Icon name="MessageCircle" size={20} />
              <span>Start Live Chat</span>
            </button>
            <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 brand-transition flex items-center justify-center space-x-2">
              <Icon name="Phone" size={20} />
              <span>Call Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;