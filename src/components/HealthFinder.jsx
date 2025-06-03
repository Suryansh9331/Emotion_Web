


import React from 'react';
import { Building2, BookOpen, Heart } from 'lucide-react';

const HealthcareFinder = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-8 text-center sm:text-left">
        Find health care
      </h1>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Find a health center card */}
        <div className="bg-white rounded-lg border-2 border-purple-200 p-6 flex flex-col h-full">
          <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Find a health center
          </h2>
          
          <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
            Whether you need a new birth control prescription, STI testing, a Pap smear, or any other reproductive health service, our clinic finder will help you locate a health care provider near you.
          </p>
          
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto">
            find a provider
          </button>
        </div>
        
        {/* Get birth control delivered card */}
        <div className="bg-white rounded-lg border-2 border-pink-200 p-6 flex flex-col h-full">
          <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Get birth control delivered
          </h2>
          
          <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
            Depending on where you live, you may not even have to leave your house to get birth control.
          </p>
          
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto">
            get it online
          </button>
        </div>
        
        {/* Find an abortion provider card */}
        <div className="bg-white rounded-lg border-2 border-orange-200 p-6 flex flex-col h-full md:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Find an abortion provider
          </h2>
          
          <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
            Abortion is a common and safe medical procedure that lets you end a pregnancy. Our national directory will help you find your nearest abortion providers.
          </p>
          
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2">
            go to Abortionfinder.org
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default HealthcareFinder;