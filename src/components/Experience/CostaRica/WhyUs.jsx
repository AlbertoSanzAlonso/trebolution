import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="py-40 px-6 md:px-24 bg-brand-secondary relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-32">
          <div>
            <span className="text-brand-accent text-[11px] font-bold tracking-[0.4em] uppercase block mb-8">
              El trébol que guía cada experiencia
            </span>
            <h2 className="text-white font-serif text-5xl md:text-6xl leading-[0.95] tracking-tighter uppercase">
              Cuatro valores. <br />
              <span className="italic font-light">Una forma única de viajar</span>
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed border-l border-brand-accent/20 pl-8">
              Como las cuatro hojas de un trébol, cada valor es imprescindible para crear una Trebolution Experience auténtica, significativa y exclusiva.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
            <div key={i} className="flex flex-col gap-8 bg-gradient-to-br from-[#BFAE96] via-[#A68C6B] to-[#8E7656] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-white/30 group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-10 pointer-events-none rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <img src="/Trebol_2.svg" alt="" className="w-full h-full object-contain brightness-0" />
              </div>
              <span className="text-brand-secondary font-serif text-5xl font-extralight opacity-40">
                {item.num}
              </span>
              <div className="flex flex-col gap-4">
                <h4 className="text-brand-primary text-lg font-bold tracking-widest uppercase leading-tight">
                  {item.title}
                </h4>
                <p className="text-brand-primary/80 text-[13px] leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Difference Card */}
      <div className="max-w-[1400px] mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden mt-10">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Main Message */}
          <div className="flex flex-col gap-6 relative z-10 p-12 md:p-20 justify-center overflow-hidden">
            {/* Light Blue Watermark */}
            <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.07] pointer-events-none -rotate-12 z-0">
              <img 
                src="/Trebol_2.svg" 
                alt="" 
                className="w-full h-full object-contain" 
                style={{ filter: 'invert(82%) sepia(15%) saturate(357%) hue-rotate(164deg) brightness(96%) contrast(92%)' }} 
              />
            </div>
            <span className="text-brand-secondary text-[10px] font-bold tracking-[0.4em] uppercase">LA DIFERENCIA TREBOLUTION</span>
            <h2 className="text-3xl md:text-6xl font-serif leading-tight text-brand-primary uppercase tracking-tighter">
              Te acompañamos <br />
              <span className="italic font-light">en todo momento</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-primary/70 leading-relaxed max-w-lg font-light italic border-l border-brand-secondary/20 pl-6">
              "No estás solo. Estamos contigo antes y durante el viaje. Esa es la diferencia entre viajar y vivir una experiencia Trebolution."
            </p>
          </div>

          {/* Visual Side - Full Bleed */}
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200"
              alt="Trebolution Experience"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/5" />

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
    </section>
  );
};

export default WhyUs;
