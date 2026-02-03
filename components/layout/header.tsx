import React from "react";
import Link from "next/link";

const CinematicHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-orbitron text-2xl font-bold">
          <Link href="/">OpsVantage</Link>
        </div>
        <nav className="hidden md:flex space-x-8 font-inter">
          <Link href="/services/premium-web" className="hover:text-gray-300">Services</Link>
          <Link href="/infrastructure" className="hover:text-gray-300">Infrastructure</Link>
          <Link href="/strategy" className="hover:text-gray-300">Strategy</Link>
          <Link href="/portal" className="hover:text-gray-300">Client Portal</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CinematicHeader;
