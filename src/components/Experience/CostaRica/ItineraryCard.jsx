import React, { useRef } from 'react';
import PetalShape from './ItineraryParts/PetalShape';
import CardContent from './ItineraryParts/CardContent';
import { useCardAnimations } from './ItineraryParts/useCardAnimations';

const ItineraryCard = ({ day, date, location, title, desc, hotel, img, onClick }) => {
  const containerRef = useRef(null);
  
  // Group all refs needed for animations and content
  const refs = {
    contentRef: useRef(null),
    petalRef: useRef(null),
    imageRef: useRef(null),
    overlayRef: useRef(null),
    hoverInfoRef: useRef(null),
    logoRef: useRef(null),
    verMasRef: useRef(null),
    textBlockRef: useRef(null),
    dateRef: useRef(null),
    titleRef: useRef(null),
    descRef: useRef(null),
    hotelInfoRef: useRef(null)
  };

  const { onMouseEnter, onMouseLeave } = useCardAnimations(containerRef, refs);

  return (
    <div
      ref={containerRef}
      className="flex flex-col shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden aspect-2/3 cursor-pointer rounded-3xl transform-gpu"
      style={{ WebkitBackfaceVisibility: 'hidden' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          ref={refs.imageRef}
          src={img}
          alt={title}
          className="w-full h-full object-cover scale-110"
        />
        <div
          ref={refs.overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none"
        />
      </div>

      {/* Day Badge */}
      <div className="absolute top-4 left-4 z-30 bg-brand-primary/90 text-white text-[9px] font-extralight px-4 py-1.5 tracking-widest uppercase shadow-xl">
        {day}
      </div>

      {/* MODULAR PETAL SHAPE */}
      <PetalShape ref={refs.petalRef} />

      {/* MODULAR CARD CONTENT */}
      <CardContent 
        ref={refs.contentRef}
        date={date}
        location={location}
        title={title}
        desc={desc}
        hotel={hotel}
        refs={refs}
      />
    </div>
  );
};

export default ItineraryCard;
