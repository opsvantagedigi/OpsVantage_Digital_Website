"use client";

import PricingCard from "@/components/ui/pricing-card";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const plans = [
  {
    planName: "Web Foundation",
    price: "$5,000",
    priceFrequency: "/one-time",
    priceId: "price_1P6bfRDEQaroqD4wZ3n3jE7F", // Replace with your actual Price ID
    features: [
      "Premium Website (up to 5 pages)",
      "Core SEO Setup",
      "1 Year of Hosting & Domain",
      "Basic Analytics Dashboard",
    ],
    ctaText: "Choose Plan",
  },
  {
    planName: "Growth Engine",
    price: "$10,000",
    priceFrequency: "/one-time",
    priceId: "price_1P6bgLDEQaroqD4w2Yd5YfCg", // Replace with your actual Price ID
    features: [
      "Everything in Web Foundation",
      "Advanced SEO & Content Strategy",
      "Lead Capture Automation",
      "AI Chatbot Integration",
      "Priority Support",
    ],
    isFeatured: true,
    ctaText: "Choose Plan",
  },
  {
    planName: "Digital Ecosystem",
    price: "$25,000",
    priceFrequency: "/one-time",
    priceId: "price_1P6bgfDEQaroqD4w5f3g3h3h", // Replace with your actual Price ID
    features: [
      "Everything in Growth Engine",
      "Full Business Automation Suite",
      "Custom AI Agent Development",
      "Infrastructure Stewardship",
      "Dedicated Strategy Partner",
    ],
    ctaText: "Choose Plan",
  },
];

const ProductizedSystemsPage = () => {

  const handleCheckout = async (priceId: string) => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe.js hasn't loaded yet.");
      }
      
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Productized Systems
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            Transparent, bundled solutions designed for growth. Choose the package that aligns with your legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard 
              key={plan.planName} 
              {...plan} 
              onCtaClick={() => handleCheckout(plan.priceId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductizedSystemsPage;
