// import React, { useState } from 'react';

// const HeroBanner = () => {
//   // Sample route data - you can modify this structure based on your needs
//   const routeData = {
//     'birth-control': {
//       breadcrumb: 'Birth control > Birth control ring',
//       title: 'BIRTH CONTROL',
//       heading: 'Birth control ring',
//       image: '💊', // Using emoji as placeholder - replace with actual image URLs
//       bgColor: 'rgb(245,245,245)'
//     },
//     'pregnancy': {
//       breadcrumb: 'Health > Pregnancy care',
//       title: 'PREGNANCY',
//       heading: 'Prenatal vitamins',
//       image: '🤱',
//       bgColor: 'rgb(245,245,245)'
//     },
//     'wellness': {
//       breadcrumb: 'Wellness > Mental health',
//       title: 'WELLNESS',
//       heading: 'Meditation guide',
//       image: '🧘‍♀️',
//       bgColor: 'rgb(245,245,245)'
//     },
//     'skincare': {
//       breadcrumb: 'Beauty > Skincare routine',
//       title: 'SKINCARE',
//       heading: 'Anti-aging serum',
//       image: '✨',
//       bgColor: 'rgb(245,245,245)'
//     }
//   };

//   const [currentRoute, setCurrentRoute] = useState('birth-control');
//   const currentData = routeData[currentRoute];

//   return (
//     <div className="w-full">
//       {/* Route Selector for Demo */}
//       <div className="p-4 bg-white border-b">
//         <div className="max-w-4xl mx-auto">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Select Route (Demo):
//           </label>
//           <select
//             value={currentRoute}
//             onChange={(e) => setCurrentRoute(e.target.value)}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {Object.keys(routeData).map(route => (
//               <option key={route} value={route}>
//                 {route.charAt(0).toUpperCase() + route.slice(1).replace('-', ' ')}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Hero Banner */}
//       <div
//         className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden"
//         style={{ backgroundColor: currentData.bgColor }}
//       >
//         {/* Breadcrumb */}
//         <div className="relative z-10 pt-6 px-4 md:px-8">
//           <div className="max-w-7xl mx-auto">
//             <nav className="text-sm text-gray-600">
//               {currentData.breadcrumb}
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 lg:py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             {/* Small Title */}
//             <p className="text-gray-500 text-sm md:text-base font-medium tracking-wider mb-4 md:mb-6">
//               {currentData.title}
//             </p>

//             {/* Main Heading */}
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8 md:mb-12 leading-tight">
//               {currentData.heading}
//             </h1>

//             {/* Center Image/Icon */}
//             <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
//               <span className="text-4xl md:text-5xl lg:text-6xl">
//                 {currentData.image}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Circles - Only 3 circles as in reference image */}
//         {/* Top Left Circle - Pink */}
//         <div
//           className="absolute -top-24 -left-24 md:-top-40 md:-left-40 lg:-top-48 lg:-left-48 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
//           style={{ backgroundColor: 'rgb(192,13,92)' }}
//         ></div>

//         {/* Top Right Circle - Teal */}
//         <div
//           className="absolute -top-20 -right-20 md:-top-32 md:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
//           style={{ backgroundColor: 'rgb(11,193,167)' }}
//         ></div>
//         {/* Bottom Left Circle - Purple */}
//         <div
//           className="absolute -bottom-16 -left-16 md:-bottom-28 md:-left-28 lg:-bottom-36 lg:-left-36 w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full"
//           style={{ backgroundColor: 'rgb(142,42,142)' }}
//         ></div>
//       </div>
//     </div>
//   );
// };
// export default HeroBanner;








// import React from "react";
// import { useLocation } from "react-router-dom";
// import img1 from "../../assets/images/IUD.png"
// import img2 from "../../assets/images/implant.png"
// import img3 from "../../assets/images/BirthControlShot.png"
// import img4 from "../../assets/images/Ring.png"
// import img5 from "../../assets/images/Patch.png"
// import img6 from "../../assets/images/pill.png"
// import img7 from "../../assets/images/Diaphragm.png"
// import img8 from "../../assets/images/Condom.png"
// import img9 from "../../assets/images/InternalCondom.png"
// import img10 from "../../assets/images/curvical-cap.png"
// import img11 from "../../assets/images/fertility-Awareness-method.png"
// import img12 from "../../assets/images/Spermicide&Gell.png"
// import img13 from "../../assets/images/Withdrawal.png"
// import img14 from "../../assets/images/Sterilization.png"
// import img15 from "../../assets/images/NotRightNow.png"
// import img16 from "../../assets/images/Emergency.png"

