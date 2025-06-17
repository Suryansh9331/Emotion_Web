// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // // // // // // const Navbar = () => {
// // // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // // // //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // // //     };

// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // //   }, []);

// // // // // // //   const navItems = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       title: 'Birth control',
// // // // // // //       dropdownItems: ['All methods', 'Quiz', 'Compare methods', 'Find a method']
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       title: 'Abortion',
// // // // // // //       dropdownItems: ['Your options', 'Common questions', 'Cost', 'Support']
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       title: 'Sex & relationships',
// // // // // // //       dropdownItems: ['Dating', 'Communication', 'LGBTQ+', 'Pleasure']
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       title: 'Sexual health & wellness',
// // // // // // //       dropdownItems: ['STIs', 'Pregnancy', 'General health', 'Mental health']
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 5,
// // // // // // //       title: 'Lifestyle & inspiration',
// // // // // // //       dropdownItems: ['Entertainment', 'Stories', 'News', 'Resources']
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 6,
// // // // // // //       title: 'Find health care',
// // // // // // //       dropdownItems: ['Providers', 'Telehealth', 'Insurance', 'Free clinics']
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   const TopBar = () => (
// // // // // // //     <div className="bg-[#d9f5f0] py-2 px-4 md:px-8">
// // // // // // //       <div className="container mx-auto flex justify-between items-center">
// // // // // // //         <div className="text-sm">
// // // // // // //           <span className="hidden sm:inline-block">Are you a provider? Visit </span>
// // // // // // //           <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
// // // // // // //             Bedsider Providers
// // // // // // //             <ExternalLink className="ml-1 h-3 w-3" />
// // // // // // //           </a>
// // // // // // //         </div>

// // // // // // //         <div className="flex items-center space-x-4">
// // // // // // //           <div className="text-sm">
// // // // // // //             <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// // // // // // //             <span className="mx-1">|</span>
// // // // // // //             <a href="#" className="text-[#333] hover:underline">Log In</a>
// // // // // // //           </div>

// // // // // // //           <button className="bg-[#0c9a8d] text-white px-3 py-1 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// // // // // // //             español
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   const MainLogo = () => (
// // // // // // //     <div className="flex justify-center py-4">
// // // // // // //       <a href="#" className="flex flex-col items-center">
// // // // // // //         <div className="text-[#333333] text-4xl md:text-5xl font-bold tracking-wider">
// // // // // // //           BEDSIDER
// // // // // // //         </div>
// // // // // // //         <div className="text-gray-500 text-sm italic mt-1">
// // // // // // //           We've got you covered
// // // // // // //         </div>
// // // // // // //       </a>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   const NavItem = ({ title, children }) => {
// // // // // // //     const [isHovered, setIsHovered] = useState(false);

// // // // // // //     return (
// // // // // // //       <div
// // // // // // //         className="relative"
// // // // // // //         onMouseEnter={() => setIsHovered(true)}
// // // // // // //         onMouseLeave={() => setIsHovered(false)}
// // // // // // //       >
// // // // // // //         <button className="flex items-center px-2 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors">
// // // // // // //           {title}
// // // // // // //           <ChevronDown className="ml-1 h-4 w-4" />
// // // // // // //         </button>

// // // // // // //         <div className={`absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// // // // // // //           isHovered
// // // // // // //             ? 'opacity-100 max-h-96 transform scale-y-100'
// // // // // // //             : 'opacity-0 max-h-0 transform scale-y-0 pointer-events-none'
// // // // // // //         }`}>
// // // // // // //           <div className="py-2">
// // // // // // //             {children}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const DropdownItem = ({ title }) => (
// // // // // // //     <a
// // // // // // //       href="#"
// // // // // // //       className="block px-4 py-2 text-[#333] hover:bg-[#f5f5f5] hover:text-[#0c9a8d] transition-colors"
// // // // // // //     >
// // // // // // //       {title}
// // // // // // //     </a>
// // // // // // //   );

// // // // // // //   const SearchBar = () => (
// // // // // // //     <div className="relative flex items-center">
// // // // // // //       {isSearchExpanded && (
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           className="w-36 md:w-48 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
// // // // // // //           placeholder="Search..."
// // // // // // //           autoFocus
// // // // // // //           onBlur={() => setIsSearchExpanded(false)}
// // // // // // //         />
// // // // // // //       )}

// // // // // // //       <button
// // // // // // //         className="ml-2 p-1 text-[#333] hover:text-[#0c9a8d] transition-colors"
// // // // // // //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// // // // // // //       >
// // // // // // //         <Search />
// // // // // // //         <span className="ml-1 hidden md:inline-block">Search</span>
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   const MobileMenu = () => (
// // // // // // //     <div className="md:hidden">
// // // // // // //       <button
// // // // // // //         className="p-2 text-[#333]"
// // // // // // //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // // //       >
// // // // // // //         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// // // // // // //       </button>

// // // // // // //       {isMobileMenuOpen && (
// // // // // // //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// // // // // // //           <div className="container mx-auto px-4">
// // // // // // //             <button
// // // // // // //               className="absolute top-4 right-4 p-2 text-[#333]"
// // // // // // //               onClick={() => setIsMobileMenuOpen(false)}
// // // // // // //             >
// // // // // // //               <X size={24} />
// // // // // // //             </button>

// // // // // // //             <div className="mt-4 border-t">
// // // // // // //               {navItems.map(item => (
// // // // // // //                 <div key={item.id} className="border-b">
// // // // // // //                   <button
// // // // // // //                     className="w-full py-4 px-2 flex justify-between items-center text-left"
// // // // // // //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// // // // // // //                   >
// // // // // // //                     <span className="font-medium">{item.title}</span>
// // // // // // //                     {expandedItem === item.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
// // // // // // //                   </button>

// // // // // // //                   {expandedItem === item.id && (
// // // // // // //                     <div className="pb-4 pl-4">
// // // // // // //                       {item.dropdownItems.map((dropdownItem, idx) => (
// // // // // // //                         <a
// // // // // // //                           key={idx}
// // // // // // //                           href="#"
// // // // // // //                           className="block py-2 text-[#333] hover:text-[#0c9a8d]"
// // // // // // //                         >
// // // // // // //                           {dropdownItem}
// // // // // // //                         </a>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             <div className="mt-6 space-y-4">
// // // // // // //               <div className="flex justify-center">
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
// // // // // // //                   placeholder="Search..."
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               <div className="flex justify-center space-x-4">
// // // // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
// // // // // // //                 <span>|</span>
// // // // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
// // // // // // //               </div>

// // // // // // //               <div className="flex justify-center">
// // // // // // //                 <button className="bg-[#0c9a8d] text-white px-4 py-2 rounded hover:bg-[#0a8a7d] transition-colors w-full">
// // // // // // //                   español
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   const NavMenu = () => (
// // // // // // //     <div className="hidden md:block border-t border-b border-gray-200">
// // // // // // //       <div className="container mx-auto">
// // // // // // //         <div className="flex justify-between items-center">
// // // // // // //           <div className="flex space-x-1 lg:space-x-4">
// // // // // // //             {navItems.slice(0, 5).map(item => (
// // // // // // //               <NavItem key={item.id} title={item.title}>
// // // // // // //                 {item.dropdownItems.map((dropdownItem, idx) => (
// // // // // // //                   <DropdownItem key={idx} title={dropdownItem} />
// // // // // // //                 ))}
// // // // // // //               </NavItem>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div className="flex items-center space-x-2">
// // // // // // //             <NavItem title={navItems[5].title}>
// // // // // // //               {navItems[5].dropdownItems.map((dropdownItem, idx) => (
// // // // // // //                 <DropdownItem key={idx} title={dropdownItem} />
// // // // // // //               ))}
// // // // // // //             </NavItem>
// // // // // // //             <SearchBar />
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <header className={`fixed top-0 left-0 right-0 z-40 bg-white ${
// // // // // // //       isScrolled ? 'shadow-md' : ''
// // // // // // //     } transition-shadow`}>
// // // // // // //       <TopBar />
// // // // // // //       <div className="container mx-auto px-4">
// // // // // // //         <div className="flex justify-between items-center">
// // // // // // //           <div className="md:hidden">
// // // // // // //             <MobileMenu />
// // // // // // //           </div>
// // // // // // //           <MainLogo />
// // // // // // //           <div className="md:hidden">
// // // // // // //             {/* Placeholder for right-side mobile element if needed */}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <NavMenu />
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // // // // // const Navbar = () => {
// // // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // // //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setIsScrolled(window.scrollY > 50);
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // //   }, []);

// // // // // //   const navItems = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       title: 'Birth control',
// // // // // //       dropdownItems: ['All methods', 'Quiz', 'Compare methods', 'Find a method']
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       title: 'Abortion',
// // // // // //       dropdownItems: ['Your options', 'Common questions', 'Cost', 'Support']
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       title: 'Sex & relationships',
// // // // // //       dropdownItems: ['Dating', 'Communication', 'LGBTQ+', 'Pleasure']
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       title: 'Sexual health & wellness',
// // // // // //       dropdownItems: ['STIs', 'Pregnancy', 'General health', 'Mental health']
// // // // // //     },
// // // // // //     {
// // // // // //       id: 5,
// // // // // //       title: 'Lifestyle & inspiration',
// // // // // //       dropdownItems: ['Entertainment', 'Stories', 'News', 'Resources']
// // // // // //     },
// // // // // //     {
// // // // // //       id: 6,
// // // // // //       title: 'Find health care',
// // // // // //       dropdownItems: ['Providers', 'Telehealth', 'Insurance', 'Free clinics']
// // // // // //     }
// // // // // //   ];

// // // // // //   const TopBar = () => (
// // // // // //     <div className="bg-[#d9f5f0] py-2.5">
// // // // // //       <div className="container mx-auto px-6">
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <div className="text-sm">
// // // // // //             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
// // // // // //             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
// // // // // //               Bedsider Providers
// // // // // //               <ExternalLink className="ml-1 h-3 w-3" />
// // // // // //             </a>
// // // // // //           </div>

// // // // // //           <div className="flex items-center space-x-6">
// // // // // //             <div className="text-sm">
// // // // // //               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// // // // // //               <span className="mx-2">|</span>
// // // // // //               <a href="#" className="text-[#333] hover:underline">Log In</a>
// // // // // //             </div>

// // // // // //             <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// // // // // //               español
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   const MainLogo = () => (
// // // // // //     <div className="flex justify-center py-8">
// // // // // //       <a href="#" className="flex flex-col items-center">
// // // // // //         <div className="text-[#333333] text-6xl font-bold tracking-wider">
// // // // // //           BEDSIDER
// // // // // //         </div>
// // // // // //         <div className="text-gray-500 text-sm italic mt-2">
// // // // // //           We've got you covered
// // // // // //         </div>
// // // // // //       </a>
// // // // // //     </div>
// // // // // //   );

// // // // // //   const NavItem = ({ title, children }) => {
// // // // // //     const [isHovered, setIsHovered] = useState(false);

// // // // // //     return (
// // // // // //       <div
// // // // // //         className="relative"
// // // // // //         onMouseEnter={() => setIsHovered(true)}
// // // // // //         onMouseLeave={() => setIsHovered(false)}
// // // // // //       >
// // // // // //         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-base">
// // // // // //           {title}
// // // // // //           <ChevronDown className="ml-1.5 h-4 w-4" />
// // // // // //         </button>

// // // // // //         <div className={`absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// // // // // //           isHovered
// // // // // //             ? 'opacity-100 max-h-96 transform scale-y-100'
// // // // // //             : 'opacity-0 max-h-0 transform scale-y-0 pointer-events-none'
// // // // // //         }`}>
// // // // // //           <div className="py-2">
// // // // // //             {children}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   };

// // // // // //   const DropdownItem = ({ title }) => (
// // // // // //     <a
// // // // // //       href="#"
// // // // // //       className="block px-6 py-2.5 text-[#333] hover:bg-[#f5f5f5] hover:text-[#0c9a8d] transition-colors text-base"
// // // // // //     >
// // // // // //       {title}
// // // // // //     </a>
// // // // // //   );

// // // // // //   const SearchBar = () => (
// // // // // //     <div className="relative flex items-center pl-4">
// // // // // //       {isSearchExpanded && (
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
// // // // // //           placeholder="Search..."
// // // // // //           autoFocus
// // // // // //           onBlur={() => setIsSearchExpanded(false)}
// // // // // //         />
// // // // // //       )}

// // // // // //       <button
// // // // // //         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
// // // // // //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// // // // // //       >
// // // // // //         <Search className="h-5 w-5" />
// // // // // //         <span className="ml-2 hidden md:inline-block text-base">Search</span>
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );

// // // // // //   const MobileMenu = () => (
// // // // // //     <div className="md:hidden">
// // // // // //       <button
// // // // // //         className="p-4 text-[#333]"
// // // // // //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // // //       >
// // // // // //         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// // // // // //       </button>

// // // // // //       {isMobileMenuOpen && (
// // // // // //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// // // // // //           <div className="container mx-auto px-6">
// // // // // //             <button
// // // // // //               className="absolute top-4 right-4 p-4 text-[#333]"
// // // // // //               onClick={() => setIsMobileMenuOpen(false)}
// // // // // //             >
// // // // // //               <X size={28} />
// // // // // //             </button>

// // // // // //             <div className="mt-6 border-t">
// // // // // //               {navItems.map(item => (
// // // // // //                 <div key={item.id} className="border-b">
// // // // // //                   <button
// // // // // //                     className="w-full py-5 px-4 flex justify-between items-center text-left"
// // // // // //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// // // // // //                   >
// // // // // //                     <span className="font-medium text-lg">{item.title}</span>
// // // // // //                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
// // // // // //                   </button>

// // // // // //                   {expandedItem === item.id && (
// // // // // //                     <div className="pb-4 pl-8">
// // // // // //                       {item.dropdownItems.map((dropdownItem, idx) => (
// // // // // //                         <a
// // // // // //                           key={idx}
// // // // // //                           href="#"
// // // // // //                           className="block py-3 text-[#333] hover:text-[#0c9a8d] text-base"
// // // // // //                         >
// // // // // //                           {dropdownItem}
// // // // // //                         </a>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <div className="mt-8 space-y-6">
// // // // // //               <div className="flex justify-center">
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] text-base"
// // // // // //                   placeholder="Search..."
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="flex justify-center space-x-6 text-base">
// // // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
// // // // // //                 <span>|</span>
// // // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
// // // // // //               </div>

// // // // // //               <div className="flex justify-center">
// // // // // //                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full text-base">
// // // // // //                   español
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );

// // // // // //   const NavMenu = () => (
// // // // // //     <div className="hidden md:block border-t border-b border-gray-200">
// // // // // //       <div className="container mx-auto px-6">
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <div className="flex">
// // // // // //             {navItems.slice(0, 5).map(item => (
// // // // // //               <NavItem key={item.id} title={item.title}>
// // // // // //                 {item.dropdownItems.map((dropdownItem, idx) => (
// // // // // //                   <DropdownItem key={idx} title={dropdownItem} />
// // // // // //                 ))}
// // // // // //               </NavItem>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //           <div className="flex items-center">
// // // // // //             <NavItem title={navItems[5].title}>
// // // // // //               {navItems[5].dropdownItems.map((dropdownItem, idx) => (
// // // // // //                 <DropdownItem key={idx} title={dropdownItem} />
// // // // // //               ))}
// // // // // //             </NavItem>
// // // // // //             <SearchBar />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <header className={`fixed top-0 left-0 right-0 z-40 bg-white ${
// // // // // //       isScrolled ? 'shadow-md' : ''
// // // // // //     } transition-shadow`}>
// // // // // //       <TopBar />
// // // // // //       <div className="container mx-auto px-6">
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <div className="md:hidden">
// // // // // //             <MobileMenu />
// // // // // //           </div>
// // // // // //           <div className="flex-1">
// // // // // //             <MainLogo />
// // // // // //           </div>
// // // // // //           <div className="md:hidden w-12">
// // // // // //             {/* Placeholder for right-side mobile element for balance */}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       <NavMenu />
// // // // // //     </header>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // // // // const Navbar = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);
// // // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // // //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setIsScrolled(window.scrollY > 50);
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // //   }, []);

// // // // //   const navItems = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: 'Birth control',
// // // // //       dropdownItems: ['Explore birth control options', 'Quiz', 'Compare methods', 'Find a method']
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: 'Abortion',
// // // // //       dropdownItems: ['Your options', 'Common questions', 'Cost', 'Support']
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: 'Sex & relationships',
// // // // //       dropdownItems: ['Dating', 'Communication', 'LGBTQ+', 'Pleasure']
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: 'Sexual health & wellness',
// // // // //       dropdownItems: ['STIs', 'Pregnancy', 'General health', 'Mental health']
// // // // //     },
// // // // //     {
// // // // //       id: 5,
// // // // //       title: 'Lifestyle & inspiration',
// // // // //       dropdownItems: ['Entertainment', 'Stories', 'News', 'Resources']
// // // // //     },
// // // // //     {
// // // // //       id: 6,
// // // // //       title: 'Find health care',
// // // // //       dropdownItems: ['Providers', 'Telehealth', 'Insurance', 'Free clinics']
// // // // //     }
// // // // //   ];

// // // // //   const TopBar = () => (
// // // // //     <div className="bg-[#d9f5f0] py-2.5">
// // // // //       <div className="container mx-auto px-6">
// // // // //         <div className="flex justify-between items-center">
// // // // //           <div className="text-sm">
// // // // //             <span className="hidden sm:inline-block">Are you a provider?  Visit </span>
// // // // //             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center ml-2">
// // // // //               Bedsider Providers
// // // // //               <ExternalLink className="ml-1 h-3 w-3" />
// // // // //             </a>
// // // // //           </div>

// // // // //           <div className="flex items-center space-x-6">
// // // // //             <div className="text-sm">
// // // // //               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// // // // //               <span className="mx-2">|</span>
// // // // //               <a href="#" className="text-[#333] hover:underline">Log In</a>
// // // // //             </div>

// // // // //             <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// // // // //               español
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   const MainLogo = () => (
// // // // //     <div className="flex justify-center py-8">
// // // // //       <a href="#" className="flex flex-col items-center">
// // // // //         <div className="text-[#333333] text-6xl font-bold tracking-wider">
// // // // //           BEDSIDER
// // // // //         </div>
// // // // //         <div className="text-gray-500 text-sm italic mt-2">
// // // // //           We've got you covered
// // // // //         </div>
// // // // //       </a>
// // // // //     </div>
// // // // //   );

// // // // //   const NavItem = ({ title, children }) => {
// // // // //     const [isHovered, setIsHovered] = useState(false);

// // // // //     return (
// // // // //       <div
// // // // //         className="relative"
// // // // //         onMouseEnter={() => setIsHovered(true)}
// // // // //         onMouseLeave={() => setIsHovered(false)}
// // // // //       >
// // // // //         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-base">
// // // // //           {title}
// // // // //           <ChevronDown className="ml-1.5 h-4 w-4" />
// // // // //         </button>

// // // // //         <div className={`absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// // // // //           isHovered
// // // // //             ? 'opacity-100 max-h-96 transform scale-y-100'
// // // // //             : 'opacity-0 max-h-0 transform scale-y-0 pointer-events-none'
// // // // //         }`}>
// // // // //           <div className="py-2">
// // // // //             {children}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   const DropdownItem = ({ title }) => (
// // // // //     <a
// // // // //       href="#"
// // // // //       className="block px-6 py-2.5 text-[#333] hover:bg-[#f5f5f5] hover:text-[#0c9a8d] transition-colors text-base"
// // // // //     >
// // // // //       {title}
// // // // //     </a>
// // // // //   );

// // // // //   const SearchBar = () => (
// // // // //     <div className="relative flex items-center pl-4">
// // // // //       {isSearchExpanded && (
// // // // //         <input
// // // // //           type="text"
// // // // //           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
// // // // //           placeholder="Search..."
// // // // //           autoFocus
// // // // //           onBlur={() => setIsSearchExpanded(false)}
// // // // //         />
// // // // //       )}

// // // // //       <button
// // // // //         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
// // // // //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// // // // //       >
// // // // //         <Search className="h-5 w-5" />
// // // // //         <span className="ml-2 hidden md:inline-block text-base">Search</span>
// // // // //       </button>
// // // // //     </div>
// // // // //   );

// // // // //   const MobileMenu = () => (
// // // // //     <div className="md:hidden">
// // // // //       <button
// // // // //         className="p-4 text-[#333]"
// // // // //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // // //       >
// // // // //         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// // // // //       </button>

// // // // //       {isMobileMenuOpen && (
// // // // //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// // // // //           <div className="container mx-auto px-6">
// // // // //             <button
// // // // //               className="absolute top-4 right-4 p-4 text-[#333]"
// // // // //               onClick={() => setIsMobileMenuOpen(false)}
// // // // //             >
// // // // //               <X size={28} />
// // // // //             </button>

// // // // //             <div className="mt-6 border-t">
// // // // //               {navItems.map(item => (
// // // // //                 <div key={item.id} className="border-b">
// // // // //                   <button
// // // // //                     className="w-full py-5 px-4 flex justify-between items-center text-left"
// // // // //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// // // // //                   >
// // // // //                     <span className="font-medium text-lg">{item.title}</span>
// // // // //                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
// // // // //                   </button>

// // // // //                   {expandedItem === item.id && (
// // // // //                     <div className="pb-4 pl-8">
// // // // //                       {item.dropdownItems.map((dropdownItem, idx) => (
// // // // //                         <a
// // // // //                           key={idx}
// // // // //                           href="#"
// // // // //                           className="block py-3 text-[#333] hover:text-[#0c9a8d] text-base"
// // // // //                         >
// // // // //                           {dropdownItem}
// // // // //                         </a>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="mt-8 space-y-6">
// // // // //               <div className="flex justify-center">
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] text-base"
// // // // //                   placeholder="Search..."
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="flex justify-center space-x-6 text-base">
// // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
// // // // //                 <span>|</span>
// // // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
// // // // //               </div>

// // // // //               <div className="flex justify-center">
// // // // //                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full text-base">
// // // // //                   español
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );

// // // // //   const NavMenu = () => (
// // // // //     <div className="hidden md:block border-t border-b border-gray-200">
// // // // //       <div className="container mx-auto px-6">
// // // // //         <div className="flex justify-between items-center">
// // // // //           <div className="flex">
// // // // //             {navItems.slice(0, 5).map(item => (
// // // // //               <NavItem key={item.id} title={item.title}>
// // // // //                 {item.dropdownItems.map((dropdownItem, idx) => (
// // // // //                   <DropdownItem key={idx} title={dropdownItem} />
// // // // //                 ))}
// // // // //               </NavItem>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="flex items-center">
// // // // //             <NavItem title={navItems[5].title}>
// // // // //               {navItems[5].dropdownItems.map((dropdownItem, idx) => (
// // // // //                 <DropdownItem key={idx} title={dropdownItem} />
// // // // //               ))}
// // // // //             </NavItem>
// // // // //             <SearchBar />
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // //   return (
// // // // //     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
// // // // //       <TopBar />
// // // // //       <div className="container mx-auto px-6">
// // // // //         <div className="flex justify-between items-center">
// // // // //           <div className="md:hidden">
// // // // //             <MobileMenu />
// // // // //           </div>
// // // // //           <div className="flex-1">
// // // // //             <MainLogo />
// // // // //           </div>
// // // // //           <div className="md:hidden w-12">
// // // // //             {/* Placeholder for right-side mobile element for balance */}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //       <NavMenu />
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState } from 'react';
// // // // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // // // const Navbar = () => {
// // // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // // //   const [expandedItem, setExpandedItem] = useState(null);
// // // //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// // // //   const navItems = [
// // // //     {
// // // //       id: 1,
// // // //       title: 'Birth control',
// // // //       leftColumn: [
// // // //         'Explore birth control options',
// // // //         'Compare birth control',
// // // //         'How to get birth control',
// // // //         'Birth control articles',
// // // //         'Birth control reviews',
// // // //       ],
// // // //       rightColumn: {
// // // //         title: 'BIRTH CONTROL TYPES',
// // // //         items: [
// // // //           'IUD (Intrauterine Device)',
// // // //           'Implant (Nexplanon)',
// // // //           'Birth control shot (Depo-Provera)',
// // // //           'Birth control ring',
// // // //           'Birth control patch',
// // // //           'Birth control pill',
// // // //           'Diaphragm',
// // // //           'Condom',
// // // //           'Internal condom (FC2)',
// // // //           'Cervical cap',
// // // //           'Fertility awareness methods',
// // // //           'Spermicide and gel',
// // // //           'Withdrawal (pull-out method)',
// // // //           'Sterilization',
// // // //           '"Not right now"',
// // // //           'Emergency contraception'
// // // //         ]
// // // //       }
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: 'Abortion',
// // // //       dropdownItems: ['Your options', 'Common questions', 'Cost', 'Support']
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: 'Sex & relationships',
// // // //       dropdownItems: ['Dating', 'Communication', 'LGBTQ+', 'Pleasure']
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: 'Sexual health & wellness',
// // // //       dropdownItems: ['STIs', 'Pregnancy', 'General health', 'Mental health']
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       title: 'Lifestyle & inspiration',
// // // //       dropdownItems: ['Entertainment', 'Stories', 'News', 'Resources']
// // // //     },
// // // //     {
// // // //       id: 6,
// // // //       title: 'Find health care',
// // // //       dropdownItems: ['Providers', 'Telehealth', 'Insurance', 'Free clinics']
// // // //     }
// // // //   ];

