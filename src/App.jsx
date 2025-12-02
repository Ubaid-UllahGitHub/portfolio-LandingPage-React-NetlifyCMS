import React from 'react';
import Header from './components/headerSection';
import Hero from './components/heroSection';
import SmoothAlternatingSlider from './components/imagesSlider';
import CreativeTextSection from './components/textSection';
import ManifestoSection from './components/manifestoSection';
import ServicesStackSection from './components/servicesStackSection';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <SmoothAlternatingSlider />
      <CreativeTextSection />
      <ManifestoSection />
      <ServicesStackSection />
      <Hero />
    </>
  );
}

export default App;
