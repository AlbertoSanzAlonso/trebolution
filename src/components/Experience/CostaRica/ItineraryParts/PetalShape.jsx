import React from 'react';

const PetalShape = React.forwardRef(({ children }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 z-10 pointer-events-none"
      style={{
        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
        transform: 'translate(20%, 70%) rotate(20deg) scale(5)',
        transformOrigin: 'center'
      }}
    >
      <div
        className="w-full h-full relative overflow-hidden"
        style={{
          clipPath: 'path("M 50,100 C 50,100 0,60 0,35 C 0,15 15,0 35,0 C 45,0 50,10 50,10 C 50,10 55,0 65,0 C 85,0 100,15 100,35 C 100,60 50,100 50,100 Z")',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {children}
      </div>
    </div>
  );
});

PetalShape.displayName = 'PetalShape';

export default PetalShape;
