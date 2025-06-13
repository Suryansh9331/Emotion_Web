// import React, { useState } from 'react';
// import BCArticlesLayout from './ArticleSection';
// import { 
//   BookOpen, 
//   CheckCircle, 
//   AlertCircle, 
//   DollarSign, 
//   Newspaper, 
//   Heart,
//   Smartphone,
//   Syringe,
//   Shield,
//   Circle,
//   Square,
//   Pill,
//   Beaker,
//   Scissors,
//   Lock,
//   AlertTriangle
// } from 'lucide-react';

// const ArticleFilterSection = () => {
//   const [selectedFilter, setSelectedFilter] = useState('View all');

//   const filterOptions = [
//     { id: 'view-all', label: 'View all', type: 'main' },
//     { id: 'how-to', label: 'how-to', icon: BookOpen, type: 'topic' },
//     { id: 'effectiveness', label: 'effectiveness', icon: CheckCircle, type: 'topic' },
//     { id: 'side-effects', label: 'side effects', icon: AlertCircle, type: 'topic' },
//     { id: 'cost-insurance', label: 'cost & insurance', icon: DollarSign, type: 'topic' },
//     { id: 'news', label: 'news', icon: Newspaper, type: 'topic' },
//     { id: 'lgbtq', label: 'LGBTQ+', icon: Heart, type: 'topic' },
//     { id: 'iud', label: 'IUD (Intrauterine Device)', icon: Shield, type: 'method' },
//     { id: 'implant', label: 'Implant (Nexplanon)', icon: Syringe, type: 'method' },
//     { id: 'birth-control-shot', label: 'Birth control shot (Depo-Provera)', icon: Syringe, type: 'method' },
//     { id: 'birth-control-ring', label: 'Birth control ring', icon: Circle, type: 'method' },
//     { id: 'birth-control-patch', label: 'Birth control patch', icon: Square, type: 'method' },
//     { id: 'birth-control-pill', label: 'Birth control pill', icon: Pill, type: 'method' },
//     { id: 'diaphragm', label: 'Diaphragm', icon: Shield, type: 'method' },
//     { id: 'condom', label: 'Condom', icon: Shield, type: 'method' },
//     { id: 'internal-condom', label: 'Internal condom (FC2)', icon: Shield, type: 'method' },
//     { id: 'cervical-cap', label: 'Cervical cap', icon: Shield, type: 'method' },
//     { id: 'fertility-awareness', label: 'Fertility awareness methods', icon: Beaker, type: 'method' },
//     { id: 'spermicide', label: 'Spermicide and gel', icon: Beaker, type: 'method' },
//     { id: 'withdrawal', label: 'Withdrawal (pull-out method)', icon: AlertTriangle, type: 'method' },
//     { id: 'sterilization', label: 'Sterilization', icon: Scissors, type: 'method' },
//     { id: 'not-right-now', label: '"Not right now"', icon: Lock, type: 'method' },
//     { id: 'emergency', label: 'Emergency contraception', icon: AlertTriangle, type: 'method' }
//   ];