// // // //   const TopBar = () => (
// // // //     <div className="bg-[#d9f5f0] py-2.5">
// // // //       <div className="container mx-auto px-6">
// // // //         <div className="flex justify-between items-center">
// // // //           <div className="text-sm">
// // // //             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
// // // //             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
// // // //               Bedsider Providers
// // // //               <ExternalLink className="ml-1 h-3 w-3" />
// // // //             </a>
// // // //           </div>

// // // //           <div className="flex items-center space-x-6">
// // // //             <div className="text-sm">
// // // //               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// // // //               <span className="mx-2">|</span>
// // // //               <a href="#" className="text-[#333] hover:underline">Log In</a>
// // // //             </div>

// // // //             <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// // // //               español
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   const MainLogo = () => (
// // // //     <div className="flex justify-center py-8">
// // // //       <a href="#" className="flex flex-col items-center">
// // // //         <div className="text-[#333333] text-6xl font-bold tracking-wider">
// // // //           BEDSIDER
// // // //         </div>
// // // //         <div className="text-gray-500 text-sm italic mt-2">
// // // //           We've got you covered
// // // //         </div>
// // // //       </a>
// // // //     </div>
// // // //   );

// // // //   const NavItem = ({ item }) => {
// // // //     const [isHovered, setIsHovered] = useState(false);

// // // //     return (
// // // //       <div
// // // //         className="relative"
// // // //         onMouseEnter={() => setIsHovered(true)}
// // // //         onMouseLeave={() => setIsHovered(false)}
// // // //       >
// // // //         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-base">
// // // //           {item.title}
// // // //           <ChevronDown className="ml-1.5 h-4 w-4" />
// // // //         </button>

// // // //         <div className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// // // //           isHovered
// // // //             ? 'opacity-100 transform scale-y-100'
// // // //             : 'opacity-0 transform scale-y-0 pointer-events-none'
// // // //         }`}>
// // // //           {item.id === 1 ? (
// // // //             <div className="flex min-w-[800px]">
// // // //               <div className="w-1/3 bg-[#f8f8f8] py-4">
// // // //                 {item.leftColumn.map((link, idx) => (
// // // //                   <a
// // // //                     key={idx}
// // // //                     href="#"
// // // //                     className={`block px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors ${
// // // //                       idx === item.leftColumn.length - 1 ? 'italic' : ''
// // // //                     }`}
// // // //                   >
// // // //                     {link}
// // // //                   </a>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="w-2/3 py-4">
// // // //                 <h3 className="px-6 py-2 text-sm font-semibold text-gray-500">
// // // //                   {item.rightColumn.title}
// // // //                 </h3>
// // // //                 <div className="grid grid-cols-2 gap-x-4">
// // // //                   {item.rightColumn.items.map((method, idx) => (
// // // //                     <a
// // // //                       key={idx}
// // // //                       href="#"
// // // //                       className="px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
// // // //                     >
// // // //                       {method}
// // // //                     </a>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="py-2 w-64">
// // // //               {item.dropdownItems.map((item, idx) => (
// // // //                 <a
// // // //                   key={idx}
// // // //                   href="#"
// // // //                   className="block px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
// // // //                 >
// // // //                   {item}
// // // //                 </a>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   const SearchBar = () => (
// // // //     <div className="relative flex items-center pl-4">
// // // //       {isSearchExpanded && (
// // // //         <input
// // // //           type="text"
// // // //           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
// // // //           placeholder="Search..."
// // // //           autoFocus
// // // //           onBlur={() => setIsSearchExpanded(false)}
// // // //         />
// // // //       )}

// // // //       <button
// // // //         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
// // // //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// // // //       >
// // // //         <Search className="h-5 w-5" />
// // // //         <span className="ml-2 hidden md:inline-block text-base">Search</span>
// // // //       </button>
// // // //     </div>
// // // //   );

// // // //   const MobileMenu = () => (
// // // //     <div className="md:hidden">
// // // //       <button
// // // //         className="p-4 text-[#333]"
// // // //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // // //       >
// // // //         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// // // //       </button>

// // // //       {isMobileMenuOpen && (
// // // //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// // // //           <div className="container mx-auto px-6">
// // // //             <button
// // // //               className="absolute top-4 right-4 p-4 text-[#333]"
// // // //               onClick={() => setIsMobileMenuOpen(false)}
// // // //             >
// // // //               <X size={28} />
// // // //             </button>

// // // //             <div className="mt-6 border-t">
// // // //               {navItems.map(item => (
// // // //                 <div key={item.id} className="border-b">
// // // //                   <button
// // // //                     className="w-full py-5 px-4 flex justify-between items-center text-left"
// // // //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// // // //                   >
// // // //                     <span className="font-medium text-lg">{item.title}</span>
// // // //                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
// // // //                   </button>

// // // //                   {expandedItem === item.id && (
// // // //                     <div className="pb-4 pl-8">
// // // //                       {item.id === 1 ? (
// // // //                         <>
// // // //                           {item.leftColumn.map((link, idx) => (
// // // //                             <a
// // // //                               key={idx}
// // // //                               href="#"
// // // //                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
// // // //                             >
// // // //                               {link}
// // // //                             </a>
// // // //                           ))}
// // // //                           <h3 className="font-semibold mt-4 mb-2 text-gray-500">
// // // //                             {item.rightColumn.title}
// // // //                           </h3>
// // // //                           {item.rightColumn.items.map((method, idx) => (
// // // //                             <a
// // // //                               key={idx}
// // // //                               href="#"
// // // //                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
// // // //                             >
// // // //                               {method}
// // // //                             </a>
// // // //                           ))}
// // // //                         </>
// // // //                       ) : (
// // // //                         item.dropdownItems.map((dropdownItem, idx) => (
// // // //                           <a
// // // //                             key={idx}
// // // //                             href="#"
// // // //                             className="block py-3 text-[#333] hover:text-[#0c9a8d]"
// // // //                           >
// // // //                             {dropdownItem}
// // // //                           </a>
// // // //                         ))
// // // //                       )}
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="mt-8 space-y-6">
// // // //               <div className="flex justify-center">
// // // //                 <input
// // // //                   type="text"
// // // //                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
// // // //                   placeholder="Search..."
// // // //                 />
// // // //               </div>

// // // //               <div className="flex justify-center space-x-6">
// // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
// // // //                 <span>|</span>
// // // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
// // // //               </div>

// // // //               <div className="flex justify-center">
// // // //                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full">
// // // //                   español
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );

