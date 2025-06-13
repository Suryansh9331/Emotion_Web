import React from 'react';

const WhatServices = () => {
  const handleFindProvider = () => {
    // alert('Finding a provider... This would typically redirect to a provider search page.');
    // In a real application, this would redirect to a provider search page
    window.location.href = '/find-provider';
  };

  const handleGetOnline = () => {
    // alert('Getting birth control online... This would typically redirect to an online service.');
    // In a real application, this would redirect to an online birth control service
    window.location.href = '/get-online';
  };

  return (
    <div className="bg-gray-50  py-12 md:px-12 md:py-16">
      <div className="mx-auto px-6 max-w-full ">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#028388] mb-3">
           What services are you looking for?
          </h1>
          
          {/* Wave decoration */}
          <div className="w-full max-w-lg">
            <svg className="w-full h-2" viewBox="0 0 400 8" preserveAspectRatio="none">
              <path 
                d="M0 4 Q 25 0 50 4 T 100 4 T 150 4 T 200 4 T 250 4 T 300 4 T 350 4 T 400 4" 
                stroke="#14b8a6" 
                strokeWidth="2" 
                fill="none"
              />
            </svg>
          </div>
        </div>
        
        {/* Cards Container - Rectangular layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Find Provider Card - Rectangular */}
          <div className="bg-white border-3 border-[#8d2e8d] rounded-xl px-8 py-6 hover:shadow-md transition-all duration-200">
            {/* Small Purple Icon */}
            <div className="w-12 h-12 bg-[#8d2e8d] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            
            {/* Card Content */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
              Find a birth control provider
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed">
              Locate care and health services in your area.
            </p>
            
            {/* Button */}
            <button 
              onClick={handleFindProvider}
              className="bg-[#028388] hover:bg-teal-600 text-white font-medium text-sm px-6 py-3 rounded-md transition-colors duration-200"
            >
              find a provider
            </button>
          </div>
          
          {/* Get Online Card - Rectangular */}
          <div className="bg-white border-3 border-[#c9005b] rounded-xl px-8 py-6 hover:shadow-md transition-all duration-200">
            {/* Small Pink Icon */}
            <div className="w-12 h-12 bg-[#c9005b] rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </div>
            
            {/* Card Content */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-snug">
              Get birth control online
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-5 leading-relaxed">
              Have your birth control delivered to your door.
            </p>
            
            {/* Button */}
            <button 
              onClick={handleGetOnline}
              className="bg-[#028388] hover:bg-teal-600 text-white font-medium text-sm px-6 py-3 rounded-md transition-colors duration-200"
            >
              get it online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatServices;