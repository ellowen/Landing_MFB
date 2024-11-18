import React, { useEffect } from 'react';
import Chota from './assets/js/main.js';
import Header from './pages/Header';
import FooterSection from './pages/FooterSection';

// Importaciones regulares de los componentes
import MainSection from './pages/MainSection.jsx';
import AboutSection from './pages/AboutSection';
import ClientSection from './pages/ClientSection';
// import TeamSection from './pages/TeamSection';
import VideoSection from './pages/VideoSection.jsx';
import ClothesSection from './pages/ClothesSection.jsx';
import ContactSection from './pages/ContactSection';
import ServicesSection from './pages/ServicesSection.jsx';

function App() {
  useEffect(() => {
    Chota();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <MainSection />
        <AboutSection />
        <ClientSection />
        <ServicesSection />
        {/* <VideoSection /> */}
        <ClothesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
