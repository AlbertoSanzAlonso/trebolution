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
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <span className="text-brand-primary text-[11px] font-bold tracking-[0.4em] uppercase">
                  Filosofía trebolera
                </span>
                <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-brand-primary">
                  No organizamos viajes. <br />
                  <span className="italic font-light">Creamos experiencias que permanecen.</span>
                </h2>
              </div>
              
              <div className="flex flex-col gap-8 border-l border-brand-primary/10 pl-10">
                <p className="text-xl md:text-2xl text-brand-primary/70 leading-relaxed font-light">
                  Costa Rica se convierte en un territorio de conexión: naturaleza, gastronomía, bienestar, cultura y una forma de viajar más profunda, íntima y consciente.
                </p>
                <p className="text-lg md:text-xl text-brand-primary/90 font-serif italic">
                  Aquí nada es estándar. Cada detalle se elige desde la experiencia, la sensibilidad y el propósito.
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
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl relative group">
              <img 
                src={philosophyBg} 
                alt="Filosofía Trebolera" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Slogan Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-center"
                >
                  <h3 className="text-white text-4xl md:text-6xl font-serif leading-tight lowercase tracking-tight">
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
      </div>
    </section>
  );
};

export default Philosophy;
