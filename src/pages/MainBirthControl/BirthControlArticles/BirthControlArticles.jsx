
import RouteNavbar from "../../../Components2/RouteNavbar/RouteNavbar.jsx"
import HeroBanner from "../../../Components2/Herobanner/Herobanner.jsx";

// import WhatServices from "./WhatServices.jsx";
// import FooterBanner from "./FooterBanner.jsx";


// import ExploreSection from "./ExploreSection.jsx";
// import HowToGet from "./HowToGet.jsx";
// import RelatedArticles from "./RelatedArticle.jsx";
import ThreeTabSection from "./ThreeTabSection.jsx";
import ArticleFilterSection from "./ArticleFilterSection.jsx";
// import BirthControlReview from "./ReviewSection.jsx";
const BirthControlArticles  = () => {
  return (
    <div className="w-full min-h-screen">
     
        <HeroBanner />
          {/* <ExploreSection /> */}
        {/* <WhatServices/> */}
          {/* <BirthControlReview/> */}
         {/* <FooterBanner/> */}
    
           <ArticleFilterSection/>
               <ThreeTabSection/> 
     
    </div>
  )
}
export default BirthControlArticles ;

