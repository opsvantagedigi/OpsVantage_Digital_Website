import React from "react";

const LegacyFooter = () => {
  return (
    <footer className="bg-transparent text-white py-8">
      <div className="container mx-auto text-center font-inter">
        <p>&copy; {new Date().getFullYear()} OpsVantage Digital. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Building Legacy-Aligned Digital Systems.
        </p>
      </div>
    </footer>
  );
};

export default LegacyFooter;
