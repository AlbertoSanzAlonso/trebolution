import React from 'react';

const PetalShape = React.forwardRef(({}, ref) => {
  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 w-32 h-32 z-10 pointer-events-none"
      style={{
        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
        transform: 'translate(50%, 70%) rotate(20deg) scale(5)',
        transformOrigin: 'center'
      }}
    >
      <div
        className="w-full h-full relative overflow-hidden shadow-inner"
        style={{
          clipPath: 'path("M 50,100 C 50,100 0,60 0,35 C 0,15 15,0 35,0 C 45,0 50,10 50,10 C 50,10 55,0 65,0 C 85,0 100,15 100,35 C 100,60 50,100 50,100 Z")',
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.9) 100%)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <img src="/Trebol_2.svg" alt="" className="w-1/2 h-1/2 object-contain" />
        </div>
      </div>
    </div>
  );
});

PetalShape.displayName = 'PetalShape';

export default PetalShape;
