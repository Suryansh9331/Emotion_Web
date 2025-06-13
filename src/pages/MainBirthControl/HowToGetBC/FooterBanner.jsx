import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

export default function FooterBanner() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-auto bg-white ">
      {/* Top Bar */}
      {/* <Navbar/> */}

      {/* Header */}

      {/* Main Content */}
      <main className=" py-12 bg-[#058e8d]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          {/* <div className="text-center mb-16 mt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-8">
              From birth control info to sex tips,<br />
              <span className="block">we've got you covered.</span>
            </h2>
            
           
            <div className="flex justify-center mb-12">
              <svg width="300" height="20" viewBox="0 0 300 20" className="text-teal-400">
                <path 
                  d="M0,10 Q75,0 150,10 T300,10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
            </div>
          </div> */}

          {/* Birth Control Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center lg:ml-6 md:ml-12 bg-white p-6  rounded-lg">
            {/* Images Grid */}
            <img
              src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp"
              alt=""
            />

            {/* Text Content */}
            <div className="text-center lg:text-left lg:ml-26 px-8">
              <h3 className="text-5xl sm:text-4xl font-bold text-[#404040] mb-2">
                Not sure what birth<br></br> control is right for <br></br> you?
              </h3>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                <br />
                Find a method that fits your body <br></br> and your life with
                our interactive method <br></br> explorer.
              </p>
              <Link
                to="/birth-control-option"
                className="block bg-[#058e8d] w-full text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium text-center"
              >
                view birth control options
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
