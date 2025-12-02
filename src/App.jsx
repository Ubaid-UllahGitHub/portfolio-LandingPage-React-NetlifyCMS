import React from 'react';
import Header from './components/headerSection';
import Hero from './components/heroSection';
import SmoothAlternatingSlider from './components/imagesSlider';
import CreativeTextSection from './components/textSection';
import ManifestoSection from './components/manifestoSection';
function App() {
  return (
    <>
      <Header />
      <Hero />
      <SmoothAlternatingSlider />
      <CreativeTextSection />
      <ManifestoSection />
    </>
  );
}

export default App;
