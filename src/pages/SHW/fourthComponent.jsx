// // import { ChevronRight } from "lucide-react"

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
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <span className="text-teal-600 hover:text-teal-700 cursor-pointer">
              Sexual health & wellness
            </span>
            <span className="mx-2">›</span>
            <span className="text-gray-500">
              Sexually Transmitted Infections (STDs, STIs)
            </span>
          </div>
        </div>
      </div>

      {/* Main Title Section */}
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-teal-600 mb-6">
            Sexually transmitted infections (stds, stis)
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light">
            Prevention, testing, and treatment — stigma free.
          </p>
        </div>
      </div>

      {/* Hero Section with Question Marks Background */}
               <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
           {/* Background image with brightness filter */}
           <img
             src="/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
             alt=""
             className="absolute inset-0 w-full h-full object-cover filter brightness-50"
           />

           {/* Optional extra overlay for stronger darkening */}
           <div className="absolute inset-0 bg-gradient-to-b  to-transparent opacity-30" />

           {/* Content */}
           <div className="relative z-10 text-left text-white max-w-4xl mx-auto md:ml-22 md:mt-48">
             <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
               FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
             </p>
             <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
               Is anal sex safer than vaginal sex?
             </h2>
           </div>
         </div>
    </div>
  );
};
export default STILayout;