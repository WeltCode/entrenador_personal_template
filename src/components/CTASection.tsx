import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">¿Listo Para El Cambio?</p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6">
          TU TRANSFORMACIÓN
          <br />
          <span className="gradient-neon-text text-glow">EMPIEZA HOY</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg">
          Primera consulta gratuita. Analizamos tu situación, definimos tus objetivos y trazamos el camino juntos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-neon text-primary-foreground font-bold text-lg hover:opacity-90 transition-all animate-pulse-neon"
          >
            CONTACTAR POR WHATSAPP
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:carlos@carlosfit.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            ENVIAR EMAIL
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-12 text-muted-foreground text-sm">
          <span>📍 Barcelona, España</span>
          <span>📱 +34 600 000 000</span>
          <span>✉️ carlos@carlosfit.com</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
