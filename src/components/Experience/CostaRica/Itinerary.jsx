import React, { useRef } from 'react';
import { Building2, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { itineraryData } from '../itineraryData';
import { motion } from 'framer-motion';

const Itinerary = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="itinerary" className="bg-brand-primary min-h-screen relative overflow-hidden">
      {/* Navigation Controls - Desktop */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-8 z-50 pointer-events-none">
        <button
          onClick={() => scroll('left')}
          className="pointer-events-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/20 transition-all cursor-pointer backdrop-blur-md border border-white/10"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="pointer-events-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/20 transition-all cursor-pointer backdrop-blur-md border border-white/10"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      {/* Main Horizontal Slider */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-[85vh] custom-scrollbar-hide"
      >
        {itineraryData.map((day, i) => (
          <div 
            key={i} 
            className="snap-center w-screen h-[85vh] shrink-0 relative flex flex-col md:flex-row overflow-hidden"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={day.img}
                alt={day.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-primary via-brand-primary/20 to-transparent md:bg-linear-to-r md:from-brand-primary md:via-brand-primary/40 md:to-transparent" />
            </div>

            {/* Petal Watermark Texture with Masked Day Number */}
            <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden" style={{ mixBlendMode: 'screen' }}>
              <div
                className="absolute bottom-[2%] left-[-20%] w-[150px] h-[150px]"
                style={{
                  transform: 'translate(-10%, 10%) rotate(40deg) scale(15) scaleX(-1)',
                  transformOrigin: 'center'
                }}
              >
                <div
                  className="w-full h-full relative"
                  style={{
                    clipPath: 'path("M 50,100 C 50,100 0,60 0,35 C 0,15 15,0 35,0 C 45,0 50,10 50,10 C 50,10 55,0 65,0 C 85,0 100,15 100,35 C 100,60 50,100 50,100 Z")',
                    background: 'rgba(255, 255, 255, 0.85)',
                  }}
                />
              </div>

              {/* Masked Text (Black text in screen mode becomes transparent) */}
              <div className="absolute bottom-8 left-12 md:bottom-16 md:left-24">
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[9px] font-bold tracking-[0.4em] uppercase opacity-40">Día del viaje</span>
                  <h3 className="text-8xl md:text-[11rem] font-serif leading-none text-black select-none">
                    {day.day}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
              
              {/* Left Column: Visual/Meta */}
              <div className="w-full md:w-[45%] h-1/2 md:h-full p-8 md:p-20 flex flex-col justify-start">
                <div className="flex flex-col gap-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 text-[#00132C]"
                  >
                    <Calendar size={18} className="text-[#A68C6B]" />
                    <span className="text-xs font-bold tracking-[0.4em] uppercase">{day.date}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 text-[#00132C]"
                  >
                    <MapPin size={18} className="text-[#A68C6B]" />
                    <span className="text-xs font-bold tracking-[0.4em] uppercase">{day.location}</span>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: Detailed Info - Pushed to the right */}
              <div className="w-full md:w-[55%] h-1/2 md:h-full flex flex-col justify-center p-8 md:p-24 md:pr-32 overflow-y-auto ml-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-8 md:gap-10 max-w-xl ml-auto"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[#A68C6B] text-[10px] font-bold tracking-[0.5em] uppercase">EXPERIENCIA EXCLUSIVA</span>
                    <h2 className="text-3xl md:text-7xl font-serif text-white leading-tight">
                      {day.title}
                    </h2>
                    <div className="w-24 h-0.5 bg-[#A68C6B]/40" />
                  </div>

                  <p className="text-base md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
                    {day.desc}
                  </p>

                  <div className="mt-8 p-6 md:p-10 bg-white/5 rounded-3xl border border-white/10 flex items-center gap-6 md:gap-8 group hover:bg-white/10 transition-all duration-500">
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-brand-primary shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="w-6 h-6 md:w-10 md:h-10" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] md:text-[11px] font-bold text-white/30 uppercase tracking-[0.4em] mb-1 md:mb-2">Alojamiento seleccionado</span>
                      <span className="text-xl md:text-3xl font-medium text-white">{day.hotel}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* Mobile Navigation Hint */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center md:hidden pointer-events-none">
              <div className="flex items-center gap-4 text-white/30 text-[9px] font-bold tracking-[0.3em] uppercase">
                <ChevronLeft size={12} /> Desliza para explorar <ChevronRight size={12} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
