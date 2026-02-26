import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/header/Header'
import HeroCarousel from './component/home/Carousel'
import AboutSection from './component/About/AboutSection'
import './App.css'
import GoalSection from './component/Goal/Goal'
import FeatureSection from './component/Futures/Futures'
import Classes from './component/Class/Classes'
import Testimonial from './component/Testimonial/Testimonial'
import Footer from './component/footer/Footer'
import ClassTimetable from './component/ClassTimetable/ClassTimetable'
import BMICalculatorPage from './component/BMICalculatorPage/BMICalculatorPage'
import YouTubeVideos from './component/Youtube/Youtube';
import Pricing from './component/pricing/PricingSection';
function App() {
  return (
    <>
      

      


       <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarousel/>

      <AboutSection/>

      <GoalSection/>


      <FeatureSection/>

      <YouTubeVideos/>

      <Classes/>
      <Pricing/>
      <Testimonial/>
            </>
          }
        />

        <Route path="/class-timetable" element={<ClassTimetable />} />
        <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
      </Routes>

      <Footer />
    </Router>
    </>
  )
}

export default App
