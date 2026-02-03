import DashboardCard from "@/components/ui/dashboard-card";
import SystemStatusIndicator from "@/components/ui/system-status-indicator";
import { Button } from "@/components/ui/button";
import { Zap, Activity, CalendarClock } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-orbitron font-bold">Client Dashboard</h1>
          <p className="text-lg text-gray-400 font-inter">Welcome back, Ajay.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Website Health */}
          <DashboardCard
            title="Website Health"
            className="lg:col-span-1"
            footer={<Button variant="outline" size="sm">View Details</Button>}
          >
            <div className="space-y-4">
              <SystemStatusIndicator serviceName="Frontend Application" status="Operational" />
              <SystemStatusIndicator serviceName="Backend API" status="Operational" />
              <SystemStatusIndicator serviceName="Database" status="Operational" />
            </div>
          </DashboardCard>

          {/* AI Agent Status */}
          <DashboardCard
            title="AI Agent Status"
            className="lg:col-span-1"
            footer={<Button variant="outline" size="sm">Manage Agents</Button>}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-inter">Lead Qualification Bot</p>
                <div className="flex items-center text-green-400">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-inter">Support Ticket Assistant</p>
                <div className="flex items-center text-green-400">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-inter">Content Generation AI</p>
                <div className="flex items-center text-yellow-400">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Idle</span>
                </div>
              </div>
            </div>
          </DashboardCard>

          {/* Upcoming Renewals */}
          <DashboardCard
            title="Upcoming Renewals"
            className="lg:col-span-1"
            footer={<Button variant="outline" size="sm">View All Subscriptions</Button>}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter font-semibold">Vercel Pro Plan</p>
                  <p className="text-sm text-gray-400">Renews on: 2026-03-15</p>
                </div>
                <CalendarClock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter font-semibold">Google Workspace</p>
                  <p className="text-sm text-gray-400">Renews on: 2026-03-20</p>
                </div>
                <CalendarClock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter font-semibold">Domain: opsvantage.io</p>
                  <p className="text-sm text-gray-400">Renews on: 2026-04-01</p>
                </div>
                <CalendarClock className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
