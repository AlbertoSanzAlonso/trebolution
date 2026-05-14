const itineraryData = [
    {
        type: "intro",
        day: "COSTA\nRICA",
        date: "29 AGOSTO - 5 SEPTIEMBRE 2026",
        title: "TREBOLUTION EXPERIENCE",
        desc: "Naturaleza, autenticidad y bienestar en perfecta armonía.",
        img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "intro",
        day: "ÍNDICE",
        date: "CONTENIDO",
        title: "LO QUE NOS ESPERA",
        indexSections: [
            { label: "03 El Recorrido", slide: 2 },
            { label: "04 Programa día a día", slide: 3 },
            { label: "13 Hoteles seleccionados", slide: 11 },
            { label: "17 Lo que incluye", slide: 12 },
            { label: "18 Inversión", slide: 13 },
            { label: "19 Condiciones de reserva", slide: 14 }
        ],
        img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "intro",
        day: "EL\nRECORRIDO",
        date: "Ruta Diseñada",
        title: "Conectar con lo Esencial",
        desc: "Un recorrido equilibrado entre volcanes, selva y mar para vivir la esencia de Costa Rica de una forma auténtica y transformadora.",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 1",
        date: "29 AGOSTO",
        location: "SAN JOSÉ",
        title: "Bienvenida a Costa Rica",
        desc: "Llegada al Aeropuerto Internacional Juan Santamaría y traslado privado al Hotel Presidente. Resto del día libre para descansar del viaje o dar un primer paseo por esta ciudad llena de historia y vida. Por la noche, cena de bienvenida para conocer al grupo y comenzar a vivir la experiencia Trebolution.",
        hotel: "Hotel Presidente",
        hotelDesc: "Un icono de la ciudad. Elegancia, historia y ubicación perfecta para comenzar el viaje.",
        img: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 2",
        date: "30 AGOSTO",
        location: "VOLCÁN POÁS - ARENAL",
        title: "Volcanes y paisajes que impresionan",
        desc: "Desayuno y salida hacia el Parque Nacional Volcán Poás, uno de los volcanes activos más espectaculares del país. Continuamos hacia La Fortuna, con parada para disfrutar de un almuerzo típico. Al atardecer, relajación en las aguas termales rodeadas de naturaleza.",
        hotel: "Hotel Arenal Manoa",
        hotelDesc: "Vistas impresionantes al Volcán Arenal y un entorno de paz y naturaleza exuberante.",
        img: "https://images.unsplash.com/photo-1568230315894-1edd16d248b7?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 3",
        date: "31 AGOSTO",
        location: "ARENAL",
        title: "Aventura entre la selva y el volcán",
        desc: "Caminata por los puentes colgantes del Arenal, una perspectiva única del bosque lluvioso y su biodiversidad. Tarde libre para disfrutar del hotel o realizar actividades opcionales. Por la noche, cena especial con productos locales.",
        hotel: "Hotel Arenal Manoa",
        hotelDesc: "Vistas impresionantes al Volcán Arenal y un entorno de paz y naturaleza exuberante.",
        img: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1454427494490-334360341764?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 4",
        date: "1 SEPTIEMBRE",
        location: "ARENAL - RÍO CELESTE",
        title: "Rumbo a la magia del Río Celeste",
        desc: "Salida hacia el Parque Nacional Volcán Tenorio. Caminata hasta el impresionante Río Celeste y la Catarata, donde el agua adquiere su color turquesa único en medio de la naturaleza. Continuamos hacia nuestro hotel en medio de la naturaleza.",
        hotel: "Río Celeste Hideaway Resort",
        hotelDesc: "Un refugio de lujo inmerso en la selva, cerca de uno de los lugares más mágicos de Costa Rica.",
        img: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1590333746338-0487373f7125?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 5",
        date: "2 SEPTIEMBRE",
        location: "RÍO CELESTE",
        title: "Naturaleza en estado puro",
        desc: "Caminata nocturna para descubrir la vida silvestre que despierta al caer el sol. Mañana libre para disfrutar del entorno o actividades opcionales como tubing en el Río Celeste. Tarde para relajarse en las instalaciones del hotel y conectar con la calma.",
        hotel: "Río Celeste Hideaway Resort",
        hotelDesc: "Un refugio de lujo inmerso en la selva, cerca de uno de los lugares más mágicos de Costa Rica.",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 6",
        date: "3 SEPTIEMBRE",
        location: "RÍO CELESTE - MANUEL ANTONIO",
        title: "Hacia el Pacífico",
        desc: "Salida hacia la costa del Pacífico Central. Llegada al espectacular Hotel Parador Resort & Spa, ubicado frente al mar. Tarde libre para disfrutar de las playas, las piscinas o simplemente relajarse con el sonido del océano.",
        hotel: "Hotel Parador Resort & Spa",
        hotelDesc: "Ubicación privilegiada frente al mar, con un servicio excepcional y atardeceres inolvidables.",
        img: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 7",
        date: "4 SEPTIEMBRE",
        location: "MANUEL ANTONIO",
        title: "Entre jungla y mar",
        desc: "Visita al Parque Nacional Manuel Antonio, uno de los más bellos del país, hogar de monos, perezosos y playas paradisíacas. Tarde libre para disfrutar del hotel, realizar actividades opcionales o simplemente contemplar el atardecer. Cena de despedida para celebrar esta experiencia única.",
        hotel: "Hotel Parador Resort & Spa",
        hotelDesc: "Ubicación privilegiada frente al mar, con un servicio excepcional y atardeceres inolvidables.",
        img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "day",
        day: "DÍA 8",
        date: "5 SEPTIEMBRE",
        location: "MANUEL ANTONIO - SAN JOSÉ",
        title: "Hasta pronto, Costa Rica",
        desc: "Mañana libre para un último baño o paseo. A la hora indicada, traslado privado al Aeropuerto Internacional Juan Santamaría para tomar el vuelo de regreso a Madrid. Fin de nuestra experiencia Trebolution.",
        hotel: "Vuelo de regreso",
        hotelDesc: "Vuelo de regreso a España con toda la energía renovada tras una aventura inolvidable por tierras costarricenses.",
        img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200",
        galleryImg: "https://images.unsplash.com/photo-1512412086111-e41c42f04907?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "outro",
        day: "13",
        date: "Privilegiados",
        title: "Selección Exclusiva",
        hotels: [
            { name: "Hotel Presidente", desc: "Un icono de la ciudad. Elegancia, historia y ubicación perfecta para comenzar el viaje." },
            { name: "Hotel Arenal Manoa", desc: "Vistas impresionantes al Volcán Arenal y un entorno de paz y naturaleza exuberante." },
            { name: "Río Celeste Hideaway", desc: "Un refugio de lujo inmerso en la selva, cerca de uno de los lugares más mágicos de Costa Rica." },
            { name: "Hotel Parador Resort", desc: "Ubicación privilegiada frente al mar, con un servicio excepcional y atardeceres inolvidables." }
        ],
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "outro",
        day: "",
        date: "Inclusiones",
        title: "LO QUE INCLUYE",
        inclusions: [
            { label: "Vuelos ida y vuelta Madrid - San José", icon: "Plane" },
            { label: "7 Noches en hoteles seleccionados", icon: "Hotel" },
            { label: "Desayunos diarios", icon: "Coffee" },
            { label: "Transporte privado durante todo el viaje", icon: "Bus" },
            { label: "Guía naturalista experto", icon: "Search" },
            { label: "Entradas y visitas guiadas", icon: "Ticket" },
            { label: "Taller gastronómico", icon: "Utensils" },
            { label: "Actividades sorpresa Trebolution", icon: "Star" },
            { label: "Acompañamiento Trebolution durante todo el viaje", icon: "Users" },
            { label: "Regalitos Treboleros", icon: "Gift" },
            { label: "Tasa turística y de servicio", icon: "ShieldCheck" },
            { label: "Seguro básico de viaje", icon: "Heart" }
        ],
        img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "outro",
        day: "TU\nEXPERIENCIA",
        date: "Inversión",
        title: "INVERSIÓN EN ESTA EXPERIENCIA",
        price: "3.750€",
        supplement: "780€",
        conditions: [
            "Reserva del 50% para confirmar plaza.",
            "Pago final antes del 30 de junio de 2026.",
            "Grupo mínimo 15 personas. Máximo 25 personas.",
            "El precio de los vuelos puede sufrir variación según fecha de emisión."
        ],
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        type: "outro",
        day: "",
        date: "Cierre",
        isFinal: true,
        title: "Lo Extraordinario",
        desc: ' "VIAJAMOS PARA ENCONTRAR LO EXTRAORDINARIO EN LO ESENCIAL." ',
        img: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=1200"
    }
];

export { itineraryData };