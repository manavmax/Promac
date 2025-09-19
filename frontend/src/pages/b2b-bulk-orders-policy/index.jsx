import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const B2BBulkOrdersPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>B2B / Bulk Orders Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="B2B / Bulk Orders Policy for Promac Electrical - Learn about our business account features, volume pricing, credit terms, and specialized services for contractors and distributors." 
        />
        <meta name="keywords" content="B2B policy, bulk orders, business accounts, volume pricing, credit terms, Promac Electrical, contractors, distributors" />
        <link rel="canonical" href="https://promacelectrical.com/b2b-bulk-orders-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  B2B / Bulk Orders Policy
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
                      Promac's B2B / Bulk Orders Policy ("Policy") is designed to define the terms, procedures, and benefits for our business clients, contractors, distributors, and project partners. This policy governs all bulk orders, credit facilities, volume pricing, project consultations, loyalty programs, and special B2B services offered by Promac.
                    </p>
                    <p>
                      By registering for a business account or placing bulk orders, you acknowledge and agree to abide by this policy along with our Terms & Conditions, Payment Policy, and Refund & Return Policy.
                    </p>
                  </div>
                </div>

                {/* Eligibility & Registration */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Eligibility & Registration for Business Accounts</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Who Can Register:</strong> Registered companies, contractors, resellers, distributors, institutions, and government entities. Must provide valid business license, GSTIN, PAN, and proof of establishment. Sole proprietorships or small-scale enterprises may apply but require additional verification.
                    </p>
                    <p>
                      <strong>Registration Process:</strong> Complete the Business Account Registration Form on the Promac website. Submit required documents for verification. Approval timeline: typically 2–5 business days.
                    </p>
                    <p>
                      <strong>Verification & KYC:</strong> Promac reserves the right to verify submitted documents via third-party services. Approval is at Promac's discretion, and rejection does not require explanation.
                    </p>
                    <p>
                      <strong>Account Activation:</strong> Upon approval, clients receive a business account login, enabling access to bulk pricing catalog, volume discount calculators, credit facilities, project consultation requests, and loyalty program management.
                    </p>
                  </div>
                </div>

                {/* Bulk Order Features */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Bulk Order Features</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Placing Bulk Orders:</strong> Business accounts can place orders in large quantities with access to tiered pricing. Orders can be placed via online B2B portal, email or business account manager, or API integration for enterprise clients.
                    </p>
                    <p>
                      <strong>Minimum Order Quantity (MOQ):</strong> Varies by product category and manufacturer guidelines. Promac may set MOQ for special or custom orders to ensure operational efficiency.
                    </p>
                    <p>
                      <strong>Custom Orders:</strong> Businesses can request custom configurations or branding on select products. Non-standard orders may require 50% advance payment.
                    </p>
                    <p>
                      <strong>Order Tracking & Management:</strong> B2B clients can track bulk orders in real-time via the distributor portal. Order history, invoice download, and dispatch updates are available at all times.
                    </p>
                  </div>
                </div>

                {/* Volume Pricing & Discounts */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Volume Pricing & Discounts</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Tiered Pricing System:</strong> Discounts automatically apply based on order volume. Example: 100–499 units: 5% discount, 500–999 units: 10% discount, 1000+ units: 15% discount. Pricing tiers may vary based on product category and promotional campaigns.
                    </p>
                    <p>
                      <strong>Seasonal & Promotional Offers:</strong> B2B clients may benefit from festival offers, clearance sales, and special rates on new product launches.
                    </p>
                    <p>
                      <strong>Price Verification:</strong> All prices are inclusive of GST, unless otherwise specified. Promac reserves the right to update pricing due to supply chain changes or regulatory adjustments.
                    </p>
                  </div>
                </div>

                {/* Payment & Credit Terms */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Payment & Credit Terms</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Advance Payments:</strong> For custom orders, project consultation, or non-stock items, a 25–50% advance is required.
                    </p>
                    <p>
                      <strong>Credit Facilities:</strong> Approved business clients may enjoy credit terms (e.g., 30–60 days). Credit limits are assigned based on order history, financial evaluation, and risk assessment.
                    </p>
                    <p>
                      <strong>Late Payment Penalties:</strong> Overdue payments may incur 1.5–2% interest per month. Promac may suspend credit facilities until dues are cleared.
                    </p>
                    <p>
                      <strong>Invoice & GST Compliance:</strong> All invoices include GST and are compliant with local tax regulations. Electronic invoices are automatically generated and downloadable from the B2B portal.
                    </p>
                  </div>
                </div>

                {/* Delivery & Logistics for B2B Orders */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Delivery & Logistics for B2B Orders</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Standard Delivery:</strong> Promac coordinates with third-party logistics providers for timely delivery. Delivery timelines vary based on product type, order volume, and location of delivery.
                    </p>
                    <p>
                      <strong>Bulk Shipping & Freight:</strong> Large shipments may qualify for freight discounts or free delivery depending on order volume. Business clients may request dedicated transport or express delivery.
                    </p>
                    <p>
                      <strong>Risk & Ownership:</strong> Risk of loss passes to the customer upon delivery to the designated address. Damages during transit should be reported within 24 hours.
                    </p>
                    <p>
                      <strong>International Orders:</strong> Business clients outside India are responsible for customs clearance, duties, and taxes.
                    </p>
                  </div>
                </div>

                {/* Project Consultation & Technical Support */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Project Consultation & Technical Support</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Consultation Services:</strong> Promac offers expert guidance for lighting projects, electrical installations, and product selection. Consultation requests can be submitted via the B2B portal.
                    </p>
                    <p>
                      <strong>Scope of Consultation:</strong> Product recommendations, quantity & specification planning, budget and cost optimization, installation advice.
                    </p>
                    <p>
                      <strong>Limitations:</strong> Promac provides advisory guidance; the implementation and outcomes remain the client's responsibility.
                    </p>
                  </div>
                </div>

                {/* Loyalty & Reward Programs */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Loyalty & Reward Programs</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Promac Contractor Loyalty Program:</strong> Business clients accumulate points based on purchase volume, frequency, and timely payments.
                    </p>
                    <p>
                      <strong>Rewards:</strong> Redeem points for discounts on future orders, free consultation hours, early access to new product launches.
                    </p>
                    <p>
                      <strong>Program Management:</strong> Loyalty points are tracked via the B2B portal. Promac reserves the right to modify or terminate the program at any time.
                    </p>
                  </div>
                </div>

                {/* Returns & Bulk Order Cancellations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Returns & Bulk Order Cancellations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Bulk orders are subject to Promac's Refund & Return Policy.</li>
                      <li>Special orders or customized products may be non-returnable.</li>
                      <li>Cancellation requests must be submitted in writing and may incur restocking charges.</li>
                    </ul>
                  </div>
                </div>

                {/* Compliance & Legal */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Compliance & Legal</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Business Conduct:</strong> B2B clients must comply with all local regulations and tax laws. Fraud, misuse, or attempts to manipulate pricing or loyalty points will result in termination of account, blacklisting, or legal action if necessary.
                    </p>
                    <p>
                      <strong>Intellectual Property:</strong> Clients cannot reproduce or distribute Promac content or proprietary tools without written consent.
                    </p>
                    <p>
                      <strong>Governing Law:</strong> Indian law governs all B2B transactions, with disputes subject to courts in Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> b2b@promacelectrical.com</p>
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

export default B2BBulkOrdersPolicy;