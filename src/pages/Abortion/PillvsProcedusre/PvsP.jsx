
import HeroBanner from "../../../Components2/Herobanner/Herobanner.jsx";
import HealthcareHero from "../../../Components2/HealthCareBanner/Healthcare.jsx";

import TabSection from "./TabComponent4.jsx";
import Moreinfo from "../AllAboutAbortion/MoreInfo.jsx";
const PvsP  = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
       <TabSection/>       
        
      <Moreinfo/>
    </div>
  )
}
export default PvsP ;

