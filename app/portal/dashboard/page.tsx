"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import DashboardCard from "@/components/ui/dashboard-card";
import SystemStatusIndicator from "@/components/ui/system-status-indicator";
import { Button } from "@/components/ui/button";
import { Zap, Activity, CalendarClock, Loader2 } from "lucide-react";

interface DashboardData {
  websiteHealth: {
    uptime: string;
    performance: string;
    security: string;
  };
  aiAgentStatus: {
    status: string;
    lastSync: string;
    accuracy: string;
  };
  renewals: {
    domain: string;
    hosting: string;
    ssl: string;
  };
}

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/portal');
    }

    if (status === 'authenticated') {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/dashboard');
          if (!res.ok) {
            throw new Error('Failed to fetch dashboard data');
          }
          const jsonData = await res.json();
          setData(jsonData);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [status, router]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-orbitron font-bold">Client Dashboard</h1>
          <p className="text-lg text-gray-400 font-inter">Welcome back, {session?.user?.name}.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Website Health */}
          <DashboardCard
            title="Website Health"
            className="lg:col-span-1"
            footer={<Button variant="outline" size="sm">View Details</Button>}
          >
            <div className="space-y-4">
              <SystemStatusIndicator serviceName="Uptime" status={data?.websiteHealth.uptime || ''} />
              <SystemStatusIndicator serviceName="Performance" status={data?.websiteHealth.performance || ''} />
              <SystemStatusIndicator serviceName="Security" status={data?.websiteHealth.security || ''} />
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
                <p className="font-inter">Overall Status</p>
                <div className="flex items-center text-green-400">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>{data?.aiAgentStatus.status}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-inter">Accuracy</p>
                <p className="font-semibold">{data?.aiAgentStatus.accuracy}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-inter">Last Sync</p>
                <p className="text-sm text-gray-400">{data?.aiAgentStatus.lastSync ? new Date(data.aiAgentStatus.lastSync).toLocaleString() : ''}</p>
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
                  <p className="font-inter font-semibold">Domain</p>
                  <p className="text-sm text-gray-400">Renews on: {data?.renewals.domain}</p>
                </div>
                <CalendarClock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter font-semibold">Hosting</p>
                  <p className="text-sm text-gray-400">Renews on: {data?.renewals.hosting}</p>
                </div>
                <CalendarClock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter font-semibold">SSL Certificate</p>
                  <p className="text-sm text-gray-400">Renews on: {data?.renewals.ssl}</p>
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
