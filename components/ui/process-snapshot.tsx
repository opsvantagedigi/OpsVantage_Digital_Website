import React from 'react';

const ProcessSnapshot = ({ steps }: { steps: string[] }) => {
  return (
    <div className="p-8 bg-gray-800 rounded-xl">
      <h3 className="text-2xl font-orbitron mb-4 text-white">Our Process</h3>
      <div className="relative">
        <div className="border-l-2 border-blue-500 absolute h-full top-0 left-4"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-8">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center z-10">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            <p className="ml-8 text-lg font-inter text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSnapshot;
