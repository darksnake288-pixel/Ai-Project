import React from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css';
const App = () => {
   useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing :"ease-in-out"
    })
  })
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Banner2/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
