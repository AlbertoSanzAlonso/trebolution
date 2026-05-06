import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXPERIENCES } from '../constants';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';

const ExperiencePage = () => {
  const { id } = useParams();
  const experience = EXPERIENCES[id] || EXPERIENCES.india;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden flex items-center px-6 md:px-24">
        {experience.videoHero ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={experience.videoHero} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={experience.heroImage} 
            alt={experience.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-[#05051E]/20" />
        
        <div className="relative z-10 w-full max-w-[1400px] mt-24">
          <h1 className="text-white font-serif font-normal text-[5.5rem] md:text-[8rem] leading-[0.8] uppercase tracking-tighter">
            {experience.titleDisplay[0]}
          </h1>
          <h2 className="text-white font-serif italic font-normal lowercase text-[5.5rem] md:text-[9.5rem] leading-[0.9] mt-2">
            {experience.titleDisplay[1]}
          </h2>
          
          <div className="flex flex-col gap-1 mt-12">
            <p className="text-white text-2xl md:text-3xl font-serif italic font-light opacity-95">{experience.subtitle}</p>
            <p className="text-white text-xl md:text-2xl font-serif italic font-light opacity-85">{experience.date}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-sans font-bold tracking-[0.5em] uppercase text-[#B59D7C]">
              {experience.sectionSubtitle}
            </h4>
            <h2 className="text-[3.8rem] md:text-[5.5rem] font-serif font-normal text-[#05051E] leading-[1] uppercase">
              {experience.sectionTitle}
            </h2>
          </div>
          
          <div className="flex flex-col gap-10 lg:pt-24">
            <p className="text-[20px] font-sans font-bold text-[#05051E] leading-relaxed">
              Un viaje exclusivo entre aromas, colores y espiritualidad.
            </p>
            <p className="text-[18px] font-sans text-[#05051E]/80 leading-[1.8] font-light">
              {experience.description}
            </p>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <a 
        href="https://wa.me/34666051114" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-32 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} className="fill-white text-[#25D366]" />
      </a>

      <Link to={experience.nextPath} className="fixed bottom-8 right-24 bg-[#05051E] text-white px-12 py-5 flex flex-col items-start gap-1 shadow-2xl transition-all hover:bg-[#B59D7C] z-40">
        <span className="text-[9px] opacity-60 tracking-[0.2em] uppercase">VER SIGUIENTE</span>
        <span className="text-[13px] font-medium tracking-wide uppercase">{experience.ctaLabel}</span>
      </Link>
    </div>
  );
};

export default ExperiencePage;
