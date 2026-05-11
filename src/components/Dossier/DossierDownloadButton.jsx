import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ChevronRight, Loader2 } from 'lucide-react';
import DossierTemplate from './DossierTemplate';

const DossierDownloadButton = ({ data }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    setIsGenerating(true);
    const element = document.getElementById('dossier-pdf-template');
    
    try {
      // Ensure element is visible during capture
      element.style.display = 'block';
      
      const canvas = await html2canvas(element, {
        scale: 2, // High quality
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [800, 1131] // A4-ish ratio
      });

      // Simple implementation: each "page" in Template is 1131px high
      const pageCount = Math.ceil(canvas.height / 1131 / 2); // Divide by 2 because of scale: 2
      
      for (let i = 0; i < 3; i++) { // We have 3 pages in template now
        if (i > 0) pdf.addPage([800, 1131]);
        pdf.addImage(
          imgData, 
          'JPEG', 
          0, 
          -(i * 1131), 
          800, 
          (canvas.height / 2)
        );
      }

      pdf.save('Trebolution_CostaRica_Dossier.pdf');
      element.style.display = 'none';
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
      element.style.display = 'none';
    }
  };

  return (
    <>
      <button
        onClick={downloadPDF}
        disabled={isGenerating}
        className="group relative bg-brand-accent text-brand-primary py-6 px-12 text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all shadow-xl hover:shadow-[0_20px_40px_rgba(0,144,212,0.3)] active:scale-[0.99] rounded-xl cursor-pointer disabled:opacity-50"
      >
        <div className="absolute inset-0 bg-brand-primary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
        <span className="relative z-10 flex items-center justify-center gap-3 transition-colors group-hover:text-white">
          {isGenerating ? (
            <>PROCESANDO SOLICITUD... <Loader2 className="animate-spin" size={14} /></>
          ) : (
            <>SOLICITAR EXPERIENCIA <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" /></>
          )}
        </span>
      </button>

      {/* Hidden template for PDF generation */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <DossierTemplate id="dossier-pdf-template" data={data} />
      </div>
    </>
  );
};

export default DossierDownloadButton;
