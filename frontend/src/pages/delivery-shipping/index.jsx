import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../../components/ui/Footer';

const DeliveryShipping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Delivery & Shipping Policy - Promac Electrical</title>
        <meta 
          name="description" 
          content="Delivery & Shipping Policy for Promac Electrical - Learn about our shipping timelines, delivery options, and tracking services for domestic and international orders." 
        />
        <meta name="keywords" content="delivery policy, shipping policy, delivery times, tracking, Promac Electrical, domestic shipping, international shipping" />
        <link rel="canonical" href="https://promacelectrical.com/delivery-shipping" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <main className="pt-20">
          {/* Minimalist Header */}
          <section className="border-b border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-light text-gray-900 mb-2">
                  Delivery & Shipping Policy
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
                      When customers shop online, one of the most important concerns is "How fast will I get my order?". Delivery speed, shipping cost, and transparency of tracking are among the top three deciding factors for completing a purchase. A well-structured Delivery & Shipping policy builds trust, clarity, and confidence, ensuring that shoppers know exactly what to expect.
                    </p>
                    <p>
                      This page answers all possible questions about delivery timelines, shipping charges, courier partners, international shipping, order tracking, packaging & handling, returns linked to shipping damages, and special delivery requests.
                    </p>
                  </div>
                </div>

                {/* Domestic Shipping */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">2. Domestic Shipping (Within India)</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Standard Delivery:</strong> Usually 2–5 business days, depending on city and state. Example: A customer in Delhi ordering from a warehouse in Mumbai can expect 3 days on average.
                    </p>
                    <p>
                      <strong>Express Delivery (Same-Day/Next-Day):</strong> Available in Tier 1 cities like Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune. Cut-off timing: Orders placed before 2 PM are eligible for same-day dispatch.
                    </p>
                    <p>
                      <strong>Scheduled Delivery:</strong> Customers can select a convenient date & time slot for bulky items like furniture or large appliances.
                    </p>
                    <p>
                      <strong>Free Delivery Thresholds:</strong> Many e-commerce sites encourage bigger carts by offering "Free shipping on orders above ₹999".
                    </p>
                  </div>
                </div>

                {/* International Shipping */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">3. International Shipping</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Supported Countries:</strong> We currently deliver to over 50 countries, including USA, UK, Canada, Australia, UAE, Singapore, and many more.
                    </p>
                    <p>
                      <strong>Timelines:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Standard International Shipping: 7–15 business days</li>
                      <li>Express International Shipping: 3–7 business days</li>
                    </ul>
                    <p>
                      <strong>Customs & Duties:</strong> Customers are informed about potential import duties or VAT at checkout. Some platforms offer DDP (Delivered Duty Paid) where duties are prepaid, so no surprise charges.
                    </p>
                    <p>
                      <strong>Courier Partners:</strong> International orders are handled via FedEx, DHL, UPS, Aramex, ensuring tracking throughout.
                    </p>
                  </div>
                </div>

                {/* Shipping Charges & Pricing Policy */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">4. Shipping Charges & Pricing Policy</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Transparency in pricing avoids cart abandonment.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Flat Rate Shipping:</strong> Example: ₹49 per order for standard delivery below ₹999.</li>
                      <li><strong>Weight-Based Shipping:</strong> For international orders, charges depend on weight slabs (0–1kg, 1–3kg, etc.).</li>
                      <li><strong>Free Shipping Promotions:</strong> Festivals, sales, or app-exclusive offers may waive delivery fees.</li>
                      <li><strong>Express Charges:</strong> Usually higher, but shown clearly at checkout (e.g., ₹149 for one-day delivery).</li>
                    </ul>
                  </div>
                </div>

                {/* Packaging & Handling */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">5. Packaging & Handling</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Customers care not only about how fast, but also how safe their order arrives. This section emphasizes protection & eco-consciousness.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Eco-Friendly Packaging:</strong> Use of recyclable boxes, minimal plastic, and paper-based fillers.</li>
                      <li><strong>Discreet Packaging:</strong> For certain categories (health, personal care), no product name is displayed outside.</li>
                      <li><strong>Fragile Item Protection:</strong> Bubble wrapping, foam inserts, "Fragile" labels to avoid breakage.</li>
                      <li><strong>Tamper-Proof Seals:</strong> Ensures no product tampering during transit.</li>
                    </ul>
                  </div>
                </div>

                {/* Order Tracking & Notifications */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">6. Order Tracking & Notifications</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Nothing frustrates customers more than not knowing where their order is. Hence, real-time updates are essential.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Tracking ID:</strong> Sent via SMS/email once the product ships.</li>
                      <li><strong>Stages of Updates:</strong> Order confirmed → Order packed → Dispatched from warehouse → Out for delivery → Delivered</li>
                      <li><strong>Live Map Tracking:</strong> In select cities, customers can see the delivery executive's live location.</li>
                      <li><strong>Push Notifications (Mobile App):</strong> "Your order will arrive between 3–5 PM today."</li>
                    </ul>
                  </div>
                </div>

                {/* Failed Delivery Attempts */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">7. Failed Delivery Attempts</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Customers are assured about what happens if they miss delivery.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Attempts:</strong> Couriers make 3 delivery attempts.</li>
                      <li><strong>Rescheduling:</strong> Customers can request rescheduling via app/website.</li>
                      <li><strong>Pickup from Courier Hub:</strong> In rare cases, orders may be collected from the nearest hub.</li>
                    </ul>
                  </div>
                </div>

                {/* Special Delivery Scenarios */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">8. Special Delivery Scenarios</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      This section builds confidence for edge cases.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Cash on Delivery (COD):</strong> Available only for domestic orders. Handling fee may apply.</li>
                      <li><strong>Large & Bulky Items:</strong> Furniture, appliances, and fitness machines come with assembly support.</li>
                      <li><strong>Restricted Pin Codes:</strong> Some remote areas may not have service. Customers are informed before checkout.</li>
                      <li><strong>Festive/Rush Season Delays:</strong> Disclaimer about possible delays during festivals like Diwali, Christmas, or during flash sales.</li>
                    </ul>
                  </div>
                </div>

                {/* Delivery Guarantees & Refunds */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">9. Delivery Guarantees & Refunds</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      To build trust, customers should know that their money is safe.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>On-Time Guarantee:</strong> If express orders miss the deadline, shipping charges are refunded.</li>
                      <li><strong>Damaged in Transit:</strong> Customers can raise a complaint within 48 hours of delivery. Full refunds or replacements are processed.</li>
                      <li><strong>Lost Shipments:</strong> In case of lost packages, customers get a full refund or re-shipment at no extra cost.</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Support for Shipping Queries */}
                <div className="mb-16">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">10. Customer Support for Shipping Queries</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Support touchpoints include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>24/7 Live Chat</li>
                      <li>Dedicated Shipping Helpline</li>
                      <li>Email ticket system with guaranteed responses within 24 hours</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-8">
                  <h2 className="text-xl font-medium text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> shipping@promacelectrical.com</p>
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

export default DeliveryShipping;