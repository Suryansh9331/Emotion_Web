// import React, { useState } from 'react';
// import { ChevronDown, Search, Menu, X } from 'lucide-react';

// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import ScrollToTop from "./components/ScrollToTop";
// import ArticleNews from "./components/SHW/ArticleNews";
// import ArticleNewsTwo from "./components/SHW/ArticleNewsTwo";
// import STIArticlesLayout from "./components/SHW/ArticleSection";
// import ArticleSectionTwo from "./components/SHW/ArticleSectionTwo";
// import ShwHome from "./components/SHW/ShwHome";
// import Home from "./Home";
// import DynamicTabsComponent from "./Components2/TabSection/Tabs";
// import AppHome from "./AppHome"
// import Footer from "./components/Footer"
// import ShwHome from "./components/SHW/ShwHome"

// import BirthControlLayout from "./components/BirthComponent"
// import Footer from "./components/Footer"
// import SubscriptionForm from "./components/FriskyComponent"
// import FriskyFridaysSignup from "./components/FriskyComponent"
// import HealthcareFinder from "./components/HealthFinder"
// import HealthWellnessLayout from "./components/HealthWellnessLayout"
// import BedsiderWebsite from "./components/Home"
// import SexRelationshipsLayout from "./components/SeRelationLayout"
// import ArticlesSection from "./components/SHW/ArticleSection"
// import FourthComponent from "./components/SHW/fourthComponent"
// import ShwHome from "./components/SHW/ShwHome"

// export default function BedsiderWebsite() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Top Bar */}
//       <div className="bg-teal-100 px-4 py-2 text-sm text-gray-700">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-1">
//             <span>Are you a provider? Visit </span>
//             <a href="#" className="text-teal-700 font-medium hover:underline">
//               Bedsider Providers
//             </a>
//             <span className="text-teal-700">↗</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="hidden sm:flex items-center gap-2">
//               <a href="#" className="hover:underline">Sign Up</a>
//               <span>|</span>
//               <a href="#" className="hover:underline">Log In</a>
//             </div>
//             <button className="bg-teal-600 text-white px-3 py-1 rounded text-sm hover:bg-teal-700 transition-colors">
//               español
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Header */}
//       <header className="px-4 py-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex justify-center mb-8">
//             <div className="text-center">
//               <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 tracking-wider">
//                 BEDSIDER
//               </h1>
//               <p className="text-gray-600 mt-2 italic">We've got you covered</p>
//             </div>
//           </div>

//           {/* Navigation */}
//           <nav className="flex flex-col lg:flex-row justify-between items-center gap-4">
//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden self-start"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//             {/* Navigation Links */}
//             <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto`}>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Birth control</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Abortion</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Sex & relationships</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Sexual health & wellness</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Lifestyle & inspiration</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//             </div>

//             {/* Search Section */}
//             <div className="flex items-center gap-4 w-full lg:w-auto">
//               <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition-colors">
//                 <span className="text-gray-700">Find health care</span>
//                 <ChevronDown size={16} className="text-gray-500" />
//               </div>
//               <div className="flex items-center gap-2 cursor-pointer hover:text-teal-600 transition-colors">
//                 <Search size={20} className="text-gray-600" />
//                 <span className="text-gray-700">Search</span>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-4 py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
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
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Images Grid */}
//              <img src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp" alt=""/>

//             {/* Text Content */}
//             <div className="text-center lg:text-left">
//               <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
//                 Check out your birth<br />control options.
//               </h3>
//               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                 Find a method that fits your body and your life with<br />
//                 our interactive method explorer.
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

// // import React, { useState, useEffect } from 'react';
// // import { Heart, Smile, CloudRain, Sun, Compass, Users, Brain, Lightbulb, Star, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

// // const EmotionalLandingPage = () => {
// //   const [selectedEmotion, setSelectedEmotion] = useState(null);
// //   const [isVisible, setIsVisible] = useState({});
// //   const [heroText, setHeroText] = useState('');
// //   const [currentTestimonial, setCurrentTestimonial] = useState(0);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   const fullHeroText = "Emotions Make Us Human";

// //   useEffect(() => {
// //     // Typewriter effect for hero text
// //     let index = 0;
// //     const timer = setInterval(() => {
// //       if (index < fullHeroText.length) {
// //         setHeroText(fullHeroText.slice(0, index + 1));
// //         index++;
// //       } else {
// //         clearInterval(timer);
// //       }
// //     }, 100);

// //     return () => clearInterval(timer);
// //   }, []);

