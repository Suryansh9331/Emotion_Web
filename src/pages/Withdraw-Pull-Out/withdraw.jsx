
import RouteNavbar from "../../Components2/RouteNavbar/RouteNavbar"
import HeroBanner from "../../Components2/Herobanner/Herobanner";
import HealthcareHero from "../../Components2/HealthCareBanner/Healthcare.jsx";
import DynamicTabsComponent from "../../Components2/TabSection/Tabs.jsx";
const Withdrawal = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
        <DynamicTabsComponent />       
        
      <HealthcareHero />
    </div>
  )
}
export default Withdrawal ;
