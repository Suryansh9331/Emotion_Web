// import React, { useState } from 'react';
// import { Play, Users, Shield, Activity, Pill, FileText, Zap, Eye, Stethoscope, AlertTriangle, Calendar, Heart, Droplets, Target, Clock } from 'lucide-react';

// const BirthControlReviews = () => {
//   const [selectedCategory, setSelectedCategory] = useState('View all videos');
//   const [selectedReview, setSelectedReview] = useState(null);

//   const filterCategories = [
//     { id: 'all', name: 'View all videos', icon: null, isHeader: true },
//     { id: 'birth-control-method', name: 'View by birth control method', icon: null, isSubHeader: true },
//     { id: 'iud', name: 'IUD (Intrauterine Device)', icon: 'T', iconType: 'text' },
//     { id: 'implant', name: 'Implant (Nexplanon)', icon: '/', iconType: 'text' },
//     { id: 'birth-control-shot', name: 'Birth control shot (Depo-Provera)', icon: Shield, iconType: 'component' },
//     { id: 'birth-control-ring', name: 'Birth control ring', icon: Users, iconType: 'component' },
//     { id: 'birth-control-patch', name: 'Birth control patch', icon: FileText, iconType: 'component' },
//     { id: 'birth-control-pill', name: 'Birth control pill', icon: Pill, iconType: 'component' },
//     { id: 'diaphragm', name: 'Diaphragm', icon: Shield, iconType: 'component' },
//     { id: 'condom', name: 'Condom', icon: Droplets, iconType: 'component' },
//     { id: 'internal-condom', name: 'Internal condom (FC2)', icon: Target, iconType: 'component' },
//     { id: 'cervical-cap', name: 'Cervical cap', icon: Eye, iconType: 'component' },
//     { id: 'fertility-awareness', name: 'Fertility awareness methods', icon: Calendar, iconType: 'component' },
//     { id: 'spermicide', name: 'Spermicide and gel', icon: Zap, iconType: 'component' },
//     { id: 'withdrawal', name: 'Withdrawal (pull-out method)', icon: Activity, iconType: 'component' },
//     { id: 'sterilization', name: 'Sterilization', icon: Stethoscope, iconType: 'component' },
//     { id: 'not-right-now', name: '"Not right now"', icon: Clock, iconType: 'component' },
//     { id: 'emergency-contraception', name: 'Emergency contraception', icon: AlertTriangle, iconType: 'component' }
//   ];

//   const reviews = [
//     {
//       id: 1,
//       category: 'iud',
//       title: 'Does it hurt to get an IUD?',
//       subtitle: 'IUD',
//       quote: '"You know, you kinda have to bear through it until your uterus is like, \'okay, we\'re friends, we\'re gonna work together.\'"',
//       videoId: 'dQw4w9WgXcQ',
//       isFeatured: true,
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
//     },
//     {
//       id: 2,
//       category: 'condom',
//       title: 'Why use condoms?',
//       subtitle: 'CONDOM',
//       quote: '"It\'s usually very assumed that we\'re gonna need condoms..."',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
//     },
//     {
//       id: 3,
//       category: 'sti',
//       title: 'How do you protect against STIs?',
//       subtitle: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
//       quote: '"Before we had any sexual contact, we decided to go to the doctor together."',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
//     },
//     {
//       id: 4,
//       category: 'iud',
//       name: 'Ellie, 27, IUD',
//       subtitle: 'IUD',
//       quote: '"I love being able to say I haven\'t had a period since I was 17 years old."',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzRXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7a51c8a7b073b2045a9469eab7cb726b719279ef/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1010.jpg'
//     },
//     {
//       id: 5,
//       category: 'implant',
//       name: 'Ali, 17, Implant',
//       subtitle: 'IMPLANT (NEXPLANON)',
//       quote: '"It was super fast, super easy."',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10685d433e6c8982257dd1388165f5c7c0f9e370/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1012.jpg'
//     },
//     {
//       id: 6,
//       category: 'birth-control-patch',
//       name: 'Dara, 18, the patch',
//       subtitle: 'BIRTH CONTROL PATCH',
//       quote: '"It\'s the perfect level of hormones for me."',
//       videoId: 'dQw4w9WgXcQ',
//       thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzhXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--879b6e8d21b2b7888df2e692d32cb61f6d1391d1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/Dara_full.png'
//     }
//   ];

//   const filteredReviews = selectedCategory === 'View all videos' || selectedCategory === 'all' 
//     ? reviews 
//     : reviews.filter(review => review.category === selectedCategory);

//   const featuredReview = selectedReview || reviews.find(r => r.isFeatured) || reviews[0];

