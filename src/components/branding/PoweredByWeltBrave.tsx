interface PoweredByWeltBraveProps {
  className?: string;
}

export default function PoweredByWeltBrave({ className = "" }: PoweredByWeltBraveProps) {
  return (
    <a
      href="https://weltbrave.com"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <div className="group flex items-center gap-3 rounded-2xl border border-primary/20 bg-background/60 px-5 py-3 whitespace-nowrap backdrop-blur-md transition-all duration-300 hover:border-primary/45 hover:bg-card/70 hover:shadow-[0_0_18px_hsl(142_100%_55%_/_0.12),0_0_40px_hsl(142_100%_55%_/_0.05)]">
        <span className="font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Powered by
        </span>
        <div className="h-3 w-px bg-primary/20" />
        <div className="inline-flex items-center gap-2">
          <span className="font-display text-base tracking-widest">
            <span className="gradient-neon-text">Welt</span><span className="text-foreground/70 group-hover:text-foreground transition-colors duration-300">Brave</span>
          </span>
          <img
            src="https://res.cloudinary.com/da6ggvegj/image/upload/v1760310551/solo_logo_nv0q0b.png"
            alt="WeltBrave Logo"
            className="h-5 w-5 rounded-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </a>
  );
}
