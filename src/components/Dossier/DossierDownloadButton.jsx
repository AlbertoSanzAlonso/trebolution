import React, { useState } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const DossierDownloadButton = ({ data, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // ID real de Formspree configurado para Trebolution
      const FORMSPREE_ID = 'mgodbbwb'; 
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Solicitud de Dossier Costa Rica: ${data?.name || 'Sin nombre'}`,
          message: `Interés en Costa Rica.\n\nNombre: ${data?.name}\nEmail: ${data?.email}\nTeléfono: ${data?.phone}`
        })
      });

      if (response.ok) {
        if (onSuccess) onSuccess();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error al enviar el formulario');
      }
    } catch (err) {
      setError('Error de conexión. Inténtalo de nuevo.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <button
        onClick={handleClick}
        disabled={isLoading}
        type="button"
        className="group relative bg-brand-accent text-brand-primary py-6 px-12 text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(0,144,212,0.3)] active:scale-[0.99] rounded-xl cursor-pointer disabled:opacity-50"
      >
        <div className="absolute inset-0 bg-brand-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-3 transition-colors group-hover:text-white">
          {isLoading ? (
            <>PROCESANDO SOLICITUD... <Loader2 className="animate-spin" size={14} /></>
          ) : (
            <>SOLICITAR ACCESO A LA EXPERIENCIA <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" /></>
          )}
        </span>
      </button>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[9px] text-red-500 font-bold uppercase tracking-widest text-center"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default DossierDownloadButton;
