import React, { useState } from 'react';

const ExploreSection = () => {
  const birthControlMethods = [
    // Row 1 - 5 items
    {
      id: 1,
      title: "IUD",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/iud-019120dc0ab2f0b68e7658d021ddb6eb31d95c5cd332a3d38b9946ec8015a5ee.png",
      url: "types/iud",
      filters: ["Most Effective", "Hormone free"]
    },
    {
      id: 2,
      title: "Implant (Nexplanon)",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/implant_desktop-86fd6b420351ab086fda48ffcf78ceb046207ceecbb739d6893e1f53c46892c4.png", // Replace with actual URL
      url: "/types/implant",
      filters: ["Most Effective", "Side effects"]
    },
    {
      id: 3,
      title: "Birth control shot",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/the_shot-32d7d165b0575ce536eccc9ce8c731433a0dc5e734108a23cb04251c1b9ee452.png", // Replace with actual URL
      url: "/types/birth-control-shot",
      filters: ["Most Effective", "Side effects", "Improves periods/bleeding"]
    },
    {
      id: 4,
      title: "Birth control patch",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/the_patch-5fd2183cbc3210302a9873ea10e4926a5bd4d2b0e10b5d0c8b1cda383a4f85e4.png", // Replace with actual URL
      url: "/types/patch",
      filters: ["Side effects", "Privacy"]
    },
    {
      id: 5,
      title: "Birth control pill",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/the_pill-14a1d6d26188a9c077865b5a5bfd371f181d95952f118ebea8c33cccfbeb688e.png", // Replace with actual URL
      url: "/types/birth-control-pill",
      filters: ["Side effects", "Improves periods/bleeding"]
    },
    // Row 2 - 7 items
    {
      id: 6,
      title: "Sterilization",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/sterilization_desktop-40bc045164be91baae2849f3c0e42ff5c6278b0fe0ef428b73cd1b883a2110cd.png", // Replace with actual URL
      url: "/types/sterilization",
      filters: ["Most Effective", "Hormone free"]
    },
    {
      id: 7,
      title: '"Not right now"',
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/not_right_now-8fd2ae5234fea8055b4debb374a61744328fac3d45c5c167d30d62f1629be921.png", // Replace with actual URL
      url: "/types/not-right-now",
      filters: ["Most Effective", "Hormone free", "Provides STI protection", "Privacy"]
    },
    {
      id: 8,
      title: "Condom",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/condom-369d652674a8037b387784be6160b4f4b65d5d4c21bcff7f4bc66ebd78eeeae3.png", // Replace with actual URL
      url: "/types/condom",
      filters: ["Provides STI protection", "Hormone free", "Privacy"]
    },
    {
      id: 9,
      title: "Birth control ring",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/the_ring-57f1cbe71bcf953ba882b4660ed336182c6b68acdf4012b59e11a1ce0657605a.png", // Replace with actual URL
      url: "/types/birth-control-ring",
      filters: ["Side effects", "Privacy"]
    },
    {
      id: 10,
      title: "Diaphragm",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/diaphragm-b68c9bf3f35eb5c4268e220f874a7997715ca03b7d3db8da1aff03c8a031781d.png", // Replace with actual URL
      url: "/types/diaphragm",
      filters: ["Hormone free", "Privacy"]
    },
    {
      id: 11,
      title: "Internal condom (FC2)",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/internal_condom_desktop-b97e309a4c0a61b9c513395f5a6efc25569ad2235edbc73a9d22d4092ba8d9ff.png", // Replace with actual URL
      url: "/types/Internal-condom",
      filters: ["Provides STI protection", "Hormone free", "Privacy"]
    },
    {
      id: 12,
      title: "Fertility awareness methods",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/fertility_awareness_desktop-ac1c7f45b19ac51267c2ddaf47bc3714fe3b8af49efff2dae221834b7960e8e6.png", // Replace with actual URL
      url: "/types/fertility-awareness",
      filters: ["Hormone free", "Privacy"]
    },
    // Row 3 - 4 items
    {
      id: 13,
      title: "Spermicide and gel",
      image: "https://www.Bedsiderr.org/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ3hvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7405a557225d214e0ed51a1887050c2967995406/Spermicide%20+%20Stretched%20+%20Cropped%20+%20Background2.png", // Replace with actual URL
      url: "/types/spermicide-gell",
      filters: ["Hormone free"]
    },
    {
      id: 14,
      title: "Cervical cap",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/cervical_cap-baa30d32c0955c947a5fb9a5887c84753d0a78863a4f6399466f9b3fc7f9754b.png", // Replace with actual URL
      url: "/types/cervical-cap",
      filters: ["Hormone free", "Privacy"]
    },
    {
      id: 15,
      title: "Emergency contraception",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/emergency_contraception-1d175d4ef1c488d2344c5afcaf07173ea2786dc5fab4c7acfeee520f9d1b704e.png", // Replace with actual URL
      url: "/types/emergency-contraception",
      filters: ["Side effects", "Privacy"]
    },
    {
      id: 16,
      title: "Withdrawal (pull-out method)",
      image: "https://www.Bedsiderr.org/assets/twentyone/birth_control/method_images/withdrawal-70f99f263e78eb1c231eec559b204b945917c781ae5de9f925290f07aba01ae9.png", // Replace with actual URL
      url: "/types/withdrawal",
      filters: ["Hormone free", "Privacy"]
    }
  ];

  const [activeFilter, setActiveFilter] = useState("Most Effective");
  const [filteredMethods, setFilteredMethods] = useState(birthControlMethods);

  const filterOptions = [
    { icon: "✓", text: "Most Effective" },
    { icon: "⚠️", text: "Side effects" },
    { icon: "🛡️", text: "Provides STI protection" },
    { icon: "🚫", text: "Hormone free" },
    { icon: "🔒", text: "Privacy" },
    { icon: "🩸", text: "Improves periods/bleeding" }
  ];

  const handleFilterClick = (filterText) => {
    setActiveFilter(filterText);
    
    // Filter methods based on selected filter
    let filtered = birthControlMethods.filter(method => 
      method.filters.includes(filterText)
    );
    
    // Shuffle the filtered results randomly
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setFilteredMethods(shuffled);
  };

  const handleMethodClick = (url) => {
    window.open(url, '_self');
  };

  // Create rows from filtered methods
  const createRows = (methods) => {
    const totalMethods = methods.length;
    if (totalMethods <= 5) {
      return [methods, [], []];
    } else if (totalMethods <= 12) {
      return [methods.slice(0, 5), methods.slice(5), []];
    } else {
      return [
        methods.slice(0, 5),
        methods.slice(5, 12),
        methods.slice(12)
      ];
    }
  };

  const [row1, row2, row3] = createRows(filteredMethods);

//   return (
//     <div className="max-w-full mx-auto lg:p-24  sm:p-2 bg-white font-sans">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-[#028388] mb-2">
//           Explore birth control options
//         </h1>
//         <div className="w-full max-w-lg">
//           <svg viewBox="0 0 400 10" className="w-full h-3">
//             <path d="M0,5 Q100,0 200,5 T400,5" stroke="#14b8a6" strokeWidth="2" fill="none" />
//           </svg>
//         </div>
//       </div>

//       {/* Filter Options */}
//       <div className="mb-8">
//         <p className="text-gray-600 font-medium mb-4 text-sm">Filter by:</p>
//         <div className="flex flex-wrap gap-2">
//           {filterOptions.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleFilterClick(option.text)}
//               className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
//                 activeFilter === option.text
//                   ? 'bg-[#028388] text-white'
//                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <span className="text-xs">{option.icon}</span>
//               <span>{option.text}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Birth Control Methods Grid - Exact Layout */}
//       <div className="mb-8">
//         {/* Row 1 */}
//         {row1.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-24">
//           {row1.map((method) => (
//             <div
//               key={method.id}
//               className="flex flex-col items-center cursor-pointer group"
//               onClick={() => handleMethodClick(method.url)}
//             >
//               <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
//                 <img 
//                   src={method.image} 
//                   alt={method.title}
//                   className="w-full h-full object-cover rounded-lg"
//                   onError={(e) => {
//                     console.log(`Failed to load image: ${method.image}`);
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                   onLoad={() => {
//                     console.log(`Successfully loaded: ${method.title}`);
//                   }}
//                 />
//                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
//                   {method.title}
//                 </div>
//               </div>
//               <a
//                 href={method.url}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleMethodClick(method.url);
//                 }}
//                 className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
//               >
//                 {method.title}
//               </a>
//             </div>
//           ))}
//         </div>
//         )}

//         {/* Row 2 */}
//         {row2.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-6">
//           {row2.map((method) => (
//             <div
//               key={method.id}
//               className="flex flex-col items-center cursor-pointer group"
//               onClick={() => handleMethodClick(method.url)}
//             >
//               <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
//                 <img 
//                   src={method.image} 
//                   alt={method.title}
//                   className="w-full h-full object-contain rounded-lg"
//                   onError={(e) => {
//                     console.log(`Failed to load image: ${method.image}`);
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                   onLoad={() => {
//                     console.log(`Successfully loaded: ${method.title}`);
//                   }}
//                 />
//                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
//                   {method.title}
//                 </div>
//               </div>
//               <a
//                 href={method.url}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleMethodClick(method.url);
//                 }}
//                 className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
//               >
//                 {method.title}
//               </a>
//             </div>
//           ))}
//         </div>
//         )}

//         {/* Row 3 */}
//         {row3.length > 0 && (
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//           {row3.map((method) => (
//             <div
//               key={method.id}
//               className="flex flex-col items-center cursor-pointer group"
//               onClick={() => handleMethodClick(method.url)}
//             >
//               <div className="lg:w-40 lg:h-40 sm:w-34 sm:h-34 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
//                 <img 
//                   src={method.image} 
//                   alt={method.title}
//                   className="w-full h-full object-contain rounded-lg"
//                   onError={(e) => {
//                     console.log(`Failed to load image: ${method.image}`);
//                     e.target.style.display = 'none';
//                     e.target.nextSibling.style.display = 'flex';
//                   }}
//                   onLoad={() => {
//                     console.log(`Successfully loaded: ${method.title}`);
//                   }}
//                 />
//                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
//                   {method.title}
//                 </div>
//               </div>
//               <a
//                 href={method.url}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleMethodClick(method.url);
//                 }}
//                 className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
//               >
//                 {method.title}
//               </a>
//             </div>
//           ))}
//         </div>
//         )}
//       </div>

//       {/* Compare Methods Button */}
//       <div className="text-center lg:mt-22">
//         <button className="bg-[#028388] text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors duration-200 text-sm">
//           compare methods
//         </button>
//       </div>
//     </div>
//   );
// };



return (
    <div className="w-full bg-white font-sans">
      {/* Fixed responsive container */}
      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-16 lg:py-16 xl:px-24 xl:py-24 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#028388] mb-2">
            Explore birth control options
          </h1>
          <div className="w-full max-w-lg">
            <svg viewBox="0 0 400 10" className="w-full h-3">
              <path d="M0,5 Q100,0 200,5 T400,5" stroke="#14b8a6" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Filter Options */}
        <div className="mb-8">
          <p className="text-gray-600 font-medium mb-4 text-sm">Filter by:</p>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(option.text)}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeFilter === option.text
                    ? 'bg-[#028388] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-xs">{option.icon}</span>
                <span>{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Birth Control Methods Grid - FIXED RESPONSIVE LAYOUT */}
        <div className="mb-8">
          
          {/* Row 1 - FIXED: Mobile 2 cols, Tablet 3 cols, Desktop 5 cols */}
          {row1.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-24">
              {row1.map((method) => (
                <div
                  key={method.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleMethodClick(method.url)}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        console.log(`Failed to load image: ${method.image}`);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${method.title}`);
                      }}
                    />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
                      {method.title}
                    </div>
                  </div>
                  <a
                    href={method.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMethodClick(method.url);
                    }}
                    className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
                  >
                    {method.title}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Row 2 - FIXED: Mobile 2 cols, Tablet 4 cols, Desktop 7 cols */}
          {row2.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-6">
              {row2.map((method) => (
                <div
                  key={method.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleMethodClick(method.url)}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        console.log(`Failed to load image: ${method.image}`);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${method.title}`);
                      }}
                    />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
                      {method.title}
                    </div>
                  </div>
                  <a
                    href={method.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMethodClick(method.url);
                    }}
                    className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
                  >
                    {method.title}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Row 3 - FIXED: Mobile 2 cols, Tablet 3 cols, Desktop 4 cols */}
          {row3.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
              {row3.map((method) => (
                <div
                  key={method.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleMethodClick(method.url)}
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-all duration-200">
                    <img 
                      src={method.image} 
                      alt={method.title}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        console.log(`Failed to load image: ${method.image}`);
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${method.title}`);
                      }}
                    />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-lg items-center justify-center text-gray-400 text-xs hidden">
                      {method.title}
                    </div>
                  </div>
                  <a
                    href={method.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMethodClick(method.url);
                    }}
                    className="text-center text-sm font-medium text-[#028388] hover:text-teal-800 hover:underline transition-colors duration-200 leading-tight max-w-full px-1"
                  >
                    {method.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Compare Methods Button */}
        <div className="text-center lg:mt-22">
          <button className="bg-[#028388] text-white px-6 py-3 rounded-md font-medium hover:bg-teal-700 transition-colors duration-200 text-sm">
            compare methods
          </button>
        </div>
      </div>
    </div>
  )};
export default ExploreSection;