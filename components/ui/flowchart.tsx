import React from "react";
import { ArrowRight } from "lucide-react";

interface FlowchartProps {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
}

const Flowchart: React.FC<FlowchartProps> = ({ items }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-gray-700 p-4 mb-2">
              <item.icon className="h-8 w-8 text-blue-400" />
            </div>
            <p className="font-inter text-white">{item.title}</p>
          </div>
          {index < items.length - 1 && (
            <ArrowRight className="h-8 w-8 text-gray-500 hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Flowchart;
