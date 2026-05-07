import React, { useRef } from 'react';
import { Building2, Eye } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ItineraryCard = ({ day, date, location, title, desc, hotel, img, onClick }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const pathRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const eyeRef = useRef(null);

  // Path coordinates for the dossier mountain
  const normalPath = "M0 40 L0 15 C10 15, 20 0, 40 0 C70 0, 90 25, 100 25 L100 40 Z";
  const hoverPath = "M0 40 L0 40 C10 40, 20 40, 40 40 C70 40, 90 40, 100 40 L100 40 Z";

  useGSAP(() => {
    // Initial state to ensure cards are closed on mount/render
    gsap.set(contentRef.current, { y: 0 });
    gsap.set(pathRef.current, { attr: { d: normalPath } });
    gsap.set(imageRef.current, { scale: 1 });
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(eyeRef.current, { opacity: 0, scale: 0.5 });
  }, { scope: containerRef });

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onMouseEnter = contextSafe(() => {
    gsap.to(contentRef.current, {
      y: "110%",
      duration: 0.8,
      ease: "power3.inOut",
      overwrite: true
    });

    gsap.to(pathRef.current, {
      attr: { d: hoverPath },
      duration: 0.5,
      ease: "power2.inOut",
      overwrite: true
    });

    gsap.to(imageRef.current, {
      scale: 1.08,
      duration: 1.2,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(overlayRef.current, {
      opacity: 0.3,
      duration: 0.6,
      overwrite: true
    });

    // Reveal Eye Icon
    gsap.to(eyeRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      overwrite: true
    });

    // Subtle Card Scale
    gsap.to(containerRef.current, {
      scale: 1.02,
      duration: 0.8,
      ease: "power2.out",
      overwrite: true
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(contentRef.current, {
      y: "0%",
      duration: 0.4,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(pathRef.current, {
      attr: { d: normalPath },
      duration: 0.4,
      ease: "back.out(1.2)",
      overwrite: true
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      overwrite: true
    });

    // Hide Eye Icon
    gsap.to(eyeRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      overwrite: true
    });

    // Reset Card Scale
    gsap.to(containerRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
      overwrite: true
    });
  });

  return (
    <div 
      ref={containerRef}
      className="bg-white flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden aspect-[2/3] cursor-pointer rounded-3xl transform-gpu"
      style={{ WebkitBackfaceVisibility: 'hidden' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 bg-brand-secondary/10">
        <img 
          ref={imageRef}
          src={img} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div 
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none" 
        />
        
        {/* Eye Icon Watermark */}
        <div 
          ref={eyeRef}
          className="absolute inset-0 flex items-center justify-center text-white z-20 pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-2xl">
            <Eye size={32} />
          </div>
        </div>
      </div>

      {/* Day Badge */}
      <div className="absolute top-4 left-4 z-30 bg-brand-primary/90 text-white text-[9px] font-bold px-4 py-1.5 tracking-widest uppercase shadow-xl">
        {day}
      </div>

      {/* CONTENT AREA */}
      <div 
        ref={contentRef}
        className="mt-auto relative z-10 flex flex-col"
      >
        {/* The Curve - Morphing SVG */}
        <div className="w-full h-16 relative -mb-[1px]">
          <svg 
            viewBox="0 0 100 40" 
            preserveAspectRatio="none" 
            className="w-full h-full fill-white"
          >
            <path ref={pathRef} d={normalPath} />
          </svg>
        </div>

        {/* White Text Area */}
        <div className="bg-white px-6 pb-6 pt-0 flex flex-col gap-2.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-brand-accent tracking-[0.15em] opacity-80 uppercase">
              {date} | {location}
            </span>
            <h4 className="text-lg font-serif text-brand-primary leading-tight">
              {title}
            </h4>
          </div>
          
          <p className="text-[11px] text-brand-primary/60 font-light leading-relaxed mb-1 line-clamp-2 lg:max-xl:line-clamp-1">
            {desc}
          </p>

          {/* Hotel Footer - Border removed for cleaner look */}
          <div className="mt-auto pt-3 flex items-center gap-3 lg:max-xl:hidden">
             <div className="w-6 h-6 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent">
                <Building2 size={10} />
             </div>
             <div className="flex flex-col">
                <span className="text-[7.5px] font-bold text-brand-primary/30 uppercase tracking-widest mb-0.5">Alojamiento</span>
                <span className="text-[10px] font-medium text-brand-primary/80">{hotel}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
