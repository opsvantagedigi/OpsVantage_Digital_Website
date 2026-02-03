import PricingCard from "@/components/ui/pricing-card";

const plans = [
  {
    planName: "Web Foundation",
    price: "$5,000",
    priceFrequency: "/one-time",
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
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductizedSystemsPage;
