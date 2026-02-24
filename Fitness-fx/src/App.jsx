import React from 'react'
import Header from './component/header/Header'
import HeroCarousel from './component/home/Carousel'
import AboutSection from './component/About/AboutSection'
import './App.css'
import GoalSection from './component/Goal/Goal'
import FeatureSection from './component/Futures/Futures'
import Classes from './component/Class/Classes'
function App() {
  return (
    <div>
      <Header/>
      <HeroCarousel/>

      <AboutSection/>

      <GoalSection/>


      <FeatureSection/>

      <Classes/>
      
    </div>
  )
}

export default App
