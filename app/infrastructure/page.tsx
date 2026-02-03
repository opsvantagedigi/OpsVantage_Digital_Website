import SystemStatusIndicator from "@/components/ui/system-status-indicator";
import MagneticButton from "@/components/ui/magnetic-button";
import { BellRing, ShieldQuestion } from "lucide-react";

const InfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Infrastructure & Stewardship
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            Your digital foundation, managed 24/7 for peak performance and total peace of mind.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-orbitron text-center mb-8">Core System Status</h2>
          <div className="space-y-4">
            <SystemStatusIndicator serviceName="Domain Management" status="Operational" />
            <SystemStatusIndicator serviceName="SSL Certificate Authority" status="Operational" />
            <SystemStatusIndicator serviceName="Global DNS Routing" status="Operational" />
            <SystemStatusIndicator serviceName="Automated Backups & Recovery" status="Operational" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <BellRing className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-orbitron mb-2">Subscription Monitoring</h3>
            <p className="font-inter text-gray-400">
              Never worry about a surprise renewal or a critical service expiring. We track all your software subscriptions, providing you with a unified dashboard and timely alerts, so you can focus on your business.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <ShieldQuestion className="h-12 w-12 text-teal-400 mb-4" />
            <h3 className="text-2xl font-orbitron mb-2">Proactive Stewardship</h3>
            <p className="font-inter text-gray-400">
              We act as your dedicated technical partner, managing domains, security, and performance so you don't have to. Consider us the guardians of your digital presence, ensuring everything runs smoothly, always.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-orbitron mb-4">Secure Your Digital Foundation</h2>
          <MagneticButton size="lg" variant="outline">
            Request an Infrastructure Audit
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default InfrastructurePage;
