import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroVideo from '../../../assets/costa-rica-hero-segment.mp4';


const Hero = () => {
  return (
    <section className="relative h-[110vh] flex items-center justify-start px-6 md:px-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.15] origin-top-left"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-5xl text-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[13px] md:text-[30px] tracking-[0.4em] uppercase  block mb-6">
            Costa Rica Trebolution Experience
          </span>
          <h1 className="text-3xl md:text-[5rem] font-serif leading-[0.85] mb-10 tracking-tighter uppercase">
            Pura vida <br /> <span className="italic font-light">en su máxima expresión</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed mb-4 font-light italic">
            Un viaje para sentir el mundo de otra manera
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
