import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import MagneticButton from "@/components/ui/magnetic-button";
import ProcessSnapshot from "@/components/ui/process-snapshot";
import {
  FastForward,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    Icon: Zap,
    name: "Blazing Fast Performance",
    description: "Next.js 14 ensures your site loads instantly.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-purple-500 to-indigo-500" />,
  },
  {
    Icon: TrendingUp,
    name: "Optimized for Growth",
    description: "Built-in SEO and analytics to scale your business.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-green-500 to-teal-500" />,
  },
  {
    Icon: ShieldCheck,
    name: "Secure & Reliable",
    description: "Enterprise-grade security for peace of mind.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-yellow-500 to-orange-500" />,
  },
  {
    Icon: FastForward,
    name: "Future-Proof Architecture",
    description: "A scalable foundation for your digital ambitions.",
    href: "/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute -z-10 h-full w-full bg-gradient-to-br from-pink-500 to-rose-500" />,
  },
];

const PremiumWebPage = () => {
  const processSteps = [
    "Discovery & Strategy",
    "Design & Prototyping",
    "Development & Integration",
    "Testing & Deployment",
    "Launch & Optimization",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Premium Web Development
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            We build high-performance, scalable, and secure web applications that
            drive growth and deliver exceptional user experiences.
          </p>
        </div>

        <BentoGrid className="mb-20">
          {features.map((feature) => (
            <BentoGridItem
              key={feature.name}
              {...feature}
            />
          ))}
        </BentoGrid>

        <div className="mb-20">
          <ProcessSnapshot steps={processSteps} />
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-orbitron mb-4">Ready to build your legacy?</h2>
          <MagneticButton size="lg">
            Start Your Project
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default PremiumWebPage;
