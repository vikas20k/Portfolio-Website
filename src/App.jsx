import { useEffect, useState } from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"



function App() {


  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}

export default App
