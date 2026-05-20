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
} as const;