//   const articles = {
//     'view-all': [
//       {
//         id: 1,
//         category: 'IUD',
//         title: 'Lorde is answering our birth control prayers',
//         subtitle: 'IUDs have the spotlight in Lorde\'s summer album, and we\'re so here for it!',
//         image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
//         url: '/article/lorde-birth-control'
//       },
//       {
//         id: 2,
//         category: 'IUD',
//         title: 'Three ways telehealth can make getting an IUD a reality',
//         subtitle: 'Yes, telehealth really can help you get an IUD',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
//         url: '/article/telehealth-iud'
//       },
//       {
//         id: 3,
//         category: 'BIRTH CONTROL',
//         title: 'These 8 stories make us want to shout "Thanks, Birth Control!" from the rooftops',
//         subtitle: 'We laughed, we cried, we didn\'t get pregnant',
//         image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
//         url: '/article/thanks-birth-control'
//       },
//       {
//         id: 4,
//         category: 'DIAPHRAGM',
//         title: 'Why I use a diaphragm for birth control',
//         subtitle: 'The diaphragm is hormone-free and gives me total control',
//         image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=200&fit=crop',
//         url: '/article/diaphragm-birth-control'
//       },
//       {
//         id: 5,
//         category: 'BIRTH CONTROL',
//         title: 'Four plus-size women share the birth control methods that work for them and why',
//         subtitle: 'Because birth control isn\'t one-size-fits-all',
//         image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop',
//         url: '/article/plus-size-birth-control'
//       },
//       {
//         id: 6,
//         category: 'STERILIZATION',
//         title: 'I chose sterilization, and I\'ve never looked back',
//         subtitle: 'Why sterilization gave me a sense of peace that no other method has',
//         image: 'https://images.unsplash.com/photo-1594824047550-2181bd4a8496?w=300&h=200&fit=crop',
//         url: '/article/sterilization-choice'
//       },
//       {
//         id: 7,
//         category: 'IUD',
//         title: 'Why my Mirena is my ride or die',
//         subtitle: 'It got my awful periods under control, and I never have to think about it',
//         image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=200&fit=crop',
//         url: '/article/mirena-iud'
//       },
//       {
//         id: 8,
//         category: 'IUD',
//         title: 'I\'ve had my IUD for three years, and I love it more every year',
//         subtitle: 'Why this hands-free birth control is so perfect for me',
//         image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
//         url: '/article/iud-three-years'
//       },
//       {
//         id: 9,
//         category: 'BIRTH CONTROL',
//         title: 'The complete guide to birth control effectiveness',
//         subtitle: 'Understanding how well different methods work in real life',
//         image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
//         url: '/article/effectiveness-guide'
//       },
//       {
//         id: 10,
//         category: 'PILL',
//         title: 'Birth control pills: Everything you need to know',
//         subtitle: 'The pros, cons, and everything in between',
//         image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=200&fit=crop',
//         url: '/article/birth-control-pills'
//       },
//       {
//         id: 11,
//         category: 'LGBTQ+',
//         title: 'Birth control options for LGBTQ+ individuals',
//         subtitle: 'Inclusive reproductive health for everyone',
//         image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop',
//         url: '/article/lgbtq-birth-control'
//       },
//       {
//         id: 12,
//         category: 'COST & INSURANCE',
//         title: 'How to get free birth control with insurance',
//         subtitle: 'Your guide to accessing affordable contraception',
//         image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop',
//         url: '/article/free-birth-control'
//       }
//     ],
//     'iud': [
//       {
//         id: 1,
//         category: 'IUD',
//         title: 'Lorde is answering our birth control prayers',
//         subtitle: 'IUDs have the spotlight in Lorde\'s summer album, and we\'re so here for it!',
//         image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
//         url: '/article/lorde-birth-control'
//       },
//       {
//         id: 2,
//         category: 'IUD',
//         title: 'Three ways telehealth can make getting an IUD a reality',
//         subtitle: 'Yes, telehealth really can help you get an IUD',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
//         url: '/article/telehealth-iud'
//       },
//       {
//         id: 7,
//         category: 'IUD',
//         title: 'Why my Mirena is my ride or die',
//         subtitle: 'It got my awful periods under control, and I never have to think about it',
//         image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=200&fit=crop',
//         url: '/article/mirena-iud'
//       },
//       {
//         id: 8,
//         category: 'IUD',
//         title: 'I\'ve had my IUD for three years, and I love it more every year',
//         subtitle: 'Why this hands-free birth control is so perfect for me',
//         image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
//         url: '/article/iud-three-years'
//       }
//     ],
//     'effectiveness': [
//       {
//         id: 9,
//         category: 'BIRTH CONTROL',
//         title: 'The complete guide to birth control effectiveness',
//         subtitle: 'Understanding how well different methods work in real life',
//         image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
//         url: '/article/effectiveness-guide'
//       },
//       {
//         id: 1,
//         category: 'IUD',
//         title: 'Lorde is answering our birth control prayers',
//         subtitle: 'IUDs have the spotlight in Lorde\'s summer album, and we\'re so here for it!',
//         image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
//         url: '/article/lorde-birth-control'
//       }
//     ],
//     'sterilization': [
//       {
//         id: 6,
//         category: 'STERILIZATION',
//         title: 'I chose sterilization, and I\'ve never looked back',
//         subtitle: 'Why sterilization gave me a sense of peace that no other method has',
//         image: 'https://images.unsplash.com/photo-1594824047550-2181bd4a8496?w=300&h=200&fit=crop',
//         url: '/article/sterilization-choice'
//       }
//     ],
//     'diaphragm': [
//       {
//         id: 4,
//         category: 'DIAPHRAGM',
//         title: 'Why I use a diaphragm for birth control',
//         subtitle: 'The diaphragm is hormone-free and gives me total control',
//         image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=200&fit=crop',
//         url: '/article/diaphragm-birth-control'
//       }
//     ],
//     'how-to': [
//       {
//         id: 2,
//         category: 'IUD',
//         title: 'Three ways telehealth can make getting an IUD a reality',
//         subtitle: 'Yes, telehealth really can help you get an IUD',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
//         url: '/article/telehealth-iud'
//       },
//       {
//         id: 12,
//         category: 'COST & INSURANCE',
//         title: 'How to get free birth control with insurance',
//         subtitle: 'Your guide to accessing affordable contraception',
//         image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop',
//         url: '/article/free-birth-control'
//       }
//     ],
//     'lgbtq': [
//       {
//         id: 11,
//         category: 'LGBTQ+',
//         title: 'Birth control options for LGBTQ+ individuals',
//         subtitle: 'Inclusive reproductive health for everyone',
//         image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=200&fit=crop',
//         url: '/article/lgbtq-birth-control'
//       }
//     ],
//     'birth-control-pill': [
//       {
//         id: 10,
//         category: 'PILL',
//         title: 'Birth control pills: Everything you need to know',
//         subtitle: 'The pros, cons, and everything in between',
//         image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=200&fit=crop',
//         url: '/article/birth-control-pills'
//       }
//     ],
//     'cost-insurance': [
//       {
//         id: 12,
//         category: 'COST & INSURANCE',
//         title: 'How to get free birth control with insurance',
//         subtitle: 'Your guide to accessing affordable contraception',
//         image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop',
//         url: '/article/free-birth-control'
//       }
//     ]
//   };

