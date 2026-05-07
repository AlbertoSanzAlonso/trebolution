import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[110vh] flex items-center justify-start px-6 md:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/home/albertosanzdev/.gemini/antigravity/brain/1c87cd0e-f23a-4b7c-9036-55ccab570c9f/costa_rica_hero_1778151943812.png" 
          alt="Costa Rica Waterfall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-5xl text-white pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[13px] md:text-[15px] font-bold tracking-[0.4em] uppercase opacity-90 block mb-6">
            COSTA RICA | 8 DÍAS - 7 NOCHES
          </span>
          <h1 className="text-6xl md:text-[10rem] font-serif leading-[0.85] mb-10 tracking-tighter">
            Costa Rica
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed mb-12 font-light">
            Un viaje que marca un antes y un después
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-brand-accent text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl">
              QUIERO MÁS INFORMACIÓN
            </button>
            <button className="border border-white/50 bg-white/10 backdrop-blur-sm text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#05051E] transition-all flex items-center gap-3">
              VER PROGRAMA COMPLETO <Download size={14} />
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest font-bold">Scroll para descubrir</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
};

export default Hero;
