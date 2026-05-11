import React, { useState } from 'react';
import { Download, ArrowDown, X, Building2, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ItineraryCard from './ItineraryCard';

const Itinerary = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const itineraryData = [
    {
      day: "DÍA 1",
      date: "29 AGOSTO",
      location: "SAN JOSÉ",
      title: "Bienvenida a Costa Rica",
      desc: "Llegada al Aeropuerto Internacional Juan Santamaría y traslado privado al Hotel Presidente. Resto del día libre para descansar del viaje o dar un primer paseo por esta ciudad llena de historia y vida. Por la noche, cena de bienvenida para conocer al grupo y comenzar a vivir la experiencia Trebolution.",
      hotel: "Hotel Presidente",
      img: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 2",
      date: "30 AGOSTO",
      location: "VOLCÁN POÁS - ARENAL",
      title: "Volcanes y paisajes que impresionan",
      desc: "Desayuno y salida hacia el Parque Nacional Volcán Poás, uno de los volcanes activos más espectaculares del país. Continuamos hacia La Fortuna, con parada para disfrutar de un almuerzo típico. Al atardecer, relajación en las aguas termales rodeadas de naturaleza.",
      hotel: "Hotel Arenal Manoa",
      img: "https://images.unsplash.com/photo-1568230315894-1edd16d248b7?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 3",
      date: "31 AGOSTO",
      location: "ARENAL",
      title: "Aventura entre la selva y el volcán",
      desc: "Caminata por los puentes colgantes del Arenal, una perspectiva única del bosque lluvioso y su biodiversidad. Tarde libre para disfrutar del hotel o realizar actividades opcionales. Por la noche, cena especial con productos locales.",
      hotel: "Hotel Arenal Manoa",
      img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 4",
      date: "1 SEPTIEMBRE",
      location: "ARENAL - RÍO CELESTE",
      title: "Rumbo a la magia del Río Celeste",
      desc: "Salida hacia el Parque Nacional Volcán Tenorio. Caminata hasta el impresionante Río Celeste y la Catarata, donde el agua adquiere su color turquesa único en medio de la naturaleza. Continuamos hacia nuestro hotel en medio de la naturaleza.",
      hotel: "Río Celeste Hideaway Resort",
      img: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 5",
      date: "2 SEPTIEMBRE",
      location: "RÍO CELESTE",
      title: "Naturaleza en estado puro",
      desc: "Caminata nocturna para descubrir la vida silvestre que despierta al caer el sol. Mañana libre para disfrutar del entorno o actividades opcionales como tubing en el Río Celeste. Tarde para relajarse en las instalaciones del hotel y conectar con la calma.",
      hotel: "Río Celeste Hideaway Resort",
      img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 6",
      date: "3 SEPTIEMBRE",
      location: "RÍO CELESTE - MANUEL ANTONIO",
      title: "Hacia el Pacífico",
      desc: "Salida hacia la costa del Pacífico Central. Llegada al espectacular Hotel Parador Resort & Spa, ubicado frente al mar. Tarde libre para disfrutar de las playas, las piscinas o simplemente relajarse con el sonido del océano.",
      hotel: "Hotel Parador Resort & Spa",
      img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 7",
      date: "4 SEPTIEMBRE",
      location: "MANUEL ANTONIO",
      title: "Entre jungla y mar",
      desc: "Visita al Parque Nacional Manuel Antonio, uno de los más bellos del país, hogar de monos, perezosos y playas paradisíacas. Tarde libre para disfrutar del hotel, realizar actividades opcionales o simplemente contemplar el atardecer. Cena de despedida para celebrar esta experiencia única.",
      hotel: "Hotel Parador Resort & Spa",
      img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1200"
    },
    {
      day: "DÍA 8",
      date: "5 SEPTIEMBRE",
      location: "MANUEL ANTONIO - SAN JOSÉ",
      title: "Hasta pronto, Costa Rica",
      desc: "Mañana libre para un último baño o paseo. A la hora indicada, traslado privado al Aeropuerto Internacional Juan Santamaría para tomar el vuelo de regreso a Madrid. Fin de nuestra experiencia Trebolution.",
      hotel: "Vuelo de regreso",
      img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200"
    },
  ];

  const currentIndex = selectedDay ? itineraryData.findIndex(item => item.day === selectedDay.day) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) setSelectedDay(itineraryData[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < itineraryData.length - 1) setSelectedDay(itineraryData[currentIndex + 1]);
  };

  return (
    <section id="itinerary" className="py-40 px-6 md:px-24 bg-brand-secondary relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-text-light/60 text-[10px] md:text-[11px] font-extralight tracking-[0.4em] uppercase block mb-4 md:mb-6">UN VISTAZO A LO QUE VIVIRÁS</span>
          <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight uppercase tracking-tight">Itinerario <span className="italic text-brand-accent">experiencial</span></h2>
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 -mx-6 px-12 md:mx-0 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-20 custom-scrollbar-hide">
          <style>{`
            .custom-scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .custom-scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          {itineraryData.map((item, i) => (
            <div key={i} className="shrink-0 w-[70vw] sm:w-[400px] md:w-auto snap-center mr-4 md:mr-0">
              <ItineraryCard
                {...item}
                onClick={() => setSelectedDay(item)}
              />
            </div>
          ))}

        </div>
      </div>

      {/* PREMIUM MODAL */}
      <AnimatePresence>
        {selectedDay && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDay(null)}
              className="absolute inset-0 bg-brand-primary/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl h-full max-h-[90vh] rounded-4xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row bg-brand-primary"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedDay.img}
                  alt={selectedDay.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent md:bg-linear-to-r md:from-black/80 md:via-black/20 md:to-transparent" />
              </div>

              {/* THE PETAL BLOCK WITH MASKED DAY NUMBER */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" style={{ mixBlendMode: 'screen' }}>
                <div
                  className="absolute bottom-[10%] right-[-5%] w-[150px] h-[150px]"
                  style={{
                    filter: 'drop-shadow(-30px -30px 70px rgba(0,0,0,0.25))',
                    transform: 'translate(10%, 10%) rotate(-40deg) scale(12)',
                    transformOrigin: 'center'
                  }}
                >
                  <div
                    className="w-full h-full relative overflow-hidden"
                    style={{
                      clipPath: 'path("M 50,100 C 50,100 0,60 0,35 C 0,15 15,0 35,0 C 45,0 50,10 50,10 C 50,10 55,0 65,0 C 85,0 100,15 100,35 C 100,60 50,100 50,100 Z")',
                      background: 'rgba(255, 255, 255, 0.88)',
                    }}
                  />
                </div>

                {/* Day Number Mask (Black text on Screen blend mode creates transparency) */}
                <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
                  <div className="md:w-1/3">
                    <span className="text-black text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">COSTA RICA EXPERIENCE</span>
                    <h3 className="text-6xl md:text-9xl font-serif leading-none text-black whitespace-nowrap">
                      {selectedDay.day}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-8 right-8 z-50 bg-white text-brand-primary p-3 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl cursor-pointer border border-brand-primary/10"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none z-40">
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  disabled={currentIndex === 0}
                  className={`pointer-events-auto p-4 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === 0 ? 'opacity-0 scale-50' : 'opacity-40 hover:opacity-100 hover:bg-white/10 text-white'
                    }`}
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  disabled={currentIndex === itineraryData.length - 1}
                  className={`pointer-events-auto p-4 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === itineraryData.length - 1 ? 'opacity-0 scale-50' : 'opacity-40 hover:opacity-100 hover:bg-white/10 text-brand-primary'
                    }`}
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </div>

              {/* UI Overlay / Left Column - Absolute on mobile to float over image, relative on desktop to maintain column */}
              <div className="absolute md:relative inset-0 md:inset-auto z-50 w-full md:w-1/3 h-full p-8 md:p-20 flex flex-col justify-between pointer-events-none">
                {/* Date and Location over the image background */}
                <div className="flex flex-col gap-1 md:gap-4 items-end md:items-start">
                  <div className="flex items-center gap-2 md:gap-3 text-white/80">
                    <Calendar size={12} className="text-brand-accent md:w-[16px] md:h-[16px]" />
                    <span className="text-[8px] md:text-[11px] font-bold tracking-[0.3em] uppercase">{selectedDay.date}</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-white/80">
                    <MapPin size={12} className="text-brand-accent md:w-[16px] md:h-[16px]" />
                    <span className="text-[8px] md:text-[11px] font-bold tracking-[0.3em] uppercase">{selectedDay.location}</span>
                  </div>
                </div>

                {/* Empty space to let the mask effect from z-20 layer show through */}
                <div className="h-40" />
              </div>

              {/* Content Side with Custom Scrollbar */}
              <div className="relative z-30 w-full md:w-2/3 flex flex-col overflow-y-auto custom-scrollbar">
                <style>{`
                  .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: var(--color-border-main);
                    border-radius: 10px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #A68C6B;
                  }
                  ::selection {
                    background: #A68C6B; /* brand-accent */
                    color: #00132C; /* brand-primary */
                  }
                  ::-moz-selection {
                    background: #A68C6B;
                    color: #00132C;
                  }
                `}</style>
                <div className="p-8 md:p-24 pt-44 pb-48 md:pt-24 md:pb-20 min-h-full flex flex-col justify-end gap-5 md:gap-10 relative">
                  <div className="flex flex-col gap-3 md:gap-6">
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-primary leading-tight max-w-[90%]">
                      {selectedDay.title}
                    </h2>
                    <div className="w-20 h-1 bg-brand-accent/30" />
                  </div>

                  <p className="text-lg md:text-xl text-brand-primary/70 font-light leading-relaxed">
                    {selectedDay.desc}
                  </p>

                  <div className="mt-4 md:mt-8 p-3 md:p-8 bg-brand-secondary/30 rounded-2xl flex items-center gap-3 md:gap-6 border border-brand-primary/5">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-primary shrink-0">
                      <Building2 className="w-4 h-4 md:w-7 md:h-7" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[8px] md:text-[10px] font-bold text-brand-primary/30 uppercase tracking-[0.3em] mb-0.5 md:mb-1">Alojamiento seleccionado</span>
                      <span className="text-base md:text-xl font-medium text-brand-primary">{selectedDay.hotel}</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Itinerary;
