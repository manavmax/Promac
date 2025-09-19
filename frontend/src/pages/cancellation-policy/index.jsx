import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const CancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cancellation Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Cancellation Policy for Promac Electrical - Learn about order cancellation terms, procedures, and refund policies for B2C and B2B customers." 
        />
        <meta name="keywords" content="cancellation policy, order cancellation, cancel order, Promac Electrical, B2B, B2C" />
        <link rel="canonical" href="https://promacelectrical.com/cancellation-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Cancellation Policy
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
                      Promac is committed to providing flexible yet fair cancellation terms for customers while maintaining operational efficiency and honoring commitments to suppliers and logistics partners.
                    </p>
                    <p>
                      This policy applies to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Retail Orders (B2C):</strong> Single product purchases, multiple items, or combined cart orders.</li>
                      <li><strong>Business & Bulk Orders (B2B):</strong> Bulk purchases, custom orders, contractor orders, and project consultations.</li>
                      <li><strong>Custom & Special Orders:</strong> Customized products, branded items, or non-stock items.</li>
                      <li><strong>Project Consultations & Services:</strong> Any scheduled advisory services or consultations.</li>
                    </ul>
                    <p>
                      By understanding this policy, you ensure smooth order management and avoid disputes, unnecessary charges, or delays.
                    </p>
                  </div>
                </div>

                {/* Cancellation Rights */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Cancellation Rights</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Retail Orders (B2C):</strong> Customers may cancel orders placed online via the website or B2C portal before the order is dispatched. Once the order has been shipped, cancellations are generally not allowed, and customers must follow the Return & Refund Policy. You may cancel individual items before dispatch without affecting the remaining items.
                    </p>
                    <p>
                      <strong>Business Orders (B2B / Bulk):</strong> Standard orders can be canceled if processing has not begun. Custom orders (non-stock, branded, or specially configured products) require 50% advance payment. Cancellations may incur restocking or procurement charges. Large bulk orders may require written cancellation requests.
                    </p>
                    <p>
                      <strong>Project Consultation & Services:</strong> Cancellation must be made at least 48–72 hours before scheduled consultation or service. Late cancellations or no-shows may result in partial or full charges depending on the service type.
                    </p>
                  </div>
                </div>

                {/* Cancellation Process */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Cancellation Process</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Retail Customers (B2C):</strong> Navigate to your order history in the account portal, select "Cancel Order" next to the relevant item(s). Cancellation is confirmed via email or SMS.
                    </p>
                    <p>
                      <strong>Business Clients (B2B):</strong> Submit a written cancellation request via the B2B portal or email to your assigned account manager. Include order number, product details, quantity, and reason for cancellation. Promac acknowledges receipt and confirms approval or rejection within 2–5 business days.
                    </p>
                    <p>
                      <strong>Custom & Special Orders:</strong> Provide detailed request in writing. Charges may apply for materials already procured or manufacturing work already initiated.
                    </p>
                    <p>
                      <strong>Project Consultation & Services:</strong> Notify via portal, email, or direct contact with the Promac representative. Cancellation confirmation will be provided via email.
                    </p>
                  </div>
                </div>

                {/* Charges & Deductions */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Charges & Deductions</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Retail Orders (B2C):</strong> Full refund applicable if canceled before dispatch. No processing fees for standard cancellations before shipment.
                    </p>
                    <p>
                      <strong>Business Orders (B2B / Bulk):</strong> Restocking charges may apply to standard bulk orders if packaging or logistics processes have begun (typically 5–10% of order value). Custom orders: charges for materials, labor, and procurement costs are non-refundable.
                    </p>
                    <p>
                      <strong>Project Consultation & Services:</strong> 50% charge may apply if canceled less than 48 hours before the scheduled time. No-shows: full consultation fee may be charged.
                    </p>
                  </div>
                </div>

                {/* Refund Procedure After Cancellation */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Refund Procedure After Cancellation</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Refunds will be processed as per Promac's Payment Policy.</li>
                      <li><strong>Original Payment Mode:</strong> Refunds are typically credited to the original payment method.</li>
                      <li><strong>Credit Orders (B2B):</strong> Advance payments or partially paid invoices may be adjusted against future orders.</li>
                      <li><strong>Timeline:</strong> 2–15 business days depending on bank or payment provider.</li>
                    </ul>
                  </div>
                </div>

                {/* Special Cases */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Special Cases</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Partially Shipped Orders:</strong> If an order contains multiple items and some have already shipped, only unshipped items are eligible for cancellation. Shipped items must follow the Return & Refund Policy.
                    </p>
                    <p>
                      <strong>Pre-Orders or New Launch Products:</strong> Pre-orders for upcoming products may have non-cancellable clauses. Cancellation before shipping may incur a processing fee.
                    </p>
                    <p>
                      <strong>Backordered or Out-of-Stock Items:</strong> Customers may cancel backorders without penalty. B2B clients will be notified and offered alternate products or reschedule options.
                    </p>
                    <p>
                      <strong>International Orders:</strong> Cancellation rules may vary depending on customs clearance, shipping timelines, and local regulations. Charges may apply for international freight and customs handling.
                    </p>
                  </div>
                </div>

                {/* Terms for B2B Credit & Bulk Orders */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Terms for B2B Credit & Bulk Orders</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Advance Payment Orders:</strong> Non-refundable if cancellation is made after processing or production begins.</li>
                      <li><strong>Credit Orders:</strong> Cancelled orders may require adjustment of outstanding credit limits.</li>
                      <li><strong>Loyalty & Reward Points:</strong> Points earned from cancelled orders may be revoked.</li>
                    </ul>
                  </div>
                </div>

                {/* Promac's Rights */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Promac's Rights</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Promac reserves the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Reject cancellation requests if production, procurement, or dispatch has commenced.</li>
                      <li>Impose reasonable charges to cover costs incurred.</li>
                      <li>Amend this Cancellation Policy at any time.</li>
                      <li>Suspend or terminate accounts that abuse the cancellation policy.</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Responsibilities */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Customer Responsibilities</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Ensure cancellation requests are submitted accurately and promptly.</li>
                      <li>Verify order numbers, product details, and quantities before submission.</li>
                      <li>Understand that custom orders, special promotions, and project services may have specific non-cancellable terms.</li>
                    </ul>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Dispute Resolution</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Any disputes arising from cancellations will be addressed by Promac's Customer Service team.</li>
                      <li>Escalation may involve B2B account managers or legal departments for bulk or custom orders.</li>
                      <li>Final resolution is governed under Indian law with jurisdiction in Mumbai, Maharashtra.</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> cancellations@promacelectrical.com</p>
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

export default CancellationPolicy;