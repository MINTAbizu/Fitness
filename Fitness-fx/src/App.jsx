import React from 'react'
import Header from './component/header/Header'
import HeroCarousel from './component/home/Carousel'
import AboutSection from './component/About/AboutSection'
import './App.css'
function App() {
  return (
    <div>
      <Header/>
      <HeroCarousel/>

      <AboutSection/>
      
    </div>
  )
}

export default App
