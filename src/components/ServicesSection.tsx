import { IconBarbell, IconPulse, IconLeaf, IconSpark, IconArrow } from "./icons/ServiceIcons";
import { useReveal } from "@/hooks/useReveal";
import { TRAINER } from "@/config/trainer";

const services = [
  {
    n: "01",
    Icon: IconBarbell,
    title: "Entrenamiento Personal",
    tagline: "1 a 1 — diseño a medida",
    description: "Sesiones individuales con plan progresivo. Cada repetición tiene un porqué.",
    features: ["Plan 100% personalizado", "Seguimiento semanal", "Corrección técnica en vivo"],
  },
  {
    n: "02",
    Icon: IconPulse,
    title: "Entrenamiento Grupal",
    tagline: "Hasta 6 personas",
    description: "La intensidad del 1 a 1 con la energía del grupo. Comunidad que empuja.",
    features: ["Grupos reducidos", "Ambiente motivador", "Precio accesible"],
  },
  {
    n: "03",
    Icon: IconLeaf,
    title: "Nutrición Deportiva",
    tagline: "Sin dietas extremas",
    description: "Comer rico, comer bien. Plan adaptado a tu cultura y rutina diaria.",
    features: ["Plan alimenticio real", "Recetas adaptadas", "Ajustes mensuales"],
  },
  {
    n: "04",
    Icon: IconSpark,
    title: "Coaching Integral",
    tagline: "Mindset · Hábitos",
    description: "El cuerpo cambia cuando la mente cambia primero. Trabajamos desde dentro.",
    features: ["Mindset ganador", "Gestión del estrés", "Hábitos duraderos"],
  },
];

const ServiceCard = ({ s, i }: { s: typeof services[number]; i: number }) => {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 100}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} group relative bg-card border border-border rounded-2xl p-7 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:-translate-y-1`}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex items-start justify-between mb-8">
        <span className="font-mono-display text-xs text-muted-foreground tracking-widest">[ {s.n} ]</span>
        <div className="w-14 h-14 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <s.Icon />
        </div>
      </div>

      <h3 className="font-display text-3xl text-foreground leading-tight">{s.title}</h3>
      <p className="font-mono-display text-[11px] uppercase tracking-[0.2em] text-primary mt-1 mb-4">— {s.tagline}</p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>

      <ul className="space-y-2 mb-6 border-t border-border pt-4">
        {s.features.map((f) => (
          <li key={f} className="text-sm flex items-center gap-3 text-muted-foreground">
            <span className="font-mono-display text-[10px] text-primary">+</span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${TRAINER.whatsapp}?text=${encodeURIComponent(`¡Hola ${TRAINER.brand}! Me interesa el servicio de ${s.title}. ¿Puedes darme más información?`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-between text-primary opacity-60 group-hover:opacity-100 transition-opacity"
      >
        <span className="font-mono-display text-[11px] uppercase tracking-[0.2em]">Saber más</span>
        <span className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <IconArrow className="w-3.5 h-3.5" />
        </span>
      </a>
    </article>
  );
};

const ServicesSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="container relative z-10">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[02] — Servicios</span>
              <span className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-6xl lg:text-7xl leading-none">
              MÉTODOS QUE
              <br />
              <span className="gradient-neon-text">FUNCIONAN.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Cuatro pilares, un sistema integrado. No vendo sesiones, construyo procesos de transformación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
