import heroImg from "@/assets/hero-trainer.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Carlos entrenando" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Entrenador Personal en Barcelona
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            TRANSFORMA
            <br />
            <span className="gradient-neon-text text-glow">TU CUERPO</span>
            <br />
            TU VIDA
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Entrenamiento personalizado, nutrición y mentalidad. Resultados reales con un método probado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a href="#cta" className="px-8 py-4 rounded-lg gradient-neon text-primary-foreground font-bold text-lg hover:opacity-90 transition-all animate-pulse-neon text-center">
              QUIERO EMPEZAR
            </a>
            <a href="#results" className="px-8 py-4 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all text-center">
              Ver Resultados
            </a>
          </div>

          <div className="flex gap-12 mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            {[
              { value: "+500", label: "Clientes" },
              { value: "8+", label: "Años" },
              { value: "98%", label: "Satisfacción" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