//   const handleFilterClick = (filterId, label) => {
//     setSelectedFilter(label);
//   };

//   const handleArticleClick = (url) => {
//     // In a real app, you would use React Router or Next.js router
//     console.log(`Navigating to: ${url}`);
//     // For demo purposes, just alert
//     alert(`Would navigate to: ${url}`);
//   };

//   const getFilteredArticles = () => {
//     const filterKey = selectedFilter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
//     return articles[filterKey] || articles['view-all'];
//   };

//   return (
//     <div className="min-h-auto bg-[#f5f5f5] lg:px-40 lg:py-10">
//       <div className="flex flex-col lg:flex-row">
//         {/* Sidebar */}
//         <div className="w-full lg:w-80 bg-white border-r border-gray-200 p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-6">Filter by:</h2>
          
//           {/* View all */}
//           <div className="mb-6">
//             <button
//               onClick={() => handleFilterClick('view-all', 'View all')}
//               className={`block w-full text-left py-2 px-3 rounded-md transition-colors text-sm ${
//                 selectedFilter === 'View all' 
//                   ? 'bg-teal-50 font-medium' 
//                   : 'text-gray-700 hover:bg-gray-50'
//               }`}
//               style={{ color: selectedFilter === 'View all' ? '#0c8588' : '' }}
//             >
//               View all
//             </button>
//           </div>

