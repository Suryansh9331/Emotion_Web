// import React from 'react';

// const BirthControlLayout = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-normal mb-8 text-center">
//           Read the latest on birth control, sex, and more.
//         </h1>

//         <div className="mb-6">
//           <h2 className="text-2xl md:text-3xl text-teal-500 font-normal mb-1">Birth control</h2>
//           <div className="w-16 h-0.5 bg-teal-500"></div>
//         </div>
//       </div>

//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Article 1 */}
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           {/* <div className="flex-shrink-0">
//             <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pink-200 to-teal-300 rounded-lg flex items-center justify-center">
//               <div className="bg-teal-400 rounded-lg p-2">
//                 <div className="grid grid-cols-3 gap-1">
//                   {[...Array(9)].map((_, i) => (
//                     <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <img src='/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg' alt='img1' className='w-44 h-44'/>
//         <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               {/* 20 ways OTC birth control pills change the game */}
//               20 ways over-the-counter pills are changing access and control
//             </h3>
//           </div>
//         </div>

//         {/* Article 2 */}
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg' alt='' className='w-44 h-44'/>
//           {/* <div className="flex-shrink-0">
//             <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-teal-400 to-yellow-300 rounded-lg flex items-center justify-center relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-yellow-300 to-pink-300 rounded-lg"></div>
//               <div className="relative">
//                 <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M7 17L17 7M17 7H7M17 7v10" />
//                 </svg>
//               </div>
//             </div>
//           </div> */}
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">IUD</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               {/* Lorde is answering our birth control prayers*/}
//               How public voices are shaping awareness about IUD benefits.
//             </h3>
//           </div>
//         </div>

//         {/* Article 3 */}
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/230912_PTD_CapitolHill-04c.jpg' alt='' className='h-44 w-44'/>
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//              Why this year calls for more gratitude toward birth control options.
//             </h3>
//           </div>
//         </div>

//         {/* Article 4 */}
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/Screenshot 2024-03-04 at 8.04.06 AM (1).png' alt='' className='h-44 w-44'/>
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               {/* Everything you need to know about Opill, the new over-the-counter birth control pill */}
//               A complete guide to Opill, the latest non-prescription birth control pill available.
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* View All Button */}
//       <div className="text-left">
//         <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
//           view all birth control articles
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BirthControlLayout;

import { Link } from "react-router-dom";

const BirthControlLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-normal mb-8 text-center">
          Read the latest on birth control, sex, and more.
        </h1>

        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl text-teal-500 font-normal mb-1">
            Birth control
          </h2>
          <div className="w-16 h-0.5 bg-teal-500"></div>
        </div>
      </div>
      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Article 1 */}
        <Link to="/types/birth-control-pill">
          <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <img
              src="/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg"
              alt="img1"
              className="w-44 h-44"
            />
            <div className="flex-1">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                BIRTH CONTROL PILL
              </p>
              <h3 className="text-gray-800 font-medium text-base md:text-lg leading-tight">
                Innovative ways over-the-counter birth control pills empower
                reproductive autonomy
              </h3>
            </div>
          </div>
        </Link>
        {/* Article 2 */}
        <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          <img
            src="/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg"
            alt=""
            className="w-44 h-44"
          />
          <Link to="/types/iud">
            <div className="flex-1">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                IUD
              </p>
              <h3 className="text-gray-800 font-medium text-base md:text-lg leading-tight">
                How public voices are shaping awareness about IUD benefits.
              </h3>
            </div>
          </Link>
        </div>

        {/* Article 3 */}
        <Link to="/types/patch">
          <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <img
              src="/230912_PTD_CapitolHill-04c.jpg"
              alt=""
              className="h-44 w-44"
            />
            <div className="flex-1">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                BIRTH CONTROL Patch
              </p>
              <h3 className="text-gray-800 font-medium text-base md:text-lg leading-tight">
                Why the birth control patch is a game-changer in modern
                contraception
              </h3>
            </div>
          </div>
        </Link>
        {/* Article 4 */}
        <Link to="/types/birth-control-pill">
          <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
            <img
              src="/Screenshot 2024-03-04 at 8.04.06 AM (1).png"
              alt=""
              className="h-44 w-44"
            />
            <div className="flex-1">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                BIRTH CONTROL PILL
              </p>
              <h3 className="text-gray-800 font-medium text-base md:text-lg leading-tight">
                Why the birth control pill remains the most reliable option for
                modern family planning
              </h3>
            </div>
          </div>
        </Link>
      </div>

      {/* View All Button */}
      <div className="text-left">
        <Link to = "/birth-control/articles">
          {" "}
          <button className="bg-teal-500 hover:bg-teal-600 text-white cursor-pointer px-6 py-3 rounded-lg font-medium transition-colors text-lg">
            view all birth control articles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BirthControlLayout;

// import { Link } from "react-router-dom";

