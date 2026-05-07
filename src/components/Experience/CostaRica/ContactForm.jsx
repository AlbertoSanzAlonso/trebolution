import React from 'react';
import { FileText, MapPin, Users, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-40 px-6 md:px-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-brand-accent/5 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-32 items-center relative z-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-6xl md:text-[6.5rem] font-serif text-white leading-[0.95] tracking-tighter">
            Si has llegado <br />
            hasta aquí… <br />
            <span className="italic text-brand-accent font-light">es para ti.</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-md leading-relaxed">
            Probablemente este viaje es para ti. Solicita tu plaza para recibir el dossier completo.
          </p>
        </div>

        <div className="bg-white p-16 shadow-[0_30px_100px_rgba(0,0,0,0.3)] relative">
           <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-bl-full pointer-events-none" />
           <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-center mb-16 text-brand-primary opacity-70">SOLICITA MÁS INFORMACIÓN</h3>
           <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-primary/40 ml-1">Nombre completo</label>
                  <input type="text" placeholder="Ej: Maria García" className="bg-[#F9F9F9] border-none p-5 text-[15px] focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-brand-primary/40 ml-1">Tu email</label>
                  <input type="email" placeholder="Ej: maria@email.com" className="bg-[#F9F9F9] border-none p-5 text-[15px] focus:ring-1 focus:ring-brand-accent outline-none transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[9px] font-bold uppercase tracking-widest text-brand-primary/40 ml-1">¿Desde dónde nos escribes?</label>
                <select className="bg-[#F9F9F9] border-none p-5 text-[15px] focus:ring-1 focus:ring-brand-accent outline-none text-brand-primary/50 appearance-none">
                  <option>España</option>
                  <option>México</option>
                  <option>Colombia</option>
                  <option>Otros</option>
                </select>
              </div>
              <button className="bg-brand-accent text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-primary transition-all mt-6 shadow-lg">
                QUIERO RECIBIR EL PROGRAMA COMPLETO
              </button>
              <div className="flex items-center justify-center gap-2 mt-2">
                 <div className="w-1 h-1 bg-brand-accent rounded-full" />
                 <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">Garantizamos tu privacidad al 100%</p>
              </div>
           </form>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-32 flex flex-col md:flex-row gap-16 justify-between border-t border-white/5 pt-16">
          {[
            { icon: <FileText size={18} />, title: "DOSSIER PDF", text: "Programa detallado e inversión" },
            { icon: <MapPin size={18} />, title: "HOTELES", text: "Alojamientos seleccionados" },
            { icon: <Users size={18} />, title: "EXPERIENCIAS", text: "Actividades de conexión local" },
            { icon: <MessageCircle size={18} />, title: "SOPORTE 1 A 1", text: "Resolvemos todas tus dudas" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-white/50 group">
              <div className="text-brand-accent mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-accent">{item.title}</span>
                <span className="text-xs font-light tracking-wide">{item.text}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ContactForm;
