import React from 'react';
import { Check } from 'lucide-react';

const ExperienceQuestions = ({ formData, setFormData }) => {
  const handleOptionSelect = (field, value) => {
    if (setFormData) {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const questions = [
    {
      title: "¿Qué tipo de experiencia buscas?",
      subtitle: "Cada detalle está diseñado para resonar con tu estilo de viaje.",
      field: "experienceType",
      options: [
        { label: "EXPLORACIÓN ÍNTIMA", sub: "Rituales, conexión y calma." },
        { label: "AVENTURA EXCLUSIVA", sub: "Naturaleza salvaje con máximo confort." },
        { label: "VIAJE TRANSFORMADOR", sub: "Propósito, introspección y evolución." }
      ]
    },
    {
      title: "¿Quién te acompaña?",
      subtitle: "Personalizamos la logística según tu círculo.",
      field: "travelers",
      options: [
        { label: "VIAJE EN SOLITARIO", sub: "Un reencuentro contigo mismo." },
        { label: "EN PAREJA", sub: "Compartiendo la esencia del destino." },
        { label: "PEQUEÑO GRUPO", sub: "Amigos o familia (máx 6 personas)." }
      ]
    },
    {
      title: "Inversión estimada",
      subtitle: "La exclusividad requiere curación sin compromisos.",
      field: "budget",
      options: [
        { label: "3.500€ - 5.000€", sub: "Experiencia premium." },
        { label: "5.000€ - 8.000€", sub: "Lujo consciente y privado." },
        { label: "MÁS DE 8.000€", sub: "Ultra-lujo y servicios a medida." }
      ]
    }
  ];

  return (
    <section className="py-32 px-6 md:px-24 bg-brand-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-4 block">TU VIAJE IDEAL</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Diseña tu <span className="italic text-[#A68C6B]">experiencia</span></h2>
          <p className="text-lg font-light text-white/60">Selecciona las opciones que mejor resuenen contigo</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {questions.map((q, i) => (
            <div key={i} className="flex flex-col gap-6 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-xl">
              <div>
                <h3 className="text-2xl font-serif text-white mb-2">{q.title}</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-extralight">{q.subtitle}</p>
              </div>
              
              <div className="flex flex-col gap-4 mt-4 h-full justify-center">
                {q.options.map((opt) => {
                  const isSelected = formData?.[q.field] === opt.label;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleOptionSelect(q.field, opt.label)}
                      className={`group flex flex-col items-start p-6 border text-left transition-all relative overflow-hidden cursor-pointer rounded-2xl
                        ${isSelected ? 'bg-[#A68C6B] border-[#A68C6B] shadow-[0_10px_30px_rgba(166,140,107,0.3)]' : 'bg-transparent border-white/20 hover:border-white/50 hover:bg-white/5'}
                      `}
                    >
                      <span className={`text-xs font-bold tracking-[0.2em] uppercase mb-1.5 transition-colors ${isSelected ? 'text-brand-primary' : 'text-white'}`}>
                        {opt.label}
                      </span>
                      <span className={`text-[10px] uppercase tracking-widest font-extralight leading-relaxed transition-colors ${isSelected ? 'text-brand-primary/80' : 'text-white/50'}`}>
                        {opt.sub}
                      </span>
                      {isSelected && (
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-primary">
                          <Check size={20} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceQuestions;
