import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const PaymentPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Payment Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Payment Policy for Promac Electrical - Learn about accepted payment methods, security measures, and payment procedures for B2C and B2B customers." 
        />
        <meta name="keywords" content="payment policy, payment methods, secure payments, Promac Electrical, B2B, B2C, credit terms" />
        <link rel="canonical" href="https://promacelectrical.com/payment-policy" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Payment Policy
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
                      At Promac, we believe that trust, transparency, and security are at the heart of every successful transaction. Our Payment Policy outlines the methods of payment we accept, the obligations of both customers and Promac, how refunds are handled, and the rights of all parties in case of payment-related disputes.
                    </p>
                    <p>
                      This policy is designed to protect our B2C customers, B2B clients, and Promac itself from fraud, miscommunication, and financial risks.
                    </p>
                    <p>
                      By using Promac's e-commerce platform and completing a purchase, you acknowledge and agree to the terms described in this Payment Policy.
                    </p>
                  </div>
                </div>

                {/* Scope of the Payment Policy */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Scope of the Payment Policy</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Applicability:</strong> Applies to all orders placed on Promac's website, mobile platforms, distributor portals, and via official customer service channels. Covers payments for consumer purchases (B2C), bulk orders and distributor transactions (B2B), and value-added services such as installation, warranties, consultations.
                    </p>
                    <p>
                      <strong>Exclusions:</strong> Does not apply to payments made to third-party sellers not affiliated with Promac. Offline payments (e.g., cash paid at non-Promac partner stores) are outside the scope of this policy.
                    </p>
                  </div>
                </div>

                {/* Accepted Payment Methods */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Accepted Payment Methods</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Promac supports a wide range of secure payment options:
                    </p>
                    <p>
                      <strong>For B2C Customers:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Credit/Debit Cards (Visa, MasterCard, RuPay, American Express)</li>
                      <li>UPI Payments (PhonePe, Google Pay, Paytm, BHIM UPI)</li>
                      <li>Net Banking (major Indian banks)</li>
                      <li>Wallets (Paytm Wallet, Amazon Pay, Mobikwik)</li>
                      <li>Cash on Delivery (COD) - select locations</li>
                    </ul>
                    <p>
                      <strong>For B2B Clients:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>NEFT/RTGS Bank Transfers (preferred for large-value orders)</li>
                      <li>Cheque/Demand Drafts (accepted subject to clearance)</li>
                      <li>Credit Terms (for approved business accounts)</li>
                      <li>Letter of Credit (LC) (for high-value or international shipments)</li>
                    </ul>
                    <p>
                      <strong>International Customers:</strong> Payments via SWIFT Transfers, PayPal, or internationally accepted cards. Additional bank charges or currency conversion fees may apply.
                    </p>
                  </div>
                </div>

                {/* Currency and Pricing */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Currency and Pricing</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Default Currency:</strong> All transactions on the Promac website are displayed in Indian Rupees (INR). International customers may see indicative conversions but final settlement will be in INR unless otherwise agreed.
                    </p>
                    <p>
                      <strong>Price Accuracy:</strong> Prices are inclusive of applicable GST unless explicitly mentioned. Promac reserves the right to correct typographical or technical errors in pricing, even after order placement (in which case a full refund or adjustment will be offered).
                    </p>
                  </div>
                </div>

                {/* Security of Transactions */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Security of Transactions</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Encryption Standards:</strong> Payments are processed via PCI DSS-compliant gateways with 128-bit SSL encryption. Sensitive details such as card numbers, CVV, or UPI PINs are never stored on Promac servers.
                    </p>
                    <p>
                      <strong>Fraud Detection:</strong> Transactions are monitored for suspicious activity (e.g., unusually high volume orders, multiple failed attempts). Orders flagged may be delayed or cancelled pending verification.
                    </p>
                    <p>
                      <strong>Customer Responsibility:</strong> Customers must ensure their payment instruments (cards, wallets, UPI IDs) are secure. Promac is not responsible for losses due to compromised personal devices or phishing attacks.
                    </p>
                  </div>
                </div>

                {/* Advance Payments and Deposits */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Advance Payments and Deposits</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Standard Orders (B2C):</strong> Full payment is required at checkout unless Cash on Delivery is selected.
                    </p>
                    <p>
                      <strong>Bulk/B2B Orders:</strong> May require 25–50% advance payment to reserve stock and initiate procurement. Remaining balance is payable prior to dispatch unless credit terms apply.
                    </p>
                    <p>
                      <strong>Non-Refundable Deposits:</strong> Customized or special procurement orders may require a non-refundable advance.
                    </p>
                  </div>
                </div>

                {/* Payment on Delivery (COD) */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Payment on Delivery (COD)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>COD is available for select pin codes and limited order values (e.g., below ₹20,000).</li>
                      <li>Customers must pay the exact amount in cash or via supported mobile wallets at delivery.</li>
                      <li>Repeated COD rejections may result in loss of COD privilege.</li>
                    </ul>
                  </div>
                </div>

                {/* Credit Terms for Business Accounts */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Credit Terms for Business Accounts</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Promac offers credit facilities for approved distributors and contractors.
                    </p>
                    <p>
                      <strong>Eligibility:</strong> Available to registered B2B clients with a verified business license, GSTIN, and satisfactory credit history.
                    </p>
                    <p>
                      <strong>Terms:</strong> Typical payment terms: 30–60 days from invoice date. Credit limits set based on past order volumes and risk assessment.
                    </p>
                    <p>
                      <strong>Consequences of Delay:</strong> Interest of 1.5–2% per month may be charged on overdue invoices. Repeated defaults may result in suspension of credit facilities.
                    </p>
                  </div>
                </div>

                {/* Refunds and Reversals */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Refunds and Reversals</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Timeframes:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Card/UPI/Net Banking: 7–10 business days</li>
                      <li>Wallets: 3–5 business days</li>
                      <li>NEFT/RTGS: 7–12 business days</li>
                      <li>Store Credit: Immediate upon approval</li>
                    </ul>
                    <p>
                      <strong>Partial Refunds:</strong> If only part of an order is cancelled/returned, refund is limited to eligible items.
                    </p>
                    <p>
                      <strong>Non-Refundable Charges:</strong> Payment gateway fees, currency conversion charges, and bank transfer fees are non-refundable.
                    </p>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Dispute Resolution</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Customers are encouraged to first contact Promac's support team for any payment-related issues.</li>
                      <li>If unresolved, disputes may be escalated to bank/payment gateway for chargeback or consumer courts/arbitration as per applicable law.</li>
                    </ul>
                  </div>
                </div>

                {/* Fraud and Misuse */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">11. Fraud and Misuse</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Any attempt to misuse coupons, loyalty programs, or fraudulent chargebacks will result in:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Immediate cancellation of order.</li>
                      <li>Blacklisting of the customer for misuse.</li>
                      <li>Possible legal action under the Indian Penal Code and IT Act.</li>
                    </ul>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">12. Governing Law</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This Payment Policy is governed by Indian law, including The Payment and Settlement Systems Act, 2007, The Information Technology Act, 2000, and The Consumer Protection Act, 2019. Jurisdiction lies with courts in Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> payments@promacelectrical.com</p>
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

export default PaymentPolicy;