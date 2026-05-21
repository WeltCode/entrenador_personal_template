import { TRAINER } from "@/config/trainer";
import { useReveal } from "@/hooks/useReveal";
import { IconArrow } from "./icons/ServiceIcons";

type Package = (typeof TRAINER.pricing.packages)[number];

const PricingCard = ({
  pkg,
  currency,
  i,
}: {
  pkg: Package;
  currency: string;
  i: number;
}) => {
  const { ref, visible } = useReveal();
  const highlighted = pkg.tag !== null;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 120}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
        highlighted
          ? "border-primary/60 shadow-[0_0_30px_hsl(142_100%_55%_/_0.18)] bg-card"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      {/* Línea neon superior para el destacado */}
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      {/* Etiqueta "Más popular" */}
      {pkg.tag && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 z-10">
          <span className="font-mono-display text-[10px] uppercase tracking-widest px-5 py-1 gradient-neon text-primary-foreground rounded-b-full whitespace-nowrap">
            {pkg.tag}
          </span>
        </div>
      )}

      {/* Cabecera */}
      <div className="p-7 pb-5 pt-8">
        <span className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-primary">
          [ {String(i + 1).padStart(2, "0")} ]
        </span>
        <h3 className="font-display text-4xl text-foreground mt-2">{pkg.name}</h3>
        <p className="font-mono-display text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
          — {pkg.sessions}
        </p>

        {/* Precio */}
        <div className="mt-6 flex items-end gap-1">
          <span className="font-mono-display text-muted-foreground text-sm pb-1">{currency}</span>
          <span
            className={`font-display text-6xl leading-none ${
              highlighted ? "gradient-neon-text" : "text-foreground"
            }`}
          >
            {pkg.price}
          </span>
          <span className="font-mono-display text-[11px] text-muted-foreground pb-2">/ {pkg.period}</span>
        </div>
      </div>

      {/* Divisor */}
      <div className="mx-7 h-px bg-border" />

      {/* Features */}
      <ul className="p-7 pt-5 flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="font-mono-display text-primary text-[10px] mt-0.5 shrink-0">+</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="p-7 pt-0">
        <a
          href={`https://wa.me/${TRAINER.whatsapp}?text=${encodeURIComponent(
            `¡Hola ${TRAINER.brand}! Me interesa el pack ${pkg.name}. ¿Puedes darme más información?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-between w-full px-6 py-4 rounded-full font-semibold text-sm transition-all duration-300 ${
            highlighted
              ? "gradient-neon text-primary-foreground hover:opacity-90"
              : "border border-primary/30 text-foreground hover:border-primary hover:bg-primary/10"
          }`}
        >
          <span className="tracking-wider">CONTRATAR PACK</span>
          <span
            className={`w-7 h-7 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 ${
              highlighted
                ? "bg-background/20"
                : "border border-primary/40 text-primary"
            }`}
          >
            <IconArrow className="w-3 h-3" />
          </span>
        </a>
      </div>
    </article>
  );
};

const PricingSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="glow-orb w-[700px] h-[700px] bg-primary/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} text-center mb-16`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
              [08] — Inversión
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-6xl lg:text-7xl leading-none">
            ELIGE TU<br />
            <span className="gradient-neon-text">PLAN.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {TRAINER.pricing.packages.map((pkg, i) => (
            <PricingCard
              key={pkg.name}
              pkg={pkg}
              currency={TRAINER.pricing.currency}
              i={i}
            />
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-10 font-mono-display tracking-widest uppercase">
          {TRAINER.pricing.note}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
