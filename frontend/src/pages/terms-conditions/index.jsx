import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Promac Electrical</title>
        <meta 
          name="description" 
          content="Terms and Conditions for Promac Electrical - Your trusted electrical components supplier. Read our terms for B2C and B2B customers." 
        />
        <meta name="keywords" content="terms conditions, legal, Promac Electrical, electrical components, B2B, B2C" />
        <link rel="canonical" href="https://promacelectrical.com/terms-conditions" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Terms & Conditions
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
                      Welcome to Promac Electrical (hereinafter referred to as "the Website," "the Platform," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of our e-commerce platform, mobile application, services, and all related features. By accessing or using the Website, you agree to comply with and be bound by these Terms.
                    </p>
                    <p>
                      If you do not agree to these Terms, please do not use our Website or services.
                    </p>
                    <p>
                      Our Website is designed to cater to both retail customers (individual buyers purchasing products for personal use) and business-to-business (B2B) customers (such as contractors, wholesalers, and organizations ordering in bulk or using special account privileges). These Terms apply to all categories of users unless explicitly specified otherwise.
                    </p>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Eligibility</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      You must be at least 18 years of age or the age of majority in your jurisdiction to register and make purchases.
                    </p>
                    <p>
                      By using our Website, you represent and warrant that:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You have the legal capacity to enter into a binding agreement.</li>
                      <li>The information provided during registration is accurate, current, and complete.</li>
                      <li>You will maintain the confidentiality of your account and password.</li>
                      <li>You will accept responsibility for all activities conducted under your account.</li>
                    </ul>
                    <p>
                      For business accounts, additional verification (such as business licenses, GST/VAT numbers, or trade certifications) may be required before access to certain features like bulk ordering, project consultation, or credit facilities.
                    </p>
                  </div>
                </div>

                {/* Account Registration */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. Account Registration</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      To use specific features, you must register for an account. During registration, you agree to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Provide true, accurate, and complete information.</li>
                      <li>Update your information regularly to ensure it remains current.</li>
                      <li>Safeguard your login credentials and not share them with unauthorized persons.</li>
                      <li>Immediately notify us of any unauthorized access or suspicious activity in your account.</li>
                    </ul>
                    <p>
                      We reserve the right to suspend or terminate accounts that violate these Terms or provide false information.
                    </p>
                  </div>
                </div>

                {/* Products and Services */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Products and Services</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Our Website offers a wide range of products, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Electrical components and tools.</li>
                      <li>Bulk supply packages for contractors and organizations.</li>
                      <li>Customized project consultation services.</li>
                      <li>Value-added services such as volume price calculators and contractor loyalty programs.</li>
                    </ul>
                    <p>
                      We make every effort to display product details, images, and specifications accurately. However, variations may occur due to manufacturing differences, screen resolutions, or supply changes.
                    </p>
                    <p>
                      We reserve the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Discontinue or modify any product without notice.</li>
                      <li>Limit the availability of specific products to certain regions or users.</li>
                      <li>Refuse or cancel bulk orders if misuse is detected.</li>
                    </ul>
                  </div>
                </div>

                {/* Pricing & Payment */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Pricing & Payment</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Prices displayed are inclusive/exclusive of applicable taxes, depending on your region (detailed breakdown in the Payment Policy).</li>
                      <li>We reserve the right to update pricing at any time without prior notice.</li>
                      <li>Discounts, promotional codes, and loyalty credits may be applied subject to conditions.</li>
                      <li>For B2B customers, tier-based pricing and credit facilities may apply based on agreements.</li>
                    </ul>
                  </div>
                </div>

                {/* Order Acceptance */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Order Acceptance</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      When you place an order:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You will receive an Order Confirmation email summarizing your purchase.</li>
                      <li>Once verified, we will issue a Dispatch Confirmation when the order is shipped.</li>
                      <li>The contract between you and us is considered final only after dispatch.</li>
                    </ul>
                    <p>
                      We reserve the right to refuse or cancel orders due to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Product unavailability.</li>
                      <li>Pricing errors.</li>
                      <li>Suspicious or fraudulent activity.</li>
                      <li>Violations of our business policies.</li>
                    </ul>
                  </div>
                </div>

                {/* Shipping & Delivery */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Shipping & Delivery</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We strive to deliver products within the timelines mentioned in our Shipping Policy. However, delivery times may vary due to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Logistics delays.</li>
                      <li>Unforeseen events (weather, strikes, regulatory restrictions).</li>
                      <li>Bulk or custom orders requiring longer processing times.</li>
                    </ul>
                    <p>
                      Ownership of products transfers to you upon delivery, while risk passes once the order is shipped.
                    </p>
                  </div>
                </div>

                {/* Returns & Refunds */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Returns & Refunds</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Our Refund & Return Policy outlines:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Eligibility for returns.</li>
                      <li>Procedures for defective, damaged, or incorrect products.</li>
                      <li>Refund timelines.</li>
                    </ul>
                    <p>
                      Note: Some items (e.g., customized products, bulk B2B orders, or consumables) may not be eligible for returns unless defective.
                    </p>
                  </div>
                </div>

                {/* Cancellations */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Cancellations</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Orders can be canceled prior to dispatch. Once shipped, cancellations are subject to our Cancellation Policy.
                    </p>
                  </div>
                </div>

                {/* Business Accounts & Bulk Orders */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Business Accounts & Bulk Orders</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      For contractors, businesses, and institutional buyers, we provide specialized services, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Volume-based pricing discounts.</li>
                      <li>Credit systems and deferred payment options.</li>
                      <li>Dedicated account managers.</li>
                      <li>Loyalty programs with reward benefits.</li>
                      <li>Access to advanced tools such as Volume Price Calculators and Project Consultation.</li>
                    </ul>
                    <p>
                      Eligibility for these features is determined after due diligence and approval by our business development team.
                    </p>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">11. Intellectual Property</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      All content, including text, graphics, product catalogs, software, and logos, is the intellectual property of the Website or its licensors. Unauthorized use, reproduction, or modification is strictly prohibited.
                    </p>
                  </div>
                </div>

                {/* Prohibited Activities */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">12. Prohibited Activities</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      You agree not to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Engage in fraudulent transactions.</li>
                      <li>Use automated tools (bots, scrapers) to access or copy Website data.</li>
                      <li>Resell products purchased without authorization.</li>
                      <li>Misuse promotional codes, referral systems, or loyalty rewards.</li>
                    </ul>
                    <p>
                      Violations may result in account termination, order cancellation, or legal action.
                    </p>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">13. Limitation of Liability</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We are not liable for:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Indirect, incidental, or consequential damages.</li>
                      <li>Losses due to third-party courier delays.</li>
                      <li>Errors in product use, installation, or maintenance by customers.</li>
                    </ul>
                    <p>
                      Our liability is limited to the purchase price of the products concerned.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">14. Governing Law</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      These Terms are governed by the laws of India. Disputes will be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">15. Changes to Terms</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We reserve the right to modify these Terms at any time. Updates will be posted on the Website, and continued use constitutes acceptance of revised Terms.
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

export default TermsConditions;
