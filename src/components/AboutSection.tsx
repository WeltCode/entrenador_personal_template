import portraitImg from "@/assets/trainer-portrait.jpg";
import outdoorImg from "@/assets/trainer-outdoor.jpg";
import coachingImg from "@/assets/trainer-coaching.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={portraitImg} alt="Carlos - retrato" loading="lazy" width={800} height={800} className="rounded-lg neon-border border object-cover w-full aspect-square" />
                <img src={coachingImg} alt="Carlos entrenando clientes" loading="lazy" width={800} height={1000} className="rounded-lg border border-border object-cover w-full aspect-[3/4]" />
              </div>
              <div className="mt-12">
                <img src={outdoorImg} alt="Carlos entrenando al aire libre en Barcelona" loading="lazy" width={800} height={1000} className="rounded-lg border border-border object-cover w-full aspect-[3/5]" />
              </div>
            </div>
          </div>

          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Sobre Mí</p>
            <h2 className="font-display text-5xl lg:text-6xl mb-6">
              CARLOS <span className="gradient-neon-text">MENDOZA</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nacido en Colombia y establecido en Barcelona desde hace más de 10 años. Mi pasión por el fitness comenzó como una forma de superar retos personales, y hoy es mi forma de vida y mi manera de impactar a cientos de personas.
              </p>
              <p>
                Certificado en entrenamiento personal por la NSCA, especialista en transformación corporal y nutrición deportiva. Mi enfoque combina la disciplina con la motivación latina que nos caracteriza.
              </p>
              <p>
                No creo en dietas extremas ni en entrenamientos genéricos. Cada plan es único, diseñado para tu cuerpo, tu estilo de vida y tus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "🎓", text: "Certificado NSCA" },
                { icon: "🏋️", text: "Especialista en fuerza" },
                { icon: "🥗", text: "Nutrición deportiva" },
                { icon: "📍", text: "Barcelona, España" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-secondary rounded-lg p-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
