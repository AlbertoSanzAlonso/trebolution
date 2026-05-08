import React from 'react';
import { Heart, Utensils, Sprout, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: <Heart className="w-8 h-8" strokeWidth={1.5} />, 
      title: "Atractivo turístico", 
      desc: "Seleccionamos cada experiencia para que tenga sentido, autenticidad y coherencia." 
    },
    { 
      icon: <Utensils className="w-8 h-8" strokeWidth={1.5} />, 
      title: "Gastronomía", 
      desc: "Seleccionamos cada experiencia para que tenga sentido, autenticidad y coherencia." 
    },
    { 
      icon: <Sprout className="w-8 h-8" strokeWidth={1.5} />, 
      title: "Desarrollo personal", 
      desc: "Seleccionamos cada experiencia para que tenga sentido, autenticidad y coherencia." 
    },
    { 
      icon: <Globe className="w-8 h-8" strokeWidth={1.5} />, 
      title: "Sostenibilidad", 
      desc: "Seleccionamos cada experiencia para que tenga sentido, autenticidad y coherencia." 
    },
  ];

  return (
    <section className="bg-brand-primary py-40 px-6 md:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Intro Text */}
        <div className="max-w-4xl mb-32">
          <h2 className="text-white font-serif text-5xl md:text-7xl mb-12 leading-tight">
            Esto no es <br /> <span className="italic">un viaje más</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
            Es una experiencia diseñada desde el conocimiento real del destino, pensada para personas que buscan algo más que recorrer lugares.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 border-t border-white/10 pt-24">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start text-left text-white/90 gap-8 group">
              <div className="text-brand-accent transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                {f.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-serif font-extralight uppercase">{f.title}</h3>
                <p className="text-[14px] font-light opacity-50 leading-relaxed max-w-[260px]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
