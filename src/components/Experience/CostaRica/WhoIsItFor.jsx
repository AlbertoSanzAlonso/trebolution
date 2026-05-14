import React from 'react';
import { Check, X } from 'lucide-react';

const WhoIsItFor = () => {
  return (
    <section className="bg-white pt-40 pb-20 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Intro Banner: Perfiles Afines */}
        <div className="bg-[#00132C] text-white rounded-4xl p-12 md:p-20 text-center mb-20 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50"></div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8 relative z-10">
            Una experiencia reservada para <span className="italic font-light text-[#A68C6B]">perfiles afines</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-4xl mx-auto leading-relaxed relative z-10">
            Cada viaje se diseña de forma privada. Seleccionamos cuidadosamente a quienes formarán parte para mantener la esencia de la experiencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-stretch">

          {/* Positive Section - Premium Navy */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-[#00132C] rounded-4xl shadow-2xl relative overflow-hidden">
            {/* Navy Section Watermark (White) */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 opacity-[0.1] pointer-events-none rotate-12 z-0">
              <img src="/Trebol_2.svg" alt="" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />

            <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight relative z-10">
              Conectarás con esta <br />
              <span className="italic text-brand-accent font-light">experiencia si...</span>
            </h3>

            <ul className="flex flex-col gap-8 relative z-10">
              {[
                "Buscas lugares auténticos capaces de emocionarte y dejar huella.",
                "Disfrutas descubriendo un destino también a través de su gastronomía.",
                "Valoras experiencias que te permitan desacelerar y conectar contigo.",
                "Crees en una forma más consciente y respetuosa de viajar."
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-white">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-brand-accent/40 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  </div>
                  <span className="text-[17px] font-light leading-snug tracking-wide">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative rounded-4xl overflow-hidden shadow-2xl min-h-[450px] lg:min-h-full">
            <img
              src="/anillo-trebol-taj-mahal.jpg"
              alt="Anillo Trebol"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#00132C]/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-10 left-0 w-full text-center">
              <span className="text-white text-[11px] font-bold tracking-[0.5em] uppercase">Conexión Real</span>
            </div>
          </div>

          {/* Negative Section - Elegant Cream */}
          <div className="flex flex-col gap-12 p-12 md:p-16 bg-[#F8F5F0] rounded-4xl border border-[#00132C]/5 shadow-xl relative overflow-hidden">
            {/* Cream Section Watermark (Light Blue) */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 opacity-[0.08] pointer-events-none rotate-12 z-0">
              <img
                src="/Trebol_2.svg"
                alt=""
                className="w-full h-full object-contain"
                style={{ filter: 'invert(82%) sepia(15%) saturate(357%) hue-rotate(164deg) brightness(96%) contrast(92%)' }}
              />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif text-[#00132C] leading-tight">
              Esta experiencia quizá no <br />
              <span className="italic text-[#00132C]/40 font-light">resuene contigo si...</span>
            </h3>

            <ul className="flex flex-col gap-8">
              {[
                "Prefieres viajes rápidos antes que experiencias que se viven con calma.",
                "Entiendes la gastronomía solo como un servicio y no como parte del destino.",
                "Buscas únicamente lujo superficial sin conexión emocional con el viaje.",
                "No conectas con una manera más consciente y humana de descubrir el mundo."
              ].map((text, i) => (
                <li key={i} className="flex gap-5 items-start text-[#00132C]">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-[#00132C]/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00132C]/20" />
                  </div>
                  <span className="text-[17px] font-light leading-snug tracking-wide">{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Action Buttons Integrados Organicamente */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10 w-full px-4 sm:px-0">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-[#00132C] text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#A68C6B] hover:text-[#00132C] transition-all duration-500 shadow-2xl rounded-full cursor-pointer border border-[#00132C] hover:border-[#A68C6B]"
          >
            Solicitar acceso a la experiencia
          </button>
          <button
            onClick={() => document.getElementById('itinerary')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto border border-[#00132C]/20 bg-white text-[#00132C] px-12 py-6 text-xs font-extralight uppercase tracking-[0.2em] hover:border-[#00132C] hover:bg-[#00132C] hover:text-[#A68C6B] transition-all duration-500 shadow-lg rounded-full cursor-pointer flex items-center justify-center gap-3"
          >
            VER PROGRAMA COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
