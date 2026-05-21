import portraitImg from "@/assets/trainer-portrait.jpg";
import outdoorImg from "@/assets/trainer-outdoor.jpg";
import coachingImg from "@/assets/trainer-coaching.jpg";
import { useReveal } from "@/hooks/useReveal";
import { TRAINER } from "@/config/trainer";

const credentials = [
  { k: "CERT.", v: TRAINER.certifications },
  { k: "BASE", v: TRAINER.city },
  { k: "DESDE", v: TRAINER.founded },
  { k: "IDIOMAS", v: TRAINER.languages },
];

const AboutSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-primary/10 top-20 right-0" />

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} container relative`}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Image collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img src={portraitImg} alt="Carlos retrato" loading="lazy" width={800} height={1000} className="rounded-2xl border border-border object-cover w-full aspect-[4/5]" />
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[3/4] rounded-2xl overflow-hidden neon-border border animate-float-slow">
                <img src={outdoorImg} alt="Carlos al aire libre" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-1/2 aspect-square rounded-2xl overflow-hidden border border-border hidden md:block">
                <img src={coachingImg} alt="Carlos entrenando" loading="lazy" width={500} height={500} className="w-full h-full object-cover" />
              </div>
              {/* sticker */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 font-mono-display text-[10px] uppercase tracking-widest rotate-6">
                ★ {TRAINER.clients} clientes
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[03] — Sobre mí</span>
              <span className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-6xl lg:text-7xl leading-[0.9] mb-8">
              No soy un<br />
              entrenador <span className="text-outline">más.</span><br />
              <span className="gradient-neon-text">Soy tu socio.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-xl">
              <p>
                Especializado en <span className="text-foreground">transformaciones reales</span>, trabajo con clientes en <span className="text-foreground">{TRAINER.city}</span> y online desde {TRAINER.founded}. Llevo {new Date().getFullYear() - parseInt(TRAINER.founded)} años convirtiendo la disciplina del deporte en resultados tangibles para mis clientes.
              </p>
              <p>
                No vendo dietas milagro ni promesas vacías. Vendo un <span className="text-primary">método propio</span> probado en {TRAINER.clients} procesos: entrenamiento inteligente + nutrición sostenible + cabeza fuerte.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border mt-10 border border-border rounded-xl overflow-hidden">
              {credentials.map((c) => (
                <div key={c.k} className="bg-card p-4 hover:bg-secondary transition-colors">
                  <p className="font-mono-display text-[10px] uppercase tracking-widest text-primary">{c.k}</p>
                  <p className="font-display text-xl text-foreground mt-1">{c.v}</p>
                </div>
              ))}
            </div>

            {/* Certificaciones como badges */}
            {TRAINER.certBadges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {TRAINER.certBadges.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 bg-card/50 backdrop-blur-sm hover:border-primary/60 transition-colors"
                  >
                    {cert.logoUrl ? (
                      <img src={cert.logoUrl} alt={cert.name} className="h-4 w-auto object-contain" />
                    ) : (
                      <span className="text-primary font-mono-display text-[10px]">✦</span>
                    )}
                    <span className="font-mono-display text-[10px] uppercase tracking-widest text-foreground">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="ticker-divider mt-10" />
            <p className="font-mono-display text-[11px] uppercase tracking-widest text-muted-foreground mt-4">
              — "{TRAINER.quote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
