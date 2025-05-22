
import { useEffect } from 'react';
import CareersHero from '../components/careers/CareersHero';
import JobOpenings from '../components/careers/JobOpenings';
import Benefits from '../components/careers/Benefits';
import CultureValues from '../components/careers/CultureValues';
import ApplicationProcess from '../components/careers/ApplicationProcess';
import CareersCTA from '../components/careers/CareersCTA';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers - Carvestudio';
  }, []);

  return (
    <>
      <CareersHero />
      <JobOpenings />
      <Benefits />
      <CultureValues />
      <ApplicationProcess />
      <CareersCTA />
    </>
  );
};

export default CareersPage;
