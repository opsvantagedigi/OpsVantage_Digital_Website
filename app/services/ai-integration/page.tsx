import MagneticButton from "@/components/ui/magnetic-button";
import EthicalAICard from "@/components/ui/ethical-ai-card";
import { Shield, Zap, BrainCircuit, Scale } from "lucide-react";

const ethicalPrinciples = [
  {
    icon: Shield,
    title: "Safety & Reliability",
    description: "We build robust AI systems with safeguards to ensure predictable and reliable performance.",
  },
  {
    icon: Scale,
    title: "Fairness & Impartiality",
    description: "Our AI solutions are designed to be unbiased and equitable, promoting fairness for all users.",
  },
  {
    icon: BrainCircuit,
    title: "Transparency & Explainability",
    description: "We believe in clear and understandable AI. You'll know how and why your AI makes its decisions.",
  },
  {
    icon: Zap,
    title: "Performance & Value",
    description: "Our focus is on creating AI that delivers tangible results and a clear return on investment.",
  },
];

const AiIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            AI Integration
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            AI as a Multiplier, Not a Gimmick. We integrate intelligent systems that amplify your team's capabilities and drive real-world results.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-orbitron text-center mb-8">
            Our Commitment to Responsible AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ethicalPrinciples.map((principle) => (
              <EthicalAICard key={principle.title} {...principle} />
            ))}
          </div>
        </div>

        <div className="text-center bg-gray-800 p-12 rounded-xl mb-20">
          <h2 className="text-4xl font-orbitron mb-4">Unlock Your Team's Potential</h2>
          <p className="font-inter text-gray-300 max-w-2xl mx-auto mb-8">
            From automating repetitive tasks to uncovering new insights in your data, our AI solutions are designed to work alongside your team, making them more effective, creative, and strategic.
          </p>
          <MagneticButton size="lg" variant="default">
            Explore AI Solutions
          </MagneticButton>
        </div>

      </div>
    </div>
  );
};

export default AiIntegrationPage;
