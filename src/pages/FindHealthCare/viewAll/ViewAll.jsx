// import React from 'react';
// import { BarChart3, Pill, ExternalLink } from 'lucide-react';
// export default function HealthServicesCards() {
//   const cards = [
//     {
//       id: 1,
//       icon: <BarChart3 className="w-8 h-8 text-white" />,
//       borderColor: '#8d2e8d',
//       title: 'Find a health center',
//       description: 'Whether you need a new birth control prescription, STI testing, a Pap smear, or any other reproductive health service, our clinic finder will help you locate a health care provider near you.',
//       buttonText: 'find a provider',
//       link: '/find-health-care/clinics'
//     },
//     {
//       id: 2,
//       icon: <Pill className="w-8 h-8 text-white" />,
//       borderColor: '#c9005b',
//       title: 'Get birth control online',
//       description: 'Have your birth control delivered to your door.',
//       buttonText: 'get it online',
//       link: '/find-health-care/online-birth-control'
//     },
//     {
//       id: 3,
//       icon: (
//         <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
//         </svg>
//       ),
//       borderColor: '#de5e04',
//       title: 'Find an abortion provider',
//       description: 'Abortion is a common and safe medical procedure that lets you end a pregnancy. Our national directory will help you find your nearest abortion providers.',
//       buttonText: 'go to Abortionfinder.org',
//       link: 'https://abortionfinder.org',
//       isExternal: true
//     }
//   ];

//   const handleButtonClick = (link, isExternal) => {
//     if (isExternal) {
//       window.open(link, '_blank', 'noopener,noreferrer');
//     } else {
//       // For internal links, you would typically use your router here
//       console.log(`Navigate to: ${link}`);
//     }
//   };

//   return (
//     <div className="bg-white py-16 ">
//         <HeroBanner/>
//       <div className="max-w-7xl mx-auto p-6 mt-18">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white rounded-lg shadow-sm p-8 h-full flex flex-col"
//               style={{
//                 border: `3px solid ${card.borderColor}`,
//                 minHeight: '400px'
//               }}
//             >
//               {/* Icon */}
//               <div 
//                 className="w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
//                 style={{ backgroundColor: card.borderColor }}
//               >
//                 {card.icon}
//               </div>

//               {/* Title */}
//               <h2 
//                 className="text-2xl font-semibold mb-4 leading-tight"
//                 style={{ color: '#333333' }}
//               >
//                 {card.title}
//               </h2>

//               {/* Description */}
//               <p 
//                 className="flex-grow mb-8 leading-relaxed"
//                 style={{ 
//                   color: '#666666',
//                   fontSize: '16px',
//                   lineHeight: '1.5'
//                 }}
//               >
//                 {card.description}
//               </p>

//               {/* Button */}
//               <div className="mt-auto">
//                 <button
//                   onClick={() => handleButtonClick(card.link, card.isExternal)}
//                   className="inline-flex items-center px-6 py-3 text-white font-medium rounded-md  cursor-pointer transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50"
//                   style={{ 
//                     backgroundColor: '#028388',
//                     focusRingColor: '#028388'
//                   }}
//                 >
//                   {card.buttonText}
//                   {card.isExternal && (
//                     <ExternalLink className="ml-2 w-4 h-4" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import { BarChart3, Pill, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroBanner from "../../../Components2/Herobanner/Herobanner"


export default function HealthServicesCards() {
  const navigate = useNavigate();
  
  const cards = [
    {
      id: 1,
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      borderColor: '#8d2e8d',
      title: 'Find a health center',
      description: 'Whether you need a new birth control prescription, STI testing, a Pap smear, or any other reproductive health service, our clinic finder will help you locate a health care provider near you.',
      buttonText: 'find a provider',
      link: '/find-health-care/clinics'
    },
    {
      id: 2,
      icon: <Pill className="w-8 h-8 text-white" />,
      borderColor: '#c9005b',
      title: 'Get birth control online',
      description: 'Have your birth control delivered to your door.',
      buttonText: 'get it online',
      link: '/find-health-care/online-birth-control'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      borderColor: '#de5e04',
      title: 'Find an abortion provider',
      description: 'Abortion is a common and safe medical procedure that lets you end a pregnancy. Our national directory will help you find your nearest abortion providers.',
      buttonText: 'go to Abortionfinder.org',
      link: 'https://abortionfinder.org',
      isExternal: true
    }
  ];

  const handleButtonClick = (link, isExternal) => {
    console.log('Button clicked!', { link, isExternal }); // Keep for debugging
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // Use React Router for internal navigation
      navigate(link);
    }
  };

  return (
    <div className="bg-white py-16 relative">
      <HeroBanner/>
      <div className="max-w-7xl mx-auto px-6 mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-sm p-8 h-full flex flex-col relative z-20"
              style={{
                border: `3px solid ${card.borderColor}`,
                minHeight: '400px'
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                style={{ backgroundColor: card.borderColor }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h2 
                className="text-2xl font-semibold mb-4 leading-tight"
                style={{ color: '#333333' }}
              >
                {card.title}
              </h2>

              {/* Description */}
              <p 
                className="flex-grow mb-8 leading-relaxed"
                style={{ 
                  color: '#666666',
                  fontSize: '16px',
                  lineHeight: '1.5'
                }}
              >
                {card.description}
              </p>

              {/* Button */}
              <div className="mt-auto relative z-30">
                <button
                  onClick={() => handleButtonClick(card.link, card.isExternal)}
                  className="inline-flex items-center px-6 py-3 text-white font-medium rounded-md cursor-pointer transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-50 relative z-40"
                  style={{ 
                    backgroundColor: '#028388',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    pointerEvents: 'auto'
                  }}
                  type="button"
                >
                  {card.buttonText}
                  {card.isExternal && (
                    <ExternalLink className="ml-2 w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}