// const HeroBanner = () => {
//   // Route data configuration
//   const routeData = {
//     "/types/iud": {
//       breadcrumb: "Birth control > Birth control ring",
//       title:      "BIRTH CONTROL",
//       heading:    "IUD",
//       image:      "💊", 
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/implant": {
//       breadcrumb: "Health > Pregnancy care",
//       title:      "BIRTH CONTROL",
//       heading:    "Implant (Nexplanon)",
//       image:      img1,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/birth-control-shot": {
//       breadcrumb: "Wellness > Mental health",
//       title:      "BIRTH CONTROL",
//       heading:    "Birth control shot",
//       image:      img2,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/birth-control-ring": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Birth Control Ring",
//       image:      img3,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/patch": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Birth Control Patch",
//       image:      img4,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/birth-control-pill": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Birth Control Pill",
//       image:      img5,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/diaphragm": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Diaphragm",
//       image:      img6,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/condom": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Condom",
//       image:      img7,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/internal-condom": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Internal Condom",
//       image:      img8,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/cervical-cap": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Cervical Cap",
//       image:      img9,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/fertility-awareness": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Fertility awareness methods",
//       image:      img10,
//       bgColor:    "rgb(245,245,245)",
//     },
   
//     "/types/spermicide-gell": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Spermicide and gel",
//       image:      img11,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/withdrawal": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Withdrawal (pull-out method)",
//       image:      img12,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/sterilization": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Sterilization",
//       image:      img13,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/not-right-now": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "“Not right now”",
//       image:      img14,
//       bgColor:    "rgb(245,245,245)",
//     },
//     "/types/emergency-contraception": {
//       breadcrumb: "Beauty > Skincare routine",
//       title:      "BIRTH CONTROL",
//       heading:    "Emergency contraception",
//       image:      img15,
//       bgColor:    "rgb(245,245,245)",
//     },
//     default: {
//       breadcrumb: "Home",
//       title:      "BIRTH CONTROL",
//       heading:    "Your Health Journey",
//       image:      img16,
//       bgColor:    "rgb(245,245,245)",
//     },
//   };

//   // React Router hook will re-render on every URL change
//   const { pathname } = useLocation();
//   const currentData = routeData[pathname] || routeData.default;

//   return (
//     <div className="w-full">
//       {/* Hero Banner */}
//       <div
//         className="relative w-full min-h-auto overflow-hidden"
//         style={{ backgroundColor: currentData.bgColor }}
//       >
//         {/* Main Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 lg:py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             {/* Small Title */}
//             <p className="text-gray-500 text-2xl md:text-2xl font-medium tracking-wider mb-4 md:mb-6">
//               {currentData.title}
//             </p>

//             {/* Main Heading */}
//             <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(64,64,64)] mb-8 md:mb-12 leading-tight">
//               {currentData.heading}
//             </h1>

//             {/* Center Image/Icon */}
//             <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
//               <span className="text-4xl md:text-5xl lg:text-6xl">
//                 {currentData.image}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Circles */}
//         {/* Top Left Circle - Pink */}
//         <div
//           className="absolute -top-24 -left-24 md:-top-40 md:-left-40 lg:-top-48 lg:-left-48 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
//           style={{ backgroundColor: "rgb(192,13,92)" }}
//         ></div>

//         {/* Top Right Circle - Teal */}
//         <div
//           className="absolute -top-20 -right-10 md:-top-32 md:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
//           style={{ backgroundColor: "rgb(11,193,167)" }}
//         ></div>

//         {/* Bottom Left Circle - Purple */}
//         <div
//           className="absolute -bottom-16 -left-16 md:-bottom-28 md:-left-28 lg:-bottom-36 lg:left-6 w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full"
//           style={{ backgroundColor: "rgb(142,42,142)" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default HeroBanner;











import React from "react";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/images/IUD.png";
import img2 from "../../assets/images/implant.png";
import img3 from "../../assets/images/BirthControlShot.png";
import img4 from "../../assets/images/Ring.png";
import img5 from "../../assets/images/Patch.png";
import img6 from "../../assets/images/pill.png";
import img7 from "../../assets/images/Diaphragm.png";
import img8 from "../../assets/images/Condom.png";
import img9 from "../../assets/images/InternalCondom.png";
import img10 from "../../assets/images/curvical-cap.png";
import img11 from "../../assets/images/fertility-Awareness-method.png";
import img12 from "../../assets/images/Spermicide&Gell.png";
import img13 from "../../assets/images/Withdrawal.png";
import img14 from "../../assets/images/Sterilization.png";
import img15 from "../../assets/images/NotRightNow.png";
import img16 from "../../assets/images/Emergency.png";

