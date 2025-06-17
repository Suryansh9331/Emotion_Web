




// import React, { useState, useEffect, useRef } from 'react';

// // Sample content data structure for the new single-tab layout
// const contentData = {
//   title: "All About  Abortion",
//   sections: [
//     {
//       id: "how-far-pregnancy",
//       title: " ",
//       content: `Abortion means ending a pregnancy. There are two main options: an abortion procedure (also called in-clinic abortion) and the abortion pill (also called medication abortion). Both are safe and effective. Choosing the right kind of abortion for you will depend on how far along you are in your pregnancy, what’s available at the health center where you’re getting the abortion, and what feels most comfortable to you. And we have more information to help you decide between the abortion options.`
//     },
//     {
//       id: "How state laws may affect you",
//       title: "How state laws may affect you",
//       content: `<b>Pregnancy stage limits</b><br><br>
// Many states restrict health care providers’ ability to deliver abortion care at any stage of pregnancy. (Your pregnancy stage, or how far along you are in pregnancy, is calculated based on the first day of your last period. We’ll figure it out for you—just give us the first day of your last period.

// How far along you are may also be determined or confirmed by doing an ultrasound before you have an abortion.) For example, some states might ban abortions starting at 22 weeks of pregnancy, which means that you can get an abortion through 21 weeks and 6 days of pregnancy. Other states might ban abortion after 20 weeks or 24 weeks, and still others don’t have any specific limits on how far along in pregnancy you can get an abortion.

// In addition to these state limits, individual abortion providers decide how far into pregnancy they want to offer abortion, so just because your state doesn’t ban abortion until 22 weeks, that doesn’t mean every abortion provider in your state will offer abortions through 21 weeks and 6 days of pregnancy.

// It’s legal for you to travel to another state to get an abortion, and if you’re past your state’s pregnancy stage limit, we’ll help you figure out where it will be possible for you to get an abortion.

//    <b>Waiting periods</b><br><br>
// The steps leading up to having an abortion may differ depending on what state you will have the abortion in. That’s because different states have different laws about abortion. Different states have different laws for political reasons, not because abortion is more or less safe in different states. These laws may make it harder to get an abortion, but they don’t make abortion less safe.

// For example, in some states, you can have a consultation, ultrasound, and abortion all in one day. In other states, you may need to have your consultation or ultrasound a day or two before the abortion. That’s because those states have what is called a “waiting period.” Some states have a 24-hour waiting period, which means you’re required to wait 24 hours between the consultation and the abortion. Some states have a 48-hour or even 72-hour waiting period. And some states have no waiting period at all. When you give us your location, we’ll let you know whether there’s a waiting period in your state.

// <b>Parental Involvement</b><br><br>
// In some states, the law requires people under a certain age to inform their parents that they are getting an abortion or to get permission from their parents to have an abortion.`
//     },
//     {
//       id: "The abortion process",
//       title: "The abortion process",
//       content: `Your abortion itself — whether you choose the abortion pill or an abortion procedure — will not vary too much from place to place.

// Before your abortion, you’ll be given all the information you need to make an informed decision. After your abortion, your health care provider will give you some instructions about caring for yourself and watching out for things like excessive bleeding and warning signs of infection. But in general, abortions are among the safest medical procedures available, and few people who get them have any serious complications. The rate of major complications is low, at 0.23% (meaning about 2 out of every 1,000 people getting an abortion will have major complications), which is similar to the rate of major complications caused by colonoscopies. And it actually has a lower rate of complications than wisdom tooth removal.`
//     },
//     {
//       id: "what-happens-after",
//       title: "What happens after the procedure?",
//       content: `After the procedure, you'll rest in a recovery area for about 30 minutes to an hour. The healthcare team will monitor you to make sure you're recovering well.

// You may experience:
// • Cramping similar to menstrual cramps
// • Light to moderate bleeding
// • Nausea
// • Dizziness

// Most people can return to normal activities within a day or two. You should avoid:
// • Heavy lifting for a few days
// • Swimming or taking baths for about a week
// • Sexual intercourse for about a week

// You'll be given specific aftercare instructions and information about when to contact your healthcare provider.`
//     },
//     {
//       id: "how-much-cost",
//       title: "How much does the procedure hurt?",
//       content: `The level of discomfort varies from person to person. Most people describe the pain as similar to strong menstrual cramps. The actual procedure usually lasts only 5-10 minutes.

// Pain management options include:
// • Local anesthesia to numb the cervix
// • Oral pain medication taken before the procedure
// • IV sedation to help you relax
// • In some cases, general anesthesia

