import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section className="py-40 px-6 md:px-24 bg-brand-secondary relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Main Message */}
          <div className="flex flex-col gap-10 relative z-10">
            <span className="text-brand-accent text-[11px] font-bold tracking-[0.4em] uppercase">LA DIFERENCIA TREBOLUTION</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] text-brand-primary">
              Te acompañamos <br />
              <span className="italic font-light">en todo momento</span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-primary/80 leading-relaxed max-w-xl font-light italic">
              "No estás solo. Estamos contigo antes y durante el viaje. Esa es la diferencia entre viajar y vivir una experiencia Trebolution."
            </p>
          </div>

          {/* Visual/Secondary Message */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200" 
                alt="Trebolution Experience" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center border border-white/30 backdrop-blur-md bg-white/10 p-12 rounded-2xl">
                  <h3 className="text-white text-3xl md:text-4xl font-serif leading-tight">
                    Momentos que <br />
                    <span className="italic">recordarás siempre</span>
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
