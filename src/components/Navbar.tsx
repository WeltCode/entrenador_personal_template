import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TRAINER } from "@/config/trainer";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre Mí", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Resultados", href: "#results" },
  { label: "Testimonios", href: "#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-2xl tracking-widest gradient-neon-text">
          {TRAINER.brand}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2 rounded-lg gradient-neon text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Empieza Hoy
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="px-5 py-2 rounded-lg gradient-neon text-primary-foreground font-semibold text-sm text-center"
            >
              Empieza Hoy
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
