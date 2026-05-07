import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor = () => {
  return (
    <section className="bg-white py-40 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-stretch">
          
          {/* Positive Section */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-brand-secondary rounded-3xl border border-brand-primary/5 shadow-sm transition-all hover:shadow-xl">
            <h3 className="text-3xl md:text-4xl font-serif text-brand-primary leading-tight">
              Este viaje <br />
              <span className="italic text-brand-accent">es para ti si...</span>
            </h3>
            <ul className="flex flex-col gap-8">
              {[
                "Buscas algo más que un viaje convencional",
                "Valoras la autenticidad y el detalle",
                "Te interesa el crecimiento personal",
                "Quieres vivir experiencias únicas"
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-brand-primary/80 group">
                  <div className="mt-1 bg-brand-accent text-white p-1.5 rounded-full shadow-md">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[17px] font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] lg:min-h-full group">
            <img 
              src="/assets/images/costa-rica-toucan.png" 
              alt="Toucan Portrait" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <span className="text-white/80 text-[10px] font-bold tracking-[0.5em] uppercase">Conexión Real</span>
            </div>
          </div>

          {/* Negative Section */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-[#F9F9F9] rounded-3xl border border-black/5 transition-all hover:shadow-lg">
            <h3 className="text-3xl md:text-4xl font-serif text-brand-primary/40 leading-tight">
              Este viaje <br />
              <span className="italic">no es para ti si...</span>
            </h3>
            <ul className="flex flex-col gap-8 opacity-60">
              {[
                "Si buscas turismo masivo y convencional",
                "Si priorizas el precio sobre la experiencia",
                "Si no valoras la personalización del detalle",
                "Si quieres un viaje estándar sin alma"
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-brand-primary/80">
                  <div className="mt-1 border-2 border-brand-primary/20 p-1 rounded-full opacity-40">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[17px] font-light leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
