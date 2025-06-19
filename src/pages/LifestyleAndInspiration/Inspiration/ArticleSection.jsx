// // // // import React, { useState } from 'react';

// // // // const ArticlesSection = () => {
// // // //   const [selectedArticle, setSelectedArticle] = useState(null);

// // // //   const articles = [
// // // //     {
// // // //       id: 1,
// // // //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// // // //       title: "How do I get tested for STIs?",
// // // //       subtitle: "",
// // // //       image: "/api/placeholder/300/200",
// // // //       isQuestionMark: true,
// // // //       isFAQ: true,
// // // //       content: `
// // // //         <h2>Getting Tested for STIs: A Complete Guide</h2>
// // // //         <p>Getting tested for sexually transmitted infections (STIs) is an important part of maintaining your sexual health. Here's everything you need to know:</p>
        
// // // //         <h3>Where to Get Tested</h3>
// // // //         <ul>
// // // //           <li>Your primary care doctor</li>
// // // //           <li>Planned Parenthood clinics</li>
// // // //           <li>Community health centers</li>
// // // //           <li>STI clinics</li>
// // // //           <li>Some pharmacies (for certain tests)</li>
// // // //         </ul>
        
// // // //         <h3>Common STI Tests</h3>
// // // //         <p>Most STI testing involves blood tests, urine samples, or swabs. Your healthcare provider will recommend specific tests based on your sexual history and risk factors.</p>
        
// // // //         <h3>How Often Should You Get Tested?</h3>
// // // //         <p>The CDC recommends annual testing for sexually active individuals, or more frequently if you have multiple partners or other risk factors.</p>
// // // //       `
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// // // //       title: "If I'm using another method of birth control, do I still have to use condoms?",
// // // //       subtitle: "",
// // // //       image: "/api/placeholder/300/200",
// // // //       isQuestionMark: true,
// // // //       isFAQ: true,
// // // //       content: `
// // // //         <h2>Birth Control vs. STI Protection</h2>
// // // //         <p>While other forms of birth control are highly effective at preventing pregnancy, they don't protect against sexually transmitted infections.</p>
        
// // // //         <h3>Key Points to Remember</h3>
// // // //         <ul>
// // // //           <li>Birth control pills, IUDs, and implants prevent pregnancy but not STIs</li>
// // // //           <li>Condoms are the only contraceptive method that also reduces STI risk</li>
// // // //           <li>Consider dual protection: your preferred birth control + condoms</li>
// // // //         </ul>
        
// // // //         <h3>Best Practice</h3>
// // // //         <p>For comprehensive protection, many healthcare providers recommend using both your preferred birth control method and condoms, especially with new or multiple partners.</p>
// // // //       `
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// // // //       title: "Here's everything you need to know about mpox",
// // // //       subtitle: "Don't panic, just get the facts",
// // // //       image: "/api/placeholder/400/250",
// // // //       isQuestionMark: false,
// // // //       isFAQ: false,
// // // //       content: `
// // // //         <h2>Understanding Mpox: Facts Over Fear</h2>
// // // //         <p>Mpox (formerly known as monkeypox) is a viral infection that has received significant attention. Here's what you need to know:</p>
        
// // // //         <h3>What is Mpox?</h3>
// // // //         <p>Mpox is a viral infection related to smallpox but typically less severe. It was first discovered in laboratory monkeys in 1958.</p>
        
// // // //         <h3>Symptoms</h3>
// // // //         <ul>
// // // //           <li>Fever and flu-like symptoms</li>
// // // //           <li>Distinctive rash that progresses through several stages</li>
// // // //           <li>Swollen lymph nodes</li>
// // // //         </ul>
        
// // // //         <h3>Transmission</h3>
// // // //         <p>Mpox spreads through close contact with infected individuals, contaminated materials, or infected animals.</p>
        
// // // //         <h3>Prevention</h3>
// // // //         <p>Vaccination is available for high-risk individuals, and practicing good hygiene can help prevent transmission.</p>
// // // //       `
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// // // //       title: "Chlamydia: it's not as pretty as it sounds",
// // // //       subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
// // // //       image: "/api/placeholder/400/250",
// // // //       isQuestionMark: false,
// // // //       isFAQ: false,
// // // //       content: `
// // // //         <h2>Chlamydia: The Silent Infection</h2>
// // // //         <p>Chlamydia is one of the most common STIs, often called "silent" because many people don't experience symptoms.</p>
        
