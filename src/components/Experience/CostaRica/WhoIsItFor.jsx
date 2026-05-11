import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor = () => {
  return (
    <section className="bg-white py-40 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">
          
          {/* Positive Section - Premium Navy */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-[#00132C] rounded-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
            
            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight relative z-10">
              Este viaje <br />
              <span className="italic text-brand-accent font-light">es para ti si...</span>
            </h3>
            
            <ul className="flex flex-col gap-8 relative z-10">
              {[
                "Buscas algo más que un viaje convencional",
                "Valoras la autenticidad y el detalle",
                "Te interesa el crecimiento personal",
                "Quieres vivir experiencias únicas"
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-[#A68C6B]">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-brand-accent/40 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-[17px] font-light leading-snug tracking-wide">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section - Toucan */}
          <div className="relative rounded-4xl overflow-hidden shadow-2xl min-h-[450px] lg:min-h-full">
            <img 
              src="/assets/images/costa-rica-toucan.png" 
              alt="Toucan Portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#00132C]/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-0 w-full text-center">
              <span className="text-white text-[11px] font-bold tracking-[0.5em] uppercase">Conexión Real</span>
            </div>
          </div>

          {/* Negative Section - Elegant Cream */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-[#F8F5F0] rounded-4xl border border-[#00132C]/5 shadow-xl">
            <h3 className="text-3xl md:text-5xl font-serif text-[#00132C] leading-tight">
              Este viaje <br />
              <span className="italic text-[#00132C]/40 font-light">no es para ti si...</span>
            </h3>
            
            <ul className="flex flex-col gap-8">
              {[
                "Si buscas turismo masivo y convencional",
                "Si priorizas el precio sobre la experiencia",
                "Si no valoras la personalización del detalle",
                "Si quieres un viaje estándar sin alma"
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-[#00132C]/70">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-[#00132C]/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00132C]/20" />
                  </div>
                  <span className="text-[17px] font-light leading-snug tracking-wide">{text}</span>
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
