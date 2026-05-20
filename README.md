# Transformación Latina — Landing Page de Entrenador Personal

Landing page profesional para **Carlos Fit**, entrenador personal en Barcelona. Diseño oscuro con estética neon/latina de alto impacto.

## Stack tecnológico

- **React 18** + **TypeScript**
- **Vite** (bundler con `@vitejs/plugin-react-swc`)
- **Tailwind CSS** + `tailwindcss-animate`
- **shadcn/ui** (componentes sobre **Radix UI**)
- **React Router DOM v6**
- **TanStack Query v5**
- **React Hook Form** + **Zod**
- **Lucide React** (iconos)
- **Sonner** (notificaciones)
- **Vitest** + **Testing Library** (tests)

## Estructura

```
src/
├── components/       # Secciones de la landing y UI
│   ├── ui/           # Componentes shadcn/ui
│   └── icons/        # Iconos SVG personalizados
├── hooks/            # Hooks reutilizables
├── lib/              # Utilidades (cn, etc.)
├── pages/            # Páginas (Index, NotFound)
└── test/             # Tests
```

## Secciones

1. **Hero** — Titular principal con imagen y CTAs
2. **Marquee** — Banda animada con valores
3. **Sobre Mí** — Presentación del entrenador
4. **Servicios** — 4 servicios (personal, grupal, nutrición, coaching)
5. **Resultados** — Casos de transformación antes/después
6. **Testimonios** — Opiniones de clientes
7. **CTA** — Formulario de contacto y reserva

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:8080
npm run build     # Build de producción
npm run test      # Ejecutar tests
```