// Your healthcare provider will discuss pain management options with you and help you choose what's best for your situation. Many people find that the anticipation of pain is worse than the actual experience.`
//     },
//     {
//       id: "when-contact-provider",
//       title: "When should you contact a health care provider after the procedure?",
//       content: `You should contact your healthcare provider if you experience:

// • Heavy bleeding (soaking through two thick full-size sanitary pads per hour for two consecutive hours)
// • Severe abdominal or back pain that doesn't improve with pain medication
// • Fever of 100.4°F (38°C) or higher
// • Foul-smelling vaginal discharge
// • Signs of infection
// • Severe nausea or vomiting
// • Dizziness or fainting

// Most complications are rare, but it's important to know what to watch for. Your healthcare provider will give you specific instructions about when to call and provide you with a 24-hour contact number for emergencies.

// Follow-up appointments are typically scheduled 1-2 weeks after the procedure to ensure you're healing properly.`
//     }
//   ]
// };

// const TabSection = ({ contentData: propContentData }) => {
  
//   const [activeSection, setActiveSection] = useState("");
//   const [sidebarSticky, setSidebarSticky] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const tabContentRef = useRef(null);
//   const sidebarRef = useRef(null);

//   // Use prop data or fallback to default content
//   const currentContent = propContentData || contentData;

//   // Check if device is mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (tabContentRef.current && sidebarRef.current && !isMobile) {
//         const tabContentRect = tabContentRef.current.getBoundingClientRect();
//         const shouldBeSticky =
//           tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
//         setSidebarSticky(shouldBeSticky);
//       }

//       if (tabContentRef.current) {
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
//   }, [isMobile]);

//   const scrollToSection = (sectionId) => {
//     const element = document.querySelector(`[data-section-id="${sectionId}"]`);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   if (!currentContent) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <div className="text-center max-w-md">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
//             Content Not Available
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base">
//             No content data provided for this component.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-teal-600 text-white py-3 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-lg md:text-xl font-medium">
//             {currentContent.title}
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6">
//         {/* Mobile Menu Button */}
//         {isMobile && currentContent.sections && (
//           <div className="sm:hidden mb-4">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="w-full bg-white border rounded-lg p-3 flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               <span>Jump to...</span>
//               <svg
//                 className={`w-5 h-5 transform transition-transform ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>

//             {isMobileMenuOpen && (
//               <div className="mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
//                 <nav className="max-h-60 overflow-y-auto">
//                   {currentContent.sections?.map((section) => (
//                     <button
//                       key={section.id}
//                       onClick={() => scrollToSection(section.id)}
//                       className={`block w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 last:border-b-0 ${
//                         activeSection === section.id
//                           ? "bg-teal-50 text-teal-600 font-medium"
//                           : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
//                       }`}
//                     >
//                       {section.title}
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Sidebar */}
//         <div className="hidden sm:block sm:w-60 md:w-72 lg:w-80 flex-shrink-0">
//           <div
//             ref={sidebarRef}
//             className={`bg-white rounded-lg border transition-all duration-200 ${
//               sidebarSticky && !isMobile
//                 ? "fixed top-6 sm:w-52 md:w-64 lg:w-72"
//                 : "static"
//             }`}
//           >
//             {/* Sidebar Header */}
//             <div className="bg-teal-600 text-white p-4 rounded-t-lg">
//               <h3 className="font-semibold text-base md:text-lg break-words">
//                 {currentContent.title}
//               </h3>
//             </div>
            
//             {/* Sidebar Content */}
//             <div className="p-4">
//               <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 italic">
//                 Jump to...
//               </div>
//               <nav className="space-y-1 max-h-80 md:max-h-96 overflow-y-auto">
//                 {currentContent.sections?.map((section) => (
//                   <button
//                     key={section.id}
//                     onClick={() => scrollToSection(section.id)}
//                     className={`block w-full text-left text-xs md:text-sm transition-colors hover:text-teal-600 break-words py-2 px-2 rounded ${
//                       activeSection === section.id
//                         ? "text-teal-600 font-medium bg-teal-50"
//                         : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {section.title}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         <div className="flex-1 min-w-0" ref={tabContentRef}>
//           <div className="bg-white rounded-lg shadow-sm">
//             {/* Main content */}
//             <div className="p-4 md:p-8">
//               {currentContent.sections?.map((section) => (
//                 <div
//                   key={section.id}
//                   data-section-id={section.id}
//                   className="mb-8 md:mb-12 scroll-mt-24"
//                 >
//                   <h2 className="text-xl md:text-2xl font-semibold text-teal-600 mb-4 md:mb-6 break-words border-b-2 border-teal-200 pb-2">
//                     {section.title}
//                   </h2>

