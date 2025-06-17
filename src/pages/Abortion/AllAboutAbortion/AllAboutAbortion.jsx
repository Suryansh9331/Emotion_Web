
import HeroBanner from "../../../Components2/Herobanner/Herobanner.jsx";
import HealthcareHero from "../../../Components2/HealthCareBanner/Healthcare.jsx";

import TabSection from "./TabComponent.jsx";
import Moreinfo from "./MoreInfo.jsx";
const AllAboutAbortion  = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
       <TabSection/>       
        
      <Moreinfo/>
    </div>
  )
}
export default AllAboutAbortion ;

