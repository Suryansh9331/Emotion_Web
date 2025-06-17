// // import React from 'react';
// // import { Pill, Stethoscope, HelpCircle } from 'lucide-react';

// // const Moreinfo = () => {
// //   return (
// //     <div className="bg-gray-50 min-h-screen py-8 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header Section */}
// //         <div className="mb-8">
// //           <h1 className="text-4xl font-bold text-gray-800 mb-4">More Information</h1>
// //           {/* Decorative wavy line */}
// //           <div className="w-72 h-1 relative">
// //             <svg viewBox="0 0 288 8" className="w-full h-2">
// //               <path
// //                 d="M0,4 Q12,0 24,4 T48,4 T72,4 T96,4 T120,4 T144,4 T168,4 T192,4 T216,4 T240,4 T264,4 T288,4"
// //                 stroke="#028388"
// //                 strokeWidth="2"
// //                 fill="none"
// //               />
// //             </svg>
// //           </div>
// //         </div>

// //         {/* Cards Container */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //           {/* Card 1 - The abortion pill */}
// //           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
// //             <div className="mb-6">
// //               <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
// //                 <Pill className="w-6 h-6 text-teal-600" />
// //               </div>
// //               <h2 className="text-xl font-bold text-gray-800 mb-3">
// //                 The abortion pill: What to expect
// //               </h2>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 You can do it at home, and you can do it on your own time. Here's how it works.
// //               </p>
// //             </div>
// //             <button className="w-full bg-[#028388] text-white font-medium py-3 px-6 rounded-md hover:bg-[#026B70] transition-colors duration-200">
// //               learn more
// //             </button>
// //           </div>

// //           {/* Card 2 - The abortion procedure */}
// //           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
// //             <div className="mb-6">
// //               <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
// //                 <Stethoscope className="w-6 h-6 text-teal-600" />
// //               </div>
// //               <h2 className="text-xl font-bold text-gray-800 mb-3">
// //                 The abortion procedure: What to expect
// //               </h2>
// //               <p className="text-gray-600 text-sm leading-relaxed">
// //                 It's quick, and it's effective. Here's how it works.
// //               </p>
// //             </div>
// //             <button className="w-full bg-[#028388] text-white font-medium py-3 px-6 rounded-md hover:bg-[#026B70] transition-colors duration-200">
// //               learn more
// //             </button>
// //           </div>

// //           {/* Card 3 - FAQs */}
// //           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
// //             <div className="mb-6">
// //               <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
// //                 <HelpCircle className="w-6 h-6 text-teal-600" />
// //               </div>
// //               <h2 className="text-xl font-bold text-gray-800 mb-4">
// //                 FAQs
// //               </h2>
// //               <ul className="space-y-3 text-sm">
// //                 <li>
// //                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline">
// //                     How painful is a medication abortion?
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline">
// //                     How long does an abortion take?
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline">
// //                     What does "viability" mean?
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //             <button className="w-full bg-[#028388] text-white font-medium py-3 px-6 rounded-md hover:bg-[#026B70] transition-colors duration-200">
// //               see all FAQs
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Moreinfo;



// import React from 'react';
// import { Pill, Stethoscope, HelpCircle } from 'lucide-react';

// const MoreInfo = () => {
//   return (
//     <div className="bg-[#f5f5f5] min-h-auto py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-[#028388] mb-4">More Information</h1>
//           {/* Decorative wavy line */}
//           <div className="w-72 h-1 relative">
//             <svg viewBox="0 0 288 8" className="w-full h-2">
//               <path
//                 d="M0,4 Q12,0 24,4 T48,4 T72,4 T96,4 T120,4 T144,4 T168,4 T192,4 T216,4 T240,4 T264,4 T288,4"
//                 stroke="#028388"
//                 strokeWidth="2"
//                 fill="none"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Cards Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Card 1 - The abortion pill */}
//           <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
//             <div className="flex-grow">
//               <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
//                 <Pill className="w-7 h-7 text-[#028388]" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
//                 The abortion pill: What<br />to expect
//               </h2>
//               <p className="text-gray-600 text-base leading-relaxed mb-8">
//                 You can do it at home, and you can do it on your own time. Here's how it works.
//               </p>
//             </div>
//             <div className="mt-auto">
//               <button className="bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm">
//                 learn more
//               </button>
//             </div>
//           </div>

