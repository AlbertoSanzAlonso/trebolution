import React from 'react';

const DossierTemplate = ({ data, id }) => {
  const itinerary = [
    { day: "01", title: "SAN JOSÉ", sub: "Bienvenida a Costa Rica", hotel: "Hotel Presidente", img: "https://images.unsplash.com/photo-1594391157147-38435889709a?q=80&w=1000&auto=format&fit=crop" },
    { day: "02", title: "ARENAL", sub: "Volcanes y paisajes", hotel: "Hotel Arenal Manoa", img: "https://images.unsplash.com/photo-1590502160462-094364239841?q=80&w=1000&auto=format&fit=crop" },
    { day: "03", title: "ARENAL", sub: "Aventura en la selva", hotel: "Hotel Arenal Manoa", img: "https://images.unsplash.com/photo-1542401886-65d6c60db275?q=80&w=1000&auto=format&fit=crop" },
    { day: "04", title: "RÍO CELESTE", sub: "Magia del agua azul", hotel: "Rio Celeste Hideaway", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" },
    { day: "05", title: "RÍO CELESTE", sub: "Naturaleza pura", hotel: "Rio Celeste Hideaway", img: "https://images.unsplash.com/photo-1513039847100-05628597ad1b?q=80&w=1000&auto=format&fit=crop" },
    { day: "06", title: "MANUEL ANTONIO", sub: "Hacia el Pacífico", hotel: "Parador Resort & Spa", img: "https://images.unsplash.com/photo-1520116468816-95b69e847357?q=80&w=1000&auto=format&fit=crop" },
    { day: "07", title: "MANUEL ANTONIO", sub: "Entre jungla y mar", hotel: "Parador Resort & Spa", img: "https://images.unsplash.com/photo-1516149202353-8395561a7a14?q=80&w=1000&auto=format&fit=crop" },
    { day: "08", title: "SAN JOSÉ", sub: "Hasta pronto Costa Rica", hotel: "Vuelo de Regreso", img: "https://images.unsplash.com/photo-1544890225-2f3faec4cd30?q=80&w=1000&auto=format&fit=crop" }
  ];

  const commonStyles = {
    page: { height: '1131px', padding: '96px', display: 'flex', flexDirection: 'column', gap: '48px', backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' },
    titleSmall: { fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.4em', color: '#0090D4', textTransform: 'uppercase' },
    titleLarge: { fontSize: '48px', color: '#001135', lineHeight: '1.2', fontFamily: 'serif' },
    footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '24px' },
    footerText: { fontSize: '8px', letterSpacing: '0.2em', color: '#cccccc', textTransform: 'uppercase' }
  };

  return (
    <div id={id} style={{ width: '800px', backgroundColor: '#ffffff', color: '#001135', fontFamily: 'sans-serif' }}>
      
      {/* PAGE 1: COVER */}
      <div style={{ ...commonStyles.page, backgroundColor: '#001135', color: '#ffffff', justifyContent: 'flex-end', padding: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}>
          <img src="/assets/images/costa-rica-hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <img src="/Trebol_2.svg" alt="" style={{ width: '120px', marginBottom: '80px', filter: 'brightness(0) invert(1)' }} />
          <h1 style={{ fontSize: '120px', lineHeight: '0.85', letterSpacing: '-0.05em', marginBottom: '32px', fontFamily: 'serif' }}>COSTA <br /> RICA</h1>
          <p style={{ fontSize: '24px', fontStyle: 'italic', color: '#FCFEFF', marginBottom: '48px', fontFamily: 'serif' }}>Trebolution Experience</p>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#FCFEFF', marginBottom: '32px' }} />
          <p style={{ fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase', opacity: 0.6 }}>Dossier Privado • 2026</p>
        </div>
      </div>

      {/* PAGE 2: PHILOSOPHY */}
      <div style={{ ...commonStyles.page, justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '80%', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={commonStyles.titleSmall}>NUESTRO MANIFIESTO</span>
            <h2 style={{ fontSize: '64px', fontFamily: 'serif', color: '#001135', lineHeight: '1.1' }}>Filosofía <br /> trebolera</h2>
          </div>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#0090D4' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p style={{ fontSize: '24px', fontFamily: 'serif', fontStyle: 'italic', color: '#00315D', lineHeight: '1.4' }}>
              No organizamos viajes. Creamos experiencias que permanecen.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#666', letterSpacing: '0.02em' }}>
              Costa Rica se convierte en un territorio de conexión: naturaleza, gastronomía, bienestar, cultura y una forma de viajar más profunda, íntima y consciente.
            </p>
            <p style={{ fontSize: '16px', fontWeight: 'bold', lineHeight: '1.8', color: '#001135', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '32px' }}>
              Aquí nada es estándar. Cada detalle se elige desde la experiencia, la sensibilidad y el propósito.
            </p>
          </div>
        </div>
        <img src="/Trebol_2.svg" alt="" style={{ position: 'absolute', bottom: '40px', right: '40px', width: '120px', opacity: 0.03 }} />
      </div>

      {/* PAGE 3: INDEX */}
      <div style={{ ...commonStyles.page, backgroundColor: '#F9FBFC', flexDirection: 'row' }}>
        <div style={{ width: '33%', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <h2 style={{ fontSize: '32px', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'serif', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '16px' }}>Índice</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {["EL RECORRIDO", "PROGRAMA DÍA A DÍA", "HOTELES SELECCIONADOS", "¿QUÉ INCLUYE?", "INVERSIÓN"].map((t, i) => (
              <div key={t} style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
                <span style={{ color: '#0090D4', fontSize: '16px', fontFamily: 'serif' }}>0{i+3}</span>
                <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', opacity: 0.7 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flexGrow: 1, borderRadius: '24px', overflow: 'hidden' }}>
          <img src="/assets/images/costa-rica-toucan.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* PAGE 3: MAP */}
      <div style={commonStyles.page}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={commonStyles.titleSmall}>UNA RUTA DISEÑADA</span>
            <h2 style={commonStyles.titleLarge}>Para conectar <br /> con lo esencial</h2>
          </div>
          <span style={commonStyles.footerText}>PÁGINA 03</span>
        </div>
        <div style={{ flexGrow: 1, backgroundColor: '#F9FBFC', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '80%', height: '80%', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '50%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Map markers placeholder */}
            <div style={{ width: '100%', height: '100%', position: 'absolute', opacity: 0.1 }}>
                <img src="/Trebol_2.svg" alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ position: 'absolute', top: '30%', left: '30%' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#0090D4', borderRadius: '50%' }} /><span style={{ fontSize: '8px', fontWeight: 'bold' }}>ARENAL</span></div>
            <div style={{ position: 'absolute', top: '50%', right: '30%' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#0090D4', borderRadius: '50%' }} /><span style={{ fontSize: '8px', fontWeight: 'bold' }}>SAN JOSÉ</span></div>
            <div style={{ position: 'absolute', bottom: '30%', left: '50%' }}><div style={{ width: '6px', height: '6px', backgroundColor: '#0090D4', borderRadius: '50%' }} /><span style={{ fontSize: '8px', fontWeight: 'bold' }}>M. ANTONIO</span></div>
          </div>
        </div>
        <div style={commonStyles.footer}>
          <p style={{ width: '50%', fontSize: '10px', color: '#666', fontStyle: 'italic' }}>UN RECORRIDO EQUILIBRADO PARA VIVIR LA ESENCIA DE COSTA RICA.</p>
          <span style={commonStyles.footerText}>TREBOLUTION EXPERIENCE</span>
        </div>
      </div>

      {/* ITINERARY PAGES (DÍA A DÍA) */}
      {itinerary.map((item, idx) => (
        <div key={idx} style={commonStyles.page}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ ...commonStyles.titleSmall, backgroundColor: '#001135', color: '#ffffff', padding: '4px 12px', borderRadius: '4px' }}>DÍA {item.day}</span>
            <span style={commonStyles.footerText}>PÁGINA 0{idx + 4}</span>
          </div>
          <div style={{ height: '500px', borderRadius: '24px', overflow: 'hidden' }}>
            <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: '#0090D4', fontWeight: 'bold', letterSpacing: '0.2em' }}>{item.title}</span>
            <h3 style={{ fontSize: '40px', fontFamily: 'serif' }}>{item.sub}</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#666', fontStyle: 'italic' }}>
              Descubre la magia de este destino con una experiencia diseñada exclusivamente para ti. 
              Naturaleza, confort y autenticidad se unen en este día inolvidable.
            </p>
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '20px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#F9FBFC', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                <img src="/Trebol_2.svg" alt="" style={{ width: '16px', opacity: 0.3 }} />
            </div>
            <div>
                <p style={{ fontSize: '8px', fontWeight: 'bold', color: '#cccccc' }}>ALOJAMIENTO</p>
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.hotel}</p>
            </div>
          </div>
        </div>
      ))}

      {/* FINAL PAGES: INVESTMENT & CLOSING */}
      <div style={{ ...commonStyles.page, backgroundColor: '#001135', color: '#ffffff', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <img src="/Trebol_2.svg" alt="" style={{ width: '80px', marginBottom: '60px', filter: 'brightness(0) invert(1)', opacity: 0.2 }} />
        <h2 style={{ fontSize: '64px', fontFamily: 'serif', marginBottom: '24px' }}>Inversión</h2>
        <p style={{ fontSize: '14px', letterSpacing: '0.3em', opacity: 0.6, marginBottom: '40px' }}>POR PERSONA EN OCUPACIÓN DOBLE</p>
        <p style={{ fontSize: '80px', fontWeight: 'bold', color: '#0090D4', marginBottom: '60px' }}>3.750€</p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', width: '60%' }}>
            <p style={{ fontSize: '12px', lineHeight: '2', opacity: 0.8 }}>Reserva del 50% para confirmar plaza.<br />Pago final antes del 30 de junio de 2026.</p>
        </div>
      </div>

      <div style={{ ...commonStyles.page, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontFamily: 'serif', fontStyle: 'italic', lineHeight: '1.4', maxWidth: '80%' }}>
          "Viajamos para encontrar lo extraordinario en lo esencial."
        </h2>
        <img src="/Trebol_2.svg" alt="" style={{ width: '64px', marginTop: '80px', opacity: 0.1 }} />
      </div>

    </div>
  );
};

export default DossierTemplate;
