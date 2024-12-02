import Navbar from "./Components/Navbar"
import LandingPage from "./Components/LandingPage"
import Marque from "./Components/Marque"
import About from "./Components/About"
import Eyeballs from "./Components/Eyeballs"
import Featured from "./Components/Featured"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen bg-zinc-900 w-full text-white'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyeballs/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App