// // // //   const NavMenu = () => (
// // // //     <div className="hidden md:block border-t border-b border-gray-200">
// // // //       <div className="container mx-auto px-6">
// // // //         <div className="flex justify-between items-center">
// // // //           <div className="flex">
// // // //             {navItems.slice(0, 5).map(item => (
// // // //               <NavItem key={item.id} item={item} />
// // // //             ))}
// // // //           </div>

// // // //           <div className="flex items-center">
// // // //             <NavItem item={navItems[5]} />
// // // //             <SearchBar />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
// // // //       <TopBar />
// // // //       <div className="container mx-auto px-6">
// // // //         <div className="flex justify-between items-center">
// // // //           <div className="md:hidden">
// // // //             <MobileMenu />
// // // //           </div>
// // // //           <div className="flex-1">
// // // //             <MainLogo />
// // // //           </div>
// // // //           <div className="md:hidden w-12">
// // // //             {/* Placeholder for right-side mobile element for balance */}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //       <NavMenu />
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // import React, { useState } from 'react';
// // // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // // const Navbar = () => {
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [expandedItem, setExpandedItem] = useState(null);
// // //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// // //   const navItems = [
// // //     {
// // //       id: 1,
// // //       title: 'Birth control',
// // //       leftColumn: [
// // //         'Explore birth control options',
// // //         'Compare birth control',
// // //         'How to get birth control',
// // //         'Birth control articles',
// // //         'Birth control reviews',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'BIRTH CONTROL TYPES',
// // //         items: [
// // //           'IUD (Intrauterine Device)',
// // //           'Implant (Nexplanon)',
// // //           'Birth control shot (Depo-Provera)',
// // //           'Birth control ring',
// // //           'Birth control patch',
// // //           'Birth control pill',
// // //           'Diaphragm',
// // //           'Condom',
// // //           'Internal condom (FC2)',
// // //           'Cervical cap',
// // //           'Fertility awareness methods',
// // //           'Spermicide and gel',
// // //           'Withdrawal (pull-out method)',
// // //           'Sterilization',
// // //           '"Not right now"',
// // //           'Emergency contraception'
// // //         ]
// // //       }
// // //     },
// // //     {
// // //       id: 2,
// // //       title: 'Abortion',
// // //       leftColumn: [
// // //         'Understanding abortion',
// // //         'Types of abortion',
// // //         'Cost & insurance',
// // //         'Finding a provider',
// // //         'Support & resources',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'ABORTION INFORMATION',
// // //         items: [
// // //           'Medical abortion',
// // //           'Surgical abortion',
// // //           'State laws & restrictions',
// // //           'Insurance coverage',
// // //           'Financial assistance',
// // //           'Emotional support',
// // //           'Recovery & aftercare',
// // //           'Common questions',
// // //           'Legal rights',
// // //           'Counseling services'
// // //         ]
// // //       }
// // //     },
// // //     {
// // //       id: 3,
// // //       title: 'Sex & relationships',
// // //       leftColumn: [
// // //         'Dating & relationships',
// // //         'Communication tips',
// // //         'Sexual health',
// // //         'LGBTQ+ resources',
// // //         'Relationship advice',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'TOPICS & RESOURCES',
// // //         items: [
// // //           'Healthy relationships',
// // //           'Dating safety',
// // //           'Consent & boundaries',
// // //           'Sexual pleasure',
// // //           'Gender identity',
// // //           'Sexual orientation',
// // //           'Communication skills',
// // //           'Dating apps & online',
// // //           'Relationship counseling',
// // //           'Support groups'
// // //         ]
// // //       }
// // //     },
// // //     {
// // //       id: 4,
// // //       title: 'Sexual health & wellness',
// // //       leftColumn: [
// // //         'STI prevention',
// // //         'Testing & treatment',
// // //         'Reproductive health',
// // //         'Mental health',
// // //         'General wellness',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'HEALTH RESOURCES',
// // //         items: [
// // //           'STI symptoms & testing',
// // //           'Prevention methods',
// // //           'Treatment options',
// // //           'Regular checkups',
// // //           'Menstrual health',
// // //           'Pregnancy testing',
// // //           'Mental health support',
// // //           'Body image',
// // //           'Sexual wellness',
// // //           'Healthcare access'
// // //         ]
// // //       }
// // //     },
// // //     {
// // //       id: 5,
// // //       title: 'Lifestyle & inspiration',
// // //       leftColumn: [
// // //         'Personal stories',
// // //         'News & updates',
// // //         'Community support',
// // //         'Educational resources',
// // //         'Events & activities',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'FEATURED CONTENT',
// // //         items: [
// // //           'Success stories',
// // //           'Latest articles',
// // //           'Research updates',
// // //           'Community events',
// // //           'Educational videos',
// // //           'Podcasts',
// // //           'Blog posts',
// // //           'Expert interviews',
// // //           'Resource library',
// // //           'Support network'
// // //         ]
// // //       }
// // //     },
// // //     {
// // //       id: 6,
// // //       title: 'Find health care',
// // //       leftColumn: [
// // //         'Find a provider',
// // //         'Insurance information',
// // //         'Telehealth options',
// // //         'Cost & payment',
// // //         'Appointment help',
// // //         'View all'
// // //       ],
// // //       rightColumn: {
// // //         title: 'HEALTHCARE OPTIONS',
// // //         items: [
// // //           'Local clinics',
// // //           'Telehealth services',
// // //           'Insurance coverage',
// // //           'Payment assistance',
// // //           'Emergency care',
// // //           'Specialist referrals',
// // //           'Free clinics',
// // //           'Student health',
// // //           'Provider reviews',
// // //           'Transportation help'
// // //         ]
// // //       }
// // //     }
// // //   ];

// // //   const TopBar = () => (
// // //     <div className="bg-[#d9f5f0] py-2.5">
// // //       <div className="container mx-auto px-6">
// // //         <div className="flex justify-between items-center">
// // //           <div className="text-sm">
// // //             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
// // //             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
// // //               Bedsider Providers
// // //               <ExternalLink className="ml-1 h-3 w-3" />
// // //             </a>
// // //           </div>

// // //           <div className="flex items-center space-x-6">
// // //             <div className="text-sm">
// // //               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// // //               <span className="mx-2">|</span>
// // //               <a href="#" className="text-[#333] hover:underline">Log In</a>
// // //             </div>

