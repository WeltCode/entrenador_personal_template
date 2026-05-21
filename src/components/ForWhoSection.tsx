import { TRAINER } from "@/config/trainer";
import { useReveal } from "@/hooks/useReveal";
import {
  IconArrow,
  IconFlame,
  IconTarget,
  IconShield,
  IconBolt,
  IconBarbell,
  IconPulse,
  IconLeaf,
  IconSpark,
} from "./icons/ServiceIcons";
import { TRAINER } from "@/config/trainer";

type Profile = (typeof TRAINER.targetProfiles)[number];

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  flame:   IconFlame,
  target:  IconTarget,
  shield:  IconShield,
  bolt:    IconBolt,
  barbell: IconBarbell,
  pulse:   IconPulse,
  leaf:    IconLeaf,
  spark:   IconSpark,
};

const ProfileCard = ({ profile, i }: { profile: Profile; i: number }) => {
  const { ref, visible } = useReveal();
  const IconComponent = ICON_MAP[profile.icon] ?? IconSpark;

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${i * 100}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} group relative bg-card border border-border rounded-2xl p-7 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:-translate-y-1`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-px left-7 right-7 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex items-start justify-between mb-8">
        <span className="font-mono-display text-xs text-muted-foreground tracking-widest">[ {String(i + 1).padStart(2, "0")} ]</span>
        <div className="w-14 h-14 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
          <IconComponent />
        </div>
      </div>

      <div className="relative">
        <h3 className="font-display text-2xl text-foreground leading-tight">{profile.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mt-3">{profile.description}</p>

        <a
          href={`https://wa.me/${TRAINER.whatsapp}?text=${encodeURIComponent(`¡Hola ${TRAINER.brand}! Me interesa el programa "${profile.title}". ¿Puedes darme más información?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity"
        >
          <span className="font-mono-display text-[11px] uppercase tracking-widest">Empieza ahora</span>
          <span className="w-7 h-7 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
            <IconArrow className="w-3 h-3" />
          </span>
        </a>
      </div>
    </article>
  );
};

const ForWhoSection = () => {
  const { ref, visible } = useReveal();
  return (
    <section id="for-who" className="py-32 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-[hsl(185_100%_55%_/_0.08)] -top-40 -right-40" />

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} container relative z-10`}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">[07] — ¿Para quién?</span>
              <span className="h-px w-12 bg-primary" />
            </div>
            <h2 className="font-display text-6xl lg:text-7xl leading-none">
              ESTE MÉTODO<br />
              <span className="gradient-neon-text">ES PARA TI.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            No importa tu punto de partida. Importa hacia dónde quieres ir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINER.targetProfiles.map((profile, i) => (
            <ProfileCard key={profile.title} profile={profile} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
