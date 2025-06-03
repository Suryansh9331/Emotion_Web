// import { Facebook, Twitter, Instagram, ExternalLink } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// import {Link} from 'react-router-dom';

// export default function Footer() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="bg-gray-100 py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-800">BEDSIDER</h1>
//             <p className="text-sm text-gray-600 ml-2 hidden sm:block">We've got you covered</p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex gap-4 text-teal-600">
//               <Link to="#" aria-label="Twitter">
//                 <Twitter size={20} />
//               </Link>
//               <Link to="#" aria-label="Facebook">
//                 <Facebook size={20} />
//               </Link>
//               <Link to="#" aria-label="Instagram">
//                 <Instagram size={20} />
//               </Link>
//               <Link to="#" aria-label="TikTok">
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-teal-600"
//                 >
//                   <path
//                     d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </Link>
//             </div>
//             <button  className="bg-white">
//               español
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="flex-grow">{/* Your main content would go here */}</main>

//       {/* Main Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Column 1 */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">EXPLORE TOPICS</h2>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Birth control
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Abortion
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Sex & relationships
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Sexual health & wellness
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Lifestyle & inspiration
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Column 2 */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">FIND HEALTH CARE</h2>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Find a health care provider
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Find abortion care
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Get birth control delivered
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Column 3 */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">SUBSCRIBE</h2>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Subscribe to Frisky Friday
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Set an appointment reminder
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Column 4 */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">ABOUT</h2>
//               <ul className="space-y-2">
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     About Bedsider
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Donate
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="hover:underline">
//                     Contact us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Bottom Footer */}
//       <div className="bg-teal-100 py-6">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-sm text-gray-700">
//               A 501(c)(3) tax-exempt organization. Federal Identification Number (EIN): 52-1974611.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center md:justify-end">
//               <Link to="#" className="text-sm text-gray-700 hover:underline flex items-center">
//                 Bedsider Providers <ExternalLink size={14} className="ml-1" />
//               </Link>
//               <Link to="#" className="text-sm text-gray-700 hover:underline">
//                 Terms of use
//               </Link>
//               <Link to="#" className="text-sm text-gray-700 hover:underline">
//                 Privacy policy
//               </Link>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-700">A program of</span>
//               <img
//                 src="/power-to-decide-2x-56e86515cb4dc42dd45101e5f325a99de1946d7c13e06ece8ecea93f1fb9f501.webp"
//                 alt="Power to Decide logo"
//                 width={120}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
         <div className="bg-white py-4 px-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              BEDSIDER
              <div className="text-xs text-gray-500 font-normal italic">
                We've got you covered
              </div>
            </div>
          </div>

          {/* Right Side - Social Icons and Language */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div className="border border-gray-300 rounded px-3 py-1">
              <span className="text-sm text-gray-700">español</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer Section */}
      <div className="bg-gray-700 text-white py-12 px-4">
        
        <div className="max-w-7xl mx-auto">
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Explore Topics Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
                Explore Topics
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Birth control
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Abortion
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Sex & relationships
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Sexual health & wellness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Lifestyle & inspiration
                  </a>
                </li>
              </ul>
            </div>

            {/* Find Health Care Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
                Find Health Care
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Find a health care provider
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Find abortion care
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Get birth control delivered
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
                Subscribe
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Subscribe to Frisky Friday
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Set an appointment reminder
                  </a>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
                About
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About Bedsider
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-teal-100 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            
            {/* Left Side - Tax Info */}
            <div className="text-gray-700 text-sm flex-1">
              A 501(c)(3) tax-exempt organization. Federal Identification Number (EIN): 52-1974611.
            </div>

            {/* Center - Links */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm">
              <a 
                href="#" 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
              >
                Bedsider Providers
                <ExternalLink size={14} />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Terms of use
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                Privacy policy
              </a>
            </div>

            {/* Right Side - Power to Decide Logo */}
               <div className="flex items-center gap-6">
               <span className="text-sm text-gray-700 md:ml-4">A program of</span>
               <img
                 src="/power-to-decide-2x-56e86515cb4dc42dd45101e5f325a99de1946d7c13e06ece8ecea93f1fb9f501.webp"
                 alt="Power to Decide logo"
                 width={120}
                 height={40}
                 className="h-8 w-auto"
               />
             </div>
          </div>
        </div>
      </div>

      {/* Header Section with Logo and Social Icons */}
     
    </footer>
  );
};

export default Footer;