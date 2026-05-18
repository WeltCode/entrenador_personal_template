import heroImg from "@/assets/hero-trainer.jpg";
import { IconArrow, IconPlay } from "./icons/ServiceIcons";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.12]" />
        <div className="glow-orb w-[600px] h-[600px] bg-primary/20 -top-40 -left-40 animate-float-slow" />
        <div className="glow-orb w-[500px] h-[500px] bg-[hsl(185_100%_55%_/_0.15)] bottom-0 right-0 animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-noise opacity-[0.35] mix-blend-overlay" />
      </div>

      {/* Vertical meta rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
        <span className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          EST · 2018 — Barcelona, ES
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Floating badge */}
      <div className="hidden md:block absolute top-32 right-10 lg:right-16 z-20">
        <div className="relative w-32 h-32 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <defs>
              <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fill="currentColor" className="text-[9px] font-mono-display uppercase tracking-[0.25em]">
              <textPath href="#circlePath">RESULTADOS REALES · MÉTODO PROPIO · </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">✦</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
                [01] Entrenador Personal · Barcelona
              </span>
            </div>

            <h1 className="font-display leading-[0.82] mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <span className="block text-[clamp(3.5rem,11vw,9rem)]">TRANS-</span>
              <span className="block text-[clamp(3.5rem,11vw,9rem)] text-outline">FORMA</span>
              <span className="block text-[clamp(3.5rem,11vw,9rem)] gradient-neon-text text-glow">TU CUERPO.</span>
              <span className="block text-[clamp(2rem,5.5vw,4.5rem)] font-archivo text-muted-foreground mt-2">
                Reescribe tus límites<span className="text-primary">_</span>
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="#cta" className="group relative inline-flex items-center justify-between gap-4 px-7 py-5 rounded-full gradient-neon text-primary-foreground font-bold overflow-hidden">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 tracking-wider">QUIERO EMPEZAR</span>
                <span className="relative z-10 w-9 h-9 rounded-full bg-background/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <IconArrow />
                </span>
              </a>
              <a href="#results" className="group inline-flex items-center gap-3 px-2 py-5 text-foreground font-semibold">
                <span className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <IconPlay className="w-4 h-4" />
                </span>
                <span className="tracking-wide">Ver transformaciones</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Image card */}
          <div className="lg:col-span-5 relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden neon-border border aspect-[4/5]">
              <img src={heroImg} alt="Carlos Mendoza, entrenador personal en Barcelona" width={1920} height={2400} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />

              {/* Scan line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-scan" />
              </div>

              {/* HUD corners */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-primary mb-1">// COACH</p>
                  <p className="font-display text-3xl text-foreground">CARLOS MENDOZA</p>
                </div>
                <span className="font-mono-display text-[10px] text-muted-foreground">N 41.38° / E 2.17°</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-0 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {[
            { v: "500+", l: "Clientes transformados", n: "01" },
            { v: "08", l: "Años de experiencia", n: "02" },
            { v: "98%", l: "Tasa de satisfacción", n: "03" },
            { v: "24/7", l: "Acompañamiento", n: "04" },
          ].map((s, i) => (
            <div key={s.l} className={`py-8 px-4 border-b border-border ${i < 3 ? "sm:border-r" : ""} ${i % 2 === 0 ? "border-r" : ""} sm:border-r-border group hover:bg-secondary/30 transition-colors`}>
              <span className="font-mono-display text-[10px] text-primary tracking-widest">[ {s.n} ]</span>
              <p className="font-display text-5xl mt-2 group-hover:text-primary transition-colors">{s.v}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