const HeroBanner = () => {
  const routeData = {
    "/find-health-care": {
      breadcrumb: "Birth control option > ",
      title: "Find health care",
      heading: "Access the care you need.",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/abortion/faqs": {
      breadcrumb: "Birth control option > ",
      title: "ABORTION",
      heading: "FAQs",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/abortion/abortion-pill-vs-procedure": {
      breadcrumb: "Birth control option > ",
      title: "ABORTION",
      heading: "Pill vs. procedure: How to decide",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/abortion/abortion-procedure": {
      breadcrumb: "Birth control option > ",
      title: "ABORTION",
      heading: "The abortion procedure:What to expect",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/abortion/abortion-pill": {
      breadcrumb: "Birth control option > ",
      title: "ABORTION",
      heading: "The abortion pill: What to expect",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/abortion/all-about-abortion": {
      breadcrumb: "Birth control option > ",
      title: "ABORTION",
      heading: "All about abortion",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/birth-control/reviews": {
      breadcrumb: "Birth control option > ",
      title: "BIRTH CONTROL",
      heading: "Birth control reviews",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/birth-control/articles": {
      breadcrumb: "Birth control option > ",
      title: "BIRTH CONTROL",
      heading: "Birth control articles",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/birth-control/how-to-get-birth-control": {
      breadcrumb: "Birth control option > ",
      title: "How to get birth control",
      heading: "Find a provider or get it delivered.",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/birth-control-option": {
      breadcrumb: "Birth control option > ",
      title: "Find a method that's right for you.",
      heading: "Birth Control",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
    "/types/iud": {
      breadcrumb: "Birth control > Birth control ring",
      title: "BIRTH CONTROL",
      heading: "IUD",
      image: img1,
      bgColor: "rgb(245,245,245)",
    },
    "/types/implant": {
      breadcrumb: "Health > Pregnancy care",
      title: "BIRTH CONTROL",
      heading: "Implant (Nexplanon)",
      image: img2,
      bgColor: "rgb(245,245,245)",
    },
    "/types/birth-control-shot": {
      breadcrumb: "Wellness > Mental health",
      title: "BIRTH CONTROL",
      heading: "Birth control shot",
      image: img3,
      bgColor: "rgb(245,245,245)",
    },
    "/types/birth-control-ring": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Birth Control Ring",
      image: img4,
      bgColor: "rgb(245,245,245)",
    },
    "/types/patch": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Birth Control Patch",
      image: img5,
      bgColor: "rgb(245,245,245)",
    },
    "/types/birth-control-pill": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Birth Control Pill",
      image: img6,
      bgColor: "rgb(245,245,245)",
    },
    "/types/diaphragm": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Diaphragm",
      image: img7,
      bgColor: "rgb(245,245,245)",
    },
    "/types/condom": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Condom",
      image: img8,
      bgColor: "rgb(245,245,245)",
    },
    "/types/internal-condom": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Internal Condom",
      image: img9,
      bgColor: "rgb(245,245,245)",
    },
    "/types/cervical-cap": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Cervical Cap",
      image: img10,
      bgColor: "rgb(245,245,245)",
    },
    "/types/fertility-awareness": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Fertility awareness methods",
      image: img11,
      bgColor: "rgb(245,245,245)",
    },
    "/types/spermicide-gell": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Spermicide and gel",
      image: img12,
      bgColor: "rgb(245,245,245)",
    },
    "/types/withdrawal": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Withdrawal (pull-out method)",
      image: img13,
      bgColor: "rgb(245,245,245)",
    },
    "/types/sterilization": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Sterilization",
      image: img14,
      bgColor: "rgb(245,245,245)",
    },
    "/types/not-right-now": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "“Not right now”",
      image: img15,
      bgColor: "rgb(245,245,245)",
    },
    "/types/emergency-contraception": {
      breadcrumb: "Beauty > Skincare routine",
      title: "BIRTH CONTROL",
      heading: "Emergency contraception",
      image: img16,
      bgColor: "rgb(245,245,245)",
    },
    default: {
      breadcrumb: "Home",
      title: "BIRTH CONTROL",
      heading: "Your Health Journey",
      image: null,
      bgColor: "rgb(245,245,245)",
    },
  };

  const { pathname } = useLocation();
  const currentData = routeData[pathname] || routeData.default;

  return (
    <div className="w-full">
      <div
        className="relative w-full min-h-auto overflow-hidden"
        style={{ backgroundColor: currentData.bgColor }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-gray-500 text-2xl md:text-2xl font-medium tracking-wider mb-4 md:mb-6">
              {currentData.title}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(64,64,64)] mb-8 md:mb-12 leading-tight">
              {currentData.heading}
            </h1>

          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
  {currentData.image ? (
    <img
      src={currentData.image}
      alt={currentData.heading}
      className="w-2/3 h-2/3 object-contain"
    />
  ) : (
    <span className="text-4xl md:text-5xl lg:text-6xl"></span>
  )}
</div>

          </div>
        </div>

        {/* Decorative Circles */}
        <div
          className="absolute -top-24 -left-24 md:-top-40 md:-left-40 lg:-top-48 lg:-left-48 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
          style={{ backgroundColor: "rgb(192,13,92)" }}
        ></div>

        <div
          className="absolute -top-20 -right-10 md:-top-32 md:-right-32 lg:-top-40 lg:-right-40 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
          style={{ backgroundColor: "rgb(11,193,167)" }}
        ></div>

        <div
          className="absolute -bottom-16 -left-16 md:-bottom-28 md:-left-28 lg:-bottom-36 lg:left-6 w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full"
          style={{ backgroundColor: "rgb(142,42,142)" }}
        ></div>
      </div>
    </div>
  );
};

export default HeroBanner;
