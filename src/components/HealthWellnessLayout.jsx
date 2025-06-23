// import {Link} from 'react-router-dom';
// export default function HealthWellnessLayout() {
//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Sexual health & wellness section */}
//       <section className="mb-16">
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-teal-600 mb-2">Sexual health & wellness</h2>
//           <div className="w-full h-1">
//             <svg viewBox="0 0 450 6" className="w-full h-6 text-teal-500">
//               <path d="M0,3 C150,6 150,0 300,3 C450,6 450,0 600,3" fill="none" stroke="currentColor" strokeWidth="2" />
//             </svg>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Article 1 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden flex">
//             <div className="w-1/3 relative">
//               <img
//                 src="/nathana-reboucas-O5v8heKY4cI-unsplash.jpg"
//                 alt="Person typing on laptop"
//                 width={200}
//                 height={200}
//                 className="object-cover h-full w-full"
//               />
//             </div>
//             <div className="w-2/3 p-4">
//               <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Sexual Health & Wellness</div>
//               <h3 className="text-lg font-bold mb-2">Your questions, answered with medically-reviewed insights.</h3>
//             </div>
//           </div>

//           {/* Article 2 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden flex">
//             <div className="w-1/3 relative">
//               <img
//                 src="/GettyImages-1489462526.jpg"
//                 alt="Healthcare consultation"
//                 width={200}
//                 height={200}
//                 className="object-cover h-full w-full"
//               />
//             </div>
//             <div className="w-2/3 p-4">
//               <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Health Care</div>
//               <h3 className="text-lg font-bold mb-2">6 practical ways to speak up for your needs in medical settings</h3>
//             </div>
//           </div>

//           {/* Article 3 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden flex">
//             <div className="w-1/3 relative">
//               <img
//                 src="/8 ways you can support your pregnant BFF.jpg"
//                 alt="Pregnant woman with friend"
//                 width={200}
//                 height={200}
//                 className="object-cover h-full w-full"
//               />
//             </div>
//             <div className="w-2/3 p-4">
//               <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Pregnancy & Fertility</div>
//               <h3 className="text-lg font-bold mb-2">8 caring ways to support a friend during pregnancy.</h3>
//             </div>
//           </div>

//           {/* Article 4 */}
//           <div className="border border-gray-200 rounded-lg overflow-hidden flex">
//             <div className="w-1/3 relative">
//               <img
//                 src="/TTC support.jpg"
//                 alt="Couple holding hands"
//                 width={200}
//                 height={200}
//                 className="object-cover h-full w-full"
//               />
//             </div>
//             <div className="w-2/3 p-4">
//               <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Pregnancy & Fertility</div>
//               <h3 className="text-lg font-bold mb-2">
//                 Doula-approved ways to support a loved one on their fertility journey.
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8">
//           <Link
//             to="#"
//             className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
//           >
//             view all sexual health & wellness
//           </Link>
//         </div>
//       </section>

//       {/* Lifestyle & inspiration section */}
//       <section className="mb-16 bg-gray-50 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold text-teal-600 mb-2">Lifestyle & inspiration</h2>
//             <div className="w-full h-1">
//               <svg viewBox="0 0 450 6" className="w-full h-6 text-teal-500">
//                 <path
//                   d="M0,3 C150,6 150,0 300,3 C450,6 450,0 600,3"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Article 1 */}
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
//               <div className="w-1/3 relative">
//                 <img
//                   src="/Taurus1280x672.jpg"
//                   alt="Horoscope illustration"
//                   width={200}
//                   height={200}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="w-2/3 p-4">
//                 <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Horoscopes</div>
//                 <h3 className="text-lg font-bold mb-2">May 2025 horoscopes: What the stars say about your spring vibes</h3>
//               </div>
//             </div>

//             {/* Article 2 */}
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
//               <div className="w-1/3 relative">
//                 <img
//                   src="/GettyImages-671712039.jpg"
//                   alt="Music festival crowd"
//                   width={200}
//                   height={200}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="w-2/3 p-4">
//                 <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Inspiration</div>
//                 <h3 className="text-lg font-bold mb-2">10 must-add tracks to elevate your festival playlist this season.</h3>
//               </div>
//             </div>

