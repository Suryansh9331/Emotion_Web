import React, { useState } from 'react';
import { MapPin, Building2 } from 'lucide-react';

export default function Findprovider() {
  const [location, setLocation] = useState('');
  const [implantAvailable, setImplantAvailable] = useState(false);
  const [iudAvailable, setIudAvailable] = useState(false);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, #028388, #0eab9b, #11b7a1)'
      }}
    >
      {/* Main search section */}
      <div className="px-4 py-10 md:py-14">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 py-18 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
              Find a health center
            </h1>
            
            <div className="space-y-6">
              {/* Location input section */}
              <div className="relative">
                <label 
                  htmlFor="location" 
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#028388' }}
                >
                  location
                </label>
                <div className="relative">
                  <MapPin 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                    style={{ color: '#028388' }}
                  />
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter address, zip, or city"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-md focus:outline-none text-gray-700 placeholder-gray-400"
                    style={{ 
                      focusRingColor: '#028388',
                      borderColor: location ? '#028388' : undefined
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#028388'}
                    onBlur={(e) => e.target.style.borderColor = location ? '#028388' : '#d1d5db'}
                  />
                  <button 
                    className="absolute right-0 top-0 h-full px-6 text-white font-medium rounded-r-md transition-colors duration-200 focus:outline-none"
                    style={{ 
                      backgroundColor: '#0eab9b'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#028388'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#0eab9b'}
                  >
                    find a health center
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={implantAvailable}
                    onChange={(e) => setImplantAvailable(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-2"
                    style={{ 
                      accentColor: '#028388'
                    }}
                  />
                  <span className="text-gray-600 font-medium">Implant available</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={iudAvailable}
                    onChange={(e) => setIudAvailable(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-2"
                    style={{ 
                      accentColor: '#028388'
                    }}
                  />
                  <span className="text-gray-600 font-medium">IUD available</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-100 px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Building2 className="w-12 h-12 text-gray-400" />
          </div>
          
          {/* Text */}
          <h2 className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
            Are we missing a health center? Let us know.
          </h2>
          
          {/* Add health center button */}
          <h2 
            className="inline-flex items-center px-6 py-3 border-2 font-medium rounded-md transition-all duration-200 focus:outline-none"
            style={{ 
              borderColor: '#028388',
              color: '#028388'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#028388';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#028388';
            }}
          >
            Add a health center
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h2>
          
          {/* Disclaimer text */}
          <div className="mt-12 max-w-3xl mx-auto" >
            <p className="text-sm text-gray-600 leading-relaxed">
              Bedsiderr lists these resources for your convenience, but we don't get to visit each provider or health center, so 
              we can't make any endorsements or recommendations. Please use your best judgment when making any health 
              care decisions. In order to be included in the Bedsiderr clinic finder, the office or clinic must counsel on or refer 
              out for the full range of birth control methods and prescribe at least one hormonal method. The clinic may also 
              be included if it provides abortion services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}