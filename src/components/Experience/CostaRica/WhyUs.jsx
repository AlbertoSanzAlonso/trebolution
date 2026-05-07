import React from 'react';
import { Users, Sparkles, Plane, Heart, ShieldCheck, Clock } from 'lucide-react';

const WhyUs = () => {
  const whyUs = [
    { icon: <Users className="w-6 h-6" />, title: "ACOMPAÑAMIENTO TREBOLUTION", desc: "Equipo experto contigo antes, durante y después del viaje." },
    { icon: <Sparkles className="w-6 h-6" />, title: "GRUPO EXCLUSIVO", desc: "Grupos reducidos y seleccionados para garantizar conexión y calidad." },
    { icon: <Plane className="w-6 h-6" />, title: "ALIANZAS LOCALES", desc: "Trabajamos con emprendedores y proyectos locales que generan impacto." },
    { icon: <Heart className="w-6 h-6" />, title: "EQUILIBRIO PERFECTO", desc: "Aventura, bienestar, cultura y descanso en armonía." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "HOTELES CON ENCANTO", desc: "Alojamientos únicos en entornos naturales excepcionales." },
    { icon: <Clock className="w-6 h-6" />, title: "VIAJES CON PROPÓSITO", desc: "Cada experiencia está diseñada para inspirar tu mejor versión." },
  ];

  return (
    <section className="py-40 px-6 md:px-24 bg-brand-secondary">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-32">
        <div className="flex flex-col gap-8">
          <span className="text-brand-accent text-[11px] font-bold tracking-[0.4em] uppercase">LO QUE NOS HACE DIFERENTES</span>
          <h2 className="text-6xl md:text-[5.5rem] font-serif leading-[0.95] text-brand-primary tracking-tight">
            Esto no es <br />
            <span className="italic text-brand-accent font-light">un viaje más.</span>
          </h2>
          <p className="text-lg text-brand-primary/70 leading-relaxed max-w-xl font-light mt-4">
            Es una experiencia diseñada desde el conocimiento real del destino, pensada para personas que buscan algo más que recorrer lugares.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-20">
          {whyUs.map((item, i) => (
            <div key={i} className="flex flex-col gap-5 border-l border-brand-accent/10 pl-8 relative">
              <div className="text-brand-accent mb-2">{item.icon}</div>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-primary">{item.title}</h4>
              <p className="text-[14px] text-brand-primary/60 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
