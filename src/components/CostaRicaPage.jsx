import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Experience/CostaRica/Hero';
import Features from './Experience/CostaRica/Features';
import WhyUs from './Experience/CostaRica/WhyUs';
import WhoIsItFor from './Experience/CostaRica/WhoIsItFor';
import Community from './Experience/CostaRica/Community';
import Itinerary from './Experience/CostaRica/Itinerary';
import ContactForm from './Experience/CostaRica/ContactForm';
import CRFooter from './Experience/CostaRica/CRFooter';

const CostaRicaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-secondary font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <WhoIsItFor />
      <Community />
      <Itinerary />
      <ContactForm />
      <CRFooter />
    </div>
  );
};

export default CostaRicaPage;
