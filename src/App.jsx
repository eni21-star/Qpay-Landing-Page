import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMyThrift from './components/AboutMyThrift'
import ComingSoonSection from './components/ComingSoonSection'
import FAQs from './components/FAQS'
import Footer from './components/Footer'
import AppShowcase from './components/AppShowcase'
import Testimonials from './components/Testimonials'

function App() {
  
  return (
    <div >
      {/* <Navbar /> */}
      <Hero />
      <AboutMyThrift></AboutMyThrift>
      <Testimonials />
      <AppShowcase />
      <FAQs></FAQs>
      <ComingSoonSection></ComingSoonSection>
      <Footer/>
  
    </div>
  )
}

export default App
