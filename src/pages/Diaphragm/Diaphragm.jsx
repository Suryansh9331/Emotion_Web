
import RouteNavbar from "../../Components2/RouteNavbar/RouteNavbar.jsx"
import HeroBanner from "../../Components2/Herobanner/Herobanner.jsx";
import HealthcareHero from "../../Components2/HealthCareBanner/Healthcare.jsx";
import DynamicTabsComponent from "../../Components2/TabSection/Tabs.jsx";
const Diaphragm  = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
        <DynamicTabsComponent />       
        
      <HealthcareHero />
    </div>
  )
}
export default Diaphragm ;
