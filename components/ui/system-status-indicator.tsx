import React from "react";
import { cn } from "@/lib/utils";

interface SystemStatusIndicatorProps {
  serviceName: string;
  status: "Operational" | "Degraded" | "Offline";
}

const statusStyles = {
  Operational: "bg-green-500",
  Degraded: "bg-yellow-500",
  Offline: "bg-red-500",
};

const SystemStatusIndicator: React.FC<SystemStatusIndicatorProps> = ({ serviceName, status }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-gray-700">
      <p className="font-inter text-lg text-white">{serviceName}</p>
      <div className="flex items-center">
        <div className={cn("h-3 w-3 rounded-full mr-2", statusStyles[status])} />
        <p className={cn("font-semibold", `text-${status.toLowerCase()}-400`)}>{status}</p>
      </div>
    </div>
  );
};

export default SystemStatusIndicator;
