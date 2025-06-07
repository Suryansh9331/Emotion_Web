import React from 'react';

const SexRelationshipsLayout = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
            Sex & relationships
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* First Row - Left */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4">
            <img src='/deon-black-E-dOWPraAv0-unsplash.jpg' alt='' className='h-56 w-56'/>
            <div className="flex-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">MASTURBATION</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                {/* 5 surprising benefits of masturbation you need to know */}
                Discover 5 lesser-known health benefits of regular masturbation
              </h3>
            </div>
          </div>

          {/* First Row - Right */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4">
            <img src='/couple picnic.jpg' alt='' className='h-56 w-56'/>
            <div className="flex-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">DATING & HOOKUPS</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
              6 creative date ideas perfect for starting new relationships.
              </h3>
            </div>
          </div>
          {/* Second Row - Left */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4">
            <img src='/couple in bed photo.jpg' alt='' className='h-56 w-56'/>
            <div className="flex-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">BOUNDARIES & CONSENT</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                {/* How setting boundaries can make sex even better */}
                How healthy boundaries can improve communication and sexual comfort.
              </h3>
            </div>
          </div>

          {/* Second Row - Right */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4">
            <img src='/Love letter behind back.jpg' alt='' className='h-56 w-56'/>
            <div className="flex-1">
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">RELATIONSHIPS</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
               How to respond when you're stuck in the friend zone.
              </h3>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
            view all sex & relationships
          </button>
        </div>
      </div>
    </div>
  );
};

export default SexRelationshipsLayout;