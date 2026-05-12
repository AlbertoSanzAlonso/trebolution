import React from 'react';

const GalleryCardContent = React.forwardRef(({ title, refs }, ref) => {
  const { hoverInfoRef, logoRef, verMasRef, textBlockRef, titleRef } = refs;

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
          Ver imagen
        </span>
      </div>

      <div ref={textBlockRef} className="flex flex-col gap-2.5">
        <h4
          ref={titleRef}
          className="text-xl font-serif text-brand-primary leading-tight w-fit max-w-full"
        >
          {title}
        </h4>
      </div>
    </div>
  );
});

GalleryCardContent.displayName = 'GalleryCardContent';

export default GalleryCardContent;
