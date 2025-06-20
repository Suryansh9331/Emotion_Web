// import React from 'react';

// // Import your data configuration
// import { GetRelatedArticlesData } from './Data/GetRelatedArticlesData';

// const RelatedArticleComponent = ({ 
//   currentRoute = '/birth-control',
//   onNavigate = (url) => console.log('Navigate to:', url)
// }) => {
//   // Get dynamic data based on current route
//   const pageData = GetRelatedArticlesData(currentRoute);

//   const handleArticleClick = (link) => {
//     onNavigate(link);
//   };

//   const handleButtonClick = () => {
//     onNavigate(pageData.buttonLink);
//   };

//   return (
//     <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 sm:py-8 bg-[#f5f5f5] min-h-screen">
      
//       {/* Header Section */}
//       <div className="mb-6 sm:mb-8 lg:mb-12">
//         <div className="mb-4 sm:mb-6">
//           <h1 
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
//             style={{ color: pageData.accentColor }}
//           >
//             {pageData.mainTitle}
//           </h1>
          
//           {/* Subtitle */}
//           {pageData.subtitle && (
//             <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 max-w-2xl leading-relaxed">
//               {pageData.subtitle}
//             </p>
//           )}
          
//           {/* Accent Line */}
//           <div 
//             className="w-12 sm:w-16 h-0.5 rounded-full"
//             style={{ backgroundColor: pageData.accentColor }}
//           ></div>
//         </div>
//       </div>

//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
//         {pageData.articles.map((article) => (
//           <div 
//             key={article.id}
//             onClick={() => handleArticleClick(article.link)}
//             className="block group cursor-pointer"
//           >
//             <article className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200">
              
//               {/* Article Image */}
//               <div className="w-full sm:w-36 md:w-44 h-48 sm:h-36 md:h-44 flex-shrink-0">
//                 <img 
//                   src={article.image} 
//                   alt={article.title}
//                   className="w-full h-full object-cover rounded-md"
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center';
//                   }}
//                 />
//               </div>
              
//               {/* Article Content */}
//               <div className="flex-1 flex flex-col justify-between min-h-0">
//                 <div>
//                   {/* Category */}
//                   <p className="text-gray-400 text-xs uppercase tracking-wide mb-1 sm:mb-2 font-medium">
//                     {article.category}
//                   </p>
                  
//                   {/* Title */}
//                   <h3 className="text-gray-800 font-medium text-sm sm:text-base leading-tight group-hover:text-[#028388] transition-colors duration-200 line-clamp-3 sm:line-clamp-4">
//                     {article.title}
//                   </h3>
//                 </div>
                
//                 {/* Read More Indicator */}
//                 <div className="flex items-center mt-2 sm:mt-3">
//                   <span className="text-xs sm:text-sm font-medium text-[#028388] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                     Read more
//                     <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </article>
//           </div>
//         ))}
//       </div>

//       {/* View All Button */}
//       <div className="text-left">
//         <button
//           onClick={handleButtonClick}
//           className="inline-flex items-center gap-2 bg-[#028388] hover:bg-teal-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 hover:shadow-md group"
//         >
//           {pageData.buttonText}
//           <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RelatedArticleComponent;



















import { useLocation } from 'react-router-dom';

import GetRelatedArticlesData from "./Data/GetRelatedArticlesData"



// 👉 This is your final render component with routing logic inside
const RelatedArticleComponent = ({ onNavigate = (url) => console.log('Navigate to:', url) }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const pageData = GetRelatedArticlesData(currentRoute);

  const handleArticleClick = (link) => {
    onNavigate(link);
  };

  const handleButtonClick = () => {
    onNavigate(pageData.buttonLink);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-6 sm:py-8 bg-[#f5f5f5] min-h-screen">
      <div className="mb-6 sm:mb-8 lg:mb-12">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ color: pageData.accentColor }}>
            {pageData.mainTitle}
          </h1>
          {pageData.subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 max-w-2xl leading-relaxed">
              {pageData.subtitle}
            </p>
          )}
          <div className="w-12 sm:w-16 h-0.5 rounded-full" style={{ backgroundColor: pageData.accentColor }}></div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
        {pageData.articles.map((article) => (
          <div key={article.id} onClick={() => handleArticleClick(article.link)} className="block group cursor-pointer">
            <article className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-full sm:w-36 md:w-44 h-48 sm:h-36 md:h-44 flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center';
                  }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between min-h-0">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide mb-1 sm:mb-2 font-medium">
                    {article.category}
                  </p>
                  <h3 className="text-gray-800 font-medium text-sm sm:text-base leading-tight group-hover:text-[#028388] transition-colors duration-200 line-clamp-3 sm:line-clamp-4">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center mt-2 sm:mt-3">
                  <span className="text-xs sm:text-sm font-medium text-[#028388] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read more
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-left">
        <button
          onClick={handleButtonClick}
          className="inline-flex items-center gap-2 bg-[#028388] hover:bg-teal-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 hover:shadow-md group"
        >
          {pageData.buttonText}
          <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RelatedArticleComponent;
