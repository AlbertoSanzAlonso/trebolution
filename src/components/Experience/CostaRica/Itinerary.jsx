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
    <section className="py-40 px-6 md:px-24 bg-brand-secondary relative">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-text-light text-[11px] font-extralight tracking-[0.4em] uppercase block mb-6">UN VISTAZO A LO QUE VIVIRÁS</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-primary">Itinerario <span className="italic">experiencial</span></h2>
        </div>
        
        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20 custom-scrollbar-hide">
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
            <div key={i} className="shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center mr-8 md:mr-0">
              <ItineraryCard 
                {...item} 
                onClick={() => setSelectedDay(item)}
              />
            </div>
          ))}
          
          {/* Final Download Card */}
          <div className="shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center">
            <div className="bg-brand-primary p-10 flex flex-col items-center justify-center text-center gap-10 text-white group cursor-pointer relative overflow-hidden aspect-2/3 rounded-3xl h-full border border-border-main/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-text-light/10 rounded-bl-full pointer-events-none" />
              <div className="relative">
                 <div className="absolute inset-0 bg-brand-text-light/20 blur-xl rounded-full" />
                 <Download size={48} className="text-brand-text-light group-hover:scale-110 transition-transform relative z-10" />
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-2xl font-serif font-extralight uppercase tracking-widest leading-tight">PROGRAMA <br /> COMPLETO 2026</h4>
                <p className="text-[12px] opacity-70 font-light uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">Descarga el itinerario detallado con hoteles premium y experiencias exclusivas</p>
              </div>
              <div className="mt-8 flex flex-col items-center gap-2">
                <span className="text-[10px] font-extralight tracking-widest opacity-40 uppercase">PDF Disponible</span>
                <ArrowDown size={24} className="animate-bounce text-brand-text-light" />
              </div>
            </div>
          </div>
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
              className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-4xl overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedDay(null)}
                className="absolute top-8 right-8 z-50 bg-brand-primary text-white p-3 rounded-full hover:bg-brand-accent transition-colors shadow-xl"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none z-40">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  disabled={currentIndex === 0}
                  className={`pointer-events-auto p-4 rounded-full transition-all duration-300 ${
                    currentIndex === 0 ? 'opacity-0 scale-50' : 'opacity-40 hover:opacity-100 hover:bg-white/10 text-brand-primary md:text-white'
                  }`}
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  disabled={currentIndex === itineraryData.length - 1}
                  className={`pointer-events-auto p-4 rounded-full transition-all duration-300 ${
                    currentIndex === itineraryData.length - 1 ? 'opacity-0 scale-50' : 'opacity-40 hover:opacity-100 hover:bg-white/10 text-brand-primary'
                  }`}
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden shrink-0">
                <img 
                  src={selectedDay.img} 
                  alt={selectedDay.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-12 left-12 text-white">
                  <span className="text-brand-accent text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">COSTA RICA EXPERIENCE</span>
                  <h3 className="text-4xl md:text-6xl font-serif leading-tight">{selectedDay.day}</h3>
                </div>
              </div>

              {/* Content Side with Custom Scrollbar */}
              <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col bg-white overflow-y-auto custom-scrollbar">
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
                `}</style>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-brand-accent">
                        <Calendar size={16} />
                        <span className="text-[11px] font-bold tracking-widest uppercase">{selectedDay.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-brand-accent">
                        <MapPin size={16} />
                        <span className="text-[11px] font-bold tracking-widest uppercase">{selectedDay.location}</span>
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-primary leading-tight">
                      {selectedDay.title}
                    </h2>
                  </div>

                  <div className="w-20 h-1 bg-brand-accent/30" />

                  <p className="text-lg text-brand-primary/70 font-light leading-relaxed">
                    {selectedDay.desc}
                  </p>

                  <div className="mt-8 p-8 bg-brand-secondary/50 rounded-2xl flex items-center gap-6 border border-brand-primary/5">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-brand-accent">
                      <Building2 size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-brand-primary/30 uppercase tracking-[0.3em] mb-1">Alojamiento seleccionado</span>
                      <span className="text-xl font-medium text-brand-primary">{selectedDay.hotel}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleNext}
                    disabled={currentIndex === itineraryData.length - 1}
                    className="mt-4 bg-brand-primary text-white py-6 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-brand-accent transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentIndex === itineraryData.length - 1 ? 'Última etapa' : 'Siguiente etapa del viaje'}
                  </button>
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
