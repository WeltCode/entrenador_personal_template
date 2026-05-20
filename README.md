# Plantilla Landing Page — Entrenador Personal

Landing page profesional lista para vender a entrenadores personales. Diseño oscuro con estética neon de alto impacto. **Toda la personalización se concentra en un único archivo de configuración.**

---

## Inicio rápido

```bash
npm install
npm run dev       # http://localhost:8080
npm run build     # Build de producción
npm run preview   # Previsualizar el build
```

---

## Cómo personalizar

### 1. Archivo de configuración central

Edita **`src/config/trainer.ts`** — es el único archivo que necesitas tocar para adaptar la web a un nuevo cliente:

```ts
export const TRAINER = {
  // Identidad
  name: "Carlos Mendoza",       // Nombre del entrenador
  brand: "CARLOS FIT",          // Marca en navbar y footer

  // Ubicación
  city: "Barcelona",
  country: "ES",
  coordinates: "N 41.38° / E 2.17°",  // Decorativo (opcional)

  // Trayectoria
  founded: "2018",              // Año de inicio → calcula años de experiencia automáticamente
  certifications: "NSCA-CPT",
  languages: "ES / EN / CAT",
  clients: "500+",

  // Contacto
  phone: "+34 600 000 000",
  whatsapp: "34600000000",      // Sin + ni espacios
  email: "carlos@carlosfit.com",

  // Redes sociales
  instagram: "https://instagram.com/carlosfit",
  youtube: "https://youtube.com/@carlosfit",

  // Textos
  heroSubline: "Entrenador Personal",
  tagline: "Reescribe tus límites",
  quote: "Si vienes a por excusas, no soy tu coach. Si vienes a por cambios, empezamos hoy.",
};
```

> Todos los componentes importan `TRAINER` desde este archivo. Al cambiar un valor aquí se actualiza en toda la web automáticamente.

### 2. Imágenes

Reemplaza las imágenes en `src/assets/` manteniendo los mismos nombres de archivo:

| Archivo | Dónde se usa | Tamaño recomendado |
|---|---|---|
| `hero-trainer.jpg` | Foto principal del hero | 1920 × 2400 px |
| `trainer-portrait.jpg` | Foto grande en "Sobre Mí" | 800 × 1000 px |
| `trainer-outdoor.jpg` | Foto flotante en "Sobre Mí" | 600 × 800 px |
| `trainer-coaching.jpg` | Foto esquina en "Sobre Mí" | 500 × 500 px |
| `transformation-1.jpg` | Caso de transformación 1 | 1000 × 750 px |
| `transformation-2.jpg` | Caso de transformación 2 | 1000 × 750 px |

### 3. Servicios

Edita el array `services` en `src/components/ServicesSection.tsx` para cambiar los 4 servicios ofrecidos (título, descripción y características incluidas).

### 4. Resultados / Casos de éxito

Edita el array `results` en `src/components/ResultsSection.tsx` para cambiar los datos de transformación (nombre, edad, semanas, métrica, etc.).

### 5. Testimonios

Edita el array `testimonials` en `src/components/TestimonialsSection.tsx` para actualizar las opiniones de clientes.

### 6. SEO y meta tags

Actualiza manualmente el título y la descripción en `index.html`:

```html
<title>Carlos Fit | Entrenador Personal en Barcelona</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
```

### 7. Icono de la web (favicon)

El favicon es `public/favicon.svg` (mancuerna en verde neón). Puedes reemplazarlo con cualquier SVG o PNG sin tocar el código.

### 8. Colores del tema

El color primario (verde neón) se define en `src/index.css`:

```css
--primary: 142 100% 55%;
```

Cambia el valor HSL para adaptar la paleta de color a la marca del entrenador.

---

## Estructura del proyecto

```
├── index.html                  # Punto de entrada — meta tags y favicon
├── public/
│   └── favicon.svg             # Icono de mancuerna (reemplazable)
└── src/
    ├── config/
    │   └── trainer.ts          # ⭐ CONFIGURACIÓN CENTRAL — edita aquí
    ├── assets/                 # Imágenes del entrenador y transformaciones
    ├── components/
    │   ├── Navbar.tsx          # Barra de navegación fija
    │   ├── HeroSection.tsx     # Sección principal con foto y CTAs
    │   ├── Marquee.tsx         # Banda animada con palabras clave
    │   ├── AboutSection.tsx    # Presentación del entrenador
    │   ├── ServicesSection.tsx # 4 tarjetas de servicios
    │   ├── ResultsSection.tsx  # Casos de transformación antes/después
    │   ├── TestimonialsSection.tsx # Opiniones de clientes
    │   ├── CTASection.tsx      # Llamada a la acción + datos de contacto
    │   ├── Footer.tsx          # Pie de página con redes sociales
    │   ├── icons/
    │   │   └── ServiceIcons.tsx # Iconos SVG personalizados
    │   └── ui/                 # Componentes shadcn/ui activos
    │       ├── sonner.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       └── tooltip.tsx
    ├── hooks/
    │   ├── useReveal.ts        # Hook para animaciones de entrada al hacer scroll
    │   └── use-toast.ts        # Hook para notificaciones toast
    ├── lib/
    │   └── utils.ts            # Utilidad `cn` para clases de Tailwind
    └── pages/
        ├── Index.tsx           # Página principal (orquesta todas las secciones)
        └── NotFound.tsx        # Página 404
```

---

## Secciones de la landing

| # | Componente | Descripción |
|---|---|---|
| 1 | `HeroSection` | Titular grande, foto del entrenador, botón de WhatsApp y estadísticas |
| 2 | `Marquee` | Banda animada con valores como FUERZA, DISCIPLINA, RESULTADOS... |
| 3 | `AboutSection` | Foto, bio, credenciales (certificación, ciudad, año, idiomas) y cita |
| 4 | `ServicesSection` | 4 tarjetas: Entrenamiento Personal, Grupal, Nutrición y Coaching |
| 5 | `ResultsSection` | 2 casos de transformación con foto, métrica y descripción |
| 6 | `TestimonialsSection` | 3 tarjetas de testimonio con valoración de 5 estrellas |
| 7 | `CTASection` | Título de cierre, botón de WhatsApp, email y datos de contacto |

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| **React 18** + **TypeScript** | Base del proyecto |
| **Vite** + `@vitejs/plugin-react-swc` | Bundler y servidor de desarrollo |
| **Tailwind CSS** + `tailwindcss-animate` | Estilos y animaciones |
| **shadcn/ui** (Radix UI) | Componentes accesibles (Tooltip, Toast, Sonner) |
| **React Router DOM v6** | Enrutamiento (página principal + 404) |
| **TanStack Query v5** | Proveedor de estado asíncrono (preparado para APIs) |
| **Lucide React** | Iconos (Menu, X, Instagram, Youtube) |