// // // //         <h3>Why It's Concerning</h3>
// // // //         <ul>
// // // //           <li>Often has no symptoms, especially in women</li>
// // // //           <li>Can cause serious complications if untreated</li>
// // // //           <li>Easily treatable with antibiotics when caught early</li>
// // // //         </ul>
        
// // // //         <h3>Potential Complications</h3>
// // // //         <p>If left untreated, chlamydia can lead to pelvic inflammatory disease (PID) in women and epididymitis in men, potentially affecting fertility.</p>
        
// // // //         <h3>The Good News</h3>
// // // //         <p>Chlamydia is completely curable with the right antibiotics. Regular testing is key to early detection and treatment.</p>
// // // //       `
// // // //     },
// // // //     {
// // // //       id: 5,
// // // //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// // // //       title: "Your guide to bringing up sexual health with someone new",
// // // //       subtitle: "We promise, it doesn't have to be awkward",
// // // //       image: "/api/placeholder/400/250",
// // // //       isQuestionMark: false,
// // // //       isFAQ: false,
// // // //       content: `
// // // //         <h2>Navigating Sexual Health Conversations</h2>
// // // //         <p>Talking about sexual health with a new partner doesn't have to be awkward. Here's how to approach these important conversations:</p>
        
// // // //         <h3>Timing Matters</h3>
// // // //         <p>Have these conversations before things get physical, ideally in a relaxed, private setting when you both have time to talk.</p>
        
// // // //         <h3>Conversation Starters</h3>
// // // //         <ul>
// // // //           <li>"I care about both our health, so I'd like to talk about getting tested."</li>
// // // //           <li>"What's your approach to sexual health and protection?"</li>
// // // //           <li>"I get tested regularly. When was your last test?"</li>
// // // //         </ul>
        
// // // //         <h3>Make It Normal</h3>
// // // //         <p>Frame these discussions as a normal part of dating and relationships. The right partner will appreciate your maturity and responsibility.</p>
        
// // // //         <h3>Be Prepared</h3>
// // // //         <p>Know your own status, have recent test results, and be ready to discuss protection methods and boundaries.</p>
// // // //       `
// // // //     }
// // // //   ];

// // // //   const handleArticleClick = (article) => {
// // // //     setSelectedArticle(article);
// // // //   };

// // // //   const handleBackClick = () => {
// // // //     setSelectedArticle(null);
// // // //   };

// // // //   if (selectedArticle) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-50 py-8 px-4">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <button
// // // //             onClick={handleBackClick}
// // // //             className="mb-6 text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center gap-2"
// // // //           >
// // // //             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// // // //             </svg>
// // // //             Back to Articles
// // // //           </button>
          
// // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
// // // //             <div className="p-6 sm:p-8">
// // // //               <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
// // // //                 {selectedArticle.category}
// // // //               </div>
// // // //               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
// // // //                 {selectedArticle.title}
// // // //               </h1>
// // // //               {selectedArticle.subtitle && (
// // // //                 <p className="text-lg text-gray-600 mb-6 italic">
// // // //                   {selectedArticle.subtitle}
// // // //                 </p>
// // // //               )}
// // // //               <div 
// // // //                 className="prose prose-lg max-w-none"
// // // //                 dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
// // // //               />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const faqArticles = articles.filter(article => article.isFAQ);
// // // //   const regularArticles = articles.filter(article => !article.isFAQ);

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 py-8 px-4">
// // // //       <div className="max-w-6xl mx-auto space-y-6">
        
// // // //         {/* FAQ Articles - 2 Column Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {faqArticles.map((article) => (
// // // //             <div
// // // //               key={article.id}
// // // //               onClick={() => handleArticleClick(article)}
// // // //               className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
// // // //             >
// // // //               <div className="flex">
// // // //                 {/* Question Mark Background */}
// // // //                 <div className="w-32 sm:w-40 md:w-32 lg:w-40 flex-shrink-0">
// // // //                   <div className="h-full bg-gradient-to-br from-teal-300 to-teal-400 flex items-center justify-center relative overflow-hidden min-h-[120px]">
// // // //                     {/* Question mark pattern */}
// // // //                     <div className="absolute inset-0 opacity-30">
// // // //                       {[...Array(30)].map((_, i) => (
// // // //                         <div
// // // //                           key={i}
// // // //                           className="absolute text-white text-base font-bold"
// // // //                           style={{
// // // //                             left: `${(i % 6) * 16}%`,
// // // //                             top: `${Math.floor(i / 6) * 18}%`,
// // // //                             transform: 'rotate(-15deg)'
// // // //                           }}
// // // //                         >
// // // //                           ?
// // // //                         </div>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
                
