import transformation1 from "@/assets/transformation-1.jpg";
import transformation2 from "@/assets/transformation-2.jpg";

const results = [
  {
    image: transformation1,
    name: "Alejandro R.",
    duration: "12 semanas",
    description: "Pérdida de 15kg de grasa y ganancia de masa muscular. Transformación completa.",
  },
  {
    image: transformation2,
    name: "María G.",
    duration: "16 semanas",
    description: "Tonificación total y aumento de confianza. Cambio de vida completo.",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-[0.3em] mb-3">Resultados</p>
          <h2 className="font-display text-5xl lg:text-6xl">
            ANTES Y <span className="gradient-neon-text">DESPUÉS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Los resultados hablan por sí solos. Cada transformación es el fruto de dedicación, constancia y un plan personalizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {results.map((result) => (
            <div key={result.name} className="group relative rounded-xl overflow-hidden border border-border hover:neon-border transition-all duration-500">
              <img src={result.image} alt={`Transformación de ${result.name}`} loading="lazy" width={800} height={600} className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <p className="font-display text-2xl text-foreground">{result.name}</p>
                  <p className="text-primary font-semibold text-sm">{result.duration}</p>
                  <p className="text-muted-foreground text-sm mt-1">{result.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                {result.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
