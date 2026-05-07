import React from 'react';
import { Heart, Sparkles, Leaf, ShieldCheck, Users } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Heart className="w-8 h-8" />, title: "ATRACTIVO TURÍSTICO", desc: "Seleccionamos cada rincón para que tenga sentido y belleza." },
    { icon: <Sparkles className="w-8 h-8" />, title: "GASTRONOMÍA", desc: "Sabores auténticos que conectan con la tierra." },
    { icon: <Leaf className="w-8 h-8" />, title: "DESARROLLO PERSONAL", desc: "Herramientas para tu evolución durante el viaje." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "SOSTENIBILIDAD", desc: "Viajamos con respeto y coherencia." },
    { icon: <Users className="w-8 h-8" />, title: "AUTENTICIDAD", desc: "Vivencias reales lejos del turismo de masas." },
  ];

  return (
    <section className="bg-[#142614] py-24 px-6 md:px-24">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center text-white/90 gap-6 group">
            <div className="text-brand-accent transition-transform duration-500 group-hover:scale-110">{f.icon}</div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase">{f.title}</h3>
              <p className="text-[13px] font-light opacity-60 leading-relaxed max-w-[200px]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