//           {/* View by topic */}
//           <div className="mb-6">
//             <h3 className="text-lg text-gray-500 mb-3">View by topic</h3>
//             <div className="space-y-1">
//               {filterOptions.filter(option => option.type === 'topic').map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleFilterClick(option.id, option.label)}
//                   className={`flex items-center w-full text-left py-2 px-3 rounded-md transition-colors text-sm ${
//                     selectedFilter === option.label 
//                       ? 'bg-teal-50 font-medium' 
//                       : 'font-semibold text-[#0c8588] cursor-pointer hover:bg-gray-50'
//                   }`}
//                   style={{ color: selectedFilter === option.label ? '#0c8588' : '' }}
//                 >
//                   <option.icon 
//                     className="w-4 h-4 mr-3" 
//                     style={{ color: '#0c8588' }} 
//                   />
//                   <span>{option.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* View by birth control method */}
//           <div>
//             <h3 className="text-sm text-gray-500 mb-3">View by birth control method</h3>
//             <div className="space-y-1">
//               {filterOptions.filter(option => option.type === 'method').map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleFilterClick(option.id, option.label)}
//                   className={`flex items-center w-full text-left py-2 px-3 rounded-md transition-colors text-sm ${
//                     selectedFilter === option.label 
//                       ? 'bg-teal-50 font-medium' 
//                       : 'font-semibold text-[#0c8588] cursor-pointer hover:bg-gray-50'
//                   }`}
//                   style={{ color: selectedFilter === option.label ? '#0c8588' : '' }}
//                 >
//                   <option.icon 
//                     className="w-4 h-4 mr-3" 
//                     style={{ color: '#0c8588' }} 
//                   />
//                   <span>{option.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid gap-6">
//               {getFilteredArticles().map((article) => (
//                 <article
//                   key={article.id}
//                   onClick={() => handleArticleClick(article.url)}
//                   className="bg-white  shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex flex-col sm:flex-row">
//                     <div className="sm:w-64 h-78 sm:h-auto flex-shrink-0">
//                       <img
//                         src={article.image}
//                         alt={article.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1 p-6">
//                       <div className="text-xs font-medium text-gray-500 tracking-wide uppercase mb-2">
//                         {article.category}
//                       </div>
//                       <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
//                         {article.title}
//                       </h2>
//                       <p className="text-gray-600 italic leading-relaxed">
//                         {article.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         // </div>
//         {/* <BCArticlesLayout/> */}
        
//       </div>
//     </div>
//   );
// };

// export default ArticleFilterSection;

















import React, { useState } from 'react';
import BCArticlesLayout from './ArticleSection';
import {
  BookOpen, CheckCircle, AlertCircle, DollarSign, Newspaper, Heart,
  Smartphone, Syringe, Shield, Circle, Square, Pill, Beaker, Scissors,
  Lock, AlertTriangle
} from 'lucide-react';

const ArticleFilterSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('view-all');

  const filterOptions = [
    { id: 'view-all', label: 'View all', type: 'main' },
    { id: 'how-to', label: 'how-to', icon: BookOpen, type: 'topic' },
    { id: 'effectiveness', label: 'effectiveness', icon: CheckCircle, type: 'topic' },
    { id: 'side-effects', label: 'side effects', icon: AlertCircle, type: 'topic' },
    { id: 'cost-insurance', label: 'cost & insurance', icon: DollarSign, type: 'topic' },
    { id: 'news', label: 'news', icon: Newspaper, type: 'topic' },
    { id: 'lgbtq', label: 'LGBTQ+', icon: Heart, type: 'topic' },
    { id: 'iud', label: 'IUD (Intrauterine Device)', icon: Shield, type: 'method' },
    { id: 'implant', label: 'Implant (Nexplanon)', icon: Syringe, type: 'method' },
    { id: 'birth-control-shot', label: 'Birth control shot (Depo-Provera)', icon: Syringe, type: 'method' },
    { id: 'birth-control-ring', label: 'Birth control ring', icon: Circle, type: 'method' },
    { id: 'birth-control-patch', label: 'Birth control patch', icon: Square, type: 'method' },
    { id: 'birth-control-pill', label: 'Birth control pill', icon: Pill, type: 'method' },
    { id: 'diaphragm', label: 'Diaphragm', icon: Shield, type: 'method' },
    { id: 'condom', label: 'Condom', icon: Shield, type: 'method' },
    { id: 'internal-condom', label: 'Internal condom (FC2)', icon: Shield, type: 'method' },
    { id: 'cervical-cap', label: 'Cervical cap', icon: Shield, type: 'method' },
    { id: 'fertility-awareness', label: 'Fertility awareness methods', icon: Beaker, type: 'method' },
    { id: 'spermicide', label: 'Spermicide and gel', icon: Beaker, type: 'method' },
    { id: 'withdrawal', label: 'Withdrawal (pull-out method)', icon: AlertTriangle, type: 'method' },
    { id: 'sterilization', label: 'Sterilization', icon: Scissors, type: 'method' },
    { id: 'not-right-now', label: '"Not right now"', icon: Lock, type: 'method' },
    { id: 'emergency', label: 'Emergency contraception', icon: AlertTriangle, type: 'method' }
  ];

  return (
    <div className="min-h-auto bg-[#f5f5f5] lg:px-40 lg:py-10">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-80 bg-white border-r border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Filter by:</h2>

          <div className="mb-6">
            <button
              onClick={() => setSelectedFilter('view-all')}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm ${
                selectedFilter === 'view-all' ? 'bg-teal-50 font-medium' : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={{ color: selectedFilter === 'view-all' ? '#0c8588' : '' }}
            >
              View all
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-gray-500 mb-3">View by topic</h3>
            <div className="space-y-1">
              {filterOptions.filter(opt => opt.type === 'topic').map(option => (
                <button
                  key={option.id}
                  onClick={() => setSelectedFilter(option.id)}
                  className={`flex items-center w-full text-left py-2 px-3 rounded-md text-sm ${
                    selectedFilter === option.id
                      ? 'bg-teal-50 font-medium'
                      : 'text-[#0c8588] font-semibold hover:bg-gray-50'
                  }`}
                >
                  <option.icon className="w-4 h-4 mr-3" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-gray-500 mb-3">View by birth control method</h3>
            <div className="space-y-1">
              {filterOptions.filter(opt => opt.type === 'method').map(option => (
                <button
                  key={option.id}
                  onClick={() => setSelectedFilter(option.id)}
                  className={`flex items-center w-full text-left py-2 px-3 rounded-md text-sm ${
                    selectedFilter === option.id
                      ? 'bg-teal-50 font-medium'
                      : 'text-[#0c8588] font-semibold hover:bg-gray-50'
                  }`}
                >
                  <option.icon className="w-4 h-4 mr-3" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filtered Article Renderer */}
        <BCArticlesLayout selectedFilter={selectedFilter} />
      </div>
    </div>
  );
};

export default ArticleFilterSection;
















































































// import React, { useState } from 'react';
// import { 
//   BookOpen, 
//   CheckCircle, 
//   AlertCircle, 
//   DollarSign, 
//   Newspaper, 
//   Heart,
//   Smartphone,
//   Syringe,
//   Shield,
//   Circle,
//   Square,
//   Pill,
//   Beaker,
//   Scissors,
//   Lock,
//   AlertTriangle
// } from 'lucide-react';

// const ArticleFilterSection = () => {
//   const [selectedFilter, setSelectedFilter] = useState('View all');

//   const filterOptions = [
//     { id: 'view-all', label: 'View all', type: 'main' },
//     { id: 'how-to', label: 'how-to', icon: BookOpen, type: 'topic' },
//     { id: 'effectiveness', label: 'effectiveness', icon: CheckCircle, type: 'topic' },
//     { id: 'side-effects', label: 'side effects', icon: AlertCircle, type: 'topic' },
//     { id: 'cost-insurance', label: 'cost & insurance', icon: DollarSign, type: 'topic' },
//     { id: 'news', label: 'news', icon: Newspaper, type: 'topic' },
//     { id: 'lgbtq', label: 'LGBTQ+', icon: Heart, type: 'topic' },
//     { id: 'iud', label: 'IUD (Intrauterine Device)', icon: Shield, type: 'method' },
//     { id: 'implant', label: 'Implant (Nexplanon)', icon: Syringe, type: 'method' },
//     { id: 'birth-control-shot', label: 'Birth control shot (Depo-Provera)', icon: Syringe, type: 'method' },
//     { id: 'birth-control-ring', label: 'Birth control ring', icon: Circle, type: 'method' },
//     { id: 'birth-control-patch', label: 'Birth control patch', icon: Square, type: 'method' },
//     { id: 'birth-control-pill', label: 'Birth control pill', icon: Pill, type: 'method' },
//     { id: 'diaphragm', label: 'Diaphragm', icon: Shield, type: 'method' },
//     { id: 'condom', label: 'Condom', icon: Shield, type: 'method' },
//     { id: 'internal-condom', label: 'Internal condom (FC2)', icon: Shield, type: 'method' },
//     { id: 'cervical-cap', label: 'Cervical cap', icon: Shield, type: 'method' },
//     { id: 'fertility-awareness', label: 'Fertility awareness methods', icon: Beaker, type: 'method' },
//     { id: 'spermicide', label: 'Spermicide and gel', icon: Beaker, type: 'method' },
//     { id: 'withdrawal', label: 'Withdrawal (pull-out method)', icon: AlertTriangle, type: 'method' },
//     { id: 'sterilization', label: 'Sterilization', icon: Scissors, type: 'method' },
//     { id: 'not-right-now', label: '"Not right now"', icon: Lock, type: 'method' },
//     { id: 'emergency', label: 'Emergency contraception', icon: AlertTriangle, type: 'method' }
//   ];

//   const articles = {
//     'view-all': [
//       {
//         id: 1,
//         category: 'IUD',
//         title: 'Lorde is answering our birth control prayers',
//         subtitle: 'IUDs have the spotlight in Lorde\'s summer album, and we\'re so here for it!',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDBBN0JGIi8+CjxyZWN0IHk9IjEwNCIgd2lkdGg9IjMzMSIgaGVpZ2h0PSI5NiIgZmlsbD0iI0ZGQzY1NyIvPgo8cGF0aCBkPSJNMzMxIDEwNEgwTDMzMSAyMDBWMTA0WiIgZmlsbD0iI0ZGODRBNSIvPgo8Y2lyY2xlIGN4PSIxNjUuNSIgY3k9IjEwMCIgcj0iNTAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CjxsaW5lIHgxPSIxNjUuNSIgeTE9IjUwIiB4Mj0iMTY1LjUiIHkyPSIxNTAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxsaW5lIHgxPSIxNjUuNSIgeTE9IjUwIiB4Mj0iMTQ1LjUiIHkyPSI3MCIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjQiLz4KPHN0eWxlPgogICAgcmVjdCwgcGF0aCwgY2lyY2xlLCBsaW5lIHsKICAgICAgICBhbmltYXRpb246IGZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlOwogICAgfQogICAgQGtleWZyYW1lcyBmbG9hdCB7CiAgICAgICAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfQogICAgICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfQogICAgfQo8L3N0eWxlPgo8L3N2Zz4K',
//         url: '/article/lorde-birth-control'
//       },
//       {
//         id: 2,
//         category: 'IUD',
//         title: 'Three ways telehealth can make getting an IUD a reality',
//         subtitle: 'Yes, telehealth really can help you get an IUD',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjYwIiB5PSI4MCIgd2lkdGg9IjIxMSIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiNEMUQ1REIiLz4KPHJlY3QgeD0iNjAiIHk9IjkwIiB3aWR0aD0iMjExIiBoZWlnaHQ9IjIwIiByeD0iNCIgZmlsbD0iIzM3NDE1MSIvPgo8Y2lyY2xlIGN4PSI5MCIgY3k9IjEzMCIgcj0iNiIgZmlsbD0iIzM3NDE1MSIvPgo8Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMzAiIHI9IjYiIGZpbGw9IiMzNzQxNTEiLz4KPHN0eWxlPgogICAgcmVjdCwgY2lyY2xlIHsKICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlOwogICAgfQogICAgQGtleWZyYW1lcyBwdWxzZSB7CiAgICAgICAgMCUsIDEwMCUgeyBvcGFjaXR5OiAxOyB9CiAgICAgICAgNTAlIHsgb3BhY2l0eTogMC41OyB9CiAgICB9Cjwvc3R5bGU+Cjwvc3ZnPgo=',
//         url: '/article/telehealth-iud'
//       },
//       {
//         id: 3,
//         category: 'BIRTH CONTROL',
//         title: 'These 8 stories make us want to shout "Thanks, Birth Control!" from the rooftops',
//         subtitle: 'We laughed, we cried, we didn\'t get pregnant',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY4NEE1Ii8+Cjx0ZXh0IHg9IjE2NS41IiB5PSI4MCIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VGhhbmtzLDwvdGV4dD4KPHRleHQgeD0iMTY1LjUiIHk9IjEyMCIgZmlsbD0iIzk5MzNGRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QklSVEg8L3RleHQ+Cjx0ZXh0IHg9IjE2NS41IiB5PSIxNjAiIGZpbGw9IiMwMEFCQzEiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNiIgZm9udC13ZWlnaHQ9ImJvbGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNPTlRST0w8L3RleHQ+Cjwvc3ZnPgo=',
//         url: '/article/thanks-birth-control'
//       },
//       {
//         id: 4,
//         category: 'DIAPHRAGM',
//         title: 'Why I use a diaphragm for birth control',
//         subtitle: 'The diaphragm is hormone-free and gives me total control',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3RkE4Ii8+CjxjaXJjbGUgY3g9IjE2NS41IiBjeT0iMTAwIiByPSI2MCIgZmlsbD0iIzAwQUJDMSIgb3BhY2l0eT0iMC4zIi8+CjxyZWN0IHg9IjE0NSIgeT0iNDAiIHdpZHRoPSI0MSIgaGVpZ2h0PSIxMjAiIHJ4PSI0IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjkiLz4KPHJlY3QgeD0iMTUwIiB5PSI0NSIgd2lkdGg9IjMxIiBoZWlnaHQ9IjExMCIgcng9IjQiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+Cg==',
//         url: '/article/diaphragm-birth-control'
//       },
//       {
//         id: 5,
//         category: 'BIRTH CONTROL',
//         title: 'Four plus-size women share the birth control methods that work for them and why',
//         subtitle: 'Because birth control isn\'t one-size-fits-all',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0Y1OTdBMiIvPgo8Y2lyY2xlIGN4PSIyMzEiIGN5PSI4MCIgcj0iMzAiIGZpbGw9IiNGNTk3QTIiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTIwIiByPSIzMCIgZmlsbD0iI0Y1OTdBMiIvPgo8Y2lyY2xlIGN4PSIyMzEiIGN5PSIxMjAiIHI9IjMwIiBmaWxsPSIjRjU5N0EyIi8+CjxyZWN0IHg9Ijc1IiB5PSIxNDAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiNGRjAwMDAiLz4KPHJlY3QgeD0iMjA2IiB5PSIxNDAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiNCMTMxNzEiLz4KPC9zdmc+Cg==',
//         url: '/article/plus-size-birth-control'
//       },
//       {
//         id: 6,
//         category: 'STERILIZATION',
//         title: 'I chose sterilization, and I\'ve never looked back',
//         subtitle: 'Why sterilization gave me a sense of peace that no other method has',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZDNTU3Ii8+CjxjaXJjbGUgY3g9IjE2NS41IiBjeT0iNDAiIHI9IjMwIiBmaWxsPSIjRjU5N0EyIi8+CjxyZWN0IHg9IjE0NSIgeT0iNzAiIHdpZHRoPSI0MSIgaGVpZ2h0PSI4MCIgcng9IjQiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMTA1IiB5PSIxMjAiIHdpZHRoPSIxMjEiIGhlaWdodD0iNDAiIHJ4PSI0IiBmaWxsPSIjMDA3RkE4Ii8+Cjwvc3ZnPgo=',
//         url: '/article/sterilization-choice'
//       },
//       {
//         id: 7,
//         category: 'IUD',
//         title: 'Why my Mirena is my ride or die',
//         subtitle: 'It got my awful periods under control, and I never have to think about it',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjI1MSIgaGVpZ2h0PSI4MCIgcng9IjQiIGZpbGw9IiNGRkY1QTBBL4+CjxjaXJjbGUgY3g9IjE2NS41IiBjeT0iMTAwIiByPSIyMCIgZmlsbD0iIzAwNzFBOCIvPgo8Y2lyY2xlIGN4PSIxNjUuNSIgY3k9IjEwMCIgcj0iNDAiIHN0cm9rZT0iIzAwNzFBOCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=',
//         url: '/article/mirena-iud'
//       },
//       {
//         id: 8,
//         category: 'IUD',
//         title: 'I\'ve had my IUD for three years, and I love it more every year',
//         subtitle: 'Why this hands-free birth control is so perfect for me',
//         image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMzMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSUzMzEiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3RkE4Ii8+CjxjaXJjbGUgY3g9IjE2NS41IiBjeT0iNDAiIHI9IjMwIiBmaWxsPSIjRjU5N0EyIi8+CjxyZWN0IHg9IjE0NSIgeT0iNzAiIHdpZHRoPSI0MSIgaGVpZ2h0PSI4MCIgcng9IjQiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMTM1IiB5PSIxMjAiIHdpZHRoPSI2MSIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiMwMEFCQzEiLz4KPC9zdmc+Cg==',
//         url: '/article/iud-three-years'
//       }
//     ]
//   };

//   const handleFilterClick = (filterId, label) => {
//     setSelectedFilter(label);
//   };

//   const handleArticleClick = (url) => {
//     console.log(`Navigating to: ${url}`);
//     alert(`Would navigate to: ${url}`);
//   };

//   const getFilteredArticles = () => {
//     const filterKey = selectedFilter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
//     return articles[filterKey] || articles['view-all'];
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f5]    lg:px-40 lg:py-10 ">
//       <div className="flex flex-col lg:flex-row">
//         {/* Sidebar */}
//         <div className="w-full lg:w-80 bg-white border-r border-gray-200 p-6 lg:h-auto">
//           <h2 className="text-xl font-semibold text-[#404040] mb-6">Filter by:</h2>
          
//           {/* View all */}
//           <div className="mb-6">
//             <button
//               onClick={() => handleFilterClick('view-all', 'View all')}
//               className={`block w-full text-left py-2 px-0 transition-colors text-sm ${
//                 selectedFilter === 'View all' 
//                   ? 'font-medium text-teal-600' 
//                   : 'text-gray-700 hover:text-gray-900'
//               }`}
//             >
//               View all
//             </button>
//           </div>

//           {/* View by topic */}
//           <div className="mb-8">
//             <h3 className="text-xs text-gray-500 mb-4">View by topic</h3>
//             <div className="space-y-2">
//               {filterOptions.filter(option => option.type === 'topic').map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleFilterClick(option.id, option.label)}
//                   className={`flex items-center w-full text-left py-2 px-0 transition-colors text-sm ${
//                     selectedFilter === option.label 
//                       ? 'font-medium text-teal-600' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <option.icon 
//                     className="w-4 h-4 mr-3 flex-shrink-0" 
//                     style={{ color: '#0c8588' }} 
//                   />
//                   <span>{option.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* View by birth control method */}
//           <div>
//             <h3 className="text-xs text-gray-500 mb-4">View by birth control method</h3>
//             <div className="space-y-2">
//               {filterOptions.filter(option => option.type === 'method').map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleFilterClick(option.id, option.label)}
//                   className={`flex items-center w-full text-left py-2 px-0 transition-colors text-sm ${
//                     selectedFilter === option.label 
//                       ? 'font-medium text-teal-600' 
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   <option.icon 
//                     className="w-4 h-4 mr-3 flex-shrink-0" 
//                     style={{ color: '#0c8588' }} 
//                   />
//                   <span>{option.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 bg-gray-50">
//           <div className="p-6 lg:p-8">
//             <div className="space-y-8">
//               {getFilteredArticles().map((article) => (
//                 <article
//                   key={article.id}
//                   onClick={() => handleArticleClick(article.url)}
//                   className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200 border border-gray-100"
//                 >
//                   <div className="flex flex-col lg:flex-row">
//                     <div className="lg:w-80 w-full h-48 lg:h-48 flex-shrink-0">
//                       <img
//                         src={article.image}
//                         alt={article.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="flex-1 p-6 lg:p-8">
//                       <div className="text-xs font-medium text-gray-500 tracking-widest uppercase mb-3">
//                         {article.category}
//                       </div>
//                       <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight">
//                         {article.title}
//                       </h2>
//                       <p className="text-gray-600 italic text-lg leading-relaxed">
//                         {article.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleFilterSection;