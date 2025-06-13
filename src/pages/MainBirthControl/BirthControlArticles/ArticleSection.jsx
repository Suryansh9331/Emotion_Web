// import { Link } from 'react-router-dom';
// import { BCarticles } from './Data/Articles.jsx';

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
// const BCArticlesLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="space-y-0">
//           {BCarticles.map(article => (
//             <Link
//               key={article.slug}
//               to={`/sex-relationships/BetterSex/articles/${article.slug}`}
//             >
//               <ArticleCard {...article} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BCArticlesLayout;

import { Link } from "react-router-dom";
import { BCarticles } from "./Data/Articles";

const ArticleCard = ({ category, title, subtitle, image }) => (
  <div className="bg-white p-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 mb-6 cursor-pointer">
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-64 h-48 sm:h-48 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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

const filterMap = {
  "how-to": ["Health care"],
  effectiveness: ["Birth Control"],
  "side-effects": ["Birth Control"],
  "cost-insurance": ["Cost & Insurance"],
  news: ["News"],
  lgbtq: ["LGBTQ+"],
  iud: ["IUD"],
  implant: ["Implant"],
  "birth-control-shot": ["Shot"],
  "birth-control-ring": ["Ring"],
  "birth-control-patch": ["Patch"],
  "birth-control-pill": ["Pill"],
  diaphragm: ["Diaphragm"],
  condom: ["Condom"],
  "internal-condom": ["Internal Condom"],
  "cervical-cap": ["Cervical Cap"],
  "fertility-awareness": ["Fertility Awareness"],
  spermicide: ["Spermicide"],
  withdrawal: ["Withdrawal"],
  sterilization: ["Sterilization"],
  "not-right-now": ["Not Right Now"],
  emergency: ["Emergency"],
};

const BCArticlesLayout = ({ selectedFilter }) => {
  const filterCategories = filterMap[selectedFilter];

  const filteredArticles =
    selectedFilter === "view-all"
      ? BCarticles
      : BCarticles.filter((article) =>
          filterCategories?.includes(article.category)
        );

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex-1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/birth-control/articles/${article.slug}`}
            >
              <ArticleCard {...article} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No articles found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default BCArticlesLayout;