//           {/* Card 2 - The abortion procedure */}
//           <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
//             <div className="flex-grow">
//               <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
//                 <Stethoscope className="w-7 h-7 text-[#028388]" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
//                 The abortion procedure:<br />What to expect
//               </h2>
//               <p className="text-gray-600 text-base leading-relaxed mb-8">
//                 It's quick, and it's effective. Here's how it works.
//               </p>
//             </div>
//             <div className="mt-auto">
//               <button className="bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm">
//                 learn more
//               </button>
//             </div>
//           </div>

//           {/* Card 3 - FAQs */}
//           <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
//             <div className="flex-grow ">
//               <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
//                 <HelpCircle className="w-7 h-7 text-[#028388]" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 FAQs
//               </h2>
//               <ul className="space-y-4 text-base mb-8">
//                 <li className="flex items-start">
//                   <span className="text-[#028388] mr-2 mt-1">•</span>
//                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
//                     How painful is a medication abortion?
//                   </a>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#028388] mr-2 mt-1">•</span>
//                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
//                     How long does an abortion take?
//                   </a>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-[#028388] mr-2 mt-1">•</span>
//                   <a href="#" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
//                     What does "viability" mean?
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="mt-auto">
//               <button className="bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm">
//                 see all FAQs
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoreInfo;





import React from 'react';
import { Pill, Stethoscope, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ Make sure this is imported

const MoreInfo = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-auto py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#028388] mb-4">More Information</h1>
          <div className="w-72 h-1 relative">
            <svg viewBox="0 0 288 8" className="w-full h-2">
              <path
                d="M0,4 Q12,0 24,4 T48,4 T72,4 T96,4 T120,4 T144,4 T168,4 T192,4 T216,4 T240,4 T264,4 T288,4"
                stroke="#028388"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 - Abortion Pill */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
            <div className="flex-grow">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Pill className="w-7 h-7 text-[#028388]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                The abortion pill: What<br />to expect
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                You can do it at home, and you can do it on your own time. Here's how it works.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/abortion/abortion-pill"
                className="inline-block bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm"
              >
                learn more
              </Link>
            </div>
          </div>

          {/* Card 2 - Abortion Procedure */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
            <div className="flex-grow">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-7 h-7 text-[#028388]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                The abortion procedure:<br />What to expect
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                It's quick, and it's effective. Here's how it works.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/abortion/abortion-procedure"
                className="inline-block bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm"
              >
                learn more
              </Link>
            </div>
          </div>

          {/* Card 3 - FAQs */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col h-96">
            <div className="flex-grow">
              <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="w-7 h-7 text-[#028388]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">FAQs</h2>
              <ul className="space-y-4 text-base mb-8">
                <li className="flex items-start">
                  <span className="text-[#028388] mr-2 mt-1">•</span>
                  <Link to="/abortion/articles/2190-how-painful-is-a-medication-abortion" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
                    How painful is a medication abortion?
                  </Link>
                </li>
                <li className="flex items-start">
                  <span className="text-[#028388] mr-2 mt-1">•</span>
                  <Link to="/abortion/articles/2189-how-long-does-an-abortion-take" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
                    How long does an abortion take?
                  </Link>
                </li>
                <li className="flex items-start">
                  <span className="text-[#028388] mr-2 mt-1">•</span>
                  <Link to="/abortion/articles/2177-what-does-viability-mean" className="text-[#028388] hover:text-[#026B70] hover:underline leading-relaxed">
                    What does "viability" mean?
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <Link
                to="/abortion/faqs"
                className="inline-block bg-[#028388] text-white font-medium py-3 px-8 rounded-md hover:bg-[#026B70] transition-colors duration-200 text-sm"
              >
                see all FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
