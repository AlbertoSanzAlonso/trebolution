import React from 'react';
import { Heart, Leaf, Users, ShieldCheck, Sparkles } from 'lucide-react';

const Community = () => {
  return (
    <section className="bg-[#142614] py-32 px-6 md:px-24 relative overflow-hidden">
      <div className="absolute right-[-10%] top-[-20%] opacity-3 pointer-events-none rotate-12">
        <Heart size={800} className="text-white" />
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-10 relative z-10">
         <div className="relative">
            <div className="absolute inset-0 bg-brand-accent/20 blur-2xl rounded-full" />
            <div className="w-24 h-24 border border-brand-accent/30 rounded-full flex items-center justify-center relative bg-[#142614]">
              <Leaf size={44} className="text-brand-accent" />
            </div>
         </div>
        
        <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-tight">
          Te acompañamos <br />
          <span className="italic text-brand-accent font-light">en todo momento.</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl font-light leading-relaxed">
          No estás solo. Estamos contigo antes y durante el viaje. Esa es la diferencia entre viajar y vivir una experiencia Trebolution.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 w-full border-t border-white/5 pt-16">
          {[
            { icon: <Users size={22} />, text: "Grupos reducidos" },
            { icon: <Heart size={22} />, text: "Atención personalizada" },
            { icon: <ShieldCheck size={22} />, text: "Selección cuidadosa" },
            { icon: <Sparkles size={22} />, text: "Ambiente seguro" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 text-white/80 group">
              <div className="text-brand-accent group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
