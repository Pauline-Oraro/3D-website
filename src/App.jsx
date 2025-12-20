import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Showcase from "./components/Showcase"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
    </div>
   
  )
   
}

export default App
