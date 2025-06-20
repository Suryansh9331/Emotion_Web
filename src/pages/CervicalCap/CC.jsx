
import RouteNavbar from "../../Components2/RouteNavbar/RouteNavbar.jsx"
import HeroBanner from "../../Components2/Herobanner/Herobanner.jsx";
import HealthcareHero from "../../Components2/HealthCareBanner/Healthcare.jsx";
import DynamicTabsComponent from "../../Components2/TabSection/Tabs.jsx";
import RelatedArticleComponent from "../../components/RelatedArticleComponent/RelatedArticleComponent.jsx"
const CC = () => {
  return (
    <div className="w-full min-h-screen">
      {/* <RouteNavbar /> */}
      <HeroBanner />
    
        <DynamicTabsComponent />       
                <RelatedArticleComponent/>

      <HealthcareHero />
    </div>
  )
}
export default CC ;