// const BirthControlLayout = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-normal mb-8 text-center">
//           Read the latest on birth control, sex, and more.
//         </h1>

//         <div className="mb-6">
//           <h2 className="text-2xl md:text-3xl text-teal-500 font-normal mb-1">Birth control</h2>
//           <div className="w-16 h-0.5 bg-teal-500"></div>
//         </div>
//       </div>
//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Article 1 */}
//         <Link to="/types/birth-control-pill">
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           {/* <div className="flex-shrink-0">
//             <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-pink-200 to-teal-300 rounded-lg flex items-center justify-center">
//               <div className="bg-teal-400 rounded-lg p-2">
//                 <div className="grid grid-cols-3 gap-1">
//                   {[...Array(9)].map((_, i) => (
//                     <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <img src='/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg' alt='img1' className='w-44 h-44'/>
//         <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               {/* 20 ways OTC birth control pills change the game */}
//                Innovative ways over-the-counter birth control pills empower reproductive autonomy
//             </h3>
//           </div>
//         </div>
//         </Link>
//         {/* Article 2 */}
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg' alt='' className='w-44 h-44'/>
//           {/* <div className="flex-shrink-0">
//             <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-teal-400 to-yellow-300 rounded-lg flex items-center justify-center relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-yellow-300 to-pink-300 rounded-lg"></div>
//               <div className="relative">
//                 <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M7 17L17 7M17 7H7M17 7v10" />
//                 </svg>
//               </div>
//             </div>
//           </div> */}
//           <Link to="/types/iud">
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">IUD</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               {/* Lorde is answering our birth control prayers*/}
//               How public voices are shaping awareness about IUD benefits.
//             </h3>
//           </div>
//           </Link>
//         </div>

//         {/* Article 3 */}
//         <Link to="/types/patch">
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/230912_PTD_CapitolHill-04c.jpg' alt='' className='h-44 w-44'/>
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL Patch</p>
//             {/* <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//              Why this year calls for more gratitude toward birth control options.
//             </h3> */}
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//   Why the birth control patch is a game-changer in modern contraception
// </h3>

//           </div>
//         </div>
//         </Link>
//         {/* Article 4 */}
//          <Link to="/types/birth-control-pill">
//         <div className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
//           <img src='/Screenshot 2024-03-04 at 8.04.06 AM (1).png' alt='' className='h-44 w-44'/>
//           <div className="flex-1">
//             <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">BIRTH CONTROL PILL</p>
//             <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//   Why the birth control pill remains the most reliable option for modern family planning
// </h3>
//             {/* <h3 className="text-gray-800 font-medium text-sm md:text-base leading-tight">
//               A complete guide to Opill, the latest non-prescription birth control pill available.
//             </h3> */}
//           </div>
//         </div>
//         </Link>
//       </div>

//       {/* View All Button */}
//       <div className="text-left">
//         <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
//           view all birth control articles
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BirthControlLayout;

// // export default function BirthControlLayout() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
// //         {/* Enhanced Header */}
// //         <div className="mb-12 sm:mb-16 lg:mb-20">
// //           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 font-light mb-8 sm:mb-12 text-center leading-tight max-w-5xl mx-auto">
// //             Read the latest on birth control, sex, and more.
// //           </h1>

// //           <div className="text-center sm:text-left max-w-4xl mx-auto">
// //             <div className="inline-block">
// //               <h2 className="text-3xl sm:text-4xl lg:text-5xl text-teal-600 font-light mb-3 sm:mb-4">
// //                 Birth Control
// //               </h2>
// //               <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-sm"></div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Enhanced Articles Grid */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
// //           {/* Article 1 - Birth Control Pill */}
// //           <a href="/types/birth-control-pill" className="group block">
// //             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-teal-200">
// //               <div className="flex flex-col sm:flex-row">
// //                 <div className="w-full sm:w-2/5 relative overflow-hidden">
// //                   <img
// //                     src='/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg'
// //                     alt='Birth control pills and contraceptive methods'
// //                     className='object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700'
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 </div>
// //                 <div className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center group-hover:bg-teal-50/30 transition-colors duration-300">
// //                   <p className="text-teal-600 text-xs sm:text-sm uppercase tracking-wider font-bold mb-2 sm:mb-3">
// //                     Birth Control Pill
// //                   </p>
// //                   <h3 className="text-gray-800 group-hover:text-teal-700 font-semibold text-base sm:text-lg lg:text-xl leading-tight transition-colors duration-300">
// //                     Innovative ways over-the-counter birth control pills empower reproductive autonomy
// //                   </h3>
// //                   <div className="text-sm text-gray-600 group-hover:text-gray-700 mt-2 sm:mt-3 transition-colors duration-300">
// //                     Learn about accessibility →
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </a>

