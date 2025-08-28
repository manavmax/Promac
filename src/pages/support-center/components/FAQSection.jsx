import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Questions', icon: 'Grid3x3', count: 89, color: 'from-[#8B5CF6] to-[#A78BFA]' },
    { id: 'installation', name: 'Installation', icon: 'Wrench', count: 23, color: 'from-[#10B981] to-[#34D399]' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'AlertTriangle', count: 31, color: 'from-[#F59E0B] to-[#FBBF24]' },
    { id: 'warranty', name: 'Warranty', icon: 'Shield', count: 18, color: 'from-[#EF4444] to-[#F87171]' },
    { id: 'technical', name: 'Technical', icon: 'Settings', count: 17, color: 'from-[#3B82F6] to-[#60A5FA]' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What are the standard warranty terms for Promac Electrical products?',
      answer: 'Our standard warranty covers manufacturing defects for 2 years from the date of purchase. This includes free replacement of defective parts and labor costs for repairs. Extended warranty options are available for up to 5 years of coverage.',
      category: 'warranty',
      tags: ['Warranty', 'Coverage', 'Terms'],
      helpful: 156,
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      question: 'How do I properly install a Miniature Circuit Breaker (MCB)?',
      answer: 'MCB installation requires proper mounting on DIN rails, correct wire sizing, and adherence to local electrical codes. Always ensure the power is disconnected before installation, use appropriate tools, and verify the rating matches your circuit requirements.',
      category: 'installation',
      tags: ['MCB', 'Installation', 'Safety'],
      helpful: 203,
      lastUpdated: '2025-01-14'
    },
    {
      id: 3,
      question: 'What should I do if my ELCB keeps tripping?',
      answer: 'ELCB tripping usually indicates a ground fault or leakage current. Check for damaged insulation, wet conditions, or faulty appliances. Test the ELCB monthly using the test button and ensure proper earthing. If problems persist, contact our technical support.',
      category: 'troubleshooting',
      tags: ['ELCB', 'Tripping', 'Ground Fault'],
      helpful: 187,
      lastUpdated: '2025-01-13'
    },
    {
      id: 4,
      question: 'Are Promac products compliant with Indian electrical standards?',
      answer: 'Yes, all Promac Electrical products are fully compliant with BIS (Bureau of Indian Standards) and IEC (International Electrotechnical Commission) standards. We maintain regular certifications and undergo periodic testing to ensure compliance.',
      category: 'technical',
      tags: ['Standards', 'BIS', 'Compliance'],
      helpful: 134,
      lastUpdated: '2025-01-12'
    },
    {
      id: 5,
      question: 'How can I calculate the correct MCB rating for my circuit?',
      answer: 'MCB rating should be based on the circuit load current. Calculate the total load (watts ÷ voltage), add 20% safety margin, and select the nearest standard MCB rating. For motor circuits, consider starting current and use appropriate protection.',
      category: 'technical',
      tags: ['MCB Rating', 'Load Calculation', 'Circuit Protection'],
      helpful: 198,
      lastUpdated: '2025-01-11'
    },
    {
      id: 6,
      question: 'What maintenance is required for electrical panels?',
      answer: 'Regular maintenance includes visual inspection for loose connections, cleaning dust and debris, checking for signs of overheating, testing circuit breakers, and verifying proper labeling. Professional inspection is recommended annually.',
      category: 'installation',
      tags: ['Maintenance', 'Electrical Panels', 'Safety'],
      helpful: 167,
      lastUpdated: '2025-01-10'
    },
    {
      id: 7,
      question: 'How do I file a warranty claim for a defective product?',
      answer: 'To file a warranty claim, contact our support team with your purchase details, product serial number, and description of the issue. Include photos if possible. We\'ll provide a return authorization and guide you through the process.',
      category: 'warranty',
      tags: ['Warranty Claim', 'Returns', 'Support'],
      helpful: 145,
      lastUpdated: '2025-01-09'
    },
    {
      id: 8,
      question: 'What safety precautions should I take during electrical work?',
      answer: 'Always disconnect power, use insulated tools, wear appropriate PPE, work in dry conditions, and follow lockout/tagout procedures. Never work on live circuits unless absolutely necessary and always have someone nearby for safety.',
      category: 'installation',
      tags: ['Safety', 'PPE', 'Electrical Work'],
      helpful: 223,
      lastUpdated: '2025-01-08'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  );

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] min-h-screen py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full text-white text-sm font-semibold mb-6">
            <Icon name="HelpCircle" size={16} className="mr-2" />
            Frequently Asked Questions
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Find Answers to{' '}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
              Common Questions
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Get quick answers to frequently asked questions about our products, installation, and support services
          </p>
        </div>

        {/* Categories Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-xl scale-105'
                    : 'bg-[#1F2937] text-gray-300 hover:bg-[#374151] hover:text-white'
                } border border-[#374151]`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={category.icon} size={20} />
                  <span className="font-semibold">{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-6 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`group bg-[#1F2937] rounded-2xl border border-[#374151] overflow-hidden transition-all duration-500 hover:border-[#F59E0B]/50 hover:shadow-xl hover:shadow-[#F59E0B]/10 ${
                openFAQ === faq.id ? 'ring-2 ring-[#F59E0B]/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left focus:outline-none"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
                      {faq.question}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#374151] text-gray-300 text-xs rounded-full border border-[#4B5563]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Icon name="ThumbsUp" size={14} className="mr-1" />
                        {faq.helpful} found helpful
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        Updated {new Date(faq.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className={`ml-4 w-8 h-8 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}>
                    <Icon name="ChevronDown" size={20} color="white" />
                  </div>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-[#374151] pt-4">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-[#F59E0B] hover:text-[#FBBF24] transition-colors duration-200">
                          <Icon name="ThumbsUp" size={16} />
                          <span className="text-sm font-medium">Helpful</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                          <Icon name="ThumbsDown" size={16} />
                          <span className="text-sm font-medium">Not Helpful</span>
                        </button>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors duration-200">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm font-medium">Ask Follow-up</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-3xl border border-[#374151] p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help with any specific questions or technical issues you may have
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-xl hover:from-[#A78BFA] hover:to-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8B5CF6]/25">
                <Icon name="MessageCircle" size={20} className="mr-2 inline" />
                Live Chat Support
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold rounded-xl hover:from-[#60A5FA] hover:to-[#3B82F6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/25">
                <Icon name="Phone" size={20} className="mr-2 inline" />
                Call Support
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-semibold rounded-xl hover:from-[#34D399] hover:to-[#10B981] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#10B981]/25">
                <Icon name="Mail" size={20} className="mr-2 inline" />
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;