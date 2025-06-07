// import React, { useState, useEffect, useRef } from "react";

// const DynamicTabsComponent = ({ route = "home", contentData }) => {
//   const [activeTab, setActiveTab] = useState("About");
//   const [activeSection, setActiveSection] = useState("");
//   const [sidebarSticky, setSidebarSticky] = useState(false);

//   const tabContentRef = useRef(null);
//   const sidebarRef = useRef(null);

//   // Route-based content structure
//   const routeContentData = {
//     home: {
//       about: {
//         title: "About Our Platform",
//         sections: [
//           {
//             id: "overview",
//             title: "Platform Overview",
//             content:
//               "Welcome to our comprehensive birth control information platform. We provide evidence-based information to help you make informed decisions about contraceptive options that best suit your lifestyle and health needs.",
//           },
//           {
//             id: "mission",
//             title: "Our Mission",
//             content:
//               "Our mission is to democratize access to accurate, unbiased information about birth control methods. We believe everyone deserves to make informed choices about their reproductive health.",
//           },
//           {
//             id: "features",
//             title: "What We Offer",
//             content:
//               "• Comprehensive method comparisons\n• Real user reviews and experiences\n• Expert medical insights\n• Up-to-date research and studies\n• Personalized recommendations",
//           },
//           {
//             id: "reliability",
//             title: "Information Reliability",
//             content:
//               "All our content is reviewed by certified healthcare professionals and based on peer-reviewed medical research. We update our information regularly to reflect the latest scientific findings.",
//           },
//         ],
//       },
//       faqs: {
//         title: "General FAQs About Birth Control",
//         sections: [
//           {
//             id: "faq-1",
//             title:
//               "What factors should I consider when choosing birth control?",
//             content:
//               "Consider your lifestyle, health history, relationship status, future pregnancy plans, and personal preferences. Factors like effectiveness, convenience, side effects, and cost are all important.",
//           },
//           {
//             id: "faq-2",
//             title:
//               "How do I talk to my healthcare provider about birth control?",
//             content:
//               "Be honest about your health history, sexual activity, and concerns. Prepare questions in advance and don't hesitate to ask about different options and their pros and cons.",
//           },
//           {
//             id: "faq-3",
//             title: "Can I switch between different birth control methods?",
//             content:
//               "Yes, you can switch methods, but it's important to consult with your healthcare provider to ensure a smooth transition and continuous protection.",
//           },
//           {
//             id: "faq-4",
//             title:
//               "What's the difference between perfect use and typical use effectiveness?",
//             content:
//               "Perfect use reflects effectiveness when the method is used correctly every time, while typical use accounts for human error and real-world usage patterns.",
//           },
//         ],
//       },
//       reviews: {
//         title: "Platform Reviews & User Feedback",
//         sections: [
//           {
//             id: "review-1",
//             title: "User Satisfaction",
//             content:
//               "95% of users find our platform helpful in making birth control decisions. Users particularly appreciate the comprehensive comparisons and real user reviews.",
//           },
//           {
//             id: "review-2",
//             title: "Healthcare Provider Endorsements",
//             content:
//               "Many healthcare providers recommend our platform to their patients as a reliable source of contraceptive information.",
//           },
//           {
//             id: "review-3",
//             title: "Educational Impact",
//             content:
//               "Users report feeling more confident and informed about their birth control choices after using our platform.",
//           },
//         ],
//       },
//       articles: {
//         title: "Featured Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Birth Control Options",
//             content:
//               "A comprehensive overview of all available contraceptive methods, their effectiveness, and suitability for different lifestyles.",
//           },
//           {
//             id: "article-2",
//             title: "Understanding Birth Control Effectiveness",
//             content:
//               "Learn how to interpret effectiveness rates and what they mean for your contraceptive choices.",
//           },
//           {
//             id: "article-3",
//             title: "Birth Control Myths vs. Facts",
//             content:
//               "Debunking common misconceptions about contraceptives with evidence-based information.",
//           },
//         ],
//       },
//     },

//     "birth-control": {
//       about: {
//         title: "About Birth Control Methods",
//         sections: [
//           {
//             id: "overview",
//             title: "Contraceptive Overview",
//             content:
//               "Birth control methods are designed to prevent pregnancy through various mechanisms. Understanding how different methods work can help you choose the most suitable option for your needs.",
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control",
//             content:
//               "• Barrier methods (condoms, diaphragms)\n• Hormonal methods (pills, patches, rings)\n• Long-acting reversible contraceptives (IUDs, implants)\n• Permanent methods (sterilization)\n• Natural methods (fertility awareness)",
//           },
//           {
//             id: "effectiveness",
//             title: "Understanding Effectiveness",
//             content:
//               "Effectiveness is measured by the percentage of people who don't become pregnant in a year of using the method. Methods range from 85% to over 99% effective.",
//           },
//           {
//             id: "choosing",
//             title: "Choosing the Right Method",
//             content:
//               "The best birth control method depends on your health, lifestyle, relationship status, and personal preferences. Consider factors like convenience, reversibility, and side effects.",
//           },
//         ],
//       },
//       faqs: {
//         title: "Birth Control FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "What's the most effective birth control method?",
//             content:
//               "IUDs and implants are the most effective reversible methods (over 99%). Sterilization is the most effective permanent method.",
//           },
//           {
//             id: "faq-2",
//             title: "Do I need a prescription for birth control?",
//             content:
//               "Some methods like condoms and spermicides are available over-the-counter. Others like pills, IUDs, and implants require a prescription.",
//           },
//           {
//             id: "faq-3",
//             title: "Can birth control affect my fertility?",
//             content:
//               "Most birth control methods don't permanently affect fertility. You can typically get pregnant soon after stopping most methods.",
//           },
//           {
//             id: "faq-4",
//             title: "What if I miss taking my birth control?",
//             content:
//               "Instructions vary by method. For pills, take the missed pill as soon as you remember. Use backup protection if you've missed multiple pills.",
//           },
//           {
//             id: "faq-5",
//             title: "Are there any birth control methods without hormones?",
//             content:
//               "Yes! Copper IUDs, barrier methods, fertility awareness methods, and sterilization don't use hormones.",
//           },
//         ],
//       },
//       reviews: {
//         title: "Birth Control Method Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Most Popular Methods",
//             content:
//               "Birth control pills and IUDs are among the most popular methods, with high satisfaction rates among users.",
//           },
//           {
//             id: "review-2",
//             title: "User Preferences by Age",
//             content:
//               "Younger users often prefer pills or implants, while older users may choose IUDs or permanent methods.",
//           },
//           {
//             id: "review-3",
//             title: "Switching Patterns",
//             content:
//               "Many users try multiple methods before finding their preferred option. Common switches are from pills to IUDs or implants.",
//           },
//         ],
//       },
//       articles: {
//         title: "Birth Control Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Hormonal vs. Non-Hormonal Birth Control",
//             content:
//               "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
//           },
//           {
//             id: "article-2",
//             title: "Long-Acting Reversible Contraceptives (LARCs)",
//             content:
//               "Everything you need to know about IUDs and implants - the most effective reversible methods.",
//           },
//           {
//             id: "article-3",
//             title: "Birth Control and Your Health",
//             content:
//               "How different contraceptive methods can affect your overall health and well-being.",
//           },
//         ],
//       },
//     },

//     pill: {
//       about: {
//         title: "About Birth Control Pills",
//         sections: [
//           {
//             id: "overview",
//             title: "What Are Birth Control Pills?",
//             content:
//               "Birth control pills are oral contraceptives containing hormones that prevent pregnancy. They're one of the most popular and well-studied contraceptive methods.",
//           },
//           {
//             id: "how-it-works",
//             title: "How Birth Control Pills Work",
//             content:
//               "Pills work primarily by preventing ovulation. They also thicken cervical mucus and thin the uterine lining, creating multiple barriers to pregnancy.",
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control Pills",
//             content:
//               "• Combination pills (estrogen + progestin)\n• Progestin-only pills (mini-pills)\n• Extended-cycle pills (fewer periods)\n• Low-dose and ultra-low-dose formulations",
//           },
//           {
//             id: "effectiveness",
//             title: "Effectiveness of the Pill",
//             content:
//               "With perfect use, the pill is over 99% effective. With typical use, it's about 91% effective. Effectiveness depends on taking it consistently at the same time daily.",
//           },
//           {
//             id: "benefits",
//             title: "Benefits Beyond Pregnancy Prevention",
//             content:
//               "• Lighter, more regular periods\n• Reduced menstrual cramps\n• Lower risk of ovarian and endometrial cancers\n• May help with acne\n• Can reduce symptoms of PCOS",
//           },
//         ],
//       },
//       faqs: {
//         title: "Birth Control Pill FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are birth control pills?",
//             content:
//               "Birth control pills are over 99% effective with perfect use and about 91% effective with typical use. Taking the pill at the same time every day improves effectiveness.",
//           },
//           {
//             id: "faq-2",
//             title: "What should I do if I miss a pill?",
//             content:
//               "Take the missed pill as soon as you remember. If you miss one pill, take it immediately and continue as normal. If you miss two or more pills, use backup contraception and consult your healthcare provider.",
//           },
//           {
//             id: "faq-3",
//             title: "What are the side effects of birth control pills?",
//             content:
//               "Common side effects include nausea, breast tenderness, headaches, and mood changes. Most side effects are mild and often improve after 2-3 months of use.",
//           },
//           {
//             id: "faq-4",
//             title: "Can I take the pill while breastfeeding?",
//             content:
//               "Progestin-only pills are safe while breastfeeding. Combination pills may affect milk supply and are usually not recommended until breastfeeding is well established.",
//           },
//           {
//             id: "faq-5",
//             title: "How much do birth control pills cost?",
//             content:
//               "Costs vary widely, from $0-50+ per month. Many insurance plans cover birth control pills at no cost. Generic versions are typically less expensive than brand names.",
//           },
//           {
//             id: "faq-6",
//             title: "Do I need to take a break from the pill?",
//             content:
//               "No, you don't need to take breaks from birth control pills. It's safe to use them continuously for years if they work well for you.",
//           },
//           {
//             id: "faq-7",
//             title: "Can the pill affect my fertility?",
//             content:
//               "Birth control pills don't permanently affect fertility. Most people can get pregnant within a few months of stopping the pill.",
//           },
//           {
//             id: "faq-8",
//             title: "What medications can interfere with the pill?",
//             content:
//               "Some antibiotics, seizure medications, and St. John's wort can reduce pill effectiveness. Always tell healthcare providers you're on the pill.",
//           },
//         ],
//       },
//       reviews: {
//         title: "Birth Control Pill Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction",
//             content:
//               "About 80% of pill users report being satisfied with their method. Satisfaction is highest among users who experience benefits beyond pregnancy prevention.",
//           },
//           {
//             id: "review-2",
//             title: "Ease of Use",
//             content:
//               "Users appreciate the simplicity of taking a daily pill, though some find daily adherence challenging. Phone apps and alarms help with consistency.",
//           },
//           {
//             id: "review-3",
//             title: "Side Effect Experiences",
//             content:
//               "Most users experience minimal side effects. Nausea and breast tenderness are most common initially but often resolve within 3 months.",
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Benefits",
//             content:
//               "Many users love having lighter, more predictable periods. Some choose extended-cycle pills to have fewer periods per year.",
//           },
//           {
//             id: "review-5",
//             title: "Cost Considerations",
//             content:
//               "Users appreciate that many insurance plans cover pills completely. Generic options make pills affordable for most users.",
//           },
//         ],
//       },
//       articles: {
//         title: "Birth Control Pill Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Starting Birth Control Pills",
//             content:
//               "Everything you need to know about beginning your pill regimen, from choosing the right type to managing initial side effects.",
//           },
//           {
//             id: "article-2",
//             title: "Combination Pills vs. Progestin-Only Pills",
//             content:
//               "Detailed comparison of different pill types to help you understand which might be better for your situation.",
//           },
//           {
//             id: "article-3",
//             title: "Managing Pill Side Effects",
//             content:
//               "Practical strategies for dealing with common side effects and knowing when to consider switching formulations.",
//           },
//           {
//             id: "article-4",
//             title: "The Science Behind Birth Control Pills",
//             content:
//               "Understanding how hormonal contraceptives work in your body and their effects on your menstrual cycle.",
//           },
//         ],
//       },
//     },

//     iud: {
//       about: {
//         title: "About Intrauterine Devices (IUDs)",
//         sections: [
//           {
//             id: "overview",
//             title: "What is an IUD?",
//             content:
//               "An IUD is a small, T-shaped device inserted into the uterus to prevent pregnancy. It's one of the most effective forms of reversible birth control available.",
//           },
//           {
//             id: "types",
//             title: "Types of IUDs",
//             content:
//               "• Hormonal IUDs (Mirena, Skyla, Liletta, Kyleena) - release progestin\n• Copper IUD (Paragard) - hormone-free, uses copper to prevent pregnancy",
//           },
//           {
//             id: "how-it-works",
//             title: "How IUDs Work",
//             content:
//               "Hormonal IUDs release progestin, which thickens cervical mucus and may prevent ovulation. Copper IUDs create an environment toxic to sperm and eggs.",
//           },
//           {
//             id: "effectiveness",
//             title: "IUD Effectiveness",
//             content:
//               "IUDs are over 99% effective - among the most effective reversible birth control methods. They work immediately after insertion and provide long-term protection.",
//           },
//           {
//             id: "duration",
//             title: "How Long IUDs Last",
//             content:
//               "• Mirena: 7 years\n• Liletta: 7 years\n• Kyleena: 5 years\n• Skyla: 3 years\n• Paragard (copper): 12 years",
//           },
//         ],
//       },
//       faqs: {
//         title: "IUD Frequently Asked Questions",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are IUDs?",
//             content:
//               "IUDs are over 99% effective at preventing pregnancy, making them one of the most reliable forms of birth control available.",
//           },
//           {
//             id: "faq-2",
//             title: "Does IUD insertion hurt?",
//             content:
//               "Insertion involves some discomfort, similar to a strong menstrual cramp. The procedure is quick (5-10 minutes) and many providers offer pain management options.",
//           },
//           {
//             id: "faq-3",
//             title: "Can I get an IUD if I haven't had children?",
//             content:
//               "Yes! IUDs are safe and effective for people who haven't had children. This is an outdated myth that has been thoroughly debunked.",
//           },
//           {
//             id: "faq-4",
//             title: "Will my partner feel the IUD during sex?",
//             content:
//               "Your partner shouldn't feel the IUD itself. They might occasionally feel the strings, which soften over time. If this is bothersome, the strings can be trimmed.",
//           },
//           {
//             id: "faq-5",
//             title: "How will the IUD affect my periods?",
//             content:
//               "Hormonal IUDs often make periods lighter or may stop them completely. Copper IUDs may make periods heavier initially but this usually improves over time.",
//           },
//           {
//             id: "faq-6",
//             title: "Can the IUD get lost inside me?",
//             content:
//               "No, the IUD cannot get lost in your body. It stays in the uterus and cannot travel to other parts of your body.",
//           },
//           {
//             id: "faq-7",
//             title: "How quickly can I get pregnant after IUD removal?",
//             content:
//               "Fertility typically returns immediately after IUD removal. Many people can get pregnant within the first month after removal.",
//           },
//         ],
//       },
//       reviews: {
//         title: "IUD User Reviews & Experiences",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction Ratings",
//             content:
//               "IUDs have some of the highest satisfaction rates among birth control methods, with over 85% of users reporting they would recommend IUDs to others.",
//           },
//           {
//             id: "review-2",
//             title: "Insertion Experience Reviews",
//             content:
//               "While insertion can be uncomfortable, most users report it's tolerable and quick. Many say the long-term benefits outweigh the brief discomfort.",
//           },
//           {
//             id: "review-3",
//             title: "Long-term Use Satisfaction",
//             content:
//               "Users love the 'set it and forget it' convenience. Many report feeling more spontaneous and free from daily birth control routines.",
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Changes Reviews",
//             content:
//               "Many hormonal IUD users love having lighter periods or no periods. Some copper IUD users experience heavier periods initially but adjust over time.",
//           },
//           {
//             id: "review-5",
//             title: "Cost Value Reviews",
//             content:
//               "Despite higher upfront costs, users appreciate the long-term value. When calculated per year, IUDs are often the most cost-effective option.",
//           },
//         ],
//       },
//       articles: {
//         title: "IUD Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete IUD Guide: Everything You Need to Know",
//             content:
//               "Comprehensive guide covering all aspects of IUDs, from types and effectiveness to insertion and removal.",
//           },
//           {
//             id: "article-2",
//             title: "Hormonal vs. Copper IUD: Which is Right for You?",
//             content:
//               "Detailed comparison to help you decide between hormonal and non-hormonal IUD options.",
//           },
//           {
//             id: "article-3",
//             title: "What to Expect: IUD Insertion and Recovery",
//             content:
//               "Preparation tips, insertion process details, and aftercare instructions for IUD insertion.",
//           },
//           {
//             id: "article-4",
//             title: "IUD Myths Debunked by Medical Experts",
//             content:
//               "Addressing common misconceptions about IUDs with evidence-based medical information.",
//           },
//         ],
//       },
//     },
//   };

//   // Use provided contentData, route-specific data, or fall back to default
//   const getContentForRoute = () => {
//     if (contentData && contentData[activeTab.toLowerCase()]) {
//       return contentData[activeTab.toLowerCase()];
//     }

//     if (
//       routeContentData[route] &&
//       routeContentData[route][activeTab.toLowerCase()]
//     ) {
//       return routeContentData[route][activeTab.toLowerCase()];
//     }

//     // Fallback to home content
//     return routeContentData.home[activeTab.toLowerCase()];
//   };

//   const currentTabData = getContentForRoute();

//   // Reset active tab when route changes
//   useEffect(() => {
//     setActiveTab("About");
//     setActiveSection("");
//   }, [route]);

//   // Handle scroll for sticky sidebar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (tabContentRef.current && sidebarRef.current) {
//         const tabContentRect = tabContentRef.current.getBoundingClientRect();
//         const shouldBeSticky =
//           tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
//         setSidebarSticky(shouldBeSticky);

//         // Update active section based on scroll position
//         const sections =
//           tabContentRef.current.querySelectorAll("[data-section-id]");
//         let currentActiveSection = "";

//         sections.forEach((section) => {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom > 100) {
//             currentActiveSection = section.getAttribute("data-section-id");
//           }
//         });

//         if (currentActiveSection) {
//           setActiveSection(currentActiveSection);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.querySelector(`[data-section-id="${sectionId}"]`);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const tabs = ["About", "FAQs", "Reviews", "Articles"];

//   // Route display names
//   const getRouteDisplayName = () => {
//     const routeNames = {
//       home: "Birth Control Hub",
//       "birth-control": "Birth Control Methods",
//       pill: "Birth Control Pills",
//       iud: "Intrauterine Devices (IUDs)",
//       implant: "Birth Control Implant",
//       patch: "Birth Control Patch",
//       ring: "Vaginal Ring",
//       shot: "Birth Control Shot",
//       condom: "Condoms",
//       diaphragm: "Diaphragm",
//     };
//     return routeNames[route] || route.charAt(0).toUpperCase() + route.slice(1);
//   };

//   // If no content is available, show placeholder
//   if (!currentTabData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-600 mb-4">
//             Content Not Available
//           </h2>
//           <p className="text-gray-500">
//             Content for route "{route}" is not yet available.
//             <br />
//             Add content for this route in the routeContentData object.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Route Indicator */}
//       <div className="bg-teal-600 text-white py-2 px-4">
//         <div className="max-w-6xl mx-auto">
//           <span className="text-sm opacity-75">Current Section: </span>
//           <span className="font-medium">{getRouteDisplayName()}</span>
//         </div>
//       </div>

//       {/* Main Navigation Tabs */}
//       <div className="bg-white border-b sticky top-0 z-40">
//         <div className="max-w-6xl mx-auto">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab
//                     ? "border-teal-500 text-teal-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="max-w-6xl mx-auto flex gap-8 p-6">
//         {/* Sidebar */}
//         <div className="w-80 flex-shrink-0">
//           <div
//             ref={sidebarRef}
//             className={`bg-white rounded-lg border p-6 transition-all duration-200 ${
//               sidebarSticky ? "fixed top-20 w-72" : "static"
//             }`}
//           >
//             <h3 className="font-semibold text-lg text-teal-600 mb-4">
//               {getRouteDisplayName()}
//             </h3>

//             <div className="text-sm text-gray-600 mb-4">Jump to ...</div>

//             <nav className="space-y-3">
//               {currentTabData.sections?.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => scrollToSection(section.id)}
//                   className={`block w-full text-left text-sm transition-colors hover:text-teal-600 ${
//                     activeSection === section.id
//                       ? "text-teal-600 font-medium"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="flex-1" ref={tabContentRef}>
//           <div className="bg-white rounded-lg">
//             {/* Tab Content Header */}
//             <div className="p-8 pb-6">
//               <h1 className="text-3xl font-bold text-teal-600 mb-6">
//                 {currentTabData.title}
//               </h1>
//             </div>

//             {/* Tab Content Sections */}
//             <div className="px-8 pb-8">
//               {currentTabData.sections?.map((section, index) => (
//                 <div
//                   key={section.id}
//                   data-section-id={section.id}
//                   className="mb-12 scroll-mt-24"
//                 >
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
//                     {section.title}
//                     <div className="ml-4 h-px bg-teal-300 flex-1"></div>
//                   </h2>

//                   <div className="text-gray-700 leading-relaxed space-y-4">
//                     {section.content.split("\n\n").map((paragraph, pIndex) => (
//                       <div key={pIndex}>
//                         {paragraph.includes("•") ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph
//                               .split("\n")
//                               .filter((line) => line.includes("•"))
//                               .map((item, iIndex) => (
//                                 <li key={iIndex} className="text-gray-700">
//                                   {item.replace("•", "").trim()}
//                                 </li>
//                               ))}
//                           </ul>
//                         ) : paragraph.includes("- ") ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph
//                               .split("\n")
//                               .filter((line) => line.includes("- "))
//                               .map((item, iIndex) => (
//                                 <li key={iIndex} className="text-gray-700">
//                                   {item.replace("- ", "").trim()}
//                                 </li>
//                               ))}
//                           </ul>
//                         ) : (
//                           <p>{paragraph}</p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Quick Action Button */}
//             <div className="px-8 pb-8">
//               <div className="bg-teal-50 rounded-lg p-6 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Ready to Learn More?
//                 </h3>
//                 <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
//                   Compare Methods
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicTabsComponent;

// import React, { useState, useEffect, useRef } from 'react';

// const DynamicTabsComponent = ({ route = 'home', contentData }) => {
//   const [activeTab, setActiveTab] = useState('About');
//   const [activeSection, setActiveSection] = useState('');
//   const [sidebarSticky, setSidebarSticky] = useState(false);

//   const tabContentRef = useRef(null);
//   const sidebarRef = useRef(null);

//   // Route-based content structure
//   const routeContentData = {
//     home: {
//       about: {
//         title: "About Our Platform",
//         sections: [
//           {
//             id: "overview",
//             title: "Platform Overview",
//             content: "Welcome to our comprehensive birth control information platform. We provide evidence-based information to help you make informed decisions about contraceptive options that best suit your lifestyle and health needs."
//           },
//           {
//             id: "mission",
//             title: "Our Mission",
//             content: "Our mission is to democratize access to accurate, unbiased information about birth control methods. We believe everyone deserves to make informed choices about their reproductive health."
//           },
//           {
//             id: "features",
//             title: "What We Offer",
//             content: "• Comprehensive method comparisons\n• Real user reviews and experiences\n• Expert medical insights\n• Up-to-date research and studies\n• Personalized recommendations"
//           },
//           {
//             id: "reliability",
//             title: "Information Reliability",
//             content: "All our content is reviewed by certified healthcare professionals and based on peer-reviewed medical research. We update our information regularly to reflect the latest scientific findings."
//           }
//         ]
//       },
//       faqs: {
//         title: "General FAQs About Birth Control",
//         sections: [
//           {
//             id: "faq-1",
//             title: "What factors should I consider when choosing birth control?",
//             content: "Consider your lifestyle, health history, relationship status, future pregnancy plans, and personal preferences. Factors like effectiveness, convenience, side effects, and cost are all important."
//           },
//           {
//             id: "faq-2",
//             title: "How do I talk to my healthcare provider about birth control?",
//             content: "Be honest about your health history, sexual activity, and concerns. Prepare questions in advance and don't hesitate to ask about different options and their pros and cons."
//           },
//           {
//             id: "faq-3",
//             title: "Can I switch between different birth control methods?",
//             content: "Yes, you can switch methods, but it's important to consult with your healthcare provider to ensure a smooth transition and continuous protection."
//           },
//           {
//             id: "faq-4",
//             title: "What's the difference between perfect use and typical use effectiveness?",
//             content: "Perfect use reflects effectiveness when the method is used correctly every time, while typical use accounts for human error and real-world usage patterns."
//           }
//         ]
//       },
//       reviews: {
//         title: "Platform Reviews & User Feedback",
//         sections: [
//           {
//             id: "review-1",
//             title: "User Satisfaction",
//             content: "95% of users find our platform helpful in making birth control decisions. Users particularly appreciate the comprehensive comparisons and real user reviews."
//           },
//           {
//             id: "review-2",
//             title: "Healthcare Provider Endorsements",
//             content: "Many healthcare providers recommend our platform to their patients as a reliable source of contraceptive information."
//           },
//           {
//             id: "review-3",
//             title: "Educational Impact",
//             content: "Users report feeling more confident and informed about their birth control choices after using our platform."
//           }
//         ]
//       },
//       articles: {
//         title: "Featured Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Birth Control Options",
//             content: "A comprehensive overview of all available contraceptive methods, their effectiveness, and suitability for different lifestyles."
//           },
//           {
//             id: "article-2",
//             title: "Understanding Birth Control Effectiveness",
//             content: "Learn how to interpret effectiveness rates and what they mean for your contraceptive choices."
//           },
//           {
//             id: "article-3",
//             title: "Birth Control Myths vs. Facts",
//             content: "Debunking common misconceptions about contraceptives with evidence-based information."
//           }
//         ]
//       }
//     },

//     "birth-control": {
//       about: {
//         title: "About Birth Control Methods",
//         sections: [
//           {
//             id: "overview",
//             title: "Contraceptive Overview",
//             content: "Birth control methods are designed to prevent pregnancy through various mechanisms. Understanding how different methods work can help you choose the most suitable option for your needs."
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control",
//             content: "• Barrier methods (condoms, diaphragms)\n• Hormonal methods (pills, patches, rings)\n• Long-acting reversible contraceptives (IUDs, implants)\n• Permanent methods (sterilization)\n• Natural methods (fertility awareness)"
//           },
//           {
//             id: "effectiveness",
//             title: "Understanding Effectiveness",
//             content: "Effectiveness is measured by the percentage of people who don't become pregnant in a year of using the method. Methods range from 85% to over 99% effective."
//           },
//           {
//             id: "choosing",
//             title: "Choosing the Right Method",
//             content: "The best birth control method depends on your health, lifestyle, relationship status, and personal preferences. Consider factors like convenience, reversibility, and side effects."
//           }
//         ]
//       },
//       faqs: {
//         title: "Birth Control FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "What's the most effective birth control method?",
//             content: "IUDs and implants are the most effective reversible methods (over 99%). Sterilization is the most effective permanent method."
//           },
//           {
//             id: "faq-2",
//             title: "Do I need a prescription for birth control?",
//             content: "Some methods like condoms and spermicides are available over-the-counter. Others like pills, IUDs, and implants require a prescription."
//           },
//           {
//             id: "faq-3",
//             title: "Can birth control affect my fertility?",
//             content: "Most birth control methods don't permanently affect fertility. You can typically get pregnant soon after stopping most methods."
//           },
//           {
//             id: "faq-4",
//             title: "What if I miss taking my birth control?",
//             content: "Instructions vary by method. For pills, take the missed pill as soon as you remember. Use backup protection if you've missed multiple pills."
//           },
//           {
//             id: "faq-5",
//             title: "Are there any birth control methods without hormones?",
//             content: "Yes! Copper IUDs, barrier methods, fertility awareness methods, and sterilization don't use hormones."
//           }
//         ]
//       },
//       reviews: {
//         title: "Birth Control Method Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Most Popular Methods",
//             content: "Birth control pills and IUDs are among the most popular methods, with high satisfaction rates among users."
//           },
//           {
//             id: "review-2",
//             title: "User Preferences by Age",
//             content: "Younger users often prefer pills or implants, while older users may choose IUDs or permanent methods."
//           },
//           {
//             id: "review-3",
//             title: "Switching Patterns",
//             content: "Many users try multiple methods before finding their preferred option. Common switches are from pills to IUDs or implants."
//           }
//         ]
//       },
//       articles: {
//         title: "Birth Control Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Hormonal vs. Non-Hormonal Birth Control",
//             content: "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options."
//           },
//           {
//             id: "article-2",
//             title: "Long-Acting Reversible Contraceptives (LARCs)",
//             content: "Everything you need to know about IUDs and implants - the most effective reversible methods."
//           },
//           {
//             id: "article-3",
//             title: "Birth Control and Your Health",
//             content: "How different contraceptive methods can affect your overall health and well-being."
//           }
//         ]
//       }
//     },

//     "pill": {
//       about: {
//         title: "About Birth Control Pills",
//         sections: [
//           {
//             id: "overview",
//             title: "What Are Birth Control Pills?",
//             content: "Birth control pills are oral contraceptives containing hormones that prevent pregnancy. They're one of the most popular and well-studied contraceptive methods."
//           },
//           {
//             id: "how-it-works",
//             title: "How Birth Control Pills Work",
//             content: "Pills work primarily by preventing ovulation. They also thicken cervical mucus and thin the uterine lining, creating multiple barriers to pregnancy."
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control Pills",
//             content: "• Combination pills (estrogen + progestin)\n• Progestin-only pills (mini-pills)\n• Extended-cycle pills (fewer periods)\n• Low-dose and ultra-low-dose formulations"
//           },
//           {
//             id: "effectiveness",
//             title: "Effectiveness of the Pill",
//             content: "With perfect use, the pill is over 99% effective. With typical use, it's about 91% effective. Effectiveness depends on taking it consistently at the same time daily."
//           },
//           {
//             id: "benefits",
//             title: "Benefits Beyond Pregnancy Prevention",
//             content: "• Lighter, more regular periods\n• Reduced menstrual cramps\n• Lower risk of ovarian and endometrial cancers\n• May help with acne\n• Can reduce symptoms of PCOS"
//           }
//         ]
//       },
//       faqs: {
//         title: "Birth Control Pill FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are birth control pills?",
//             content: "Birth control pills are over 99% effective with perfect use and about 91% effective with typical use. Taking the pill at the same time every day improves effectiveness."
//           },
//           {
//             id: "faq-2",
//             title: "What should I do if I miss a pill?",
//             content: "Take the missed pill as soon as you remember. If you miss one pill, take it immediately and continue as normal. If you miss two or more pills, use backup contraception and consult your healthcare provider."
//           },
//           {
//             id: "faq-3",
//             title: "What are the side effects of birth control pills?",
//             content: "Common side effects include nausea, breast tenderness, headaches, and mood changes. Most side effects are mild and often improve after 2-3 months of use."
//           },
//           {
//             id: "faq-4",
//             title: "Can I take the pill while breastfeeding?",
//             content: "Progestin-only pills are safe while breastfeeding. Combination pills may affect milk supply and are usually not recommended until breastfeeding is well established."
//           },
//           {
//             id: "faq-5",
//             title: "How much do birth control pills cost?",
//             content: "Costs vary widely, from $0-50+ per month. Many insurance plans cover birth control pills at no cost. Generic versions are typically less expensive than brand names."
//           },
//           {
//             id: "faq-6",
//             title: "Do I need to take a break from the pill?",
//             content: "No, you don't need to take breaks from birth control pills. It's safe to use them continuously for years if they work well for you."
//           },
//           {
//             id: "faq-7",
//             title: "Can the pill affect my fertility?",
//             content: "Birth control pills don't permanently affect fertility. Most people can get pregnant within a few months of stopping the pill."
//           },
//           {
//             id: "faq-8",
//             title: "What medications can interfere with the pill?",
//             content: "Some antibiotics, seizure medications, and St. John's wort can reduce pill effectiveness. Always tell healthcare providers you're on the pill."
//           }
//         ]
//       },
//       reviews: {
//         title: "Birth Control Pill Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction",
//             content: "About 80% of pill users report being satisfied with their method. Satisfaction is highest among users who experience benefits beyond pregnancy prevention."
//           },
//           {
//             id: "review-2",
//             title: "Ease of Use",
//             content: "Users appreciate the simplicity of taking a daily pill, though some find daily adherence challenging. Phone apps and alarms help with consistency."
//           },
//           {
//             id: "review-3",
//             title: "Side Effect Experiences",
//             content: "Most users experience minimal side effects. Nausea and breast tenderness are most common initially but often resolve within 3 months."
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Benefits",
//             content: "Many users love having lighter, more predictable periods. Some choose extended-cycle pills to have fewer periods per year."
//           },
//           {
//             id: "review-5",
//             title: "Cost Considerations",
//             content: "Users appreciate that many insurance plans cover pills completely. Generic options make pills affordable for most users."
//           }
//         ]
//       },
//       articles: {
//         title: "Birth Control Pill Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Starting Birth Control Pills",
//             content: "Everything you need to know about beginning your pill regimen, from choosing the right type to managing initial side effects."
//           },
//           {
//             id: "article-2",
//             title: "Combination Pills vs. Progestin-Only Pills",
//             content: "Detailed comparison of different pill types to help you understand which might be better for your situation."
//           },
//           {
//             id: "article-3",
//             title: "Managing Pill Side Effects",
//             content: "Practical strategies for dealing with common side effects and knowing when to consider switching formulations."
//           },
//           {
//             id: "article-4",
//             title: "The Science Behind Birth Control Pills",
//             content: "Understanding how hormonal contraceptives work in your body and their effects on your menstrual cycle."
//           }
//         ]
//       }
//     },

