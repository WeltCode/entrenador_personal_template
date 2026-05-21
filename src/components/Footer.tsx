import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { TRAINER } from "@/config/trainer";
import PoweredByWeltBrave from "@/components/branding/PoweredByWeltBrave";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        {/* Fila principal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#hero" className="font-display text-xl tracking-widest gradient-neon-text">
            {TRAINER.brand}
          </a>
          <div className="flex items-center gap-4">
            <a href={TRAINER.instagram} className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href={TRAINER.youtube} className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
          <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} {TRAINER.brand}. Todos los derechos reservados.</p>
        </div>
        {/* Links legales */}
        <div className="flex items-center justify-center gap-6 mt-5 mb-1">
          <Link
            to="/privacidad"
            className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Política de Privacidad
          </Link>
          <span className="text-muted-foreground/30">·</span>
          <Link
            to="/aviso-legal"
            className="font-mono-display text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Aviso Legal
          </Link>
        </div>
        {/* PoweredBy — debajo y centrado en ambos viewports */}
        <div className="flex justify-center mt-4">
          <PoweredByWeltBrave />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
