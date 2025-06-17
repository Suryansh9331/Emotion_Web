
import HeroBanner from "../../../Components2/Herobanner/Herobanner.jsx";
import HealthcareHero from "../../../Components2/HealthCareBanner/Healthcare.jsx";

import TabSection from "./TabComponent5.jsx";
import Moreinfo from "../AllAboutAbortion/MoreInfo.jsx";
const AbortionFAQ  = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
       <TabSection/>       
        
      <Moreinfo/>
    </div>
  )
}
export default AbortionFAQ ;