//     "iud": {
//       about: {
//         title: "About Intrauterine Devices (IUDs)",
//         sections: [
//           {
//             id: "overview",
//             title: "What is an IUD?",
//             content: "An IUD is a small, T-shaped device inserted into the uterus to prevent pregnancy. It's one of the most effective forms of reversible birth control available."
//           },
//           {
//             id: "types",
//             title: "Types of IUDs",
//             content: "• Hormonal IUDs (Mirena, Skyla, Liletta, Kyleena) - release progestin\n• Copper IUD (Paragard) - hormone-free, uses copper to prevent pregnancy"
//           },
//           {
//             id: "how-it-works",
//             title: "How IUDs Work",
//             content: "Hormonal IUDs release progestin, which thickens cervical mucus and may prevent ovulation. Copper IUDs create an environment toxic to sperm and eggs."
//           },
//           {
//             id: "effectiveness",
//             title: "IUD Effectiveness",
//             content: "IUDs are over 99% effective - among the most effective reversible birth control methods. They work immediately after insertion and provide long-term protection."
//           },
//           {
//             id: "duration",
//             title: "How Long IUDs Last",
//             content: "• Mirena: 7 years\n• Liletta: 7 years\n• Kyleena: 5 years\n• Skyla: 3 years\n• Paragard (copper): 12 years"
//           }
//         ]
//       },
//       faqs: {
//         title: "IUD Frequently Asked Questions",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are IUDs?",
//             content: "IUDs are over 99% effective at preventing pregnancy, making them one of the most reliable forms of birth control available."
//           },
//           {
//             id: "faq-2",
//             title: "Does IUD insertion hurt?",
//             content: "Insertion involves some discomfort, similar to a strong menstrual cramp. The procedure is quick (5-10 minutes) and many providers offer pain management options."
//           },
//           {
//             id: "faq-3",
//             title: "Can I get an IUD if I haven't had children?",
//             content: "Yes! IUDs are safe and effective for people who haven't had children. This is an outdated myth that has been thoroughly debunked."
//           },
//           {
//             id: "faq-4",
//             title: "Will my partner feel the IUD during sex?",
//             content: "Your partner shouldn't feel the IUD itself. They might occasionally feel the strings, which soften over time. If this is bothersome, the strings can be trimmed."
//           },
//           {
//             id: "faq-5",
//             title: "How will the IUD affect my periods?",
//             content: "Hormonal IUDs often make periods lighter or may stop them completely. Copper IUDs may make periods heavier initially but this usually improves over time."
//           },
//           {
//             id: "faq-6",
//             title: "Can the IUD get lost inside me?",
//             content: "No, the IUD cannot get lost in your body. It stays in the uterus and cannot travel to other parts of your body."
//           },
//           {
//             id: "faq-7",
//             title: "How quickly can I get pregnant after IUD removal?",
//             content: "Fertility typically returns immediately after IUD removal. Many people can get pregnant within the first month after removal."
//           }
//         ]
//       },
//       reviews: {
//         title: "IUD User Reviews & Experiences",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction Ratings",
//             content: "IUDs have some of the highest satisfaction rates among birth control methods, with over 85% of users reporting they would recommend IUDs to others."
//           },
//           {
//             id: "review-2",
//             title: "Insertion Experience Reviews",
//             content: "While insertion can be uncomfortable, most users report it's tolerable and quick. Many say the long-term benefits outweigh the brief discomfort."
//           },
//           {
//             id: "review-3",
//             title: "Long-term Use Satisfaction",
//             content: "Users love the 'set it and forget it' convenience. Many report feeling more spontaneous and free from daily birth control routines."
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Changes Reviews",
//             content: "Many hormonal IUD users love having lighter periods or no periods. Some copper IUD users experience heavier periods initially but adjust over time."
//           },
//           {
//             id: "review-5",
//             title: "Cost Value Reviews",
//             content: "Despite higher upfront costs, users appreciate the long-term value. When calculated per year, IUDs are often the most cost-effective option."
//           }
//         ]
//       },
//       articles: {
//         title: "IUD Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete IUD Guide: Everything You Need to Know",
//             content: "Comprehensive guide covering all aspects of IUDs, from types and effectiveness to insertion and removal."
//           },
//           {
//             id: "article-2",
//             title: "Hormonal vs. Copper IUD: Which is Right for You?",
//             content: "Detailed comparison to help you decide between hormonal and non-hormonal IUD options."
//           },
//           {
//             id: "article-3",
//             title: "What to Expect: IUD Insertion and Recovery",
//             content: "Preparation tips, insertion process details, and aftercare instructions for IUD insertion."
//           },
//           {
//             id: "article-4",
//             title: "IUD Myths Debunked by Medical Experts",
//             content: "Addressing common misconceptions about IUDs with evidence-based medical information."
//           }
//         ]
//       }
//     }
//   };

//   // Use provided contentData or route-specific data
//   const getContentForRoute = () => {
//     // First priority: external contentData prop
//     if (contentData && contentData[activeTab.toLowerCase()]) {
//       return contentData[activeTab.toLowerCase()];
//     }

//     // Second priority: route-specific content from internal data
//     const routeKey = route.toLowerCase().trim();
//     if (routeContentData[routeKey] && routeContentData[routeKey][activeTab.toLowerCase()]) {
//       return routeContentData[routeKey][activeTab.toLowerCase()];
//     }

//     // Fallback: return null to show content not available message
//     return null;
//   };

//   const currentTabData = getContentForRoute();

//   // Reset active tab when route changes
//   useEffect(() => {
//     setActiveTab('About');
//     setActiveSection('');
//   }, [route]);

//   // Handle scroll for sticky sidebar
//   useEffect(() => {
//     const handleScroll = () => {
//       if (tabContentRef.current && sidebarRef.current) {
//         const tabContentRect = tabContentRef.current.getBoundingClientRect();
//         const shouldBeSticky = tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
//         setSidebarSticky(shouldBeSticky);

//         // Update active section based on scroll position
//         const sections = tabContentRef.current.querySelectorAll('[data-section-id]');
//         let currentActiveSection = '';

//         sections.forEach(section => {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom > 100) {
//             currentActiveSection = section.getAttribute('data-section-id');
//           }
//         });

//         if (currentActiveSection) {
//           setActiveSection(currentActiveSection);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.querySelector(`[data-section-id="${sectionId}"]`);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const tabs = ['About', 'FAQs', 'Reviews', 'Articles'];

//   // Route display names
//   const getRouteDisplayName = () => {
//     const routeNames = {
//       'home': 'Birth Control Hub',
//       'birth-control': 'Birth Control Methods',
//       'pill': 'Birth Control Pills',
//       'iud': 'Intrauterine Devices (IUDs)',
//       'implant': 'Birth Control Implant',
//       'patch': 'Birth Control Patch',
//       'ring': 'Vaginal Ring',
//       'shot': 'Birth Control Shot',
//       'condom': 'Condoms',
//       'diaphragm': 'Diaphragm'
//     };
//     return routeNames[route.toLowerCase().trim()] || route.charAt(0).toUpperCase() + route.slice(1);
//   };

//   // Get dynamic button text and action based on route
//   const getCallToAction = () => {
//     const routeKey = route.toLowerCase().trim();
//     const cta = {
//       'home': {
//         title: 'Ready to Learn More?',
//         buttonText: 'Compare Methods',
//         description: 'Explore all birth control options'
//       },
//       'birth-control': {
//         title: 'Find Your Perfect Match?',
//         buttonText: 'View All Methods',
//         description: 'Compare effectiveness and benefits'
//       },
//       'pill': {
//         title: 'Interested in Birth Control Pills?',
//         buttonText: 'Compare Pill Types',
//         description: 'Find the right pill for you'
//       },
//       'iud': {
//         title: 'Ready to Consider an IUD?',
//         buttonText: 'Compare IUD Options',
//         description: 'Explore hormonal vs copper IUDs'
//       },
//       'implant': {
//         title: 'Learn More About Implants?',
//         buttonText: 'Implant Details',
//         description: 'Get comprehensive implant information'
//       },
//       'patch': {
//         title: 'Interested in the Patch?',
//         buttonText: 'Patch Information',
//         description: 'Learn about patch effectiveness'
//       },
//       'ring': {
//         title: 'Consider the Vaginal Ring?',
//         buttonText: 'Ring Details',
//         description: 'Explore ring benefits and usage'
//       },
//       'shot': {
//         title: 'Learn About the Shot?',
//         buttonText: 'Shot Information',
//         description: 'Understand injection schedules'
//       },
//       'condom': {
//         title: 'Explore Condom Options?',
//         buttonText: 'Condom Types',
//         description: 'Compare different condom varieties'
//       },
//       'diaphragm': {
//         title: 'Consider a Diaphragm?',
//         buttonText: 'Diaphragm Guide',
//         description: 'Learn about barrier methods'
//       }
//     };

//     return cta[routeKey] || cta['home'];
//   };

//   // If no content is available, show placeholder
//   if (!currentTabData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-600 mb-4">Content Not Available</h2>
//           <p className="text-gray-500">
//             Content for route "{route}" and tab "{activeTab}" is not yet available.
//             <br />Add content for this route in the routeContentData object.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const callToAction = getCallToAction();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Route Indicator */}
//       <div className="bg-teal-600 text-white py-2 px-4">
//         <div className="max-w-6xl mx-auto">
//           <span className="text-sm opacity-75">Current Section: </span>
//           <span className="font-medium">{getRouteDisplayName()}</span>
//         </div>
//       </div>

//       {/* Main Navigation Tabs */}
//       <div className="bg-white border-b sticky top-0 z-40">
//         <div className="max-w-6xl mx-auto">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab
//                     ? 'border-teal-500 text-teal-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="max-w-6xl mx-auto flex gap-8 p-6">
//         {/* Sidebar */}
//         <div className="w-80 flex-shrink-0">
//           <div
//             ref={sidebarRef}
//             className={`bg-white rounded-lg border p-6 transition-all duration-200 ${
//               sidebarSticky ? 'fixed top-20 w-72' : 'static'
//             }`}
//           >
//             <h3 className="font-semibold text-lg text-teal-600 mb-4">
//               {getRouteDisplayName()}
//             </h3>

//             <div className="text-sm text-gray-600 mb-4">Jump to ...</div>

//             <nav className="space-y-3">
//               {currentTabData.sections?.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => scrollToSection(section.id)}
//                   className={`block w-full text-left text-sm transition-colors hover:text-teal-600 ${
//                     activeSection === section.id
//                       ? 'text-teal-600 font-medium'
//                       : 'text-gray-600'
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="flex-1" ref={tabContentRef}>
//           <div className="bg-white rounded-lg">
//             {/* Tab Content Header */}
//             <div className="p-8 pb-6">
//               <h1 className="text-3xl font-bold text-teal-600 mb-6">
//                 {currentTabData.title}
//               </h1>
//             </div>

//             {/* Tab Content Sections */}
//             <div className="px-8 pb-8">
//               {currentTabData.sections?.map((section, index) => (
//                 <div
//                   key={section.id}
//                   data-section-id={section.id}
//                   className="mb-12 scroll-mt-24"
//                 >
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
//                     {section.title}
//                     <div className="ml-4 h-px bg-teal-300 flex-1"></div>
//                   </h2>

//                   <div className="text-gray-700 leading-relaxed space-y-4">
//                     {section.content.split('\n\n').map((paragraph, pIndex) => (
//                       <div key={pIndex}>
//                         {paragraph.includes('•') ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph.split('\n').filter(line => line.includes('•')).map((item, iIndex) => (
//                               <li key={iIndex} className="text-gray-700">
//                                 {item.replace('•', '').trim()}
//                               </li>
//                             ))}
//                           </ul>
//                         ) : paragraph.includes('- ') ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph.split('\n').filter(line => line.includes('- ')).map((item, iIndex) => (
//                               <li key={iIndex} className="text-gray-700">
//                                 {item.replace('- ', '').trim()}
//                               </li>
//                             ))}
//                           </ul>
//                         ) : (
//                           <p>{paragraph}</p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Dynamic Call-to-Action Button */}
//             <div className="px-8 pb-8">
//               <div className="bg-teal-50 rounded-lg p-6 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {callToAction.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-sm">
//                   {callToAction.description}
//                 </p>
//                 <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
//                   {callToAction.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicTabsComponent;

// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, Link } from 'react-router-dom';

// // Route-based content structure
//   const routeContentData = {
//     home: {
//       about: {
//         title: "About Our Platform",
//         sections: [
//           {
//             id: "overview",
//             title: "Platform Overview",
//             content: "Welcome to our comprehensive birth control information platform. We provide evidence-based information to help you make informed decisions about contraceptive options that best suit your lifestyle and health needs."
//           },
//           {
//             id: "mission",
//             title: "Our Mission",
//             content: "Our mission is to democratize access to accurate, unbiased information about birth control methods. We believe everyone deserves to make informed choices about their reproductive health."
//           },
//           {
//             id: "features",
//             title: "What We Offer",
//             content: "• Comprehensive method comparisons\n• Real user reviews and experiences\n• Expert medical insights\n• Up-to-date research and studies\n• Personalized recommendations"
//           },
//           {
//             id: "reliability",
//             title: "Information Reliability",
//             content: "All our content is reviewed by certified healthcare professionals and based on peer-reviewed medical research. We update our information regularly to reflect the latest scientific findings."
//           }
//         ]
//       },
//       faqs: {
//         title: "General FAQs About Birth Control",
//         sections: [
//           {
//             id: "faq-1",
//             title: "What factors should I consider when choosing birth control?",
//             content: "Consider your lifestyle, health history, relationship status, future pregnancy plans, and personal preferences. Factors like effectiveness, convenience, side effects, and cost are all important."
//           },
//           {
//             id: "faq-2",
//             title: "How do I talk to my healthcare provider about birth control?",
//             content: "Be honest about your health history, sexual activity, and concerns. Prepare questions in advance and don't hesitate to ask about different options and their pros and cons."
//           },
//           {
//             id: "faq-3",
//             title: "Can I switch between different birth control methods?",
//             content: "Yes, you can switch methods, but it's important to consult with your healthcare provider to ensure a smooth transition and continuous protection."
//           },
//           {
//             id: "faq-4",
//             title: "What's the difference between perfect use and typical use effectiveness?",
//             content: "Perfect use reflects effectiveness when the method is used correctly every time, while typical use accounts for human error and real-world usage patterns."
//           }
//         ]
//       },
//       reviews: {
//         title: "Platform Reviews & User Feedback",
//         sections: [
//           {
//             id: "review-1",
//             title: "User Satisfaction",
//             content: "95% of users find our platform helpful in making birth control decisions. Users particularly appreciate the comprehensive comparisons and real user reviews."
//           },
//           {
//             id: "review-2",
//             title: "Healthcare Provider Endorsements",
//             content: "Many healthcare providers recommend our platform to their patients as a reliable source of contraceptive information."
//           },
//           {
//             id: "review-3",
//             title: "Educational Impact",
//             content: "Users report feeling more confident and informed about their birth control choices after using our platform."
//           }
//         ]
//       },
//       articles: {
//         title: "Featured Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Birth Control Options",
//             content: "A comprehensive overview of all available contraceptive methods, their effectiveness, and suitability for different lifestyles."
//           },
//           {
//             id: "article-2",
//             title: "Understanding Birth Control Effectiveness",
//             content: "Learn how to interpret effectiveness rates and what they mean for your contraceptive choices."
//           },
//           {
//             id: "article-3",
//             title: "Birth Control Myths vs. Facts",
//             content: "Debunking common misconceptions about contraceptives with evidence-based information."
//           }
//         ]
//       }
//     },

//     "/types/iud": {
//       about: {
//         title: "About Birth Control Methods",
//         sections: [
//           {
//             id: "overview",
//             title: "Contraceptive Overview",
//             content: "Birth control methods are designed to prevent pregnancy through various mechanisms. Understanding how different methods work can help you choose the most suitable option for your needs."
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control",
//             content: "• Barrier methods (condoms, diaphragms)\n• Hormonal methods (pills, patches, rings)\n• Long-acting reversible contraceptives (IUDs, implants)\n• Permanent methods (sterilization)\n• Natural methods (fertility awareness)"
//           },
//           {
//             id: "effectiveness",
//             title: "Understanding Effectiveness",
//             content: "Effectiveness is measured by the percentage of people who don't become pregnant in a year of using the method. Methods range from 85% to over 99% effective."
//           },
//           {
//             id: "choosing",
//             title: "Choosing the Right Method",
//             content: "The best birth control method depends on your health, lifestyle, relationship status, and personal preferences. Consider factors like convenience, reversibility, and side effects."
//           }
//         ]
//       },
//       faqs: {
//         title: "Birth Control FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "What's the most effective birth control method?",
//             content: "IUDs and implants are the most effective reversible methods (over 99%). Sterilization is the most effective permanent method."
//           },
//           {
//             id: "faq-2",
//             title: "Do I need a prescription for birth control?",
//             content: "Some methods like condoms and spermicides are available over-the-counter. Others like pills, IUDs, and implants require a prescription."
//           },
//           {
//             id: "faq-3",
//             title: "Can birth control affect my fertility?",
//             content: "Most birth control methods don't permanently affect fertility. You can typically get pregnant soon after stopping most methods."
//           },
//           {
//             id: "faq-4",
//             title: "What if I miss taking my birth control?",
//             content: "Instructions vary by method. For pills, take the missed pill as soon as you remember. Use backup protection if you've missed multiple pills."
//           },
//           {
//             id: "faq-5",
//             title: "Are there any birth control methods without hormones?",
//             content: "Yes! Copper IUDs, barrier methods, fertility awareness methods, and sterilization don't use hormones."
//           }
//         ]
//       },
//       reviews: {
//         title: "Birth Control Method Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Most Popular Methods",
//             content: "Birth control pills and IUDs are among the most popular methods, with high satisfaction rates among users."
//           },
//           {
//             id: "review-2",
//             title: "User Preferences by Age",
//             content: "Younger users often prefer pills or implants, while older users may choose IUDs or permanent methods."
//           },
//           {
//             id: "review-3",
//             title: "Switching Patterns",
//             content: "Many users try multiple methods before finding their preferred option. Common switches are from pills to IUDs or implants."
//           }
//         ]
//       },
//       articles: {
//         title: "Birth Control Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Hormonal vs. Non-Hormonal Birth Control",
//             content: "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options."
//           },
//           {
//             id: "article-2",
//             title: "Long-Acting Reversible Contraceptives (LARCs)",
//             content: "Everything you need to know about IUDs and implants - the most effective reversible methods."
//           },
//           {
//             id: "article-3",
//             title: "Birth Control and Your Health",
//             content: "How different contraceptive methods can affect your overall health and well-being."
//           }
//         ]
//       }
//     },

//     "pill": {
//       about: {
//         title: "About Birth Control Pills",
//         sections: [
//           {
//             id: "overview",
//             title: "What Are Birth Control Pills?",
//             content: "Birth control pills are oral contraceptives containing hormones that prevent pregnancy. They're one of the most popular and well-studied contraceptive methods."
//           },
//           {
//             id: "how-it-works",
//             title: "How Birth Control Pills Work",
//             content: "Pills work primarily by preventing ovulation. They also thicken cervical mucus and thin the uterine lining, creating multiple barriers to pregnancy."
//           },
//           {
//             id: "types",
//             title: "Types of Birth Control Pills",
//             content: "• Combination pills (estrogen + progestin)\n• Progestin-only pills (mini-pills)\n• Extended-cycle pills (fewer periods)\n• Low-dose and ultra-low-dose formulations"
//           },
//           {
//             id: "effectiveness",
//             title: "Effectiveness of the Pill",
//             content: "With perfect use, the pill is over 99% effective. With typical use, it's about 91% effective. Effectiveness depends on taking it consistently at the same time daily."
//           },
//           {
//             id: "benefits",
//             title: "Benefits Beyond Pregnancy Prevention",
//             content: "• Lighter, more regular periods\n• Reduced menstrual cramps\n• Lower risk of ovarian and endometrial cancers\n• May help with acne\n• Can reduce symptoms of PCOS"
//           }
//         ]
//       },
//       faqs: {
//         title: "Birth Control Pill FAQs",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are birth control pills?",
//             content: "Birth control pills are over 99% effective with perfect use and about 91% effective with typical use. Taking the pill at the same time every day improves effectiveness."
//           },
//           {
//             id: "faq-2",
//             title: "What should I do if I miss a pill?",
//             content: "Take the missed pill as soon as you remember. If you miss one pill, take it immediately and continue as normal. If you miss two or more pills, use backup contraception and consult your healthcare provider."
//           },
//           {
//             id: "faq-3",
//             title: "What are the side effects of birth control pills?",
//             content: "Common side effects include nausea, breast tenderness, headaches, and mood changes. Most side effects are mild and often improve after 2-3 months of use."
//           },
//           {
//             id: "faq-4",
//             title: "Can I take the pill while breastfeeding?",
//             content: "Progestin-only pills are safe while breastfeeding. Combination pills may affect milk supply and are usually not recommended until breastfeeding is well established."
//           },
//           {
//             id: "faq-5",
//             title: "How much do birth control pills cost?",
//             content: "Costs vary widely, from $0-50+ per month. Many insurance plans cover birth control pills at no cost. Generic versions are typically less expensive than brand names."
//           },
//           {
//             id: "faq-6",
//             title: "Do I need to take a break from the pill?",
//             content: "No, you don't need to take breaks from birth control pills. It's safe to use them continuously for years if they work well for you."
//           },
//           {
//             id: "faq-7",
//             title: "Can the pill affect my fertility?",
//             content: "Birth control pills don't permanently affect fertility. Most people can get pregnant within a few months of stopping the pill."
//           },
//           {
//             id: "faq-8",
//             title: "What medications can interfere with the pill?",
//             content: "Some antibiotics, seizure medications, and St. John's wort can reduce pill effectiveness. Always tell healthcare providers you're on the pill."
//           }
//         ]
//       },
//       reviews: {
//         title: "Birth Control Pill Reviews",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction",
//             content: "About 80% of pill users report being satisfied with their method. Satisfaction is highest among users who experience benefits beyond pregnancy prevention."
//           },
//           {
//             id: "review-2",
//             title: "Ease of Use",
//             content: "Users appreciate the simplicity of taking a daily pill, though some find daily adherence challenging. Phone apps and alarms help with consistency."
//           },
//           {
//             id: "review-3",
//             title: "Side Effect Experiences",
//             content: "Most users experience minimal side effects. Nausea and breast tenderness are most common initially but often resolve within 3 months."
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Benefits",
//             content: "Many users love having lighter, more predictable periods. Some choose extended-cycle pills to have fewer periods per year."
//           },
//           {
//             id: "review-5",
//             title: "Cost Considerations",
//             content: "Users appreciate that many insurance plans cover pills completely. Generic options make pills affordable for most users."
//           }
//         ]
//       },
//       articles: {
//         title: "Birth Control Pill Articles",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete Guide to Starting Birth Control Pills",
//             content: "Everything you need to know about beginning your pill regimen, from choosing the right type to managing initial side effects."
//           },
//           {
//             id: "article-2",
//             title: "Combination Pills vs. Progestin-Only Pills",
//             content: "Detailed comparison of different pill types to help you understand which might be better for your situation."
//           },
//           {
//             id: "article-3",
//             title: "Managing Pill Side Effects",
//             content: "Practical strategies for dealing with common side effects and knowing when to consider switching formulations."
//           },
//           {
//             id: "article-4",
//             title: "The Science Behind Birth Control Pills",
//             content: "Understanding how hormonal contraceptives work in your body and their effects on your menstrual cycle."
//           }
//         ]
//       }
//     },

//     "iud": {
//       about: {
//         title: "About Intrauterine Devices (IUDs)",
//         sections: [
//           {
//             id: "overview",
//             title: "What is an IUD?",
//             content: "An IUD is a small, T-shaped device inserted into the uterus to prevent pregnancy. It's one of the most effective forms of reversible birth control available."
//           },
//           {
//             id: "types",
//             title: "Types of IUDs",
//             content: "• Hormonal IUDs (Mirena, Skyla, Liletta, Kyleena) - release progestin\n• Copper IUD (Paragard) - hormone-free, uses copper to prevent pregnancy"
//           },
//           {
//             id: "how-it-works",
//             title: "How IUDs Work",
//             content: "Hormonal IUDs release progestin, which thickens cervical mucus and may prevent ovulation. Copper IUDs create an environment toxic to sperm and eggs."
//           },
//           {
//             id: "effectiveness",
//             title: "IUD Effectiveness",
//             content: "IUDs are over 99% effective - among the most effective reversible birth control methods. They work immediately after insertion and provide long-term protection."
//           },
//           {
//             id: "duration",
//             title: "How Long IUDs Last",
//             content: "• Mirena: 7 years\n• Liletta: 7 years\n• Kyleena: 5 years\n• Skyla: 3 years\n• Paragard (copper): 12 years"
//           }
//         ]
//       },
//       faqs: {
//         title: "IUD Frequently Asked Questions",
//         sections: [
//           {
//             id: "faq-1",
//             title: "How effective are IUDs?",
//             content: "IUDs are over 99% effective at preventing pregnancy, making them one of the most reliable forms of birth control available."
//           },
//           {
//             id: "faq-2",
//             title: "Does IUD insertion hurt?",
//             content: "Insertion involves some discomfort, similar to a strong menstrual cramp. The procedure is quick (5-10 minutes) and many providers offer pain management options."
//           },
//           {
//             id: "faq-3",
//             title: "Can I get an IUD if I haven't had children?",
//             content: "Yes! IUDs are safe and effective for people who haven't had children. This is an outdated myth that has been thoroughly debunked."
//           },
//           {
//             id: "faq-4",
//             title: "Will my partner feel the IUD during sex?",
//             content: "Your partner shouldn't feel the IUD itself. They might occasionally feel the strings, which soften over time. If this is bothersome, the strings can be trimmed."
//           },
//           {
//             id: "faq-5",
//             title: "How will the IUD affect my periods?",
//             content: "Hormonal IUDs often make periods lighter or may stop them completely. Copper IUDs may make periods heavier initially but this usually improves over time."
//           },
//           {
//             id: "faq-6",
//             title: "Can the IUD get lost inside me?",
//             content: "No, the IUD cannot get lost in your body. It stays in the uterus and cannot travel to other parts of your body."
//           },
//           {
//             id: "faq-7",
//             title: "How quickly can I get pregnant after IUD removal?",
//             content: "Fertility typically returns immediately after IUD removal. Many people can get pregnant within the first month after removal."
//           }
//         ]
//       },
//       reviews: {
//         title: "IUD User Reviews & Experiences",
//         sections: [
//           {
//             id: "review-1",
//             title: "Overall Satisfaction Ratings",
//             content: "IUDs have some of the highest satisfaction rates among birth control methods, with over 85% of users reporting they would recommend IUDs to others."
//           },
//           {
//             id: "review-2",
//             title: "Insertion Experience Reviews",
//             content: "While insertion can be uncomfortable, most users report it's tolerable and quick. Many say the long-term benefits outweigh the brief discomfort."
//           },
//           {
//             id: "review-3",
//             title: "Long-term Use Satisfaction",
//             content: "Users love the 'set it and forget it' convenience. Many report feeling more spontaneous and free from daily birth control routines."
//           },
//           {
//             id: "review-4",
//             title: "Menstrual Changes Reviews",
//             content: "Many hormonal IUD users love having lighter periods or no periods. Some copper IUD users experience heavier periods initially but adjust over time."
//           },
//           {
//             id: "review-5",
//             title: "Cost Value Reviews",
//             content: "Despite higher upfront costs, users appreciate the long-term value. When calculated per year, IUDs are often the most cost-effective option."
//           }
//         ]
//       },
//       articles: {
//         title: "IUD Articles & Resources",
//         sections: [
//           {
//             id: "article-1",
//             title: "Complete IUD Guide: Everything You Need to Know",
//             content: "Comprehensive guide covering all aspects of IUDs, from types and effectiveness to insertion and removal."
//           },
//           {
//             id: "article-2",
//             title: "Hormonal vs. Copper IUD: Which is Right for You?",
//             content: "Detailed comparison to help you decide between hormonal and non-hormonal IUD options."
//           },
//           {
//             id: "article-3",
//             title: "What to Expect: IUD Insertion and Recovery",
//             content: "Preparation tips, insertion process details, and aftercare instructions for IUD insertion."
//           },
//           {
//             id: "article-4",
//             title: "IUD Myths Debunked by Medical Experts",
//             content: "Addressing common misconceptions about IUDs with evidence-based medical information."
//           }
//         ]
//       }
//     }
//   };

// const DynamicTabsComponent = ({ contentData }) => {
//   const { route = 'home' } = useParams();
//   const [activeTab, setActiveTab] = useState('About');
//   const [activeSection, setActiveSection] = useState('');
//   const [sidebarSticky, setSidebarSticky] = useState(false);

//   const tabContentRef = useRef(null);
//   const sidebarRef = useRef(null);

//   const getContentForRoute = () => {
//     if (contentData && contentData[activeTab.toLowerCase()]) {
//       return contentData[activeTab.toLowerCase()];
//     }

//     const routeKey = route.toLowerCase().trim();
//     if (routeContentData[routeKey] && routeContentData[routeKey][activeTab.toLowerCase()]) {
//       return routeContentData[routeKey][activeTab.toLowerCase()];
//     }

//     return null;
//   };

//   const currentTabData = getContentForRoute();

