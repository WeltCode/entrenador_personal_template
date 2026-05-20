import { IconArrow } from "./icons/ServiceIcons";
import { TRAINER } from "@/config/trainer";

const CTASection = () => {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      <div className="glow-orb w-[700px] h-[700px] bg-primary/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[06] — Tu turno</span>
            <span className="h-px w-12 bg-primary" />
          </div>

          <h2 className="font-display leading-[0.85] mb-8">
            <span className="block text-[clamp(3rem,9vw,7rem)]">TU MEJOR VERSIÓN</span>
            <span className="block text-[clamp(3rem,9vw,7rem)] gradient-neon-text text-glow">EMPIEZA HOY.</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-12 text-lg">
            Primera consulta <span className="text-primary font-semibold">100% gratuita</span>. Analizamos, definimos y trazamos el camino — sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={`https://wa.me/${TRAINER.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between gap-4 px-8 py-5 rounded-full gradient-neon text-primary-foreground font-bold overflow-hidden animate-pulse-neon"
            >
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 tracking-wider">RESERVAR CONSULTA GRATIS</span>
              <span className="relative z-10 w-9 h-9 rounded-full bg-background/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <IconArrow />
              </span>
            </a>
            <a
              href={`mailto:${TRAINER.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full border border-primary/30 text-foreground font-semibold hover:bg-primary/10 transition-all"
            >
              Enviar email
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden max-w-2xl mx-auto">
            {[
            { k: "UBICACIÓN", v: `${TRAINER.city}, ${TRAINER.country}` },
              { k: "TELÉFONO", v: TRAINER.phone },
              { k: "EMAIL", v: TRAINER.email },
            ].map((i) => (
              <div key={i.k} className="bg-card p-5 hover:bg-secondary transition-colors">
                <p className="font-mono-display text-[10px] uppercase tracking-widest text-primary">{i.k}</p>
                <p className="text-foreground text-sm mt-1">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
