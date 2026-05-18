import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";
import { useReveal } from "@/hooks/useReveal";

const results = [
  {
    image: transformation1,
    name: "Alejandro R.",
    age: "34",
    duration: "12 sem.",
    metric: "-15 KG",
    tag: "PÉRDIDA DE GRASA",
    description: "Recompusición corporal completa: pérdida de grasa y ganancia de músculo simultánea.",
  },
  {
    image: transformation2,
    name: "María G.",
    age: "29",
    duration: "16 sem.",
    metric: "+8 KG",
    tag: "TONIFICACIÓN",
    description: "Tonificación total, postura corregida y confianza absoluta recuperada.",
  },
];

const ResultsSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="results" className="py-32 relative">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} container`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[04] — Resultados</span>
              <span className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-6xl lg:text-8xl leading-none">
              ANTES.<br />
              <span className="gradient-neon-text">DESPUÉS.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Sin filtros. Sin photoshop. Solo trabajo real documentado semana a semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r, idx) => (
            <article key={r.name} className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/60 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.image} alt={`Transformación de ${r.name}`} loading="lazy" width={1000} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Metric badge */}
                <div className="absolute top-5 left-5 bg-background/80 backdrop-blur-md border border-primary/40 rounded-full px-4 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono-display text-[10px] uppercase tracking-widest text-primary">{r.tag}</span>
                </div>

                {/* Big metric */}
                <div className="absolute bottom-5 right-5 text-right">
                  <p className="font-display text-6xl text-glow gradient-neon-text leading-none">{r.metric}</p>
                  <p className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground mt-1">en {r.duration}</p>
                </div>
              </div>

              <div className="p-6 flex items-start justify-between gap-4 bg-card">
                <div>
                  <p className="font-mono-display text-[10px] uppercase tracking-widest text-primary">CASO 0{idx + 1}</p>
                  <p className="font-display text-2xl text-foreground mt-1">{r.name} <span className="text-muted-foreground text-base">/ {r.age} años</span></p>
                  <p className="text-muted-foreground text-sm mt-2 max-w-md">{r.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
