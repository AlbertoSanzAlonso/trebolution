import React from 'react';
import { Building2 } from 'lucide-react';

const CardContent = React.forwardRef(({ date, location, title, desc, hotel, refs }, ref) => {
  const { hoverInfoRef, logoRef, verMasRef, textBlockRef, dateRef, titleRef, descRef, hotelInfoRef } = refs;

  return (
    <div
      ref={ref}
      className="mt-auto relative z-20 flex flex-col px-12 pb-12 pt-0"
    >
      {/* Hover Info (Logo + Ver Más) */}
      <div
        ref={hoverInfoRef}
        className="flex flex-col items-center gap-3 mb-10 pointer-events-none"
      >
        <img
          ref={logoRef}
          src="/Trebol_2.svg"
          alt="Trebol"
          className="w-14 h-14"
        />
        <span
          ref={verMasRef}
          className="text-[10px] font-extralight tracking-[0.4em] uppercase text-brand-primary opacity-0"
        >
          Ver más
        </span>
      </div>

      <div ref={textBlockRef} className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-0.5">
          <span
            ref={dateRef}
            className="text-[9px] font-extralight text-brand-primary/60 tracking-[0.15em] uppercase w-fit max-w-full"
          >
            {date} | {location}
          </span>
          <h4
            ref={titleRef}
            className="text-xl font-serif text-brand-primary leading-tight w-fit max-w-full"
          >
            {title}
          </h4>
        </div>

        <p
          ref={descRef}
          className="text-[11px] text-brand-primary/60 font-light leading-relaxed mb-1 line-clamp-2 w-fit max-w-full"
        >
          {desc}
        </p>

        <div ref={hotelInfoRef} className="mt-2 flex items-center gap-3 w-fit max-w-full">
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
  );
});

CardContent.displayName = 'CardContent';

export default CardContent;