//   useEffect(() => {
//     setActiveTab('About');
//     setActiveSection('');
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [route]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (tabContentRef.current && sidebarRef.current) {
//         const tabContentRect = tabContentRef.current.getBoundingClientRect();
//         const shouldBeSticky = tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
//         setSidebarSticky(shouldBeSticky);

//         const sections = tabContentRef.current.querySelectorAll('[data-section-id]');
//         let currentActiveSection = '';

//         sections.forEach(section => {
//           const rect = section.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom > 100) {
//             currentActiveSection = section.getAttribute('data-section-id');
//           }
//         });

//         if (currentActiveSection) {
//           setActiveSection(currentActiveSection);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.querySelector(`[data-section-id="${sectionId}"]`);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const tabs = ['About', 'FAQs', 'Reviews', 'Articles'];

//   const getRouteDisplayName = () => {
//     const routeNames = {
//       'home': 'Birth Control Hub',
//       'birth-control': 'Birth Control Methods',
//       'pill': 'Birth Control Pills',
//       'iud': 'Intrauterine Devices (IUDs)',
//       'implant': 'Birth Control Implant',
//       'patch': 'Birth Control Patch',
//       'ring': 'Vaginal Ring',
//       'shot': 'Birth Control Shot',
//       'condom': 'Condoms',
//       'diaphragm': 'Diaphragm'
//     };
//     return routeNames[route.toLowerCase().trim()] || route.charAt(0).toUpperCase() + route.slice(1);
//   };

//   const getCallToAction = () => {
//     const routeKey = route.toLowerCase().trim();
//     const cta = {
//       'home': {
//         title: 'Ready to Learn More?',
//         buttonText: 'Compare Methods',
//         description: 'Explore all birth control options',
//         link: '/compare-methods'
//       },
//       'birth-control': {
//         title: 'Find Your Perfect Match?',
//         buttonText: 'View All Methods',
//         description: 'Compare effectiveness and benefits',
//         link: '/birth-control/all'
//       },
//       'pill': {
//         title: 'Interested in Birth Control Pills?',
//         buttonText: 'Compare Pill Types',
//         description: 'Find the right pill for you',
//         link: '/pill/types'
//       },
//       'iud': {
//         title: 'Ready to Consider an IUD?',
//         buttonText: 'Compare IUD Options',
//         description: 'Explore hormonal vs copper IUDs',
//         link: '/iud/compare'
//       },
//       'implant': {
//         title: 'Learn More About Implants?',
//         buttonText: 'Implant Details',
//         description: 'Get comprehensive implant information',
//         link: '/implant/details'
//       },
//       'patch': {
//         title: 'Interested in the Patch?',
//         buttonText: 'Patch Information',
//         description: 'Learn about patch effectiveness',
//         link: '/patch/info'
//       },
//       'ring': {
//         title: 'Consider the Vaginal Ring?',
//         buttonText: 'Ring Details',
//         description: 'Explore ring benefits and usage',
//         link: '/ring/info'
//       },
//       'shot': {
//         title: 'Learn About the Shot?',
//         buttonText: 'Shot Information',
//         description: 'Understand injection schedules',
//         link: '/shot/info'
//       },
//       'condom': {
//         title: 'Explore Condom Options?',
//         buttonText: 'Condom Types',
//         description: 'Compare different condom varieties',
//         link: '/condom/types'
//       },
//       'diaphragm': {
//         title: 'Consider a Diaphragm?',
//         buttonText: 'Diaphragm Guide',
//         description: 'Learn about barrier methods',
//         link: '/diaphragm/guide'
//       }
//     };

//     return cta[routeKey] || cta['home'];
//   };

//   if (!currentTabData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-semibold text-gray-600 mb-4">Content Not Available</h2>
//           <p className="text-gray-500">
//             Content for route "{route}" and tab "{activeTab}" is not yet available.
//             <br />Add content for this route in the routeContentData object.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const callToAction = getCallToAction();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-teal-600 text-white py-2 px-4">
//         <div className="max-w-6xl mx-auto">
//           <span className="text-sm opacity-75">Current Section: </span>
//           <span className="font-medium">{getRouteDisplayName()}</span>
//         </div>
//       </div>

//       <div className="bg-white border-b sticky top-0 z-40">
//         <div className="max-w-6xl mx-auto">
//           <nav className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
//                   activeTab === tab
//                     ? 'border-teal-500 text-teal-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto flex gap-8 p-6">
//         <div className="w-80 flex-shrink-0">
//           <div
//             ref={sidebarRef}
//             className={`bg-white rounded-lg border p-6 transition-all duration-200 ${
//               sidebarSticky ? 'fixed top-20 w-72' : 'static'
//             }`}
//           >
//             <h3 className="font-semibold text-lg text-teal-600 mb-4">
//               {getRouteDisplayName()}
//             </h3>
//             <div className="text-sm text-gray-600 mb-4">Jump to ...</div>
//             <nav className="space-y-3">
//               {currentTabData.sections?.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => scrollToSection(section.id)}
//                   className={`block w-full text-left text-sm transition-colors hover:text-teal-600 ${
//                     activeSection === section.id
//                       ? 'text-teal-600 font-medium'
//                       : 'text-gray-600'
//                   }`}
//                 >
//                   {section.title}
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//         <div className="flex-1" ref={tabContentRef}>
//           <div className="bg-white rounded-lg">
//             <div className="p-8 pb-6">
//               <h1 className="text-3xl font-bold text-teal-600 mb-6">
//                 {currentTabData.title}
//               </h1>
//             </div>

//             <div className="px-8 pb-8">
//               {currentTabData.sections?.map((section) => (
//                 <div
//                   key={section.id}
//                   data-section-id={section.id}
//                   className="mb-12 scroll-mt-24"
//                 >
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
//                     {section.title}
//                     <div className="ml-4 h-px bg-teal-300 flex-1"></div>
//                   </h2>

//                   <div className="text-gray-700 leading-relaxed space-y-4">
//                     {section.content.split('\n\n').map((paragraph, pIndex) => (
//                       <div key={pIndex}>
//                         {paragraph.includes('•') ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph.split('\n').filter(line => line.includes('•')).map((item, iIndex) => (
//                               <li key={iIndex} className="text-gray-700">
//                                 {item.replace('•', '').trim()}
//                               </li>
//                             ))}
//                           </ul>
//                         ) : paragraph.includes('- ') ? (
//                           <ul className="list-disc list-inside space-y-2 ml-4">
//                             {paragraph.split('\n').filter(line => line.includes('- ')).map((item, iIndex) => (
//                               <li key={iIndex} className="text-gray-700">
//                                 {item.replace('- ', '').trim()}
//                               </li>
//                             ))}
//                           </ul>
//                         ) : (
//                           <p>{paragraph}</p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="px-8 pb-8">
//               <div className="bg-teal-50 rounded-lg p-6 text-center">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {callToAction.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 text-sm">
//                   {callToAction.description}
//                 </p>
//                 <Link to={callToAction.link}>
//                   <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
//                     {callToAction.buttonText}
//                   </button>
//                 </Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicTabsComponent;

import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { Twitter, Facebook } from "lucide-react";

const routeContentData = {
  home: {
    about: {
      title: "About Our Platform",
      sections: [
        {
          id: "overview",
          title: "Platform Overview",
          content:
            "Welcome to our comprehensive birth control information platform. We provide evidence-based information to help you make informed decisions about contraceptive options that best suit your lifestyle and health needs.",
        },
        {
          id: "mission",
          title: "Our Mission",
          content:
            "Our mission is to democratize access to accurate, unbiased information about birth control methods. We believe everyone deserves to make informed choices about their reproductive health.",
        },
        {
          id: "features",
          title: "What We Offer",
          content:
            "• Comprehensive method comparisons\n• Real user reviews and experiences\n• Expert medical insights\n• Up-to-date research and studies\n• Personalized recommendations",
        },
        {
          id: "reliability",
          title: "Information Reliability",
          content:
            "All our content is reviewed by certified healthcare professionals and based on peer-reviewed medical research. We update our information regularly to reflect the latest scientific findings.",
        },
      ],
    },
    faqs: {
      title: "General FAQs About Birth Control",
      sections: [
        {
          id: "faq-1",
          title: "What factors should I consider when choosing birth control?",
          content:
            "Consider your lifestyle, health history, relationship status, future pregnancy plans, and personal preferences. Factors like effectiveness, convenience, side effects, and cost are all important.",
        },
        {
          id: "faq-2",
          title: "How do I talk to my healthcare provider about birth control?",
          content:
            "Be honest about your health history, sexual activity, and concerns. Prepare questions in advance and don't hesitate to ask about different options and their pros and cons.",
        },
        {
          id: "faq-3",
          title: "Can I switch between different birth control methods?",
          content:
            "Yes, you can switch methods, but it's important to consult with your healthcare provider to ensure a smooth transition and continuous protection.",
        },
        {
          id: "faq-4",
          title:
            "What's the difference between perfect use and typical use effectiveness?",
          content:
            "Perfect use reflects effectiveness when the method is used correctly every time, while typical use accounts for human error and real-world usage patterns.",
        },
      ],
    },
    reviews: {
      title: "Platform Reviews & User Feedback",
      sections: [
        {
          id: "review-1",
          title: "User Satisfaction",
          content:
            "95% of users find our platform helpful in making birth control decisions. Users particularly appreciate the comprehensive comparisons and real user reviews.",
        },
        {
          id: "review-2",
          title: "Healthcare Provider Endorsements",
          content:
            "Many healthcare providers recommend our platform to their patients as a reliable source of contraceptive information.",
        },
        {
          id: "review-3",
          title: "Educational Impact",
          content:
            "Users report feeling more confident and informed about their birth control choices after using our platform.",
        },
      ],
    },
    articles: {
      title: "Featured Articles & Resources",
      sections: [
        {
          id: "article-1",
          title: "Complete Guide to Birth Control Options",
          content:
            "A comprehensive overview of all available contraceptive methods, their effectiveness, and suitability for different lifestyles.",
        },
        {
          id: "article-2",
          title: "Understanding Birth Control Effectiveness",
          content:
            "Learn how to interpret effectiveness rates and what they mean for your contraceptive choices.",
        },
        {
          id: "article-3",
          title: "Birth Control Myths vs. Facts",
          content:
            "Debunking common misconceptions about contraceptives with evidence-based information.",
        },
      ],
    },
  },

  "types/birth-control-shot": {
    about: {
      title: "About Birth Control Methods",
      sections: [
        {
          id: "overview",
          title: "What is the birth control shot?",
          content:
            "The birth control shot is an injectable form of contraception—administered into the arm, abdomen, thigh, or buttocks—that prevents pregnancy. Both available formulations contain progestin, a synthetic counterpart to the body’s natural progesterone. By supplying progestin, the shot inhibits ovulation (i.e., the ovaries do not release an egg). To maintain effectiveness, you receive a dose every 13 to 15 weeks (about three months). You can choose between the intramuscular version, given at a healthcare provider’s office, or the subcutaneous version, which you can self-administer just under the skin at home. The in-office injection is known as Depo-Provera (often simply called “Depo”), while the at-home option is Depo-subQ Provera. Once you’ve had the shot, you remain protected against pregnancy for three full months with no additional steps needed.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "When used properly, it’s highly reliable, provides protection for several months, remains discreet, and serves as an excellent hormonal choice for those who cannot use estrogen.",
        },
        {
          id: "effectiveness",
          title: "Effectiveness",
          content:
            "When used in the typical way, the injection provides strong protection: with perfect use it’s over 99% effective, and with typical use it’s about 96% effective.\n",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Costs can range from nothing (with insurance) up to about $200 for a three-month supply.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "The most common side effects include irregular bleeding, altered appetite, weight gain, and decreased bone density while using the shot.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The shot doesn’t protect against STIs.",
        },
        {
          id: "choosing4",
          title: "Ongoing effort",
          content:
            "You need to either visit a provider for the injection or self-administer it at home every 12 to 13 weeks.",
        },
        {
          id: "choosing5",
          title: "Types of birth control shots",
          content: "The injection does not guard against sexually transmitted infections.",
        },
        {
          id: "choosing6",
          title: "In-office shot (Depo-Provera)",
          content:
            "Most people receive their Depo injection at a clinic or health center. You simply schedule and keep routine appointments with your provider. To start on Depo, you’ll attend an appointment—your provider may perform an exam (though it’s not required)—and then administer a shot into the muscle of your arm or buttocks. Every 13 to 15 weeks, you’ll return for the next injection.",
        },
        {
          id: "choosing7",
          title: "At-home shot (Depo-subQ Provera)",
          content:
            "With the at-home option (Depo-subQ Provera), the medication comes in a version that uses a smaller needle so you—or someone you’ve been taught—can inject it just under your skin instead of into a muscle. You’ll need a prescription from your provider, and every 12–13 weeks you either pick up the dose at a pharmacy or have it mailed to you via telehealth.",
        },
      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title:
            "What are the best methods to use if I don't want to have my period?",
          content:
            "Hormonal IUDs, the birth control shot, implant, and progestin-only pills often reduce or stop periods for many users. Some individuals may stop bleeding entirely, while others might experience irregular spotting. Taking the pill or using the vaginal ring continuously is also a reliable way to skip periods altogether.",
        },
        {
          id: "faq-2",
          title: "Is it normal to feel moody because of the shot?",
          content:
            "Hormonal birth control affects everyone differently. If you notice mood changes after receiving the shot, consult your healthcare provider. You may need to switch to a different method or consider non-hormonal options. Since the shot lasts for three months and can’t be reversed in that time, your provider may offer ways to manage mood swings during this period. Don’t hesitate to explore other methods that better suit your body",
        },
        {
          id: "faq-3",
          title: "Can birth control cause weight gain?",
          content:
            "Most forms of birth control don’t cause weight gain. Research shows that the pill, patch, ring, hormonal IUD, and non-hormonal methods like condoms or the copper IUD generally don’t affect body weight. However, about 1 in 4 people using the shot may experience a weight increase of around 5% of their body weight.",
        },
        {
          id: "faq-4",
          title: "Does using birth control increase the risk of blood clots?",
          content:
            "Birth control methods containing estrogen, such as the pill, patch, or ring, slightly raise the risk of blood clots. If you have no underlying risk factors, they’re considered safe. However, if you’ve had a blood clot, stroke, heart attack, or have conditions like high blood pressure, you should avoid estrogen-based methods. Alternatives include non-hormonal options like the copper IUD and progestin-only methods like the mini-pill, implant, shot, or hormonal IUDs such as Mirena, Skyla, Liletta, and Kyleena.",
        },
        {
          id: "faq-5",
          title:
            "What birth control methods are safe for people who just gave birth?",
          content:
            "While the Paragard and hormonal methods that don’t contain estrogen—the shot, the Mirena IUD, the implant and the mini-pill—are safe for people who are postpartum to use immediately after giving birth, combination pills, which contain estrogen, shouldn’t be used until three weeks after giving birth, since estrogen can increase a postpartum person’s risk of blood clots.",
        },
        {
          id: "faq-6",
          title: "How can birth control help an ovarian cyst?",
          content:
            "One of the main ways hormonal birth control prevents pregnancy is by stopping ovulation—meaning that the egg never leaves the ovary. The pill, the patch, the ring, and the shot are the methods that are the most reliable at blocking ovulation, so people using these methods may have fewer ovarian cysts. If you tend to get ovarian cysts, your provider may recommend one of these methods to prevent future cysts. The progestin-only pill, also called the mini-pill, has an unpredictable effect on ovulation and may actually lead to more cysts. These cysts almost always disappear on their own, but if you’ve had problems with cysts in the past, the mini-pill may not be the best birth control for you.",
        },
        {
          id: "faq-7",
          title: "How much does the shot cost?",
          content:
            "Depends on your insurance status, but on average the shot costs about $25 per month (or $75 per shot).",
        },
        {
          id: "faq-8",
          title: "Does the shot protect against STIs?",
          content:
            "In a word, no. The best way to guard against sexually transmitted infections (STIs) if you’re having sex is still the good ol’ condom. If you’re concerned about both pregnancy and STIs, doubling up with the shot and condoms is a great option.",
        },
        {
          id: "faq-9",
          title:
            "I heard that hormone-filled pee is killing our fish and harming the environment. Is taking hormonal birth control bad for our water?",
          content:
            "Any form of birth control is better than no birth control when it comes to the environment. But let’s look a little closer at the claim that hormones in birth control are getting into the environment through pee. The simple answer is: yes, it is. But—and this is a big but—it is small compared to other sources of estrogen. Current research finds that the contribution of EE2 (the primary active ingredient in the pill, the ring, and the patch) to the total amount of estrogen in of our waterways is small. Bigger—much bigger—sources of estrogen in the environment come from industrial and manufacturing processes; agricultural fertilizers and pesticides; the drugs we give livestock; and the waste and runoff produced by these sources. Simply removing hormones from contraceptives will not eliminate the environmental impacts of estrogenic compounds. It’s much better to buy organic food if you can and even better to tell Congress to do its job and regulate chemicals, than to forego birth control. From Mother Earth’s standpoint, any form of birth control is better than no birth control.For purists who don’t want to add any hormones to the environment or to their body, no matter how small, there are options for you. Natural latex condoms and the copper IUD are two frequently cited examples of ultra-green contraceptives.",
        },
        {
          id: "faq-10",
          title: "Does birth control work the minute I get it?",
          content:
            "No, most forms of birth control are not effective immediately, so you want to check with you doctor before having unprotected sex. Until then, use a condom for added protection.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Anthony, 27, the shot",
          content: " 'The reason we chose that was it’s easier.' Oct 11, 2011",
        },
        {
          id: "review-3",
          title: "",
          content:
            "Anthony’s girlfriend heard about the shot from her sister, discussed it with Anthony, and decided to go for it.She works and goes to school, so remembering to take a pill every day at the same time can be tough. Now she only has to see her doctor every three months to get the shot. Plus it’s made her period super light. How does Anthony feel about the shot? He knows that birth control affects her body, so it’s her choice, and he supports any method that feels right to her.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },
  "types/implant": {
    about: {
      title: "About Implants",
      sections: [
        {
          id: "overview",
          title: "What is the implant (Nexplanon)?",
          content:
            "The implant (Nexplanon and its generic versions) is a small rod, about the size of a matchstick, that’s inserted under the skin of your upper arm (after you get numbing medication!). Once it’s inserted, it’s not visible in most cases. The implant slowly releases a single hormone, progestin, that prevents pregnancy primarily by thickening cervical mucus, making it harder for sperm and egg to meet. It’s FDA-approved to prevent pregnancy for up to three years, but research shows it’s effective for up to five years. You can always get it removed sooner if you want to.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "• Effectiveness \n• Hormones\n• Side effects\n• Cost\n •STI protection \n ",
        },

        {
          id: "choosing",
          title: "The implant might be for you if...",
          content: "",
        },
        {
          id: "choosing",
          title:
            "Effectiveness at preventing pregnancy is a top priority for you.",
          content:
            "The implant is over 99% effective at preventing pregnancy. That means that, on average, fewer than one out of every 100 people who use the implant for a year will get pregnant.",
        },
        {
          id: "choosing",
          title:
            "You don’t want to have to remember anything for your birth control to work.",
          content:
            "The implant is great if you don’t want to have to worry about taking a pill every day or switching out a ring or patch. Once the implant is in, you’re good to go for up to five years. (And you can always get it taken out before then if you want.)",
        },
        {
          id: "choosing",
          title: "You don’t mind changes to your period.",
          content:
            "Most people who get the implant have fewer, lighter periods. But some people have irregular bleeding, which may mean spotting or bleeding in between periods or having longer, heavier periods. If you do have irregular bleeding as a side effect, it may continue the entire time you have the implant.",
        },
        {
          id: "choosing",
          title: "You want a method that won’t affect your future fertility.",
          content:
            "The only birth control method that permanently affects your future fertility is sterilization. The implant does not affect your ability to get pregnant after you stop using it. In fact, soon after you have the implant removed, your body will return to whatever level of fertility is normal for you. That means you could get pregnant soon after you have the implant removed. If you’re not ready to get pregnant right after getting your implant taken out, you’ll need to use an alternative method.",
        },
        {
          id: "choosing",
          title: "How do you use the implant?",
          content:
            "The implant prevents pregnancy by slowly releasing a small amount of progestin, a hormone that primarily works to prevent pregnancy by thickening cervical mucus, which makes it harder for sperm and egg to meet. Once the implant is inserted, it just sits there, under your skin, offering protection against pregnancy for up to five years.To get the implant, first you visit a health care provider, and they get some medical info from you. Then they will give you a shot of numbing medicine under your skin where the implant will be placed. Then the health care provider will insert the implant under your skin, using a special tool made just for this purpose. While you’ll feel the numbing shot, which will sting and burn when the medicine goes in, you should not feel pain when the implant goes in.It’s important to visit a health care provider who has been trained in inserting implants. It is completely okay to ask your provider how much experience they have with inserting the implant.You’ll be set for pregnancy prevention from the moment you get the implant if any of these things are true for you: You are getting the implant during the first five days after your period starts.You were already using a hormonal method of birth control consistently before getting the implant.You had a miscarriage or abortion within the last seven days.\n 1. You gave birth within the last 21 days. If none of those things are true for you, then you’ll need to use a backup method of birth control, like condoms or internal condoms, for seven days after getting your implant. When it’s time to take the implant out, your provider will give you a shot of numbing medicine in the area of your arm where the implant is located, make a tiny cut in your skin, and remove the implant. If you want to keep using the implant as your birth control method, they can put a new one in at the same time.",
        },
      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "What's the most effective birth control method?",
          content:
            "IUDs and implants are the most effective reversible methods (over 99%). Sterilization is the most effective permanent method.",
        },
        {
          id: "faq-2",
          title: "Do I need a prescription for birth control?",
          content:
            "Some methods like condoms and spermicides are available over-the-counter. Others like pills, IUDs, and implants require a prescription.",
        },
        {
          id: "faq-3",
          title: "Can birth control affect my fertility?",
          content:
            "Most birth control methods don't permanently affect fertility. You can typically get pregnant soon after stopping most methods.",
        },
        {
          id: "faq-4",
          title: "What if I miss taking my birth control?",
          content:
            "Instructions vary by method. For pills, take the missed pill as soon as you remember. Use backup protection if you've missed multiple pills.",
        },
        {
          id: "faq-5",
          title: "Are there any birth control methods without hormones?",
          content:
            "Yes! Copper IUDs, barrier methods, fertility awareness methods, and sterilization don't use hormones.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title: "Most Popular Methods",
          content:
            "Birth control pills and IUDs are among the most popular methods, with high satisfaction rates among users.",
        },
        {
          id: "review-2",
          title: "User Preferences by Age",
          content:
            "Younger users often prefer pills or implants, while older users may choose IUDs or permanent methods.",
        },
        {
          id: "review-3",
          title: "Switching Patterns",
          content:
            "Many users try multiple methods before finding their preferred option. Common switches are from pills to IUDs or implants.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },
  "types/patch": {
    about: {
      title: "About Birth Patch",
      sections: [
        {
          id: "overview",
          title: "What is the birth control patch?",
          content:
            "The patch is a birth control method that sticks to your skin like a small Band-Aid or a patch you would use to help you stop smoking. It contains two different kinds of hormones, estrogen and progestin, that work together to prevent pregnancy. These hormones are absorbed through your skin. The main way they prevent pregnancy is by stopping ovulation from happening, which means that your ovaries don’t release an egg.All of the patch options are a little less than two inches across. Two are square and one is round, and all of them are only one color—beige. There are three names the patch is sold under: Xulane, Zafemy, and Twirla. Twirla has a lower dose of hormones than Zafemy and Xulane, but it’s still really effective at preventing pregnancy.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            "The patch is very effective the way most people use it. Perfect use: Over 99% effective Typical use: 93% effective What are perfect use and typical use?",
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "The patch contains two kinds of hormones, estrogen and progestin.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Could be as low as $0 a month (with insurance) or as high as $44 a month.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Nausea, irregular bleeding, headaches, and sore breasts are the most common side effects, but they’re usually temporary. Some people also have skin irritation when using the patch.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The patch doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to change your patch once a week.",
        },
        {
          id: "choosing6",
          title: "The birth control patch may be right for you if…",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "Effectiveness at preventing pregnancy is a top priority for you.",
          content:
            "Xulane and Zafemy are 99% effective at preventing pregnancy when used perfectly, meaning that, on average, less than one out of every 100 people using Xulane or Zafemy perfectly for a year will get pregnant. Because Twirla has a lower dose of hormones than Xulane and Zafemy, it is a little bit less effective. Twirla is 95% effective at preventing pregnancy when used perfectly (exactly as directed). That means that, on average, about five out of every 100 people using Twirla perfectly for a year will get pregnant. However, the effectiveness of the patch with perfect use is based on the experiences of people involved in clinical trials who are using the patch perfectly for an entire year. The effectiveness of the patch with typical use, which means how effective it is when real people use it in real life, where people sometimes make mistakes, is going to be more relevant for most people. In the case of the birth control patch, when it’s used as people typically use it, it is 93% effective at preventing pregnancy. That means that, on average, seven out of every 100 people using the patch for a year as most people use it will get pregnant. The effectiveness of the patch is partly dependent on body weight. Xulane and Zafemy may not be as effective if you weigh more than 198 pounds, and Twirla may not be as effective if you have a BMI of 25 or more.",
        },
        {
          id: "choosing8",
          title:
            "You want to put in relatively little effort for your birth control to work.",
          content:
            "If remembering to take a pill every day is not for you, the patch might be a good option. You only have to remember to take action once a week: put a new patch on (and take the old one off) for the first three weeks of the month, and then have one patch-free week.",
        },
        {
          id: "choosing9",
          title: "You want to know when you’ll get your period.",
          content:
            "If you feel comforted by getting your period every month—and not having random spotting or bleeding in between periods—the birth control patch could be a good choice for you. Keep in mind that when you’re on the birth control patch, the bleeding that can happen during your patch-free week is not actually a period, it’s called withdrawal bleeding. The amount of bleeding and when it comes depends on how long you’ve been on the patch and your body’s hormones. It’s common for people who have been using the patch for a while to have very light bleeding or no bleeding at all. There’s no need for concern if you stop having bleeding all of a sudden.",
        },
        {
          id: "choosing10",
          title:
            "You want to put in relatively little effort for your birth control to work.",
          content:
            "If remembering to take a pill every day is not for you, the patch might be a good option. You only have to remember to take action once a week: put a new patch on (and take the old one off) for the first three weeks of the month, and then have one patch-free week.",
        },
        {
          id: "choosing11",
          title: "You want the option to skip periods.",
          content:
            "If you want to skip a period, instead of having a patch-free week after three weeks with a patch on, you can just put a new patch on for the fourth week like you would the other three weeks of each month. You can skip a single period this way or multiple periods throughout the year. You can even skip all of your periods for a year by using a patch continuously (with no patch-free weeks). Keep in mind that you cannot just leave the third patch of the month on for an extra week—the amount of hormones in each patch is only enough to cover one week. Also, if you use the patch continuously, you will use extra patches over the course of a year, and your insurance may not pay for the extra patches.",
        },
        {
          id: "choosing12",
          title: "You want the option to skip periods.",
          content:
            "If you want to skip a period, instead of having a patch-free week after three weeks with a patch on, you can just put a new patch on for the fourth week like you would the other three weeks of each month. You can skip a single period this way or multiple periods throughout the year. You can even skip all of your periods for a year by using a patch continuously (with no patch-free weeks). Keep in mind that you cannot just leave the third patch of the month on for an extra week—the amount of hormones in each patch is only enough to cover one week. Also, if you use the patch continuously, you will use extra patches over the course of a year, and your insurance may not pay for the extra patches.",
        },
        {
          id: "choosing13",
          title:
            "You aren’t looking for STI protection, or you’re okay with combining the patch with another method.",
          content:
            "The birth control patch doesn’t offer any STI protection. So if that’s something you’re looking for, you can use condoms or internal condoms along with the patch. Dental dams and/or gloves can also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.",
        },
        {
          id: "choosing14",
          title: "You want a method that won’t affect your future fertility.",
          content:
            "You can stop using the patch anytime without having to see a health care provider. Just remember that once you stop, you will quickly return to whatever level of fertility was normal for you before being on the patch.",
        },
        {
          id: "choosing15",
          title: "You don’t need to hide your method.",
          content:
            "The patch is not one of the methods that is easy to completely hide, and it is especially hard to hide from a partner. You may be able to hide it from people who are not seeing your body without clothes, but it will depend on where on your body you put the patch. One thing to keep in mind is that both Xulane and Zafemy have their brand names printed on the patch itself, so if someone can see your patch, they can see the name of the medication you’re getting.",
        },
        {
          id: "choosing16",
          title: "It’s proven to be effective in people at your weight.",
          content:
            "We don’t know for sure, but the Xulane and Zafemy patches may be less effective if you weigh more than 198 pounds. If your BMI is 25 or greater, Twirla may be less effective at preventing pregnancy.",
        },
        {
          id: "choosing17",
          title: "You don’t have any of these risk factors.",
          content: `For most people, the risk of blood clots while using the patch is very low. However, there are some things that greatly increase your risk, like:

• Previously having had a blood clot or having certain inherited conditions that increase your risk for a blood clot.  
• Smoking cigarettes if you’re 35 years old or older.  
• Having uncontrolled high blood pressure.  
• Having heart disease or having had a heart attack or a stroke.  
• Having recently had major surgery if you won’t be able to get out of bed for a while.  
• Having migraine with aura.  
• Having had a baby less than three weeks (21 days) ago.  
• Having tested positive for antiphospholipid antibodies.  

It’s also not recommended that you use the patch if you have or have had:

• Breast cancer.  
• Serious liver disease.  
• Complications of diabetes.  
• An organ transplant.  

If you have any of these risk factors, it’s not recommended that you use either type of ring, the patch, or any of the combined hormonal birth control pills. Check with your health care provider about other options.`,
        },
        {
          id: "choosing18",
          title: "How do you use the birth control patch?",
          content: `The patch is simple to use: all you have to do is take off your old patch and put on a new one once a week, on the same day of the week, for three weeks in a row. On the day you would normally change your patch at the beginning of the fourth week, you’ll just take off the old one and not put on a new one.

For example, let’s say it’s Tuesday and you put on a new patch. Tuesday becomes your “patch change day.” In other words, your patches will always get changed (or just taken off, without putting a new one on) on Tuesdays.

You can put Zafemy and Xulane on your butt, stomach, the outer part of your upper arm, or your back, and Twirla can go on your butt, stomach, and your upper torso — never on your boobs, though. Just stick a single new patch on (and take the old one off) once a week for three weeks in a row, then go patchless (no patch) for the fourth week.

You’ll probably get a withdrawal bleed, which is like getting your period, during the patchless week, and you may still be bleeding when it’s time to put the patch back on. That’s totally normal. Put it on anyway.

How to put on and take off the patch:\n
1.  If you start the patch within five days after starting your period, you’re protected from pregnancy right away. \n
2.  If you start later, you’ll have to wait seven days after putting on the patch before you’re protected, and during that time you’ll need to use a backup method of birth control, like condoms.\n
3.  Think carefully about where you want to stick the patch — it’ll be there for a full week. Don’t put it where clothes are going to be rubbing up against it, like the waistband of your favorite jeans or your bra strap. And look for a spot where it won’t move around as much. So if you have a belly with folds, for example, that may not be the spot for you.\n
4.  Once you’ve picked a spot, make sure the skin there is clean, dry, and not irritated.\n
5.  Don’t use body lotion, oil, powder, creamy soaps (like Dove or Caress) or makeup on the spot where you’ll put your patch.\n
6.  Only peel off half of the clear plastic at first, so you’ll have a non-sticky side to hold on to.\n
7.  Don’t touch the sticky part of the patch with your fingers. It’s very, very sticky and will be hard to get off your fingers.\n
8.  Press the patch down for a full 10 seconds to get a good, firm stick.\n
9.  Check your patch every day to make sure it’s sticking right. The hormones are in the sticky stuff, so it’s super important that it’s completely stuck to your skin with no peeling at the edges and no wrinkles. Take it off and put on a brand new patch if you ever find that your patch is not fully stuck to your skin.\n
10.  If there’s a bit of lint build-up around the area where your patch was when you take it off, you can use baby oil to get it and any remaining adhesive off your skin.\n
11.  When you take a patch off, fold it in half before you throw it in the trash and never flush it down the toilet. That’ll help keep hormones out of the environment.\n
12.  Don’t put your new patch on in the same spot where your last patch was.`,
        },
        {
          id: "choosing19",
          title: "How much does the birth control patch cost?",
          content:
            "",
        },
        {
          id: "choosing20",
          title: "With insurance",
          content:
            "If you have health insurance—whether it’s from work, school, your parents, the ACA marketplace, or Medicaid—chances are good that you’ll be able to get the patch with no out-of-pocket cost.",
        },
        {
          id: "choosing21",
          title: "Without insurance",
          content:
            "If you don’t have insurance or if your plan doesn’t cover birth control, the full price of the patch can range from $30 - $44 per month. Depending on your income, you may be able to go to a low-cost clinic to get the patch for free or at reduced cost. Use our clinic finder to locate a health center near you. The manufacturers may also have discount programs, so check their websites.",
        },
        {
          id: "choosing22",
          title: "What are the side effects and benefits of the birth control patch?",
          content:
            "There are positives and negatives about each and every method of birth control. And everyone’s different—so what you experience may not be the same as what your friend experiences.",
        },
        {
          id: "choosing23",
          title: "The Positive",
          content: `There are actually lots of things about the patch that may be good for your body as well as your sex life:

• Easy to use—it’s like putting on a Band-Aid  
• Doesn’t interrupt the heat of the moment  
• Might give you more regular, lighter periods  
• May clear up acne  
• Can reduce menstrual cramps and PMS  
• Offers protection against some health problems, like endometrial and ovarian cancer, iron deficiency anemia, ovarian cysts, and pelvic inflammatory disease  
• You don’t have to see a provider to stop using it. You can just take the patch off and be done.  
• You only have to remember to do something once a week, not every day like you would with the pill.`
        },

        {
          id: "choosing24",
          title: "The Negative",
          content: `Everyone worries about side effects, but for many people, they’re not a problem. Most people who do experience side effects of the patch find that they usually go away with time. It can take a few months to adjust.

Side effects that will probably go away after two or three months:
• Bleeding in between periods  
• Breast tenderness  
• Nausea and vomiting  

Things that may last longer:
• Irritation where the patch sits on your skin – if this happens, you’ll need to stop using the patch  
• A change in your sex drive  

For a very small number of users there are risks of more serious side effects like blood clots, stroke, and heart attack. If you have abdominal pain, chest pain, a severe headache, sudden changes in your vision, or severe pain in your calf or thigh, contact your health care provider or get emergency care right away.

In addition to potential side effects, there are some disadvantages to using the patch:
• Not easy to hide  
• You have to remember to do something once a week  
• Doesn’t protect against STIs`
        },
        {
          id: "choosing25",
          title: "Where can you get the birth control patch?",
          content:
            "",
        },
        {
          id: "choosing26",
          title: "In person",
          content:
            "Because you need a prescription to get the birth control patch, you’ll need to meet with a health care provider, either via telehealth or in person. Some states let pharmacists prescribe the patch, but it’s worth doing some online research and/or calling ahead before heading to your local pharmacy.",
        },
        {
          id: "choosing27",
          title: "Online",
          content:
            "It’s easier than ever to get birth control online—including the patch. To find out what’s available where you live, check out our telehealth search tool.",
        },

      ],
    },
    faqs: {
      title: "Birth Control Patch FAQs",
      sections: [
        {
          id: "faq-1",
          title: "Will the patch come off easily? ",
          content:
            "The patch detaches in only about 2–3% of cases. If it falls off or doesn’t stick properly, replace it with a new patch immediately. Do not use adhesives or bandages to reattach it, as the hormones are part of the adhesive. Avoid creams, powders, or lotions on the application site to help it stick. If detachment continues, consider internal options like the ring, implant, or IUD.",
        },
        { 
          id: "faq-2",
          title: "Do I still need condoms if I’m using another birth control method?",
          content:
            "That depends. If you and your partner haven’t recently tested negative for all STIs, using condoms in addition to another birth control method is recommended. This practice, called dual protection, helps prevent both pregnancy and sexually transmitted infections.",
        },
        {
          id: "faq-3",
          title: "Can birth control lead to weight gain?",
          content:
            "Most people do not gain weight from birth control. The patch, pill, ring, hormonal IUD, and non hormonal options like condoms or the copper IUD don’t generally cause weight changes. However, roughly 25% of those using the shot may gain around 5% of their body weight.",
        },
        {
          id: "faq-4",
          title: "Can birth control cause blood clots?",
          content:
            "Estrogen-based methods—like the pill, patch, or ring—can increase clot risk. If you’re generally healthy with no clot-related medical history, the risk remains low. People with a history of clots or high-risk conditions should avoid estrogen and consider alternatives like progestin-only methods or the copper IUD. Speak with your provider to determine the safest choice.",
        },
        {
          id: "faq-5",
          title: "How does birth control help with ovarian cysts?",
          content:
            "By preventing ovulation, the pill, patch, ring, and shot can reduce the formation of ovarian cysts. If you’re prone to cysts, these options may be beneficial. However, the mini-pill doesn’t reliably stop ovulation and could increase cyst formation in some users.",
        },
        {
          id: "faq-6",
          title: " Does weight affect birth control effectiveness?",
          content:
            "For most methods, weight has no significant impact. However, the patch (Xulane) may be less effective for users over 198 pounds. Twirla is not recommended for those with a BMI over 30 due to reduced efficacy and higher clot risk. For emergency contraception, levonorgestrel-based pills may be less effective over 165 pounds. Ella is effective up to 194 pounds, but may be less reliable above that. Copper IUDs and hormonal IUDs (52mg) remain effective regardless of weight.",
        },
        {
          id: "faq-7",
          title: "Does the patch come in different skin tones?",
          content:
            "Currently, no. The patch is only available in one color. To minimize visibility, place it in a discreet area that remains covered by clothing",
        },
        {
          id: "faq-8",
          title: "How much does the patch cost?",
          content:
            "Without insurance, the patch averages around $55 per month. Medicaid and private insurance often reduce this cost significantly. If uninsured, clinics may offer discounts based on income. Visit the patch details page to explore affordability options in your area.",
        },
        {
          id: "faq-10",
          title: "What are the health benefits of using the patch?",
          content:
            "The patch can reduce menstrual blood flow, lessen PMS symptoms, and may improve acne. It may also lower your risk for endometrial and ovarian cancers, as well as certain benign breast conditions.",
        },
        {
          id: "faq-11",
          title: "Does the patch prevent STIs?",
          content:
            "No. The patch does not offer STI protection. If STI prevention is a concern, use condoms along with the patch for safer protection.",
        },
        {
          id: "faq-12",
          title: "Is hormonal birth control harmful to aquatic life?",
          content:
            "Hormones from contraceptives do enter waterways, but their contribution is small compared to pollutants from agriculture and manufacturing. Eliminating hormonal birth control won’t solve environmental concerns. Eco-conscious users may prefer copper IUDs or latex condoms as hormone-free alternatives.",
        },
        {
          id: "faq-13",
          title: "Is birth control instantly effective?",
          content:
            "No, most birth control methods require a short activation period. Check with your provider about when protection begins, and use condoms in the meantime for added safety.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Dara, 18, the patchv",
          content: "It’s the perfect level of hormones for me. Feb 08, 2017",
        },
        {
          id: "review-3",
          title: "",
          content:
            "Dara started taking the pill when she was in middle school to help with painful periods. When she became sexually active, she decided to get on a birth control method she wouldn’t need to remember every day. Dara chose the Xulane patch because it helps with her periods and she only needs to think about it once a week. Dara knows the patch isn’t for everyone since it may not be as effective for people over a certain weight or BMI (body mass index). She’s also aware that it doesn’t protect from STIs. (Fortunately, condoms are awesome for that.) Still, for her, the patch is a perfect fit.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/diaphragm": {
    about: {
      title: "About Diaphragm",
      sections: [
        {
          id: "overview",
          title: "What is the diaphragm?",
          content:
            "The diaphragm is a small, flexible cup made of silicone that you insert into your vagina, along with spermicide, before penis-in-vagina sex. The diaphragm covers your cervix, preventing sperm from entering your uterus and fertilizing an egg. The spermicide you use with it makes sperm less able to move. The diaphragm is reusable for up to two years, no matter how many times you use it during those two years. There are two kinds of diaphragms, a one-size-fits-most version, called Caya, and a type with multiple sizes available that has to be fitted by a provider, called Milex. The Milex diaphragm is shaped like a little bowl, and the newer Caya diaphragm is shallower and slightly curved. Caya also has a smaller, inverted dome attached to make it easier to insert and take out. One super important thing to know is that for a diaphragm to work correctly to prevent pregnancy, you need to use it with spermicide, which kills any sperm that make it past the rim of the diaphragm. You can use either over-the-counter spermicide or prescription-only spermicide (Phexxi).",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: "The diaphragm (used with spermicide) is pretty effective the way most people use it.\n\nPerfect use: 84% effective\n\nTypical use: 83% effective\n\n\nWhat are perfect use and typical use?",
        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "The diaphragm is hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Anywhere from $0 (with insurance) to $250, but you can keep using it for up to two years. Extra cost for spermicide of about $1 per dose.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Irritation or urinary tract infections are possible.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The diaphragm doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to put it in place every time you’re going to have penis-in-vagina sex and leave it in for six hours after. You can leave it in for up to 24 hours, but you have to apply a new dose of spermicide before having sex each time.",
        },
        {
          id: "choosing6",
          title: "The diaphragm might be right for you if...",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "Effectiveness at preventing pregnancy is NOT your top priority.",
          content:
            "The diaphragm is not one of the most effective methods of birth control out there. But if the diaphragm is used perfectly (exactly how the instructions say to use it), with spermicide, every single time you have penis-in-vagina sex, it’s pretty effective at preventing pregnancy. With perfect use, diaphragms are 84% effective, which means that, on average, 16 out of every 100 people using a diaphragm perfectly for a year will get pregnant. But most people have trouble using their diaphragm correctly from time to time. The effectiveness of the diaphragm with typical use, which means how real people use it in real life, is more relevant for most people than its effectiveness with perfect use. With typical use, the diaphragm is 83% effective at preventing pregnancy. That means that, on average, 17 out of every 100 people using a diaphragm for a year will get pregnant. (And of course, if you have sex without using your diaphragm at all, then it’s 0% effective at preventing pregnancy.)",
        },
        {
          id: "choosing8",
          title:
            "You want birth control without hormones.",
          content:
            "The diaphragm is a great option for people who don’t want to (or can’t) use hormones.",
        },
        {
          id: "choosing9",
          title: "You’re willing to put in some effort before having sex, every single time.",
          content:
            "In order for the diaphragm to work, you have to use it correctly, every time, no matter what.",
        },
        {
          id: "choosing10",
          title:
            "You’re comfortable touching your body.                     ",
          content:
            "Using a diaphragm involves putting your fingers inside your vagina to insert and remove it. It’s a lot like putting in a menstrual cup or menstrual disc. If you’re comfortable doing that, you should be good to go.",
        },
        {
          id: "choosing11",
          title: "You aren’t looking for STI protection, or you’re okay with combining the diaphragm with another method.",
          content:
            "The diaphragm doesn’t offer any STI protection. So if that’s something you’re looking for, you can use condoms or internal condoms along with your diaphragm. Dental dams and/or gloves also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.",
        },
        {
          id: "choosing12",
          title: "You want a method that won’t affect your future fertility.",
          content:
            "The only birth control method that permanently affects your future fertility is sterilization. The diaphragm does not affect your ability to get pregnant once you remove it from your vagina.",
        },
        {
          id: "choosing13",
          title:
            "You don’t mind a method that requires talking to your health care provider.",
          content:
            "You need a prescription to get either diaphragm, which means you’ll have to talk to a health care provider. If you are going to use the Milex diaphragm, you will have to see your provider in person. That’s because they will need to determine the right size for your body, which will involve a pelvic exam. If you’re going to use Caya, your provider won’t need to figure out the right size for you because it only comes in one size. But if you want to make sure it fits you correctly, which is the key to it being effective, a provider can check that for you and also help you learn to put it in and take it out.",
        },
        {
          id: "choosing14",
          title: "You want a method that you can stop without help from a provider.",
          content:
            "Even though you do have to see a provider to start using the diaphragm, you don’t have to see one to stop using it. Because it’s a birth control method that you only use when you’re going to have sex, you are totally in control of stopping it.",
        },
        {
          id: "choosing15",
          title: "You don’t need to hide your method.",
          content: "The diaphragm isn’t one of the birth control methods that is easy to hide completely. First of all, you have to store your diaphragm in between uses, so someone you live with may be able to find it, depending on your circumstances.\n\nHiding it from a sexual partner is possible but may be difficult. Most partners can’t feel the diaphragm when it’s in. And because you can put your diaphragm in up to one hour before having sex, you may be able to avoid your partner knowing about it. But there are a few situations that would make it harder to hide from a sexual partner:\n\n1. If you want to have sex spontaneously, you will have to interrupt the action to put the diaphragm and spermicide in before penetration. And depending on what kind of spermicide you’re using, you may have to wait 10-15 minutes after inserting it for it to become effective.\n\n2. If you put the diaphragm in and then don’t have sex until one hour or more later, you will need to put more spermicide into your vagina (without taking the diaphragm out). That’s because most types of spermicide are only effective for one hour.\n\n3. If you want to have sex again while the diaphragm is still in, you will need to insert more spermicide into your vagina (without taking the diaphragm out) before each time you have sex.",
        },

        {
          id: "choosing16",
          title: "You need a latex-free option.",
          content:
            "Neither Milex nor Caya, the two kinds of diaphragms, contains latex, so they’re perfectly safe to use if you have a latex allergy.",
        },
        {
          id: "choosing17",
          title: "You don’t have any of these risk factors.",
          content: "The diaphragm isn’t recommended if:\n\n• You’re having sex multiple times a day with different partners. There are a couple of reasons for this. The first is that you have to leave the diaphragm in for six hours after sex, but you can’t leave it in for more than 24 hours, which may be impossible depending on how many times you’re having sex in a day. The second is that spermicide can affect the cells in your vagina and cervix that help to fight off infections, and using spermicide multiple times a day puts you at higher risk of getting a sexually transmitted infection (STI).\n\n• Using spermicide irritates your vagina or vulva.\n\n• You have a history of frequent urinary tract infections (UTIs).\n\n• It’s been less than six weeks since you’ve been pregnant, and your pregnancy lasted more than 14 weeks.",
        },

        {
          id: "choosing18",
          title: "How do you use the diaphragm?",
          content: `Inserting a diaphragm may seem difficult, but it just takes a bit of practice to get it right. If you’re using a Milex diaphragm, your provider will show you how to do it when you see them to get your prescription. If you’re using Caya, a visit to your provider is optional, but they can check the fit and help you learn how to put it in and take it out.

The diaphragm can be inserted just before sex, but it can also go in up to one hour before you have sex, which means it doesn’t have to interrupt the moment. (Just remember that if you’re still having sex or haven’t started having sex yet, and it has been more than an hour since you put in the diaphragm, you’ll need to put more spermicide into your vagina.)

But no matter when the diaphragm and spermicide go in, you have to leave the diaphragm in for at least six hours after the last time you have sex in order for it to work correctly. If you’re going to have sex again before taking it out (even just a few minutes later), leave the diaphragm in place and insert more spermicide into your vagina, following the applicator instructions. Never leave your diaphragm in for more than 24 hours, and don’t use it during your period—this can lead to toxic shock syndrome.

**How to put in your diaphragm:**

1. Wash your hands well with soap and water.

2. Check your diaphragm for holes or weak spots by filling it with water. If it leaks, don’t use it—switch to another method until it’s replaced.

3. Hold the diaphragm like a little bowl, add about a teaspoon of spermicide inside, and spread a bit around the rim. Avoid film or suppository types.

4. Get into a comfortable position—one leg on a toilet seat or squatting might help.

5. Use your fingers to locate your cervix (it feels like the tip of your nose).

6. Separate your labia with one hand, pinch the diaphragm rim with the other hand and fold it in half.

7. Put your pointer finger in the middle of the fold and insert the diaphragm deep into your vagina.

8. Ensure your cervix is fully covered and the front rim is tucked behind your pubic bone. You should be able to feel your cervix through the diaphragm material.

9. After sex, leave the diaphragm in place for at least six hours before removing it.

**How to take it out:**

1. Wash your hands (or do it in the shower for easier cleanup).

2. Insert your finger into your vagina and hook it over the rim (or under the Caya dome).

3. Pull the diaphragm out gently.

4. Wash it with mild soap and warm water—never boil it or use powders/oil-based lubricants.

5. Let it air dry and store it in its case for future use.

**Tips for making it work:**

1. You can use water-based lube with your diaphragm.

2. If you have sex again within six hours, insert more spermicide beforehand. Restart the six-hour timer each time ejaculation occurs.

3. Normal activities like swimming, hot tubs, or baths are fine with the diaphragm in.

4. After vigorous sex, check that the diaphragm is still in place. If not, and ejaculation happened, consider emergency contraception.

5. Don’t use the diaphragm during your period—it increases the risk of toxic shock syndrome.

6. Never leave the diaphragm in for more than 24 hours.`
        },

        {
          id: "choosing19",
          title: "How much does the birth control patch cost?",
          content:
            "",
        },
        {
          id: "choosing20",
          title: "With insurance",
          content:
            "If you have health insurance—whether it’s from work, school, your parents, or Medicaid— chances are good that you’ll be able to get this method without having to pay anything out of pocket. Keep in mind that you need to use spermicide along with your diaphragm. Over-the-counter spermicide costs around $11 for 10 doses, and it will probably not be covered by insurance. If you use prescription-only spermicide (Phexxi), your chances are good that it will be covered by insurance, but if it’s not, or you don’t have insurance, Phexxi can cost up to $389 out of pocket for a box of 12 one-time use, pre-filled applicators.",
        },
        {
          id: "choosing21",
          title: "Without insurance",
          content:
            "If you don’t have insurance or if you’re on a plan that doesn’t cover birth control, diaphragms can cost anywhere from $85-250 out of pocket. If you need help paying to get the diaphragm, check with the sexual and reproductive health center(s) near you and find out if they offer free or low-cost birth control (most do).",
        },
        {
          id: "choosing22",
          title: "What are the side effects and benefits of the birth control patch?",
          content:
            "There are positives and negatives about each and every method of birth control. And everyone’s different—so what you experience may not be the same as what your friend experiences.",
        },
        {
          id: "choosing23",
          title: "The Positive",
          content: `There are lots of things about birth control that are good for your body as well as your sex life. Here are some of the benefits of the diaphragm:

• You can put the diaphragm in up to an hour in advance of having sex.

• You can have sex as many times as you like while it’s in (you just have to apply more spermicide before each time).

• Neither you nor your partner should be able to feel it during sex.

• It doesn’t affect your hormones.

• You can use it while you’re breastfeeding.`
        },


        {
          id: "choosing24",
          title: "The Negative",
          content: `It’s normal to think about side effects, but for many people, they’re not a problem. However, some side effects may include:

• Vaginal irritation caused by the spermicide that you use with the diaphragm  
• Frequent urinary tract infections

In addition to potential side effects, there may be some disadvantages to using the diaphragm:

• May interrupt sex  
• Requires a prescription  
• Offers no protection against STIs, and spermicides that are used with the diaphragm can cause irritation and increase the risk of getting an STI  
• May require an in-person visit to your provider, depending on which diaphragm you get, if you give birth or your weight changes by more than 15 pounds`
        },

        {
          id: "choosing25",
          title: "Where can you get the birth control patch?",
          content:
            "",
        },
        {
          id: "choosing26",
          title: "",
          content:
            "You need a prescription from a health care provider to get the diaphragm, whether you’re using Caya or Milex. You may be able to get the diaphragm directly from a health care provider, or get a prescription for Caya filled at most major drugstores, while Milex may have to be ordered from a medical supply store. You can also get Caya delivered to you by the manufacturer after having a telehealth visit.",
        },


      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "What's the most effective birth control method?",
          content:
            "IUDs and implants are the most effective reversible methods (over 99%). Sterilization is the most effective permanent method.",
        },
        {
          id: "faq-2",
          title: "Do I need a prescription for birth control?",
          content:
            "Some methods like condoms and spermicides are available over-the-counter. Others like pills, IUDs, and implants require a prescription.",
        },
        {
          id: "faq-3",
          title: "Can birth control affect my fertility?",
          content:
            "Most birth control methods don't permanently affect fertility. You can typically get pregnant soon after stopping most methods.",
        },
        {
          id: "faq-4",
          title: "What if I miss taking my birth control?",
          content:
            "Instructions vary by method. For pills, take the missed pill as soon as you remember. Use backup protection if you've missed multiple pills.",
        },
        {
          id: "faq-5",
          title: "Are there any birth control methods without hormones?",
          content:
            "Yes! Copper IUDs, barrier methods, fertility awareness methods, and sterilization don't use hormones.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Justin, 27, diaphragm",
          content: " 'It’s kind of a little more streamlined.' \n Oct 11, 2011 Updated: Jul 07, 2015",
        },
        {
          id: "review-3",
          title: "",
          content:
            "In the beginning, they were cautious about STIs and pregnancy, so they used condoms to protect against both. Now, as an exclusive couple with a clean bill of health, they use a diaphragm and go condom-free. (Except when she’s ovulating; that’s when they double up because women are more susceptible to getting pregnant around the time of ovulation.) In the heat of the moment—if his girlfriend hasn’t already inserted it—Justin admits that a diaphragm does require a certain level of accountability because they have to stop and put it in. But he also says the extra sensation from not having to wear condom is a very worthwhile perk.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/internal-condom": {
    about: {
      title: "About Internal-Condom",
      sections: [
        {
          id: "overview",
          title: "What is the internal condom (FC2)?",
          content:
            "The internal condom (sold under the brand name FC2) is a pouch that feels and works a lot like the external condom, which is usually just referred to as a “condom.” Internal condoms are a type of barrier method of birth control, which means that they prevent pregnancy by physically blocking sperm from getting to eggs. Internal condoms are bigger than external condoms, since they’re designed to sit inside the vagina, with part that stays on the outside. When ejaculation happens, the semen (the whitish fluid that comes out of the penis and contains the sperm) stays inside the internal condom and out of direct contact with the vagina. This keeps sperm away from any eggs. Internal condoms can each only be used one time, just like external condoms. Internal and external condoms are the only birth control methods that can also protect against STIs. The biggest difference between the internal and external condom is that the internal condom sits inside the vagina while the external condom fits snugly over the penis. Also, internal condoms are not as easy to get as external condoms. You have to see a provider to get a prescription for internal condoms  Internal condoms are also used by some people for anal sex, both to help prevent STI transmission and to make things as mess-free as possible.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: `Internal condoms are pretty effective the way most people use them.\n
• Perfect use: 95% effective\n
• Typical use: 79% effective\n\n
What are perfect use and typical use?`
        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "Internal condoms are hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "As low as $0 (with insurance) or as high as $3 per internal condom.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "If you’re sensitive, they could cause a little irritation. They may reduce sensation slightly when you’re having sex.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Internal condoms can offer STI protection as well as pregnancy prevention.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to make sure to use internal condoms correctly every time in order for them to be effective at preventing pregnancy and STIs.",
        },
        {
          id: "choosing6",
          title: "The internal condom might be right for you if…",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "You want birth control without hormones.",
          content:
            "If you are looking for pregnancy prevention but don’t want to use hormones, internal condoms may be a good option for you.",
        },
        {
          id: "choosing8",
          title:
            "You’re willing to put in some effort before having sex, every single time.",
          content:
            "You have to make sure to use internal condoms correctly, every time, no matter what, in order for them to be effective at preventing pregnancy and STIs. If you do use them perfectly (exactly how the instructions say to use them) every single time you have penis-in-vagina sex, internal condoms are pretty effective. With perfect use, internal condoms are 95% effective, which means that, on average, five out of every 100 people using internal condoms perfectly for a year will get pregnant. The problem is that most people have trouble using internal condoms perfectly every time they have sex. The effectiveness of internal condoms with typical use, whichmeans how real people use them in real life, is more relevant for most people than their effectiveness with perfect use. With typical use, internal condoms are 79% effective at preventing pregnancy. That means that, on average, 21 out of every 100 people using internal condoms for a year will get pregnant. (And of course, if you don’t use an internal condom at all when you have sex, then it’s 0% effective at preventing pregnancy. Because internal condoms are hard to use perfectly every time, and because their effectiveness is so much lower when they’re not used perfectly every time, internal condoms are not considered one of the most effective methods of birth control out there. Internal condoms can also be used with other birth control methods to reduce the chances of pregnancy. The only methods internal condoms can’t be used with are those that go into the vagina, which include external condoms, the diaphragm, the cervical cap, and the ring).",
        },
        {
          id: "choosing9",
          title: "You want protection from STIs.",
          content:
            "Internal condoms help protect you and your partner from most sexually transmitted infections (STIs), including HIV. One advantage of internal condoms over external condoms is that they can cover some of the external genitalia (the vulva) because they have a part that stays outside the body. This lowers the risk of STIs that are passed along by skin-to-skin contact, like herpes, syphilis, and HPV.",
        },
        {
          id: "choosing10",
          title:
            "You don’t need to hide your method.",
          content:
            "It’s not easy to hide that you’re using internal condoms. While you may be able to hide them from people you live with, internal condoms do have to be thrown in the trash along with their wrappers after you use them, so if people you live with can see or access your trash, they may find out you’re using internal condoms. Sexual partners with a penis will probably be able to see and/or feel that you are using an internal condom.",
        },
        {
          id: "choosing11",
          title: "You want a method that won’t affect your future fertility.",
          content:
            "The only birth control method that permanently affects your fertility is sterilization. The internal condom does not affect your ability to get pregnant after you or your partner remove it. That’s why you have to use an internal condom every time you have sex—they don’t give you any lasting protection against pregnancy. (And don’t forget each internal condom can only be used one time.)",
        },
        {
          id: "choosing12",
          title: "You want a method that you can stop without help from a provider.",
          content:
            "You’ll need to get a prescription to get internal condoms, but you don’t need to see a provider to stop using them—you can just stop whenever you want. Just remember that you’ll need to start using another method of birth control right away if you don’t want to become pregnant.",
        },
        {
          id: "choosing13",
          title:
            "You’re in between methods or made a mistake with your usual method.",
          content:
            "Internal condoms are great in a pinch. If you can’t make it to the pharmacy for your birth control refill, or you realize you’ve missed a pill (or missed a step with another form of hormonal birth control), you can always use an internal condom. However, you need a prescription to get internal condoms, so it’s a good idea to get some now to have on hand if you need them in the future. For mistakes with hormonal birth control methods, as well as when you start on a hormonal birth control method, you may need to use internal condoms, condoms, or another backup form of birth control for 7 days, so check with a provider or read the instructions that came with your hormonal method to find out. You may also want to use emergency contraception if you make a mistake with your birth control and then have unprotected sex.",
        },
        {
          id: "choosing14",
          title: "You need a latex-free option.",
          content:
            "Internal condoms are made of nitrile (a synthetic rubber), so you can use them if you or your partner(s) are allergic to latex. Because they’re made of nitrile, one perk of internal condoms is that you can use oil-based lubricants with them, unlike with other kinds of condoms. So if you’ve been wanting to try coconut oil as lube, the internal condom may be just the thing for you.",
        },
        {
          id: "choosing15",
          title: "External condoms aren’t working for you and/or your partner.",
          content:
            "If using an external condom just isn’t working for you or your partner, but you still want protection against STIs, the internal condom is the way to go.",
        },
        {
          id: "choosing16",
          title: "How do you use internal condoms?",
          content: `Internal condoms may take a bit of practice to use, but once you know how to do it, they’re actually pretty easy to use.\n
• How to insert an internal condom:\n
1. Open the package. You’ll see what looks like a thin, tube-shaped bag, with an opening on one end and a flexible ring on the other end, which is closed.\n
2. Add lube to the outside of the internal condom if you want, to make inserting it easier. You could also put some spermicide on the closed end as well if you want extra protection from pregnancy. Adding lube inside the internal condom too can make sex more pleasurable for the person with a penis, and it can also help prevent the condom from breaking.\n
3. Get comfy, like you’re going to put in a tampon or menstrual cup.\n
4. Put your index and/or middle finger into your vagina and feel for your cervix, so you’ll know how far in to push the closed-end ring. Your cervix will feel sort of hard but squishy, like the tip of your nose.\n
5. Squeeze the sides of the closed-end ring together.\n
6. Insert it into your vagina like you would a menstrual cup or tampon with no applicator. Push the closed-end ring as far into your vagina as it’ll go, all the way up to your cervix. Some people place the internal condom over a dildo or penis and put it in place by inserting the toy or penis, but it can be harder to tell if it’s placed correctly if you do it this way.\n
7. Pull out your finger and let the open end of the internal condom hang about an inch outside your vagina. The outer ring helps keep the internal condom in place and helps protect you from STIs that are transferred through skin-to-skin contact by covering part of your vulva.\n\n
• Some tips for using internal condoms:\n
1. Don’t use an internal condom and an external condom at the same time. You might think using both would double your protection, but it will actually make it more likely that both will tear. So just pick one to use every time you have sex.\n
2. Use one internal condom per ejaculation. You will need a brand new one if you want to keep having penis-in-vagina sex after the person with a penis ejaculates. Never rinse out an internal condom and reuse it—this can make it not work as well.\n
3. Put in a new internal condom if you switch between types of sex, even if the person with a penis hasn’t ejaculated. That means that you will need a new condom if you are switching from anal to vaginal sex or from vaginal to anal sex.\n
4. Make sure to hold the outside part of the internal condom open when you’re inserting a penis or a toy. That will keep it from getting pushed inside the vagina entirely. Don’t worry if it moves side to side while you’re having sex. That’s normal. But if your partner slips out of the condom and into your vagina, stop sex, remove the internal condom, and insert a new one. But if they ejaculate outside of the internal condom and into your vagina by accident, you may want to consider emergency contraception.\n
5. If you’re using an internal condom for anal sex, the steps are basically the same. The only difference is that some people like to remove the ring from inside the closed end of the condom to make it more comfortable.\n\n
• How to remove an internal condom:\n
1. Hold the outer ring and twist the part of the internal condom that is outside of your body closed like a baggie, so semen doesn’t spill out.\n
2. Pull the condom out gently.\n
3. Throw it away in a trash can (preferably one that is out of the reach of children and pets). Don’t flush it down the toilet.\n
4. Make sure the partner with a penis washes their penis with soap and water if it’s going to come into contact with the vulva again.`
        },



        {
          id: "choosing19",
          title: "How much do internal condoms cost?",
          content:
            "",
        },
        {
          id: "choosing20",
          title: "With insurance",
          content:
            "Because the internal condom is a prescription birth control method, if you have health insurance—whether it’s from work, school, your parents, or Medicaid— chances are good that you’ll be able to get it without having to pay anything out of pocket.",
        },
        {
          id: "choosing21",
          title: "Without insurance",
          content:
            "If you don’t have insurance or if you’re on a plan that doesn’t cover internal condoms, they cost between $2 and $3 per condom, and they usually come in packs of 12 or 24. If you need help covering the cost of the internal condom, there may be options. Check with local clinics, health departments, and nonprofits to find out if they offer free internal condoms and other kinds of birth control (most do). FC2, the company that makes the internal condom, also has a program that offers reduced price internal condoms to those who qualify.",
        },
        {
          id: "choosing22",
          title: "What are the side effects and benefits of internal condoms?",
          content:
            "Every birth control method has pros and cons—and everyone’s experience is different.",
        },
        {
          id: "choosing23",
          title: "The Positive",
          content: `There are lots of things about birth control that are good for your body as well as your sex life. Here are some of the benefits of the internal condom:\n
• Benefits:\n
1. They help protect you from STIs.\n
2. The outer ring may stimulate the clit of the person with a vagina.\n
3. They can be used even if you’re allergic to latex.\n
4. They can be used with oil-based lube (as well as water-based and silicone-based lube).\n
5. They stay in place even if your partner loses their erection, unlike external condoms.\n
6. Because internal condoms require a prescription, insurance may cover the cost.`
        },
        {
          id: "choosing24",
          title: "The Negative",
          content: `Internal condoms may cause irritation for some people who are sensitive. In addition to this possible side effect, there are some disadvantages:\n
• Disadvantages:\n
1. They can be a little tricky to get the hang of.\n
2. They may reduce sensitivity while you’re having sex.\n
3. You have to remember to use one every time you have sex.\n
4. They’re not as easy to get as external condoms because you need a prescription.`
        },

        {
          id: "choosing25",
          title: "Where can you get internal condoms?",
          content:
            "You can visit a health care provider in person or via telehealth to get a prescription for internal condoms, and then you can pick up your prescription at a local pharmacy or have it mailed to you. You can also get them through the FC2 website, which offers a telehealth service to provide you with a prescription and ship the internal condoms to you. Some nonprofits and health centers will provide them for free. FC2 is the only FDA-approved internal condom in the U.S.. You may find other brands of internal condoms online, but they are not FDA-approved so we don’t know how well they work to prevent pregnancy or STIs.",
        },


      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "Is anal sex safer than vaginal sex?",
          content:
            "It depends on what you mean by safer. You can’t get pregnant from having anal sex, but anal sex without a condom or internal condom has one of the highest risks of STIs of any kind of sex. The skin of the anal cavity is made up of permeable mucous membranes which means it’s more delicate and absorbs more than regular skin, including the bacteria and viruses that cause STIs. And small tears and cuts are common during anal sex—especially if you’re not using enough lube—which creates additional points of entry for bacteria and viruses and increases the receiving partner’s chances of getting an STI from anal sex. To protect yourself while having anal sex, use plenty of lube and a barrier method, like condoms or internal condoms with the inner ring removed (just not both types of condoms at the same time).",
        },
        {
          id: "faq-2",
          title: "What's the deal with double bagging?",
          content:
            "When it comes to condoms, two is definitely not better than one. Using two condoms or a condom and an internal condom at the same time can create more friction, which increases the chances the condom(s) will break. If you want extra pregnancy prevention, double up with a condom and an effective method of birth control.",
        },
        {
          id: "faq-3",
          title: "How much does the internal condom cost?",
          content:
            "Internal condoms are a little pricier than their male counterparts—in an online search we found that they cost approximately $3.50 per condom, though that may be higher or lower than the cost at a retail location. You should also check with your local family planning clinics and find out if they offer free or low-cost internal condoms and other kinds of birth control (most do).",
        },
        {
          id: "faq-4",
          title: "I'm tired of using condoms, is there another birth control method that will also protect me from STIs?",
          content:
            "Yes, try using an internal condom. It’s a barrier method that’s inserted into the vagina (instead of covering the penis, like an external condom) that will help protect against sexually transmitted infections (STIs) as well.",
        },
        {
          id: "faq-5",
          title: "What types of lube are safe to use with latex condoms?",
          content:
            "Both water-based and silicone-based lubricants are totally safe to use with latex condoms. Steer clear of oil-based lubricants (including massage oil, hand lotion, and Vaseline) that can cause condoms to break.",
        },
        {
          id: "faq-6",
          title: "Can I reuse a condom?",
          content:
            "Condoms are definitely not reusable. You need to put on a new one each and every time you have sex.",
        },
        {
          id: "faq-7",
          title: "What types of birth control are available over the counter?",
          content:
            "Condoms, internal condoms, spermicide, and emergency contraception are all available at your nearest pharmacy.",
        },
        {
          id: "faq-8",
          title: "Do condoms prevent HPV?",
          content:
            "HPV cannot pass through a latex condom. But this is the kicker: HPV is frequently carried on skin not covered by condoms. So condoms can help prevent HPV, but they’re not a guarantee.",
        },
        {
          id: "faq-9",
          title: "Can I tell if someone else has an STI?",
          content:
            "No. It’d be great if you could tell who had an STI (sexually transmitted infection, a.k.a. STD) and who didn’t, but the most common symptom of all STIs is no symptom at all. STIs are often asymptomatic or display such mild symptoms they go unnoticed and/or are mistaken for something else. For that reason, most people with an STI are unaware they have one.When STIs are asymptomatic or exhibiting mild symptoms, they’re still transmittable to others—and there’s no guarantee the STI will remain asymptomatic in the newly infected individual. Recognizable symptom or not, STIs can wreak havoc internally long before we’re aware of their effects; untreated asymptomatic STIs can pose long-term health risks like liver damage (eg. Hepatitis) and infertility (eg. Chlamydia and gonorrhea). To protect yourself against STIs, use condoms or internal condoms.",
        },
        {
          id: "faq-10",
          title: "How common are STIs?",
          content:
            "1 in 2 people will contract a sexually transmitted infection (STI) by the time they reach the age of 25—some curable, some not. An astounding 20 million people in the U.S. contract an STI every year, and those are only the STIs which get reported. That number is likely much higher due to under-reporting and many STIs not getting reported at all—some are diagnosed visually, and others are not documented by the Centers for Disease Control and Prevention (CDC). Of the 30-plus STIs out there, the CDC only reports on about 8 of them. Things like pubic lice, scabies, and HPV infections among guys are not part of those numbers.",
        },
        {
          id: "faq-11",
          title: "Is birth control available over the counter?",
          content:
            "In the U.S. the only forms of birth control available over the counter (OTC) are condoms, internal condoms, spermicide, the sponge, and emergency contraception pills. There’s been some debate about whether birth control pills should be sold OTC too as they are in many other countries, but for now you need a prescription. If you’re looking for a method that requires a prescription, visit your local health clinic or find the nearest one here.",
        },
        {
          id: "faq-12",
          title: "I’ve heard the internal condom can be stimulating—is that true?",
          content:
            "It’s true the internal condom can provide protection and pleasure all in one. The internal ring can sometimes stimulate the head of your partner’s penis, while the outer ring can provide extra stimulation to the clitoris.",
        },

      ],
    },
    reviews: {
      title: "Internal-condoms  Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Sean, 33, internal condom",
          content: "' It almost feels like—almost—like there’s no condom there.' ",
        },
        {
          id: "review-3",
          title: "Oct 11, 2011 Updated: Jun 24, 2015",
          content:
            "Sean’s girlfriend had a reaction to regular condoms, so she suggested they try the internal condom. He couldn’t believe how big of a difference it made. Both of them feel more free during sex with the internal condom and they like that putting it in is a little bit of foreplay. Sean also says that the internal condom is almost like not using a condom at all because of the increased sensation.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/fertility-awareness": {
    about: {
      title: "About fertility awareness methods",
      sections: [
        {
          id: "overview",
          title: "What are fertility awareness methods (FAMs)?",
          content:
            "Fertility awareness methods (also sometimes called FAMs, “natural family planning,” or “the rhythm method”) are all about tracking your body’s signs and symptoms to determine which days of the month you can get pregnant, also known as your fertile days. To find out when your fertile days are, you’ll need to pay very close attention to your body and its patterns, and you’ll also need to keep careful track of what’s happening. There are several different signs and symptoms of fertility that you can track, and there are multiple ways to monitor them.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: `Pretty effective the way most people use them (but they’re not the easiest to use).

Perfect use: 95 to over 99% effective

Typical use: 77 to 98% effective

What are perfect use and typical use?`,
        },


        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "FAMs don’t affect your hormones at all.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "It’s free!",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "None",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Fertility awareness doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "Using a fertility awareness method requires a lot of effort including monitoring, tracking, and planning–plus you’ll need to use another method on fertile days.",
        },
        {
          id: "choosing6",
          title: "Fertility awareness methods might be right for you if…",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "You’re willing to put in a lot of effort for your birth control method to work.",
          content:
            "FAMs only work as a birth control method if you use them consistently, and if you avoid penis-in-vagina sex on your fertile days, so they take a lot of work and self-control to use effectively. Fertility awareness methods are most effective when you can work with your sexual partner(s). Both of the people having penis-in-vagina sex need to be committed to using FAMs consistently. When fertility awareness methods are used perfectly (with no mistakes, such as having sex without a barrier method on a fertile day), they range from 95 to over 99% effective at preventing pregnancy. That means that, on average, between five and fewer than one out of every 100 people using FAMs perfectly will get pregnant within a year. Keep in mind though that for most people, fertility awareness methods are hard to use perfectly. And when FAMs are used as people typically use them (which means NOT perfectly), they range from 77 to 98% effective. That means that, on average, between 23 and two out of every 100 people using FAMs for a year, as people typically use them, will get pregnant. So having emergency contraception on hand is a good idea in case things don’t go as planned.",
        },
        {
          id: "choosing8",
          title:
            "You don’t mind using it with another method to make it as effective as possible.",
          content:
            "The effectiveness of fertility awareness methods relies upon not having penis-in-vagina sex without using another form of birth control on your fertile days. You can skip penis-in-vagina sex, you can use the pull-out method, or you can use a barrier method like condoms or a diaphragm. The only kinds of birth control you can’t effectively combine with FAMs are hormonal methods, like the combination pill, the patch, and the ring.",
        },
        {
          id: "choosing9",
          title: "You want a method of pregnancy prevention with no hormones.",
          content:
            "FAMs are a hormone-free way of preventing pregnancy.",
        },
        {
          id: "choosing10",
          title:
            "You still want to get a period.",
          content:
            "FAMs have no effect on your period—they don’t change your menstrual cycle at all.",
        },
        {
          id: "choosing11",
          title: "You’re comfortable touching your body",
          content:
            "One sign of fertility that many people use to track their menstrual cycles is cervical mucus. Using your cervical mucus involves putting your fingers into your vagina and examining the cervical mucus on your fingers when you pull them out. There are other signs that you can track that don’t involve fluids, like temperature, but it’s most effective to take an approach that involves tracking multiple signs. And FAMs are all about learning from your body.",
        },
        {
          id: "choosing12",
          title: "You aren’t looking for STI protection, or you’re okay with combining FAMs with another method.",
          content:
            "Fertility awareness methods don’t offer any STI protection. So if STI protection is something you’re looking for, you can use condoms or internal condoms along with a FAM. Dental dams and/or gloves also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.Fertility awareness methods don’t offer any STI protection. So if STI protection is something you’re looking for, you can use condoms or internal condoms along with a FAM. Dental dams and/or gloves also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.",
        },
        {
          id: "choosing13",
          title:
            "You want a method that won’t affect your future fertility.",
          content:
            "The only birth control method that permanently affects your fertility is sterilization. Fertility awareness methods only affect your ability to get pregnant during the time that you are using them to avoid penis-in-vagina sex during your fertile days every cycle.",
        },
        {
          id: "choosing14",
          title: "You want a method that you can start and stop without help from a provider.",
          content:
            "You don’t need to see a provider to start or stop using FAMs. But if you do stop using a fertility awareness method, and you don’t want to be pregnant, make sure you have another method of birth control in place. If you’re interested in a FAM and want to make sure you’re using it correctly, some family planning clinics, health care providers, and other organizations offer in-person and online classes to help you learn how to use FAMs correctly. You can also speak to your provider directly for help.",
        },
        {
          id: "choosing15",
          title: "You feel comfortable talking to your partner(s) about sex.",
          content: "Choosing to use a FAM to prevent pregnancy will be more effective if you have open communication with any sexual partners, both before and during sex. So you’ll need to feel comfortable talking in detail about sex so that you and your partner can agree on how you’ll handle sex on fertile days.",
        },

        {
          id: "choosing16",
          title: "You want to keep your birth control private BUT not from your partner.",
          content:
            "Though FAMs do involve tracking your menstrual cycle on a calendar or in other ways, it is possible to do so in a way that people you live with will not be able to find out about. There are no prescriptions, pill packs, used condoms in the trash, or any other signs that you’re using a FAM that someone you live with could see. However, it is harder to hide that you’re using a FAM from a sexual partner because during fertile days, you will need to use a barrier method or the pull-out method, or avoid penis-in-vagina sex.",
        },
        {
          id: "choosing17",
          title: "You have a menstrual cycle that is between 26 and 32 days.",
          content: "An average cycle, from the first day of your period to the day before your next period, is 28 days. While it can be normal to have a menstrual between 21 and 35 days long, for fertility awareness methods to be effective, your cycle needs to be between 26 and 32 days long. If your cycle is shorter or longer than that more than twice during a year, fertility awareness methods won’t be effective.",
        },

        {
          id: "choosing18",
          title: "How do you use fertility awareness methods?",
          content: `To use a fertility awareness method, the first step is to understand the phases of the menstrual cycle. Each phase is triggered by natural changes in your hormones. Every new menstrual cycle starts with your period. Day one of your period is day one of that cycle. An average cycle, from the first day of your period to the day before your next period, is 28 days, but it can be longer or shorter and still be considered normal.

During the first phase of your cycle, your uterus prepares for a potential pregnancy. Then you ovulate, which means that your body releases an egg from one of your ovaries, making it available for fertilization, which happens when the egg meets up with sperm. If fertilization doesn’t happen and a pregnancy doesn’t start, then after 14 days the lining of your uterus sheds—this is your period. If a pregnancy does start, the lining of your uterus doesn’t shed, meaning that you don’t get a period. A missed period is often the first sign of pregnancy people notice.

You can only get pregnant from penis-in-vagina sex on six days during your menstrual cycle—the five days before you ovulate and the 24 hours after ovulation. These are your fertile days. You can prevent pregnancy by not having penis-in-vagina sex without using another birth control method on those days.`
        },

        {
          id: "choosing19",
          title: "Signs of fertility",
          content: `All of the fertility awareness methods involve learning and tracking the signs that you are fertile so that you can avoid the kind of sex that can get you pregnant on your fertile days. There are a few different signs of fertility that you can track, and the most effective way to use fertility awareness methods is to track more than one of these signs at the same time.

It’s important to know that no fertility awareness method can tell you for sure exactly when you’re ovulating. But if you track more than one sign of fertility, your chances of predicting when you’ll ovulate will be better.`
        },

        {
          id: "choosing20",
          title: "Menstrual cycle",
          content: `If your menstrual cycle is regular, ovulation happens on approximately the same day every cycle. Having a regular menstrual cycle means that your cycle is between 26 and 32 days long and that your cycles are close to the same length every month. If you have a regular, 28-day cycle, ovulation is most likely happening in the middle of your cycle, between days 12 and 16. One way of preventing pregnancy is by tracking your menstrual cycles over a few months, determining when you think ovulation is happening, and then not having penis-in vagina sex without using another method of birth control on the days you’re most likely to be fertile, which are usually days 8 through 19. In order for this method to work for you, your menstrual cycle must be between 26 and 32 days long.`
        },

        {
          id: "choosing21",
          title: "Cervical mucus",
          content: `Cervical mucus (CM) is naturally produced by your body and changes over the course of your menstrual cycle in response to changes in your hormone levels. Cervical mucus comes out of your cervix and then leaves your vagina as discharge.

You can monitor changes in your cervical mucus on a daily basis to check for the type of mucus that happens around the time of ovulation. To monitor your cervical mucus, you will put your finger or fingers inside your vagina, pull them out, and look at and feel the mucus left behind on them. While you have your cervical mucus on your fingers, you can rub the tips of your fingers together and separate your fingers to see and feel the consistency of the mucus.

You can get pregnant from the time when your cervical mucus is clear, stretchy, and slippery (like the consistency of egg whites), until three days after you stop having this kind of mucus. Using cervical mucus to track fertility doesn’t rely on having a regular menstrual cycle, but it is most effective at preventing pregnancy when you are also tracking other signs of fertility.

Keep in mind that infections like bacterial vaginosis, yeast, or STIs like trichomoniasis can change your discharge, making it hard to interpret your cervical mucus. If you know you have an infection or if you think you might, it’s best not to rely on your cervical mucus for predicting your fertile days.`
        },
        {
          id: "choosing22",
          title: "Basal body temperature (BBT)",
          content: `Your basal body temperature (BBT) is your temperature when your body is completely at rest. BBT changes during your menstrual cycle in response to your hormone levels—it’s lower before ovulation and higher from the time you ovulate until you get your period. After you get your period your temperature will drop again. (And if your temperature doesn’t drop, that may be an early sign that you’re pregnant.)

To track your BBT, you’ll take your temperature around the same time every day (after at least six hours of uninterrupted sleep) before you get out of bed with a special, super accurate thermometer. Make sure you get a thermometer that reads to the hundredth decimal place (meaning that it shows two numbers after the decimal point, like 98.62), because the changes in your body temperature that you need to track over your cycle can be that tiny. You’ll write down your daily temperature for a few months, and once you determine what your baseline temperature is, having three continuous BBT measurements more than 0.40 degrees above your baseline indicates you have ovulated and are out of the fertile window after ovulation.

That means that while you may be able to use BBT to confirm that you are in the phase of your cycle between ovulation and your period, it won’t tell you when you are in the five fertile days BEFORE you ovulate. That’s why this method works best when you’re also monitoring your cervical mucus and tracking your menstrual cycle on a calendar. This combination of fertility awareness methods will help you not only predict when you are going to ovulate before it happens but also know when you have ovulated, so you can avoid having sex on all of your fertile days.`
        },
        {
          id: "choosing23",
          title: "Hormones",
          content: `Your hormones naturally rise and fall during your menstrual cycle, and two hormones—luteinizing hormone (LH) and one type of estrogen (EG3)—can be detected in your urine before ovulation. You can use over-the-counter urine test strips and digital kits that check for either LH only or for both LH and EG3 to predict when you are going to ovulate. One important thing to know about tracking your hormones in this way is that LH only rises 24 to 36 hours before ovulation, but you can get pregnant for five days leading up to ovulation. EG3 rises one or two days before LH and usually signals the start of the fertile window. So combining hormone tracking with another fertility sign, like cervical mucus, can make pregnancy prevention with fertility awareness more effective.`
        },
        {
          id: "choosing24",
          title: "Breastfeeding as birth control",
          content: `Breastfeeding is another way to naturally suppress fertility. You can use this method if: 1) you’ve had a baby in the last six months, 2) your baby is fully or almost fully being breastfed with no breaks between breastfeeds that are longer than four to six hours, and 3) you haven’t had a period since before you were pregnant. Once any of those things changes, this method of birth control is no longer effective at preventing pregnancy.`
        },
        {
          id: "choosing25",
          title: "Ways of tracking fertility",
          content: `You can increase the effectiveness of fertility awareness in preventing pregnancy by using more than one fertility sign to predict your fertile days. The most common combination of signs people use is basal body temperature and cervical mucus.

To see the trends in your fertility signs needed to predict your fertile window, you’ll need to both pay attention to your body and keep track of your fertility signs. You can keep track of your fertility in a few ways, such as by using a paper calendar, a calendar on your phone or computer, a fertility-tracking app, like Natural Cycles, or by using CycleBeads, a handy string of colored beads that helps you count the days of your menstrual cycle. Depending on the fertility signs you are tracking, your preferences, and whether you need to keep your use of fertility awareness methods private, one of these methods of tracking may work better for you.

Some period and fertility tracking apps keep your private data more secure than others, so be sure to review the privacy policy carefully. You may decide that it’s more secure for you to use a regular calendar than a special fertility-tracking app.

Tracking your cycle for a few months before starting to rely on a FAM for pregnancy prevention can help you understand what’s normal for you and can make fertility awareness methods more effective. If you don’t want to get pregnant while you’re starting to track your cycles, you’ll need to use another method of birth control during that time, like condoms. During this time, it’s important that you’re not on a method of birth control that contains hormones. Being on a hormonal method will prevent you from learning about and tracking your body’s signs of fertility because you’re not fertile when you’re on hormonal birth control.`
        },

        {
          id: "choosing26",
          title: "How much do fertility awareness methods cost?",
          content:
            "Tracking your menstrual cycles and your cervical mucus is totally free. If you are going to track your BBT, you will need a special thermometer, which can cost about $10. Urine test strips and digital hormone tracking kits vary in price, but they can be expensive and insurance usually doesn’t cover them.",
        },
        {
          id: "choosing30",
          title: "The Positive",
          content: `There are actually lots of things about FAMs that may be good for you as well as your sex life.

• Some fertility awareness methods are free.
• There’s no prescription necessary—you can start and stop using a FAM without seeing a provider.
• FAMs can help you learn more about your body and how it works.`
        },
        {
          id: "choosing31",
          title: "The Negative",
          content: `There are no side effects of fertility awareness methods, but there can be disadvantages, including:

• Using a FAM requires planning and careful record-keeping.
• Using a FAM requires abstaining from penis-in-vagina sex or using an alternate method of birth control when you have penis-in-vagina sex for at least a week per cycle.
• FAMs are more effective if both partners participate, and not all partners will.
• You can’t switch directly from a hormonal method to a FAM, because the hormones might still be in your system and could affect your cycle. So you’ll need to use a non-hormonal method for a few months until your cycle is regular and you can predict when your fertile days are.`
        },

        {
          id: "choosing32",
          title: "Where can you get fertility awareness methods?",
          content:
            "You don’t need to go anywhere to get started with using a fertility awareness method. If you’re going to track your temperature, you can get the special thermometer you need from drugstores or online, and if you’re going to measure your hormones with test strips, you can get those at drugstores or online too.",
        },



      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "What should I do if I want to have sex on my fertile days?",
          content:
            "If you’re not 100% sure you’ll avoid sex on all of your fertile days, you should definitely be using another method in addition to fertility awareness-based methods. If you prefer to avoid hormones, you can use condoms (male or female), a diaphragm or cervical cap with spermicide, or the sponge.",
        },
        {
          id: "faq-2",
          title: "Oops, what if I had sex on the wrong day when using fertility awareness methods?",
          content:
            "If it’s been 5 days or less since you had sex on the wrong day, take EC. If it was more than 5 days ago, you might want to take a pregnancy test if your next period is late. Either way, if you’re having unprotected sex on unsafe days, you might want to consider a lower maintenance method.",
        },
        {
          id: "faq-3",
          title: "Do I really have to track my cycle every day if I use the fertility awareness methods?",
          content:
            "Fertility awareness methods only work if you’re dedicated to using them correctly and consistently. There are lots of tools such as apps, thermometers, and cycle beads that can help with cycle tracking.",
        },
        {
          id: "faq-4",
          title: "Are there certain days in my cycle that I can't get pregnant?",
          content:
            "Yes, but they can be tricky to track. The fertility awareness methods use different techniques for tracking your cycle—ideally you’ll use a combination of them to help with accuracy and success. They all involve observing changes in your body and calculating where you are in your menstrual cycle. This takes effort and commitment, so before you decide this is the method for you, be sure you really understand what you’ll need to do. Be prepared not to have sex for at least seven days out of every month, or to use a backup method like condoms.",
        },
        {
          id: "faq-5",
          title: "I just had a baby, am breastfeeding, and don’t want to use hormones. Can I use fertility awareness methods?",
          content:
            "Because cycles can be irregular during this time, this method is not recommended while breastfeeding. However, there is a way to use breastfeeding as a method of birth control for up to six months after your baby is born. Get more info about breastfeeding as birth control (or - and this is a long one - lactational amenorrhea method).",
        },
        {
          id: "faq-6",
          title: "I get a lot of vaginal infections (you know, like BV or yeast infections). Can I still use fertility awareness methods?",
          content:
            "If you are using the Cervical Mucus Method or the TwoDay Method, maybe not—some of the symptoms of these infections may affect the signs of fertility you need to look for (like mucus). You won’t be able to tell what’s due to your cycle and what’s due to the infection.",
        },
        {
          id: "faq-7",
          title: "Can I use fertility awareness methods if my periods are irregular or unpredictable?",
          content:
            "Calculation-based methods like the Calendar Method and the Standard Days Method won’t work to prevent pregnancy if you have irregular periods.",
        },
        {
          id: "faq-8",
          title: "What is amenorrhea?",
          content:
            "Amenorrhea is when you don’t get your period. It could be because you’re pregnant or just had a baby and are breastfeeding. In fact, lactational amenorrhea is a birth control method! Amenorrhea can also be a sign of problems with your hormone levels caused by stress or extremely low body weight.",
        },

      ],
    },
    reviews: {
      title: "Fertility Awareness Methods (FAMs)  Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Andre, 29, fertility awareness",
          content: "Fertility tracking is free… it doesn’t cost a thing. ",
        },
        {
          id: "review-3",
          title: "Oct 11, 2011",
          content:
            `Fertility awareness is au naturel family planning.

Andre appreciates that there’s nothing to take, use, or buy (except maybe a thermometer or period-tracking calendar app). His wife simply keeps track of her menstrual cycle to determine which days she can get pregnant and which days are safe for as much spontaneous sex as they want.

But simply keeping track of your cycle is not exactly simple. As Andre points out, this is a great method for he and his wife, but it does require women to intimately know their body and what it’s supposed to do throughout the entire menstrual cycle.`,
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/withdrawal": {
    about: {
      title: "About Withdrawal (pull Out methods)",
      sections: [
        {
          id: "overview",
          title: "What is withdrawal (the pull-out method)?",
          content:
            `Withdrawal, also called the “pull-out method,” is one of the oldest forms of birth control on the planet. Withdrawal is when, during penis-in-vagina sex, the person with the penis pulls their penis out of their partner’s vagina before they ejaculate (cum). They can then ejaculate outside of the vagina if they like, but it’s important not to ejaculate on the vulva (the parts on the outside, which include the labia and the clitoris), as that can also lead to pregnancy.

When it’s done correctly, withdrawal works to prevent pregnancy because without ejaculation into the vagina, sperm can’t meet up with an egg. You can also use withdrawal along with any other birth control method to boost effectiveness. The key thing to remember is this: you have to pull out before ejaculation, every single time, for it to be effective.`,
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: `Pretty effective the way most people use it (but it’s hard to pull out on time every time).

Perfect use: 96% effective

Typical use: 80% effective


What are perfect use and typical use?`,
        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "Withdrawal doesn’t affect your hormones at all.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "it's free",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "None",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Withdrawal doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to make an effort every time you have sex.",
        },
        {
          id: "choosing6",
          title: "Withdrawal might be for you if...",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "You’re willing to put in a lot of effort for your birth control method to work.",
          content:
            `Withdrawal only works as a birth control method if you do it consistently, so it can take a lot of self-control.

Both of the people having penis-in-vagina sex need to be committed to using withdrawal consistently. But the person with a penis needs to be especially sure that they can and will pull out on time in order for this to be an effective method of birth control.

If the person with a penis is super committed, super aware of their body’s signals that they are going to ejaculate soon, and never allows ejaculation to happen inside the vagina or on the vulva, withdrawal is actually 96% effective at preventing pregnancy. That means that, on average, four out of every 100 people who use withdrawal correctly every time they have sex will get pregnant within a year.

Keep in mind, though, that for most people, never having a mistake happen when trying to use the pull-out method is very difficult. And when the pull-out method is used as people typically use it (which means NOT perfectly every time), it is 80% effective at preventing pregnancy. That means 20 out of every 100 people using withdrawal for a year will get pregnant. So for most people, withdrawal is one of the LEAST effective methods of birth control. Having emergency contraception on hand is a good idea in case things don’t go as planned.`,
        },
        {
          id: "choosing8",
          title:
            "You don’t mind using it with another method to make it as effective as possible.",
          content:
            "Withdrawal can make other kinds of birth control even more effective, and you can use it with any other method. Some people pair it with a hormonal method, like the pill, and others use it with a barrier method, like condoms.",
        },
        {
          id: "choosing9",
          title: "You want a method of pregnancy prevention with no hormones.",
          content:
            `Withdrawal is a way of preventing pregnancy that is hormone-free.`,
        },
        {
          id: "choosing10",
          title:
            "You still want to get a period.",
          content:
            `Withdrawal doesn’t have any impact on your period—it doesn’t affect your menstrual cycle at all.

`,
        },
        {
          id: "choosing11",
          title: `You aren’t looking for STI protection, or you’re okay with combining the pull-out method with another form of birth control.`,
          content:
            `Withdrawal doesn’t offer any STI protection. So if STI protection is something you’re looking for, you can use condoms or internal condoms along with withdrawal. Dental dams and/or gloves also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.`,
        },
        {
          id: "choosing12",
          title: "You want a method that won’t affect your future fertility.",
          content:
            `The only birth control method that permanently affects your fertility is sterilization. The pull-out method only affects your ability to get pregnant at the time you have penis-in-vagina sex. So each time you have sex, you need to use the pull-out method again or you’re not protected from a pregnancy caused by having sex that time.`,
        },
        {
          id: "choosing13",
          title:
            "You want a method that you can start and stop without help from a provider.",
          content:
            "You don’t need to see a provider to start or stop using the pull-out method. But if you do stop using it and you don’t want to be pregnant, make sure you have another method of birth control in place.",
        },
        {
          id: "choosing14",
          title: "You feel comfortable talking to your partner(s) about sex.",
          content:
            `Choosing to use the pull-out method to prevent pregnancy requires open communication with any partners, both before and during sex. So you’ll need to feel comfortable talking in detail about sex.

You want to keep your birth control private but not from your partner. Withdrawal is a method that only you and your partner will know about, unless you tell someone else. There are no prescriptions, pill packs, used condoms in the trash, or any other signs that you’re using withdrawal that someone you live with could see.

However, if you don’t want your partner to know about your birth control, withdrawal is not a good option. Both partners need to be committed to pulling out.`,
        },
        {
          id: "choosing15",
          title: "You’re looking for a super affordable method of pregnancy prevention.",
          content: "Pulling out is free!",
        },


        {
          id: "choosing18",
          title: "How do you use withdrawal?",
          content: `The withdrawal method is totally dependent on self-control. You have to make sure the penis is pulled out before ejaculation AND keep the semen away from the vulva. So it’s really important that the partner with a penis is able to tell when they are getting close to ejaculation.

After the person with a penis pulls out, they can still ejaculate, it just needs to be away from their partner’s vagina and vulva.

You may want to use spermicide or another method along with pulling out to make it more effective. You may also want to have some emergency contraception pills on hand in case the pull-out method doesn’t work as planned.`
        },

        {
          id: "choosing19",
          title: "How much does withdrawal cost?",
          content:
            "Withdrawal is totally free.",
        },

        {
          id: "choosing22",
          title: "What are the side effects and benefits of withdrawal?",
          content:
            "There are positives and negatives about each and every method of birth control. And everyone’s different—so what you experience may not be the same as what your friend experiences.",
        },
        {
          id: "choosing23",
          title: "The Positive",
          content: `Here are some of the benefits of the pull-out method:

• Free  
• No prescription necessary  
• No one (other than your partner) has to know you are using withdrawal  
• Can be used while breastfeeding  
• Can be used with another method to make it more effective`
        },
        {
          id: "choosing24",
          title: "The Negative",
          content: `There are no side effects to withdrawal. But there are some disadvantages to think about:

• Can be messy  
• Difficult to do it every single time  
• May be harder to do if you’ve been drinking or are high  
• Not the most effective method  
• Doesn’t protect against STIs`
        },


        {
          id: "choosing25",
          title: "Where can you get it?",
          content:
            "You don’t need to go anywhere to get started with withdrawal. But you do need to talk with your partner before sex to make sure they understand what they need to do and are committed to doing it.",
        },


      ],
    },
    faqs: {
      title: "Withdrawal (Pull-out Method) FAQs",
      sections: [
        {
          id: "faq-1",
          title: "What are my options if I want something more effective than withdrawal, but don't want to visit a doctor?",
          content:
            `Good to hear that you’re thinking about more reliable methods of birth control! You can buy multiple methods over-the-counter such as condoms, internal condoms, the sponge, and spermicide. However, the most effective methods are only available after a visit with the doctor, so we hope you’ll think about making an appointment. At the very least it’s good to be getting annual exams when you’re sexually active.

Try searching for low costs clinics, if you don’t have insurance coverage. And while you’re there for the appointment, you might as well talk with your provider about your birth control options, right?`,
        },
        {
          id: "faq-2",
          title: "Is there male birth control?",
          content:
            `The only birth control options for guys that are currently available are condoms, sterilization, and the withdrawal method. There have been some promising leads for other options, but they’re still in development.`,
        },
        {
          id: "faq-3",
          title: "What are some signs a guy is about to come?",
          content:
            `Everyone is different, so there are no universal signals to look out for. Communicating with your partner will help. If you want to use withdrawal for birth control but your partner is unsure what his signals are, practice with a condom first, or it might be fun to mess around without penetrative sex to learn his “I’m getting close” quirks.`,
        },
        {
          id: "faq-4",
          title: "What's the oldest method of birth control?",
          content:
            `According to PBS, the withdrawal method (a.k.a. pulling out) dates all the way back to the Bible’s book of Genesis. Today, the best studies suggest that the majority of people in the U.S. have used withdrawal for birth control at least once in their lives.`,
        },
        {
          id: "faq-5",
          title: `I've been using withdrawal, but want something more effective. What options can I talk with my doctor about?`,
          content:
            `Good for you for looking into more reliable methods of birth control!`,
        },
        {
          id: "faq-6",
          title: `How effective is withdrawal at preventing pregnancy?`,
          content:
            `If you or your partner pulls out perfectly every single time, meaning that no semen whatsoever gets in your vagina or on your vulva, then withdrawal is 96% effective. That means that on average, 4 out of every 100 people using the withdrawal method will get pregnant over the course of a year.

In practice though, the withdrawal method is one of the hardest methods to use correctly, so with the way most people use it, it’s only 78% effective. That means that on average, 22 out of every 100 people using the withdrawal method will get pregnant in a year.`,
        },
      ],
    },
    reviews: {
      title: "Withdrawal (pull out) method",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Taisha, 21, withdrawal and not right now",
          content: "I wasn’t using a condom and [he’d] pull out.",
        },
        {
          id: "review-3",
          title: "Oct Jun 03, 2016, 2011",
          content:
            `Taisha hasn’t dated men in a while, but when she did, she usually relied on the withdrawal method, or “pulling out,” to avoid pregnancy. Now that Taisha’s more interested in women, she doesn’t have to worry as much about pregnancy, but she still makes sure she’s covered against STIs by getting tested regularly.

Taisha recommends getting tested with your partner before any sexual contact, like she and her girlfriend did.`,
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/not-right-now": {
    about: {
      title: "About 'Not Right Now' ",
      sections: [
        {
          id: "overview",
          title: `What is "not right now"? `,
          content:
            `“Not right now” as a method for pregnancy prevention means not having penis-in-vagina sex. That means no sex where your partner’s penis goes into your vagina, and no other sexual activities that involve your partner’s semen (the whitish fluid that comes out of their penis when they ejaculate) getting on your vulva.

A quick anatomy lesson: the vulva is on the outside, and the vagina is on the inside. The vulva is actually ALL the sexual parts that are on the outside of your body, including the clitoris and the inner and outer labia (sometimes called the inner and outer lips). The vagina is on the inside—you can’t see it. It’s the stretchy tube that connects your vulva to your uterus. Your vagina is what period blood comes out of, and it’s what tampons go into (as well as fingers, toys, and penises, if you want them to).

“Not right now” is super effective at preventing pregnancy, but only if you use it perfectly—and it’s not the easiest method to use perfectly. But if you never have penis-in-vagina sex, you’re guaranteed to not get pregnant. And if you’re avoiding sexual activity with a partner (like oral sex, anal sex, or sharing toys) altogether, you’ll be safe from STIs, too.

Lots of people who are planning to say “not right now” to prevent pregnancy ultimately end up having penis-in-vagina sex. If you don’t have another birth control method in place because you weren’t planning on having sex, it’s easy to find yourself deciding to have unprotected sex in the heat of the moment. It’s totally okay to change your mind and decide you want to have sex! Even if right now, you don’t think you’ll change your mind, it’s a great idea to have a birth control method on hand that you can use at a moment’s notice, like condoms or internal condoms, and to get emergency contraception ahead of time just in case you need it.`,
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            `“Not right now” is 100% effective for as long as you’re not having penis-in-vagina sex. But that’s hard for a lot of people to stick to.

Perfect use: 100% effective

Typical use: Not enough data


What are perfect use and typical use?`,
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "“Not right now” doesn’t change your hormones at all.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Free!",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            `“Not right now” has no side effects.

`,
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "If you’re not having any kind of sex with a partner, you’re not at risk of STIs. But if you’re having outercourse, oral sex, or anal sex instead, you will still be at risk of STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "Both you and your partner need to have a lot of self-control.",
        },
        {
          id: "choosing6",
          title: `“Not right now” might be right for you if…`,
          content: "",
        },
        {
          id: "choosing7",
          title:
            "You want a method of pregnancy prevention with no hormones.",
          content:
            `Saying “not right now” is a way of preventing pregnancy that is hormone-free.`,
        },
        {
          id: "choosing8",
          title:
            "You’re willing to put in a lot of effort for your birth control method to work.",
          content:
            `Saying “not right now” only works as a birth control method if you do it consistently, so it can take a lot of self-control.

If you are super committed and never have penis-in-vagina sex, “not right now” is 100% effective at preventing pregnancy. Keep in mind though that for most people, never having sex is not something they can stick to for the long term, and the LEAST effective birth control method is having sex with no birth control method at all.

So having a backup plan for birth control that you can use if you find yourself about to have unprotected sex is super important. You may not ever need them, but it can’t hurt to keep some condoms and emergency contraception on hand.

`,
        },
        {
          id: "choosing9",
          title: "You feel comfortable talking to your partner(s) about sex.",
          content:
            `Choosing not to have penis-in-vagina sex in order to prevent pregnancy requires open communication with any partner(s) about what sexual activity is okay with you (if any) and what’s not. So you’ll need to feel comfortable talking in detail about sex.

`,
        },
        {
          id: "choosing10",
          title:
            "You’re willing to get creative.",
          content:
            `Even if you’re saying “not right now” to penis-in-vagina sex, you can still have outercourse. Outercourse is sexual activity (like using hands, mouths, and toys to provide genital stimulation) that doesn’t involve penetration or contact between the penis and the vulva, and it can’t cause pregnancy. Anal sex also can’t cause pregnancy as long as you make sure no semen gets on your vulva.

Just remember that you can still get or pass on sexually transmitted infections (STIs) through outercourse. If STI prevention is something you’re looking for, you can use condoms, internal condoms, dental dams, and/or gloves, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.`,
        },
        {
          id: "choosing11",
          title: "You’re looking for a super affordable method of pregnancy prevention.",
          content:
            `Not having penis-in-vagina sex is free (unless you decide to go out and buy a lot of sex toys instead)!

`,
        },
        {
          id: "choosing12",
          title: "How does “not right now” work?",
          content: `If you’re using “not right now” as your method, it simply means you’re not having penis-in-vagina sex. And if you decide to start having penis-in-vagina sex, that’s totally cool, too. Just make sure you’re protected with another form of birth control if you don’t want to get pregnant, and that you have a plan for STI protection, like using a condom.

Tips for making “not right now” work:

• Find people you can talk to about your decision and lean on for support.  
• Talk about your decision with your partner before you’re in the heat of the moment.  
• Be totally straightforward and clear when talking about your limits.  
• If you want, you can explore other sexual activities you might enjoy just as much.  
• Keep in mind that it might be harder to stick with “not right now” if you’ve been drinking or using drugs.`
        },

        {
          id: "choosing13",
          title:
            `How much does “not right now” cost?
`,
          content:
            `Not having penis-in-vagina sex is free!`,
        },


        {
          id: "choosing23",
          title: "The Positive",
          content: `There are lots of things about birth control that are good for your body as well as your sex life. Here are some of the benefits of using “not right now”:

• It’s free.  
• If you aren’t having any type of sex, you are not at risk for STIs either.`
        },

        {
          id: "choosing24",
          title: "The Negative",
          content: `“Not right now” doesn’t have any side effects, but there are some disadvantages:

• It can be difficult to keep up over time.  
• It might be hard to stick to your plan if you’ve been drinking or using drugs.`
        },

        {
          id: "choosing25",
          title: "Where can you get it?",
          content:
            `You don’t need to go anywhere to get started with not having sex. But you do need to talk with your partner before sex so that they know this is the form of birth control you’re choosing to use.

`,
        },


      ],
    },
    faqs: {
      title: ` “Not right now” FAQ'S`,
      sections: [
        {
          id: "faq-1",
          title: "What if I meet someone and I'm considering changing my mind about not having sex right now?",
          content:
            `It’s perfectly natural to be attracted to someone, but if you’re seriously considering having sex after a period of abstinence, it’s important to take some time to think about your reasons for waiting. If you realize it’s still important to you not to have sex right now, you should talk to your new partner about your reasons and arrange firm limits on what you’re comfortable doing with them. On the other hand, if you decide you do want to have sex (but you don’t want to get pregnant), it’s a good idea to start looking into a birth control method that’s right for you before you do so.

Either way, you might want to have some condoms and EC on hand just in case.`,
        },
        {
          id: "faq-2",
          title: `How do I tell the new guy I'm dating that I'm not having sex right now?
`,
          content:
            `First and foremost, make sure you talk to him before you two are in the process of getting hot and heavy. Second, you might want to think before you talk to him about exactly how you want to explain your choice. Be honest about your reasons and clear about what you are and aren’t comfortable doing. If he’s a good match for you, he’ll respect your choice!`,
        },
        {
          id: "faq-3",
          title: `My boyfriend and I want to be intimate but we don't want to have intercourse at this point. Any suggestions?
`,
          content:
            `There are loads of ways to be intimate without having vaginal intercourse. You can experiment with outercourse, toys, touching, anal sex, or oral sex. Remember that if you want to avoid vaginal sex but are okay with anal or oral sex, you should still use a condom or a dental dam to protect against STIs.

Whatever you decide to do, if you’re going to start experimenting, you should definitely talk with your partner before the heat of the moment about how far you plan to go. Then make sure you both agree that you will stop if things start to heat up too much.`,
        },

      ],
    },
    reviews: {
      title: ` “Not right now” Reviews`,
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Tee, 21, not right now",
          content: `"If we’re going to have sex, we need to have this conversation."`,
        },
        {
          id: "review-3",
          title: "",
          content:
            `Tee used to be sexually active with guys and tried the pill but had trouble remembering to take it every day. The patch irritated Tee’s skin. Now that Tee only dates women, pregnancy protection isn’t an issue. Tee does use barrier methods, though, to prevent sexually transmitted infections (STIs).

To stay safe, Tee recommends getting tested regularly and talking about STI and pregnancy prevention with partners before any intimate contact.`,
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/birth-control-ring": {
    about: {
      title: "About Birth Control Methods",
      sections: [
        {
          id: "overview",
          title: "What is the birth control ring?",
          content:
            "The birth control ring (brand names: Annovera and NuvaRing) is a small, bendable plastic ring that you insert into your vagina. You leave it in place for three weeks at a time, then take it out for the fourth week. The main way the ring works is by giving off hormones that prevent your ovaries from releasing eggs. There are two types of birth control rings, one that you can use over and over for up to a year (Annovera) and one type that is replaced monthly (NuvaRing or its generic versions).",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            "The ring is very effective the way most people use it. \n Perfect use: 97 to over 99% effective \n Typical use: 93% effective .\n What are perfect use and typical use?",
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "The ring contains two different kinds of hormones, estrogen and progestin.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content: "Anywhere from $0 (with insurance) to $200 a month.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Most common—but usually temporary—side effects are irregular bleeding, headaches, sore breasts, and nausea.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The ring doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content:
            "Ring in. Wait 3 weeks. Ring out. Wait 1 week. Repeat. Get a new ring every month.",
        },
        {
          id: "choosing6",
          title: "Types of birth control rings",
          content: "",
        },
        {
          id: "choosing7",
          title: "Yearly birth control ring (Annovera)",
          content:
            "Annovera is a birth control ring that you can use for up to a year. You place it inside your vagina, leave it there for three weeks, then take it out and leave it out for one week, which is usually when you’ll have a withdrawal bleed (similar to a period). During this time you store it in its own little case. Then you put it back in for the next cycle.",
        },
        {
          id: "choosing8",
          title: "Monthly birth control ring (NuvaRing)",
          content:
            "The NuvaRing is a birth control ring that you replace monthly. Just like with Annovera, you put it inside your vagina, leave it there for three weeks, then take it out and don’t put a new one in for one week, which is usually when you’ll have a withdrawal bleed (similar to a period). At the end of that week, you insert a new ring.",
        },
      ],
    },

    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title:
            "What are the best methods to use if I don't want to have my period?",
          content:
            "The hormonal IUDs, shot, implant, and progestin-only pill have all been shown to overall reduce periods for most people. For some people, that means they don’t get a period at all, but for others it can cause bleeding when you aren’t expecting it even if you have less total bleeding.You can use the pill or the ring continuously to intentionally skip your period altogether.",
        },
        {
          id: "faq-2",
          title:
            "If I'm using another method of birth control, do I still have to use condoms?",
          content:
            "It depends on your situation. Unless you’re in a totally exclusive relationship and you and your partner have both been tested recently for every single STI, using condoms with whatever other birth control method you choose is a good idea. Basically, if there’s any chance you or your partner could have an STI, the only way to decrease the risk of transmitting it is by using condoms, internal condoms, dental dams, and/or PrEP, (a medication which decreases the risk of getting HIV.) Other forms of birth control don’t protect against STIs. Using a condom with another form of birth control is called dual protection. It means you’re being super-safe and protecting yourself against both pregnancy and STIs.",
        },
        {
          id: "faq-3",
          title: "Will birth control make me gain weight?",
          content:
            "Most birth control methods will not cause weight gain. Everyone’s body responds to birth control differently, but research shows that the pill, patch, the hormonal IUD, the ring, and non-hormonal birth control methods like a copper IUD or condoms don’t cause weight gain (or loss). Studies do show that about 1 in 4 people who use the shot will gain some weight (around 5% of body weight).",
        },
        {
          id: "faq-4",
          title:
            "Anything I can do so that my partner doesn't feel the ring during sex?",
          content:
            "Both the Annovera and the NuvaRing are designed to keep in during sex. During the three weeks (21 days) that you have the Annovera in, it’s important not to take it out. But if it ever comes out, make sure to put it back in right away. If Annovera is out of your vagina for more than two hours total during those 21 days, you will need to use a backup method of birth control for seven days after putting it back in.If you are using the NuvaRing and decide to take it out during sex during the three weeks (21 days) that you have the ring in, make sure to put it back in as soon as possible. If it’s out for more than 48 hours, you’re at risk for getting pregnant, and you’ll need to use a backup form of birth control for 7 days after putting the ring back in. If you leave the NuvaRing out for more than 48 hours during the third week of a cycle, put it back in right away. On the day when you would normally have taken the ring out (day 22 of the cycle, where day 1 is the day you put it in), take it out and put a new one in, skipping your ring-free week. If you don’t put a new one in on that day, you’ll need to use a backup form of birth control until you’ve had a ring in for seven days in a row.",
        },
        {
          id: "faq-5",
          title: "Can I use tampons or a menstrual cup with the ring?",
          content:
            "Tampons and menstrual cups do not interfere with the ring’s effectiveness. If your ring is in when you remove your tampon or cup, you might pull it out a bit, which might be annoying if it happens a lot. When inserting your tampon or cup, make sure that your ring is all the way in first, and then position the tampon or cup afterwards. If you do end up pulling the ring out, you can rinse it in cool water and re-insert it right away.",
        },
        {
          id: "faq-6",
          title: "Does the ring ever fall out?",
          content:
            "The ring hardly ever falls out—especially in younger women who haven’t had children. But if it does slip out, you can just rinse it off with cool water and reinsert it. If it’s been out more than a few hours (or you’re not sure how long), make sure to use backup method, like a condom or internal condom, for the next 7 days.",
        },
        {
          id: "faq-7",
          title: "Will the ring dissolve inside me?",
          content: "Nope. It won’t. And it won’t get lost inside either.",
        },
        {
          id: "faq-8",
          title: "How long until the ring starts working?",
          content:
            "The ring is effective seven days after you start using it, so be sure to use backup method, like a condom or internal condom, until then.",
        },
        {
          id: "faq-9",
          title: "How do I know the ring is in the right way?",
          content:
            "It’s funny to say, but the ring almost has a sixth sense for getting itself into the right place. If you insert the ring and can’t feel it, you’ve got it in correctly.",
        },
        {
          id: "faq-10",
          title: "How effective is the ring at preventing pregnancy?",
          content:
            "If you always change the ring on time, it can be very effective. With perfect use, it’s more than 99% effective. The way it’s typically used, though, it’s around 91% effective.In other words: Of those who use the ring exactly as directed, fewer than 1 in 100 will experience an accidental pregnancy during the first year of using this method. Of those who do not use the ring exactly as directed, 9 in 100 will experience an accidental pregnancy during the first year of using this method.",
        },
        {
          id: "faq-12",
          title: "How can birth control help an ovarian cyst?",
          content:
            "One of the main ways hormonal birth control prevents pregnancy is by stopping ovulation—meaning that the egg never leaves the ovary. The pill, the patch, the ring, and the shot are the methods that are the most reliable at blocking ovulation, so people using these methods may have fewer ovarian cysts. If you tend to get ovarian cysts, your provider may recommend one of these methods to prevent future cysts. The progestin-only pill, also called the mini-pill, has an unpredictable effect on ovulation and may actually lead to more cysts. These cysts almost always disappear on their own, but if you’ve had problems with cysts in the past, the mini-pill may not be the best birth control for you.v",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Andi, 22, ring",
          content: "'You literally don’t feel it.'",
        },
        {
          id: "review-3",
          title: "",
          content: "Jan 16, 2015 Updated: Jun 19, 2015",
        },
        {
          id: "review-4",
          title: "",
          content:
            "Andi has used the ring for four years and has their ring insertion style down.As an added bonus, Andi doesn’t get their period while on the ring and it stabilizes potential hormone fluctuations. Those are just a few of the reasons why they recommend the ring to friends, especially those who have trouble remembering a daily method of birth control.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/birth-control-pill": {
    about: {
      title: "About Birth Pill",
      sections: [
        {
          id: "overview",
          title: "What is the birth control pill?",
          content:
            "The birth control pill, also called “the pill” or “oral contraception” is a pill you take once a day to prevent pregnancy. There are lots of different brands of pills on the market, and new ones come out often. Most work by using hormones that keep your ovaries from releasing eggs. There are two main categories of birth control pills, even though there are many different brands. Both types of birth control pills contain hormones. The biggest differences between them are which hormones they contain and how you use them. If you use the progestin-only pill, or mini-pill, you have to be much more careful to take your pill at the same time every day. If you are more than 3 hours late taking the mini-pill (unless you’re using the brand Slynd, which offers more flexibility), you will need to use a backup method of birth control, like condoms, for the next 48 hours. With the combination pill, you just need to make sure to take a pill a day—the timing doesn’t matter.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: `The pill is very effective the way most people use it.\n
Perfect use: Over 99% effective\n
Typical use: 93% effective\n
What are perfect use and typical use? \n `

        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "The pill contains hormones.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "As low as $0 or as high as $200 a month.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Most common—but usually temporary—side effects are irregular bleeding, headaches, sore breasts, and nausea.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The pill doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to take your pill every single day, which can be hard.",
        },
        {
          id: "choosing6",
          title: "Types of birth control pills",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "The mini-pill",
          content:
            "Better known as the “mini-pill,” progestin-only pills have no estrogen in them. They are a good option if you’re sensitive to combination pills and having side effects or can’t take estrogen for some other reason. With the mini-pill, you take a small amount of progestin every day of the month—there are no placebo pills. You may have irregular bleeding while on the mini-pill. Most brands and generic versions of the mini-pill require a prescription, but Opill is a type of mini-pill that will be available over the counter. It contains the same type of hormone and works the same way as other progestin-only pills.v",
        },
        {
          id: "choosing8",
          title:
            "The combination pill",
          content:
            "This type of pill uses a combination of two types of hormones—estrogen and progestin—that work with your body to prevent ovulation. For most brands of combination birth control pills, a pill pack contains a series of pills that contain hormones followed by placebo pills, which don’t contain any hormones. How many pills with hormones and how many placebo pills are included in each pack depends on the brand of combination pills you’re using. Most people have bleeding that resembles a period when taking the placebo pills.",
        },

      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "Is it safe to take two pills in one day?",
          content:
            "Yes, it’s absolutely safe to take two pills in one day, including taking two pills at once. That said, the most effective and best way to take your birth control pill is to take one every day (and if you’re taking the mini-pill, it’s extra important to take it within the same three-hour window every day). Regularly taking more than one pill a day won’t make your birth control more effective. However, if you miss a pill, take it as soon as you remember, even if that means it’s at the same time as your next regularly scheduled dose. You might feel nauseated if you have to do this, especially if you need to take two pills at once, so take your pills with food.",
        },
        {
          id: "faq-2",
          title: "What are the best methods to use if I don't want to have my period?",
          content:
            "The hormonal IUDs, shot, implant, and progestin-only pill have all been shown to overall reduce periods for most people. For some people, that means they don’t get a period at all, but for others it can cause bleeding when you aren’t expecting it even if you have less total bleeding. You can use the pill or the ring continuously to intentionally skip your period altogether.",
        },
        {
          id: "faq-3",
          title: "What if I want to start taking my pill at a different time?",
          content:
            "Yes, it’s okay to switch what time of day you take your pills but depending on the type of pill you are taking (combination or progestin-only pill) and if you are switching to a later time or an earlier time in the day, you might need a backup method of birth control after switching times. If you move the time earlier in the day (i.e. from afternoon to morning), it will be less than 24hrs between pills, so go ahead and switch the time—you don’t need a backup method for either type of pill. If you want to switch to later in the day and you’re taking the combination pill (the most common type), go ahead and switch the time since the time of day you take your pills doesn’t matter for them to work as birth control (but taking them at a consistent time can help you remember to take them every day). If it’s been 48hrs or more since you took your last pill, you’ll need to use a backup birth control method if you have sex for the first seven days after restarting. If you want to switch to later in the day and you’re taking the progestin-only pill (a.k.a. mini pill), you don’t need to use a backup method if the new time is less than three hours after your original time. (For example, you were taking it at 7pm and now you are going to take it at 9pm). If the new time is more than three hours after the old time, then you’ll need to use a backup method if you have sex for the first two days after switching the time.",
        },
        {
          id: "faq-4",
          title: "If I'm using another method of birth control, do I still have to use condoms?",
          content:
            "It depends on your situation. Unless you’re in a totally exclusive relationship and you and your partner have both been tested recently for every single STI, using condoms with whatever other birth control method you choose is a good idea. Basically, if there’s any chance you or your partner could have an STI, the only way to decrease the risk of transmitting it is by using condoms, internal condoms, dental dams, and/or PrEP, (a medication which decreases the risk of getting HIV.) Other forms of birth control don’t protect against STIs. Using a condom with another form of birth control is called dual protection. It means you’re being super-safe and protecting yourself against both pregnancy and STIs.",
        },
        {
          id: "faq-5",
          title: "Does birth control cause blood clots?",
          content:
            "Using a method of birth control with estrogen, like the pill, patch, or ring, increases the risk of forming a blood clot, but the risk is so low that if you don’t have any factors that increase your chances of having a blood clot, you can safely use all types of birth control. If you do have an increased risk of blood clots because you’ve had one before you’ve had a stroke or heart attack, or you have a medical condition that increases your risk of a blood clot, like high blood pressure, then adding birth control with estrogen to the mix increases your risk too much and it’s not recommended that you use birth control with estrogen in it. But that doesn’t mean there isn’t a birth control method for you!  If you can’t take estrogen, you have quite a few options available to you. First you have the non-hormonal methods, like the copper IUD. You can also use any of the hormonal methods that only contain progestin, not estrogen, like the implant, mini-pill, shot, and hormonal IUDs, like Mirena, Skyla, Liletta, and Kyleena. These don’t increase your risk of blood clots and are all really good at preventing pregnancy. If you’re worried about blood clots or don’t know if you have risk factors, talk to a health care provider about which birth control methods are options for you.",
        },
        {
          id: "faq-6",
          title: "Will birth control make me gain weight?",
          content:
            "Most birth control methods will not cause weight gain. Everyone’s body responds to birth control differently, but research shows that the pill, patch, the hormonal IUD, the ring, and non-hormonal birth control methods like a copper IUD or condoms don’t cause weight gain (or loss). Studies do show that about 1 in 4 people who use the shot will gain some weight (around 5% of body weight).",
        },
        {
          id: "faq-7",
          title: "Is Opill the same as emergency contraception (EC)? Is it the same as the abortion pill?",
          content:
            "Nope. Opill is a birth control pill, meaning that you take it consistently to prevent pregnancy. EC allows you to prevent pregnancy AFTER having unprotected sex. The abortion pill ends a pregnancy that has already started.",
        },
        {
          id: "faq-8",
          title: "What is Opill?",
          content:
            "Opill is a new progestin-only birth control pill (also called the mini-pill), that is available over the counter. That means you don’t need a prescription to get it. Opill is now available on Amazon, Opill’s website, and some drugstores, convenience stores, and grocery stores.",
        },
        {
          id: "faq-9",
          title: "Where can I get Opill and how much is it?",
          content:
            "Opill is a new progestin-only birth control pill (also called the mini-pill), that is available over the counter. That means you don’t need a prescription to get it. Opill is now available on Amazon, Opill’s website, and some drugstores, convenience stores, and grocery stores.There is a suggested retail price of $19.99 for a one-month supply and $49.99 for a three-month supply in stores. Each retailer or store can set their own price, so it may be different based on where you’re getting it and/or where you live. A six-month supply is also available for $89.99 at Opill.com.",
        },
        {
          id: "faq-10",
          title: "What is the difference between Opill and the combined birth control pill?",
          content:
            "Opill is a new progestin-only birth control pill (also called the mini-pill), that is available over the counter. That means you don’t need a prescription to get it. Opill is now available on Amazon, Opill’s website, and some drugstores, convenience stores, and grocery stores. Opill contains the same type of hormone and works the same way as other progestin-only birth control pills. The only difference between the over-the-counter birth control and prescription birth control is how you get it. Like all other versions of the mini-pill, Opill is estrogen-free and contains a single hormone, progestin. The main way progestin prevents pregnancy is by thickening cervical mucus, which makes it harder for sperm and egg to meet. To be effective at preventing pregnancy, Opill (like most mini-pills) should be taken as close as possible to the same time every day.",
        },
        {
          id: "faq-11",
          title: "What is the difference between Opill and the mini-pill (the progestin-only birth control pill)?",
          content:
            "Opill is a new progestin-only birth control pill (also called the mini-pill), that is available over the counter. That means you don’t need a prescription to get it. Opill is now available on Amazon, Opill’s website, and some drugstores, convenience stores, and grocery stores. Opill contains the same type of hormone and works the same way as other progestin-only birth control pills. The only difference between the over-the-counter birth control and prescription birth control is how you get it. Like all other versions of the mini-pill, Opill is estrogen-free and contains a single hormone, progestin. The main way progestin prevents pregnancy is by thickening cervical mucus, which makes it harder for sperm and egg to meet. To be effective at preventing pregnancy, Opill (like most mini-pills) should be taken as close as possible to the same time every day.",
        },
        {
          id: "faq-12",
          title: "Why would someone choose Opill over another type of birth control pill?",
          content:
            "Opill is a new progestin-only birth control pill (also called the mini-pill), that is available over the counter. That means you don’t need a prescription to get it. Opill is now available on Amazon, Opill’s website, and some drugstores, convenience stores, and grocery stores. There are many reasons why someone might choose Opill––some have to do with the fact that Opill is a type of mini-pill, and some have to do with the fact that it’s available over the counter. The mini-pill is often prescribed if you’re sensitive to combination pills and having side effects or can’t take estrogen for some other reason. Because Opill is available over the counter, unlike all of the other birth control pills, which require a prescription, you don’t need to talk to a health care provider to start taking it. That means it might be easier to get, more private, and maybe even less expensive than using other types of birth control pills.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Danielle, 20, the pill and not right now",
          content: "'You could protect yourself better if you pick and choose who you sleep with'.Jun 15, 2016",
        },
        {
          id: "review-3",
          title: "",
          content: "",
        },
        {
          id: "review-4",
          title: "",
          content:
            "Lighter periods. Fewer periods. No pain. Going on the pill has definitely changed Danielle’s life. Before the pill, Danielle’s periods were so bad that sometimes she couldn’t get out of bed on the first day of her cycle. Thankfully, that doesn’t happen now that she’s on the pill. And she’s fine not having sex too—after all, that’s one of the surest ways to prevent STIs and stressful, unplanned pregnancies.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/condom": {
    about: {
      title: "About Condoms ",
      sections: [
        {
          id: "overview",
          title: "What are condoms?",
          content:
            "External condoms, which are usually just called condoms, are one type of barrier method of birth control, which means that they prevent pregnancy by physically blocking sperm from getting to eggs. Condoms fit snugly over the penis so that when ejaculation happens, the semen (the whitish fluid that contains sperm) stays inside the condom and out of the vagina, which keeps sperm away from any eggs. Each condom can only be used one time.Condoms are one of the most popular forms of birth control out there, and there are lots of types made of different materials, in different sizes, with lube and without, and in different colors, flavors, and textures. There are also internal condoms, which are placed inside the vagina instead of being placed over the penis. Condoms and internal condoms are the only kinds of birth control that help prevent sexually transmitted infections (STIs) as well as preventing pregnancy. But not all condoms are effective against STIs. Natural membrane condoms, sometimes called lambskin or natural skin condoms, are the one type of condom that does not prevent STIs. Natural membrane condoms are not as commonly used, but they are one of the condom options that are safe for people with latex allergies.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            "Condoms are pretty effective the way most people use them.\n\nPerfect use: 98% effective\n\nTypical use: 87% effective\n\nWhat are perfect use and typical use?"
        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "Condoms are hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Available for free at many clinics. Otherwise, around $1 each, but the price varies.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "You have to make sure to use condoms correctly every time in order for them to be effective at preventing pregnancy and STIs.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Condoms can offer STI protection as well as pregnancy prevention.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to make sure to use condoms correctly every time in order for them to be effective at preventing pregnancy and STIs.",
        },
        {
          id: "choosing6",
          title: "Condoms might be right for you if…",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "You want birth control without hormones.",
          content:
            "If you are looking for pregnancy prevention but don’t want to use hormones, condoms may be a good option for you.",
        },
        {
          id: "choosing8",
          title:
            "You’re willing to put in some effort before having sex, every single time.",
          content:
            "In order for condoms to work, you have to use them correctly, every time, no matter what. If you do use them perfectly (exactly how the instructions say to use them) every single time you have penis-in-vagina sex, condoms are very effective at preventing pregnancy. With perfect use, condoms are 98% effective, which means that, on average, two out of every 100 people using condoms perfectly for a year will get pregnant. The problem is that most people have trouble using condoms perfectly every time they have sex. The effectiveness of condoms with typical use, which means how real people use them in real life, is more relevant for most people than their effectiveness with perfect use. With typical use, condoms are 87% effective at preventing pregnancy. That means that, on average, 13 out of every 100 people using condoms for a year (not perfectly, but in the way people typically use them) will get pregnant. And of course, if you don’t use a condom at all when you have sex, then it’s 0% effective at preventing pregnancy. Because condoms are hard to use perfectly every time, and because their effectiveness is so much lower when they’re not used perfectly every time, condoms are not considered one of the most effective methods of birth control out there. They can be used with any other method of birth control except internal condoms to further lower your chances of pregnancy.",
        },
        {
          id: "choosing9",
          title: "You want protection from STIs.",
          content:
            "One of the best things about most types of condoms is that they help protect you against sexually transmitted infections (STIs), including HIV. Natural membrane or lambskin condoms, however, are the one type that don’t offer STI protection—they are able to block sperm from passing through them, but the super tiny particles that cause infections can pass through them.",
        },
        {
          id: "choosing10",
          title:
            "You don’t need to hide your method.",
          content:
            "It’s not easy to hide that you’re using condoms. While you may be able to hide them from people you live with, condoms do have to be thrown in the trash along with their wrappers after you use them, so if people you live with can see or access your trash, they may find out you’re using condoms. It’s not possible to hide that you’re using condoms from a sexual partner with a penis, since they will have to agree to put a condom on their body. And partners with a vagina will probably be able to see and/or feel that you are wearing a condom.",
        },
        {
          id: "choosing11",
          title: "You want a method that is easy to get.",
          content:
            "You can find condoms in lots of places, from convenience stores to health centers to supermarkets. You can sometimes get free ones from places like bars. You can also get them online, including from Amazon, although waiting for shipping isn’t going to work if you need a condom for tonight. But it’s a good idea to stock up so you have them when you need them (just don’t buy so many that they expire before you can use them).",
        },
        {
          id: "choosing12",
          title: "You want a method that you can stop without help from a provider.",
          content:
            "Condoms don’t require a prescription or a visit to a provider, so you can start and stop using them whenever you want. Just remember that if you want to stop using condoms but don’t want to be pregnant, you’ll need to start using a different form of birth control right away.",
        },
        {
          id: "choosing13",
          title:
            "You want a method that won’t affect your future fertility.",
          content:
            "The only birth control method that permanently affects your fertility is sterilization. A condom does not affect your ability to get pregnant after you or your partner take it off. That’s why you have to use a condom every time you have sex—because they don’t give you any lasting protection against pregnancy.",
        },
        {
          id: "choosing14",
          title: "You’re in between methods or made a mistake with your usual method.",
          content:
            "Condoms are great in a pinch. If you don’t make it to the pharmacy for your pill refill on time, or you realize you’ve missed a pill (or missed a step with another form of hormonal birth control), you can always use a condom. For mistakes with hormonal birth control methods, as well as when you start on a hormonal birth control method, you may need to use condoms or another backup form of birth control for 7 days, so check with a provider or read the instructions that came with your hormonal method. You may also want to use emergency contraception if you make a mistake with your birth control and then have unprotected sex.V",
        },

        {
          id: "choosing18",
          title: "How do you use Condoms?",
          content: `Once you get the hang of it, condoms are pretty easy to use, but it can take some practice to get there. And even experienced users make mistakes, so it’s good to refresh your memory on the correct way to use them once in a while.

- The most important thing to remember:\n
1. If you’re relying on condoms for pregnancy and/or STI prevention, you have to use them every single time you have sex.\n

- How to put a condom on:\n
1. Before you use a condom, check the expiration date.\n
2. Open the condom carefully with your fingers — don’t use your teeth.\n
3. Check if the condom is damaged, brittle, or stiff. If so, use a new one.\n
4. Make sure the condom is right side out.\n
5.Put 1 2 drops of water- or silicone-based lube inside the condom (not oil-based).\n
6. Pinch the air out of the tip and hold it.\n
7. Place the rolled-up condom over the tip of the erect penis.\n
8. Unroll it down to the base of the penis.\n
9. Ensure the condom fits snugly but comfortably.\n
10. Smooth out any air bubbles.\n
11. Optionally, add lube to the outside of the condom.\n

- How to take a condom off:\n
1. After ejaculation, pull the penis out before it becomes soft.\n
2. Hold the base of the condom while pulling out to prevent spillage.\n
3. Remove the condom away from the vulva.\n
4. Tie the condom in a knot and throw it in the trash (not the toilet).\n
5. Wash the penis with soap and water if it will have more contact with the vulva.\n

- Some tips for using condoms:\n
1. Always put the condom on before the penis touches the vulva, anus, or mouth.\n
2. Don’t use two condoms at once ("double bagging").\n
3. Don’t use an internal and external condom together.\n
4. Use one condom per erection.\n
5. Use one condom per ejaculation.\n
6. Put on a new condom if you switch between types of sex (oral, vaginal, anal).\n

- Some tips for using condoms made of different materials:`
        },
        {
          id: "choosing19",
          title: "Latex Condoms",
          content:
            "These are the most commonly used condoms. Make sure not to use them with oil-based lube, which includes massage oil, coconut oil, some lotions, and petroleum jelly. Oil-based lube can cause latex condoms to break. Use water-based or silicone-based lube instead.",
        },

        {
          id: "choosing21",
          title: "Non-latex Condoms",
          content:
            "If you’re allergic to latex, these may be for you. They’re usually made from polyurethane, polyisoprene, or other synthetic materials, and they’re just as good at protecting you from STIs as latex condoms are. Most kinds of non-latex condoms cannot be used safely with oil-based lube because it can cause them to break. So your best bet will be water-based or silicone-based lube.",
        },
        {
          id: "choosing22",
          title: "Spermicidal Condoms",
          content:
            "These condoms are lubricated with a chemical that kills sperm. Even though spermicide on its own can prevent pregnancy, spermicidal condoms aren’t actually any better than non-spermicidal condoms at preventing pregnancy. And if the spermicide used is nonoxynol-9, keep in mind that it may cause irritation, which increases the risk of getting HIV and other STIs. It can also increase the risk of urinary tract infections.",
        },
        {
          id: "choosing23",
          title: "Natural membrane condoms",
          content:
            "These are sometimes called lambskin condoms. They are the only type of condom that does not prevent STIs. Natural membrane condoms are not as commonly used, but they are one of the condom options that are safe for people with latex allergies. Oil-based lube is okay to use with natural membrane condoms—they’re not broken down by the oils.",
        },
        {
          id: "choosing24",
          title: "How much does the Condoms cost?",
          content:
            "Most insurance will not cover condoms. If you have a Flexible Spending Account through your workplace, you may be able to save a little bit of money by using it to pay for condoms.Condoms come in a variety of materials, shapes, sizes, colors, and textures, and prices vary depending on which kind you get. Most basic condoms cost around a dollar each, but condoms of different sizes, appearances, and materials might cost more. If you need help covering the cost of condoms, there may be options. Check with your local family planning clinics and find out if they offer free or low-cost condoms and other kinds of birth control (most do). Depending where you live, there may be other places where you can find free condoms.",
        },

        {
          id: "choosing25",
          title: "What are the side effects and benefits of the Condoms",
          content:
            "There are positives and negatives about each and every method of birth control. And everyone’s different—so what you experience may not be the same as what your friend experiences.",
        },
        {
          id: "choosing26",
          title: "The Positive",
          content: `Here are some of the benefits of condoms:\n
• Most kinds protect against STIs, including HIV.\n
• No prescription needed.\n
• Available in lots of places, sometimes for free.\n
• You only have to deal with your birth control when you have sex—there’s no pill to remember to take every day.`
        },


        {
          id: "choosing27",
          title: "The Negative",
          content: `It’s normal to worry about negative side effects, but for many people, they’re not a problem. Potential side effects include:\n
• Latex allergy. Only one or two out of every 100 people are allergic, but if you happen to be one of them, you can always use a non-latex condom instead.\n
• Sensitivity to certain brands of lubricant. If the lube is causing irritation of any kind, try another kind.\n\n
In addition to potential side effects, there may be some disadvantages to using condoms for some people:\n
• Some people with penises say that condoms reduce feeling during sex.\n
• You have to interrupt sex to put on a condom.`
        },
        {
          id: "choosing28",
          title: "Where can you get condoms?",
          content:
            "\n You can buy condoms at all kinds of places—like drug stores, supermarkets, convenience stores, and gas stations. You can get them for free at some clinics and even some bars and clubs. You can also buy condoms online from vendors like Amazon, Walmart, and Target, plus specialty condom stores like Condomania and Condom Jungle.v",
        },

      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "Is anal sex safer than vaginal sex?",
          content:
            "It depends on what you mean by safer. You can’t get pregnant from having anal sex, but anal sex without a condom or internal condom has one of the highest risks of STIs of any kind of sex. The skin of the anal cavity is made up of permeable mucous membranes which means it’s more delicate and absorbs more than regular skin, including the bacteria and viruses that cause STIs. And small tears and cuts are common during anal sex—especially if you’re not using enough lube—which creates additional points of entry for bacteria and viruses and increases the receiving partner’s chances of getting an STI from anal sex. To protect yourself while having anal sex, use plenty of lube and a barrier method, like condoms or internal condoms with the inner ring removed (just not both types of condoms at the same time).",
        },
        {
          id: "faq-2",
          title: "What's the deal with double bagging?",
          content:
            "When it comes to condoms, two is definitely not better than one. Using two condoms or a condom and an internal condom at the same time can create more friction, which increases the chances the condom(s) will break. If you want extra pregnancy prevention, double up with a condom and an effective method of birth control.",
        },
        {
          id: "faq-3",
          title: "What if I'm allergic to latex condoms or my partner is?",
          content:
            "Latex allergies are rare, but they happen. If you or your partner are allergic to latex, there are non-latex polyurethane condoms you can use to protect against pregnancy and STIs. Lambskin condoms are another option for preventing pregnancy, but they don’t protect against STIs. No other methods of birth control contain latex, so you can safely use them if you or your partner has a latex allergy.",
        },
        {
          id: "faq-4",
          title: "If I'm using another method of birth control, do I still have to use condoms?",
          content:
            "It depends on your situation. Unless you’re in a totally exclusive relationship and you and your partner have both been tested recently for every single STI, using condoms with whatever other birth control method you choose is a good idea. Basically, if there’s any chance you or your partner could have an STI, the only way to decrease the risk of transmitting it is by using condoms, internal condoms, dental dams, and/or PrEP, (a medication which decreases the risk of getting HIV.) Other forms of birth control don’t protect against STIs. Using a condom with another form of birth control is called dual protection. It means you’re being super-safe and protecting yourself against both pregnancy and STIs.",
        },
        {
          id: "faq-5",
          title: "How much does it cost to use condoms?",
          content:
            "For the most part, condoms are a relatively cheap method compared to other types of birth control, but since you have to use one every single time you have sex, they will be more cost effective if you have sex less frequently. Check with your local family planning clinics and find out if they offer free or low cost condoms and other kinds of birth control (most do). If you can’t get them for free, they’ll probably cost anywhere from $0.18 to $1.83, though these prices are from a survey of online retailers, so prices at the store may vary slightly.",
        },
        {
          id: "faq-6",
          title: "I'm tired of using condoms, is there another birth control method that will also protect me from STIs?",
          content:
            "Yes, try using an internal condom. It’s a barrier method that’s inserted into the vagina (instead of covering the penis, like an external condom) that will help protect against sexually transmitted infections (STIs) as well.",
        },
        {
          id: "faq-7",
          title: "Is it true that most condoms are about the same size—even Magnums?",
          content:
            "Magnums are a little bigger than regular condoms, but the truth is, most men don’t need ‘em. Regular-sized condoms will work for most. If you can stretch a condom over your hand, it will also fit on most penises. For a little more on the subject, check out 2 big 2 fit.",
        },
        {
          id: "faq-8",
          title: "What types of lube are safe to use with latex condoms?",
          content:
            "Both water-based and silicone-based lubricants are totally safe to use with latex condoms. Steer clear of oil-based lubricants (including massage oil, hand lotion, and Vaseline) that can cause condoms to break.",
        },
        {
          id: "faq-9",
          title: "Can I reuse a condom?",
          content:
            "Condoms are definitely not reusable. You need to put on a new one each and every time you have sex.",
        },
        {
          id: "faq-10",
          title: "What types of birth control are available over the counter?",
          content:
            "Condoms, internal condoms, spermicide, and emergency contraception are all available at your nearest pharmacy.",
        },
        {
          id: "faq-11",
          title: "Do condoms prevent HPV?",
          content:
            "HPV cannot pass through a latex condom. But this is the kicker: HPV is frequently carried on skin not covered by condoms. So condoms can help prevent HPV, but they’re not a guarantee.",
        },
        {
          id: "faq-12",
          title: "Is oral sex safer than vaginal sex?",
          content:
            "You can’t get pregnant from oral sex, but you can get an STI (sexually transmitted infection). So use condoms or dental dams and get tested regularly.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: " 'It's usually very assumed that we're gonna need condoms...' ",
          content: "",
        },
        {
          id: "review-3",
          title: "",
          content: "Apr 24, 2017V",
        },
        {
          id: "review-4",
          title: "",
          content:
            "Condoms are the only method that can protect against pregnancy and sexually transmitted infections (STIs). What’s not to love about that? They come in all shapes, sizes, and materials and combine nicely with other methods of birth control. So it’s no surprise that lots of people—even people who rely on another main method of pregnancy prevention—keep condoms in the mix. Here are real people talking about why they use condoms. Thinking you and your boo are ready to take the condom off? Here are some things to do before you stop using condoms.",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/cervical-cap": {
    about: {
      title: "About Curvical Cap",
      sections: [
        {
          id: "overview",
          title: "What is a cervical cap?",
          content:
            "The cervical cap is a reusable silicone cup you fill with spermicide and insert deep into your vagina before penis-in-vagina sex. The cervical cap covers your cervix and keeps sperm from entering your uterus and fertilizing an egg. The spermicide you use with it makes sperm less able to move. FemCap is the only brand of cervical cap available in the U.S. today. The cervical cap looks like a little sailor’s hat, with a wide, upturned brim. There are three different sizes of FemCap, and a provider will figure out which size you need, which is based on whether you’ve been pregnant before and how that pregnancy (or pregnancies) ended. You don’t have to see a provider in person to get the FemCap, but you do need a prescription for it. One super important thing to remember is that for the cervical cap to work correctly to prevent pregnancy, you need to use it with spermicide. The cervical cap is similar in a lot of ways to the diaphragm, another barrier method that you use with spermicide. But the two are different in a few ways. The cervical cap has a removal strap that makes it easier to take it out, whereas the diaphragm has a small removal dome to help you take it out. You can also leave the cervical cap in for 48 hours, while you can only leave the diaphragm in for 24 hours. Finally, the diaphragm is more effective at preventing pregnancy than the cervical cap if you’ve ever had a full-term vaginal birth.",
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content: `Internal condoms are pretty effective the way most people use them:\n
• Effectiveness Rates:\n
1. Perfect use: 95% effective\n
2. Typical use: 79% effective\n

What are perfect use and typical use?`
        },

        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "The cervical cap is hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Pay once for fitting ($0-$200) and the cap ($0-$89); ongoing cost for spermicide of around $1 per dose.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Irritation or discomfort are possible.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "The cervical cap doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to put it in place every time you’re going to have sex.",
        },
        {
          id: "choosing6",
          title: "The cervical cap might be for you if...",
          content: "",
        },
        {
          id: "choosing7",
          title: "Effectiveness at preventing pregnancy is NOT your top priority.",
          content: `The cervical cap is not considered one of the most effective methods of birth control out there.

The effectiveness of the cervical cap depends on whether you’ve been pregnant and/or had a vaginal birth before:

• If you’ve never had a full-term vaginal delivery, the cervical cap used with spermicide is 86% effective at preventing pregnancy. That means that with perfect use, on average, 14 out of every 100 people who’ve never had a full-term vaginal delivery and are using the cervical cap for a year will get pregnant.

• If you have had a full-term vaginal delivery, the cervical cap with spermicide is 71% effective at preventing pregnancy. That means that with perfect use, on average, 29 out of every 100 people who’ve had a full-term vaginal delivery and are using the cervical cap for a year will get pregnant.

But most people don’t use the cervical cap perfectly. Most people have trouble using their cervical cap correctly from time to time. The effectiveness of the cervical cap with typical use, which means how real people use it in real life, is more relevant for most people than its effectiveness with perfect use.

We only have an average number for typical use that includes everyone using the cervical cap, regardless of whether they’ve had a full-term vaginal birth. With typical use, the cervical cap is 77% effective at preventing pregnancy. That means that, on average, 23 out of every 100 people using the cervical cap (but not perfectly) for a year will get pregnant.`
        },

        {
          id: "choosing8",
          title:
            "You haven’t had a vaginal birth",
          content:
            "Cervical caps are more effective if you haven’t had a vaginal birth before. That’s because having a vaginal birth changes the size and shape of your cervix, making the cervical cap not fit as well after giving birth vaginally. The cervical cap does come in three sizes to help it fit better for people who have been pregnant and people who have given birth vaginally. The small size is for people who have never been pregnant before. The medium size is for people who have been pregnant but have not had a full-term vaginal delivery, which includes people who’ve had an abortion, a miscarriage, or a C-section. The large size is for people who have had a full-term vaginal delivery. Even with using the correct size, the cervical cap is still less effective in people who’ve given birth vaginally than in people who have never had a full-term vaginal birth.",
        },
        {
          id: "choosing9",
          title: "You want birth control without hormones.",
          content:
            "The cervical cap is a great option for people who don’t want to (or can’t) use hormones.",
        },
        {
          id: "choosing10",
          title:
            "You’re willing to put in some effort before having sex, every single time.",
          content:
            "In order for the cervical cap to work, you have to use it correctly, every time, no matter what.",
        },
        {
          id: "choosing11",
          title: "You’re comfortable touching your body.",
          content:
            "Putting in a cervical cap involves putting your fingers inside your vagina. It’s a lot like putting in a menstrual cup or menstrual disc. If you’re comfortable doing that, you should be good to go.",
        },
        {
          id: "choosing12",
          title: "You aren’t looking for STI protection, or you’re okay with combining the cervical cap with another method.",
          content:
            "Neither the cervical cap nor the spermicide you use with it offer any STI protection. In fact, over-the-counter spermicide can cause irritation, especially if you’re using it multiple times a day. This irritation affects the cells in your vagina and cervix that help to fight off infections, putting you at higher risk of getting a sexually transmitted infection (STI). So if STI protection is something you’re looking for, you can use condoms or internal condoms along with your cervical cap. Dental dams and/or gloves also offer STI protection, depending on what kind of sex you’re having. You may also want to consider PrEP (pre-exposure prophylaxis), which is a daily pill or an injection you can get every two months to decrease your risk of getting HIV.",
        },
        {
          id: "choosing13",
          title:
            "You want a method that won’t affect your future fertility.",
          content:
            "You need a prescription to get a cervical cap, which means you’ll have to see a health care provider, but you can use telehealth instead of having an in-person visit.",
        },
        {
          id: "choosing14",
          title: "You don’t mind a method that requires a visit to your health care provider.",
          content:
            "You need a prescription to get a cervical cap, which means you’ll have to see a health care provider, but you can use telehealth instead of having an in-person visit.",
        },
        {
          id: "choosing15",
          title: "You want a method that you can stop without help from a provider.",
          content: "Even though you have to see a provider to get started on the cervical cap, you don’t have to see one to stop using the cervical cap. Because it’s a birth control method that you only use when you’re going to have sex, you are totally in control of starting and stopping it.",
        },

        {
          id: "choosing16",
          title: "You don’t need to hide your method.",
          content: `The cervical cap isn’t one of the birth control methods that is easy to hide completely. First of all, because the cervical cap is reusable, you have to store it between uses, so someone you live with may be able to find it, depending on your circumstances.

Hiding it from a sexual partner is possible but may be difficult. You can put in your cervical cap up to 40 hours before having sex, and you can leave it in for up to 48 hours, but if you’re going to have sex again while the cap is in, check to make sure it’s in place without removing it. So you may be able to avoid your partner knowing you have the cervical cap in. But there are a few situations that would make it harder to hide the cervical cap from a sexual partner:

1. If you want to have sex spontaneously, you will have to interrupt the action to put the cervical cap and spermicide in before penetration (and possibly wait 15 minutes after putting it in depending on what kind of spermicide you’re using).

2. If you put the cervical cap in and then don’t have sex until an hour or more later, you will need to put more spermicide into your vagina (without taking the cervical cap out).

3. If you want to have sex again while the cervical cap is still in, you will need to check that the cervical cap is still in the correct position (without taking the cervical cap out) before each time you have sex.

4. Your partner may feel the cervical cap during sex, though most partners don’t.`
        },
        {
          id: "choosing17",
          title: "You don’t have any of these risk factors.",
          content: `Don’t use the cervical cap:
  
• During your period.
• If you’ve given birth in the last six weeks.
• If you’ve had a miscarriage or abortion in the last six weeks.
• If you’re allergic to silicone or spermicide.
• If you’re having sex multiple times a day with different partners. That’s because spermicide can affect the cells in your vagina and cervix that help to fight off infections, so using it multiple times a day puts you at higher risk of getting a sexually transmitted infection (STI).
• If you are HIV negative and your partner is HIV positive.
• If using spermicide causes irritation to your vagina or vulva.
• If you have a history of frequent urinary tract infections (UTIs).`
        },
        {
          id: "choosing18",
          title: "How do you use the cervical cap?",
          content: `
The cervical cap can be inserted up to **40 hours before sex**, so you can put it in early, and it won’t get in the way of the moment.

After having sex, you need to **leave it in for six hours** before removing it. You can leave it in for up to **48 hours**, but if you’re going to have sex again while the cap is in, **check to make sure it’s in place** without removing it.

---

**How to put it in**

With practice, most people are able to get the hang of putting in the cervical cap pretty quickly.

Here’s how to put the cervical cap in:

1. Wash your hands with soap and water.

2. Check your cervical cap for holes and weak spots.  
   Filling it with water is a good way to check — if it leaks, there’s a hole.

3. Put a quarter teaspoon or so (about a dime-sized amount) of **spermicide** in the dome of the cup (the part that touches your cervix), and spread some around the rim.

4. Flip the cap to the side with the **removal strap** and put another half teaspoon of spermicide in the indentation between the brim and the dome.

5. Get comfortable, like when inserting a tampon.  
   Some prefer putting one leg up on a toilet seat; others squat.

6. Insert your index and middle fingers into your vagina to **locate your cervix**.  
   It should feel firm but squishy — like the tip of your nose.

7. Use one hand to separate your vulva lips, and the other to squeeze the cap’s rim together.

8. Slide the cap into your vagina with the **strap-side last**.  
   The longer part of the brim should go in first.

9. Push the cap down toward your anus, then up to position it over your cervix.

10. Make sure your **cervix is fully covered**.

---

**After sex**

11. Leave the cervical cap in place for **at least 6 hours** after your partner ejaculates.

12. You can leave the cap in for **up to 48 hours total**.

13. If you have sex again while it’s still in, **check if it’s still in place** without removing it.

14. Use the spermicide applicator (usually included) to reapply spermicide close to the cervix if needed.

15. Remember: the **six-hour clock restarts** every time ejaculation happens in your vagina or on your vulva.

---

**How to take the cervical cap out**

16. Ensure **at least 6 hours have passed** since the last ejaculation.

17. Wash your hands with soap and water.

18. Get into a comfortable position and insert a finger into your vagina.

19. Grab the **removal strap** and gently rotate the cap.

20. Press on the **dome** to break the suction seal.

21. Hook your finger under the strap and **pull the cap out**.

22. Wash it with **mild soap and warm water**.

23. Let it **air dry**.

24. Don’t use powders or lubricants on the cervical cap.  
    *(Discoloration over time is normal — it will still work!)*.
`
        },


        {
          id: "choosing19",
          title: "How much does the cervical cap cost?",
          content:
            "",
        },
        {
          id: "choosing20",
          title: "With insurance",
          content:
            "If you have health insurance—whether it’s from work, school, your parents, the ACA marketplace, or Medicaid—chances are good that you’ll be able to get this method with no out-of-pocket cost.",
        },
        {
          id: "choosing21",
          title: "Without insurance",
          content:
            "If you don’t have insurance or if you’re on a plan that doesn’t cover birth control, the cervical cap costs $110 on the FemCap website, including the cost of getting a prescription. You have to buy spermicide separately, which costs around $1 per dose. The cervical cap should be replaced each year.",
        },
        {
          id: "choosing22",
          title: "What are the side effects and benefits of the birth control patch?",
          content:
            "There are positives and negatives about each and every method of birth control. And everyone’s different—so what you experience may not be the same as what your friend experiences.",
        },
        {
          id: "choosing23",
          title: "The Positive",
          content: `
There are some advantages to using the cervical cap, including:

• You can put the cervical cap in up to **40 hours** before having sex.

• You can have sex as many times as you like while it’s in — just check its position (without removing it).

• Usually **neither partner can feel it** during sex, although some partners can.

• It’s **safe to use while breastfeeding**.
`
        },



        {
          id: "choosing24",
          title: "The Negative",
          content: `
It’s normal to think about side effects, but for many people, they’re not a problem.

Some side effects may include:

• **Spermicide can cause vaginal irritation**.

• Some people get frequent **urinary tract infections** when using the cap.

• It can get **pushed out of place** by large penises, heavy thrusting, or certain sexual positions.

---

In addition to potential side effects, there may be some downsides to using the cervical cap, including:

• **Learning to insert it** can take some practice.

• It doesn’t offer **any protection against STIs**  
  (and irritation caused by spermicide can actually increase the risk of STIs).

• You have to use it **every time you have sex**, no matter what.

• **Inserting more spermicide** can interrupt sex.
`
        },


        {
          id: "choosing25",
          title: "Where can you get the cervical cap?",
          content:
            "",
        },
        {
          id: "choosing26",
          title: "",
          content:
            "You have to get a prescription to get the cervical cap, so you can see a provider in-person or via telehealth. You can get the cervical cap itself on the FemCap site.",
        },


      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "I scratched my cervix when taking out my cervical cap. Is that going to keep happening?",
          content:
            "That sounds horrible, but luckily, it shouldn’t happen very often.",
        },
        {
          id: "faq-2",
          title: "Will I be able to feel the cervical cap inside of me?",
          content:
            "Most people don’t feel the cervical cap inside of them if it’s inserted correctly.",
        },
        {
          id: "faq-3",
          title: "Does the cervical cap protect against STIs?",
          content:
            "If you use the cervical cap and are concerned about both pregnancy and STIs, doubling up with the cap and condoms could be a good option.",
        },
        {
          id: "faq-4",
          title: "What if I'm having trouble getting the cervical cap in or out?",
          content:
            "If you’re new to the cervical cap, check out our “how to.” Practice a little more and do so when it’s not the heat of the moment. Hopefully you’ll soon find it easy to use.",
        },
        {
          id: "faq-5",
          title: "What if the cervical cap is causing irritation?",
          content:
            "The irritation could actually be from an allergy to spermicide. Try this: If the irritation isn’t too bad, you might want to try another brand of spermicide.",
        },
        {
          id: "faq-6",
          title: "How do I insert the cervical cap?",
          content:
            "Check out our section on how to insert the cervical cap.",
        },
        {
          id: "faq-7",
          title: "How do I remove the cervical cap?",
          content:
            "Check out our section on how to remove the cervical cap.",
        },
        {
          id: "faq-8",
          title: "What if my cervical cap is starting to smell?",
          content:
            "This can happen if you’ve left it in more than 48 hours. Try this: Rinse it thoroughly and let it dry. If the odor sticks around, you may want to get checked for a condition called bacterial vaginosis (a condition that can cause that bad-smelling discharge).",
        },
        {
          id: "faq-9",
          title: "How effective is the cervical cap at preventing pregnancy?",
          content:
            "This one’s a little confusing. We only know about the effectiveness of the cervical cap based on typical use (not perfect use) and it’s between 71% and 86%, depending on whether a woman has been pregnant before and what size of a cap she uses. In other words: 14 out of 100 women who",
        },

      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Matt, 24, cervical cap",
          content: "",
        },
        {
          id: "review-3",
          title: " It’s basically as close to natural as we can get.",
          content: "Oct 11, 2011 Updated: Jun 19, 2015",
        },
        {
          id: "review-4",
          title: "",
          content:
            "Matt’s girlfriend tried an IUD and the pill, but her body had a hard time adjusting to them and they diminished her sex drive. That’s when she asked about non-hormonal methods and her doctor recommended the cervical cap. For Matt, it feels a lot like using nothing at all and creates a sense of closeness that he did not experience using condoms. And it can be inserted before going out for the night, so the cervical cap is good if you don’t mind planning ahead now for a bit of spontaneity later. At first, there were a few times when Matt felt the cap, bumping it loose from her cervix. But that only required a quick adjustment and they were good to go at it again. Now that it’s their method of frequent use, he has learned what his range is down there and it’s smooth sailing. ",
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/spermicide-gell": {
    about: {
      title: "About Spermicide & Gell",
      sections: [
        {
          id: "overview",
          title: "What are spermicides and gels?",
          content:
            `“Spermicide” describes a bunch of different creams, films, foams, gels, and suppositories that you insert deep into your vagina before sex to prevent pregnancy. On its own, spermicide provides some pregnancy prevention, but pairing it with another method is way more effective. Some condoms come coated in spermicide, or you can use a separate spermicide along with a condom. There are other methods, like the cervical cap and the diaphragm, that need to be used with spermicide to be effective.

Spermicide contains chemicals that prevent pregnancy in two ways. The first way spermicide works is by stopping sperm from moving normally. The second way is by keeping sperm from getting through your cervix and into your uterus. (Think of your cervix like a doorway between your vagina and your uterus.) In order for spermicide to work correctly, you have to insert it deep into your vagina, so that it actually covers your cervix.

Phexxi is a birth control gel that is similar to over-the-counter spermicide but is more effective. Phexxi is only available by prescription.`,
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            `Spermicide on its own, without a barrier method like a diaphragm or condom, is pretty effective the way most people use it. Prescription-only vaginal gel is more effective than over-the-counter spermicide.

Perfect use: 84% to 93% effective

Typical use: 79% to 86% effective


What are perfect use and typical use?`,
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "Spermicide and gel are hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Anywhere from $0 to $32 per dose.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Irritation or urinary tract infections are possible.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Spermicide and gel doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "You have to apply a dose of spermicide before each time you have penis-in-vagina sex",
        },
        {
          id: "choosing6",
          title: "Types of spermicide and gel",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "Prescription vaginal gel (Phexxi)",
          content:
            "Phexxi is similar to spermicide in that it’s a gel that goes into the vagina before sex to prevent pregnancy. It works by maintaining the low pH of your vagina, which interferes with how sperm move. Phexxi is more effective when used on its own than over-the-counter spermicide is when it’s used on it’s own. Phexxi can also be used with any other method of birth control (except the ring) for extra pregnancy prevention.",
        },
        {
          id: "choosing8",
          title:
            "Over-the-counter spermicide",
          content:
            `Most spermicides are sold over the counter, which means you don’t need a prescription to get them. Over-the-counter spermicides contain a chemical called nonoxynol-9. They come in different forms—they can be gels, films, foams, suppositories, or creams. Popular over-the-counter spermicide brands include VCF and Options Gynol II.

If you’re a diaphragm or cervical cap user, using spermicide as well is key to effective pregnancy prevention. On its own, over-the-counter spermicide does offer some pregnancy prevention, but using it with another method is much more effective.`,
        },
      ],
    },

    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "How effective is spermicide at preventing pregnancy?",
          content:
            `There are two types of spermicide, prescription and over-the-counter options. How effective it is depends on the type you use. If over-the-counter spermicide is used alone, it is only somewhat effective—around 84% when used perfectly and 79% with typical use, that means how real people use it in real life.

In other words:

For people who use spermicide perfectly every single time for a whole year, about 16 in 100 will get pregnant when they don’t want to during the first year of using spermicide.

For people who use spermicide as people typically use it, about 22 in 100 will get pregnant when they don’t want to during the first year of using spermicide.

Prescription spermicide is more effective, 93% effective with perfect use and 86% effective with typical use.`,
        },
        {
          id: "faq-2",
          title: "Is there a way to use spermicide without making a mess?",
          content:
            `You could try switching brands and making sure you’re using your spermicide exactly as the instructions say you should. That said, spermicide is messy. If it bothers you you might want to look into another method.`,
        },
        {
          id: "faq-3",
          title: "What types of birth control are available over the counter?",
          content:
            "Condoms, internal condoms, spermicide, and emergency contraception are all available at your nearest pharmacy.",
        },
        {
          id: "faq-4",
          title: "Is birth control available over the counter?",
          content:
            `In the U.S. the only forms of birth control available over the counter (OTC) are condoms, internal condoms, spermicide, the sponge, and emergency contraception pills. There’s been some debate about whether birth control pills should be sold OTC too as they are in many other countries, but for now you need a prescription.

If you’re looking for a method that requires a prescription, visit your local health clinic or find the nearest one here.`,
        },
        {
          id: "faq-5",
          title: "Is there anything I can do if spermicide is irritating me?",
          content:
            "The irritation might be because of the brand of spermicide you’re using, so you might want to try out another kind.",
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Kevin, 21, Spermicide",
          content: "",
        },
        {
          id: "review-3",
          title: "After 15 minutes it disperses and allows for three hours of safe sex.",
          content: "Oct 11, 2011",
        },
        {
          id: "review-4",
          title: "",
          content:
            `We say film, you think movie. But for Kevin and his girl, it’s their birth control method of choice. She inserts a small, thin piece of vaginal contraceptive film at least 15 minutes before sex and the film dissolves and disperses spermicide inside her.

The only drawback for Kevin is if they don’t plan ahead. They might have to stop the action, put in the film and wait out those 15 minutes it takes to dissolve. (But he says this usually isn’t an issue.)

They turned to this method because she found condoms to be painful and there are no hormones involved. If you try it, make sure you’re not too sensitive to the ingredients. (Spermicide can irritate some people down there.)`,
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/sterilization": {
    about: {
      title: "About Sterilization",
      sections: [
        {
          id: "overview",
          title: "What is sterilization?",
          content:
            `Sterilization is permanent birth control. It’s one of the most effective kinds of birth control available, but it’s also the biggest commitment. Sterilization is for people who are sure they will never want to get pregnant or get someone else pregnant. There are sterilization procedures both for people with a uterus, ovaries, and fallopian tubes (this procedure is called tubal ligation) and for people with testicles and a penis (this procedure is called vasectomy). Neither of these types of sterilization affects sexual pleasure or performance, and you can still orgasm after sterilization.`,
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            `Sterilization is super effective—it’s one of the most effective ways to prevent pregnancy.

Perfect use: Over 99% effective

Typical use: Over 99% effective


What are perfect use and typical use?`,
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "Sterilization is hormone-free.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "As low as $0 (with insurance) or as high as $6,000.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "Possible pain or discomfort right after the procedure.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Sterilization doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "Nothing you have to do once the procedure is done.",
        },
        {
          id: "choosing6",
          title: "Types of Sterilization",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "Tubal ligation",
          content:
            `Tubal ligation is a safe, effective, and permanent procedure for people with uteruses and fallopian tubes. It’s sometimes called “getting your tubes tied.” Your fallopian tubes are where your egg and a partner’s sperm meet, which can lead to pregnancy. To keep eggs and sperm apart, a health care provider will close off your fallopian tubes, remove a section of each of them, or remove both fallopian tubes entirely.

How tubal ligation is done depends partly on whether you’re doing it right after having a baby or not. But no matter what type of tubal ligation you have, it will involve some type of anesthesia, and recovery will take a few days.`,
        },
        {
          id: "choosing8",
          title:
            `Vasectomy`,
          content:
            `A vasectomy is a safe and effective sterilization procedure for people with testicles and penises. Vasectomies prevent pregnancy by permanently closing off the vas deferens, the tubes that carry sperm. That means sperm cannot get into the vagina during penis-in-vagina sex, and therefore pregnancy can’t happen.`,
        },
      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "Is it normal to feel exhausted and sore several weeks after having the sterilization procedure?",
          content:
            `It’s normal to be sore and tired for days or even weeks after the procedure. However, if you’re concerned, or if you don’t start to regain your strength soon, you should check in with your doctor just in case.`,
        },
        {
          id: "faq-2",
          title: "I'm having pregnancy symptoms—is it possible I could be pregnant even though I've been sterilized?",
          content:
            `Sterilization is extremely effective and is intended to be permanent. Nevertheless, about 5 of every 1,000 women become pregnant within a year after the procedure and that small risk remains until menopause, so you should get a pregnancy test if you’re concerned.`,
        },
        {
          id: "faq-3",
          title: "My partner and I are sure we don't want to have [more] children, but I'm not thrilled by the prospect of surgery. What are our alternatives?",
          content:
            `Sterilization for women is pretty safe so you shouldn’t worry too much about the surgery, but a vasectomy (male sterilization) is even lower risk, so you and your partner might want to look into that first.

`,
        },
        {
          id: "faq-4",
          title: "What are the best methods that my partner won't notice?",
          content:
            `Some methods are much easier to hide than others. The shot and the implant are invisible, so nobody will know you’re using birth control. The IUD is also very discrete, so that’s another possibility, though some guys may be able to feel the strings during sex. And if you are looking for a permanent solution, sterilization surgery is also undetectable, but there may be age restrictions and waiting periods for this procedure.

`,
        },
        {
          id: "faq-5",
          title: `Is there male birth control?
`,
          content:
            `The only birth control options for guys that are currently available are condoms, sterilization, and the withdrawal method. There have been some promising leads for other options, but they’re still in development.

`,
        },
        {
          id: "faq-6",
          title: `What does it mean to get your tubes tied?
`,
          content:
            `Surgical sterilization, also called tubal ligation or getting your tubes tied, is a surgical procedure where a doctor puts a clip, band, or ring on the fallopian tubes, or removes a section of the tubes. (In other words, it doesn’t usually involve tying!) This type of procedure prevents eggs from being fertilized after they are released from the ovaries. Surgical sterilization is permanent and effective immediately.

`,
        },
        {
          id: "faq-7",
          title: "Can I get pregnant if I've had endometrial ablation?",
          content:
            `In short, yes.

While pregnancy’s not likely — and not recommended — after ablation, it can happen, so women who have had an endometrial ablation (a.k.a. uterine ablation) should use birth control until after menopause. While it may be possible to get pregnant after this procedure, pregnancy after endometrial ablation can be complicated, so you shouldn’t get the procedure unless you’re sure you don’t want (more) kids. Sterilization may be a good option if you’ve had an endometrial ablation to make sure you never have to worry about an unplanned pregnancy.

`,
        },
        {
          id: "faq-8",
          title: "How long will it take to heal after sterilization?",
          content:
            `If you have a laparoscopy, you may be sore for a few days. The incisions are small, but you still may take a couple weeks to heal completely. If you have an Essure, you should feel back to normal in a day or 2 since there are no incisions (but don’t forget, it does take the Essure 3 months to be effective so use a back-up method until). Essure will no longer be sold after the end of 2018. Find out more here.

`,
        },
        {
          id: "faq-9",
          title: `Which sterilization procedure is right for me?
`,
          content:
            `There are two types of permanent sterilization procedures for women: surgical and non-surgical. Within the surgical category, there are a few different options as well. Individual choice depends on preference and any medical conditions that may affect surgery risk. Talk with your health care provider to see which procedure is right for you.

`,
        },
        {
          id: "faq-10",
          title: `Is it safe to use birth control right after giving birth?
`,
          content:
            `Not every method of birth control is safe to use right after giving birth, but many of them are. Breastfeeding consistently can be its own form of birth control, or there are a bunch of other methods you can use, including super-effective methods like the IUD and the implant. If you feel like this will be your last bundle of joy, sterilization is also an option. (P.S. Sterilization could also be an option for your partner!)

`,
        },
      ],
    },
    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title:
            "Hear real people share their very real experiences with different methods of birth control.",
          content: " ",
        },
        {
          id: "review-2",
          title: "Daniel, 26, sterilization",
          content: "",
        },
        {
          id: "review-3",
          title: "You don’t have the worry of an unexpected pregnancy.",
          content: "Oct 11, 2011",
        },
        {
          id: "review-4",
          title: "",
          content:
            `Daniel has a son who means the world to him.

Focusing exclusively on his one child felt right for him, so he opted for a vasectomy. That way, he’d never have to worry about broken condoms, missed pills, or the life-changing impact of an unplanned pregnancy.

He found the procedure to be surprisingly quick and easy. Afterwards, his doctor made sure that his sperm count was zero and then he was free to enjoy birth control-free sex with his girlfriend without any fear of getting her pregnant.`,
        },
      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/emergency-contraception": {
    about: {
      title: "About Emergency-Contraception ",
      sections: [
        {
          id: "overview",
          title: "What is emergency contraception?",
          content:
            `Emergency contraception (EC) (sometimes called the “morning after pill”) can stop a pregnancy before it starts by delaying ovulation. There are three different kinds of EC: an over-the-counter pill, a prescription-only pill (called ella), and certain IUDs.

Both the over-the-counter pill and the prescription-only pill work if you take them within five days (or 120 hours) after having unprotected penis-in-vagina sex. The sooner you take EC pills, the more effective they are, but prescription-only EC is more likely to be effective on the fifth day after unprotected sex than over-the-counter EC is. So it’s a good idea to get EC in advance, so that if you need it in the future, you’ll have it on hand and can start it as soon as possible.

Some people think that the emergency contraception pill is the same as the abortion pill, but they’re actually completely different. Both types of emergency contraception pills work by preventing ovulation (the release of an egg from one of your ovaries) during your current menstrual cycle. If you don’t ovulate, then there’s no egg for your partner’s sperm to fertilize. The abortion pill, on the other hand, stops a pregnancy that has already started (which means you’ve ovulated, the egg has been fertilized, and the fertilized egg has implanted in your uterus). Then it brings on your period, which flushes everything out of your uterus.

While EC pills are the most well-known kind of emergency contraception, the most effective kind of EC is actually having an IUD inserted within five days of having unprotected sex.

There are three IUDs that we know work as EC: Paragard, LILETTA, and Mirena. Not only can they prevent a pregnancy from starting after you’ve had unprotected sex, but they can also act as an extremely effective birth control method moving forward.`,
        },
        {
          id: "types",
          title: "Quick Facts",
          content:
            "Very effective if you use it correctly. Lasts for months, is private, and is a good hormonal option for those who can't take estrogen.",
        },
        {
          id: "effectiveness1",
          title: "Effectiveness",
          content:
            `The IUD as EC is super effective. The prescription-only EC pill is more effective than the over-the-counter EC pill but neither is as good at preventing pregnancy as lots of methods you can use before or during sex.

Perfect use: If you use the IUD as EC, over 99% effective

Typical use: If you use the IUD as EC, over 99% effective


What are perfect use and typical use?`,
        },
        {
          id: "effectiveness2",
          title: "Hormones",
          content:
            "There are hormonal and non-hormonal options.",
        },
        {
          id: "choosing1",
          title: "Cost",
          content:
            "Anywhere from $0-$1300.",
        },
        {
          id: "choosing2",
          title: "Side effects",
          content:
            "With the IUD you might have bleeding changes and cramping. EC pills can cause temporary upset stomach, vomiting, changes to your period, and sore breasts.",
        },
        {
          id: "choosing3",
          title: "STI protection",
          content: "Emergency contraception doesn’t protect against STIs.",
        },
        {
          id: "choosing5",
          title: "Ongoing effort",
          content: "With the IUD, it’s inserted once and can stay in for years with no ongoing effort. With EC pills, once you’re done taking them, you’re done.",
        },
        {
          id: "choosing6",
          title: "Types of emergency contraception",
          content: "",
        },
        {
          id: "choosing7",
          title:
            "Over-the-counter EC pill",
          content:
            `Over-the-counter emergency contraception is a pill you can grab at the drugstore, the grocery store, a health center near you, or online. There are no age, sex, or gender restrictions on who can get over-the-counter emergency contraception, and you don’t have to show ID to buy it.

You may know over-the-counter emergency contraception by the brand name Plan B, but there are many other brands just like it, such as Next Choice, One Dose, and My Way. Over-the-counter EC may not be as effective in people who weigh 165 pounds or more.`,
        },
        {
          id: "choosing8",
          title: `Prescription EC pill (ella)`,
          content:
            `Ella is a different kind of emergency contraception pill than the kind you can get over the counter. You need a prescription to get it, but you may be able to get the prescription from a telehealth provider. There’s no age requirement to get ella. Ella may be less effective in people who weigh 195 pounds or more. It’s a better option than over-the-counter EC pills for people who weigh between 165 and 194 pounds.`,
        },
        {
          id: "choosing9",
          title: `IUD as EC`,
          content:
            `The most effective type of emergency contraception is the IUD. If you get the non-hormonal/copper IUD (Paragard) or a hormonal IUD with 52mg of levonorgestrel (LILETTA or Mirena) inserted within five days of having unprotected sex, it’s over 99% effective at preventing pregnancy.

If you want to, you can keep the IUD in for up to eight years if you have LILETTA and Mirena or up to 12 years if you have Paragard. You can also choose to have it removed once you’ve used it as EC. To use an IUD for EC, you’ll need to see a health care provider to have one inserted. IUDs work equally well as EC for everyone, regardless of weight.`,
        },
      ],
    },
    faqs: {
      title: "Birth Control FAQs",
      sections: [
        {
          id: "faq-1",
          title: "If I think I could be pregnant, what should I do?",
          content:
            `If you had sex and didn’t use a method of birth control within the last five days, you might want to use emergency contraception to prevent pregnancy. You can get over the counter EC pills, like Plan B, without a prescription or talk to a health care provider to get prescription EC pills. You can also look into getting some types of IUD, the most effective emergency contraceptive option.

If it’s been more than five days, you can get a pregnancy test or go to the doctor to see if you are, in fact, pregnant. You have to wait at least 10 days after unprotected sex for the tests to work, and they are more accurate if you wait to take them until a few days after you expect your next period. If you’re not pregnant, you can consider getting started with a birth control method.`,
        },
        {
          id: "faq-2",
          title: "Is emergency contraception the same thing as the abortion pill?",
          content:
            `No. No. No. If you’re already pregnant (even if you don’t know it yet), EC won’t work. EC can only prevent a pregnancy from starting; it can’t stop one that already has. And if you accidentally take EC before you know you’re pregnant, it won’t hurt you or the pregnancy. Check out our guide to how EC, birth control, and the abortion pill work and how and when to use them.`,
        },
        {
          id: "faq-3",
          title: "Does your weight affect how well your birth control works?",
          content:
            `The effectiveness of almost all types of birth control will not be impacted by your weight. Two exceptions are the patch and emergency contraception.

For the patch, Xulane may be less effective if you weigh more than 198 pounds. Twirla, the other patch option, may be less effective at preventing pregnancy if your BMI is 25 or greater, and it should not be used at all if your BMI is 30 or greater because of decreased effectiveness and a potentially increased risk of blood clots.

When it comes to emergency contraception, over-the counter levonorgestrel-based emergency contraception, like Plan B One-Step, Next Choice One Dose, and others, may not be as effective in people who weigh 165 pounds or more. Ella, which is prescription-only emergency contraception, is equally effective in people who weigh between 165 and 194 pounds as it is in people who weigh under 165 pounds. But ella may not work as well if you weigh 195 pounds or more. The copper IUD and IUDs with 52mg of levonorgestrel (Mirena and Liletta) are the only emergency contraception options proven equally effective if you weigh 195 pounds or more. IUDs are also the most effective form of emergency contraception for everyone, regardless of weight.`,
        },
        {
          id: "faq-4",
          title: "What if my local pharmacy doesn't stock or runs out of emergency contraception?",
          content:
            `EC should be available at most pharmacies and health clinics, but it’s probably worth looking into where in your area it’s available before going to get it. That said, we highly recommend always keeping EC on hand “just in case.” The sooner you take it, the more effective it is. And it’s a lot less stressful than running around town looking for some after the fact.
`,
        },
        {
          id: "faq-5",
          title: `If I am using enzyme inducers (such as Dilantin the antibiotics rifampicin or griseofulvin, or St. John's Wort), will it make emergency contraceptive pills less effective?
`,
          content:
            `Medications and herbal supplements that may make regular birth control pills less effective may also reduce the effectiveness of emergency contraceptive pills. So if you are using an enzyme inducer, it probably makes sense to increase the dose of EC. You should talk to your doctor about how much to increase the dose.
`,
        },
        {
          id: "faq-6",
          title: `I took EC for unprotected sex then I had unprotected sex again. Should I take EC again?
`,
          content:
            `Yes. To be safe, you should take another dose of emergency contraception.
`,
        },
        {
          id: "faq-7",
          title: "Can I take the morning-after pill at night?",
          content:
            `Yes. You can take emergency contraception pills (the morning-after pill) at any time of day for up to 5 days after unprotected sex. For emergency contraception pills like Plan B One-Step, Next Choice, Next Choice One Dose, and Levonorgestrel, the sooner you take them more effective they are. The emergency contraceptive pill ella doesn’t decrease in effectiveness over those 5 days.
`,
        },
        {
          id: "faq-8",
          title: "Are guys allowed to buy emergency contraception?",
          content:
            `Any person can get levonorgestrel-based EC pills at their local pharmacy or clinic without a prescription, regardless of age or gender.

`,
        },
        {
          id: "faq-9",
          title: `Can I get emergency contraception if I'm under 17?
`,
          content:
            `Whatever age or gender you are, you can buy levonorgestrel-based emergency contraception (EC) pills including Plan B One-Step, Next Choice One Dose, and My Way over-the-counter at the pharmacy without a prescription. Learn more about getting EC.

`,
        },
        {
          id: "faq-10",
          title: `How is ella different from Plan B One-Step or Next Choice One Dose?
`,
          content:
            `Plan B One-Step, Next Choice One Dose, and other levonorgestrel-based emergency contraception pills work because of the synthetic hormone progestin. Basically, progestin tricks your body into thinking it’s already pregnant. And that jumpstarts your body’s pregnancy-preventing reactions. Birth control pills use this same science (in low, daily doses). On the other hand, ella acts to suppress progesterone. This delays ovulation for up to five days, giving sperm time to die before an egg is released. (And that’s good because sperm can survive in your uterus anywhere from three to six days after sex.) Ella may also thin the lining of your uterus, making it harder for a fertilized egg to be implanted.
`,
        },
        {
          id: "faq-11",
          title: `Is birth control available over the counter?
`,
          content:
            `In the U.S. the only forms of birth control available over the counter (OTC) are condoms, internal condoms, spermicide, the sponge, and emergency contraception pills. There’s been some debate about whether birth control pills should be sold OTC too as they are in many other countries, but for now you need a prescription.
`,
        },
        {
          id: "faq-12",
          title: `What is levonorgestrel?
`,
          content:
            `Levonorgestrel is one of the longest-studied types of progestin, and all the scientific evidence to date shows it is super safe. It’s used in hormonal IUDs, some emergency contraception pills, and certain birth control pills.
`,
        },
      ],
    },

    reviews: {
      title: "Birth Control Method Reviews",
      sections: [
        {
          id: "review-1",
          title: "Emergency contraception: the male perspective",
          content:
            `"Definitely don’t want to use it unless I have to."`,
        },
        {
          id: "review-2",
          title: "Oct 11, 2011",
          content:
            `Pregnancy scares are no fun. That’s something men and women seem to agree on.

Even though women are the ones who physically have to use emergency contraception, we asked a group of guys to talk about their experiences with it. Their stories are unique, but all of them were grateful that emergency contraception was available when they needed it.`,
        },

      ],
    },
    articles: {
      title: "Birth Control Articles",
      sections: [
        {
          id: "article-1",
          title: "Hormonal vs. Non-Hormonal Birth Control",
          content:
            "Compare the benefits and considerations of hormonal and non-hormonal contraceptive options.",
        },
        {
          id: "article-2",
          title: "Long-Acting Reversible Contraceptives (LARCs)",
          content:
            "Everything you need to know about IUDs and implants - the most effective reversible methods.",
        },
        {
          id: "article-3",
          title: "Birth Control and Your Health",
          content:
            "How different contraceptive methods can affect your overall health and well-being.",
        },
      ],
    },
  },

  "types/iud": {
    about: {
      title: "About Intrauterine Devices (IUDs)",
      sections: [
        {
          id: "overview",
          title: "What is an IUD?",
          content:
            " An intrauterine device (IUD) is a small, T-shaped piece of plastic that a healthcare professional inserts into the uterus.It works by preventing sperm from fertilizing an egg, making it an effective form of long- term birth control.In the United States, five FDA - approved IUD brands are available: Mirena, Kyleena, Skyla, LILETTA, and Paragard. IUDs provide continuous pregnancy prevention for several years, depending on the type.Some last up to 3 years, while others protect for as long as 12 years.You can have your IUD removed at any time if you wish to become pregnant or switch methods.Importantly, using an IUD will not impact your ability to conceive in the future. Although highly effective at preventing pregnancy, IUDs do not offer protection from sexually transmitted infections(STIs).To reduce STI risk, consider using barrier methods like condoms or dental dams, or preventive options like PrEP.Three IUDs—Paragard, LILETTA, and Mirena—can also serve as emergency contraception if inserted within five days of unprotected sex, preventing pregnancy in over 99% of cases.",
        },
        {
  id: "types-1",
    title: "Types of IUDs",
      content:
  "• Hormonal IUDs (Mirena, Skyla, Liletta, Kyleena) - release progestin\n• Copper IUD (Paragard) - hormone-free, uses copper to prevent pregnancy",
        },
{
  id: "types-2",
    title: "Hormonal IUD",
      content: "These IUDs release a small dose of progestin, a synthetic hormone similar to the body’s natural progesterone. Progestin thickens cervical mucus to block sperm from reaching an egg.Hormonal IUDs may cause changes in menstrual cycles. Periods might become lighter, shorter, more irregular, or stop entirely. The protection period varies by brand, with Mirena offering up to 8 years of contraception.",
        },
{
  id: "types-3",
    title: "Non-hormonal/copper IUD",
      content:
  "Paragard is the only non-hormonal IUD available in the U.S. It’s made of plastic and copper, which creates a sperm-toxic environment in the uterus. Paragard offers protection for up to 12 years.Unlike hormonal IUDs, it doesn’t alter your hormonal balance or stop your period. However, some users experience heavier bleeding or stronger cramps initially, which may improve over time.",
        },
      ],
    },
faqs: {
  title: "IUD Frequently Asked Questions",
    sections: [
      {
        id: "faq-1",
        title:
          "Does the non-hormonal/copper IUD (Paragard) cause copper toxicity?",
        content:
          " Copper IUDs are considered safe for nearly all individuals with a uterus. Copper toxicity is extremely rare and primarily a concern for those with Wilson’s Disease, a genetic disorder that impacts the body’s ability to process copper—affecting only about 1 in 30,000 to 40,000 people. The copper released by the IUD is minimal, and for people without this condition, the risk of copper buildup is virtually nonexistent.",
      },
      {
        id: "faq-2",
        title: "Is IUD insertion painful?",
        content:
          " You may feel temporary discomfort during insertion, often described as a strong menstrual cramp.  The process is quick—usually 5 to 10 minutes—and many healthcare providers offer options to  reduce pain.",
      },
      {
        id: "faq-3",
        title: " Can someone without children use an IUD?",
        content:
          "Yes, IUDs are safe and highly effective for individuals who haven’t had children. The belief that IUDs are only for those who’ve given birth is a myth that has long been disproven.",
      },
      {
        id: "faq-4",
        title: "Can a partner feel the IUD during intercourse?",
        content:
          " The IUD itself won’t be felt during sex. In rare cases, a partner may notice the strings, but these typically soften with time. If needed, a provider can trim the strings for added comfort.",
      },
      {  
        id: "faq-5",
        title: "What changes should I expect in my period with an IUD?",
        content:
          " Hormonal IUDs may lighten or even stop your periods. Copper IUDs can cause heavier bleeding at first, but this typically lessens as your body adjusts.",
      },
      {
        id: "faq-6",
        title: "Is it possible for the IUD to move or get lost?",
        content:
          " No, the IUD stays securely inside your uterus and cannot travel to other parts of your body. It does not migrate beyond its intended position.",
      },
      {
        id: "faq-7",
        title: "How soon can I conceive after removing an IUD?",
        content:
          "Most people regain fertility immediately following IUD removal. Pregnancy is possible as early as the first menstrual cycle after removal.",
      },
      {
        id: "faq-8",
        title: "Is the vaginal birth control ring a good option for you?",
        content:
          "We’ll connect you with either a local health provider or a trusted service that delivers birth control discreetly online.",
      },
    ],
    },
reviews: {
  title: "IUD User Reviews & Experiences",
    sections: [
      {
        id: "Does it hurt to get an IUD?",
        title:
          "You know, you kinda have to bear through it until your uterus is like, 'okay, we're friends, we're gonna work together.' ",
        content: "Apr 24, 2017",
      },
    ],
    },
articles: {
  title: "IUD Articles & Resources",
    sections: [
      {
        id: "article-1",
        title: "Complete IUD Guide: Everything You Need to Know",
        content:
          "Comprehensive guide covering all aspects of IUDs, from types and effectiveness to insertion and removal.",
      },
      {
        id: "article-2",
        title: "Hormonal vs. Copper IUD: Which is Right for You?",
        content:
          "Detailed comparison to help you decide between hormonal and non-hormonal IUD options.",
      },
      {
        id: "article-3",
        title: "What to Expect: IUD Insertion and Recovery",
        content:
          "Preparation tips, insertion process details, and aftercare instructions for IUD insertion.",
      },
      {
        id: "article-4",
        title: "IUD Myths Debunked by Medical Experts",
        content:
          "Addressing common misconceptions about IUDs with evidence-based medical information.",
      },
    ],
    },
  },
};

const DynamicTabsComponent = ({ contentData }) => {
  const location = useLocation();
  const route = location.pathname || "/home";
  const routeKey = route.toLowerCase().replace(/^\/+/g, "").trim() || "home";

  const [activeTab, setActiveTab] = useState("About");
  const [activeSection, setActiveSection] = useState("");
  const [sidebarSticky, setSidebarSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabContentRef = useRef(null);
  const sidebarRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getContentForRoute = () => {
    // First check if contentData prop has the content
    if (contentData && contentData[activeTab.toLowerCase()]) {
      return contentData[activeTab.toLowerCase()];
    }

    // Then check the routeContentData
    if (
      routeContentData[routeKey] &&
      routeContentData[routeKey][activeTab.toLowerCase()]
    ) {
      return routeContentData[routeKey][activeTab.toLowerCase()];
    }

    return null;
  };

  const currentTabData = getContentForRoute();

  // Reset tab when route changes
  useEffect(() => {
    setActiveTab("About");
    setActiveSection("");
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [route]);

  useEffect(() => {
    const handleScroll = () => {
      if (tabContentRef.current && sidebarRef.current && !isMobile) {
        const tabContentRect = tabContentRef.current.getBoundingClientRect();
        const shouldBeSticky =
          tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
        setSidebarSticky(shouldBeSticky);
      }

      if (tabContentRef.current) {
        const sections =
          tabContentRef.current.querySelectorAll("[data-section-id]");
        let currentActiveSection = "";

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentActiveSection = section.getAttribute("data-section-id");
          }
        });

        if (currentActiveSection) {
          setActiveSection(currentActiveSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const tabs = ["About", "FAQs", "Reviews", "Articles"];

  const getRouteDisplayName = () => {
    const routeNames = {
      home: "Birth Control Hub",
      "birth-control": "Birth Control Methods",
      pill: "Birth Control Pills",
      iud: "Intrauterine Devices (IUDs)",
      implant: "Birth Control Implant",
      patch: "Birth Control Patch",
      ring: "Vaginal Ring",
      shot: "Birth Control Shot",
      condom: "Condoms",
      diaphragm: "Diaphragm",
      "types/iud": "Intrauterine Devices (IUDs)",
    };
    return (
      routeNames[routeKey] ||
      routeKey.charAt(0).toUpperCase() + routeKey.slice(1)
    );
  };

  const getCallToAction = () => {
    const cta = {
      home: {
        title: "Ready to Learn More?",
        buttonText: "Compare Methods",
        description: "Explore all birth control options",
        link: "/compare-methods",
      },
      "birth-control": {
        title: "Find Your Perfect Match?",
        buttonText: "View All Methods",
        description: "Compare effectiveness and benefits",
        link: "/birth-control/all",
      },
      pill: {
        title: "Interested in Birth Control Pills?",
        buttonText: "Compare Pill Types",
        description: "Find the right pill for you",
        link: "/pill/types",
      },
      iud: {
        title: "Ready to Consider an IUD?",
        buttonText: "Compare IUD Options",
        description: "Explore hormonal vs copper IUDs",
        link: "/iud/compare",
      },
      "types/iud": {
        title: "Ready to Consider an IUD?",
        buttonText: "Compare IUD Options",
        description: "Explore hormonal vs copper IUDs",
        link: "/iud/compare",
      },
      implant: {
        title: "Learn More About Implants?",
        buttonText: "Implant Details",
        description: "Get comprehensive implant information",
        link: "/implant/details",
      },
      patch: {
        title: "Interested in the Patch?",
        buttonText: "Patch Information",
        description: "Learn about patch effectiveness",
        link: "/patch/info",
      },
      ring: {
        title: "Consider the Vaginal Ring?",
        buttonText: "Ring Details",
        description: "Explore ring benefits and usage",
        link: "/ring/info",
      },
      shot: {
        title: "Learn About the Shot?",
        buttonText: "Shot Information",
        description: "Understand injection schedules",
        link: "/shot/info",
      },
      condom: {
        title: "Explore Condom Options?",
        buttonText: "Condom Types",
        description: "Compare different condom varieties",
        link: "/condom/types",
      },
      diaphragm: {
        title: "Consider a Diaphragm?",
        buttonText: "Diaphragm Guide",
        description: "Learn about barrier methods",
        link: "/diaphragm/guide",
      },
    };

    return cta[routeKey] || cta["home"];
  };

  if (!currentTabData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
            Content Not Available
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Content for route "{route}" and tab "{activeTab}" is not yet
            available.
            <br />
            Current route key: "{routeKey}"
            <br />
            Add content for this route in the routeContentData object.
          </p>
        </div>
      </div>
    );
  }

  const callToAction = getCallToAction();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-600 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs md:text-sm opacity-75">
            Current Section:{" "}
          </span>
          <span className="font-medium text-sm md:text-base">
            {getRouteDisplayName()}
          </span>
          <span className="text-xs opacity-50 ml-2">({routeKey})</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          {/* Desktop & Tablet Navigation */}
          <nav className="hidden sm:flex space-x-4 md:space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap flex-shrink-0 ${activeTab === tab
                  ? "border-teal-500 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between p-4">
              <span className="font-medium text-gray-800">{activeTab}</span>
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                {tabs.map((tab) => (
                  <option key={tab} value={tab}>
                    {tab}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6">
        {/* Mobile Menu Button */}
        {isMobile && currentTabData.sections && (
          <div className="sm:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-white border rounded-lg p-3 flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Jump to section...</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileMenuOpen && (
              <div className="mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
                <nav className="max-h-60 overflow-y-auto">
                  {currentTabData.sections?.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 last:border-b-0 ${activeSection === section.id
                        ? "bg-teal-50 text-teal-600 font-medium"
                        : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                        }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            )}
          </div>
        )}

        {/* Sidebar */}
        <div className="hidden sm:block sm:w-60 md:w-72 lg:w-80 flex-shrink-0">
          <div
            ref={sidebarRef}
            className={`bg-white rounded-lg border p-4 md:p-6 transition-all duration-200 ${sidebarSticky && !isMobile
              ? "fixed top-20 sm:w-52 md:w-64 lg:w-72"
              : "static"
              }`}
          >
            <h3 className="font-semibold text-base md:text-lg text-teal-600 mb-3 md:mb-4 break-words">
              {getRouteDisplayName()}
            </h3>
            <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
              Jump to ...
            </div>
            <nav className="space-y-2 md:space-y-3 max-h-80 md:max-h-96 overflow-y-auto">
              {currentTabData.sections?.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left text-xs md:text-sm transition-colors hover:text-teal-600 break-words py-1 ${activeSection === section.id
                    ? "text-teal-600 font-medium"
                    : "text-gray-600"
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0" ref={tabContentRef}>
          <div className="bg-white rounded-lg">
            <div className="p-4 md:p-8 pb-4 md:pb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-600 mb-6 break-words">
                {currentTabData.title}
              </h1>
            </div>

            <div className="px-4 md:px-8 pb-6 md:pb-8">
              {currentTabData.sections?.map((section) => (
                <div
                  key={section.id}
                  data-section-id={section.id}
                  className="mb-8 md:mb-12 scroll-mt-24"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center">
                    <span className="break-words">{section.title}</span>
                    <div className="mt-2 sm:mt-0 sm:ml-4 h-px bg-teal-300 flex-1"></div>
                  </h2>

                  <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
                    {section.content.split("\n\n").map((paragraph, pIndex) => (
                      <div key={pIndex}>
                        {paragraph.includes("•") ? (
                          <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                            {paragraph
                              .split("\n")
                              .filter((line) => line.includes("•"))
                              .map((item, iIndex) => (
                                <li
                                  key={iIndex}
                                  className="text-gray-700 break-words"
                                >
                                  {item.replace("•", "").trim()}
                                </li>
                              ))}
                          </ul>
                        ) : paragraph.includes("- ") ? (
                          <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
                            {paragraph
                              .split("\n")
                              .filter((line) => line.includes("- "))
                              .map((item, iIndex) => (
                                <li
                                  key={iIndex}
                                  className="text-gray-700 break-words"
                                >
                                  {item.replace("- ", "").trim()}
                                </li>
                              ))}
                          </ul>
                        ) : (
                          <p className="break-words">{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="px-4 md:px-8 pb-6 md:pb-8">
              <div className="bg-teal-50 rounded-lg p-4 md:p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 break-words">
                  {callToAction.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm break-words">
                  {callToAction.description}
                </p>
                <Link to={callToAction.link}>
                  <button className="bg-teal-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-teal-700 transition-colors text-sm md:text-base w-full sm:w-auto break-words">
                    {callToAction.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTabsComponent;