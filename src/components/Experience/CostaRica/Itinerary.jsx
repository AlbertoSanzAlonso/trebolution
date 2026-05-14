import React, { useState, useEffect, useRef } from 'react';
import { Building2, Calendar, MapPin, ChevronLeft, ChevronRight, Plane, Coffee, Bus, Hotel, Search, Ticket, Utensils, Star, Users, Gift, ShieldCheck, Heart } from 'lucide-react';

const IconMap = {
  Plane, Coffee, Bus, Hotel, Search, Ticket, Utensils, Star, Users, Gift, ShieldCheck, Heart
};
import { itineraryData } from '../itineraryData';
import { motion } from 'framer-motion';

const Itinerary = () => {
  const scrollRef = useRef(null);
  const [petalScale, setPetalScale] = useState(15);
  const [activeHotelId, setActiveHotelId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPetalScale(window.innerWidth < 768 ? 8 : 15);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update current slide on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== currentSlide) {
        setCurrentSlide(index);
      }
    }
  };

  const goToSlide = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
    }
  };

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

  const toggleHotel = (e, id) => {
    e.stopPropagation();
    setActiveHotelId(activeHotelId === id ? null : id);
  };

  return (
    <section
      id="itinerary"
      className="bg-brand-primary min-h-screen relative overflow-hidden"
      onClick={() => setActiveHotelId(null)}
    >
      {/* Backdrop for closing tooltips on mobile */}
      {activeHotelId && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setActiveHotelId(null)} />
      )}

      {/* Navigation Controls - Desktop Arrows */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between px-12 z-50 pointer-events-none">
        <button
          onClick={() => scroll('left')}
          className={`pointer-events-auto hover:opacity-50 transition-all cursor-pointer p-4 ${itineraryData[currentSlide]?.isFinal ? 'text-white' : 'text-[#00132C]'}`}
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        {!itineraryData[currentSlide]?.isFinal && (
          <button
            onClick={() => scroll('right')}
            className="pointer-events-auto text-white hover:opacity-50 transition-all cursor-pointer p-4"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        )}
      </div>

      {/* Subtle Page Navigator (Numbers) */}
      <div className="absolute bottom-6 left-0 w-full z-50 flex justify-center items-center gap-3 md:gap-5 px-4 overflow-x-auto no-scrollbar py-4">
        {itineraryData.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(idx);
            }}
            className={`text-[9px] md:text-[11px] font-bold tracking-[0.3em] transition-all duration-500 shrink-0 cursor-pointer ${currentSlide === idx
                ? 'text-white opacity-100 scale-125'
                : 'text-white/20 hover:text-white/50'
              }`}
          >
            {String(idx + 1).padStart(2, '0')}
          </button>
        ))}
      </div>

      {/* Main Horizontal Slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory h-[92vh] custom-scrollbar-hide"
      >
        {itineraryData.map((day, i) => (
          <div
            key={i}
            className="snap-center snap-always w-screen h-[92vh] shrink-0 relative flex flex-col md:flex-row overflow-hidden"
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

            {/* Page Number Indicator */}
            {!day.isFinal && (
              <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30 pointer-events-none">
                <span className="text-white/40 text-xs md:text-base font-bold tracking-[0.5em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            )}

            {/* Petal Watermark Texture with Masked Day Number */}
            {!day.isFinal && (
              <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden" style={{ mixBlendMode: 'screen' }}>
                <div
                  className="absolute bottom-[12%] md:bottom-[2%] left-[-50%] md:left-[-20%] w-[150px] h-[150px]"
                  style={{
                    transform: `translate(-10%, 10%) rotate(40deg) scale(${petalScale}) scaleX(-1)`,
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
                <div className="absolute bottom-10 right-8 md:bottom-16 md:left-24 z-20">
                  <div className="flex flex-col gap-1 items-end md:items-start text-right md:text-left">
                    {day.type === 'day' && (
                      <span className="hidden md:block text-black opacity-40 text-[9px] font-bold tracking-[0.4em] uppercase">Día del viaje</span>
                    )}
                    {day.inclusions ? (
                      <div className="flex flex-col gap-0 md:gap-2 opacity-20 md:opacity-40 select-none">
                        <span className="text-black text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-1">LO QUE</span>
                        <h3 className="text-5xl md:text-[7rem] font-serif leading-none text-black whitespace-pre-line">
                          INCLUYE
                        </h3>
                      </div>
                    ) : (
                      <h3 className={`text-4xl ${day.type === 'day' ? 'md:text-[9rem]' : 'md:text-[5.5rem]'} font-serif leading-none text-[#00132C] md:text-black select-none whitespace-pre-line`}>
                        {day.day}
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row">

              {/* Left Column: Visual/Meta */}
              {!day.isFinal && (
                <div className="w-full md:w-[45%] h-auto md:h-full p-8 md:p-20 flex flex-col justify-start">
                  <div className="flex flex-col gap-6">
                    {day.date && !day.isFinal && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 text-white md:text-[#00132C]"
                      >
                        <Calendar size={18} className="text-[#A68C6B]" />
                        <span className="text-xs font-bold tracking-[0.4em] uppercase">{day.date}</span>
                      </motion.div>
                    )}
                    {day.location && !day.isFinal && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 text-white md:text-[#00132C]"
                      >
                        <MapPin size={18} className="text-[#A68C6B]" />
                        <span className="text-xs font-bold tracking-[0.4em] uppercase">{day.location}</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}

              {/* Right Column: Detailed Info */}
              <div className={`w-full ${day.isFinal ? 'md:w-full md:pr-0' : 'md:w-[55%] md:pr-32'} h-full flex flex-col justify-center p-8 md:p-24 overflow-y-auto`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`flex flex-col gap-1 md:gap-10 max-w-2xl ${day.isFinal ? 'mx-auto items-center text-center' : 'md:ml-auto'}`}
                >
                  {!day.inclusions && !day.isFinal && (
                    <div className="flex flex-col gap-4">
                      <span className="text-[#A68C6B] text-[10px] font-bold tracking-[0.5em] uppercase">
                        {day.title === 'TU EXPERIENCIA' ? 'TU EXPERIENCIA' : (day.type === 'intro' ? 'INFORMACIÓN PREVIA' : day.type === 'outro' ? 'DETALLES FINALES' : 'EXPERIENCIA EXCLUSIVA')}
                      </span>
                      <h2 className="text-3xl md:text-6xl font-serif text-[#00132C] md:text-white leading-tight max-w-[66%] md:max-w-none">
                        {day.title}
                      </h2>
                      <div className="w-24 h-0.5 bg-[#A68C6B]/40" />
                    </div>
                  )}

                  {day.desc && (
                    <div className="flex flex-col items-center gap-12">
                      <p className={`text-base ${day.isFinal ? 'text-2xl md:text-5xl !leading-tight font-serif italic text-white/90' : (day.type === 'outro' ? 'md:text-xl text-[#00132C]/70 md:text-white/70' : 'md:text-2xl text-[#00132C]/70 md:text-white/70')} font-light leading-relaxed max-w-4xl whitespace-pre-line`}>
                        {day.desc}
                      </p>
                      {day.isFinal && (
                        <motion.img
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 0.8, scale: 1 }}
                          transition={{ delay: 0.5, duration: 1 }}
                          src="/Trebol_2.svg"
                          alt="Trebolution"
                          className="w-20 md:w-32 h-20 md:h-32 object-contain"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      )}
                    </div>
                  )}

                  {/* Interactive Index Sections */}
                  {day.indexSections && (
                    <div className="flex flex-col gap-4 mt-2">
                      {day.indexSections.map((section, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(section.slide);
                          }}
                          className="group flex items-center gap-4 text-left text-[#00132C]/70 md:text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#A68C6B] group-hover:scale-110 transition-transform">
                            {section.label.split(' ')[0]}
                          </span>
                          <span className="text-base md:text-xl font-light tracking-wide group-hover:translate-x-2 transition-transform border-b border-transparent group-hover:border-[#A68C6B]/30 pb-0.5">
                            {section.label.split(' ').slice(1).join(' ')}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* List of Hotels (for Outro slides) */}
                  {day.hotels && (
                    <div className="flex flex-col gap-4 mt-4">
                      {day.hotels.map((h, idx) => {
                        const hId = `hlist-${i}-${idx}`;
                        const isOpen = activeHotelId === hId;
                        return (
                          <div key={idx} className="relative group/hitem">
                            {/* Tooltip for list items - Positioned to the left to avoid overflow */}
                            <div className={`absolute right-0 md:right-full top-1/2 -translate-y-1/2 md:mr-8 w-64 ${isOpen ? 'visible opacity-100 translate-x-0' : 'invisible md:group-hover/hitem:visible opacity-0 md:group-hover/hitem:opacity-100 translate-x-2'} transition-all duration-300 z-50`}>
                              <div className="bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 relative">
                                {/* Triangle indicator pointing right */}
                                <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-black/5" />
                                <p className="text-[#00132C] text-xs font-light italic leading-relaxed">
                                  {h.desc}
                                </p>
                              </div>
                            </div>

                            <div
                              onClick={(e) => toggleHotel(e, hId)}
                              className="flex items-center gap-4 text-[#00132C] md:text-white/80 hover:text-white transition-colors cursor-pointer group"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#A68C6B] group-hover:scale-150 transition-transform" />
                              <span className="text-base md:text-lg font-light tracking-wide">{h.name}</span>
                              <span className="text-[7px] md:text-[8px] px-1.5 py-0.5 border border-[#A68C6B]/40 text-[#A68C6B] rounded uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">+ INFO</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Inclusions Grid (for Inclusions slide) */}
                  {day.inclusions && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-12 mt-8 md:mt-12">
                      {day.inclusions.map((item, idx) => {
                        const Icon = IconMap[item.icon];
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex flex-col items-center text-center gap-3 md:gap-4 group"
                          >
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#A68C6B] flex items-center justify-center text-white transition-all duration-500 shadow-xl shadow-[#A68C6B]/20">
                              {Icon && <Icon size={24} className="md:w-8 md:h-8" />}
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                              <span className="text-[9px] md:text-[11px] font-medium text-[#00132C]/80 md:text-white/80 leading-snug uppercase tracking-[0.15em] max-w-[140px] md:max-w-[180px]">
                                {item.label}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}

                  {/* Price & Conditions (for Investment slide) */}
                  {day.price && (
                    <div className="flex flex-col gap-8 md:gap-12 mt-4 md:mt-0">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                          <span className="text-6xl md:text-[7rem] font-serif text-white leading-none">{day.price}</span>
                          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/50 uppercase">por persona en ocupación doble</span>
                        </div>
                        {day.supplement && (
                          <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-[#A68C6B]/40" />
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#A68C6B] uppercase">SUPLEMENTO INDIVIDUAL: {day.supplement}</span>
                          </div>
                        )}
                      </div>

                      {day.conditions && (
                        <div className="flex flex-col gap-6 md:gap-8">
                          <h4 className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-white uppercase border-b border-[#A68C6B]/20 pb-2 w-fit">CONDICIONES DE RESERVA</h4>
                          <div className="flex flex-col gap-5">
                            {day.conditions.map((cond, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-4 items-start"
                              >
                                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#A68C6B] mt-1.5 md:mt-2 shrink-0" />
                                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-lg">{cond}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Single Hotel Block (for Day slides) */}
                  {day.hotel && (() => {
                    const hId = `hotel-${i}`;
                    const isOpen = activeHotelId === hId;
                    return (
                      <div className="relative group mt-8">
                        {/* Floating Info Window */}
                        <div className={`absolute bottom-full left-0 mb-4 w-full ${isOpen ? 'visible opacity-100 translate-y-0' : 'invisible md:group-hover:visible opacity-0 md:group-hover:opacity-100 translate-y-2'} transition-all duration-300 pointer-events-none z-50`}>
                          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative w-full">
                            {/* Triangle indicator */}
                            <div className="absolute -bottom-2 left-10 w-4 h-4 bg-white rotate-45 border-r border-b border-black/5" />
                            <p className="text-[#00132C] text-sm md:text-base font-light leading-relaxed italic">
                              "{day.hotelDesc}"
                            </p>
                          </div>
                        </div>

                        {/* Hotel Main Block */}
                        <div
                          onClick={(e) => toggleHotel(e, hId)}
                          className="p-6 md:p-8 bg-white/10 md:bg-white/5 rounded-3xl border border-[#00132C]/10 md:border-white/10 flex items-center gap-6 md:gap-8 hover:bg-white/15 transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-brand-primary shrink-0 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                            <Building2 className="w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-3 mb-1 md:mb-2">
                              <span className="text-[8px] md:text-[9px] font-bold text-[#00132C]/40 md:text-white/40 uppercase tracking-[0.4em]">Alojamiento seleccionado</span>
                              <span className="text-[8px] md:text-[10px] px-2 py-0.5 bg-[#A68C6B] text-white rounded-md font-bold tracking-wider">INFO</span>
                            </div>
                            <span className="text-base md:text-xl font-medium text-[#00132C] md:text-white">{day.hotel}</span>
                          </div>

                          {/* Subtle Glow on Hover */}
                          <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </div>

            </div>

            {/* Mobile Navigation Hint */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center md:hidden pointer-events-none">
              <div className="flex items-center gap-4 text-[#00132C]/60 text-[9px] font-bold tracking-[0.3em] uppercase">
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