// // // //                 {/* Content Section */}
// // // //                 <div className="flex-1 p-4">
// // // //                   <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">
// // // //                     {article.category}
// // // //                   </div>
// // // //                   <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
// // // //                     {article.title}
// // // //                   </h3>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Regular Articles - Single Column Layout */}
// // // //         <div className="space-y-6">
// // // //           {regularArticles.map((article) => (
// // // //             <div
// // // //               key={article.id}
// // // //               onClick={() => handleArticleClick(article)}
// // // //               className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
// // // //             >
// // // //               <div className="flex flex-col sm:flex-row">
// // // //                 {/* Image Section */}
// // // //                 <div className="w-full sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
// // // //                   <div className="h-48 sm:h-40 md:h-44 bg-gray-200 flex items-center justify-center">
// // // //                     <img
// // // //                       src={article.image}
// // // //                       alt={article.title}
// // // //                       className="w-full h-full object-cover"
// // // //                       onError={(e) => {
// // // //                         e.target.style.display = 'none';
// // // //                         e.target.nextSibling.style.display = 'flex';
// // // //                       }}
// // // //                     />
// // // //                     <div className="hidden items-center justify-center text-gray-400 w-full h-full bg-gray-100">
// // // //                       <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
// // // //                         <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
// // // //                       </svg>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
                
// // // //                 {/* Content Section */}
// // // //                 <div className="flex-1 p-6">
// // // //                   <div className="text-xs text-gray-500 uppercase tracking-wide mb-3 font-medium">
// // // //                     {article.category}
// // // //                   </div>
// // // //                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
// // // //                     {article.title}
// // // //                   </h3>
// // // //                   {article.subtitle && (
// // // //                     <p className="text-sm text-gray-600 italic">
// // // //                       {article.subtitle}
// // // //                     </p>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ArticlesSection;



// // import React from 'react';

// // const QuestionPattern = () => (
// //   <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 flex flex-wrap items-center justify-center p-4 min-h-[180px]">
// //     {[...Array(42)].map((_, i) => (
// //       <span 
// //         key={i} 
// //         className="text-white text-lg font-bold m-1 opacity-90 select-none"
// //         style={{ 
// //           transform: `rotate(${Math.random() * 40 - 20}deg)`,
// //           fontSize: `${16 + Math.random() * 8}px`
// //         }}
// //       >
// //         ?
// //       </span>
// //     ))}
// //   </div>
// // );

// // const FAQCard = ({ title }) => (
// //   <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 h-fit">
// //     <div className="flex">
// //       <div className="w-32 h-32 flex-shrink-0">
// //         <QuestionPattern />
// //       </div>
// //       <div className="p-4 flex-1">
// //         <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
// //           FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
// //         </div>
// //         <h3 className="text-base font-semibold text-gray-900 leading-tight">
// //           {title}
// //         </h3>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const ArticleCard = ({ title, subtitle, image }) => (
// //   <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
// //     <div className="flex">
// //       <div className="w-32 h-32 flex-shrink-0">
// //         <img 
// //           src={image} 
// //           alt={title}
// //           className="w-full h-full object-cover"
// //         />
// //       </div>
// //       <div className="p-4 flex-1">
// //         <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-2">
// //           SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
// //         </div>
// //         <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
// //           {title}
// //         </h3>
// //         <p className="text-sm text-gray-600 italic leading-relaxed">
// //           {subtitle}
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // const STIArticlesLayout = () => {
// //   const faqItems = [
// //     "How do I get tested for STIs?",
// //     "If I'm using another method of birth control, do I still have to use condoms?"
// //   ];

