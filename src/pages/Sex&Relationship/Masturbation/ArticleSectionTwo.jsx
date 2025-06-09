
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

// // const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern = false }) => (
// //   <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6">
// //     <div className="flex flex-col sm:flex-row">
// //       {/* Image/Pattern Section - Larger area */}
// //       <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
// //         {hasQuestionPattern ? (
// //           <QuestionPattern />
// //         ) : (
// //           <img 
// //             src={image} 
// //             alt={title}
// //             className="w-full h-full object-cover"
// //           />
// //         )}
// //       </div>
      
// //       {/* Content Section */}
// //       <div className="p-6 flex-1">
// //         <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
// //           {category}
// //         </div>
// //         <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
// //           {title}
// //         </h3>
// //         {subtitle && (
// //           <p className="text-gray-600 italic text-sm leading-relaxed">
// //             {subtitle}
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   </div>
// // );

// // const STIArticlesLayoutTwo = () => {
// //   const articles = [
// //     {
// //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "Can I tell if someone else has an STI?",
// //       image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
// //     },
// //     {
// //       category: "FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "How common are STIs?",
// //       image: "/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "What's the difference between STIs and STDs?",
// //       subtitle: "Why am I hearing the term STIs?",
// //       image: "/SHW/provider_perspectives_header-44b4f94e01ec610c3de2b52585ef601d43bb8196a7253ae8e24896c8838e3.jpg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "Herpes: What it is, how it’s spread, and how to manage it",
// //     //   subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
// //       image: "/SHW/GettyImages-1256087897.jpg"
// //     },
// //     {
// //       category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
// //       title: "What does it really mean to be diagnosed with HPV?",
// //       subtitle: "Everything you need to know about this common STI",
// //       image: "/SHW/GettyImages-1312297068.jpg"
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="space-y-0">
// //           {articles.map((article, index) => (
// //             <ArticleCard
// //               key={index}
// //               category={article.category}
// //               title={article.title}
// //               subtitle={article.subtitle}
// //               image={article.image}
// //               hasQuestionPattern={article.hasQuestionPattern}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default STIArticlesLayoutTwo;  



// import { Link } from 'react-router-dom';
// import { articles } from './data/articles';



// const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern }) => (
//   <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
//     <div className="flex flex-col sm:flex-row">
//       <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
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
// const STIArticlesLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-0">
//           {articles.map(article => (
//             <Link
//               key={article.slug}
//               to={`/articles/${article.slug}`}
//             >
//               <ArticleCard {...article} />
//             </Link>
//           ))}
//         </div>
//       </div>  
//     </div>
//   );
// };
// export default STIArticlesLayout;



// src/components/ArticleSectionTwo.jsx
import { Link } from 'react-router-dom';
import { MBarticlesTwo } from './data/articles';

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

// Reuse or copy your ArticleCard component
const ArticleCard = ({ category, title, subtitle, image, hasQuestionPattern }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
        {hasQuestionPattern ? <QuestionPattern /> : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-6 flex-1">
        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3 leading-tight">
          {category}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-gray-600 italic text-sm leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </div>
);

const MBArticlesLayoutTwo = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-0">
        {MBarticlesTwo.map(article => (
          <Link
            key={article.slug}
            to={`/sex-relationships/Masturbation/articles-two/${article.slug}`}
          >
            <ArticleCard {...article} />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default MBArticlesLayoutTwo;
