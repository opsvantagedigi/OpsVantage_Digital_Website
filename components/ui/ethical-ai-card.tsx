import React from "react";

interface EthicalAICardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const EthicalAICard: React.FC<EthicalAICardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-green-400 mr-4" />
        <h3 className="text-xl font-orbitron text-white">{title}</h3>
      </div>
      <p className="font-inter text-gray-400">{description}</p>
    </div>
  );
};

export default EthicalAICard;
