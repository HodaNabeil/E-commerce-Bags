import LandingHome from "../components/LandingHome"
import Newarrivals from "../components/Newarrivals"
import OurCollections from "../components/OurCollections"
import NewProducts from "../components/NewProducts"
import OfferBags from "../components/OfferBags"
import Why from "../components/Why"
import Story from "../components/Story"







function Home() {
  return (
    <div>
      <LandingHome/>
        <OurCollections/>
        <Newarrivals/>
        <NewProducts/>
        <OfferBags/>
        <Why />
        <Story/>
    </div>
  )
}

export default Home
