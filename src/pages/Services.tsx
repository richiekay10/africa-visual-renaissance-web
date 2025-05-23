
import { useEffect } from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesIntro from '@/components/services/ServicesIntro';
import ServicesList from '@/components/services/ServicesList';
import ProcessSection from '@/components/services/ProcessSection';
import ServicesCTA from '@/components/services/ServicesCTA';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services - Carvestudio';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ServicesIntro />
          <ServicesList />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