//             {/* Article 3 */}
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
//               <div className="w-1/3 relative">
//                 <img
//                   src="/Woman with sunflower 2.jpg"
//                   alt="Person with sunflowers"
//                   width={200}
//                   height={200}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="w-2/3 p-4">
//                 <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Inspiration</div>
//                 <h3 className="text-lg font-bold mb-2">Looking for a fresh start this spring? Let’s dive in.</h3>
//               </div>
//             </div>

//             {/* Article 4 */}
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
//               <div className="w-1/3 relative">
//                 <img
//                   src="/Aries1280-672.jpg"
//                   alt="Horoscope illustration"
//                   width={200}
//                   height={200}
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//               <div className="w-2/3 p-4">
//                 <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Horoscopes</div>
//                 <h3 className="text-lg font-bold mb-2">April 2025 horoscopes: What passion and change may lie ahead.</h3>
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <Link
//               href="#"
//               className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
//             >
//               view all lifestyle & inspiration
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
import { Link } from "react-router-dom";
export default function HealthWellnessLayout() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Sexual health & wellness section */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          {/* Header with enhanced styling */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Sexual Health & Wellness
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Expert insights and medically-reviewed guidance for your health journey
            </p>
            <div className="w-full max-w-md mx-auto h-2">
              <svg viewBox="0 0 450 6" className="w-full h-full">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0d9488" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,3 C150,6 150,0 300,3 C450,6 450,0 600,3" 
                  fill="none" 
                  stroke="url(#waveGradient)" 
                  strokeWidth="3" 
                  className="drop-shadow-sm"
                />
              </svg>
            </div>
          </div>

          {/* Enhanced grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Article 1 - Enhanced card */}
            <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-teal-200">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-2/5 relative overflow-hidden">
                  <img
                    src="/nathana-reboucas-O5v8heKY4cI-unsplash.jpg"
                    alt="Person typing on laptop"
                    className="object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <Link to="/periods-and-vaginal-health" className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="uppercase text-xs sm:text-sm font-bold text-teal-600 mb-2 sm:mb-3 tracking-wider">
                    Periods & Vaginal Health
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                    Your questions, answered with medically-reviewed insights.
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Comprehensive guidance for your health →
                  </div>
                </Link>
              </div>
            </div>

            {/* Article 2 - Enhanced card */}
            <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-teal-200">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-2/5 relative overflow-hidden">
                  <img
                    src="/GettyImages-1489462526.jpg"
                    alt="Healthcare consultation"
                    className="object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <Link to="/health-care" className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="uppercase text-xs sm:text-sm font-bold text-teal-600 mb-2 sm:mb-3 tracking-wider">
                    Health Care
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                    6 practical ways to speak up for your needs in medical settings
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Empower your healthcare journey →
                  </div>
                </Link>
              </div>
            </div>

            {/* Article 3 - Enhanced card */}
            <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-teal-200">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-2/5 relative overflow-hidden">
                  <img
                    src="/8 ways you can support your pregnant BFF.jpg"
                    alt="Pregnant woman with friend"
                    className="object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <Link to="/pregnancy-and-fertility" className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center hover:bg-teal-50/50 transition-colors duration-300">
                  <div className="uppercase text-xs sm:text-sm font-bold text-teal-600 mb-2 sm:mb-3 tracking-wider">
                    Pregnancy & Fertility
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                    8 caring ways to support a friend during pregnancy.
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Learn supportive strategies →
                  </div>
                </Link>
              </div>
            </div>

            {/* Article 4 - Enhanced card */}
            <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-teal-200">
              <Link to="/shw">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-2/5 relative overflow-hidden">
                  <img
                    src="/TTC support.jpg"
                    alt="Couple holding hands"
                    className="object-cover h-48 sm:h-full w-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="w-full sm:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-center hover:bg-teal-50/50 transition-colors duration-300 cursor-pointer">
                  <div className="uppercase text-xs sm:text-sm font-bold text-teal-600 mb-2 sm:mb-3 tracking-wider">
                    Sexually Transmitted Infection
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-teal-700 transition-colors duration-300">
                    Comprehensive expert advice on recognizing, preventing, and managing STIs
                  </h3>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Expert prevention guidance →
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </section>
        {/* Optional: Add a call-to-action section */}
        {/* <section className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to take control of your health?
          </h3>
          <p className="text-lg sm:text-xl text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands who trust our medically-reviewed content for their wellness journey.
          </p>
          <button className="bg-white text-teal-600 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore More Resources
          </button>
        </section> */}
      </div>
    </main>
  );
}