// //   useEffect(() => {
// //     // Auto-rotate testimonials
// //     const timer = setInterval(() => {
// //       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
// //     }, 4000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   useEffect(() => {
// //     // Mouse parallax effect
// //     const handleMouseMove = (e) => {
// //       setMousePosition({
// //         x: (e.clientX / window.innerWidth) * 100,
// //         y: (e.clientY / window.innerHeight) * 100,
// //       });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   useEffect(() => {
// //     // Intersection Observer for scroll animations
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible((prev) => ({
// //               ...prev,
// //               [entry.target.id]: true,
// //             }));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     const elements = document.querySelectorAll('[data-animate]');
// //     elements.forEach((el) => observer.observe(el));

// //     return () => observer.disconnect();
// //   }, []);

// //   const emotions = [
// //     { name: 'Joy', color: 'bg-yellow-400', icon: <Sun className="w-8 h-8" />, description: 'The warmth that lights up our darkest moments', delay: '0s' },
// //     { name: 'Love', color: 'bg-pink-400', icon: <Heart className="w-8 h-8" />, description: 'The connection that binds us all together', delay: '0.1s' },
// //     { name: 'Sadness', color: 'bg-blue-400', icon: <CloudRain className="w-8 h-8" />, description: 'The depth that teaches us to appreciate light', delay: '0.2s' },
// //     { name: 'Hope', color: 'bg-green-400', icon: <Star className="w-8 h-8" />, description: 'The spark that keeps us moving forward', delay: '0.3s' },
// //     { name: 'Peace', color: 'bg-purple-400', icon: <Compass className="w-8 h-8" />, description: 'The stillness found within the storm', delay: '0.4s' },
// //     { name: 'Wonder', color: 'bg-indigo-400', icon: <Lightbulb className="w-8 h-8" />, description: 'The curiosity that opens new worlds', delay: '0.5s' }
// //   ];

// //   const testimonials = [
// //     {
// //       quote: "Learning to embrace my sadness helped me find my greatest joy.",
// //       name: "Sarah Chen",
// //       role: "Teacher & Mother"
// //     },
// //     {
// //       quote: "Emotions aren't obstacles - they're the compass to our authentic self.",
// //       name: "Marcus Johnson",
// //       role: "Artist & Counselor"
// //     },
// //     {
// //       quote: "Every feeling I thought was weakness became my greatest strength.",
// //       name: "Elena Rodriguez",
// //       role: "Entrepreneur"
// //     }
// //   ];

// //   const benefits = [
// //     {
// //       icon: <Brain className="w-12 h-12 text-blue-500" />,
// //       title: "Emotional Intelligence",
// //       description: "Develop deeper self-awareness and understanding of your emotional patterns and responses."
// //     },
// //     {
// //       icon: <Users className="w-12 h-12 text-green-500" />,
// //       title: "Stronger Connections",
// //       description: "Build more meaningful relationships through empathy and emotional authenticity."
// //     },
// //     {
// //       icon: <Heart className="w-12 h-12 text-pink-500" />,
// //       title: "Mental Wellness",
// //       description: "Achieve better mental health through emotional acceptance and healthy processing."
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
// //       {/* Animated Background Particles */}
// //       <div className="fixed inset-0 pointer-events-none z-0">
// //         {[...Array(20)].map((_, i) => (
// //           <div
// //             key={i}
// //             className="absolute animate-pulse"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 5}s`,
// //               animationDuration: `${3 + Math.random() * 4}s`,
// //             }}
// //           >
// //             <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30"></div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Hero Section */}
// //       <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 overflow-hidden">
// //         {/* Parallax Background */}
// //         <div
// //           className="absolute inset-0 bg-gradient-to-r from-pink-300 to-orange-300 opacity-20 transition-transform duration-1000 ease-out"
// //           style={{
// //             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
// //           }}
// //         ></div>

// //         <img
// //           src="/api/placeholder/1920/1080"
// //           alt="Person smiling in sunlight"
// //           className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-30 transition-transform duration-1000"
// //           style={{
// //             transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
// //           }}
// //         />

// //         {/* Floating Elements */}
// //         <div className="absolute inset-0">
// //           <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
// //             <Heart className="w-8 h-8 text-pink-400 opacity-60" />
// //           </div>
// //           <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
// //             <Star className="w-6 h-6 text-yellow-400 opacity-60" />
// //           </div>
// //           <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
// //             <Sun className="w-10 h-10 text-orange-400 opacity-60" />
// //           </div>
// //         </div>

// //         <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
// //           <div className="mb-6 overflow-hidden">
// //             <h1 className="text-5xl md:text-7xl font-light text-gray-800 leading-tight animate-fadeInUp">
// //               <span className="inline-block">{heroText}</span>
// //               <span className="animate-pulse">|</span>
// //             </h1>
// //           </div>

// //           <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp"
// //              style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
// //             In a world that often asks us to hide our feelings, we believe in the power of emotional authenticity. Your emotions are not your enemy—they are your guide to a more meaningful life.
// //           </p>
// //           <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
// //             <button className="group bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden">
// //               <span className="relative z-10">Explore Your Emotions</span>
// //               <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
// //             </button>
// //           </div>
// //         </div>
// //         {/* Scroll Indicator */}
// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// //           <ChevronDown className="w-8 h-8 text-gray-400" />
// //         </div>
// //       </section>
// //       {/* About Emotions Section */}
// //       <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative">
// //         <div className="max-w-6xl mx-auto" id="emotions-section" data-animate>
// //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-4xl font-light text-gray-800 mb-6">The Spectrum of Being Human</h2>
// //             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //               Every emotion serves a purpose, tells a story, and connects us to our deepest truth.
// //               Here are the core feelings that shape our human experience.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {emotions.map((emotion, index) => (
// //               <div
// //                 key={index}
// //                 className={`text-center group cursor-pointer transform hover:scale-110 transition-all duration-500 hover:-rotate-2 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //                 style={{
// //                   transitionDelay: isVisible['emotions-section'] ? emotion.delay : '0s',
// //                   animationDelay: emotion.delay
// //                 }}
// //               >
// //                 <div className={`w-20 h-20 ${emotion.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:animate-pulse relative overflow-hidden`}>
// //                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
// //                   {emotion.icon}
// //                 </div>
// //                 <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
// //                   {emotion.name}
// //                 </h3>
// //                 <p className="text-gray-600 text-sm leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
// //                   {emotion.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       {/* Testimonials Section */}
// //       <section className="py-20 px-6 bg-gradient-to-r from-blue-100 to-indigo-50 relative overflow-hidden">
// //         <div className="max-w-6xl mx-auto" id="testimonials-section" data-animate>
// //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['testimonials-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-4xl font-light text-gray-800 mb-6">Stories of Transformation</h2>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //               Real people sharing how embracing their emotions changed their lives.
// //             </p>
// //           </div>
// //           {/* Animated Testimonial Carousel */}
// //           <div className="relative max-w-4xl mx-auto mb-12">
// //             <div className="bg-white rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
// //               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 animate-pulse"></div>
// //               {testimonials.map((testimonial, index) => (
// //                 <div
// //                   key={index}
// //                   className={`transition-all duration-1000 ${index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}`}
// //                 >
// //                   <div className="text-center">
// //                     <div className="mb-8">
// //                       <img
// //                         src={`/api/placeholder/120/120`}
// //                         alt={testimonial.name}
// //                         className="w-20 h-20 rounded-full mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 shadow-lg animate-fadeIn"
// //                       />
// //                       <p className="text-gray-700 italic text-2xl leading-relaxed mb-6 font-light">
// //                         "{testimonial.quote}"
// //                       </p>
// //                     </div>
// //                     <div>
// //                       <h4 className="font-medium text-gray-800 text-lg">{testimonial.name}</h4>
// //                       <p className="text-gray-500">{testimonial.role}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Testimonial Indicators */}
// //             <div className="flex justify-center mt-6 space-x-2">
// //               {testimonials.map((_, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setCurrentTestimonial(index)}
// //                   className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-pink-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Benefits Section */}
// //       <section className="py-20 px-6 bg-white relative">
// //         <div className="max-w-6xl mx-auto" id="benefits-section" data-animate>
// //           <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-4xl font-light text-gray-800 mb-6">Why Emotions Matter</h2>
// //             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //               When we honor our emotions instead of fighting them, extraordinary things happen.
// //               Here's how emotional awareness transforms lives.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             {benefits.map((benefit, index) => (
// //               <div
// //                 key={index}
// //                 className={`text-center group transform hover:scale-105 transition-all duration-500 hover:-translate-y-2 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //                 style={{ transitionDelay: isVisible['benefits-section'] ? `${index * 0.2}s` : '0s' }}
// //               >
// //                 <div className="mb-6 flex justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 relative">
// //                   <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
// //                   {benefit.icon}
// //                 </div>
// //                 <h3 className="text-xl font-medium text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
// //                   {benefit.title}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
// //                   {benefit.description}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Interactive Emotion Wheel */}
// //       <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
// //         <div className="max-w-4xl mx-auto text-center" id="wheel-section" data-animate>
// //           <div className={`mb-12 transition-all duration-1000 ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-4xl font-light text-gray-800 mb-6">Explore Your Emotional Landscape</h2>
// //             <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
// //               Click on any emotion to learn more about its role in your life. Each feeling is a doorway to deeper self-understanding.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
// //             {emotions.map((emotion, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => setSelectedEmotion(emotion)}
// //                 className={`${emotion.color} text-white p-6 rounded-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 flex flex-col items-center space-y-2 hover:-rotate-3 relative overflow-hidden group ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //                 style={{
// //                   transitionDelay: isVisible['wheel-section'] ? `${index * 0.1}s` : '0s',
// //                   animationDelay: `${index * 0.1}s`
// //                 }}
// //               >
// //                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// //                 <div className="group-hover:animate-bounce">
// //                   {emotion.icon}
// //                 </div>
// //                 <span className="font-medium relative z-10">{emotion.name}</span>
// //                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
// //               </button>
// //             ))}
// //           </div>

// //           {selectedEmotion && (
// //             <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto transform animate-bounceIn relative overflow-hidden">
// //               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse"></div>
// //               <div className="absolute top-4 right-4">
// //                 <div className={`w-8 h-8 ${selectedEmotion.color} rounded-full animate-pulse`}></div>
// //               </div>
// //               <h3 className="text-2xl font-medium text-gray-800 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
// //                 {selectedEmotion.name}
// //               </h3>
// //               <p className="text-gray-600 leading-relaxed italic text-lg">
// //                 {selectedEmotion.description}
// //               </p>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           {[...Array(15)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute animate-pulse"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 3}s`,
// //                 animationDuration: `${4 + Math.random() * 3}s`,
// //               }}
// //             >
// //               <div className="w-2 h-2 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full opacity-40"></div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="max-w-7xl mx-auto relative z-10" id="blog-section" data-animate>
// //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
// //               Wisdom for Your Journey
// //             </h2>
// //             <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
// //               Dive deep into emotional intelligence with our expertly crafted articles, guides, and insights that will transform your understanding of yourself.
// //             </p>
// //           </div>

// //           {/* Featured Article */}
// //           <div className={`mb-16 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
// //             <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200 hover:shadow-amber-200/50 transition-all duration-500 group">
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
// //                 <div>
// //                   <div className="flex items-center space-x-2 mb-4">
// //                     <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
// //                       Featured Article
// //                     </span>
// //                     <span className="text-amber-600 text-sm">5 min read</span>
// //                   </div>
// //                   <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// //                     The Science Behind Emotional Resilience: Why Some People Bounce Back Faster
// //                   </h3>
// //                   <p className="text-gray-600 text-lg leading-relaxed mb-6">
// //                     Discover the neurological secrets of emotional resilience and learn practical techniques used by psychologists to build unshakeable mental strength. This comprehensive guide reveals how you can rewire your brain for better emotional outcomes.
// //                   </p>
// //                   <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-orange-500 group-hover:to-amber-500">
// //                     Read Full Article
// //                   </button>
// //                 </div>
// //                 <div className="relative">
// //                   <img
// //                     src="/api/placeholder/600/400"
// //                     alt="Emotional resilience illustration"
// //                     className="rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-2xl"></div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Article Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 title: "5 Daily Habits That Boost Emotional Intelligence",
// //                 excerpt: "Simple, science-backed practices you can start today to enhance your emotional awareness and social skills.",
// //                 readTime: "3 min read",
// //                 category: "Daily Practice",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.1s"
// //               },
// //               {
// //                 title: "Understanding Anxiety: Your Mind's Protection System",
// //                 excerpt: "Reframe anxiety from enemy to ally. Learn how this emotion serves you and when to seek support.",
// //                 readTime: "7 min read",
// //                 category: "Mental Health",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.2s"
// //               },
// //               {
// //                 title: "The Art of Emotional Boundaries in Relationships",
// //                 excerpt: "Master the delicate balance of staying connected while protecting your emotional well-being.",
// //                 readTime: "6 min read",
// //                 category: "Relationships",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.3s"
// //               },
// //               {
// //                 title: "From Shame to Self-Compassion: A Healing Journey",
// //                 excerpt: "Transform your inner critic into your greatest supporter with proven self-compassion techniques.",
// //                 readTime: "8 min read",
// //                 category: "Self-Growth",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.4s"
// //               },
// //               {
// //                 title: "The Neuroscience of Gratitude and Joy",
// //                 excerpt: "Discover how gratitude literally rewires your brain for happiness and emotional well-being.",
// //                 readTime: "4 min read",
// //                 category: "Science",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.5s"
// //               },
// //               {
// //                 title: "Emotional Intelligence in Leadership",
// //                 excerpt: "Why the most successful leaders aren't the smartest, but the most emotionally intelligent.",
// //                 readTime: "9 min read",
// //                 category: "Leadership",
// //                 image: "/api/placeholder/400/250",
// //                 delay: "0.6s"
// //               }
// //             ].map((article, index) => (
// //               <div
// //                 key={index}
// //                 className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:scale-105 hover:-rotate-1 border border-amber-100 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// //                 style={{ transitionDelay: isVisible['blog-section'] ? article.delay : '0s' }}
// //               >
// //                 <div className="relative overflow-hidden">
// //                   <img
// //                     src={article.image}
// //                     alt={article.title}
// //                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //                   <div className="absolute top-4 left-4">
// //                     <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
// //                       {article.category}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div className="p-6">
// //                   <div className="flex items-center justify-between mb-3">
// //                     <span className="text-amber-600 text-sm font-medium">{article.readTime}</span>
// //                     <Heart className="w-4 h-4 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
// //                   </div>

// //                   <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
// //                     {article.title}
// //                   </h3>

// //                   <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
// //                     {article.excerpt}
// //                   </p>

// //                   <div className="flex items-center justify-between">
// //                     <button className="text-amber-600 font-medium hover:text-orange-600 transition-colors duration-300">
// //                       Read More →
// //                     </button>
// //                     <div className="flex space-x-2">
// //                       <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
// //                         <Users className="w-4 h-4 text-amber-600" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Newsletter Signup */}
// //           <div className={`mt-20 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.7s' }}>
// //             <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
// //               <div className="absolute inset-0">
// //                 {[...Array(10)].map((_, i) => (
// //                   <div
// //                     key={i}
// //                     className="absolute animate-float"
// //                     style={{
// //                       left: `${Math.random() * 100}%`,
// //                       top: `${Math.random() * 100}%`,
// //                       animationDelay: `${Math.random() * 3}s`,
// //                       animationDuration: `${4 + Math.random() * 2}s`,
// //                     }}
// //                   >
// //                     <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="relative z-10">
// //                 <h3 className="text-3xl md:text-4xl font-bold mb-4">
// //                   Never Miss a Life-Changing Insight
// //                 </h3>
// //                 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
// //                   Get our weekly dose of emotional wisdom, practical tips, and transformative stories delivered straight to your inbox.
// //                 </p>

// //                 <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
// //                   <input
// //                     type="email"
// //                     placeholder="Enter your email address"
// //                     className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
// //                   />
// //                   <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
// //                     Subscribe Free
// //                   </button>
// //                 </div>

// //                 <p className="text-sm mt-4 opacity-80">
// //                   ✨ 50,000+ readers • Unsubscribe anytime • No spam, ever
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action Section */}
// //       <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
// //         <div className="absolute inset-0 bg-black opacity-20"></div>

// //         {/* Animated Background Elements */}
// //         <div className="absolute inset-0">
// //           {[...Array(15)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute animate-float"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 5}s`,
// //                 animationDuration: `${6 + Math.random() * 4}s`,
// //               }}
// //             >
// //               <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
// //             </div>
// //           ))}
// //         </div>

// //         <img
// //           src="/api/placeholder/1920/600"
// //           alt="Peaceful sunset landscape"
// //           className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-30"
// //         />

// //         <div className="relative z-10 max-w-4xl mx-auto text-center" id="cta-section" data-animate>
// //           <div className={`transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
// //               Start Your Journey of
// //               <span className="block font-medium bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
// //                 Self-Discovery
// //               </span>
// //             </h2>
// //             <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
// //               Your emotions are waiting to be understood, not conquered. Take the first step toward a more authentic, emotionally intelligent life.
// //             </p>
// //             <button className="group bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden">
// //               <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Started</span>
// //               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden">
// //         <div className="absolute inset-0">
// //           {[...Array(10)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute animate-twinkle"
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //                 animationDelay: `${Math.random() * 3}s`,
// //               }}
// //             >
// //               <Star className="w-2 h-2 text-gray-600 opacity-40" />
// //             </div>
// //           ))}
// //         </div>

// //         <div className="max-w-6xl mx-auto relative z-10" id="footer-section" data-animate>
// //           <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 transition-all duration-1000 ${isVisible['footer-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// //             <div className="md:col-span-2">
// //               <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// //                 EmotionalJourney
// //               </h3>
// //               <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
// //                 Helping the world feel, one emotion at a time. We believe in the transformative power of emotional authenticity and self-compassion.
// //               </p>
// //               <div className="flex space-x-4">
// //                 {[Heart, Users, Smile].map((Icon, index) => (
// //                   <div key={index} className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-500 cursor-pointer hover:scale-110 transform hover:rotate-12">
// //                     <Icon className="w-5 h-5" />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="transform hover:scale-105 transition-transform duration-300">
// //               <h4 className="font-medium mb-4">Resources</h4>
// //               <ul className="space-y-2 text-gray-400">
// //                 {['Emotion Guide', 'Self-Assessment', 'Community', 'Blog'].map((item, index) => (
// //                   <li key={index}>
// //                     <a href="#" className="hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
// //                       {item}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="transform hover:scale-105 transition-transform duration-300">
// //               <h4 className="font-medium mb-4">Contact</h4>
// //               <div className="space-y-3 text-gray-400">
// //                 {[
// //                   { icon: Mail, text: 'hello@emotional.com' },
// //                   { icon: Phone, text: '1-800-EMOTION' },
// //                   { icon: MapPin, text: 'Everywhere, Earth' }
// //                 ].map((item, index) => (
// //                   <div key={index} className="flex items-center space-x-2 hover:text-white hover:translate-x-2 transform transition-all duration-300 cursor-pointer">
// //                     <item.icon className="w-4 h-4" />
// //                     <span className="text-sm">{item.text}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
// //             <p className="hover:text-white transition-colors duration-300">
// //               &copy; 2025 EmotionalJourney. Made with <Heart className="w-4 h-4 inline text-red-400 animate-pulse" /> for human connection.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>

// //       <style jsx>{`
// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }

// //         @keyframes bounceIn {
// //           0% {
// //             opacity: 0;
// //             transform: scale(0.3);
// //           }
// //           50% {
// //             opacity: 1;
// //             transform: scale(1.05);
// //           }
// //           70% {
// //             transform: scale(0.9);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: scale(1);
// //           }
// //         }

// //         @keyframes float {
// //           0%, 100% {
// //             transform: translateY(0px);
// //           }
// //           50% {
// //             transform: translateY(-20px);
// //           }
// //         }

// //         @keyframes twinkle {
// //           0%, 100% {
// //             opacity: 0.2;
// //           }
// //           50% {
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //           }
// //           to {
// //             opacity: 1;
// //           }
// //         }

// //         .animate-fadeInUp {
// //           animation: fadeInUp 1s ease-out forwards;
// //         }

// //         .animate-bounceIn {
// //           animation: bounceIn 0.6s ease-out;
// //         }

// //         .animate-float {
// //           animation: float 6s ease-in-out infinite;
// //         }

// //         .animate-twinkle {
// //           animation: twinkle 3s ease-in-out infinite;
// //         }

// //         .animate-fadeIn {
// //           animation: fadeIn 0.5s ease-in-out;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };
// // export default EmotionalLandingPage;

// // // import React, { useState, useEffect } from 'react';
// // // import { Heart, Smile, CloudRain, Sun, Compass, Users, Brain, Lightbulb, Star, Mail, Phone, MapPin, ChevronDown, X, Gift, Sparkles } from 'lucide-react';

// // // const EmotionalLandingPage = () => {
// // //   const [selectedEmotion, setSelectedEmotion] = useState(null);
// // //   const [isVisible, setIsVisible] = useState({});
// // //   const [heroText, setHeroText] = useState('');
// // //   const [currentTestimonial, setCurrentTestimonial] = useState(0);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [popupIndex, setPopupIndex] = useState(0);

// // //   const fullHeroText = "Feel Every Emotion";

// // //   const popupMessages = [
// // //     {
// // //       title: "🌟 Discover Your True Self",
// // //       message: "Your emotions are the key to understanding who you really are.",
// // //       icon: <Sparkles className="w-8 h-8 text-yellow-400" />
// // //     },
// // //     {
// // //       title: "💝 Free Emotional Assessment",
// // //       message: "Take our 2-minute quiz to unlock your emotional intelligence!",
// // //       icon: <Gift className="w-8 h-8 text-pink-400" />
// // //     },
// // //     {
// // //       title: "🚀 Transform Your Life Today",
// // //       message: "Join thousands who found peace through emotional awareness.",
// // //       icon: <Star className="w-8 h-8 text-purple-400" />
// // //     },
// // //     {
// // //       title: "💖 You're Not Alone",
// // //       message: "Connect with a community that understands your journey.",
// // //       icon: <Heart className="w-8 h-8 text-red-400" />
// // //     }
// // //   ];

// // //   useEffect(() => {
// // //     // Popup timer - shows every 5 seconds
// // //     const popupTimer = setInterval(() => {
// // //       setShowPopup(true);
// // //       setPopupIndex((prev) => (prev + 1) % popupMessages.length);

// // //       // Auto-hide popup after 4 seconds
// // //       setTimeout(() => {
// // //         setShowPopup(false);
// // //       }, 4000);
// // //     }, 5000);

// // //     return () => clearInterval(popupTimer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Typewriter effect for hero text
// // //     let index = 0;
// // //     const timer = setInterval(() => {
// // //       if (index < fullHeroText.length) {
// // //         setHeroText(fullHeroText.slice(0, index + 1));
// // //         index++;
// // //       } else {
// // //         clearInterval(timer);
// // //       }
// // //     }, 150);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Auto-rotate testimonials
// // //     const timer = setInterval(() => {
// // //       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
// // //     }, 4000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Mouse parallax effect
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({
// // //         x: (e.clientX / window.innerWidth) * 100,
// // //         y: (e.clientY / window.innerHeight) * 100,
// // //       });
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Intersection Observer for scroll animations
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible((prev) => ({
// // //               ...prev,
// // //               [entry.target.id]: true,
// // //             }));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const elements = document.querySelectorAll('[data-animate]');
// // //     elements.forEach((el) => observer.observe(el));

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const emotions = [
// // //     { name: 'Joy', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', icon: <Sun className="w-8 h-8" />, description: 'The sunshine that brightens every moment', delay: '0s' },
// // //     { name: 'Love', color: 'bg-gradient-to-br from-pink-500 to-red-500', icon: <Heart className="w-8 h-8" />, description: 'The force that connects all hearts together', delay: '0.1s' },
// // //     { name: 'Peace', color: 'bg-gradient-to-br from-green-400 to-teal-500', icon: <Compass className="w-8 h-8" />, description: 'The calm within life\'s beautiful chaos', delay: '0.2s' },
// // //     { name: 'Hope', color: 'bg-gradient-to-br from-blue-400 to-indigo-500', icon: <Star className="w-8 h-8" />, description: 'The light that guides us through darkness', delay: '0.3s' },
// // //     { name: 'Wonder', color: 'bg-gradient-to-br from-purple-500 to-pink-500', icon: <Lightbulb className="w-8 h-8" />, description: 'The magic that makes life extraordinary', delay: '0.4s' },
// // //     { name: 'Growth', color: 'bg-gradient-to-br from-indigo-500 to-purple-600', icon: <Sparkles className="w-8 h-8" />, description: 'The journey that transforms who we become', delay: '0.5s' }
// // //   ];

// // //   const testimonials = [
// // //     {
// // //       quote: "This platform helped me embrace emotions I never knew I had. Life-changing!",
// // //       name: "Alex Rivera",
// // //       role: "Creative Director"
// // //     },
// // //     {
// // //       quote: "Finally found peace with my feelings. Every emotion has become my teacher.",
// // //       name: "Sam Chen",
// // //       role: "Mindfulness Coach"
// // //     },
// // //     {
// // //       quote: "My relationships transformed when I learned to honor my authentic self.",
// // //       name: "Jordan Blake",
// // //       role: "Author & Speaker"
// // //     }
// // //   ];

// // //   const benefits = [
// // //     {
// // //       icon: <Brain className="w-16 h-16 text-cyan-400" />,
// // //       title: "Emotional Mastery",
// // //       description: "Transform overwhelming feelings into powerful insights and personal growth."
// // //     },
// // //     {
// // //       icon: <Users className="w-16 h-16 text-emerald-400" />,
// // //       title: "Deeper Connections",
// // //       description: "Build authentic relationships through vulnerability and emotional intelligence."
// // //     },
// // //     {
// // //       icon: <Heart className="w-16 h-16 text-rose-400" />,
// // //       title: "Inner Harmony",
// // //       description: "Discover lasting peace by embracing all parts of your emotional spectrum."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
// // //       {/* Popup Notification */}
// // //       {showPopup && (
// // //         <div className="fixed top-6 right-6 z-50 animate-slideInRight">
// // //           <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-2xl max-w-sm transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-lg">
// // //             <div className="flex items-start justify-between mb-3">
// // //               <div className="flex items-center space-x-3">
// // //                 {popupMessages[popupIndex].icon}
// // //                 <h3 className="font-bold text-white text-lg">{popupMessages[popupIndex].title}</h3>
// // //               </div>
// // //               <button
// // //                 onClick={() => setShowPopup(false)}
// // //                 className="text-white/70 hover:text-white transition-colors"
// // //               >
// // //                 <X className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //             <p className="text-white/90 text-sm leading-relaxed mb-4">
// // //               {popupMessages[popupIndex].message}
// // //             </p>
// // //             <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm">
// // //               Learn More
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Dynamic Background Gradient */}
// // //       <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 opacity-50"></div>

// // //       {/* Animated Background Particles */}
// // //       <div className="fixed inset-0 pointer-events-none z-0">
// // //         {[...Array(30)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="absolute animate-pulse"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 5}s`,
// // //               animationDuration: `${3 + Math.random() * 4}s`,
// // //             }}
// // //           >
// // //             <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40"></div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Hero Section */}
// // //       <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 overflow-hidden">
// // //         {/* Parallax Background */}
// // //         <div
// // //           className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 transition-transform duration-1000 ease-out"
// // //           style={{
// // //             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
// // //           }}
// // //         ></div>

// // //         <img
// // //           src="/api/placeholder/1920/1080"
// // //           alt="Emotional journey visualization"
// // //           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 transition-transform duration-1000"
// // //           style={{
// // //             transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
// // //           }}
// // //         />

// // //         {/* Floating Elements */}
// // //         <div className="absolute inset-0">
// // //           <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
// // //             <Heart className="w-12 h-12 text-pink-400 opacity-70" />
// // //           </div>
// // //           <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
// // //             <Sparkles className="w-10 h-10 text-cyan-400 opacity-70" />
// // //           </div>
// // //           <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
// // //             <Star className="w-14 h-14 text-yellow-400 opacity-70" />
// // //           </div>
// // //         </div>

// // //         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
// // //           <div className="mb-6 overflow-hidden">
// // //             <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight animate-fadeInUp">
// // //               <span className="inline-block">{heroText}</span>
// // //               <span className="animate-pulse text-white">|</span>
// // //             </h1>
// // //             <h2 className="text-2xl md:text-4xl font-light text-cyan-200 mt-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
// // //               Transform Your Inner World
// // //             </h2>
// // //           </div>

// // //           <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-4xl mx-auto leading-relaxed opacity-0 animate-fadeInUp"
// // //              style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
// // //             Step into a realm where every emotion becomes your superpower. Discover the extraordinary life waiting beyond fear, doubt, and emotional confusion.
// // //           </p>

// // //           <div className="opacity-0 animate-fadeInUp space-y-4" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
// // //             <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden mr-4">
// // //               <span className="relative z-10">Begin Your Journey</span>
// // //               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //             </button>
// // //             <button className="group border-2 border-cyan-400 text-cyan-400 hover:text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
// // //               <span className="relative z-10">Watch Demo</span>
// // //               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Scroll Indicator */}
// // //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// // //           <ChevronDown className="w-10 h-10 text-cyan-400" />
// // //         </div>
// // //       </section>

// // //       {/* About Emotions Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative">
// // //         <div className="max-w-7xl mx-auto" id="emotions-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
// // //               The Emotional Universe
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
// // //               Every emotion is a portal to deeper self-understanding. Explore the infinite spectrum of human experience and unlock your emotional intelligence.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {emotions.map((emotion, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`group cursor-pointer transform hover:scale-110 transition-all duration-700 hover:-rotate-2 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{
// // //                   transitionDelay: isVisible['emotions-section'] ? emotion.delay : '0s',
// // //                   animationDelay: emotion.delay
// // //                 }}
// // //               >
// // //                 <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600 hover:border-cyan-400 transition-all duration-500 text-center relative overflow-hidden">
// // //                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// // //                   <div className={`w-24 h-24 ${emotion.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:animate-pulse relative overflow-hidden`}>
// // //                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
// // //                     {emotion.icon}
// // //                   </div>

// // //                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // //                     {emotion.name}
// // //                   </h3>

// // //                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
// // //                     {emotion.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-r from-purple-900 to-cyan-900 relative overflow-hidden">
// // //         <div className="max-w-7xl mx-auto" id="testimonials-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['testimonials-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl py-10 md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Life-Changing Stories
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// // //               Real transformations from people who discovered their emotional superpowers.
// // //             </p>
// // //           </div>

// // //           {/* Animated Testimonial Carousel */}
// // //           <div className="relative max-w-5xl mx-auto mb-12">
// // //             <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden border border-gray-600">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400"></div>

// // //               {testimonials.map((testimonial, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`transition-all duration-1000 ${index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}`}
// // //                 >
// // //                   <div className="text-center">
// // //                     <div className="mb-8">
// // //                       <img
// // //                         src={`/api/placeholder/120/120`}
// // //                         alt={testimonial.name}
// // //                         className="w-24 h-24 rounded-full mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-cyan-400"
// // //                       />
// // //                       <p className="text-gray-200 text-3xl leading-relaxed mb-6 font-light italic">
// // //                         "{testimonial.quote}"
// // //                       </p>
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="font-bold text-white text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                         {testimonial.name}
// // //                       </h4>
// // //                       <p className="text-gray-400 text-lg">{testimonial.role}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Testimonial Indicators */}
// // //             <div className="flex justify-center mt-8 space-x-3">
// // //               {testimonials.map((_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => setCurrentTestimonial(index)}
// // //                   className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Benefits Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative">
// // //         <div className="max-w-7xl mx-auto" id="benefits-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Unlock Your Potential
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
// // //               When you master your emotions, you master your life. Discover the extraordinary benefits of emotional intelligence.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// // //             {benefits.map((benefit, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`group transform hover:scale-105 transition-all duration-700 hover:-translate-y-4 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{ transitionDelay: isVisible['benefits-section'] ? `${index * 0.2}s` : '0s' }}
// // //               >
// // //                 <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600 hover:border-cyan-400 transition-all duration-500 text-center relative overflow-hidden h-full">
// // //                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// // //                   <div className="mb-8 flex justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 relative">
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
// // //                     {benefit.icon}
// // //                   </div>

// // //                   <h3 className="text-2xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // //                     {benefit.title}
// // //                   </h3>

// // //                   <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
// // //                     {benefit.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Interactive Emotion Wheel */}
// // //       <section className="py-24 px-6 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
// // //         <div className="max-w-6xl mx-auto text-center" id="wheel-section" data-animate>
// // //           <div className={`mb-16 transition-all duration-1000 ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Your Emotional Compass
// // //             </h2>
// // //             <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
// // //               Navigate your inner landscape with our interactive emotion explorer. Each feeling is a doorway to self-discovery.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
// // //             {emotions.map((emotion, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => setSelectedEmotion(emotion)}
// // //                 className={`${emotion.color} text-white p-8 rounded-3xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 flex flex-col items-center space-y-4 hover:-rotate-3 relative overflow-hidden group ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{
// // //                   transitionDelay: isVisible['wheel-section'] ? `${index * 0.1}s` : '0s',
// // //                   animationDelay: `${index * 0.1}s`
// // //                 }}
// // //               >
// // //                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // //                 <div className="group-hover:animate-bounce text-2xl">
// // //                   {emotion.icon}
// // //                 </div>
// // //                 <span className="font-bold text-xl relative z-10">{emotion.name}</span>
// // //                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {selectedEmotion && (
// // //             <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl max-w-2xl mx-auto transform animate-bounceIn relative overflow-hidden border border-cyan-400">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
// // //               <div className="absolute top-6 right-6">
// // //                 <div className={`w-12 h-12 ${selectedEmotion.color} rounded-full animate-pulse`}></div>
// // //               </div>
// // //               <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                 {selectedEmotion.name}
// // //               </h3>
// // //               <p className="text-gray-300 leading-relaxed text-xl">
// // //                 {selectedEmotion.description}
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* Call to Action Section */}
// // //       <section className="relative py-24 px-6 bg-gradient-to-r from-cyan-900 to-purple-900 text-white overflow-hidden">
// // //         <div className="absolute inset-0 bg-black opacity-30"></div>

// // //         {/* Animated Background Elements */}
// // //         <div className="absolute inset-0">
// // //           {[...Array(20)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute animate-float"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 5}s`,
// // //                 animationDuration: `${6 + Math.random() * 4}s`,
// // //               }}
// // //             >
// // //               <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30"></div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <img
// // //           src="/api/placeholder/1920/600"
// // //           alt="Transformation landscape"
// // //           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
// // //         />

// // //         <div className="relative z-10 max-w-5xl mx-auto text-center" id="cta-section" data-animate>
// // //           <div className={`transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
// // //               Ready to
// // //               <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
// // //                 Transform Everything?
// // //               </span>
// // //             </h2>
// // //             <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
// // //               Your emotional mastery journey starts with a single step. Don't let another day pass living below your potential.
// // //             </p>

// // //             <div className="space-y-4">
// // //               <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden mr-4">
// // //                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Free Today</span>
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //               </button>

// // //               <p className="text-cyan-200 text-lg mt-4">
// // //                 ✨ No credit card required • Join 50,000+ transforming lives
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden border-t border-gray-700">
// // //         <div className="absolute inset-0">
// // //           {[...Array(15)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute animate-twinkle"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 3}s`,
// // //               }}
// // //             >
// // //               <Star className="w-3 h-3 text-cyan-400 opacity-40" />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="max-w-7xl mx-auto relative z-10" id="footer-section" data-animate>
// // //           <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${isVisible['footer-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <div className="md:col-span-2">
// // //               <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                 EmotionalMastery
// // //               </h3>
// // //               <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
// // //                 Empowering souls worldwide to embrace their emotional intelligence and transform their lives through authentic self-discovery.
// // //               </p>
// // //               <div className="flex space-x-4">
// // //                 {[Heart, Users, Smile].map((Icon, index) => (
// // //                   <div key={index} className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-500 cursor-pointer hover:scale-125 transform hover:rotate-12 border border-gray-600 hover:border-cyan-400">
// // //                     <Icon className="w-6 h-6" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <div className="transform hover:scale-105 transition-transform duration-300">
// // //               <h4 className="font-bold mb-6 text-xl text-cyan-400">Explore</h4>
// // //               <ul className="space-y-3 text-gray-400">
// // //                 {['Emotion Library', 'Assessment Tools', 'Community Hub', 'Success Stories', 'Expert Guidance'].map((item, index) => (
// // //                   <li key={index}>
// // //                     <a href="#" className="hover:text-cyan-400 hover:translate-x-2 transform transition-all duration-300 inline-block text-lg">
// // //                       {item}
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             <div className="transform hover:scale-105 transition-transform duration-300">
// // //               <h4 className="font-bold mb-6 text-xl text-purple-400">Connect</h4>
// // //               <div className="space-y-4 text-gray-400">
// // //                 {[
// // //                   { icon: Mail, text: 'hello@emotionalmastery.com' },
// // //                   { icon: Phone, text: '1-800-EMOTIONS' },
// // //                   { icon: MapPin, text: 'Global Community' }
// // //                 ].map((item, index) => (
// // //                   <div key={index} className="flex items-center space-x-3 hover:text-cyan-400 hover:translate-x-2 transform transition-all duration-300 cursor-pointer">
// // //                     <item.icon className="w-5 h-5" />
// // //                     <span className="text-lg">{item.text}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="border-t border-gray-700 pt-8 text-center">
// // //             <p className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
// // //               &copy; 2025 EmotionalMastery. Crafted with <Heart className="w-5 h-5 inline text-red-400 animate-pulse mx-1" /> for human transformation.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </footer>

// // //       <style jsx>{`
// // //         @keyframes fadeInUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes bounceIn {
// // //           0% {
// // //             opacity: 0;
// // //             transform: scale(0.3);
// // //           }
// // //           50% {
// // //             opacity: 1;
// // //             transform: scale(1.05);
// // //           }
// // //           70% {
// // //             transform: scale(0.9);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         @keyframes float {
// // //           0%, 100% {
// // //             transform: translateY(0px);
// // //           }
// // //           50% {
// // //             transform: translateY(-20px);
// // //           }
// // //         }

// // //         @keyframes twinkle {
// // //           0%, 100% {
// // //             opacity: 0.2;
// // //           }
// // //           50% {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //           }
// // //           to {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes slideInRight {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(100%);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         .animate-fadeInUp {
// // //           animation: fadeInUp 1s ease-out forwards;
// // //         }

// // //         .animate-bounceIn {
// // //           animation: bounceIn 0.6s ease-out;
// // //         }

// // //         .animate-float {
// // //           animation: float 6s ease-in-out infinite;
// // //         }

// // //         .animate-twinkle {
// // //           animation: twinkle 3s ease-in-out infinite;
// // //         }

// // //         .animate-fadeIn {
// // //           animation: fadeIn 0.5s ease-in-out;
// // //         }

// // //         .animate-slideInRight {
// // //           animation: slideInRight 0.5s ease-out;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default EmotionalLandingPage;

// // // import React, { useState, useEffect } from 'react';
// // // import { Heart, Smile, CloudRain, Sun, Compass, Users, Brain, Lightbulb, Star, Mail, Phone, MapPin, ChevronDown, X, Gift, Sparkles } from 'lucide-react';

// // // const EmotionalLandingPage = () => {
// // //   const [selectedEmotion, setSelectedEmotion] = useState(null);
// // //   const [isVisible, setIsVisible] = useState({});
// // //   const [heroText, setHeroText] = useState('');
// // //   const [currentTestimonial, setCurrentTestimonial] = useState(0);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [popupIndex, setPopupIndex] = useState(0);

// // //   const fullHeroText = "Feel Every Emotion";

// // //   const popupMessages = [
// // //     {
// // //       title: "🌟 Discover Your True Self",
// // //       message: "Your emotions are the key to understanding who you really are.",
// // //       icon: <Sparkles className="w-8 h-8 text-yellow-400" />
// // //     },
// // //     {
// // //       title: "💝 Free Emotional Assessment",
// // //       message: "Take our 2-minute quiz to unlock your emotional intelligence!",
// // //       icon: <Gift className="w-8 h-8 text-pink-400" />
// // //     },
// // //     {
// // //       title: "🚀 Transform Your Life Today",
// // //       message: "Join thousands who found peace through emotional awareness.",
// // //       icon: <Star className="w-8 h-8 text-purple-400" />
// // //     },
// // //     {
// // //       title: "💖 You're Not Alone",
// // //       message: "Connect with a community that understands your journey.",
// // //       icon: <Heart className="w-8 h-8 text-red-400" />
// // //     }
// // //   ];

// // //   useEffect(() => {
// // //     // Popup timer - shows every 5 seconds
// // //     const popupTimer = setInterval(() => {
// // //       setShowPopup(true);
// // //       setPopupIndex((prev) => (prev + 1) % popupMessages.length);

// // //       // Auto-hide popup after 4 seconds
// // //       setTimeout(() => {
// // //         setShowPopup(false);
// // //       }, 4000);
// // //     }, 5000);

// // //     return () => clearInterval(popupTimer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Typewriter effect for hero text
// // //     let index = 0;
// // //     const timer = setInterval(() => {
// // //       if (index < fullHeroText.length) {
// // //         setHeroText(fullHeroText.slice(0, index + 1));
// // //         index++;
// // //       } else {
// // //         clearInterval(timer);
// // //       }
// // //     }, 150);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Auto-rotate testimonials
// // //     const timer = setInterval(() => {
// // //       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
// // //     }, 4000);

// // //     return () => clearInterval(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Mouse parallax effect
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({
// // //         x: (e.clientX / window.innerWidth) * 100,
// // //         y: (e.clientY / window.innerHeight) * 100,
// // //       });
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Intersection Observer for scroll animations
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible((prev) => ({
// // //               ...prev,
// // //               [entry.target.id]: true,
// // //             }));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     const elements = document.querySelectorAll('[data-animate]');
// // //     elements.forEach((el) => observer.observe(el));

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   const emotions = [
// // //     { name: 'Joy', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', icon: <Sun className="w-8 h-8" />, description: 'The sunshine that brightens every moment', delay: '0s' },
// // //     { name: 'Love', color: 'bg-gradient-to-br from-pink-500 to-red-500', icon: <Heart className="w-8 h-8" />, description: 'The force that connects all hearts together', delay: '0.1s' },
// // //     { name: 'Peace', color: 'bg-gradient-to-br from-green-400 to-teal-500', icon: <Compass className="w-8 h-8" />, description: 'The calm within life\'s beautiful chaos', delay: '0.2s' },
// // //     { name: 'Hope', color: 'bg-gradient-to-br from-blue-400 to-indigo-500', icon: <Star className="w-8 h-8" />, description: 'The light that guides us through darkness', delay: '0.3s' },
// // //     { name: 'Wonder', color: 'bg-gradient-to-br from-purple-500 to-pink-500', icon: <Lightbulb className="w-8 h-8" />, description: 'The magic that makes life extraordinary', delay: '0.4s' },
// // //     { name: 'Growth', color: 'bg-gradient-to-br from-indigo-500 to-purple-600', icon: <Sparkles className="w-8 h-8" />, description: 'The journey that transforms who we become', delay: '0.5s' }
// // //   ];

// // //   const testimonials = [
// // //     {
// // //       quote: "This platform helped me embrace emotions I never knew I had. Life-changing!",
// // //       name: "Alex Rivera",
// // //       role: "Creative Director"
// // //     },
// // //     {
// // //       quote: "Finally found peace with my feelings. Every emotion has become my teacher.",
// // //       name: "Sam Chen",
// // //       role: "Mindfulness Coach"
// // //     },
// // //     {
// // //       quote: "My relationships transformed when I learned to honor my authentic self.",
// // //       name: "Jordan Blake",
// // //       role: "Author & Speaker"
// // //     }
// // //   ];

// // //   const benefits = [
// // //     {
// // //       icon: <Brain className="w-16 h-16 text-cyan-400" />,
// // //       title: "Emotional Mastery",
// // //       description: "Transform overwhelming feelings into powerful insights and personal growth."
// // //     },
// // //     {
// // //       icon: <Users className="w-16 h-16 text-emerald-400" />,
// // //       title: "Deeper Connections",
// // //       description: "Build authentic relationships through vulnerability and emotional intelligence."
// // //     },
// // //     {
// // //       icon: <Heart className="w-16 h-16 text-rose-400" />,
// // //       title: "Inner Harmony",
// // //       description: "Discover lasting peace by embracing all parts of your emotional spectrum."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-amber-600 text-white overflow-x-hidden relative">
// // //       {/* Popup Notification */}
// // //       {/* {showPopup && (
// // //         <div className="fixed top-6 right-6 z-50 animate-slideInRight">
// // //           <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-6 rounded-2xl shadow-2xl max-w-sm transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-lg">
// // //             <div className="flex items-start justify-between mb-3">
// // //               <div className="flex items-center space-x-3">
// // //                 {popupMessages[popupIndex].icon}
// // //                 <h3 className="font-bold text-white text-lg">{popupMessages[popupIndex].title}</h3>
// // //               </div>
// // //               <button
// // //                 onClick={() => setShowPopup(false)}
// // //                 className="text-white/70 hover:text-white transition-colors"
// // //               >
// // //                 <X className="w-5 h-5" />
// // //               </button>
// // //             </div>
// // //             <p className="text-white/90 text-sm leading-relaxed mb-4">
// // //               {popupMessages[popupIndex].message}
// // //             </p>
// // //             <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm">
// // //               Learn More
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )} */}

// // //       {/* Dynamic Background Gradient */}
// // //       <div className="fixed inset-0 opacity-50"></div>

// // //       {/* Animated Background Particles */}
// // //       <div className="fixed inset-0 pointer-events-none z-0">
// // //         {[...Array(30)].map((_, i) => (
// // //           <div
// // //             key={i}
// // //             className="absolute animate-pulse"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               top: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 5}s`,
// // //               animationDuration: `${3 + Math.random() * 4}s`,
// // //             }}
// // //           >
// // //             <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40"></div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Hero Section */}
// // //       <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
// // //         {/* Parallax Background */}
// // //         <div
// // //           className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-orange-600/30 transition-transform duration-1000 ease-out"
// // //           style={{
// // //             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
// // //           }}
// // //         ></div>

// // //         <img
// // //           src="/api/placeholder/1920/1080"
// // //           alt="Emotional journey visualization"
// // //           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 transition-transform duration-1000"
// // //           style={{
// // //             transform: `scale(1.1) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
// // //           }}
// // //         />

// // //         {/* Floating Elements */}
// // //         <div className="absolute inset-0">
// // //           <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
// // //             <Heart className="w-12 h-12 text-pink-400 opacity-70" />
// // //           </div>
// // //           <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
// // //             <Sparkles className="w-10 h-10 text-cyan-400 opacity-70" />
// // //           </div>
// // //           <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
// // //             <Star className="w-14 h-14 text-yellow-400 opacity-70" />
// // //           </div>
// // //         </div>

// // //         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
// // //           <div className="mb-6 overflow-hidden">
// // //             <h1 className="text-6xl md:text-8xl font-bold bg-[white] bg-clip-text text-transparent leading-tight animate-fadeInUp">
// // //               <span className="inline-block">{heroText}</span>
// // //               <span className="animate-pulse text-white">|</span>
// // //             </h1>
// // //             <h2 className="text-2xl md:text-4xl font-light text-cyan-200 mt-4 animate-fadeInUp" style={{ animationDelay: '1s' }}>
// // //               Transform Your Inner World
// // //             </h2>
// // //           </div>
// // //           <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-4xl mx-auto leading-relaxed opacity-0 animate-fadeInUp"
// // //              style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
// // //             Step into a realm where every emotion becomes your superpower. Discover the extraordinary life waiting beyond fear, doubt, and emotional confusion.
// // //           </p>
// // //           <div className="opacity-0 animate-fadeInUp space-y-4" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
// // //             <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden mr-4">
// // //               <span className="relative z-10">Begin Your Journey</span>
// // //               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //             </button>
// // //             <button className="group border-2 border-cyan-400 text-cyan-400 hover:text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
// // //               <span className="relative z-10">Watch Demo</span>
// // //               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Scroll Indicator */}
// // //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// // //           <ChevronDown className="w-10 h-10 text-cyan-400" />
// // //         </div>
// // //       </section>

// // //       {/* About Emotions Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative">
// // //         <div className="max-w-7xl mx-auto" id="emotions-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
// // //               The Emotional Universe
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
// // //               Every emotion is a portal to deeper self-understanding. Explore the infinite spectrum of human experience and unlock your emotional intelligence.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {emotions.map((emotion, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`group cursor-pointer transform hover:scale-110 transition-all duration-700 hover:-rotate-2 ${isVisible['emotions-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{
// // //                   transitionDelay: isVisible['emotions-section'] ? emotion.delay : '0s',
// // //                   animationDelay: emotion.delay
// // //                 }}
// // //               >
// // //                 <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600 hover:border-cyan-400 transition-all duration-500 text-center relative overflow-hidden">
// // //                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// // //                   <div className={`w-24 h-24 ${emotion.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:animate-pulse relative overflow-hidden`}>
// // //                     <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
// // //                     {emotion.icon}
// // //                   </div>

// // //                   <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // //                     {emotion.name}
// // //                   </h3>

// // //                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
// // //                     {emotion.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-r from-purple-900 to-cyan-900 relative overflow-hidden">
// // //         <div className="max-w-7xl mx-auto" id="testimonials-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['testimonials-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl py-10 md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Life-Changing Stories
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
// // //               Real transformations from people who discovered their emotional superpowers.
// // //             </p>
// // //           </div>

// // //           {/* Animated Testimonial Carousel */}
// // //           <div className="relative max-w-5xl mx-auto mb-12">
// // //             <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden border border-gray-600">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400"></div>

// // //               {testimonials.map((testimonial, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className={`transition-all duration-1000 ${index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full'}`}
// // //                 >
// // //                   <div className="text-center">
// // //                     <div className="mb-8">
// // //                       <img
// // //                         src={`/api/placeholder/120/120`}
// // //                         alt={testimonial.name}
// // //                         className="w-24 h-24 rounded-full mx-auto mb-6 transform hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-cyan-400"
// // //                       />
// // //                       <p className="text-gray-200 text-3xl leading-relaxed mb-6 font-light italic">
// // //                         "{testimonial.quote}"
// // //                       </p>
// // //                     </div>
// // //                     <div>
// // //                       <h4 className="font-bold text-white text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                         {testimonial.name}
// // //                       </h4>
// // //                       <p className="text-gray-400 text-lg">{testimonial.role}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Testimonial Indicators */}
// // //             <div className="flex justify-center mt-8 space-x-3">
// // //               {testimonials.map((_, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => setCurrentTestimonial(index)}
// // //                   className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Benefits Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative">
// // //         <div className="max-w-7xl mx-auto" id="benefits-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Unlock Your Potential
// // //             </h2>
// // //             <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
// // //               When you master your emotions, you master your life. Discover the extraordinary benefits of emotional intelligence.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// // //             {benefits.map((benefit, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`group transform hover:scale-105 transition-all duration-700 hover:-translate-y-4 ${isVisible['benefits-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{ transitionDelay: isVisible['benefits-section'] ? `${index * 0.2}s` : '0s' }}
// // //               >
// // //                 <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl border border-gray-600 hover:border-cyan-400 transition-all duration-500 text-center relative overflow-hidden h-full">
// // //                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

// // //                   <div className="mb-8 flex justify-center group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 relative">
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150"></div>
// // //                     {benefit.icon}
// // //                   </div>

// // //                   <h3 className="text-2xl font-bold text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // //                     {benefit.title}
// // //                   </h3>

// // //                   <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-300">
// // //                     {benefit.description}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Interactive Emotion Wheel */}
// // //       <section className="py-24 px-6 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
// // //         <div className="max-w-6xl mx-auto text-center" id="wheel-section" data-animate>
// // //           <div className={`mb-16 transition-all duration-1000 ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
// // //               Your Emotional Compass
// // //             </h2>
// // //             <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
// // //               Navigate your inner landscape with our interactive emotion explorer. Each feeling is a doorway to self-discovery.
// // //             </p>
// // //           </div>

// // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
// // //             {emotions.map((emotion, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => setSelectedEmotion(emotion)}
// // //                 className={`${emotion.color} text-white p-8 rounded-3xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 flex flex-col items-center space-y-4 hover:-rotate-3 relative overflow-hidden group ${isVisible['wheel-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{
// // //                   transitionDelay: isVisible['wheel-section'] ? `${index * 0.1}s` : '0s',
// // //                   animationDelay: `${index * 0.1}s`
// // //                 }}
// // //               >
// // //                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // //                 <div className="group-hover:animate-bounce text-2xl">
// // //                   {emotion.icon}
// // //                 </div>
// // //                 <span className="font-bold text-xl relative z-10">{emotion.name}</span>
// // //                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
// // //               </button>
// // //             ))}
// // //           </div>

// // //           {selectedEmotion && (
// // //             <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl max-w-2xl mx-auto transform animate-bounceIn relative overflow-hidden border border-cyan-400">
// // //               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
// // //               <div className="absolute top-6 right-6">
// // //                 <div className={`w-12 h-12 ${selectedEmotion.color} rounded-full animate-pulse`}></div>
// // //               </div>
// // //               <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                 {selectedEmotion.name}
// // //               </h3>
// // //               <p className="text-gray-300 leading-relaxed text-xl">
// // //                 {selectedEmotion.description}
// // //               </p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>

// // //       {/* Articles/Blog Section */}
// // //       <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
// // //         <div className="absolute inset-0">
// // //           {[...Array(15)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute animate-pulse"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 3}s`,
// // //                 animationDuration: `${4 + Math.random() * 3}s`,
// // //               }}
// // //             >
// // //               <div className="w-2 h-2 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full opacity-40"></div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="max-w-7xl mx-auto relative z-10" id="blog-section" data-animate>
// // //           <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
// // //               Wisdom for Your Journey
// // //             </h2>
// // //             <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
// // //               Dive deep into emotional intelligence with our expertly crafted articles, guides, and insights that will transform your understanding of yourself.
// // //             </p>
// // //           </div>

// // //           {/* Featured Article */}
// // //           <div className={`mb-16 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
// // //             <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200 hover:shadow-amber-200/50 transition-all duration-500 group">
// // //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
// // //                 <div>
// // //                   <div className="flex items-center space-x-2 mb-4">
// // //                     <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
// // //                       Featured Article
// // //                     </span>
// // //                     <span className="text-amber-600 text-sm">5 min read</span>
// // //                   </div>
// // //                   <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
// // //                     The Science Behind Emotional Resilience: Why Some People Bounce Back Faster
// // //                   </h3>
// // //                   <p className="text-gray-600 text-lg leading-relaxed mb-6">
// // //                     Discover the neurological secrets of emotional resilience and learn practical techniques used by psychologists to build unshakeable mental strength. This comprehensive guide reveals how you can rewire your brain for better emotional outcomes.
// // //                   </p>
// // //                   <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-orange-500 group-hover:to-amber-500">
// // //                     Read Full Article
// // //                   </button>
// // //                 </div>
// // //                 <div className="relative">
// // //                   <img
// // //                     src="/api/placeholder/600/400"
// // //                     alt="Emotional resilience illustration"
// // //                     className="rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-2xl"></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Article Grid */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {[
// // //               {
// // //                 title: "5 Daily Habits That Boost Emotional Intelligence",
// // //                 excerpt: "Simple, science-backed practices you can start today to enhance your emotional awareness and social skills.",
// // //                 readTime: "3 min read",
// // //                 category: "Daily Practice",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.1s"
// // //               },
// // //               {
// // //                 title: "Understanding Anxiety: Your Mind's Protection System",
// // //                 excerpt: "Reframe anxiety from enemy to ally. Learn how this emotion serves you and when to seek support.",
// // //                 readTime: "7 min read",
// // //                 category: "Mental Health",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.2s"
// // //               },
// // //               {
// // //                 title: "The Art of Emotional Boundaries in Relationships",
// // //                 excerpt: "Master the delicate balance of staying connected while protecting your emotional well-being.",
// // //                 readTime: "6 min read",
// // //                 category: "Relationships",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.3s"
// // //               },
// // //               {
// // //                 title: "From Shame to Self-Compassion: A Healing Journey",
// // //                 excerpt: "Transform your inner critic into your greatest supporter with proven self-compassion techniques.",
// // //                 readTime: "8 min read",
// // //                 category: "Self-Growth",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.4s"
// // //               },
// // //               {
// // //                 title: "The Neuroscience of Gratitude and Joy",
// // //                 excerpt: "Discover how gratitude literally rewires your brain for happiness and emotional well-being.",
// // //                 readTime: "4 min read",
// // //                 category: "Science",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.5s"
// // //               },
// // //               {
// // //                 title: "Emotional Intelligence in Leadership",
// // //                 excerpt: "Why the most successful leaders aren't the smartest, but the most emotionally intelligent.",
// // //                 readTime: "9 min read",
// // //                 category: "Leadership",
// // //                 image: "/api/placeholder/400/250",
// // //                 delay: "0.6s"
// // //               }
// // //             ].map((article, index) => (
// // //               <div
// // //                 key={index}
// // //                 className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer transform hover:scale-105 hover:-rotate-1 border border-amber-100 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
// // //                 style={{ transitionDelay: isVisible['blog-section'] ? article.delay : '0s' }}
// // //               >
// // //                 <div className="relative overflow-hidden">
// // //                   <img
// // //                     src={article.image}
// // //                     alt={article.title}
// // //                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // //                   <div className="absolute top-4 left-4">
// // //                     <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
// // //                       {article.category}
// // //                     </span>
// // //                   </div>
// // //                 </div>

// // //                 <div className="p-6">
// // //                   <div className="flex items-center justify-between mb-3">
// // //                     <span className="text-amber-600 text-sm font-medium">{article.readTime}</span>
// // //                     <Heart className="w-4 h-4 text-gray-400 hover:text-red-400 transition-colors cursor-pointer" />
// // //                   </div>

// // //                   <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
// // //                     {article.title}
// // //                   </h3>

// // //                   <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
// // //                     {article.excerpt}
// // //                   </p>

// // //                   <div className="flex items-center justify-between">
// // //                     <button className="text-amber-600 font-medium hover:text-orange-600 transition-colors duration-300">
// // //                       Read More →
// // //                     </button>
// // //                     <div className="flex space-x-2">
// // //                       <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
// // //                         <Users className="w-4 h-4 text-amber-600" />
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Newsletter Signup */}
// // //           <div className={`mt-20 transition-all duration-1000 ${isVisible['blog-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.7s' }}>
// // //             <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
// // //               <div className="absolute inset-0">
// // //                 {[...Array(10)].map((_, i) => (
// // //                   <div
// // //                     key={i}
// // //                     className="absolute animate-float"
// // //                     style={{
// // //                       left: `${Math.random() * 100}%`,
// // //                       top: `${Math.random() * 100}%`,
// // //                       animationDelay: `${Math.random() * 3}s`,
// // //                       animationDuration: `${4 + Math.random() * 2}s`,
// // //                     }}
// // //                   >
// // //                     <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div className="relative z-10">
// // //                 <h3 className="text-3xl md:text-4xl font-bold mb-4">
// // //                   Never Miss a Life-Changing Insight
// // //                 </h3>
// // //                 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
// // //                   Get our weekly dose of emotional wisdom, practical tips, and transformative stories delivered straight to your inbox.
// // //                 </p>

// // //                 <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
// // //                   <input
// // //                     type="email"
// // //                     placeholder="Enter your email address"
// // //                     className="flex-1 px-6 py-4 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
// // //                   />
// // //                   <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
// // //                     Subscribe Free
// // //                   </button>
// // //                 </div>

// // //                 <p className="text-sm mt-4 opacity-80">
// // //                   ✨ 50,000+ readers • Unsubscribe anytime • No spam, ever
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Call to Action Section */}
// // //       <section className="relative py-24 px-6 bg-gradient-to-r from-cyan-900 to-purple-900 text-white overflow-hidden">
// // //         <div className="absolute inset-0 bg-black opacity-30"></div>

// // //         {/* Animated Background Elements */}
// // //         <div className="absolute inset-0">
// // //           {[...Array(20)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute animate-float"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 5}s`,
// // //                 animationDuration: `${6 + Math.random() * 4}s`,
// // //               }}
// // //             >
// // //               <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30"></div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <img
// // //           src="/api/placeholder/1920/600"
// // //           alt="Transformation landscape"
// // //           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
// // //         />

// // //         <div className="relative z-10 max-w-5xl mx-auto text-center" id="cta-section" data-animate>
// // //           <div className={`transition-all duration-1000 ${isVisible['cta-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
// // //               Ready to
// // //               <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
// // //                 Transform Everything?
// // //               </span>
// // //             </h2>
// // //             <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
// // //               Your emotional mastery journey starts with a single step. Don't let another day pass living below your potential.
// // //             </p>

// // //             <div className="space-y-4">
// // //               <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-1 relative overflow-hidden mr-4">
// // //                 <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Free Today</span>
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
// // //               </button>

// // //               <p className="text-cyan-200 text-lg mt-4">
// // //                 ✨ No credit card required • Join 50,000+ transforming lives
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden border-t border-gray-700">
// // //         <div className="absolute inset-0">
// // //           {[...Array(15)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="absolute animate-twinkle"
// // //               style={{
// // //                 left: `${Math.random() * 100}%`,
// // //                 top: `${Math.random() * 100}%`,
// // //                 animationDelay: `${Math.random() * 3}s`,
// // //               }}
// // //             >
// // //               <Star className="w-3 h-3 text-cyan-400 opacity-40" />
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="max-w-7xl mx-auto relative z-10" id="footer-section" data-animate>
// // //           <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${isVisible['footer-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
// // //             <div className="md:col-span-2">
// // //               <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
// // //                 EmotionalMastery
// // //               </h3>
// // //               <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
// // //                 Empowering souls worldwide to embrace their emotional intelligence and transform their lives through authentic self-discovery.
// // //               </p>
// // //               <div className="flex space-x-4">
// // //                 {[Heart, Users, Smile].map((Icon, index) => (
// // //                   <div key={index} className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-500 cursor-pointer hover:scale-125 transform hover:rotate-12 border border-gray-600 hover:border-cyan-400">
// // //                     <Icon className="w-6 h-6" />
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <div className="transform hover:scale-105 transition-transform duration-300">
// // //               <h4 className="font-bold mb-6 text-xl text-cyan-400">Explore</h4>
// // //               <ul className="space-y-3 text-gray-400">
// // //                 {['Emotion Library', 'Assessment Tools', 'Community Hub', 'Success Stories', 'Expert Guidance'].map((item, index) => (
// // //                   <li key={index}>
// // //                     <a href="#" className="hover:text-cyan-400 hover:translate-x-2 transform transition-all duration-300 inline-block text-lg">
// // //                       {item}
// // //                     </a>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             <div className="transform hover:scale-105 transition-transform duration-300">
// // //               <h4 className="font-bold mb-6 text-xl text-purple-400">Connect</h4>
// // //               <div className="space-y-4 text-gray-400">
// // //                 {[
// // //                   { icon: Mail, text: 'hello@emotionalmastery.com' },
// // //                   { icon: Phone, text: '1-800-EMOTIONS' },
// // //                   { icon: MapPin, text: 'Global Community' }
// // //                 ].map((item, index) => (
// // //                   <div key={index} className="flex items-center space-x-3 hover:text-cyan-400 hover:translate-x-2 transform transition-all duration-300 cursor-pointer">
// // //                     <item.icon className="w-5 h-5" />
// // //                     <span className="text-lg">{item.text}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="border-t border-gray-700 pt-8 text-center">
// // //             <p className="text-gray-400 hover:text-white transition-colors duration-300 text-lg">
// // //               &copy; 2025 EmotionalMastery. Crafted with <Heart className="w-5 h-5 inline text-red-400 animate-pulse mx-1" /> for human transformation.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </footer>

// // //       <style jsx>{`
// // //         @keyframes fadeInUp {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }

// // //         @keyframes bounceIn {
// // //           0% {
// // //             opacity: 0;
// // //             transform: scale(0.3);
// // //           }
// // //           50% {
// // //             opacity: 1;
// // //             transform: scale(1.05);
// // //           }
// // //           70% {
// // //             transform: scale(0.9);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: scale(1);
// // //           }
// // //         }

// // //         @keyframes float {
// // //           0%, 100% {
// // //             transform: translateY(0px);
// // //           }
// // //           50% {
// // //             transform: translateY(-20px);
// // //           }
// // //         }

// // //         @keyframes twinkle {
// // //           0%, 100% {
// // //             opacity: 0.2;
// // //           }
// // //           50% {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes fadeIn {
// // //           from {
// // //             opacity: 0;
// // //           }
// // //           to {
// // //             opacity: 1;
// // //           }
// // //         }

// // //         @keyframes slideInRight {
// // //           from {
// // //             opacity: 0;
// // //             transform: translateX(100%);
// // //           }
// // //           to {
// // //             opacity: 1;
// // //             transform: translateX(0);
// // //           }
// // //         }

// // //         .animate-fadeInUp {
// // //           animation: fadeInUp 1s ease-out forwards;
// // //         }

// // //         .animate-bounceIn {
// // //           animation: bounceIn 0.6s ease-out;
// // //         }

// // //         .animate-float {
// // //           animation: float 6s ease-in-out infinite;
// // //         }

// // //         .animate-twinkle {
// // //           animation: twinkle 3s ease-in-out infinite;
// // //         }

// // //         .animate-fadeIn {
// // //           animation: fadeIn 0.5s ease-in-out;
// // //         }

// // //         .animate-slideInRight {
// // //           animation: slideInRight 0.5s ease-out;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default EmotionalLandingPage;

// const App = () => {
//   return (
//     <div>
//       <Home/>
//       <ShwHome/>
//       <Footer/>
//     </div>
//   )
// }
// export default App

// App.jsx

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

//first sections import (Birth Control Section of main navbar)
import ExploreBirthControl from "./pages/MainBirthControl/ExploreBirthControl/ExploreBirtchControl";
import HowToGetBC from "./pages/MainBirthControl/HowToGetBC/HowToGetBC";

import BirthControlArticles from "./pages/MainBirthControl/BirthControlArticles/BirthControlArticles";
import BCArticleNews from "./pages/MainBirthControl/BirthControlArticles/BCArticleNews";

// import All  pages of Sex And Wellnes Section of main navbar (Fourth Section of main Navbar)
import ShwHome from "./pages/SHW/ShwHome";
import PregnancyAndFertility from "./pages/Pregnancy-Fertility/PregnancyAndFertility";
import HealthCare from "./pages/Health-Care/HealthCare";
import PeriodsAndVagina from "./pages/PeriodsAndVagina/PeriodsAndVagina";
// now importing All required component for these above 4 pages
import ArticleNews from "./pages/SHW/ArticleNews";
import ArticleNewsTwo from "./pages/SHW/ArticleNewsTwo";
import STIArticlesLayout from "./pages/SHW/ArticleSection";
import ArticleSectionTwo from "./pages/SHW/ArticleSectionTwo";

import PFArticleNews from "./pages/Pregnancy-Fertility/ArticleNews";
import PFArticleNewsTwo from "./pages/Pregnancy-Fertility/ArticleNewsTwo";
import PFArticlesLayout from "./pages/Pregnancy-Fertility/ArticleSection";
import PFArticlesLayoutTwo from "./pages/Pregnancy-Fertility/ArticleSectionTwo";

import PVArticleNews from "./pages/PeriodsAndVagina/ArticleNews";
import PVArticleNewsTwo from "./pages/PeriodsAndVagina/ArticleNewsTwo";
import PVArticlesLayout from "./pages/PeriodsAndVagina/ArticleSection";
import PVArticlesLayoutTwo from "./pages/PeriodsAndVagina/ArticleSectionTwo";

import HCArticleNews from "./pages/Health-Care/ArticleNews";
import HCArticleNewsTwo from "./pages/Health-Care/ArticleNewsTwo";
import HCArticlesLayout from "./pages/Health-Care/ArticleSection";
import HCArticlesLayoutTwo from "./pages/Health-Care/ArticleSectionTwo";

// import All  pages of Sex And Relationship Section of main navbar (Third Section of main Navbar)
//1 .relationship page
import Relationship from "./pages/Sex&Relationship/Realtionship/Relationship";
// now importing All required component for these above  page
import RSArticleNews from "./pages/Sex&Relationship/Realtionship/ArticleNews";
import RSArticleNewsTwo from "./pages/Sex&Relationship/Realtionship/ArticleNewsTwo";
import RSArticlesLayout from "./pages/Sex&Relationship/Realtionship/ArticleSection";
import RSArticlesLayoutTwo from "./pages/Sex&Relationship/Realtionship/ArticleSectionTwo";

// 2 .Masturbation page
import Masturbation from "./pages/Sex&Relationship/Masturbation/Masturbation";
// now importing All required component for these above  page
import MBArticleNews from "./pages/Sex&Relationship/Masturbation/ArticleNews";
import MBArticleNewsTwo from "./pages/Sex&Relationship/Masturbation/ArticleNewsTwo";
import MBArticlesLayout from "./pages/Sex&Relationship/Masturbation/ArticleSection";
import MBArticlesLayoutTwo from "./pages/Sex&Relationship/Masturbation/ArticleSectionTwo";

// 3 .DatingAndHookup page
import DatingAndHookup from "./pages/Sex&Relationship/DatingAndHookup/DatingAndHookup";
// now importing All required component for these above  page
import DAHArticleNews from "./pages/Sex&Relationship/DatingAndHookup/ArticleNews";
import DAHArticleNewsTwo from "./pages/Sex&Relationship/DatingAndHookup/ArticleNewsTwo";
import DAHArticlesLayout from "./pages/Sex&Relationship/DatingAndHookup/ArticleSection";
import DAHArticlesLayoutTwo from "./pages/Sex&Relationship/DatingAndHookup/ArticleSectionTwo";

// 4 . BoundariesAndconsent page
import BoundariesAndconsent from "./pages/Sex&Relationship/BoundariesAndconsent/BoundariesAndconsent";
// now importing All required component for these above  page
import BACArticleNews from "./pages/Sex&Relationship/BoundariesAndconsent/ArticleNews";
import BACArticleNewsTwo from "./pages/Sex&Relationship/BoundariesAndconsent/ArticleNewsTwo";
import BACArticlesLayout from "./pages/Sex&Relationship/BoundariesAndconsent/ArticleSection";
import BACArticlesLayoutTwo from "./pages/Sex&Relationship/BoundariesAndconsent/ArticleSectionTwo";

// 5 . BetterSex page
import BetterSex from "./pages/Sex&Relationship/BetterSex/BetterSex";
// now importing All required component for these above  page
import BSArticleNews from "./pages/Sex&Relationship/BetterSex/ArticleNews";
import BSArticleNewsTwo from "./pages/Sex&Relationship/BetterSex/ArticleNewsTwo";
import BSArticlesLayout from "./pages/Sex&Relationship/BetterSex/ArticleSection";
import BSArticlesLayoutTwo from "./pages/Sex&Relationship/BetterSex/ArticleSectionTwo";

// 6 . ViewAll page
import ViewAll from "./pages/Sex&Relationship/ViewAll/ViewAll";
// now importing All required component for these above  page
import ViewAllArticleNews from "./pages/Sex&Relationship/ViewAll/ArticleNews";
import ViewAllArticleNewsTwo from "./pages/Sex&Relationship/ViewAll/ArticleNewsTwo";
import ViewAllArticlesLayout from "./pages/Sex&Relationship/ViewAll/ArticleSection";
import ViewAllArticlesLayoutTwo from "./pages/Sex&Relationship/ViewAll/ArticleSectionTwo";

// importing  pages for self love and lifestyle  and body positivity page

import SelfLove from "./pages/LifestyleAndInspiration/SelfLove/SelfLove";
// now importing All required component for these above  page
import SelfLoveArticleNews from "./pages/LifestyleAndInspiration/SelfLove/ArticleNews";
import SelfLoveArticleNewsTwo from "./pages/LifestyleAndInspiration/SelfLove/ArticleNewsTwo";
import SelfLoveArticlesLayout from "./pages/LifestyleAndInspiration/SelfLove/ArticleSection";
import SelfLoveArticlesLayoutTwo from "./pages/LifestyleAndInspiration/SelfLove/ArticleSectionTwo";

import ActivismAndPolitics from "./pages/LifestyleAndInspiration/ActivismAndPolitics/ActivismAndPolitics";
// now importing All required component for these above  page
import ActivismAndPoliticsArticleNews from "./pages/LifestyleAndInspiration/ActivismAndPolitics/ArticleNews";
import ActivismAndPoliticsArticleNewsTwo from "./pages/LifestyleAndInspiration/ActivismAndPolitics/ArticleNewsTwo";
import ActivismAndPoliticsArticlesLayout from "./pages/LifestyleAndInspiration/ActivismAndPolitics/ArticleSection";
import ActivismAndPoliticsArticlesLayoutTwo from "./pages/LifestyleAndInspiration/ActivismAndPolitics/ArticleSectionTwo";

import Horoscope from "./pages/LifestyleAndInspiration/Horoscope/Horoscope";
// now importing All required component for these above  page
import HoroscopeArticleNews from "./pages/LifestyleAndInspiration/Horoscope/ArticleNews";
import HoroscopeArticleNewsTwo from "./pages/LifestyleAndInspiration/Horoscope/ArticleNewsTwo";
import HoroscopeArticlesLayout from "./pages/LifestyleAndInspiration/Horoscope/ArticleSection";
import HoroscopeArticlesLayoutTwo from "./pages/LifestyleAndInspiration/Horoscope/ArticleSectionTwo";

import Inspiration from "./pages/LifestyleAndInspiration/Inspiration/Inspiration";
// now importing All required component for these above  page
import InspirationArticleNews from "./pages/LifestyleAndInspiration/Inspiration/ArticleNews";
import InspirationArticleNewsTwo from "./pages/LifestyleAndInspiration/Inspiration/ArticleNewsTwo";
import InspirationArticlesLayout from "./pages/LifestyleAndInspiration/Inspiration/ArticleSection";
import InspirationArticlesLayoutTwo from "./pages/LifestyleAndInspiration/Inspiration/ArticleSectionTwo";

import Home from "./Home";
import DynamicTabsComponent from "./Components2/TabSection/Tabs";

import UID from "./pages/IUD/IUD";
import BCD from "./pages/Birth-Control-Shot/BCD";
import Implant from "./pages/Implant/implant";
import Patch from "./pages/Birth-Control-Patch/Patch";
import Diaphragm from "./pages/Diaphragm/Diaphragm";
import InternalCondom from "./pages/Internal-Condom/InternalCondom";
import { Routes, Route, Navigate } from "react-router-dom";
import FAM from "./pages/Fertility-awareness-methods/FAM";
import Withdrawal from "./pages/Withdraw-Pull-Out/withdraw";
import NRN from "./pages/NotRightNow/NotRightNow";
import BCR from "./pages/Birth-control-ring/BCR";
import BCP from "./pages/Birth-Control-Pill/BCP";
import Condom from "./pages/Condom/Condom";
import CC from "./pages/CervicalCap/CC";
import SAG from "./pages/Spermicide&Gell/SAG";
import EC from "./pages/Emergency-contraception/EC";
import BCreviews from "./pages/MainBirthControl/BCReviews.jsx/BCReviews";
import AllAboutAbortion from "./pages/Abortion/AllAboutAbortion/AllAboutAbortion";
import AbortionPill from "./pages/Abortion/AbortionPill/Abortionpill";
import AbortionProcedure from "./pages/Abortion/AbortionProcedure/AbortionProcedure";
import PvsP from "./pages/Abortion/PillvsProcedusre/PvsP";
import AbortionFAQ from "./pages/Abortion/AbortionFAQ/FAQ";
import ArticleContent from "./pages/Abortion/AbortionArticles/ArticleContent";
import AbortionArticles from "./pages/Abortion/AbortionArticles/AbortionArticle";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows to fill available height */}
      <div className="flex-grow">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shw" element={<ShwHome />} />
          <Route
            path="/periods-and-vaginal-health"
            element={<PeriodsAndVagina />}
          />
          <Route
            path="/pregnancy-and-fertility"
            element={<PregnancyAndFertility />}
          />
          <Route path="/health-care" element={<HealthCare />} />

          {/* Routes for All Subpages of main  Sex&Relationship Section of main Navbar  */}
          {/*1. relationship page And its sub Aritcles */}
          <Route
            path="/sex-relationships/Relationships"
            element={<Relationship />}
          />
          <Route
            path="/sex-relationships/Relationships/articles"
            element={<RSArticlesLayout />}
          />
          <Route
            path="/sex-relationships/Relationships/articles/:slug"
            element={<RSArticleNews />}
          />
          <Route
            path="/sex-relationships/Relationships/articles-two"
            element={<RSArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/Relationships/articles-two/:slug"
            element={<RSArticleNewsTwo />}
          />

          {/*2. Masturbation page And its sub Aritcles */}
          <Route
            path="/sex-relationships/Masturbation"
            element={<Masturbation />}
          />
          <Route
            path="/sex-relationships/Masturbation/articles"
            element={<MBArticlesLayout />}
          />
          <Route
            path="/sex-relationships/Masturbation/articles/:slug"
            element={<MBArticleNews />}
          />
          <Route
            path="/sex-relationships/Masturbation/articles-two"
            element={<MBArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/Masturbation/articles-two/:slug"
            element={<MBArticleNewsTwo />}
          />

          {/*3. DatingAndHookup page And its sub Aritcles */}
          <Route
            path="/sex-relationships/DatingAndHookup"
            element={<DatingAndHookup />}
          />
          <Route
            path="/sex-relationships/DatingAndHookup/articles"
            element={<DAHArticlesLayout />}
          />
          <Route
            path="/sex-relationships/DatingAndHookup/articles/:slug"
            element={<DAHArticleNews />}
          />
          <Route
            path="/sex-relationships/DatingAndHookup/articles-two"
            element={<DAHArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/DatingAndHookup/articles-two/:slug"
            element={<DAHArticleNewsTwo />}
          />

          {/*4. BoundariesAndconsent page And its sub Aritcles */}
          <Route
            path="/sex-relationships/BoundariesAndconsent"
            element={<BoundariesAndconsent />}
          />
          <Route
            path="/sex-relationships/BoundariesAndconsent/articles"
            element={<BACArticlesLayout />}
          />
          <Route
            path="/sex-relationships/BoundariesAndconsent/articles/:slug"
            element={<BACArticleNews />}
          />
          <Route
            path="/sex-relationships/BoundariesAndconsent/articles-two"
            element={<BACArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/BoundariesAndconsent/articles-two/:slug"
            element={<BACArticleNewsTwo />}
          />

          {/*5. Better Sex page And its sub Aritcles */}
          <Route path="/sex-relationships/BetterSex" element={<BetterSex />} />
          <Route
            path="/sex-relationships/BetterSex/articles"
            element={<BSArticlesLayout />}
          />
          <Route
            path="/sex-relationships/BetterSex/articles/:slug"
            element={<BSArticleNews />}
          />
          <Route
            path="/sex-relationships/BetterSex/articles-two"
            element={<BSArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/BetterSex/articles-two/:slug"
            element={<BSArticleNewsTwo />}
          />

          {/*6. View all page And its sub Aritcles */}
          <Route path="/sex-relationships/ViewAll" element={<ViewAll />} />
          <Route
            path="/sex-relationships/ViewAll/articles"
            element={<ViewAllArticlesLayout />}
          />
          <Route
            path="/sex-relationships/ViewAll/articles/:slug"
            element={<ViewAllArticleNews />}
          />
          <Route
            path="/sex-relationships/ViewAll/articles-two"
            element={<ViewAllArticlesLayoutTwo />}
          />
          <Route
            path="/sex-relationships/ViewAll/articles-two/:slug"
            element={<ViewAllArticleNewsTwo />}
          />

          {/* routes for dynamic dataloading for eachPages of Sexual health and wellnessLink of Navbar */}
          <Route path="/articles" element={<STIArticlesLayout />} />
          <Route path="/articles/:slug" element={<ArticleNews />} />
          <Route path="/articles-two" element={<ArticleSectionTwo />} />
          <Route path="/articles-two/:slug" element={<ArticleNewsTwo />} />

          <Route path="/PFarticles" element={<PFArticlesLayout />} />
          <Route path="/PFarticles/:slug" element={<PFArticleNews />} />
          <Route path="/PFarticles-two" element={<PFArticlesLayoutTwo />} />
          <Route path="/PFarticles-two/:slug" element={<PFArticleNewsTwo />} />

          <Route path="/PVarticles" element={<PVArticlesLayout />} />
          <Route path="/PVarticles/:slug" element={<PVArticleNews />} />
          <Route path="/PVarticles-two" element={<PVArticlesLayoutTwo />} />
          <Route path="/PVarticles-two/:slug" element={<PVArticleNewsTwo />} />

          <Route path="/HCarticles" element={<HCArticlesLayout />} />
          <Route path="/HCarticles/:slug" element={<HCArticleNews />} />
          <Route path="/HCarticles-two" element={<HCArticlesLayoutTwo />} />
          <Route path="/HCarticles-two/:slug" element={<HCArticleNewsTwo />} />

          {/* Self LOve And Body Positivity Section Pages */}
          {/* 1 .self-love-and-body-positivity page */}
          <Route
            path="/lifestyle-and-inspiration/self-love-and-body-positivity"
            element={<SelfLove />}
          />
          <Route
            path="/lifestyle-and-inspiration/self-love-and-body-positivity/article"
            element={<SelfLoveArticlesLayout />}
          />
          <Route
            path="/lifestyle-and-inspiration/self-love-and-body-positivity/articles/:slug"
            element={<SelfLoveArticleNews />}
          />
          <Route
            path="/lifestyle-and-inspiration/self-love-and-body-positivity/article-two"
            element={<SelfLoveArticlesLayoutTwo />}
          />
          <Route
            path="/lifestyle-and-inspiration/self-love-and-body-positivity/articles-two/:slug"
            element={<SelfLoveArticleNewsTwo />}
          />

          {/* 2 .activism  & politics page */}

          <Route
            path="/lifestyle-and-inspiration/activism-politics"
            element={<ActivismAndPolitics />}
          />
          <Route
            path="/lifestyle-and-inspiration/activism-politics/article"
            element={<ActivismAndPoliticsArticlesLayout />}
          />
          <Route
            path="/lifestyle-and-inspiration/activism-politics/articles/:slug"
            element={<ActivismAndPoliticsArticleNews />}
          />
          <Route
            path="/lifestyle-and-inspiration/activism-politics/articles-two"
            element={<ActivismAndPoliticsArticlesLayoutTwo />}
          />
          <Route
            path="/lifestyle-and-inspiration/activism-politics/articles-two/:slug"
            element={<ActivismAndPoliticsArticleNewsTwo />}
          />

          {/* 3 .Horoscope page */}

          <Route
            path="/lifestyle-and-inspiration/horoscopes"
            element={<Horoscope />}
          />
          <Route
            path="/lifestyle-and-inspiration/horoscopes/article"
            element={<HoroscopeArticlesLayout />}
          />
          <Route
            path="/lifestyle-and-inspiration/horoscopes/articles/:slug"
            element={<HoroscopeArticleNews />}
          />
          <Route
            path="/lifestyle-and-inspiration/horoscopes/articles-two"
            element={<HoroscopeArticlesLayoutTwo />}
          />
          <Route
            path="/lifestyle-and-inspiration/horoscopes/articles-two/:slug"
            element={<HoroscopeArticleNewsTwo />}
          />

          {/* 4 Inspiration page */}

          <Route
            path="/lifestyle-and-inspiration/Inspiration"
            element={<Inspiration />}
          />
          <Route
            path="/lifestyle-and-inspiration/Inspiration/article"
            element={<InspirationArticlesLayout />}
          />
          <Route
            path="/lifestyle-and-inspiration/Inspiration/articles/:slug"
            element={<InspirationArticleNews />}
          />
          <Route
            path="/lifestyle-and-inspiration/Inspiration/articles-two"
            element={<InspirationArticlesLayoutTwo />}
          />
          <Route
            path="/lifestyle-and-inspiration/Inspiration/articles-two/:slug"
            element={<InspirationArticleNewsTwo />}
          />

          {/* Redirect any unknown URL back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* types  routes  in submenu bar  under birth control   navigation*/}

          <Route path="types/iud" element={<UID />} />
          <Route path="types/birth-control-shot" element={<BCD />} />
          <Route path="types/implant" element={<Implant />} />
          <Route path="types/patch" element={<Patch />} />
          <Route path="types/diaphragm" element={<Diaphragm />} />
          <Route path="types/Internal-condom" element={<InternalCondom />} />
          <Route path="types/fertility-awareness" element={<FAM />} />
          <Route path="types/withdrawal" element={<Withdrawal />} />
          <Route path="types/not-right-now" element={<NRN />} />
          <Route path="types/birth-control-ring" element={<BCR />} />
          <Route path="types/birth-control-pill" element={<BCP />} />
          <Route path="types/condom" element={<Condom />} />
          <Route path="types/cervical-cap" element={<CC />} />
          <Route path="types/spermicide-gell" element={<SAG />} />
          <Route path="types/sterilization" element={<SAG />} />
          <Route path="types/emergency-contraception" element={<EC />} />

          <Route
            path="/birth-control-option"
            element={<ExploreBirthControl />}
          />
          <Route
            path="/birth-control/how-to-get-birth-control"
            element={<HowToGetBC />}
          />

          <Route
            path="/birth-control/articles"
            element={<BirthControlArticles />}
          />
          <Route
            path="/birth-control/articles/:slug"
            element={<BCArticleNews />}
          />

          <Route path="/birth-control/reviews" element={<BCreviews />} />
          <Route
            path="/abortion/all-about-abortion"
            element={<AllAboutAbortion />}
          />
          <Route path="/abortion/abortion-pill" element={<AbortionPill />} />
          <Route
            path="/abortion/abortion-procedure"
            element={<AbortionProcedure />}
          />
          <Route
            path="/abortion/abortion-pill-vs-procedure"
            element={<PvsP />}
          />
          <Route path="/abortion/faqs" element={<AbortionFAQ />} />

          <Route path="/abortion/articles" element={<AbortionArticles />} />
          <Route path="/abortion/articles/:slug" element={<ArticleContent />} />
        </Routes>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};
export default App;

///all latest code and routes we have in this repo "All good "