// //   const articles = [
// //     {
// //       title: "Here's everything you need to know about mpox",
// //       subtitle: "Don't panic, just get the facts",
// //       image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&crop=face"
// //     },
// //     {
// //       title: "Chlamydia: it's not as pretty as it sounds",
// //       subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
// //       image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop&crop=center"
// //     },
// //     {
// //       title: "Your guide to bringing up sexual health with someone new",
// //       subtitle: "We promise, it doesn't have to be awkward",
// //       image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=200&h=200&fit=crop&crop=center"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           {/* Left Column - FAQ Cards */}
// //           <div className="space-y-6">
// //             {faqItems.map((faq, index) => (
// //               <FAQCard key={index} title={faq} />
// //             ))}
// //           </div>
          
// //           {/* Right Column - Article Cards */}
// //           <div className="space-y-6">
// //             {articles.map((article, index) => (
// //               <ArticleCard
// //                 key={index}
// //                 title={article.title}
// //                 subtitle={article.subtitle}
// //                 image={article.image}
// //               />
// //             ))}
// //           </div>
// //         </div>
        
// //         {/* Mobile Layout - Single Column */}
// //         <div className="lg:hidden">
// //           <div className="space-y-6 mt-6">
// //             {faqItems.map((faq, index) => (
// //               <FAQCard key={`mobile-faq-${index}`} title={faq} />
// //             ))}
// //             {articles.map((article, index) => (
// //               <ArticleCard
// //                 key={`mobile-article-${index}`}
// //                 title={article.title}
// //                 subtitle={article.subtitle}
// //                 image={article.image}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default STIArticlesLayout;




// const QuestionPattern = () => (
//   <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 flex flex-wrap items-center justify-center p-6">
//     {[...Array(63)].map((_, i) => (
//       <span 
//         key={i} 
//         className="text-white text-xl font-bold m-1 opacity-90 select-none"
//         style={{ 
//           transform: `rotate(${Math.random() * 40 - 20}deg)`,
//           fontSize: `${18 + Math.random() * 6}px`
//         }}
//       >
//         ?
//       </span>
//     ))}
//   </div>
// );

// const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern = false }) => (
//   <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6">
//     <div className="flex flex-col sm:flex-row">
//       {/* Image/Pattern Section - Larger area */}
//       <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
//         {hasQuestionPattern ? (
//           <QuestionPattern />
//         ) : (
//           <img 
//             src={image} 
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>
      
//       {/* Content Section */}
//       <div className="p-6 flex-1">
//         <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
//           {category}
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
//           {title}
//         </h3>
//         {subtitle && (
//           <p className="text-gray-600 italic text-sm leading-relaxed">
//             {subtitle}
//           </p>
//         )}
//       </div>
//     </div>
//   </div>
// );

// const STIArticlesLayout = () => {
//   const articles = [
//     {
//       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
//       title: "How do I get tested for STIs?",
//       image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
//     },
//     {
//       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
//       title: "If I'm using another method of birth control, do I still have to use condoms?",
//       image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
//     },
//     {
//       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
//       title: "Here's everything you need to know about mpox",
//       subtitle: "Don't panic, just get the facts",
//       image: "/SHW/provider_perspectives_header-44b4f94e01ec610c3de2b52585ef601d43bb8196a7253ae8e24896c8838e3.jpg"
//     },
//     {
//       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
//       title: "Chlamydia: it's not as pretty as it sounds",
//       subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
//       image: "/SHW/GettyImages-1256087897.jpg"
//     },
//     {
//       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
//       title: "Your guide to bringing up sexual health with someone new",
//       subtitle: "We promise, it doesn't have to be awkward",
//       image: "/SHW/GettyImages-1312297068.jpg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-0 cursor-pointer">
//           {articles.map((article, index) => (
//             <ArticleCard
//               key={index}
//               category={article.category}
//               title={article.title}
//               subtitle={article.subtitle}
//               image={article.image}
//               hasQuestionPattern={article.hasQuestionPattern}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default STIArticlesLayout;


// // import { useState } from 'react';
// // import { ArrowLeft, Clock, User, Share2, Bookmark, Heart, MessageCircle } from 'lucide-react';