//   const handleFilterClick = (categoryId, categoryName) => {
//     setSelectedCategory(categoryId);
//     setSelectedReview(null);
//   };

//   const handleReviewClick = (review) => {
//     setSelectedReview(review);
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f5f5] lg:px-40 py-10 ">
//       {/* Header */}
     
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Sidebar - Filters */}
//         <div className="w-full lg:w-80 bg-white border-r border-gray-200 p-4 lg:p-6 lg:min-h-screen">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Filter by:</h3>
          
//           <div className="space-y-1 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-visible">
//             {filterCategories.map((category) => {
//               const isActive = selectedCategory === category.id || selectedCategory === category.name;
              
//               if (category.isHeader) {
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => handleFilterClick(category.id, category.name)}
//                     className={`w-full p-2 lg:p-3 text-left rounded text-xs lg:text-sm font-medium ${
//                       isActive 
//                         ? 'bg-[#138588] text-white' 
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     }`}
//                   >
//                     {category.name}
//                   </button>
//                 );
//               }
              
//               if (category.isSubHeader) {
//                 return (
//                   <div key={category.id} className="pt-3 lg:pt-4 pb-1 lg:pb-2">
//                     <p className="text-xs lg:text-sm text-gray-600 font-medium">{category.name}</p>
//                   </div>
//                 );
//               }
              
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => handleFilterClick(category.id, category.name)}
//                   className={`w-full flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded text-left transition-colors text-xs lg:text-sm ${
//                     isActive 
//                       ? 'bg-[#138588] text-white' 
//                       : 'text-[#138588] hover:bg-gray-50'
//                   }`}
//                 >
//                   {category.iconType === 'text' ? (
//                     <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-sm lg:text-lg font-bold">
//                       {category.icon}
//                     </span>
//                   ) : category.icon ? (
//                     <category.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
//                   ) : null}
//                   <span className="break-words">{category.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right Content Area */}
//         <div className="flex-1 p-4 lg:p-6">
//           {/* Main Heading */}
//           <div className="mb-6 lg:mb-8">
//             <h1 className="text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
//               Hear real people share their very real experiences with different methods of birth control.
//             </h1>
//           </div>

//           {/* Featured Video Section */}
//           <div className="mb-6 lg:mb-8">
//             <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Featured video</h2>
            
//             {/* Video Player */}
//             <div className="bg-black  overflow-hidden mb-4 lg:mb-6 shadow-lg">
//               <div className="aspect-video relative">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src={`https://www.youtube.com/embed/${featuredReview.videoId}?rel=0`}
//                   title="Featured Video"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 ></iframe>
//               </div>
//             </div>

//             {/* Video Info */}
//             <div className="mb-6 lg:mb-8">
//               <p className="text-xs lg:text-sm text-gray-500 uppercase tracking-wide mb-2 font-medium">
//                 {featuredReview.subtitle}
//               </p>
//               <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
//                 {featuredReview.title || featuredReview.name}
//               </h3>
//               <p className="text-sm lg:text-base text-gray-700 italic leading-relaxed">
//                 {featuredReview.quote}
//               </p>
//             </div>
//           </div>

//           {/* Reviews List */}
//           <div className="space-y-4 lg:space-y-6 ">
//             {filteredReviews.slice(1).map((review) => (
//               <div
//                 key={review.id}
//                 onClick={() => handleReviewClick(review)}
//                 className="flex items-start space-x-3 lg:space-x-4 cursor-pointer bg-white hover:bg-gray-50 p-3 lg:p-4 rounded-lg transition-colors"
//               >
//                 {/* Thumbnail */}
//                 <div className="w-20 h-14 lg:w-54 lg:h-28 bg-gray-200  overflow-hidden flex-shrink-0">
//                   <img
//                     src={review.thumbnail}
//                     alt="Video thumbnail"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 min-w-0">
//                   <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
//                     {review.subtitle}
//                   </p>
//                   <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1 lg:mb-2 line-clamp-2">
//                     {review.title || review.name}
//                   </h4>
//                   <p className="text-xs lg:text-sm text-gray-700 italic leading-relaxed line-clamp-3">
//                     {review.quote}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthControlReviews;


import React, { useState, useEffect } from 'react';
import { Play, Users, Shield, Activity, Pill, FileText, Zap, Eye, Stethoscope, AlertTriangle, Calendar, Heart, Droplets, Target, Clock } from 'lucide-react';

const BirthControlReviews = () => {
  const [selectedCategory, setSelectedCategory] = useState('View all videos');
  const [selectedReview, setSelectedReview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [videoKey, setVideoKey] = useState(0);

  const filterCategories = [
    { id: 'all', name: 'View all videos', icon: null, isHeader: true },
    { id: 'birth-control-method', name: 'View by birth control method', icon: null, isSubHeader: true },
    { id: 'iud', name: 'IUD (Intrauterine Device)', icon: 'T', iconType: 'text' },
    { id: 'implant', name: 'Implant (Nexplanon)', icon: '/', iconType: 'text' },
    { id: 'birth-control-shot', name: 'Birth control shot (Depo-Provera)', icon: Shield, iconType: 'component' },
    { id: 'birth-control-ring', name: 'Birth control ring', icon: Users, iconType: 'component' },
    { id: 'birth-control-patch', name: 'Birth control patch', icon: FileText, iconType: 'component' },
    { id: 'birth-control-pill', name: 'Birth control pill', icon: Pill, iconType: 'component' },
    { id: 'diaphragm', name: 'Diaphragm', icon: Shield, iconType: 'component' },
    { id: 'condom', name: 'Condom', icon: Droplets, iconType: 'component' },
    { id: 'internal-condom', name: 'Internal condom (FC2)', icon: Target, iconType: 'component' },
    { id: 'cervical-cap', name: 'Cervical cap', icon: Eye, iconType: 'component' },
    { id: 'fertility-awareness', name: 'Fertility awareness methods', icon: Calendar, iconType: 'component' },
    { id: 'spermicide', name: 'Spermicide and gel', icon: Zap, iconType: 'component' },
    { id: 'withdrawal', name: 'Withdrawal (pull-out method)', icon: Activity, iconType: 'component' },
    { id: 'sterilization', name: 'Sterilization', icon: Stethoscope, iconType: 'component' },
    { id: 'not-right-now', name: '"Not right now"', icon: Clock, iconType: 'component' },
    { id: 'emergency-contraception', name: 'Emergency contraception', icon: AlertTriangle, iconType: 'component' }
  ];

  const reviews = [
    {
      id: 1,
      category: 'iud',
      title: 'Does it hurt to get an IUD?',
      subtitle: 'IUD',
      quote: '"You know, you kinda have to bear through it until your uterus is like, \'okay, we\'re friends, we\'re gonna work together.\'"',
      videoId: '5rj7ZAPtf4g?si=QyL-PA0h0wg1PSHR',
      isFeatured: true,
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
    },
    {
      id: 2,
      category: 'condom',
      title: 'Why use condoms?',
      subtitle: 'CONDOM',
      quote: '"It\'s usually very assumed that we\'re gonna need condoms..."',
      videoId: 'N7_PT8LoCsc?si=sWtP2gEvDJmgAmbL',
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
    },
    {
      id: 3,
      category: 'sti',
      title: 'How do you protect against STIs?',
      subtitle: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
      quote: '"Before we had any sexual contact, we decided to go to the doctor together."',
      videoId: '0hOqI7PNuZU?si=Z0KB2uhwpH3d51Zx',
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndWIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e8c32577ae4a7fef4f9fc775e797070bb3f18e25/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1029.jpg'
    },
    {
      id: 4,
      category: 'iud',
      name: 'Ellie, 27, IUD',
      subtitle: 'IUD',
      quote: '"I love being able to say I haven\'t had a period since I was 17 years old."',
      videoId: 'tNOcJoXOMA4?si=9wBOYP99xnGCq-_F',
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzRXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7a51c8a7b073b2045a9469eab7cb726b719279ef/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1010.jpg'
    },
    {
      id: 5,
      category: 'implant',
      name: 'Ali, 17, Implant',
      subtitle: 'IMPLANT (NEXPLANON)',
      quote: '"It was super fast, super easy."',
      videoId: 'QWuQp_vU1JY?si=Jx4N212MvVmoSbb6',
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzBXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10685d433e6c8982257dd1388165f5c7c0f9e370/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/1012.jpg'
    },
    {
      id: 6,
      category: 'birth-control-patch',
      name: 'Dara, 18, the patch',
      subtitle: 'BIRTH CONTROL PATCH',
      quote: '"It\'s the perfect level of hormones for me."',
      videoId: 'KOdP7xDrIHw?si=lbVJ5OvBGZZ5t6L_',
      thumbnail: 'https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZzhXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--879b6e8d21b2b7888df2e692d32cb61f6d1391d1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/Dara_full.png'
    }
  ];

  const filteredReviews = selectedCategory === 'View all videos' || selectedCategory === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === selectedCategory);

  const featuredReview = selectedReview || reviews.find(r => r.isFeatured) || reviews[0];

  const handleFilterClick = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedReview(null);
  };

  const handleReviewClick = (review) => {
    setIsLoading(true);
    setVideoKey(prev => prev + 1);
    
    // Scroll to featured video section smoothly
    setTimeout(() => {
      const featuredSection = document.getElementById('featured-video-section');
      if (featuredSection) {
        featuredSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100);

    // Simulate loading and set new review
    setTimeout(() => {
      setSelectedReview(review);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-auto bg-[#f5f5f5] lg:px-40 py-4 lg:py-10 md:px-8  sm:px-2">
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar - Filters */}
        <div className="w-full lg:w-80 bg-white lg:border-r border-gray-200 p-4 lg:p-6 lg:min-h-screen order-1 lg:order-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">Filter by:</h3>
          
          <div className="space-y-1 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-visible">
            {filterCategories.map((category) => {
              const isActive = selectedCategory === category.id || selectedCategory === category.name;
              
              if (category.isHeader) {
                return (
                  <button
                    key={category.id}
                    onClick={() => handleFilterClick(category.id, category.name)}
                    className={`w-full p-2 lg:p-3 text-left rounded text-xs lg:text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-[#138588] text-white transform scale-[1.02]' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-[1.01]'
                    }`}
                  >
                    {category.name}
                  </button>
                );
              }
              
              if (category.isSubHeader) {
                return (
                  <div key={category.id} className="pt-3 lg:pt-4 pb-1 lg:pb-2">
                    <p className="text-xs lg:text-sm text-gray-600 font-medium">{category.name}</p>
                  </div>
                );
              }
              
              return (
                <button
                  key={category.id}
                  onClick={() => handleFilterClick(category.id, category.name)}
                  className={`w-full flex items-center space-x-2 lg:space-x-3 p-2 lg:p-3 rounded text-left transition-all duration-200 text-xs lg:text-sm ${
                    isActive 
                      ? 'bg-[#138588] text-white transform scale-[1.02]' 
                      : 'text-[#138588] hover:bg-gray-50 hover:scale-[1.01] hover:shadow-sm'
                  }`}
                >
                  {category.iconType === 'text' ? (
                    <span className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center text-sm lg:text-lg font-bold">
                      {category.icon}
                    </span>
                  ) : category.icon ? (
                    <category.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  ) : null}
                  <span className="break-words">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-4 lg:p-6 order-2 lg:order-2">
          {/* Main Heading */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-normal text-gray-900 leading-relaxed">
              Hear real people share their very real experiences with different methods of birth control.
            </h1>
          </div>

          {/* Featured Video Section */}
          <div id="featured-video-section" className="mb-6 lg:mb-8">
            <h2 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">Featured video</h2>
            
            {/* Video Player with Loading State */}
            <div className={`bg-black overflow-hidden mb-4 lg:mb-6 shadow-lg transition-all duration-500 ${
              isLoading ? 'opacity-50 transform scale-[0.98]' : 'opacity-100 transform scale-100'
            }`}>
              <div className="aspect-video relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-white text-sm">Loading video...</p>
                    </div>
                  </div>
                )}
                <iframe
                  key={videoKey}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${featuredReview.videoId}?rel=0&autoplay=0`}
                  title="Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Video Info with Animation */}
            <div className={`mb-6 lg:mb-8 transition-all duration-500 ${
              isLoading ? 'opacity-50 transform translate-y-2' : 'opacity-100 transform translate-y-0'
            }`}>
              <p className="text-xs lg:text-sm text-gray-500 uppercase tracking-wide mb-2 font-medium">
                {featuredReview.subtitle}
              </p>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                {featuredReview.title || featuredReview.name}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 italic leading-relaxed">
                {featuredReview.quote}
              </p>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-4 lg:space-y-6">
            {filteredReviews.filter(review => review.id !== featuredReview.id).map((review) => (
              <div
                key={review.id}
                onClick={() => handleReviewClick(review)}
                className="group flex items-start space-x-3 lg:space-x-4 cursor-pointer bg-white hover:bg-gray-50 p-3 lg:p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-[1.01] hover:border-[#138588] border border-transparent"
              >
                {/* Thumbnail */}
                <div className="w-20 h-14 lg:w-54 lg:h-36 xl:w-52 xl:h-30 bg-gray-200 overflow-hidden flex-shrink-0  transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={review.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium group-hover:text-[#138588] transition-colors duration-300">
                    {review.subtitle}
                  </p>
                  <h4 className="text-sm lg:text-base font-semibold text-gray-900 mb-1 lg:mb-2 line-clamp-2 group-hover:text-[#138588] transition-colors duration-300">
                    {review.title || review.name}
                  </h4>
                  <p className="text-xs lg:text-sm text-gray-700 italic leading-relaxed line-clamp-3 group-hover:text-[#138588] transition-colors duration-300">
                    {review.quote}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 text-[#138588]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthControlReviews;

