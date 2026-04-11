import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Pablo Martínez",
    role: "Empresario",
    text: "Carlos no solo cambió mi cuerpo, cambió mi mentalidad. En 3 meses logré lo que no pude en años solo. Su energía y profesionalismo son incomparables.",
    stars: 5,
  },
  {
    name: "Laura Fernández",
    role: "Diseñadora",
    text: "Nunca pensé que el gym sería para mí hasta que conocí a Carlos. Me hizo sentir cómoda desde el primer día y los resultados fueron increíbles.",
    stars: 5,
  },
  {
    name: "Diego Morales",
    role: "Ingeniero",
    text: "El plan de nutrición que me diseñó fue perfecto. Nada de pasar hambre, todo delicioso y los kilos fueron bajando semana a semana. 100% recomendado.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Testimonios</p>
          <h2 className="font-display text-5xl lg:text-6xl">
            LO QUE DICEN <span className="gradient-neon-text">MIS CLIENTES</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 hover:neon-border transition-all duration-500">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
