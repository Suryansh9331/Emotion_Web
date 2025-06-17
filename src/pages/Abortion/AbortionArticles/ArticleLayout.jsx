
// import { Link } from 'react-router-dom';
// import { Abortionarticles } from './Data/article'

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

// const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern }) => (
//   <div className="bg-white p-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
//     <div className="flex flex-col sm:flex-row">
//       <div className="max-w-4xl  sm:w-74   sm:h-48 flex-shrink-0">
//         {hasQuestionPattern ? <QuestionPattern /> : (
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         )}
//       </div>
//       <div className="p-6 flex-1">
//         <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
//           {category}
//         </div>
//         <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
//         {subtitle && <p className="text-gray-600 italic text-sm leading-relaxed">{subtitle}</p>}
//       </div>
//     </div>
//   </div>
// );
// const AbortionArticlesLayout = () => {
//   return (
//     <div className="min-h-screen bg-[#f5f5f5] py-8">
//       <div className="max-w-full mx-auto px-20 sm:px-6 md:px-2 lg:px-30">
//         <div className="space-y-0">
//           {Abortionarticles.map(article => (
//             <Link
//               key={article.slug}
//               to={`/abortion/articles/${article.slug}`}
//             >
//               <ArticleCard {...article} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AbortionArticlesLayout;

import  SubscriptionForm  from "./SubscriptionComponent"

import { Link } from 'react-router-dom';
import { Abortionarticles } from './Data/article';

const QuestionPattern = () => (
  <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 flex flex-wrap items-center justify-center p-4 sm:p-6">
    {[...Array(63)].map((_, i) => (
      <span 
        key={i} 
        className="text-white font-bold m-1 opacity-90 select-none"
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
  <div className="bg-white  p-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-2/5 h-48 md:h-40 lg:h-48 lg:w-80 overflow-hidden ">
        {hasQuestionPattern ? (
          <QuestionPattern />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="flex-1 p-1">
        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">
          {category}
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-600 italic text-sm md:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </div>
);

const AbortionArticlesLayout = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8    max-w-full">
      <div className="max-w-6xl mx-auto">
        {Abortionarticles.map((article) => (
          <Link key={article.slug} to={`/abortion/articles/${article.slug}`}>
            <ArticleCard {...article} />
          </Link>
        ))}
        
      </div>
     

    </div>
  
    
 
);
};

export default AbortionArticlesLayout;
