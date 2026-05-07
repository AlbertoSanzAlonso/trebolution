import React, { useRef } from 'react';
import { Building2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ItineraryCard = ({ day, date, location, title, desc, hotel, img, onClick }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const petalRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const hoverInfoRef = useRef(null);


  useGSAP(() => {
    // Initial state to ensure cards are closed on mount/render
    gsap.set(contentRef.current, { y: 0 });
    gsap.set(petalRef.current, { 
      scale: 5, 
      rotate: 20, 
      x: "50%", 
      y: "70%",
      transformOrigin: 'center'
    });
    gsap.set(imageRef.current, { scale: 1 });
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(hoverInfoRef.current, { opacity: 0, y: 20 });
  }, { scope: containerRef });

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onMouseEnter = contextSafe(() => {
    // Center Text
    gsap.to(contentRef.current, {
      y: "-55%",
      scale: 1.1,
      duration: 0.8,
      ease: "power4.inOut",
      overwrite: true
    });

    gsap.to(hoverInfoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.out",
      overwrite: true
    });

    // Rotate Logo Icon
    gsap.to(hoverInfoRef.current.querySelector('img'), {
      rotate: 360,
      duration: 1.5,
      ease: "power2.inOut",
      overwrite: true
    });

    // Expand Petal to cover whole background
    gsap.to(petalRef.current, {
      scale: 30,
      rotate: 0,
      x: "-50%",
      y: "50%",
      duration: 1.2,
      ease: "power3.inOut",
      overwrite: true
    });

    gsap.to(imageRef.current, {
      scale: 1.2,
      duration: 1.5,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(overlayRef.current, {
      opacity: 0.4,
      duration: 0.6,
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
    // Reset Text
    gsap.to(contentRef.current, {
      y: "0%",
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true
    });

    gsap.to(hoverInfoRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      overwrite: true
    });

    // Reset Logo Rotation
    gsap.to(hoverInfoRef.current.querySelector('img'), {
      rotate: 0,
      duration: 0.5,
      overwrite: true
    });

    // Reset Petal
    gsap.to(petalRef.current, {
      scale: 5,
      rotate: 20,
      x: "50%",
      y: "70%",
      duration: 0.8,
      ease: "power2.inOut",
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
      className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden aspect-[2/3] cursor-pointer rounded-3xl transform-gpu"
      style={{ WebkitBackfaceVisibility: 'hidden' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >

      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          ref={imageRef}
          src={img}
          alt={title}
          className="w-full h-full object-cover scale-110"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none"
        />
      </div>

      {/* Day Badge */}
      <div className="absolute top-4 left-4 z-30 bg-brand-primary/90 text-white text-[9px] font-bold px-4 py-1.5 tracking-widest uppercase shadow-xl">
        {day}
      </div>

      {/* THE PETAL BLOCK (From the sketch) */}
      <div
        ref={petalRef}
        className="absolute bottom-0 left-0 w-32 h-32 bg-white z-10"
        style={{
          clipPath: 'path("M 50,100 C 50,100 0,60 0,35 C 0,15 15,0 35,0 C 45,0 50,10 50,10 C 50,10 55,0 65,0 C 85,0 100,15 100,35 C 100,60 50,100 50,100 Z")',
          transform: 'translate(50%, 70%) rotate(20deg) scale(5)',
          transformOrigin: 'center'
        }}
      >
        {/* White base */}
        <div className="absolute inset-0 bg-white" />
      </div>

      <div
        ref={contentRef}
        className="mt-auto relative z-20 flex flex-col px-10 pb-10 pt-0"
      >
        {/* Hover Info (Logo + Ver Más) */}
        <div 
          ref={hoverInfoRef} 
          className="flex flex-col items-center gap-3 mb-8 pointer-events-none"
        >
          <img src="/Trebol_2.svg" alt="Trebol" className="w-14 h-14" />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent">Ver más</span>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] font-bold text-brand-accent tracking-[0.15em] uppercase">
              {date} | {location}
            </span>
            <h4 className="text-xl font-serif text-brand-primary leading-tight">
              {title}
            </h4>
          </div>

          <p className="text-[11px] text-brand-primary/60 font-light leading-relaxed mb-1 line-clamp-2">
            {desc}
          </p>

          <div className="mt-2 flex items-center gap-3">
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
