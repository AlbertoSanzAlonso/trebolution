import React, { useRef } from 'react';
import { Eye } from 'lucide-react';
import { useGalleryCardAnimations } from './GalleryParts/useGalleryCardAnimations';

const GalleryCard = ({ title, img, onClick }) => {
  const containerRef = useRef(null);
  
  const refs = {
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

    </div>
  );
};

export default GalleryCard;
