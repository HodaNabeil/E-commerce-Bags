import LandingHome from "../../components/LandingHome"
import Newarrivals from "../../components/Newarrivals"
import OurCollections from "../../components/OurCollections"
import NewProducts from "../../components/NewProducts"
import OfferBags from "../../components/OfferBags"
import Why from "../../components/Why"
import Story from "../../components/Story"
import Footer from "../../components/Footer"







function Home() {
  return (
    <div>
      <LandingHome/>
        <OurCollections/>
        <Newarrivals />
        <NewProducts title="New Arrivals"/>
        <OfferBags/>
        <Why />
        <Story/>
        <Footer />
    </div>
  )
}

export default Home