// // //             <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// // //               español
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   const MainLogo = () => (
// // //     <div className="flex justify-center py-8">
// // //       <a href="#" className="flex flex-col items-center">
// // //         <div className="text-[#333333] text-6xl font-bold tracking-wider">
// // //           BEDSIDER
// // //         </div>
// // //         <div className="text-gray-500 text-sm italic mt-2">
// // //           We've got you covered
// // //         </div>
// // //       </a>
// // //     </div>
// // //   );

// // //   const NavItem = ({ item }) => {
// // //     const [isHovered, setIsHovered] = useState(false);

// // //     return (
// // //       <div
// // //         className="relative"
// // //         onMouseEnter={() => setIsHovered(true)}
// // //         onMouseLeave={() => setIsHovered(false)}
// // //       >
// // //         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-base">
// // //           {item.title}
// // //           <ChevronDown className="ml-1.5 h-4 w-4" />
// // //         </button>

// // //         <div className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// // //           isHovered
// // //             ? 'opacity-100 transform scale-y-100'
// // //             : 'opacity-0 transform scale-y-0 pointer-events-none'
// // //         }`}>
// // //           <div className="flex min-w-[800px]">
// // //             <div className="w-1/3 bg-[#f8f8f8] py-4">
// // //               {item.leftColumn.map((link, idx) => (
// // //                 <a
// // //                   key={idx}
// // //                   href="#"
// // //                   className={`block px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors ${
// // //                     idx === item.leftColumn.length - 1 ? 'italic' : ''
// // //                   }`}
// // //                 >
// // //                   {link}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //             <div className="w-2/3 py-4">
// // //               <h3 className="px-6 py-2 text-sm font-semibold text-gray-500">
// // //                 {item.rightColumn.title}
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-x-4">
// // //                 {item.rightColumn.items.map((method, idx) => (
// // //                   <a
// // //                     key={idx}
// // //                     href="#"
// // //                     className="px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
// // //                   >
// // //                     {method}
// // //                   </a>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const SearchBar = () => (
// // //     <div className="relative flex items-center pl-4">
// // //       {isSearchExpanded && (
// // //         <input
// // //           type="text"
// // //           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
// // //           placeholder="Search..."
// // //           autoFocus
// // //           onBlur={() => setIsSearchExpanded(false)}
// // //         />
// // //       )}

// // //       <button
// // //         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
// // //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// // //       >
// // //         <Search className="h-5 w-5" />
// // //         <span className="ml-2 hidden md:inline-block text-base">Search</span>
// // //       </button>
// // //     </div>
// // //   );

// // //   const MobileMenu = () => (
// // //     <div className="md:hidden">
// // //       <button
// // //         className="p-4 text-[#333]"
// // //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // //       >
// // //         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// // //       </button>

// // //       {isMobileMenuOpen && (
// // //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// // //           <div className="container mx-auto px-6">
// // //             <button
// // //               className="absolute top-4 right-4 p-4 text-[#333]"
// // //               onClick={() => setIsMobileMenuOpen(false)}
// // //             >
// // //               <X size={28} />
// // //             </button>

// // //             <div className="mt-6 border-t">
// // //               {navItems.map(item => (
// // //                 <div key={item.id} className="border-b">
// // //                   <button
// // //                     className="w-full py-5 px-4 flex justify-between items-center text-left"
// // //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// // //                   >
// // //                     <span className="font-medium text-lg">{item.title}</span>
// // //                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
// // //                   </button>

// // //                   {expandedItem === item.id && (
// // //                     <div className="pb-4 pl-8">
// // //                       {item.leftColumn.map((link, idx) => (
// // //                         <a
// // //                           key={idx}
// // //                           href="#"
// // //                           className="block py-3 text-[#333] hover:text-[#0c9a8d]"
// // //                         >
// // //                           {link}
// // //                         </a>
// // //                       ))}
// // //                       <h3 className="font-semibold mt-4 mb-2 text-gray-500">
// // //                         {item.rightColumn.title}
// // //                       </h3>
// // //                       {item.rightColumn.items.map((method, idx) => (
// // //                         <a
// // //                           key={idx}
// // //                           href="#"
// // //                           className="block py-3 text-[#333] hover:text-[#0c9a8d]"
// // //                         >
// // //                           {method}
// // //                         </a>
// // //                       ))}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="mt-8 space-y-6">
// // //               <div className="flex justify-center">
// // //                 <input
// // //                   type="text"
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
// // //                   placeholder="Search..."
// // //                 />
// // //               </div>

// // //               <div className="flex justify-center space-x-6">
// // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
// // //                 <span>|</span>
// // //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
// // //               </div>

// // //               <div className="flex justify-center">
// // //                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full">
// // //                   español
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );

// // //   const NavMenu = () => (
// // //     <div className="hidden md:block border-t border-b border-gray-200">
// // //       <div className="container mx-auto px-6">
// // //         <div className="flex justify-between items-center">
// // //           <div className="flex">
// // //             {navItems.slice(0, 5).map(item => (
// // //               <NavItem key={item.id} item={item} />
// // //             ))}
// // //           </div>

// // //           <div className="flex items-center">
// // //             <NavItem item={navItems[5]} />
// // //             <SearchBar />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
// // //       <TopBar />
// // //       <div className="container mx-auto px-6">
// // //         <div className="flex justify-between items-center">
// // //           <div className="md:hidden">
// // //             <MobileMenu />
// // //           </div>
// // //           <div className="flex-1">
// // //             <MainLogo />
// // //           </div>
// // //           <div className="md:hidden w-12">
// // //             {/* Placeholder for right-side mobile element for balance */}
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <NavMenu />
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState } from 'react';
// // import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// // const Navbar = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [expandedItem, setExpandedItem] = useState(null);
// //   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

// //   const navItems = [
// //     {
// //       id: 1,
// //       title: 'Birth control',
// //       leftColumn: [
// //         'Explore birth control options',
// //         'Compare birth control',
// //         'How to get birth control',
// //         'Birth control articles',
// //         'Birth control reviews',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'BIRTH CONTROL TYPES',
// //         items: [
// //           'IUD (Intrauterine Device)',
// //           'Implant (Nexplanon)',
// //           'Birth control shot (Depo-Provera)',
// //           'Birth control ring',
// //           'Birth control patch',
// //           'Birth control pill',
// //           'Diaphragm',
// //           'Condom',
// //           'Internal condom (FC2)',
// //           'Cervical cap',
// //           'Fertility awareness methods',
// //           'Spermicide and gel',
// //           'Withdrawal (pull-out method)',
// //           'Sterilization',
// //           '"Not right now"',
// //           'Emergency contraception'
// //         ]
// //       }
// //     },
// //     {
// //       id: 2,
// //       title: 'Abortion',
// //       leftColumn: [
// //         'Understanding abortion',
// //         'Types of abortion',
// //         'Cost & insurance',
// //         'Finding a provider',
// //         'Support & resources',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'ABORTION INFORMATION',
// //         items: [
// //           'Medical abortion',
// //           'Surgical abortion',
// //           'State laws & restrictions',
// //           'Insurance coverage',
// //           'Financial assistance',
// //           'Emotional support',
// //           'Recovery & aftercare',
// //           'Common questions',
// //           'Legal rights',
// //           'Counseling services'
// //         ]
// //       }
// //     },
// //     {
// //       id: 3,
// //       title: 'Sex & relationships',
// //       leftColumn: [
// //         'Dating & relationships',
// //         'Communication tips',
// //         'Sexual health',
// //         'LGBTQ+ resources',
// //         'Relationship advice',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'TOPICS & RESOURCES',
// //         items: [
// //           'Healthy relationships',
// //           'Dating safety',
// //           'Consent & boundaries',
// //           'Sexual pleasure',
// //           'Gender identity',
// //           'Sexual orientation',
// //           'Communication skills',
// //           'Dating apps & online',
// //           'Relationship counseling',
// //           'Support groups'
// //         ]
// //       }
// //     },
// //     {
// //       id: 4,
// //       title: 'Sexual health & wellness',
// //       leftColumn: [
// //         'STI prevention',
// //         'Testing & treatment',
// //         'Reproductive health',
// //         'Mental health',
// //         'General wellness',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'HEALTH RESOURCES',
// //         items: [
// //           'STI symptoms & testing',
// //           'Prevention methods',
// //           'Treatment options',
// //           'Regular checkups',
// //           'Menstrual health',
// //           'Pregnancy testing',
// //           'Mental health support',
// //           'Body image',
// //           'Sexual wellness',
// //           'Healthcare access'
// //         ]
// //       }
// //     },
// //     {
// //       id: 5,
// //       title: 'Lifestyle & inspiration',
// //       leftColumn: [
// //         'Personal stories',
// //         'News & updates',
// //         'Community support',
// //         'Educational resources',
// //         'Events & activities',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'FEATURED CONTENT',
// //         items: [
// //           'Success stories',
// //           'Latest articles',
// //           'Research updates',
// //           'Community events',
// //           'Educational videos',
// //           'Podcasts',
// //           'Blog posts',
// //           'Expert interviews',
// //           'Resource library',
// //           'Support network'
// //         ]
// //       }
// //     },
// //     {
// //       id: 6,
// //       title: 'Find health care',
// //       leftColumn: [
// //         'Find a provider',
// //         'Insurance information',
// //         'Telehealth options',
// //         'Cost & payment',
// //         'Appointment help',
// //         'View all'
// //       ],
// //       rightColumn: {
// //         title: 'HEALTHCARE OPTIONS',
// //         items: [
// //           'Local clinics',
// //           'Telehealth services',
// //           'Insurance coverage',
// //           'Payment assistance',
// //           'Emergency care',
// //           'Specialist referrals',
// //           'Free clinics',
// //           'Student health',
// //           'Provider reviews',
// //           'Transportation help'
// //         ]
// //       }
// //     }
// //   ];

// //   const TopBar = () => (
// //     <div className="bg-[#d9f5f0] py-2.5">
// //       <div className="container mx-auto px-4 lg:px-6">
// //         <div className="flex justify-between items-center">
// //           <div className="text-sm">
// //             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
// //             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
// //               Bedsider Providers
// //               <ExternalLink className="ml-1 h-3 w-3" />
// //             </a>
// //           </div>

// //           <div className="flex items-center space-x-4 lg:space-x-6">
// //             <div className="text-sm">
// //               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
// //               <span className="mx-2">|</span>
// //               <a href="#" className="text-[#333] hover:underline">Log In</a>
// //             </div>

// //             <button className="bg-[#0c9a8d] text-white px-3 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
// //               español
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const MainLogo = () => (
// //     <div className="flex justify-center py-6 lg:py-8">
// //       <a href="#" className="flex flex-col items-center">
// //         <div className="text-[#333333] text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
// //           BEDSIDER
// //         </div>
// //         <div className="text-gray-500 text-sm italic mt-1 lg:mt-2">
// //           We've got you covered
// //         </div>
// //       </a>
// //     </div>
// //   );

// //   const NavItem = ({ item }) => {
// //     const [isHovered, setIsHovered] = useState(false);

// //     return (
// //       <div
// //         className="relative"
// //         onMouseEnter={() => setIsHovered(true)}
// //         onMouseLeave={() => setIsHovered(false)}
// //       >
// //         <button className="flex items-center px-2 md:px-3 lg:px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-sm lg:text-base whitespace-nowrap">
// //           {item.title}
// //           <ChevronDown className="ml-1 h-4 w-4" />
// //         </button>

// //         <div className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
// //           isHovered
// //             ? 'opacity-100 transform scale-y-100'
// //             : 'opacity-0 transform scale-y-0 pointer-events-none'
// //         }`}>
// //           <div className="flex md:min-w-[600px] lg:min-w-[800px]">
// //             <div className="w-1/3 bg-[#f8f8f8] py-4">
// //               {item.leftColumn.map((link, idx) => (
// //                 <a
// //                   key={idx}
// //                   href="#"
// //                   className={`block px-4 lg:px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors text-sm lg:text-base ${
// //                     idx === item.leftColumn.length - 1 ? 'italic' : ''
// //                   }`}
// //                 >
// //                   {link}
// //                 </a>
// //               ))}
// //             </div>
// //             <div className="w-2/3 py-4">
// //               <h3 className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-semibold text-gray-500">
// //                 {item.rightColumn.title}
// //               </h3>
// //               <div className="grid grid-cols-2 gap-x-2 lg:gap-x-4">
// //                 {item.rightColumn.items.map((method, idx) => (
// //                   <a
// //                     key={idx}
// //                     href="#"
// //                     className="px-4 lg:px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors text-sm lg:text-base"
// //                   >
// //                     {method}
// //                   </a>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   const SearchBar = () => (
// //     <div className="relative flex items-center pl-2 lg:pl-4">
// //       {isSearchExpanded && (
// //         <input
// //           type="text"
// //           className="w-36 md:w-40 lg:w-48 px-3 lg:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300 text-sm lg:text-base"
// //           placeholder="Search..."
// //           autoFocus
// //           onBlur={() => setIsSearchExpanded(false)}
// //         />
// //       )}

// //       <button
// //         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
// //         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
// //       >
// //         <Search className="h-4 lg:h-5 w-4 lg:w-5" />
// //         <span className="ml-2 hidden md:inline-block text-sm lg:text-base">Search</span>
// //       </button>
// //     </div>
// //   );

// //   const MobileMenu = () => (
// //     <div className="lg:hidden">
// //       <button
// //         className="p-4 text-[#333]"
// //         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //       >
// //         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //       </button>

// //       {isMobileMenuOpen && (
// //         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
// //           <div className="container mx-auto px-4 md:px-6">
// //             <button
// //               className="absolute top-4 right-4 p-4 text-[#333]"
// //               onClick={() => setIsMobileMenuOpen(false)}
// //             >
// //               <X size={24} />
// //             </button>

// //             <div className="mt-6 border-t">
// //               {navItems.map(item => (
// //                 <div key={item.id} className="border-b">
// //                   <button
// //                     className="w-full py-4 md:py-5 px-4 flex justify-between items-center text-left"
// //                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
// //                   >
// //                     <span className="font-medium text-base md:text-lg">{item.title}</span>
// //                     {expandedItem === item.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
// //                   </button>

// //                   {expandedItem === item.id && (
// //                     <div className="pb-4 pl-6 md:pl-8">
// //                       {item.leftColumn.map((link, idx) => (
// //                         <a
// //                           key={idx}
// //                           href="#"
// //                           className="block py-2.5 md:py-3 text-[#333] hover:text-[#0c9a8d] text-sm md:text-base"
// //                         >
// //                           {link}
// //                         </a>
// //                       ))}
// //                       <h3 className="font-semibold mt-4 mb-2 text-gray-500 text-sm md:text-base">
// //                         {item.rightColumn.title}
// //                       </h3>
// //                       {item.rightColumn.items.map((method, idx) => (
// //                         <a
// //                           key={idx}
// //                           href="#"
// //                           className="block py-2.5 md:py-3 text-[#333] hover:text-[#0c9a8d] text-sm md:text-base"
// //                         >
// //                           {method}
// //                         </a>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-8 space-y-6">
// //               <div className="flex justify-center">
// //                 <input
// //                   type="text"
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] text-sm md:text-base"
// //                   placeholder="Search..."
// //                 />
// //               </div>

