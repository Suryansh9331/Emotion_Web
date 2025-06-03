
import RouteNavbar from "../../Components2/RouteNavbar/RouteNavbar"
import HeroBanner from "../../Components2/Herobanner/Herobanner";
import HealthcareHero from "../../Components2/HealthCareBanner/Healthcare.jsx";
import DynamicTabsComponent from "../../Components2/TabSection/Tabs.jsx";
const UID = () => {
  return (
    <div className="w-full min-h-screen">
      
      <HeroBanner />
    
        <DynamicTabsComponent />       
        
      <HealthcareHero />
    </div>
  )
}
export default UID ;






