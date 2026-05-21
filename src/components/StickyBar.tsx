import { useEffect, useState } from "react";
import { TRAINER } from "@/config/trainer";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${TRAINER.whatsapp}?text=${encodeURIComponent(
    "¡Hola! Me gustaría reservar mi consulta gratuita."
  )}`;

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-40 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-background/90 backdrop-blur-lg border-b border-primary/20 py-2.5 shadow-[0_4px_20px_hsl(220_20%_3%_/_0.6)]">
        <div className="container flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {TRAINER.brand} — Primera consulta 100% gratuita
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto group flex items-center gap-2 px-5 py-2 rounded-full gradient-neon text-primary-foreground font-semibold text-xs tracking-wider hover:opacity-90 transition-opacity"
          >
            RESERVAR CONSULTA GRATIS
            <span className="font-display text-sm group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
