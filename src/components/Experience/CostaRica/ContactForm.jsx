import React, { useState } from 'react';
import { FileText, MapPin, Users, MessageCircle, ChevronRight, ArrowLeft, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DossierDownloadButton from '../../Dossier/DossierDownloadButton';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    experienceType: '',
    travelers: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleOptionSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    nextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const steps = [
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
      title: "¿Quién te acompaña en esta evolución?",
      subtitle: "Personalizamos la logística según tu círculo más cercano.",
      field: "travelers",
      options: [
        { label: "VIAJE EN SOLITARIO", sub: "Un reencuentro contigo mismo." },
        { label: "EN PAREJA", sub: "Compartiendo la esencia del destino." },
        { label: "PEQUEÑO GRUPO", sub: "Amigos o familia (máx 6 personas)." }
      ]
    },
    {
      title: "Inversión estimada por persona",
      subtitle: "La exclusividad requiere una curación sin compromisos.",
      field: "budget",
      options: [
        { label: "3.500€ - 5.000€", sub: "Experiencia premium seleccionada." },
        { label: "5.000€ - 8.000€", sub: "Lujo consciente y privado." },
        { label: "MÁS DE 8.000€", sub: "Ultra-lujo y servicios a medida." }
      ]
    }
  ];

  return (
    <section id="contact" className="py-40 px-6 md:px-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex justify-center items-center min-h-[600px]">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center w-full"
              >
                <div>
                  <h2 className="text-6xl md:text-[6.5rem] font-serif text-white leading-[0.95] tracking-tighter text-left">
                    Si sientes que <br />
                    este viaje es <span className="text-[#A68C6B]">para ti</span>, <br />
                    <span className="italic text-brand-accent font-extralight text-5xl md:text-[5rem]">lo hablamos.</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-10 items-start">
                  <p className="text-xl text-white/40 font-serif font-extralight max-w-xl leading-relaxed uppercase tracking-widest text-left">
                    Cuéntanos qué estás buscando y diseñaremos contigo una experiencia a medida, cuidada desde el primer detalle.
                  </p>
                  
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-[#A68C6B] text-[#00132C] px-12 py-6 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-2xl rounded-full cursor-pointer"
                  >
                    Solicitar acceso a la experiencia
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="w-full max-w-3xl"
              >
                <div className="bg-white p-8 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.5)] w-full relative flex flex-col rounded-3xl overflow-hidden min-h-[600px]">
                  <button 
                    onClick={() => setShowForm(false)}
                    className="absolute top-8 right-8 text-brand-primary/40 hover:text-brand-primary transition-colors cursor-pointer z-50"
                  >
                    <X size={24} />
                  </button>

                  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-[0.06] pointer-events-none rotate-12">
                    <img src="/Trebol_2.svg" alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-bl-full pointer-events-none" />
                  
                  <div className="w-full h-1 bg-gray-100 mb-12 relative overflow-hidden mt-8">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#A68C6B]"
                      initial={{ width: "0%" }}
                      animate={{ width: `${(step / 4) * 100}%` }}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {step < 3 ? (
                      <motion.div 
                        key="quiz"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full relative z-10"
                      >
                        <span className="text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-4">PASO 0{step + 1} / 04</span>
                        <h3 className="text-3xl font-serif text-brand-primary mb-2">{steps[step].title}</h3>
                        <p className="text-sm text-gray-400 font-serif font-extralight mb-12 uppercase tracking-wider">{steps[step].subtitle}</p>
                        
                        <div className="flex flex-col gap-4">
                          {steps[step].options.map((opt) => {
                            const isSelected = formData[steps[step].field] === opt.label;
                            return (
                              <button
                                key={opt.label}
                                onClick={() => handleOptionSelect(steps[step].field, opt.label)}
                                className={`group flex flex-col items-start p-7 border text-left transition-all relative overflow-hidden active:scale-[0.98] cursor-pointer rounded-2xl
                                  ${isSelected ? 'bg-brand-blue/10 border-brand-blue shadow-[0_10px_30px_rgba(0,144,212,0.1)]' : 'bg-white/5 border-gray-100 hover:border-brand-blue hover:bg-brand-blue/5 shadow-sm'}
                                `}
                              >
                                <span className={`text-xs font-bold tracking-[0.25em] uppercase mb-1.5 transition-all duration-200 ${isSelected ? 'text-brand-blue' : 'text-brand-primary group-hover:text-brand-blue'}`}>{opt.label}</span>
                                <span className={`text-[11px] uppercase font-serif font-extralight tracking-widest leading-relaxed transition-all duration-200 ${isSelected ? 'text-brand-primary/80' : 'text-gray-400 group-hover:text-gray-600'}`}>{opt.sub}</span>
                                <div className={`absolute right-8 top-1/2 -translate-y-1/2 ${isSelected ? 'text-brand-blue' : 'text-gray-200 group-hover:text-brand-blue'}`}>
                                  {isSelected ? <Check size={20} strokeWidth={2} /> : <ChevronRight size={20} strokeWidth={1.5} />}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {step > 0 && (
                          <button 
                            onClick={prevStep}
                            className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] hover:text-brand-primary transition-colors cursor-pointer"
                          >
                            <ArrowLeft size={12} /> VOLVER
                          </button>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="form"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col h-full relative z-10"
                      >
                        <span className="text-[10px] font-bold tracking-[0.4em] text-brand-accent uppercase mb-4">ÚLTIMO PASO</span>
                        <h3 className="text-3xl font-serif text-brand-primary mb-2">Detalles de contacto</h3>
                        <p className="text-sm text-gray-400 font-serif font-extralight mb-10 uppercase tracking-wider">Tu dossier personalizado está casi listo.</p>
                        
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">NOMBRE COMPLETO</label>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Ej: Julian Barnes" 
                              className="bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none font-serif font-extralight tracking-widest uppercase transition-all rounded-xl shadow-sm" 
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">EMAIL DE CONTACTO</label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="ejemplo@exclusive.com" 
                              className="bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none font-serif font-extralight tracking-widest uppercase transition-all rounded-xl shadow-sm" 
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">TELÉFONO (PARA WHATSAPP)</label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+34 ..." 
                              className="bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-brand-accent outline-none font-serif font-extralight tracking-widest uppercase transition-all rounded-xl shadow-sm" 
                            />
                          </div>
                          
                          <DossierDownloadButton data={formData} />
                          
                          <button 
                            onClick={prevStep}
                            className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] hover:text-brand-primary transition-colors cursor-pointer"
                          >
                            <ArrowLeft size={12} /> CAMBIAR RESPUESTAS
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-32 flex flex-wrap gap-12 justify-between border-t border-white/5 pt-16">
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
                  <span className="text-xs font-serif font-extralight tracking-widest uppercase text-white/30">{item.text}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
