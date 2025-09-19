import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Privacy Policy for Promac Electrical - Learn how we collect, use, and protect your personal information on our e-commerce platform." 
        />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, Promac Electrical" />
        <link rel="canonical" href="https://promacelectrical.com/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Privacy Policy
                </h1>
                <p className="text-sm text-gray-500">
                  Last Updated: December 2024
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                
                {/* Introduction */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">1. Introduction</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      At Promac Electrical ("we," "our," "us," or "the Platform"), we respect and value the privacy of our customers, partners, and visitors. This Privacy Policy explains how we collect, use, store, and protect your information when you access or use our e-commerce platform, whether as an individual buyer, contractor, or business-to-business (B2B) client.
                    </p>
                    <p>
                      By accessing our Website or mobile application, you consent to the practices outlined in this Privacy Policy. If you do not agree, please discontinue the use of our services.
                    </p>
                    <p>
                      Our policy is designed to be transparent, comprehensive, and compliant with relevant data protection laws, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (India).</li>
                      <li>General Data Protection Regulation (GDPR) (if applicable to international users).</li>
                      <li>California Consumer Privacy Act (CCPA) (if applicable to U.S. users).</li>
                    </ul>
                  </div>
                </div>

                {/* Information We Collect */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Information We Collect</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We may collect the following categories of information:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Personal Information:</strong> Full Name, Email Address, Phone Number, Billing & Shipping Address, Government-issued IDs (for business account verification)</li>
                      <li><strong>Account Information:</strong> Username and password, Business details (company name, GST/VAT number, license information), Loyalty program participation data</li>
                      <li><strong>Transaction Information:</strong> Order history, Payment details (processed securely through third-party gateways; we do not store full card details), Refunds and cancellations</li>
                      <li><strong>Technical Information:</strong> IP address, Browser type and version, Device identifiers, Cookies and tracking technologies</li>
                      <li><strong>Business & Bulk Order Information:</strong> Credit system usage, Volume price calculator inputs, Project consultation details, Contractor loyalty program participation</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We process your data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Order Fulfillment</strong> – To confirm, process, and deliver your purchases.</li>
                      <li><strong>Account Management</strong> – To manage personal and business accounts, including sub-user access for B2B clients.</li>
                      <li><strong>Customer Support</strong> – To provide helpdesk support, respond to queries, and resolve disputes.</li>
                      <li><strong>Marketing</strong> – To send promotional offers, loyalty rewards, and personalized recommendations.</li>
                      <li><strong>Legal Compliance</strong> – To meet legal, regulatory, and tax requirements.</li>
                      <li><strong>Security</strong> – To prevent fraud, detect suspicious transactions, and protect user accounts.</li>
                      <li><strong>Business Services</strong> – For features like bulk orders, credit facilities, and project consultation.</li>
                    </ul>
                  </div>
                </div>

                {/* Data Sharing */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Data Sharing</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We may share your data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Service Providers:</strong> With courier companies, payment processors, and IT support.</li>
                      <li><strong>Business Partners:</strong> With authorized distributors or contractors when you opt into bulk or B2B programs.</li>
                      <li><strong>Legal Authorities:</strong> When required by law, court orders, or government regulations.</li>
                      <li><strong>Mergers/Acquisitions:</strong> If our company undergoes restructuring, your information may be transferred.</li>
                    </ul>
                    <p className="font-medium">
                      We do not sell personal data to third parties.
                    </p>
                  </div>
                </div>

                {/* Cookies & Tracking Technologies */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Cookies & Tracking Technologies</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We use cookies, web beacons, and tracking pixels to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Improve user experience.</li>
                      <li>Remember login credentials.</li>
                      <li>Provide personalized product recommendations.</li>
                      <li>Measure marketing campaign performance.</li>
                    </ul>
                    <p>
                      Users can manage cookies via browser settings, but disabling them may limit functionality.
                    </p>
                  </div>
                </div>

                {/* Data Security */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Data Security</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We employ industry-standard measures such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>SSL encryption for all transactions.</li>
                      <li>Firewalls and intrusion detection systems.</li>
                      <li>Regular vulnerability assessments.</li>
                      <li>Restricted employee access to sensitive data.</li>
                    </ul>
                    <p>
                      Despite these efforts, no system is completely secure. Users are encouraged to keep passwords confidential.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Data Retention</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We retain personal data only as long as necessary for:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Legal compliance.</li>
                      <li>Taxation and accounting.</li>
                      <li>Loyalty program management.</li>
                      <li>Future order facilitation.</li>
                    </ul>
                    <p>
                      Business account data may be retained longer to comply with financial regulations.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Your Rights</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Depending on jurisdiction, you may have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Access and download your data.</li>
                      <li>Request correction or deletion.</li>
                      <li>Withdraw consent for marketing.</li>
                      <li>Restrict processing.</li>
                      <li>Request data portability (where legally applicable).</li>
                    </ul>
                    <p>
                      Requests can be made via our Contact Us page.
                    </p>
                  </div>
                </div>

                {/* B2B & Bulk Order Privacy Considerations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. B2B & Bulk Order Privacy Considerations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      For business accounts, we may collect additional data:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Business registration certificates.</li>
                      <li>Tax details.</li>
                      <li>Credit history.</li>
                      <li>Project consultation notes.</li>
                    </ul>
                    <p>
                      Such data is treated with the same confidentiality as personal accounts, with enhanced safeguards.
                    </p>
                  </div>
                </div>

                {/* Children's Privacy */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Children's Privacy</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We do not knowingly collect information from children under 13 (or the applicable age of consent). If discovered, such data will be deleted immediately.
                    </p>
                  </div>
                </div>

                {/* International Users */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">11. International Users</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      For users outside India, data may be transferred and processed in jurisdictions with different privacy laws. We ensure adequate protections are in place.
                    </p>
                  </div>
                </div>

                {/* Updates to Privacy Policy */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">12. Updates to Privacy Policy</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We reserve the right to modify this Policy at any time. Changes will be posted with the updated date. Continued use indicates acceptance.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> privacy@promacelectrical.com</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
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

export default PrivacyPolicy;