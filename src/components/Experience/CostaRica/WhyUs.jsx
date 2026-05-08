import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="py-40 px-6 md:px-24 bg-brand-secondary relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto mb-40">
        <div className="max-w-4xl mb-32">
          <span className="text-brand-accent text-[11px] font-bold tracking-[0.4em] uppercase block mb-8">Nuestros pilares</span>
          <h2 className="text-white font-serif text-5xl md:text-8xl mb-8 leading-[0.95] tracking-tighter uppercase">
            El trébol que guía <br />
            <span className="italic font-light">cada experiencia</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-12 md:items-end">
            <h3 className="text-2xl md:text-3xl text-brand-accent font-serif italic font-light lowercase">
              Cuatro valores. Una forma única de viajar.
            </h3>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Como las cuatro hojas de un trébol, cada valor es imprescindible para crear una Trebolution Experience auténtica, significativa y exclusiva.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-20">
          {[
            { 
              num: "01", 
              title: "Atractivo turístico", 
              text: "Seleccionamos enclaves auténticos, alojamientos con alma y experiencias vividas en primera persona." 
            },
            { 
              num: "02", 
              title: "Gastronomía", 
              text: "Sabores locales, producto, tradición y encuentros culinarios que conectan con la esencia del lugar." 
            },
            { 
              num: "03", 
              title: "Desarrollo personal", 
              text: "Momentos que invitan a la pausa, al bienestar y a la conexión interior, sin artificios." 
            },
            { 
              num: "04", 
              title: "Sostenibilidad", 
              text: "Viajar con respeto, apoyar economías locales y generar una huella positiva en cada paso." 
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-8 group">
              <span className="text-brand-accent font-serif text-4xl font-extralight opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                {item.num}
              </span>
              <div className="flex flex-col gap-4">
                <h4 className="text-white text-lg font-bold tracking-widest uppercase">
                  {item.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto border-t border-white/5 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Message */}
          <div className="flex flex-col gap-6 relative z-10">
            <span className="text-brand-accent text-[10px] font-bold tracking-[0.4em] uppercase">LA DIFERENCIA TREBOLUTION</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">
              Te acompañamos <br />
              <span className="italic font-light">en todo momento</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg font-light italic border-l border-brand-accent/20 pl-6">
              "No estás solo. Estamos contigo antes y durante el viaje. Esa es la diferencia entre viajar y vivir una experiencia Trebolution."
            </p>
          </div>

          {/* Visual/Secondary Message */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200" 
                alt="Trebolution Experience" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                <div className="border border-white/20 backdrop-blur-sm bg-white/5 p-8 rounded-xl">
                  <h3 className="text-white text-xl md:text-2xl font-serif leading-tight">
                    Trebolution <br />
                    <span className="italic font-light">Experience</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
