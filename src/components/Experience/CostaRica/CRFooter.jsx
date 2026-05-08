import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const CRFooter = () => {
  // SVGs for social media to avoid lucide-react missing export errors
  const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );

  return (
    <footer className="bg-brand-primary pt-32 pb-16 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-20 mb-32">
        <div className="md:col-span-2 flex flex-col gap-10">
          <img 
            src="https://trebolutiontravel.com/wp-content/uploads/2025/06/logo-trebolution-blanco@0.5x.png" 
            alt="Logo" 
            className="w-56"
          />
          <p className="text-brand-text-light/40 text-base font-light leading-relaxed max-w-sm">
            Diseñamos experiencias de viaje profundas que conectan personas con lugares y con su propia esencia. Trebolution es evolución a través del viaje.
          </p>
          <div className="flex gap-6">
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all cursor-pointer group">
              <span className="text-white/40 group-hover:text-white"><InstagramIcon /></span>
            </div>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all cursor-pointer group">
              <span className="text-white/40 group-hover:text-white"><FacebookIcon /></span>
            </div>
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all cursor-pointer group">
              <span className="text-white/40 group-hover:text-white"><YoutubeIcon /></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-[11px] font-extralight tracking-[0.4em] uppercase text-brand-text-light/60">NAVEGACIÓN</h4>
          <div className="flex flex-col gap-5 text-sm text-brand-text-light/40 font-light tracking-wide">
            <a href="#" className="hover:text-brand-accent transition-colors">El viaje</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Experiencias</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Programa</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Hoteles</a>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-[11px] font-extralight tracking-[0.4em] uppercase text-brand-text-light/60">SOBRE NOSOTROS</h4>
          <div className="flex flex-col gap-5 text-sm text-brand-text-light/40 font-light tracking-wide">
            <a href="#" className="hover:text-brand-accent transition-colors">Quiénes somos</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Nuestra filosofía</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Comunidad</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Viajes anteriores</a>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h4 className="text-[11px] font-extralight tracking-[0.4em] uppercase text-brand-text-light/60">LEGAL</h4>
          <div className="flex flex-col gap-5 text-sm text-brand-text-light/40 font-light tracking-wide">
            <a href="#" className="hover:text-brand-accent transition-colors">Términos y condiciones</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Política de cookies</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-light">
          © 2026 Trebolution Travel Designer. Todos los derechos reservados.
        </p>
        <div className="bg-white/3 px-10 py-5 flex items-center gap-8 rounded-full border border-white/5 hover:border-brand-accent/30 transition-all group">
           <div className="flex flex-col">
             <span className="text-[9px] font-bold text-brand-accent tracking-[0.3em] uppercase mb-1">¿TIENES DUDAS?</span>
             <span className="text-base text-white/90 font-medium tracking-tight">Escríbenos por WhatsApp</span>
           </div>
           <a 
             href="https://wa.me/34623345683" 
             target="_blank" 
             rel="noopener noreferrer"
             className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-lg"
           >
             <MessageCircle size={22} className="fill-current" />
           </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34623345683" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle size={30} className="fill-white" />
        <span className="absolute right-full mr-4 bg-brand-primary text-white text-[10px] font-bold px-4 py-2 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
           ¿Hablamos?
        </span>
      </a>
    </footer>
  );
};

export default CRFooter;
