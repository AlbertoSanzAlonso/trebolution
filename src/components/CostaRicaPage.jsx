import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Experience/CostaRica/Hero';
import Philosophy from './Experience/CostaRica/Philosophy';
import WhyUs from './Experience/CostaRica/WhyUs';
import WhoIsItFor from './Experience/CostaRica/WhoIsItFor';
import Itinerary from './Experience/CostaRica/Itinerary';
import Gallery from './Experience/CostaRica/Gallery';
import ContactForm from './Experience/CostaRica/ContactForm';
import CRFooter from './Experience/CostaRica/CRFooter';

const CostaRicaPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isSubmitted]);

  return (
    <div className="min-h-screen bg-brand-secondary font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <WhyUs />
      <Gallery />
      <WhoIsItFor />
      
      {!isSubmitted ? (
        <ContactForm onSubmitted={() => setIsSubmitted(true)} />
      ) : (
        <div className="animate-fade-in">
          <Itinerary />
        </div>
      )}
      
      <CRFooter />
    </div>
  );
};

export default CostaRicaPage;
