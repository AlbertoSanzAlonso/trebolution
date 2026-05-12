import React from 'react';
import { motion } from 'framer-motion';
import philosophyBg from '../../../assets/philosophy_bg_clean.png';

const Philosophy = () => {
  return (
    <section className="bg-brand-accent py-40 px-6 md:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-20"
            >
              <div className="flex flex-col gap-4">
                <span className="text-brand-primary text-[11px] font-bold tracking-[0.4em] uppercase">
                  Filosofía trebolera
                </span>
                <h2 className="text-4xl md:text-7xl font-serif leading-[1.1] text-brand-primary uppercase tracking-tighter">
                  No organizamos viajes.
                </h2>
              </div>

              <div className="flex flex-col gap-8 border-l border-brand-primary/10 pl-10">
                <h3 className="text-2xl md:text-3xl font-serif text-brand-primary italic">
                  <span className="text-[#A68C6B] font-bold">Creamos experiencias</span> que permanecen.
                </h3>
                <p className="text-xl md:text-2xl text-brand-primary/70 leading-relaxed font-light">
                  Cada detalle ha sido vivido antes de proponértelo.
                </p>
                <p className="text-lg md:text-xl text-brand-primary/90 font-serif italic">
                  Hemos explorado previamente los paisajes, evaluado con mimo los hoteles y vivido cada actividad para ofrecerte una experiencia cuidada, segura y auténtica.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Visual Element with Text Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-3xl relative">
              <img
                src={philosophyBg}
                alt="Filosofía Trebolera"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10" />

              {/* Slogan Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-center"
                >
                  <h3 className="text-white text-3xl md:text-6xl font-serif leading-tight lowercase tracking-tight">
                    <span className="block italic opacity-90">diseñamos</span>
                    <span className="block font-light">lo que vivimos</span>
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>

        {/* Unified Difference Card */}
        <div className="mt-32 bg-white rounded-[3rem] shadow-2xl overflow-hidden relative z-10">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Main Message */}
            <div className="flex flex-col gap-8 relative z-10 p-12 md:p-20 justify-center overflow-hidden order-2 lg:order-2">
              {/* Light Blue Watermark */}
              <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.07] pointer-events-none -rotate-12 z-0">
                <img 
                  src="/Trebol_2.svg" 
                  alt="" 
                  className="w-full h-full object-contain" 
                  style={{ filter: 'invert(82%) sepia(15%) saturate(357%) hue-rotate(164deg) brightness(96%) contrast(92%)' }} 
                />
              </div>
              
              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-brand-secondary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">LA DIFERENCIA TREBOLUTION</span>
                <p className="text-lg md:text-xl text-brand-primary/80 leading-relaxed max-w-lg font-light mb-4">
                  En Trebolution nos convertimos en tus cómplices de ruta. Viajamos contigo, guiándote con cercanía y conocimiento, porque cada servicio, cada hotel y cada actividad ha sido seleccionado tras vivirlo en primera persona.
                </p>
                <h2 className="text-2xl md:text-4xl font-serif leading-tight text-brand-primary italic border-l-2 border-[#A68C6B] pl-8 mt-4 py-2">
                  "Porque lo verdaderamente exclusivo se elige desde la experiencia."
                </h2>
              </div>
            </div>

            {/* Visual Side - Full Bleed */}
            <div className="relative overflow-hidden min-h-[400px] lg:min-h-full order-1 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200"
                alt="Trebolution Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/10" />

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

export default Philosophy;