// // const QuestionPattern = () => (
// //   <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 flex flex-wrap items-center justify-center p-6">
// //     {[...Array(63)].map((_, i) => (
// //       <span 
// //         key={i} 
// //         className="text-white text-xl font-bold m-1 opacity-90 select-none"
// //         style={{ 
// //           transform: `rotate(${Math.random() * 40 - 20}deg)`,
// //           fontSize: `${18 + Math.random() * 6}px`
// //         }}
// //       >
// //         ?
// //       </span>
// //     ))}
// //   </div>
// // );

// // const ArticleCard = ({ article, onClick }) => (
// //   <div 
// //     className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer"
// //     onClick={() => onClick(article)}
// //   >
// //     <div className="flex flex-col sm:flex-row">
// //       {/* Image/Pattern Section - Larger area */}
// //       <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
// //         {article.image === "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg" ? (
// //           <QuestionPattern />
// //         ) : (
// //           <img 
// //             src={article.image} 
// //             alt={article.title}
// //             className="w-full h-full object-cover"
// //           />
// //         )}
// //       </div>
      
// //       {/* Content Section */}
// //       <div className="p-6 flex-1">
// //         <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
// //           {article.category}
// //         </div>
// //         <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
// //           {article.title}
// //         </h3>
// //         {article.subtitle && (
// //           <p className="text-gray-600 italic text-sm leading-relaxed">
// //             {article.subtitle}
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   </div>
// // );

// // const ArticleDetail = ({ article, onBack }) => {
// //   const [isLiked, setIsLiked] = useState(false);
// //   const [isBookmarked, setIsBookmarked] = useState(false);

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Header */}
// //       <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b z-10">
// //         <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
// //           <button 
// //             onClick={onBack}
// //             className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
// //           >
// //             <ArrowLeft className="w-5 h-5 mr-2" />
// //             Back to Articles
// //           </button>
          
// //           <div className="flex items-center space-x-3">
// //             <button 
// //               onClick={() => setIsLiked(!isLiked)}
// //               className={`p-2 rounded-full transition-all ${isLiked ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
// //             >
// //               <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
// //             </button>
// //             <button 
// //               onClick={() => setIsBookmarked(!isBookmarked)}
// //               className={`p-2 rounded-full transition-all ${isBookmarked ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
// //             >
// //               <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
// //             </button>
// //             <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
// //               <Share2 className="w-5 h-5" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <div className="relative">
// //         <div className="h-64 bg-gradient-to-br from-teal-300 to-teal-400 flex items-center justify-center">
// //           <div className="text-center text-white px-6">
// //             <div className="text-sm uppercase tracking-wider font-medium mb-2 opacity-90">
// //               {article.category}
// //             </div>
// //             <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
// //               {article.title}
// //             </h1>
// //             {article.subtitle && (
// //               <p className="text-xl opacity-90 italic max-w-2xl">
// //                 {article.subtitle}
// //               </p>
// //             )}
// //           </div>
// //         </div>
        
// //         {/* Article Meta */}
// //         <div className="bg-white border-b">
// //           <div className="max-w-4xl mx-auto px-4 py-4">
// //             <div className="flex items-center justify-between text-sm text-gray-600">
// //               <div className="flex items-center space-x-6">
// //                 <span className="flex items-center">
// //                   <User className="w-4 h-4 mr-2" />
// //                   Dr. Sarah Johnson, MD
// //                 </span>
// //                 <span className="flex items-center">
// //                   <Clock className="w-4 h-4 mr-2" />
// //                   8 min read
// //                 </span>
// //                 <span>Published March 15, 2024</span>
// //               </div>
// //               <div className="flex items-center space-x-4">
// //                 <span className="flex items-center">
// //                   <Heart className="w-4 h-4 mr-1" />
// //                   {Math.floor(Math.random() * 500) + 100}
// //                 </span>
// //                 <span className="flex items-center">
// //                   <MessageCircle className="w-4 h-4 mr-1" />
// //                   {Math.floor(Math.random() * 50) + 10}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Article Content */}
// //       <div className="max-w-4xl mx-auto px-4 py-8">
// //         <div className="prose prose-lg max-w-none">
// //           {/* Key Takeaways Box */}
// //           <div className="bg-gradient-to-br from-teal-300 to-teal-400 text-white p-6 rounded-lg mb-8">
// //             <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
// //             <ul className="space-y-2">
// //               <li>Early detection and treatment are crucial for sexual health</li>
// //               <li>Many STIs can be asymptomatic, making regular testing important</li>
// //               <li>Open communication with partners reduces transmission risks</li>
// //               <li>Most STIs are completely treatable with proper medical care</li>
// //             </ul>
// //           </div>

