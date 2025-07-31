// // import { ChevronRight } from "lucide-react"

import { Link } from "lucide-react";

// // export default function FourthComponent() {
// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Breadcrumb Navigation */}
// //       <div className="container mx-auto px-4 py-4">
// //         <nav className="flex items-center text-sm text-teal-600 font-medium">
// //           <span className="hover:underline cursor-pointer">Sexual health & wellness</span>
// //           <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
// //           <span className="text-gray-600">Sexually Transmitted Infections (STDs, STIs)</span>
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="container mx-auto px-4 pb-8">
// //         {/* Main Heading Section */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
// //             Sexually transmitted infections (stds, stis)
// //           </h1>
// //           {/* Decorative underline */}
// //           <div className="flex justify-center mb-6">
// //             <svg width="200" height="20" viewBox="0 0 200 20" className="text-teal-600">
// //               <path
// //                 d="M10 15 Q50 5 100 10 T190 8"
// //                 stroke="currentColor"
// //                 strokeWidth="3"
// //                 fill="none"
// //                 strokeLinecap="round"
// //               />
// //             </svg>
// //           </div>
// //           <p className="text-lg md:text-xl text-gray-600 font-medium">
// //             Prevention, testing, and treatment — stigma free.
// //           </p>
// //         </div>

// //         {/* Hero Section with Question Marks */}
// //         <div className="relative  rounded-lg overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center p-8">
// //           {/* Scattered Question Marks Background */}
// //          <img src="/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover"/>

// //           {/* Content */}
// //           <div className="relative z-10 text-center text-white max-w-4xl mx-auto mt-36">
// //             <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
// //               FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
// //             </p>
// //             <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
// //               Is anal sex safer than vaginal sex?
// //             </h2>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// import { ChevronRight } from "lucide-react";

// export default function FourthComponent() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumb Navigation */}
//       {/* <div className="container mx-auto px-4 py-4">
//         <nav className="flex items-center text-sm text-teal-600 font-medium">
//           <span className="hover:underline cursor-pointer">Sexual health & wellness</span>
//           <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
//           <span className="text-gray-600">Sexually Transmitted Infections (STDs, STIs)</span>
//         </nav>
//       </div> */}

//       <div className="container mx-auto px-4 py-4">
//   <nav className="flex justify-center items-center space-x-2 text-sm text-teal-600 font-medium">
//     <span className="hover:underline cursor-pointer">Sexual health & wellness</span>
//     <ChevronRight className="w-4 h-4 text-gray-400" />
//     <span className="text-gray-600">Sexually Transmitted Infections (STDs, STIs)</span>
//   </nav>
// </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 pb-8">
//         {/* Main Heading Section */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-600 mb-4">
//             Sexually transmitted infections (stds, stis)
//           </h1>
//           {/* Decorative underline */}
//           <div className="flex justify-center mb-6">
//             <svg width="200" height="20" viewBox="0 0 200 20" className="text-teal-600">
//               <path
//                 d="M10 15 Q50 5 100 10 T190 8"
//                 stroke="currentColor"
//                 strokeWidth="3"
//                 fill="none"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//           <p className="text-lg md:text-xl text-gray-600 font-medium">
//             Prevention, testing, and treatment — stigma free.
//           </p>
//         </div>

//         {/* Hero Section with Darkened Background */}
//         <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center p-8">
//           {/* Background image with brightness filter */}
//           <img
//             src="/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover filter brightness-50"
//           />

//           {/* Optional extra overlay for stronger darkening */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-5" />

//           {/* Content */}
//           <div className="relative z-10 text-center text-white max-w-4xl mx-auto md:ml-32 md:mt-48">
//             <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
//               FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
//             </p>
//             <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
//               Is anal sex safer than vaginal sex?
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const STILayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      {/* <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <span className="text-teal-600 hover:text-teal-700 cursor-pointer">
              Sex & relationships{"  "}
            </span>
            <span className="mx-2">›</span>
            <span className="text-gray-500">Relationships</span>
          </div>
        </div>
      </div> */}

      {/* Main Title Section */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-600 mb-6">
            Sex & relationships
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light">
            Like the big sister you never had.
          </p>
        </div>
      </div>

      {/* Tab Navigation Section */}
      <div className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-gray-600 text-sm">In this section:</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {/* Relationships Tab */}
            <a href="/sex-relationships/Relationships" className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">Relationships</span>
            </a>

            {/* Masturbation Tab */}
            <a href="/sex-relationships/Masturbation" className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 015.083 2M15 10h1a3 3 0 11-3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">Masturbation</span>
            </a>

            {/* Boundaries & consent Tab */}
            <a href="/sex-relationships/BoundariesAndconsent" className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.40A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">Boundaries & consent</span>
            </a>

            {/* Dating & hookups Tab */}
            <a href="/sex-relationships/DatingAndHookup" className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">Dating & hookups</span>
            </a>

            {/* Better sex Tab */}
            <a href="/sex-relationships/BetterSex" className="flex flex-col items-center group cursor-pointer transition-transform hover:scale-105">
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium">Better sex</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Question Marks Background */}
      <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
        {/* Background image with brightness filter */}
        <img
          src="/Sex&Relationship/ViewAll/Banner1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />

        {/* Optional extra overlay for stronger darkening */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-0" />

        {/* Content */}
        <div className="relative z-10 text-left text-white max-w-full mx-auto md:ml-32 md:mt-48">
          <p className="text-sm md:text-base font-bold tracking-wider uppercase mb-6 opacity-90">
            Better sex
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            🔮 QUIZ: What’s your sensual love language?{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default STILayout;
