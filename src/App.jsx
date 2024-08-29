import React, { Suspense, lazy, useEffect } from 'react';
import Chota from './assets/js/main.js';
import Header from './pages/Header';
import FooterSection from './pages/FooterSection';

// Usa React.lazy para importar los componentes de manera diferida
const HeroSection = lazy(() => import('./pages/Herosection'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ClientSection = lazy(() => import('./pages/ClientSection'));
// const TeamSection = lazy(() => import('./pages/TeamSection'));
const ServiceSection = lazy(() => import('./pages/ServiceSection'));
const PorfolioSection = lazy(() => import('./pages/PorfolioSection'));
const ContactSection = lazy(() => import('./pages/ContactSection'));


function App() {
  useEffect(() => {
    Chota();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<div>Loading Hero Section...</div>}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div>Loading About Section...</div>}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div>Loading Clients...</div>}>
          <ClientSection />
        </Suspense>
        <Suspense fallback={<div>Loading Services...</div>}>
          <ServiceSection />
        </Suspense>
        <Suspense fallback={<div>Loading Portfolio...</div>}>
          <PorfolioSection />
        </Suspense>
        <Suspense fallback={<div>Loading Contact Section...</div>}>
          <ContactSection />
        </Suspense>
      </main>
      <FooterSection />
    </>
  );
}

export default App;
