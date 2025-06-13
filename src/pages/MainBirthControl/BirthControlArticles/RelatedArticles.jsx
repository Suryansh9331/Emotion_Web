import React from 'react';

const RelatedArticles = () => {
  return (
    <div className="max-w-full mx-auto px-24 py-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl text-[#028388] font-normal mb-1">You might like... </h2>
          <div className="w-16 h-0.5 bg-[#028388]"></div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Article 1 */}
        <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          {/* <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pink-200 to-teal-300 rounded-lg flex items-center justify-center">
              <div className="bg-teal-400 rounded-lg p-2">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <img src='/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg' alt='img1' className='w-44 h-44'/>
        <div className="flex-1">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
            <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
              {/* 20 ways OTC birth control pills change the game */}
              20 ways over-the-counter pills are changing access and control
            </h3>
          </div>
        </div>

        {/* Article 2 */}
        <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          <img src='/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg' alt='' className='w-44 h-44'/>
          {/* <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-teal-400 to-yellow-300 rounded-lg flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-yellow-300 to-pink-300 rounded-lg"></div>
              <div className="relative">
                <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div> */}
          <div className="flex-1">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">IUD</p>
            <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
              {/* Lorde is answering our birth control prayers*/}
              How public voices are shaping awareness about IUD benefits.
            </h3>
          </div>
        </div>

        {/* Article 3 */}
        <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          <img src='/230912_PTD_CapitolHill-04c.jpg' alt='' className='h-44 w-44'/>
          <div className="flex-1">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">You might like...</p>
            <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
             Why this year calls for more gratitude toward birth control options.
            </h3>
          </div>
        </div>

        {/* Article 4 */}
        <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          <img src='/Screenshot 2024-03-04 at 8.04.06 AM (1).png' alt='' className='h-44 w-44'/>
          <div className="flex-1">
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
            <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
              {/* Everything you need to know about Opill, the new over-the-counter birth control pill */}
              A complete guide to Opill, the latest non-prescription birth control pill available.
            </h3>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-left">
        <button className="bg-[#028388] hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          See all Articles
        </button>
      </div>
    </div>
  );
};

export default RelatedArticles;