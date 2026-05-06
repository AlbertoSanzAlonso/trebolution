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
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src={experience.heroImage} 
          alt={experience.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute inset-0 flex items-center px-6 md:px-24">
          <div className="max-w-4xl">
            <h2 className="experience-subtitle">{experience.subtitle}</h2>
            <h1 className="experience-title">{experience.title}</h1>
            <p className="experience-date">{experience.date}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="content-section-subtitle">{experience.sectionSubtitle}</span>
            <h2 className="content-section-title">{experience.sectionTitle}</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-[#0A192F] font-bold text-lg leading-snug font-sans">
              {experience.id === 'india' 
                ? 'Un viaje exclusivo entre aromas, colores y espiritualidad.' 
                : 'Costa Rica Trebolution Experience ha sido seleccionada personalmente.'}
            </h3>
            <p className="content-paragraph">
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
        className="whatsapp-btn"
      >
        <MessageCircle size={32} />
      </a>

      <Link to={experience.nextPath} className="floating-nav-btn group">
        <span className="text-[9px] opacity-60 tracking-widest uppercase mb-1">Ver siguiente</span>
        <span className="text-sm font-medium tracking-wide group-hover:underline underline-offset-4">{experience.ctaLabel}</span>
      </Link>
    </div>
  );
};

export default ExperiencePage;
