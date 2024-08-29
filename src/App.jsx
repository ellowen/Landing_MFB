import React, { Suspense, lazy, useEffect } from 'react';
import Chota from './assets/js/main.js';
import Header from './pages/Header';
import FooterSection from './pages/FooterSection';

// Usa React.lazy para importar los componentes de manera diferida
const MainSection = lazy(() => import('./pages/MainSection.jsx'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ClientSection = lazy(() => import('./pages/ClientSection'));
// const TeamSection = lazy(() => import('./pages/TeamSection'));
const VideoSection = lazy(() => import('./pages/VideoSection.jsx'));
const ClothesSection = lazy(() => import('./pages/ClothesSection.jsx'));
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
          <MainSection />
        </Suspense>
        <Suspense fallback={<div>Loading About Section...</div>}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div>Loading Clients...</div>}>
          <ClientSection />
        </Suspense>
        <Suspense fallback={<div>Loading Services...</div>}>
          <VideoSection />
        </Suspense>
        <Suspense fallback={<div>Loading Portfolio...</div>}>
          <ClothesSection />
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
