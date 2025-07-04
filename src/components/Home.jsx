// import React, { useState } from 'react';
// import { ChevronDown, Search, Menu, X } from 'lucide-react';


// export default function BedsiderrWebsite() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white ">
//       {/* Top Bar */}
//       {/* <Navbar/> */}

//       {/* Header */}
     

//       {/* Main Content */}
//       <main className="px-4 py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Hero Section */}
//           <div className="text-center mb-16 mt-16">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-8">
//               From birth control info to sex tips,<br />
//               <span className="block">we've got you covered.</span>
//             </h2>
            
//             {/* Decorative Wave */}
//             <div className="flex justify-center mb-12">
//               <svg width="300" height="20" viewBox="0 0 300 20" className="text-teal-400">
//                 <path 
//                   d="M0,10 Q75,0 150,10 T300,10" 
//                   stroke="currentColor" 
//                   strokeWidth="2" 
//                   fill="none"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Birth Control Section */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-6 md:ml-12">
//             {/* Images Grid */}
//              <img src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp" alt=""/>

//             {/* Text Content */}
//             <div className="text-center lg:text-left lg:ml-36">
//               <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
//                 Explore birth control options that<br />work for you.   
//               </h3>
//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 Use our interactive tool to discover a method<br />
//                 that matches your lifestyle and health needs.
//               </p>
//               <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium">
//                 explore birth control options
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function BedsiderrWebsite() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white ">
      {/* Top Bar */}
      {/* <Navbar/> */}

      {/* Header */}
     

      {/* Main Content */}
      <main className="px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-8">
              From birth control info to sex tips,<br />
              <span className="block">we've got you covered.</span>
            </h2>
            
            {/* Decorative Wave */}
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
          </div>

          {/* Birth Control Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-6 md:ml-12">
            {/* Images Grid */}
             <img src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp" alt=""/>

            {/* Text Content */}
            <div className="text-center lg:text-left lg:ml-36">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Explore birth control types that<br />work for you.   
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Use our interactive tool to discover a method<br />
                that matches your lifestyle and health needs.
              </p>
              <Link to="/types/iud">
              <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium cursor-pointer">
                Birth control types 
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}