// //           {/* Dynamic Content Based on Article Type */}
// //           {article.category.includes('FAQS') ? (
// //             <div className="space-y-8">
// //               <div className="bg-white border border-gray-200 rounded-lg p-6">
// //                 <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Answer</h2>
// //                 <div className="bg-gradient-to-br from-teal-300 to-teal-400 text-white rounded-lg p-4 mb-6">
// //                   <p className="font-medium">
// //                     {article.title.includes('tested') 
// //                       ? 'You can get tested at your doctor\'s office, local health department, or specialized clinics. Many tests are quick, confidential, and covered by insurance.'
// //                       : 'Yes, other birth control methods don\'t protect against STIs. Condoms are the only method that provides dual protection against pregnancy and STIs.'
// //                     }
// //                   </p>
// //                 </div>
                
// //                 <h3 className="text-xl font-semibold mb-4">Detailed Information</h3>
// //                 <p className="text-gray-700 leading-relaxed mb-4">
// //                   Getting tested for sexually transmitted infections is one of the most important steps you can take for your sexual health. 
// //                   The process is typically straightforward, confidential, and often covered by insurance or available at low cost through community health centers.
// //                 </p>
                
// //                 <div className="grid md:grid-cols-2 gap-6 my-8">
// //                   <div className="bg-gray-50 p-5 rounded-lg">
// //                     <h4 className="font-semibold text-gray-800 mb-2">Where to Get Tested</h4>
// //                     <ul className="text-gray-700 space-y-1 text-sm">
// //                       <li>• Primary care physician</li>
// //                       <li>• Planned Parenthood clinics</li>
// //                       <li>• Local health departments</li>
// //                       <li>• Urgent care centers</li>
// //                       <li>• Specialized STI clinics</li>
// //                     </ul>
// //                   </div>
                  
// //                   <div className="bg-gray-50 p-5 rounded-lg">
// //                     <h4 className="font-semibold text-gray-800 mb-2">Types of Tests</h4>
// //                     <ul className="text-gray-700 space-y-1 text-sm">
// //                       <li>• Blood tests</li>
// //                       <li>• Urine samples</li>
// //                       <li>• Swab tests</li>
// //                       <li>• Physical examination</li>
// //                       <li>• Rapid tests (results in minutes)</li>
// //                     </ul>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="space-y-8">
// //               <p className="text-xl text-gray-700 leading-relaxed font-light">
// //                 Understanding sexual health is crucial for maintaining overall well-being and healthy relationships. 
// //                 This comprehensive guide will walk you through everything you need to know about this important topic.
// //               </p>
              
// //               <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
// //                 <div className="flex">
// //                   <div className="flex-shrink-0">
// //                     <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
// //                       <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// //                     </svg>
// //                   </div>
// //                   <div className="ml-3">
// //                     <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
// //                     <p className="mt-1 text-sm text-yellow-700">
// //                       This information is for educational purposes only and should not replace professional medical advice. 
// //                       Always consult with a healthcare provider for personalized guidance.
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               <h2 className="text-2xl font-bold text-gray-900">Understanding the Basics</h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Sexual health encompasses physical, emotional, mental, and social well-being related to sexuality. 
// //                 It's not merely the absence of disease or dysfunction, but a positive approach to sexual relationships 
// //                 that includes the possibility of having pleasurable and safe sexual experiences.
// //               </p>

// //               <div className="grid md:grid-cols-3 gap-6 my-8">
// //                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
// //                   <h3 className="font-semibold text-gray-800 mb-3">Prevention</h3>
// //                   <p className="text-gray-700 text-sm">
// //                     Learn about protective measures, safe practices, and regular health screenings.
// //                   </p>
// //                 </div>
                
// //                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
// //                   <h3 className="font-semibold text-gray-800 mb-3">Communication</h3>
// //                   <p className="text-gray-700 text-sm">
// //                     Develop skills for honest, open conversations about sexual health with partners.
// //                   </p>
// //                 </div>
                