//                   <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
//                     {section.content.split("\n\n").map((paragraph, pIndex) => (
//                       <div key={pIndex}>
//                         {paragraph.includes("•") ? (
//                           <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
//                             {paragraph
//                               .split("\n")
//                               .filter((line) => line.includes("•"))
//                               .map((item, iIndex) => (
//                                 <li
//                                   key={iIndex}
//                                   className="text-gray-700 break-words"
//                                 >
//                                   {item.replace("•", "").trim()}
//                                 </li>
//                               ))}
//                           </ul>
//                         ) : paragraph.includes("- ") ? (
//                           <ul className="list-disc list-inside space-y-2 ml-2 md:ml-4">
//                             {paragraph
//                               .split("\n")
//                               .filter((line) => line.includes("- "))
//                               .map((item, iIndex) => (
//                                 <li
//                                   key={iIndex}
//                                   className="text-gray-700 break-words"
//                                 >
//                                   {item.replace("- ", "").trim()}
//                                 </li>
//                               ))}
//                           </ul>
//                         ) : (
//                           <p className="break-words leading-relaxed">{paragraph}</p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabSection;


import { useState, useEffect, useRef } from "react";

const contentData = {
  title: "Abortion :FAQ'S",
  sections: [
    {
      id: "How painful is a medication abortion?",
      title: " How painful is a medication abortion?",
      content: `How long an abortion takes depends on what type of abortion it is. With the abortion pill, you take two different medications. The first medication stops the pregnancy from continuing to develop, and the second medication starts the abortion process. You take the second one someplace safe and comfortable with easy access to a bathroom up to three days after taking the first medication. Once you take the second medication, the abortion usually starts within an hour and can take up to several hours to be complete. With the abortion procedure, the actual abortion typically only takes five to ten minutes.`
    },
  {
  id: "How long does an abortion take?",
  title: "How long does an abortion take?",
  content: `How long an abortion takes depends on what type of abortion it is. With the abortion pill, you take two different medications. The first medication stops the pregnancy from continuing to develop, and the second medication starts the abortion process. You take the second one someplace safe and comfortable with easy access to a bathroom up to three days after taking the first medication. Once you take the second medication, the abortion usually starts within an hour and can take up to several hours to be complete. With the abortion procedure, the actual abortion typically only takes five to ten minutes.`
}
,
    {
      id: "Can I be sedated if I’m getting an abortion procedure?",
      title: "Can I be sedated if I’m getting an abortion procedure?",
      content: `If you’re having an abortion procedure, you may have the option to have sedation during your procedure. One way to do this is for your abortion provider to give you anti-anxiety medication that you take by mouth before the procedure to relax you. You will be awake but should be more relaxed than usual. If you have what’s called “conscious sedation”, you’ll be awake but extremely relaxed, and the procedure should be virtually pain-free. If you have general anesthesia, which is a type of IV sedation that puts you to sleep completely, you won’t feel or experience anything during the procedure—you’ll simply wake up and it will be over. Sedation generally costs extra.`
    },
    {
      id: "What does “viability” mean?",
      title: "What does “viability” mean?",
      content: `If you’re living in a state with an abortion ban, you’re probably wondering what viability means. Fetal viability is the point at which the fetus is likely to be able to live outside the uterus (with medical support). It usually occurs between 24 and 28 weeks of pregnancy.`
    },
    {
      id: "What types of abortion appointments can I go to remotely (using telehealth)?",
      title: "What types of abortion appointments can I go to remotely (using telehealth)?",
      content: `Some states have laws that allow you to do your counseling appointment via telehealth, and then do your ultrasound and abortion at the same appointment, if you have to travel a long distance to get an abortion. These laws prevent you from having to travel a long distance twice or having to stay far from home during the waiting period. If you’re going to have to travel a long way for your abortion, ask if virtual counseling is an option when you call to make your appointment.`
    },
    {
      id: "Are abortion procedures safe?",
      title: "Are abortion procedures safe?",
      content: `Legal abortion performed by a certified health care provider is very safe, just like many other common outpatient procedures. The rate of major complications is low, at 0.23%, which is similar to the rate of major complications caused by colonoscopies. And it actually has a lower rate of complications than wisdom tooth removal. The earlier in pregnancy you get an abortion, the lower the chances are of complications. Abortion doesn’t cause long-term health risks or affect your chances of getting pregnant in the future.`
    },
    {
      id: "What other pregnancy options do I have?",
      title: "What other pregnancy options do I have?",
      content: `If you’re pregnant and still deciding what you want to do, you have options. Abortion is one, and adoption and parenting are others. We have more information about abortion, adoption, and parenting to help you make the decision that is right for you. You can also check out All-Options for more information and to talk with impartial, non-judgmental counselors. It’s important to take the time you need to make this decision. Just keep in mind that the further along you are in pregnancy, the more complicated and expensive it may become to get an abortion and the fewer options of abortion providers you may have.`
    },
    {
      id: "Is it okay to drink, use cannabis, or use other drugs before an abortion?",
      title: "Is it okay to drink, use cannabis, or use other drugs before an abortion?",
      content: `Avoid any substances that will alter your mental state, like alcohol, cannabis, or other drugs, on the day of your abortion. If you’ve used these substances, the health care provider may not be able to offer you pain medication or may not be able to perform your abortion at all. If you’re concerned about pain or you’re feeling anxious, many abortion providers offer pain medication and medication for anxiety. Talk to your provider in advance about what they can do for you.`
    },
    {
      id: "Is it okay to drink, use cannabis, or use other drugs before an abortion?",
      title: "Is it okay to drink, use cannabis, or use other drugs before an abortion?",
      content: `During the abortion, you’ll be undressed from the waist down with a sheet over your lap. If you prefer, you can wear a long, flowy skirt or dress, and then you can just remove your underwear and pull the skirt up. (Just keep in mind that if you wear a jumpsuit or romper, you will have to take the whole thing off.) You’ll lie back on an exam table with your feet in stirrups—just like when you go to a gynecologist or other provider to get a Pap smear or a swab for a yeast infection. The health care provider will use a speculum to separate the walls of your vagina in order to get a good view of the cervix, and they will then inject numbing medication into your cervix. For abortions early in pregnancy, the provider will then dilate (open) your cervix. Soon after, the abortion provider will use a gentle suction to empty your uterus. The procedure itself typically takes only a few minutes to complete.

If your pregnancy is more than 16 weeks along, you may need an extra step to dilate your cervix more before the procedure to make it easier to complete the abortion. You’ll either take a medication to dilate your cervix, or a health care provider will insert a special dilator called laminaria into your cervix. The laminaria will slowly expand and open your cervix gradually. This kind of abortion is called a D&E—dilation and evacuation. The dilators—whether it’s medication or laminaria—may take a few hours or overnight to work. After your cervix is properly dilated, the abortion provider will use suction and some tools to gently empty your uterus.`
    },
  ]
};

const TabSection = ({ contentData: propContentData }) => {
  const [activeSection, setActiveSection] = useState("");
  const [sidebarSticky, setSidebarSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabContentRef = useRef(null);
  const sidebarRef = useRef(null);

  const currentContent = propContentData || contentData;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (tabContentRef.current && sidebarRef.current && !isMobile) {
        const tabContentRect = tabContentRef.current.getBoundingClientRect();
        const shouldBeSticky =
          tabContentRect.top <= 0 && tabContentRect.bottom > window.innerHeight;
        setSidebarSticky(shouldBeSticky);
      }

      if (tabContentRef.current) {
        const sections = tabContentRef.current.querySelectorAll("[data-section-id]");
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

  if (!currentContent) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-4">
            Content Not Available
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            No content data provided for this component.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg md:text-xl font-medium">{currentContent.title}</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6">
        {isMobile && currentContent.sections && (
          <div className="sm:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-white border rounded-lg p-3 flex items-center justify-between text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <span>Jump to...</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileMenuOpen && (
              <div className="mt-2 bg-white border rounded-lg shadow-lg overflow-hidden">
                <nav className="max-h-60 overflow-y-auto">
                  {currentContent.sections?.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors border-b border-gray-100 last:border-b-0 ${
                        activeSection === section.id
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

        <div className="hidden sm:block sm:w-60 md:w-72 lg:w-80 flex-shrink-0">
          <div
            ref={sidebarRef}
            className={`bg-white rounded-lg border transition-all duration-200 ${
              sidebarSticky && !isMobile ? "fixed top-6 sm:w-52 md:w-64 lg:w-72" : "static"
            }`}
          >
            <div className="bg-teal-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold text-base md:text-lg break-words">
                {currentContent.title}
              </h3>
            </div>

            <div className="p-4">
              <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 italic">Jump to...</div>
              <nav className="space-y-1 max-h-80 md:max-h-96 overflow-y-auto">
                {currentContent.sections?.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-xs md:text-sm transition-colors hover:text-teal-600 break-words py-2 px-2 rounded ${
                      activeSection === section.id
                        ? "text-teal-600 font-medium bg-teal-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0" ref={tabContentRef}>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 md:p-8">
              {currentContent.sections?.map((section) => (
                <div
                  key={section.id}
                  data-section-id={section.id}
                  className="mb-8 md:mb-12 scroll-mt-24"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-teal-600 mb-4 md:mb-6 break-words border-b-2 border-teal-200 pb-2">
                    {section.title}
                  </h2>

                  {/* ✅ This line renders raw HTML like <b> and <br> */}
                  <div
                    className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
