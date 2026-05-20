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
      <div className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-black/40 px-5 py-3 whitespace-nowrap backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-black/55">
        <span className="font-mono-display text-[10px] uppercase tracking-[0.25em] text-white/40">
          Powered by
        </span>
        <div className="h-3 w-px bg-white/10" />
        <div className="inline-flex items-center gap-2">
          <span className="font-display text-base tracking-widest">
            <span className="text-[#E33C09]">Welt</span><span className="text-white/75 group-hover:text-white transition-colors duration-300">Brave</span>
          </span>
          <img
            src="https://res.cloudinary.com/da6ggvegj/image/upload/v1760310551/solo_logo_nv0q0b.png"
            alt="WeltBrave Logo"
            className="h-5 w-5 rounded-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </a>
  );
}