// //           {/* Article 2 - IUD */}
// //           <a href="/types/iud" className="group block">
// //             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-teal-200">
// //               <div className="flex flex-col sm:flex-row">
// //                 <div className="w-full sm:w-2/5 relative overflow-hidden">
// //                   <img
// //                     src='/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg'
// //                     alt='IUD contraceptive device information'
// //                     className='object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700'
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 </div>
// //                 <div className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center group-hover:bg-teal-50/30 transition-colors duration-300">
// //                   <p className="text-teal-600 text-xs sm:text-sm uppercase tracking-wider font-bold mb-2 sm:mb-3">
// //                     IUD
// //                   </p>
// //                   <h3 className="text-gray-800 group-hover:text-teal-700 font-semibold text-base sm:text-lg lg:text-xl leading-tight transition-colors duration-300">
// //                     How public voices are shaping awareness about IUD benefits.
// //                   </h3>
// //                   <div className="text-sm text-gray-600 group-hover:text-gray-700 mt-2 sm:mt-3 transition-colors duration-300">
// //                     Discover the benefits →
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </a>

// //           {/* Article 3 - Birth Control Patch */}
// //           <a href="/types/patch" className="group block">
// //             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-teal-200">
// //               <div className="flex flex-col sm:flex-row">
// //                 <div className="w-full sm:w-2/5 relative overflow-hidden">
// //                   <img
// //                     src='/230912_PTD_CapitolHill-04c.jpg'
// //                     alt='Birth control patch information and advocacy'
// //                     className='object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700'
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 </div>
// //                 <div className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center group-hover:bg-teal-50/30 transition-colors duration-300">
// //                   <p className="text-teal-600 text-xs sm:text-sm uppercase tracking-wider font-bold mb-2 sm:mb-3">
// //                     Birth Control Patch
// //                   </p>
// //                   <h3 className="text-gray-800 group-hover:text-teal-700 font-semibold text-base sm:text-lg lg:text-xl leading-tight transition-colors duration-300">
// //                     Why the birth control patch is a game-changer in modern contraception
// //                   </h3>
// //                   <div className="text-sm text-gray-600 group-hover:text-gray-700 mt-2 sm:mt-3 transition-colors duration-300">
// //                     Explore patch benefits →
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </a>

// //           {/* Article 4 - Birth Control Pill (Alternative) */}
// //           <a href="/types/birth-control-pill" className="group block">
// //             <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 hover:border-teal-200">
// //               <div className="flex flex-col sm:flex-row">
// //                 <div className="w-full sm:w-2/5 relative overflow-hidden">
// //                   <img
// //                     src='/Screenshot 2024-03-04 at 8.04.06 AM (1).png'
// //                     alt='Modern birth control pill options and planning'
// //                     className='object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700'
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                 </div>
// //                 <div className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center group-hover:bg-teal-50/30 transition-colors duration-300">
// //                   <p className="text-teal-600 text-xs sm:text-sm uppercase tracking-wider font-bold mb-2 sm:mb-3">
// //                     Birth Control Pill
// //                   </p>
// //                   <h3 className="text-gray-800 group-hover:text-teal-700 font-semibold text-base sm:text-lg lg:text-xl leading-tight transition-colors duration-300">
// //                     Why the birth control pill remains the most reliable option for modern family planning
// //                   </h3>
// //                   <div className="text-sm text-gray-600 group-hover:text-gray-700 mt-2 sm:mt-3 transition-colors duration-300">
// //                     Family planning insights →
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </a>
// //         </div>

// //         {/* Enhanced CTA Section */}
// //         {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
// //           <div className="text-center sm:text-left">
// //             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
// //               Explore All Birth Control Options
// //             </h3>
// //             <p className="text-teal-100 text-sm sm:text-base lg:text-lg">
// //               Find the perfect contraceptive method for your lifestyle
// //             </p>
// //           </div>
// //           <button className="bg-white text-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
// //             View All Birth Control Articles
// //           </button>
// //         </div> */}

// //         {/* Optional: Quick Stats Section */}
// //         {/* <div className="mt-12 sm:mt-16 lg:mt-20">
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
// //             <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
// //               <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">99%</div>
// //               <div className="text-gray-600 text-sm sm:text-base font-medium">Effectiveness Rate</div>
// //               <div className="text-xs sm:text-sm text-gray-500 mt-1">When used correctly</div>
// //             </div>
// //             <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
// //               <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">20+</div>
// //               <div className="text-gray-600 text-sm sm:text-base font-medium">Birth Control Options</div>
// //               <div className="text-xs sm:text-sm text-gray-500 mt-1">Available methods</div>
// //             </div>
// //             <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
// //               <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">24/7</div>
// //               <div className="text-gray-600 text-sm sm:text-base font-medium">Expert Support</div>
// //               <div className="text-xs sm:text-sm text-gray-500 mt-1">Always available</div>
// //             </div>
// //           </div>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // }
