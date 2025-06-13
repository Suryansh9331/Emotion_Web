
import RouteNavbar from "../../../Components2/RouteNavbar/RouteNavbar.jsx"
import HeroBanner from "../../../Components2/Herobanner/Herobanner.jsx";
import ExploreSection from "./ExploreSection.jsx";
import HowToGet from "./HowToGet.jsx";
import RelatedArticles from "./RelatedArticle.jsx";
import ThreeTabSection from "./ThreeTabSection.jsx";
import BirthControlReview from "./ReviewSection.jsx";
const ExploreBirthControl  = () => {
  return (
    <div className="w-full min-h-screen">
     
      <HeroBanner />
       <ExploreSection />
       <HowToGet/>
       <BirthControlReview/>
         <RelatedArticles />
         <ThreeTabSection/>
        
     
    </div>
  )
}
export default ExploreBirthControl ;

