import MagneticButton from "@/components/ui/magnetic-button";
import Flowchart from "@/components/ui/flowchart";
import {
  Zap,
  BarChart,
  Users,
  Repeat,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const chaosToClarityFlow = [
  { title: "Manual Chaos", icon: AlertTriangle },
  { title: "Automated Workflow", icon: Zap },
  { title: "Data-Driven Insights", icon: BarChart },
  { title: "Seamless Integration", icon: Repeat },
  { title: "Operational Clarity", icon: CheckCircle },
];

const AutomationPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Business Automation
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            From Chaos to Clarity. We design and implement intelligent
            automation systems that streamline your operations and unlock new
            efficiencies.
          </p>
        </div>

        <div className="mb-20 p-8 bg-gray-800 rounded-xl">
          <h2 className="text-3xl font-orbitron text-center mb-8">
            Your Journey to a Self-Running Business
          </h2>
          <Flowchart items={chaosToClarityFlow} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800 p-8 rounded-lg">
            <Users className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-orbitron mb-2">Lead Capture & Nurturing</h3>
            <p className="font-inter text-gray-400">
              Automate your sales funnel from first contact to loyal customer,
              ensuring no lead falls through the cracks.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <Repeat className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-orbitron mb-2">Onboarding & Support</h3>
            <p className="font-inter text-gray-400">
              Create seamless onboarding experiences and automate support
              workflows to delight your customers at scale.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-orbitron mb-4">Ready to automate your growth?</h2>
          <MagneticButton size="lg" variant="secondary">
            Design Your System
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
