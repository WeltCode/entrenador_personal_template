// ============================================================
// PLANTILLA ENTRENADOR PERSONAL — CONFIGURACIÓN CENTRAL
// Edita este archivo para personalizar toda la web al instante
// ============================================================

export const TRAINER = {
  // — Identidad
  name: "Tu Nombre",          // Nombre completo del entrenador, ej: "Carlos Mendoza"
  brand: "TU FIT",            // Nombre de marca (navbar/footer), ej: "CARLOS FIT"

  // — Ubicación
  city: "Tu Ciudad",          // Ciudad donde operas, ej: "Barcelona"
  country: "ES",              // Código de país, ej: "ES", "MX", "CO"
  coordinates: "N 00.00° / E 00.00°",  // Coordenadas decorativas (opcional)

  // — Trayectoria
  founded: "2020",            // Año en que empezaste a entrenar clientes
  certifications: "NSCA-CPT", // Tus certificaciones, ej: "NSCA-CPT", "NASM"
  languages: "ES / EN",       // Idiomas que hablas
  clients: "200+",            // Número de clientes atendidos

  // — Contacto
  phone: "+34 600 000 000",   // Teléfono visible en la web
  whatsapp: "34600000000",    // Número de WhatsApp (sin + ni espacios)
  email: "tu@email.com",      // Email de contacto

  // — Redes sociales
  instagram: "#",             // URL completa de Instagram
  youtube: "#",               // URL completa de YouTube

  // — Textos del Hero
  heroSubline: "Entrenador Personal",  // Subtítulo debajo del hero
  tagline: "Reescribe tus límites",    // Tagline del hero

  // — Frase inspiracional (sección Sobre Mí)
  quote: "Si vienes a por excusas, no soy tu coach. Si vienes a por cambios, empezamos hoy.",

  // — Video (deja el ID vacío para ocultar la sección)
  // El ID es la parte final de la URL de YouTube: youtube.com/watch?v=ESTE_ES_EL_ID
  youtubeId: "",

  // — Certificaciones (logoUrl es opcional; si está vacío se muestra un badge de texto)
  certBadges: [
    { name: "NSCA-CPT", logoUrl: "" },
    { name: "NASM-CPT", logoUrl: "" },
    { name: "CrossFit L2", logoUrl: "" },
    { name: "FNS",       logoUrl: "" },
  ],

  // — ¿Para quién es? (edita los 4 perfiles o añade/elimina según necesites)
  // Icons disponibles: "flame" | "target" | "shield" | "bolt" | "barbell" | "pulse" | "leaf" | "spark"
  targetProfiles: [
    {
      icon: "flame",
      title: "Quiero perder grasa",
      description: "Sin restricciones extremas ni efecto rebote. Método sostenible con resultados visibles desde la semana 3.",
    },
    {
      icon: "target",
      title: "Quiero ganar músculo",
      description: "Programa de hipertrofia progresiva con técnica impecable y nutrición anabólica adaptada a tu vida.",
    },
    {
      icon: "shield",
      title: "Vuelvo tras una lesión",
      description: "Readaptación funcional supervisada. Recupera tu nivel y supéralo de forma completamente segura.",
    },
    {
      icon: "bolt",
      title: "Quiero rendir más",
      description: "Entrenamiento de alto rendimiento orientado a la mejora de marcas y potencia deportiva.",
    },
  ],

  // — Precios (edita los 3 paquetes; pon tag: null para sin etiqueta destacada)
  pricing: {
    currency: "€",
    note: "* Precios orientativos. Contacta para un presupuesto a medida.",
    packages: [
      {
        name: "STARTER",
        price: "280",
        period: "mes",
        tag: null as string | null,
        sessions: "8 sesiones / mes",
        features: [
          "2 sesiones por semana",
          "Plan de entrenamiento personalizado",
          "Seguimiento semanal",
          "Acceso a app de seguimiento",
        ],
      },
      {
        name: "PRO",
        price: "380",
        period: "mes",
        tag: "MÁS POPULAR" as string | null,
        sessions: "12 sesiones / mes",
        features: [
          "3 sesiones por semana",
          "Plan de entrenamiento personalizado",
          "Plan de nutrición incluido",
          "Ajustes semanales",
          "App de seguimiento",
          "Chat directo 24/7",
        ],
      },
      {
        name: "ELITE",
        price: "580",
        period: "mes",
        tag: null as string | null,
        sessions: "20 sesiones / mes",
        features: [
          "5 sesiones por semana",
          "Plan de entrenamiento + nutrición",
          "Coaching mental incluido",
          "Seguimiento diario",
          "Chat directo 24/7",
          "Análisis corporal mensual",
        ],
      },
    ],
  },

  // — Preguntas frecuentes
  faq: [
    {
      q: "¿Necesito experiencia previa en el gym?",
      a: "Para nada. Trabajo con personas de todos los niveles, desde principiantes absolutos hasta atletas con años de experiencia. El plan se adapta 100% a tu punto de partida.",
    },
    {
      q: "¿Entrenas también de forma online?",
      a: "Sí. Ofrezco entrenamiento online con el mismo nivel de seguimiento y personalización que el presencial. Solo necesitas conexión a internet y ganas.",
    },
    {
      q: "¿Cuánto tiempo tarda en verse resultados?",
      a: "Los primeros cambios (energía, fuerza, postura) se notan en 2-3 semanas. Cambios corporales visibles suelen aparecer a partir de las 6-8 semanas con constancia.",
    },
    {
      q: "¿Hay compromiso de permanencia?",
      a: "No existe ningún contrato de permanencia. Los paquetes se renuevan mes a mes. La única obligación es contigo mismo.",
    },
    {
      q: "¿Qué pasa si me lesiono durante el proceso?",
      a: "El plan se adapta inmediatamente. La lesión nunca es un motivo para parar, sino para trabajar de forma más inteligente y segura.",
    },
    {
      q: "¿Cómo funciona la primera consulta gratuita?",
      a: "Es una videollamada o sesión presencial de 30-45 min donde analizamos tu situación, objetivos y diseñamos el plan de acción. Sin compromiso, sin ventas agresivas.",
    },
  ],

  // — Legal (para Política de Privacidad y Aviso Legal)
  legal: {
    companyName: "Nombre Completo / Empresa S.L.",
    nif: "00000000X",
    address: "Calle Ejemplo 1, 00000 Ciudad, País",
  },
};
