import BirthControlLayout from "./components/BirthComponent"
import SubscriptionForm from "./components/FriskyComponent"
import HealthcareFinder from "./components/HealthFinder"
import HealthWellnessLayout from "./components/HealthWellnessLayout"
import BedsiderWebsite from "./components/Home"
import SexRelationshipsLayout from "./components/SeRelationLayout"

const Home = () => {
  return (
    <div>
      <BedsiderWebsite/>  
      <HealthcareFinder/>
      <BirthControlLayout/>
      <SexRelationshipsLayout/>
      <SubscriptionForm/>
      <HealthWellnessLayout/>

    </div>
  )
}
export default Home