import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const DisclaimerPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Disclaimer Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Disclaimer Policy for Promac Electrical - Learn about our liability limitations, product disclaimers, and terms of use for our e-commerce platform." 
        />
        <meta name="keywords" content="disclaimer policy, liability, terms of use, Promac Electrical, legal disclaimer" />
        <link rel="canonical" href="https://promacelectrical.com/disclaimer-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Disclaimer Policy
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
                      This Disclaimer ("Policy") applies to the use of Promac's e-commerce platform, products, services, business solutions, and all associated features including but not limited to B2C retail, B2B bulk ordering, project consultation, credit systems, contractor loyalty programs, and technical resources made available on our website or affiliated platforms.
                    </p>
                    <p>
                      The purpose of this Disclaimer is to clarify the limitations of our liability, the scope of information presented, and the user's responsibilities while interacting with Promac. By using our website, purchasing products, or availing of services, you acknowledge and agree to the terms of this Disclaimer.
                    </p>
                  </div>
                </div>

                {/* General Disclaimer of Liability */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. General Disclaimer of Liability</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Use at Your Own Risk:</strong> All products, services, tools, and information provided by Promac are offered on an "as is" and "as available" basis. While we strive for accuracy, Promac makes no guarantees that the website, product descriptions, or services will always be complete, reliable, or error-free.
                    </p>
                    <p>
                      <strong>No Absolute Guarantee:</strong> Promac does not warrant that the use of our site will be uninterrupted, secure, or free of technical errors. Users are responsible for ensuring their devices and internet connections meet the minimum requirements for using our platform.
                    </p>
                    <p>
                      <strong>Third-Party Dependencies:</strong> Certain services rely on third-party tools (payment gateways, logistics providers, consulting partners). Promac is not liable for any interruptions, errors, or failures caused by these external parties.
                    </p>
                  </div>
                </div>

                {/* Product Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Product Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Representation of Products:</strong> Images, videos, specifications, and descriptions of products are provided for reference purposes. Actual product appearance, packaging, and performance may differ based on manufacturer updates, batch variations, or regional differences.
                    </p>
                    <p>
                      <strong>Technical Specifications:</strong> While Promac makes every effort to provide accurate details, technical errors or supplier updates may cause slight discrepancies. Customers should verify product compatibility before purchase, especially for bulk or project-based orders.
                    </p>
                    <p>
                      <strong>Product Usage:</strong> Promac is not responsible for damages caused by misuse, improper installation, or failure to follow manufacturer instructions.
                    </p>
                  </div>
                </div>

                {/* Service Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Service Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Consultation Services:</strong> Any project consultation or guidance provided by Promac experts is advisory in nature. Final implementation and decision-making remain the responsibility of the client.
                    </p>
                    <p>
                      <strong>B2B Features:</strong> Bulk orders, contractor loyalty programs, and business credit facilities are governed by separate agreements. Promac is not liable for business losses arising from the misuse or misinterpretation of such services.
                    </p>
                    <p>
                      <strong>Delivery & Logistics:</strong> Promac relies on third-party logistics providers for order delivery. While we coordinate and monitor shipments, delays or damages in transit fall under courier liability as per applicable shipping laws.
                    </p>
                  </div>
                </div>

                {/* Financial Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Financial Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Credit & Payment Terms:</strong> Any credit facilities extended to B2B clients are subject to verification and agreements. Promac is not liable for financial losses arising from mismanagement of credit lines or defaults by business clients.
                    </p>
                    <p>
                      <strong>Taxes & Duties:</strong> All orders are subject to applicable local, state, and international taxes, duties, or levies. Customers bear sole responsibility for compliance with their local tax laws.
                    </p>
                  </div>
                </div>

                {/* Website Content Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Website Content Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Accuracy of Information:</strong> Promac makes reasonable efforts to keep website content updated, but errors may occur. We do not guarantee the absolute accuracy, reliability, or completeness of all information.
                    </p>
                    <p>
                      <strong>External Links:</strong> Our website may contain links to third-party sites for convenience. Promac is not responsible for the accuracy, legality, or security of these external sites.
                    </p>
                    <p>
                      <strong>Intellectual Property:</strong> All content (logos, trademarks, product images, descriptions, software) belongs to Promac or its partners. Unauthorized reproduction is prohibited.
                    </p>
                  </div>
                </div>

                {/* Health, Safety & Legal Compliance Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Health, Safety & Legal Compliance Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Product Use & Safety:</strong> Electrical products and components sold by Promac must be installed and used as per manufacturer guidelines. Promac is not liable for injuries, damages, or accidents resulting from improper usage.
                    </p>
                    <p>
                      <strong>Compliance Responsibility:</strong> Customers, especially business buyers, must ensure purchased products comply with local safety, building, or regulatory standards.
                    </p>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Promac shall not be held liable for any:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Direct, indirect, incidental, or consequential damages.</li>
                      <li>Business losses, missed opportunities, or revenue loss.</li>
                      <li>Data breaches resulting from user negligence (e.g., weak passwords).</li>
                    </ul>
                    <p className="font-medium">
                      Our liability, in any case, shall not exceed the value of the product/service purchased.
                    </p>
                  </div>
                </div>

                {/* Indemnification Clause */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Indemnification Clause</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      By using Promac's platform, you agree to indemnify and hold harmless Promac, its affiliates, directors, employees, and partners against claims, liabilities, damages, or expenses arising out of:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Your breach of Terms & Conditions.</li>
                      <li>Misuse of products or services.</li>
                      <li>Violation of intellectual property rights.</li>
                      <li>Unauthorized or fraudulent transactions.</li>
                    </ul>
                  </div>
                </div>

                {/* Changes to Disclaimer */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Changes to Disclaimer</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Promac reserves the right to update or amend this Disclaimer at any time without prior notice. Users are encouraged to periodically review this page. Continued use of our services after modifications implies acceptance of updated terms.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">11. Governing Law</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This Disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes shall fall under the exclusive jurisdiction of courts in Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> legal@promacelectrical.com</p>
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

export default DisclaimerPolicy;