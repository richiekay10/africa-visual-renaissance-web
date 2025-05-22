
import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import HomeCTA from '../components/home/HomeCTA';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Carvestudio - Creative Agency for the African Renaissance';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <HomeCTA />
    </>
  );
};

export default HomePage;
