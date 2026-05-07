import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor = () => {
  return (
    <section className="bg-white py-0 overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-3">
        <div className="p-20 md:p-32 flex flex-col gap-12 bg-brand-secondary border-r border-brand-primary/5">
          <h3 className="text-3xl font-serif italic text-brand-accent tracking-tight">ESTE VIAJE ES PARA TI SI...</h3>
          <ul className="flex flex-col gap-8">
            {[
              "Buscas algo más que un viaje convencional",
              "Valoras la autenticidad y el detalle",
              "Te interesa el crecimiento personal",
              "Quieres vivir experiencias únicas"
            ].map((text, i) => (
              <li key={i} className="flex gap-6 items-start text-brand-primary/80 group">
                <div className="mt-1 bg-brand-accent/10 p-1.5 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Check size={16} className="text-brand-accent group-hover:text-white" />
                </div>
                <span className="text-[16px] font-light leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="h-[500px] lg:h-auto relative overflow-hidden group">
          <img 
            src="/home/albertosanzdev/.gemini/antigravity/brain/1c87cd0e-f23a-4b7c-9036-55ccab570c9f/costa_rica_toucan_1778151967689.png" 
            alt="Toucan" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#142614]/10 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        <div className="p-20 md:p-32 flex flex-col gap-12 bg-brand-secondary">
          <h3 className="text-3xl font-serif italic text-brand-primary/30 tracking-tight">ESTE VIAJE NO ES PARA TI SI...</h3>
          <ul className="flex flex-col gap-8 opacity-50">
            {[
              "Si buscas turismo masivo",
              "Si priorizas precio sobre experiencia",
              "Si no valoras la personalización",
              "Si quieres un viaje estándar"
            ].map((text, i) => (
              <li key={i} className="flex gap-6 items-start text-brand-primary/80">
                <div className="mt-1 border border-black/10 p-1.5 rounded-full"><X size={16} /></div>
                <span className="text-[16px] font-light leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
