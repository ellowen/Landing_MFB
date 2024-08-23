import Chota from '../public/assets/js/main.js';
import { useEffect, useState } from 'react'
import Header from './pages/Header'
import HeroSection from './pages/Herosection'
import AboutSection from './pages/AboutSection'
import ClientSection from './pages/ClientSection'
import TeamSection from './pages/TeamSection'
import ServiceSection from './pages/ServiceSection'
import FooterSection from './pages/FooterSection'
import PorfolioSection from './pages/PorfolioSection'
import ContactSection from './pages/ContactSection'


function App() {
  useEffect(() => {
    Chota();
  }, [])
  
  return (
    <>
      
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <ClientSection />
        <ServiceSection />
        <TeamSection />
        <PorfolioSection/>
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}

export default App
