import { Instagram, Youtube } from "lucide-react";
import { TRAINER } from "@/config/trainer";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#hero" className="font-display text-xl tracking-widest gradient-neon-text">
          {TRAINER.brand}
        </a>
        <div className="flex items-center gap-4">
          <a href={TRAINER.instagram} className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href={TRAINER.youtube} className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
        </div>
        <p className="text-muted-foreground text-xs">© {new Date().getFullYear()} {TRAINER.brand}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