// //                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
// //                   <h3 className="font-semibold text-gray-800 mb-3">Treatment</h3>
// //                   <p className="text-gray-700 text-sm">
// //                     Understand available treatments and the importance of seeking timely medical care.
// //                   </p>
// //                 </div>
// //               </div>

// //               <h2 className="text-2xl font-bold text-gray-900">Signs and Symptoms to Watch For</h2>
// //               <p className="text-gray-700 leading-relaxed">
// //                 Many sexually transmitted infections can be asymptomatic, meaning they show no obvious signs. 
// //                 This is why regular testing is so important. However, when symptoms do occur, they may include:
// //               </p>
              
// //               <div className="bg-gray-50 p-6 rounded-lg">
// //                 <div className="grid md:grid-cols-2 gap-4">
// //                   <ul className="space-y-2 text-gray-700">
// //                     <li>• Unusual discharge or odor</li>
// //                     <li>• Burning sensation during urination</li>
// //                     <li>• Itching or irritation</li>
// //                     <li>• Unusual bleeding</li>
// //                   </ul>
// //                   <ul className="space-y-2 text-gray-700">
// //                     <li>• Sores, bumps, or rashes</li>
// //                     <li>• Pelvic or abdominal pain</li>
// //                     <li>• Flu-like symptoms</li>
// //                     <li>• Swollen lymph nodes</li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Call to Action */}
// //           <div className="bg-gradient-to-br from-teal-300 to-teal-400 text-white p-8 rounded-lg text-center mt-12">
// //             <h3 className="text-2xl font-bold mb-4">Take Action Today</h3>
// //             <p className="text-lg mb-6 opacity-90">
// //               Your sexual health is important. Don't wait to get the care and information you need.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <button className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
// //                 Find a Clinic Near You
// //               </button>
// //               <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-teal-600 transition-colors">
// //                 Schedule a Consultation
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const STIArticlesLayout = () => {
// //   const [selectedArticle, setSelectedArticle] = useState(null);

// //   const articles = [
// //     {
// //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "How do I get tested for STIs?",
// //         image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
// //     },
// //     {
// //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "If I'm using another method of birth control, do I still have to use condoms?",
// //       image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "Here's everything you need to know about mpox",
// //       subtitle: "Don't panic, just get the facts",
// //       image: "/SHW/provider_perspectives_header-44b4f94e01ec610c3de2b52585ef601d43bb8196a7253ae8e24896c8838e3.jpg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "Chlamydia: it's not as pretty as it sounds",
// //       subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
// //       image: "/SHW/GettyImages-1256087897.jpg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "Your guide to bringing up sexual health with someone new",
// //       subtitle: "We promise, it doesn't have to be awkward",
// //       image: "/SHW/GettyImages-1312297068.jpg"
// //     }
// //   ];

// //   if (selectedArticle) {
// //     return (
// //       <ArticleDetail 
// //         article={selectedArticle} 
// //         onBack={() => setSelectedArticle(null)} 
// //       />
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="space-y-0">
// //           {articles.map((article, index) => (
// //             <ArticleCard
// //               key={index}
// //               article={article}
// //               onClick={setSelectedArticle}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default STIArticlesLayout;

 
import { Link } from 'react-router-dom';
import { Inspirationarticles } from './data/articles';

const QuestionPattern = () => (
  <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 flex flex-wrap items-center justify-center p-6">
    {[...Array(63)].map((_, i) => (
      <span 
        key={i} 
        className="text-white text-xl font-bold m-1 opacity-90 select-none"
        style={{ 
          transform: `rotate(${Math.random() * 40 - 20}deg)`,
          fontSize: `${18 + Math.random() * 6}px`
        }}
      >
        ?
      </span>
    ))}
  </div>
);

const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern }) => (
  <div className="bg-white p-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
    <div className="flex flex-col sm:flex-row">
      <div className="lg:w-74 sm:w-64 lg:h-48 sm:h-48  flex-shrink-0">
        {hasQuestionPattern ? <QuestionPattern /> : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-6 flex-1">
        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
          {category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
        {subtitle && <p className="text-gray-600 italic text-sm leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  </div>
);
const InspirationArticlesLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {Inspirationarticles.map(article => (
            <Link
              key={article.slug}
              to={`/lifestyle-and-inspiration/Inspiration/articles/${article.slug}`}
            >
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default InspirationArticlesLayout;
