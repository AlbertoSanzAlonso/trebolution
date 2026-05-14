import React, { useState } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';

const DossierDownloadButton = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simular un pequeño retraso para feedback visual antes de mostrar el itinerario
    setTimeout(() => {
      setIsLoading(false);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      type="button"
      className="group relative bg-brand-accent text-brand-primary py-6 px-12 text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(0,144,212,0.3)] active:scale-[0.99] rounded-xl cursor-pointer disabled:opacity-50"
    >
      <div className="absolute inset-0 bg-brand-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
      <span className="relative z-10 flex items-center justify-center gap-3 transition-colors group-hover:text-white">
        {isLoading ? (
          <>PROCESANDO... <Loader2 className="animate-spin" size={14} /></>
        ) : (
          <>ACCEDER AL ITINERARIO PRIVADO <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" /></>
        )}
      </span>
    </button>
  );
};

export default DossierDownloadButton;
