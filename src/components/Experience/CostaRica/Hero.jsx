import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[110vh] flex items-center justify-start px-6 md:px-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/costa-rica-hero.png"
          alt="Costa Rica Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-5xl text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[13px] md:text-[20px] tracking-[0.4em] uppercase  block mb-6">
            Costa Rica Trebolution Experience
          </span>
          <h1 className="text-4xl md:text-[6rem] font-serif leading-[0.85] mb-10 tracking-tighter uppercase">
            Pura vida <br /> <span className="italic font-light">en su máxima expresión</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed mb-4 font-light italic">
            Un viaje para sentir el mundo de otra manera
          </p>
          <p className="text-lg md:text-xl max-w-3xl opacity-80 leading-relaxed mb-12 font-light">
            Una experiencia auténtica, consciente y transformadora, diseñada desde la vivencia real del destino y acompañada por Trebolution desde el primer momento.
          </p>

        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest font-extralight">Scroll para descubrir</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
};

export default Hero;