// //               <div className="flex justify-center space-x-6">
// //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d] text-sm md:text-base">Sign Up</a>
// //                 <span>|</span>
// //                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d] text-sm md:text-base">Log In</a>
// //               </div>

// //               <div className="flex justify-center">
// //                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full text-sm md:text-base">
// //                   español
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );

// //   const NavMenu = () => (
// //     <div className="hidden md:block border-t border-b border-gray-200">
// //       <div className="container mx-auto px-4 lg:px-6">
// //         <div className="flex justify-between items-center">
// //           <div className="flex">
// //             {navItems.slice(0, 5).map(item => (
// //               <NavItem key={item.id} item={item} />
// //             ))}
// //           </div>

// //           <div className="flex items-center">
// //             <NavItem item={navItems[5]} />
// //             <SearchBar />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
// //       <TopBar />
// //       <div className="container mx-auto px-4 lg:px-6">
// //         <div className="flex justify-between items-center">
// //           <div className="lg:hidden">
// //             <MobileMenu />
// //           </div>
// //           <div className="flex-1">
// //             <MainLogo />
// //           </div>
// //           <div className="lg:hidden w-12">
// //             {/* Placeholder for right-side mobile element for balance */}
// //           </div>
// //         </div>
// //       </div>
// //       <NavMenu />
// //     </header>
// //   );
// // };

// // export default Navbar;

// import React, { useState } from 'react';
// import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

//   const navItems = [
//     {
//       id: 1,
//       title: 'Birth control',
//       leftColumn: [
//         'Explore birth control options',
//         'Compare birth control',
//         'How to get birth control',
//         'Birth control articles',
//         'Birth control reviews',
//         'View all'
//       ],
//       rightColumn: {
//         title: 'BIRTH CONTROL TYPES',
//         items: [
//           'IUD (Intrauterine Device)',
//           'Implant (Nexplanon)',
//           'Birth control shot (Depo-Provera)',
//           'Birth control ring',
//           'Birth control patch',
//           'Birth control pill',
//           'Diaphragm',
//           'Condom',
//           'Internal condom (FC2)',
//           'Cervical cap',
//           'Fertility awareness methods',
//           'Spermicide and gel',
//           'Withdrawal (pull-out method)',
//           'Sterilization',
//           '"Not right now"',
//           'Emergency contraception'
//         ]
//       }
//     },
//     {
//       id: 2,
//       title: 'Abortion',
//       leftColumn: [
//         'Understanding abortion',
//         'Types of abortion',
//         'Cost & insurance',
//         'Finding a provider',
//         'Support & resources',
//         'View all'
//       ],
//       rightColumn: {
//         title: 'ABORTION INFORMATION',
//         items: [
//           'Medical abortion',
//           'Surgical abortion',
//           'State laws & restrictions',
//           'Insurance coverage',
//           'Financial assistance',
//           'Emotional support',
//           'Recovery & aftercare',
//           'Common questions',
//           'Legal rights',
//           'Counseling services'
//         ]
//       }
//     },
//     {
//       id: 3,
//       title: 'Sex & relationships',
//       leftColumn: [
//         'Dating & relationships',
//         'Communication tips',
//         'Sexual health',
//         'LGBTQ+ resources',
//         'Relationship advice',
//         'View all'
//       ],
//       rightColumn: {
//         title: 'TOPICS & RESOURCES',
//         items: [
//           'Healthy relationships',
//           'Dating safety',
//           'Consent & boundaries',
//           'Sexual pleasure',
//           'Gender identity',
//           'Sexual orientation',
//           'Communication skills',
//           'Dating apps & online',
//           'Relationship counseling',
//           'Support groups'
//         ]
//       }
//     },
//     {
//       id: 4,
//       title: 'Sexual health & wellness',
//       leftColumn: [
//         'STI prevention',
//         'Testing & treatment',
//         'Reproductive health',
//         'Mental health',
//         'General wellness',
//         'View all'
//       ],
//       rightColumn: {
//         title: '',
//         items: [

//         ]
//       }
//     },
//     {
//       id: 5,
//       title: 'Lifestyle & inspiration',
//       leftColumn: [
//         'Personal stories',
//         'News & updates',
//         'Community support',
//         'Educational resources',
//         'Events & activities',
//         'View all'
//       ],
//       rightColumn: {
//         title: 'FEATURED CONTENT',
//         items: [
//           'Success stories',
//           'Latest articles',
//           'Research updates',
//           'Community events',
//           'Educational videos',
//           'Podcasts',
//           'Blog posts',
//           'Expert interviews',
//           'Resource library',
//           'Support network'
//         ]
//       }
//     },
//     {
//       id: 6,
//       title: 'Find health care',
//       leftColumn: [
//         'Find a provider',
//         'Insurance information',
//         'Telehealth options',
//         'Cost & payment',
//         'Appointment help',
//         'View all'
//       ],
//       rightColumn: {
//         title: 'HEALTHCARE OPTIONS',
//         items: [
//           'Local clinics',
//           'Telehealth services',
//           'Insurance coverage',
//           'Payment assistance',
//           'Emergency care',
//           'Specialist referrals',
//           'Free clinics',
//           'Student health',
//           'Provider reviews',
//           'Transportation help'
//         ]
//       }
//     }
//   ];

//   const TopBar = () => (
//     <div className="bg-[#d9f5f0] py-2.5">
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center">
//           <div className="text-sm">
//             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
//             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
//               Bedsider Providers
//               <ExternalLink className="ml-1 h-3 w-3" />
//             </a>
//           </div>

//           <div className="flex items-center space-x-4 lg:space-x-6">
//             <div className="text-sm">
//               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="text-[#333] hover:underline">Log In</a>
//             </div>

//             <button className="bg-[#0c9a8d] text-white px-3 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
//               español
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const MainLogo = () => (
//     <div className="flex justify-center py-6 lg:py-8">
//       <a href="#" className="flex flex-col items-center">
//         <div className="text-[#333333] text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
//           BEDSIDER
//         </div>
//         <div className="text-gray-500 text-sm italic mt-1 lg:mt-2">
//           We've got you covered
//         </div>
//       </a>
//     </div>
//   );

//   const NavItem = ({ item }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <div
//         className="relative group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button className="flex items-center px-2 md:px-3 lg:px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-sm lg:text-base whitespace-nowrap group-hover:text-[#0c9a8d]">
//           {item.title}
//           <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//         </button>

//         <div
//           className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 transform ${
//             isHovered
//               ? 'opacity-100 scale-y-100 translate-y-0'
//               : 'opacity-0 scale-y-95 translate-y-2 pointer-events-none'
//           }`}
//         >
//           <div className="flex md:min-w-[600px] lg:min-w-[800px]">
//             <div className="w-1/3 bg-[#f8f8f8] py-4">
//               {item.leftColumn.map((link, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className={`block px-4 lg:px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors text-sm lg:text-base ${
//                     idx === item.leftColumn.length - 1 ? 'italic' : ''
//                   }`}
//                 >
//                   {link}
//                 </a>
//               ))}
//             </div>
//             <div className="w-2/3 py-4">
//               <h3 className="px-4 lg:px-6 py-2 text-xs lg:text-sm font-semibold text-gray-500">
//                 {item.rightColumn.title}
//               </h3>
//               <div className="grid grid-cols-2 gap-x-2 lg:gap-x-4">
//                 {item.rightColumn.items.map((method, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className="px-4 lg:px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors text-sm lg:text-base"
//                   >
//                     {method}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SearchBar = () => (
//     <div className="relative flex items-center pl-2 lg:pl-4">
//       <div className={`transition-all duration-300 ${isSearchExpanded ? 'w-36 md:w-40 lg:w-48' : 'w-0'}`}>
//         {isSearchExpanded && (
//           <input
//             type="text"
//             className="w-full px-3 lg:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300 text-sm lg:text-base"
//             placeholder="Search..."
//             autoFocus
//             onBlur={() => setIsSearchExpanded(false)}
//           />
//         )}
//       </div>

//       <button
//         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
//         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
//       >
//         <Search className="h-4 lg:h-5 w-4 lg:w-5" />
//         <span className="ml-2 hidden md:inline-block text-sm lg:text-base">Search</span>
//       </button>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="lg:hidden">
//       <button
//         className="p-4 text-[#333] hover:text-[#0c9a8d] transition-colors"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       <div
//         className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
//           isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
//         }`}
//       >
//         <div className="container mx-auto px-4 md:px-6 h-full overflow-y-auto">
//           <div className="flex justify-end pt-4">
//             <button
//               className="p-4 text-[#333] hover:text-[#0c9a8d] transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X size={24} />
//             </button>
//           </div>

//           <div className="mt-6 border-t">
//             {navItems.map(item => (
//               <div key={item.id} className="border-b">
//                 <button
//                   className="w-full py-4 md:py-5 px-4 flex justify-between items-center text-left group"
//                   onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
//                 >
//                   <span className="font-medium text-base md:text-lg group-hover:text-[#0c9a8d] transition-colors">
//                     {item.title}
//                   </span>
//                   <div className={`transition-transform duration-200 ${expandedItem === item.id ? 'rotate-180' : ''}`}>
//                     <ChevronDown size={20} />
//                   </div>
//                 </button>

//                 <div
//                   className={`overflow-hidden transition-all duration-300 ${
//                     expandedItem === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="pb-4 pl-6 md:pl-8">
//                     {item.leftColumn.map((link, idx) => (
//                       <a
//                         key={idx}
//                         href="#"
//                         className="block py-2.5 md:py-3 text-[#333] hover:text-[#0c9a8d] transition-colors text-sm md:text-base"
//                       >
//                         {link}
//                       </a>
//                     ))}
//                     <h3 className="font-semibold mt-4 mb-2 text-gray-500 text-sm md:text-base">
//                       {item.rightColumn.title}
//                     </h3>
//                     {item.rightColumn.items.map((method, idx) => (
//                       <a
//                         key={idx}
//                         href="#"
//                         className="block py-2.5 md:py-3 text-[#333] hover:text-[#0c9a8d] transition-colors text-sm md:text-base"
//                       >
//                         {method}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 space-y-6">
//             <div className="flex justify-center">
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] text-sm md:text-base"
//                 placeholder="Search..."
//               />
//             </div>

//             <div className="flex justify-center space-x-6">
//               <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d] transition-colors text-sm md:text-base">
//                 Sign Up
//               </a>
//               <span>|</span>
//               <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d] transition-colors text-sm md:text-base">
//                 Log In
//               </a>
//             </div>

