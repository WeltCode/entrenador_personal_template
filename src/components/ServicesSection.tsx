import { Dumbbell, Users, Apple, Brain } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "ENTRENAMIENTO PERSONAL",
    description: "Sesiones 1 a 1 diseñadas para maximizar tus resultados. Adaptadas a tu nivel, objetivos y disponibilidad.",
    features: ["Plan personalizado", "Seguimiento semanal", "Corrección de técnica"],
  },
  {
    icon: Users,
    title: "ENTRENAMIENTO EN GRUPO",
    description: "Sesiones en grupos reducidos con la energía de entrenar en equipo. Máximo 6 personas por grupo.",
    features: ["Grupos reducidos", "Ambiente motivador", "Precios accesibles"],
  },
  {
    icon: Apple,
    title: "NUTRICIÓN DEPORTIVA",
    description: "Planes nutricionales adaptados a tus objetivos. Sin dietas restrictivas, con alimentos que disfrutas.",
    features: ["Plan alimenticio", "Recetas fáciles", "Ajustes mensuales"],
  },
  {
    icon: Brain,
    title: "COACHING INTEGRAL",
    description: "Mentalidad, hábitos y estilo de vida. Trabajamos el cambio desde dentro para resultados duraderos.",
    features: ["Mindset ganador", "Gestión del estrés", "Hábitos saludables"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Servicios</p>
          <h2 className="font-display text-5xl lg:text-6xl">
            LO QUE <span className="gradient-neon-text">OFREZCO</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 hover:neon-border transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg gradient-neon flex items-center justify-center mb-5 group-hover:animate-pulse-neon">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
