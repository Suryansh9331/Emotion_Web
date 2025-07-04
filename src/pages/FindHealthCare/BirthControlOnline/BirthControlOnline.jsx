import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function BirthControlOnline() {
  const [location, setLocation] = useState('');

  return (
    <div className="min-h-screen">
      {/* Main search section with gradient background */}
      <div 
        className="px-4 py-14"
        style={{
          background: 'linear-gradient(135deg, #028388 0%, #0eab9b 50%, #11b7a1 100%)'
        }}
      >
        <div className="max-w-5xl mx-auto flex justify-center">
          <div 
            className="bg-white shadow-xl px-16 py-12"
            style={{
              borderRadius: '20px',
              width: '100%',
              maxWidth: '900px'
            }}
          >
            {/* Main heading */}
            <h1 
              className="text-center mb-12 font-normal leading-tight"
              style={{
                fontSize: '48px',
                color: '#404040',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Get birth control online
            </h1>
            
            {/* Search input section */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative">
                  {/* Location label */}
                  <label 
                    htmlFor="location" 
                    className="block text-sm font-medium mb-2"
                    style={{ 
                      color: '#028388',
                      fontSize: '14px'
                    }}
                  >
                    location
                  </label>
                  
                  {/* Input and button container */}
                  <div className="flex">
                    {/* Input field */}
                    <div className="relative flex-1">
                      <MapPin 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" 
                        style={{ color: '#028388' }}
                      />
                      <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter address, zip, or city"
                        className="w-full pl-12 pr-4 focus:outline-none text-gray-700"
                        style={{ 
                          height: '52px',
                          fontSize: '16px',
                          border: '2px solid #028388',
                          borderRadius: '8px 0 0 8px',
                          borderRight: 'none'
                        }}
                      />
                    </div>
                    
                    {/* Search button */}
                    <button 
                      className="text-white font-medium transition-colors duration-200 focus:outline-none"
                      style={{ 
                        backgroundColor: '#a8d5d8',
                        width: '120px',
                        height: '52px',
                        fontSize: '16px',
                        borderRadius: '0 8px 8px 0',
                        border: '2px solid #028388',
                        borderLeft: 'none'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#028388'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#a8d5d8'}
                    >
                      search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom disclaimer section */}
      <div className="bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p 
            className="leading-relaxed"
            style={{
              fontSize: '16px',
              color: '#666666',
              lineHeight: '1.6',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Bedsiderr lists these resources for your convenience, but we don't get to visit each provider or health center, so we can't make any endorsements or recommendations. Please use your best judgment when making any health care decisions. In order to be included in the Bedsiderr clinic finder, the office or clinic must counsel on or refer out for the full range of birth control methods and prescribe at least one hormonal method. The clinic may also be included if it provides abortion services.
          </p>
        </div>
      </div>
    </div>
  );
}