//             <div className="flex justify-center">
//               <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full text-sm md:text-base">
//                 español
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const NavMenu = () => (
//     <div className="hidden lg:block border-t border-b border-gray-200">
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex">
//             {navItems.slice(0, 5).map(item => (
//               <NavItem key={item.id} item={item} />
//             ))}
//           </div>

//           <div className="flex items-center">
//             <NavItem item={navItems[5]} />
//             <SearchBar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
//       <TopBar />
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center">
//           <div className="lg:hidden">
//             <MobileMenu />
//           </div>
//           <div className="flex-1">
//             <MainLogo />
//           </div>
//           <div className="lg:hidden w-12" />
//         </div>
//       </div>
//       <NavMenu />
//     </header>
//   );
// };
// export default Navbar;

// src/components/Navbar.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

//   const navItems = [
//     {
//       id: 1,
//       title: 'Birth control',
//       leftColumn: [
//         { label: 'Explore birth control options', to: '/birth-control/options' },
//         { label: 'Compare birth control',          to: '/birth-control/compare' },
//         { label: 'How to get birth control',       to: '/birth-control/get' },
//         { label: 'Birth control articles',         to: '/birth-control/articles' },
//         { label: 'Birth control reviews',          to: '/birth-control/reviews' },
//         { label: 'View all',                       to: '/birth-control' },
//       ],
//       rightColumn: {
//         title: 'BIRTH CONTROL TYPES',
//         items: [
//           { label: 'IUD (Intrauterine Device)',               to: '/birth-control/types/iud' },
//           { label: 'Implant (Nexplanon)',                     to: '/birth-control/types/implant' },
//           { label: 'Birth control shot (Depo-Provera)',       to: '/birth-control/types/shot' },
//           { label: 'Birth control ring',                      to: '/birth-control/types/ring' },
//           { label: 'Birth control patch',                     to: '/birth-control/types/patch' },
//           { label: 'Birth control pill',                      to: '/birth-control/types/pill' },
//           { label: 'Diaphragm',                               to: '/birth-control/types/diaphragm' },
//           { label: 'Condom',                                  to: '/birth-control/types/condom' },
//           { label: 'Internal condom (FC2)',                   to: '/birth-control/types/internal-condom' },
//           { label: 'Cervical cap',                            to: '/birth-control/types/cervical-cap' },
//           { label: 'Fertility awareness methods',             to: '/birth-control/types/fertility-awareness' },
//           { label: 'Spermicide and gel',                      to: '/birth-control/types/spermicide' },
//           { label: 'Withdrawal (pull-out method)',            to: '/birth-control/types/withdrawal' },
//           { label: 'Sterilization',                           to: '/birth-control/types/sterilization' },
//           { label: '"Not right now"',                         to: '/birth-control/types/not-right-now' },
//           { label: 'Emergency contraception',                 to: '/birth-control/types/emergency-contraception' },
//         ],
//       }
//     },
//     {
//       id: 2,
//       title: 'Abortion',
//       leftColumn: [
//         { label: 'Understanding abortion',    to: '/abortion/understanding' },
//         { label: 'Types of abortion',         to: '/abortion/types' },
//         { label: 'Cost & insurance',          to: '/abortion/cost-insurance' },
//         { label: 'Finding a provider',        to: '/abortion/find-provider' },
//         { label: 'Support & resources',       to: '/abortion/support-resources' },
//         { label: 'View all',                  to: '/abortion' },
//       ],
//       rightColumn: {
//         title: 'ABORTION INFORMATION',
//         items: [
//           { label: 'Medical abortion',      to: '/abortion/medical' },
//           { label: 'Surgical abortion',     to: '/abortion/surgical' },
//           { label: 'State laws & restrictions', to: '/abortion/state-laws' },
//           { label: 'Insurance coverage',    to: '/abortion/insurance-coverage' },
//           { label: 'Financial assistance',  to: '/abortion/financial-assistance' },
//           { label: 'Emotional support',     to: '/abortion/emotional-support' },
//           { label: 'Recovery & aftercare',  to: '/abortion/recovery-aftercare' },
//           { label: 'Common questions',      to: '/abortion/common-questions' },
//           { label: 'Legal rights',          to: '/abortion/legal-rights' },
//           { label: 'Counseling services',   to: '/abortion/counseling-services' },
//         ],
//       }
//     },
//     {
//       id: 3,
//       title: 'Sex & relationships',
//       leftColumn: [
//         { label: 'Dating & relationships',      to: '/relationships/dating' },
//         { label: 'Communication tips',          to: '/relationships/communication-tips' },
//         { label: 'Sexual health',               to: '/relationships/sexual-health' },
//         { label: 'LGBTQ+ resources',            to: '/relationships/lgbtq-resources' },
//         { label: 'Relationship advice',         to: '/relationships/advice' },
//         { label: 'View all',                    to: '/relationships' },
//       ],
//       rightColumn: {
//         title: 'TOPICS & RESOURCES',
//         items: [
//           { label: 'Healthy relationships',      to: '/relationships/healthy' },
//           { label: 'Dating safety',              to: '/relationships/safety' },
//           { label: 'Consent & boundaries',       to: '/relationships/consent-boundaries' },
//           { label: 'Sexual pleasure',            to: '/relationships/pleasure' },
//           { label: 'Gender identity',            to: '/relationships/gender-identity' },
//           { label: 'Sexual orientation',         to: '/relationships/sexual-orientation' },
//           { label: 'Communication skills',       to: '/relationships/communication-skills' },
//           { label: 'Dating apps & online',       to: '/relationships/dating-apps' },
//           { label: 'Relationship counseling',    to: '/relationships/counseling' },
//           { label: 'Support groups',             to: '/relationships/support-groups' },
//         ],
//       }
//     },
//     {
//       id: 4,
//       title: 'Sexual health & wellness',
//       leftColumn: [
//         { label: 'STI prevention',           to: '/wellness/sti-prevention' },
//         { label: 'Testing & treatment',      to: '/wellness/testing-treatment' },
//         { label: 'Reproductive health',      to: '/wellness/reproductive-health' },
//         { label: 'Sexually Transmitted Infections',            to: '/shw' },
//         { label: 'View all',                 to: '/wellness' },
//       ],

//        rightColumn: {
//         title: 'FEATURED CONTENT',
//         items: [
//            { label:   'Success stories',          to: '/wellness/sti-prevention' },
//             { label:  'Latest articles',          to: '/wellness/sti-prevention' },
//              { label:   'Research updates',          to: '/wellness/sti-prevention' },
//               { label: 'Community events',         to: '/wellness/sti-prevention' },
//                { label:   'Educational videos',         to: '/wellness/sti-prevention' },
//                 { label:  'Resource library',           to: '/wellness/sti-prevention' },

//         ]
//       }
//     },
//     {
//       id: 5,
//       title: 'Lifestyle & inspiration',
//       leftColumn: [
//         { label: 'Personal stories',            to: '/lifestyle/stories' },
//         { label: 'News & updates',              to: '/lifestyle/news-updates' },
//         { label: 'Community support',           to: '/lifestyle/community-support' },
//         { label: 'Educational resources',       to: '/lifestyle/educational-resources' },
//         { label: 'Events & activities',         to: '/lifestyle/events-activities' },
//         { label: 'View all',                    to: '/lifestyle' },
//       ],
//       rightColumn: {
//         title: 'FEATURED CONTENT',
//         items: [
//           { label: 'Success stories',        to: '/lifestyle/success-stories' },
//           { label: 'Latest articles',        to: '/lifestyle/latest-articles' },
//           { label: 'Research updates',       to: '/lifestyle/research-updates' },
//           { label: 'Community events',       to: '/lifestyle/community-events' },
//           { label: 'Educational videos',     to: '/lifestyle/educational-videos' },
//           { label: 'Podcasts',               to: '/lifestyle/podcasts' },
//           { label: 'Blog posts',             to: '/lifestyle/blog-posts' },
//           { label: 'Expert interviews',      to: '/lifestyle/expert-interviews' },
//           { label: 'Resource library',       to: '/lifestyle/resource-library' },
//           { label: 'Support network',        to: '/lifestyle/support-network' },
//         ],
//       }
//     },
//     {
//       id: 6,
//       title: 'Find health care',
//       leftColumn: [
//         { label: 'Find a provider',          to: '/healthcare/find-provider' },
//         { label: 'Insurance information',    to: '/healthcare/insurance-info' },
//         { label: 'Telehealth options',       to: '/healthcare/telehealth-options' },
//         { label: 'Cost & payment',           to: '/healthcare/cost-payment' },
//         { label: 'Appointment help',         to: '/healthcare/appointment-help' },
//         { label: 'View all',                 to: '/healthcare' },
//       ],
//       rightColumn: {
//         title: 'HEALTHCARE OPTIONS',
//         items: [
//           { label: 'Local clinics',           to: '/healthcare/local-clinics' },
//           { label: 'Telehealth services',     to: '/healthcare/telehealth-services' },
//           { label: 'Insurance coverage',      to: '/healthcare/insurance-coverage' },
//           { label: 'Payment assistance',      to: '/healthcare/payment-assistance' },
//           { label: 'Emergency care',          to: '/healthcare/emergency-care' },
//           { label: 'Specialist referrals',    to: '/healthcare/specialist-referrals' },
//           { label: 'Free clinics',            to: '/healthcare/free-clinics' },
//           { label: 'Student health',          to: '/healthcare/student-health' },
//           { label: 'Provider reviews',        to: '/healthcare/provider-reviews' },
//           { label: 'Transportation help',     to: '/healthcare/transportation-help' },
//         ],
//       }
//     },
//   ];

//   const TopBar = () => (
//     <div className="bg-[#d9f5f0] py-2.5">
//       <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center text-sm">
//         <div>
//           <span className="hidden sm:inline">Are you a provider? Visit </span>
//           <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
//             Bedsider Providers <ExternalLink className="ml-1 h-3 w-3"/>
//           </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Link to="/signup" className="text-[#333] hover:underline">Sign Up</Link>
//           <span>|</span>
//           <Link to="/login" className="text-[#333] hover:underline">Log In</Link>
//           <button className="bg-[#0c9a8d] text-white px-3 py-1.5 rounded text-sm hover:bg-[#0a8a7d]">
//             español
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const MainLogo = () => (
//     <div className="flex justify-center py-6 lg:py-8">
//       <Link to="/" className="flex flex-col items-center">
//        <img src='/SHW/logo-desktop-2x-899861cd3ea53a5d6b611b44038a0082607f84f43367462366092e8748f2e449.png' alt='' />
//       </Link>
//     </div>
//   );

//   const NavItem = ({ item }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//       <div
//         className="relative group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button className="flex items-center px-3 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors">
//           {item.title}
//           <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"/>
//         </button>

//         <div
//           className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50  transform
//             ${isHovered ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 translate-y-2 pointer-events-none'}`}
//         >
//           <div className="flex md:min-w-[600px] lg:min-w-[800px]">
//             {/* Left column */}
//             <div className="w-1/3 bg-[#f8f8f8] py-4">
//               {item.leftColumn.map(({ label, to }, idx) => (
//                 <Link
//                   key={idx}
//                   to={to}
//                   className={`block px-4 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors text-sm ${
//                     idx === item.leftColumn.length - 1 ? 'italic' : ''
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//             {/* Right column */}
//             <div className="w-2/3 py-4">
//               {item.rightColumn.title && (
//                 <h3 className="px-4 py-2 text-xs font-semibold text-gray-500">
//                   {item.rightColumn.title}
//                 </h3>
//               )}
//               <div className="grid grid-cols-2 gap-x-4">
//                 {item.rightColumn.items.map(({ label, to }, idx) => (
//                   <Link
//                     key={idx}
//                     to={to}
//                     className="px-4 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors text-sm"
//                   >
//                     {label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const SearchBar = () => (
//     <div className="relative flex items-center pl-2 lg:pl-4">
//       <div className={`transition-all duration-300 ${isSearchExpanded ? 'w-36 md:w-40 lg:w-48' : 'w-0'}`}>
//         {isSearchExpanded && (
//           <input
//             type="text"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] text-sm"
//             placeholder="Search..."
//             onBlur={() => setIsSearchExpanded(false)}
//           />
//         )}
//       </div>
//       <button
//         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors"
//         onClick={() => setIsSearchExpanded(v => !v)}
//       >
//         <Search className="h-5 w-5"/>
//       </button>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="lg:hidden">
//       <button
//         className="p-4 text-[#333] hover:text-[#0c9a8d]"
//         onClick={() => setIsMobileMenuOpen(v => !v)}
//       >
//         {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
//       </button>

//       <div
//         className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
//           ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//       >
//         <div className="container mx-auto px-4 md:px-6 h-full overflow-y-auto">
//           <div className="flex justify-end pt-4">
//             <button
//               className="p-4 text-[#333] hover:text-[#0c9a8d]"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X size={24}/>
//             </button>
//           </div>

//           <div className="mt-6 border-t">
//             {navItems.map(item => (
//               <div key={item.id} className="border-b">
//                 <button
//                   className="w-full py-4 px-4 flex justify-between items-center text-left"
//                   onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
//                 >
//                   <span className="font-medium text-base">{item.title}</span>
//                   <ChevronDown
//                     size={20}
//                     className={expandedItem === item.id ? 'rotate-180' : ''}
//                   />
//                 </button>
//                 <div
//                   className={`overflow-hidden transition-all duration-300
//                     ${expandedItem === item.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
//                 >
//                   <div className="pb-4 pl-6">
//                     {item.leftColumn.map(({ label, to }, idx) => (
//                       <Link
//                         key={idx}
//                         to={to}
//                         className="block py-2.5 text-[#333] hover:text-[#0c9a8d] text-sm"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {label}
//                       </Link>
//                     ))}
//                     {item.rightColumn.title && (
//                       <h3 className="font-semibold mt-4 mb-2 text-gray-500 text-sm">
//                         {item.rightColumn.title}
//                       </h3>
//                     )}
//                     {item.rightColumn.items.map(({ label, to }, idx) => (
//                       <Link
//                         key={idx}
//                         to={to}
//                         className="block py-2.5 text-[#333] hover:text-[#0c9a8d] text-sm"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 px-4 space-y-6">
//             <SearchBar />
//             <div className="flex justify-center space-x-6">
//               <Link to="/signup" className="text-[#333] hover:text-[#0c9a8d]">Sign Up</Link>
//               <span>|</span>
//               <Link to="/login" className="text-[#333] hover:text-[#0c9a8d]">Log In</Link>
//             </div>
//             <button className="w-full bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d]">
//               español
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const NavMenu = () => (
//     <div className="hidden lg:block border-t border-b border-gray-200">
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-4">
//             {navItems.slice(0, 5).map(item => <NavItem key={item.id} item={item} />)}
//           </div>
//           <div className="flex items-center space-x-4">
//             <NavItem item={navItems[5]} />
//             <SearchBar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
//       <TopBar />
//       <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
//         <div className="lg:hidden">
//           <MobileMenu />
//         </div>
//         <div className="flex-1">
//           <MainLogo />
//         </div>
//         <div className="lg:hidden w-12" /> {/* spacer */}
//       </div>
//       <NavMenu />
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

//   const navItems = [
//     {
//       id: 1,
//       title: 'Birth control',
//       leftColumn: [
//         'Explore birth control options',
//         'Compare birth control',
//         'How to get birth control',
//         'Birth control articles',
//         'Birth control reviews',
//       ],
//       rightColumn: {
//         title: 'BIRTH CONTROL TYPES',
//         items: [
//           'IUD (Intrauterine Device)',
//           'Implant (Nexplanon)',
//           'Birth control shot (Depo-Provera)',
//           'Birth control ring',
//           'Birth control patch',
//           'Birth control pill',
//           'Diaphragm',
//           'Condom',
//           'Internal condom (FC2)',
//           'Cervical cap',
//           'Fertility awareness methods',
//           'Spermicide and gel',
//           'Withdrawal (pull-out method)',
//           'Sterilization',
//           '"Not right now"',
//           'Emergency contraception'
//         ]
//       }
//     },
//     {
//       id: 2,
//       title: 'Abortion',
//       dropdownItems: ['Your options', 'Common questions', 'Cost', 'Support']
//     },
//     {
//       id: 3,
//       title: 'Sex & relationships',
//       dropdownItems: ['Dating', 'Communication', 'LGBTQ+', 'Pleasure']
//     },
//     {
//       id: 4,
//       title: 'Sexual health & wellness',
//       dropdownItems: ['Periods & vaginal health', 'Health care', 'Pregnancy & fertility', 'Sexually Transmitted Infections (STDs,STIs)']
//     },
//     {
//       id: 5,
//       title: 'Lifestyle & inspiration',
//       dropdownItems: ['Entertainment', 'Stories', 'News', 'Resources']
//     },
//     {
//       id: 6,
//       title: 'Find health care',
//       dropdownItems: ['Providers', 'Telehealth', 'Insurance', 'Free clinics']
//     }
//   ];

//   const TopBar = () => (
//     <div className="bg-[#d9f5f0] py-2.5">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center">
//           <div className="text-sm">
//             <span className="hidden sm:inline-block">Are you a provider? Visit </span>
//             <a href="#" className="font-medium text-[#333] hover:underline inline-flex items-center">
//               Bedsider Providers
//               <ExternalLink className="ml-1 h-3 w-3" />
//             </a>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="text-sm">
//               <a href="#" className="text-[#333] hover:underline">Sign Up</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="text-[#333] hover:underline">Log In</a>
//             </div>

//             <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded text-sm hover:bg-[#0a8a7d] transition-colors">
//               español
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const MainLogo = () => (
//     <div className="flex justify-center py-8">
//       <a href="#" className="flex flex-col items-center">
//         <div className="text-[#333333] text-6xl font-bold tracking-wider">
//           BEDSIDER
//         </div>
//         <div className="text-gray-500 text-sm italic mt-2">
//           We've got you covered
//         </div>
//       </a>
//     </div>
//   );

//   const NavItem = ({ item }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <div
//         className="relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors text-base">
//           {item.title}
//           <ChevronDown className="ml-1.5 h-4 w-4" />
//         </button>

//         <div className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//           isHovered
//             ? 'opacity-100 transform scale-y-100'
//             : 'opacity-0 transform scale-y-0 pointer-events-none'
//         }`}>
//           {item.id === 1 ? (
//             <div className="flex min-w-[800px]">
//               <div className="w-1/3 bg-[#f8f8f8] py-4">
//                 {item.leftColumn.map((link, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className={`block px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors ${
//                       idx === item.leftColumn.length - 1 ? 'italic' : ''
//                     }`}
//                   >
//                     {link}
//                   </a>
//                 ))}
//               </div>
//               <div className="w-2/3 py-4">
//                 <h3 className="px-6 py-2 text-sm font-semibold text-gray-500">
//                   {item.rightColumn.title}
//                 </h3>
//                 <div className="grid grid-cols-2 gap-x-4">
//                   {item.rightColumn.items.map((method, idx) => (
//                     <a
//                       key={idx}
//                       href="#"
//                       className="px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
//                     >
//                       {method}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="py-2 w-64">
//               {item.dropdownItems.map((item, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="block px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const SearchBar = () => (
//     <div className="relative flex items-center pl-4">
//       {isSearchExpanded && (
//         <input
//           type="text"
//           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
//           placeholder="Search..."
//           autoFocus
//           onBlur={() => setIsSearchExpanded(false)}
//         />
//       )}

//       <button
//         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
//         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
//       >
//         <Search className="h-5 w-5" />
//         <span className="ml-2 hidden md:inline-block text-base">Search</span>
//       </button>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="md:hidden">
//       <button
//         className="p-4 text-[#333]"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
//           <div className="container mx-auto px-6">
//             <button
//               className="absolute top-4 right-4 p-4 text-[#333]"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X size={28} />
//             </button>

//             <div className="mt-6 border-t">
//               {navItems.map(item => (
//                 <div key={item.id} className="border-b">
//                   <button
//                     className="w-full py-5 px-4 flex justify-between items-center text-left"
//                     onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
//                   >
//                     <span className="font-medium text-lg">{item.title}</span>
//                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
//                   </button>

//                   {expandedItem === item.id && (
//                     <div className="pb-4 pl-8">
//                       {item.id === 1 ? (
//                         <>
//                           {item.leftColumn.map((link, idx) => (
//                             <a
//                               key={idx}
//                               href="#"
//                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                             >
//                               {link}
//                             </a>
//                           ))}
//                           <h3 className="font-semibold mt-4 mb-2 text-gray-500">
//                             {item.rightColumn.title}
//                           </h3>
//                           {item.rightColumn.items.map((method, idx) => (
//                             <a
//                               key={idx}
//                               href="#"
//                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                             >
//                               {method}
//                             </a>
//                           ))}
//                         </>
//                       ) : (
//                         item.dropdownItems.map((dropdownItem, idx) => (
//                           <a
//                             key={idx}
//                             href="#"
//                             className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                           >
//                             {dropdownItem}
//                           </a>
//                         ))
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-8 space-y-6">
//               <div className="flex justify-center">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
//                   placeholder="Search..."
//                 />
//               </div>

//               <div className="flex justify-center space-x-6">
//                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Sign Up</a>
//                 <span>|</span>
//                 <a href="#" className="font-medium text-[#333] hover:text-[#0c9a8d]">Log In</a>
//               </div>

//               <div className="flex justify-center">
//                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full">
//                   español
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const NavMenu = () => (
//     <div className="hidden md:block border-t border-b border-gray-200">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center">
//           <div className="flex">
//             {navItems.slice(0, 5).map(item => (
//               <NavItem key={item.id} item={item} />
//             ))}
//           </div>
//           <div className="flex items-center">
//             <NavItem item={navItems[5]} />
//             <SearchBar />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
//       <TopBar />
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center">
//           <div className="md:hidden">
//             <MobileMenu />
//           </div>
//           <div className="flex-1">
//             <MainLogo />
//           </div>
//           <div className="md:hidden w-12">
//             {/* Placeholder for right-side mobile element for balance */}
//           </div>
//         </div>
//       </div>
//       <NavMenu />
//     </header>
//   );
// };
// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Search, Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [isSearchExpanded, setIsSearchExpanded] = useState(false);

//   const navItems = [
//     {
//       id: 1,
//       title: 'Birth control',
//       leftColumn: [
//         { label: 'Explore birth control options', to: '/birth-control/explore' },
//         { label: 'Compare birth control', to: '/birth-control/compare' },
//         { label: 'How to get birth control', to: '/birth-control/how-to' },
//         { label: 'Birth control articles', to: '/birth-control/articles' },
//         { label: 'Birth control reviews', to: '/birth-control/reviews' },
//       ],
//       rightColumn: {
//         title: 'BIRTH CONTROL TYPES',
//         items: [
//           { label: 'IUD (Intrauterine Device)', to: '/types/iud' },
//           { label: 'Implant (Nexplanon)', to: '/types/implant' },
//           { label: 'Birth control shot (Depo-Provera)', to: '/types/birth-control-shot' },
//           { label: 'Birth control ring', to: '/types/birth-control-ring' },
//           { label: 'Birth control patch', to: '/types/patch' },
//           { label: 'Birth control pill', to: '/types/birth-control-pill' },
//           { label: 'Diaphragm', to: '/types/diaphragm' },
//           { label: 'Condom', to: '/types/condom' },
//           { label: 'Internal condom (FC2)', to: '/types/internal-condom' },
//           { label: 'Cervical cap', to: '/types/cervical-cap' },
//           { label: 'Fertility awareness methods', to: '/types/fertility-awareness' },
//           { label: 'Spermicide and gel', to: '/types/spermicide-gell' },
//           { label: 'Withdrawal (pull-out method)', to: '/types/withdrawal' },
//           { label: 'Sterilization', to: '/types/sterilization' },
//           { label: '"Not right now"', to: '/types/not-right-now' },
//           { label: 'Emergency contraception', to: '/types/emergency-contraception' },
//         ],
//       },
//     },
//     {
//       id: 2,
//       title: 'Abortion',
//       dropdownItems: [
//         { label: 'Your options', to: '/abortion/options' },
//         { label: 'Common questions', to: '/abortion/questions' },
//         { label: 'Cost', to: '/abortion/cost' },
//         { label: 'Support', to: '/abortion/support' },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Sex & relationships',
//       dropdownItems: [
//         { label: 'Dating', to: '/sex-relationships/dating' },
//         { label: 'Communication', to: '/sex-relationships/communication' },
//         { label: 'LGBTQ+', to: '/sex-relationships/lgbtq' },
//         { label: 'Pleasure', to: '/sex-relationships/pleasure' },
//       ],
//     },
//     {
//       id: 4,
//       title: 'Sexual health & wellness',
//       dropdownItems: [
//         { label: 'Periods & vaginal health', to: '/sexual-health/periods' },
//         { label: 'Health care', to: '/sexual-health/health-care' },
//         { label: 'Pregnancy & fertility', to: '/sexual-health/pregnancy' },
//         { label: 'Sexually Transmitted Infections (STDs, STIs)', to: '/shw' },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Lifestyle & inspiration',
//       dropdownItems: [
//         { label: 'Entertainment', to: '/lifestyle/entertainment' },
//         { label: 'Stories', to: '/lifestyle/stories' },
//         { label: 'News', to: '/lifestyle/news' },
//         { label: 'Resources', to: '/lifestyle/resources' },
//       ],
//     },
//     {
//       id: 6,
//       title: 'Find health care',
//       dropdownItems: [
//         { label: 'Providers', to: '/find-health-care/providers' },
//         { label: 'Telehealth', to: '/find-health-care/telehealth' },
//         { label: 'Insurance', to: '/find-health-care/insurance' },
//         { label: 'Free clinics', to: '/find-health-care/clinics' },
//       ],
//     },
//   ];

//   const TopBar = () => (
//     <div className="bg-[#d9f5f0] py-2.5">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <div className="text-sm">
//           <span className="hidden sm:inline-block">Are you a provider? Visit </span>
//           <Link to="/providers" className="font-medium text-[#333] hover:underline inline-flex items-center">
//             Bedsider Providers
//             <ExternalLink className="ml-1 h-3 w-3" />
//           </Link>
//         </div>
//         <div className="flex items-center space-x-6 text-sm">
//           <Link to="/signup" className="text-[#333] hover:underline">Sign Up</Link>
//           <span>|</span>
//           <Link to="/login" className="text-[#333] hover:underline">Log In</Link>
//           <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded hover:bg-[#0a8a7d] transition-colors">
//             español
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const MainLogo = () => (
//     <div className="flex justify-center py-8">
//       <Link to="/" className="flex flex-col items-center">
//         <div className="text-[#333333] text-6xl font-bold tracking-wider">BEDSIDER</div>
//         <div className="text-gray-500 text-sm italic mt-2">We&apos;ve got you covered</div>
//       </Link>
//     </div>
//   );

//   const NavItem = ({ item }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     return (
//       <div
//         className="relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors">
//           {item.title}
//           <ChevronDown className="ml-1.5 h-4 w-4" />
//         </button>
//         <div
//           className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
//             isHovered ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0 pointer-events-none'
//           }`}
//         >
//           {item.id === 1 ? (
//             <div className="flex min-w-[800px]">
//               <div className="w-1/3 bg-[#f8f8f8] py-4">
//                 {item.leftColumn.map((link, idx) => (
//                   <Link
//                     key={idx}
//                     to={link.to}
//                     className={`block px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors ${
//                       idx === item.leftColumn.length - 1 ? 'italic' : ''
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//               <div className="w-2/3 py-4">
//                 <h3 className="px-6 py-2 text-sm font-semibold text-gray-500">
//                   {item.rightColumn.title}
//                 </h3>
//                 <div className="grid grid-cols-2 gap-x-4">
//                   {item.rightColumn.items.map((method, idx) => (
//                     <Link
//                       key={idx}
//                       to={method.to}
//                       className="px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
//                     >
//                       {method.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="py-2 w-64">
//               {item.dropdownItems.map((link, idx) => (
//                 <Link
//                   key={idx}
//                   to={link.to}
//                   className="block px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const SearchBar = () => (
//     <div className="relative flex items-center pl-4">
//       {isSearchExpanded && (
//         <input
//           type="text"
//           className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
//           placeholder="Search..."
//           autoFocus
//           onBlur={() => setIsSearchExpanded(false)}
//         />
//       )}
//       <button
//         className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
//         onClick={() => setIsSearchExpanded(!isSearchExpanded)}
//       >
//         <Search className="h-5 w-5" />
//         <span className="ml-2 hidden md:inline-block text-base">Search</span>
//       </button>
//     </div>
//   );

//   const MobileMenu = () => (
//     <div className="md:hidden">
//       <button className="p-4 text-[#333]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//         {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//       </button>

//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
//           <div className="container mx-auto px-6">
//             <button
//               className="absolute top-4 right-4 p-4 text-[#333]"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <X size={28} />
//             </button>

//             <div className="mt-6 border-t">
//               {navItems.map(item => (
//                 <div key={item.id} className="border-b">
//                   <button
//                     className="w-full py-5 px-4 flex justify-between items-center text-left"
//                     onClick={() =>
//                       setExpandedItem(expandedItem === item.id ? null : item.id)
//                     }
//                   >
//                     <span className="font-medium text-lg">{item.title}</span>
//                     {expandedItem === item.id ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
//                   </button>

//                   {expandedItem === item.id && (
//                     <div className="pb-4 pl-8">
//                       {item.id === 1 ? (
//                         <>
//                           {item.leftColumn.map((link, idx) => (
//                             <Link
//                               key={idx}
//                               to={link.to}
//                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                             >
//                               {link.label}
//                             </Link>
//                           ))}
//                           <h3 className="font-semibold mt-4 mb-2 text-gray-500">
//                             {item.rightColumn.title}
//                           </h3>
//                           {item.rightColumn.items.map((method, idx) => (
//                             <Link
//                               key={idx}
//                               to={method.to}
//                               className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                             >
//                               {method.label}
//                             </Link>
//                           ))}
//                         </>
//                       ) : (
//                         item.dropdownItems.map((link, idx) => (
//                           <Link
//                             key={idx}
//                             to={link.to}
//                             className="block py-3 text-[#333] hover:text-[#0c9a8d]"
//                           >
//                             {link.label}
//                           </Link>
//                         ))
//                       )}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="mt-8 space-y-6">
//               <div className="flex justify-center">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
//                   placeholder="Search..."
//                 />
//               </div>
//               <div className="flex justify-center space-x-6">
//                 <Link to="/signup" className="font-medium text-[#333] hover:text-[#0c9a8d]">
//                   Sign Up
//                 </Link>
//                 <span>|</span>
//                 <Link to="/login" className="font-medium text-[#333] hover:text-[#0c9a8d]">
//                   Log In
//                 </Link>
//               </div>
//               <div className="flex justify-center">
//                 <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full">
//                   español
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   const NavMenu = () => (
//     <div className="hidden md:block border-t border-b border-gray-200">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <div className="flex">
//           {navItems.slice(0, 5).map(item => <NavItem key={item.id} item={item} />)}
//         </div>
//         <div className="flex items-center">
//           <NavItem item={navItems[5]} />
//           <SearchBar />
//         </div>
//       </div>
//     </div>
//   );
//   return (
//     <header className="sticky top-0 left-0 right-0 z-40 bg-white shadow-sm">
//       <TopBar />
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <div className="md:hidden"><MobileMenu /></div>
//         <div className="flex-1"><MainLogo /></div>
//         <div className="md:hidden w-12" /> {/* placeholder */}
//       </div>
//       <NavMenu />
//     </header>
//   );
// };
// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navItems = [
    {
      id: 1,
      title: "Birth control",
      leftColumn: [
        {
          label: "Explore birth control options",
          to: "/birth-control-option",
        },
        { label: "Compare birth control", to: "/birth-control/compare" },
        { label: "How to get birth control", to: "/birth-control/how-to-get-birth-control" },
        { label: "Birth control articles", to: "/birth-control/articles" },
        { label: "Birth control reviews", to: "/birth-control/reviews" },
      ],
      rightColumn: {
        title: "BIRTH CONTROL TYPES",
        items: [
          { label: "IUD (Intrauterine Device)", to: "/types/iud" },
          { label: "Implant (Nexplanon)", to: "/types/implant" },
          {
            label: "Birth control shot (Depo-Provera)",
            to: "/types/birth-control-shot",
          },
          { label: "Birth control ring", to: "/types/birth-control-ring" },
          { label: "Birth control patch", to: "/types/patch" },
          { label: "Birth control pill", to: "/types/birth-control-pill" },
          { label: "Diaphragm", to: "/types/diaphragm" },
          { label: "Condom", to: "/types/condom" },
          { label: "Internal condom (FC2)", to: "/types/internal-condom" },
          { label: "Cervical cap", to: "/types/cervical-cap" },
          {
            label: "Fertility awareness methods",
            to: "/types/fertility-awareness",
          },
          { label: "Spermicide and gel", to: "/types/spermicide-gell" },
          { label: "Withdrawal (pull-out method)", to: "/types/withdrawal" },
          { label: "Sterilization", to: "/types/sterilization" },
          { label: '"Not right now"', to: "/types/not-right-now" },
          {
            label: "Emergency contraception",
            to: "/types/emergency-contraception",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Abortion",
      dropdownItems: [
        { label: "All About Abortion", to: "/abortion/all-about-abortion" },
        { label: "The abortion pill: What to expect", to: "/abortion/abortion-pill" },
        { label: "The abortion procedure: What to expect", to: "/abortion/abortion-procedure" },
        { label: "Pill vs. procedure:", to: "/abortion/abortion-pill-vs-procedure" },
        { label: "Abortion FAQs", to: "/abortion/faqs" },
        { label: "Abortion articles", to: "/abortion/articles" },
      ],
    },
    {
      id: 3,
      title: "Sex & relationships",
      dropdownItems: [
        { label: "Relationships", to: "/sex-relationships/Relationships" },
        { label: "Masturbation", to: "/sex-relationships/Masturbation" },
        {
          label: "Boundaries & consent",
          to: "/sex-relationships/BoundariesAndconsent",
        },
        { label: "Dating & hookups", to: "/sex-relationships/DatingAndHookup" },
        { label: "Better Sex", to: "/sex-relationships/BetterSex" },
        { label: "View all", to: "/sex-relationships/ViewAll" },
      ],
    },
    {
      id: 4,
      title: "Sexual health & wellness",
      dropdownItems: [
        {
          label: "Periods & vaginal health",
          to: "/periods-and-vaginal-health",
        },
        { label: "Health care", to: "/health-care" },
        { label: "Pregnancy & fertility", to: "/pregnancy-and-fertility" },
        { label: "Sexually Transmitted Infections (STDs, STIs)", to: "/shw" },
      ],
    },
    {
      id: 5,
      title: "Lifestyle & inspiration",
      dropdownItems: [
        { label: "Entertainment", to: "/lifestyle/entertainment" },
        { label: "Stories", to: "/lifestyle/stories" },
        { label: "News", to: "/lifestyle/news" },
        { label: "Resources", to: "/lifestyle/resources" },
      ],
    },
    {
      id: 6,
      title: "Find health care",
      dropdownItems: [
        { label: "Providers", to: "/find-health-care/providers" },
        { label: "Telehealth", to: "/find-health-care/telehealth" },
        { label: "Insurance", to: "/find-health-care/insurance" },
        { label: "Free clinics", to: "/find-health-care/clinics" },
      ],
    },
  ];

  const TopBar = () => (
    <div className="bg-[#d9f5f0] py-2.5">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
        <div className="text-sm text-[#333]">
          <span className="hidden sm:inline-block">
            Are you a provider? Visit{" "}
          </span>
          <Link
            to="/providers"
            className="font-medium text-[#333] hover:underline inline-flex items-center text-sm sm:text-base"
          >
            <span className="sm:hidden">Providers</span>
            <span className="hidden sm:inline">Bedsider Providers</span>
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link
              to="/signup"
              className="text-[#333] hover:underline text-sm sm:text-base"
            >
              Sign Up
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link
              to="/login"
              className="text-[#333] hover:underline text-sm sm:text-base"
            >
              Log In
            </Link>
          </div>
          <button className="bg-[#0c9a8d] text-white px-4 py-1.5 rounded hover:bg-[#0a8a7d] transition-colors text-sm sm:text-base">
            español
          </button>
        </div>
      </div>
    </div>
  );

  const MainLogo = () => (
    <div className="flex justify-center py-6">
      <Link to="/" className="flex flex-col items-center text-center">
        <div className="text-[#333333] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight">
          BEDSIDER
        </div>
        <div className="text-gray-500 text-xs sm:text-sm italic mt-1">
          We&apos;ve got you covered
        </div>
      </Link>
    </div>
  );

  const SearchBar = () => (
    <div className="relative flex items-center pl-4">
      {isSearchExpanded && (
        <input
          type="text"
          className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d] transition-all duration-300"
          placeholder="Search..."
          autoFocus
          onBlur={() => setIsSearchExpanded(false)}
        />
      )}
      <button
        className="ml-2 p-2 text-[#333] hover:text-[#0c9a8d] transition-colors flex items-center"
        onClick={() => setIsSearchExpanded(!isSearchExpanded)}
      >
        <Search className="h-5 w-5" />
        <span className="ml-2 hidden md:inline-block text-base">Search</span>
      </button>
    </div>
  );

  const MobileMenu = () => (
    <div className="lg:hidden">
      <button
        className="p-4 text-[#333]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-60 overflow-y-auto pt-16">
          <div className="container mx-auto px-6">
            <button
              className="absolute top-4 right-4 p-4 text-[#333]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="mt-6 border-t">
              {navItems.map((item) => (
                <div key={item.id} className="border-b">
                  <button
                    className="w-full py-5 px-4 flex justify-between items-center text-left"
                    onClick={() =>
                      setExpandedItem(expandedItem === item.id ? null : item.id)
                    }
                  >
                    <span className="font-medium text-lg">{item.title}</span>
                    {expandedItem === item.id ? (
                      <ChevronDown size={24} />
                    ) : (
                      <ChevronRight size={24} />
                    )}
                  </button>

                  {expandedItem === item.id && (
                    <div className="pb-4 pl-8">
                      {item.id === 1 ? (
                        <>
                          {item.leftColumn.map((link, idx) => (
                            <Link
                              key={idx}
                              to={link.to}
                              className="block py-3 text-[#333] hover:text-[#0c9a8d]"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setExpandedItem(null);
                              }}
                            >
                              {link.label}
                            </Link>
                          ))}
                          <h3 className="font-semibold mt-4 mb-2 text-gray-500">
                            {item.rightColumn.title}
                          </h3>
                          {item.rightColumn.items.map((method, idx) => (
                            <Link
                              key={idx}
                              to={method.to}
                              className="block py-3 text-[#333] hover:text-[#0c9a8d]"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setExpandedItem(null);
                              }}
                            >
                              {method.label}
                            </Link>
                          ))}
                        </>
                      ) : (
                        item.dropdownItems.map((link, idx) => (
                          <Link
                            key={idx}
                            to={link.to}
                            className="block py-3 text-[#333] hover:text-[#0c9a8d]"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setExpandedItem(null);
                            }}
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-6">
              <div className="flex justify-center">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#0c9a8d]"
                  placeholder="Search..."
                />
              </div>
              <div className="flex justify-center space-x-6">
                <Link
                  to="/signup"
                  className="font-medium text-[#333] hover:text-[#0c9a8d]"
                >
                  Sign Up
                </Link>
                <span>|</span>
                <Link
                  to="/login"
                  className="font-medium text-[#333] hover:text-[#0c9a8d]"
                >
                  Log In
                </Link>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#0c9a8d] text-white px-6 py-3 rounded hover:bg-[#0a8a7d] transition-colors w-full">
                  español
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const NavItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button className="flex items-center px-4 py-4 text-[#333] hover:text-[#0c9a8d] transition-colors">
          {item.title}
          <ChevronDown className="ml-1.5 h-4 w-4" />
        </button>
        <div
          className={`absolute left-0 mt-0 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
            isHovered
              ? "opacity-100 transform scale-y-100"
              : "opacity-0 transform scale-y-0 pointer-events-none"
          }`}
        >
          {item.id === 1 ? (
            <div className="flex min-w-[800px]">
              <div className="w-1/3 bg-[#f8f8f8] py-4">
                {item.leftColumn.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className={`block px-6 py-2.5 text-[#333] hover:bg-white hover:text-[#0c9a8d] transition-colors ${
                      idx === item.leftColumn.length - 1 ? "italic" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="w-2/3 py-4">
                <h3 className="px-6 py-2 text-sm font-semibold text-gray-500">
                  {item.rightColumn.title}
                </h3>
                <div className="grid grid-cols-2 gap-x-4">
                  {item.rightColumn.items.map((method, idx) => (
                    <Link
                      key={idx}
                      to={method.to}
                      className="px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
                    >
                      {method.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2 w-64">
              {/* {item.dropdownItems.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="block px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors"
                >
                  {link.label}
                </Link>
              ))} */}

              {item.dropdownItems.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className={`block px-6 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#0c9a8d] transition-colors ${
                    link.label.toLowerCase() === "view all" ? "italic" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const NavMenu = () => (
    <div className="hidden lg:block border-t border-b border-gray-200">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex">
          {navItems.slice(0, 5).map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex items-center">
          <NavItem item={navItems[5]} />
          <SearchBar />
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-60 bg-white shadow-sm">
      <TopBar />
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className="flex-1">
          <MainLogo />
        </div>
        <div className="lg:hidden w-12" /> {/* placeholder */}
      </div>
      <NavMenu />
    </header>
  );
};

export default Navbar;
