import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const RefundReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund & Return Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Refund & Return Policy for Promac Electrical - Learn about our return process, eligibility criteria, and refund procedures for B2C and B2B customers." 
        />
        <meta name="keywords" content="refund policy, return policy, returns, refunds, Promac Electrical, electrical components" />
        <link rel="canonical" href="https://promacelectrical.com/refund-return-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Refund & Return Policy
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
                      At Promac, customer satisfaction is our highest priority. We aim to deliver products that meet the highest standards of quality, reliability, and durability. However, we understand that situations may arise where you may wish to return or exchange a product, or request a refund.
                    </p>
                    <p>
                      This Refund & Return Policy outlines in detail the terms and conditions governing returns, replacements, and refunds for purchases made through our website, mobile application, and authorized platforms.
                    </p>
                    <p>
                      By purchasing from Promac, you agree to comply with this policy. Please read carefully to understand your rights and obligations.
                    </p>
                  </div>
                </div>

                {/* Eligibility for Returns */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Eligibility for Returns</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      A return or replacement may be requested under the following conditions:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Defective Products:</strong> Manufacturing defects detected upon delivery or functional failure within the return eligibility period.</li>
                      <li><strong>Damaged During Delivery:</strong> Visible damage to packaging or product, or hidden internal damage confirmed upon unboxing.</li>
                      <li><strong>Incorrect Product Delivered:</strong> Wrong model, variant, or specifications delivered.</li>
                    </ul>
                    <p>
                      <strong>Ineligible Returns:</strong> Products damaged due to misuse, improper installation, or unauthorized repairs; products used beyond reasonable wear-and-tear; customized or made-to-order products; digital products, downloadable catalogs, or software licenses.
                    </p>
                  </div>
                </div>

                {/* Return Window */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Return Window</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Standard Customers (B2C):</strong> 7–14 days from date of delivery.</li>
                      <li><strong>Business & Bulk Orders (B2B):</strong> 3–5 business days from date of delivery (due to high-volume logistics).</li>
                      <li><strong>Defective Products with Warranty:</strong> Covered as per manufacturer's warranty terms.</li>
                    </ul>
                  </div>
                </div>

                {/* Return Process */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Return Process</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Step 1 – Initiation:</strong> Log in to your account, navigate to "My Orders," click "Request Return/Replacement," provide reason, upload photos (if applicable).
                    </p>
                    <p>
                      <strong>Step 2 – Verification:</strong> Our team reviews the request within 48 hours. For defective/damaged products, we may request video proof.
                    </p>
                    <p>
                      <strong>Step 3 – Pickup/Shipping:</strong> For eligible returns, a pickup will be scheduled. Alternatively, customers may be asked to ship the item to our warehouse.
                    </p>
                    <p>
                      <strong>Step 4 – Inspection:</strong> Returned products undergo quality checks. Approval or rejection is communicated within 7 business days.
                    </p>
                    <p>
                      <strong>Step 5 – Refund/Replacement:</strong> Upon approval, refund/replacement is initiated.
                    </p>
                  </div>
                </div>

                {/* Refund Methods */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Refund Methods</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Refunds are processed through the original mode of payment wherever possible:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>UPI / Wallets:</strong> 3–5 business days</li>
                      <li><strong>Credit/Debit Cards:</strong> 7–10 business days</li>
                      <li><strong>Net Banking:</strong> 5–7 business days</li>
                      <li><strong>Cash on Delivery (COD):</strong> Refund issued via bank transfer or store credit</li>
                    </ul>
                    <p>
                      For B2B clients, refunds may be adjusted against outstanding invoices or provided as credit notes.
                    </p>
                  </div>
                </div>

                {/* Partial Refunds */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Partial Refunds</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Partial refunds may apply if:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Product is returned in used or incomplete condition.</li>
                      <li>Original packaging or accessories are missing.</li>
                      <li>Product shows signs of wear inconsistent with stated issue.</li>
                    </ul>
                  </div>
                </div>

                {/* Exchanges */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Exchanges</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Like-for-like replacements will be provided subject to stock availability.</li>
                      <li>If unavailable, customers may opt for another product of equal or higher value (price difference payable).</li>
                    </ul>
                  </div>
                </div>

                {/* Bulk & B2B Return Considerations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Bulk & B2B Return Considerations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Special terms apply for business and bulk orders:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Restocking Fee:</strong> 5–15% of product value may apply.</li>
                      <li><strong>Minimum Return Quantity:</strong> Some items may only be returned in full batches.</li>
                      <li><strong>Credit Notes:</strong> Refunds often issued as credit notes for future bulk purchases.</li>
                      <li><strong>Customized Solutions:</strong> Project-based deliveries are non-returnable once accepted.</li>
                    </ul>
                  </div>
                </div>

                {/* Exceptions */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Exceptions</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      The following products/services are non-returnable and non-refundable:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Products marked "Final Sale" or "Non-Returnable."</li>
                      <li>Customized or branded items made to order.</li>
                      <li>Installation services, consultation, or labor charges.</li>
                      <li>Gift cards, promotional vouchers, or loyalty rewards.</li>
                      <li>Software, digital downloads, and electronic licenses.</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Obligations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Customer Obligations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Products must be returned in original condition, with packaging and all accessories.</li>
                      <li>Customers must cooperate during pickup and inspection.</li>
                      <li>Customers must ensure correct return shipping, where applicable.</li>
                      <li>Failure to comply may lead to rejection of refund requests.</li>
                    </ul>
                  </div>
                </div>

                {/* Liability Limitations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">11. Liability Limitations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Our liability is limited to the value of the purchased product.</li>
                      <li>We are not responsible for indirect losses, such as business interruption or loss of profit.</li>
                      <li>For B2B orders, liability is further limited as per contractual agreements.</li>
                    </ul>
                  </div>
                </div>

                {/* Fraudulent Claims */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">12. Fraudulent Claims</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We reserve the right to blacklist accounts and withhold refunds if fraudulent or excessive claims are detected.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">13. Governing Law</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This policy is governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> returns@promacelectrical.com</p>
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

export default RefundReturnPolicy;