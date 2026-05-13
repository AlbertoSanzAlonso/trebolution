import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="pt-40 px-6 md:px-24 bg-brand-secondary relative overflow-hidden">
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
              title: "Enclaves cuidadosamente seleccionados",
              text: "Seleccionamos enclaves auténticos, alojamientos con alma y experiencias vividas en primera persona."
            },
            {
              num: "02",
              title: "Gastronomía",
              text: "Sabores locales, producto, tradición y encuentros culinarios que conectan con la esencia del lugar."
            },
            {
              num: "03",
              title: "Bienestar y conexión",
              text: "Momentos que invitan a la pausa, al bienestar y a la conexión interior, sin artificios."
            },
            {
              num: "04",
              title: "Sostenibilidad",
              text: "Viajar con respeto, apoyar economías locales y generar una huella positiva en cada paso."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-8 bg-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-brand-primary/5 group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-[0.05] pointer-events-none rotate-12 group-hover:rotate-45 transition-transform duration-700">
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

    </section>
  );
};

export default WhyUs;
