import React from 'react';
import Header from './components/headerSection';
import Hero from './components/heroSection';
import SmoothAlternatingSlider from './components/imagesSlider';
import CreativeTextSection from './components/textSection';
import ManifestoSection from './components/manifestoSection';
import MotionSection from './components/MotionSection';
import FooterSection from './components/FooterSection';
import VideoSection from './components/VideoSection';
import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
import ServicesStackSection from './components/servicesStackSection';
import CursorFollower from './components/CursorFollower';
import AnimatedMembers from './components/AnimatedMembers';
import ContactSection from './components/ContactSection';
import SmoothAlternatingSlider1 from './components/imgsSlider';
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,     // smoother feeling
      easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubic
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <CursorFollower />
      <Header />
      <Hero />
      {/* <SmoothAlternatingSlider /> */}
      <SmoothAlternatingSlider1 />
      <CreativeTextSection />
      <ManifestoSection />
      <ServicesStackSection />
      {/* <ServicesSection /> */}
      <MotionSection />
      <VideoSection />
      <PortfolioSection />
      <AnimatedMembers />
      <ContactSection />
      <FooterSection />

    </>
  );
}

export default App;
