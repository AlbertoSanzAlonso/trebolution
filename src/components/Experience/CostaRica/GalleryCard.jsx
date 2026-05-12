import React, { useRef } from 'react';
import { Eye } from 'lucide-react';
import PetalShape from './ItineraryParts/PetalShape';
import { useGalleryCardAnimations } from './GalleryParts/useGalleryCardAnimations';

const GalleryCard = ({ title, img, onClick }) => {
  const containerRef = useRef(null);
  
  const refs = {
    petalRef: useRef(null),
    imageRef: useRef(null),
    overlayRef: useRef(null),
    eyeRef: useRef(null),
  };

  const { onMouseEnter, onMouseLeave } = useGalleryCardAnimations(containerRef, refs);

  return (
    <div
      ref={containerRef}
      className="flex flex-col shadow-xl hover:shadow-2xl group relative overflow-hidden aspect-2/3 cursor-pointer rounded-3xl transform-gpu"
      style={{ WebkitBackfaceVisibility: 'hidden' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img
          ref={refs.imageRef}
          src={img}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div
          ref={refs.overlayRef}
          className="absolute inset-0 bg-black/0 pointer-events-none"
        />
      </div>

      {/* EYE WATERMARK ICON - solo desktop */}
      <div 
        ref={refs.eyeRef}
        className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-20 opacity-0"
      >
        <Eye className="w-10 h-10 text-white/50" strokeWidth={1} />
      </div>

      {/* MODULAR PETAL SHAPE ANIMATED BY GSAP - solo desktop */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
        <PetalShape ref={refs.petalRef}>
          {/* TREBOL LOGO WATERMARK - azul en esquina inferior */}
          <div className="absolute bottom-[10%] left-[5%] pointer-events-none">
            <div
              className="w-20 h-20 bg-[#0090D4] opacity-40"
              style={{
                maskImage: 'url(/Trebol_2.svg)',
                WebkitMaskImage: 'url(/Trebol_2.svg)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                transform: 'rotate(-20deg)'
              }}
            />
          </div>
        </PetalShape>
      </div>
    </div>
  );
};

export default GalleryCard;
