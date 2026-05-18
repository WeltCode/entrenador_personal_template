import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Pablo Martínez",
    role: "Empresario · 42",
    text: "Carlos no solo cambió mi cuerpo, cambió mi mentalidad. En 3 meses logré lo que no pude en años. Su energía y profesionalismo son incomparables.",
    highlight: "cambió mi mentalidad",
  },
  {
    name: "Laura Fernández",
    role: "Diseñadora · 28",
    text: "Nunca pensé que el gym sería para mí. Me hizo sentir cómoda desde el primer día y los resultados fueron increíbles, semana a semana.",
    highlight: "cómoda desde el primer día",
  },
  {
    name: "Diego Morales",
    role: "Ingeniero · 35",
    text: "El plan de nutrición fue perfecto. Nada de pasar hambre, todo delicioso y los kilos bajaron consistentemente. 100% recomendado.",
    highlight: "todo delicioso",
  },
];

const Card = ({ t, i }: { t: typeof testimonials[number]; i: number }) => {
  const { ref, visible } = useReveal();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 120}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} relative bg-card border border-border rounded-2xl p-7 hover:border-primary/60 transition-all duration-500 group`}
    >
      <span className="absolute -top-6 left-7 font-display text-8xl text-primary/30 group-hover:text-primary/60 transition-colors leading-none">"</span>

      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, k) => (
          <span key={k} className="text-primary text-sm">★</span>
        ))}
        <span className="font-mono-display text-[10px] text-muted-foreground ml-auto tracking-widest">#0{i + 1}</span>
      </div>

      <p className="text-foreground/90 leading-relaxed text-[15px] mb-6">
        {t.text.split(t.highlight).map((chunk, idx, arr) => (
          <span key={idx}>
            {chunk}
            {idx < arr.length - 1 && <span className="bg-primary/20 text-primary px-1 rounded">{t.highlight}</span>}
          </span>
        ))}
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-border">
        <div className="w-10 h-10 rounded-full gradient-neon flex items-center justify-center font-display text-primary-foreground text-lg">
          {t.name[0]}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">{t.name}</p>
          <p className="font-mono-display text-[10px] text-muted-foreground uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
    </article>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      <div className="container relative">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[05] — Testimonios</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-6xl lg:text-7xl leading-none">
            VOCES <span className="gradient-neon-text">REALES.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
