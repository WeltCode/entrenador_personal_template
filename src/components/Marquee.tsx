const items = [
  "FUERZA",
  "DISCIPLINA",
  "RESULTADOS",
  "MENTALIDAD",
  "TRANSFORMACIÓN",
  "ENERGÍA",
  "CONSTANCIA",
  "ÉLITE",
];

const Marquee = () => {
  return (
    <div className="relative border-y border-border bg-background overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 font-display text-5xl sm:text-6xl tracking-wider">
            <span className={i % 2 === 0 ? "text-foreground" : "gradient-neon-text"}>{t}</span>
            <span aria-hidden className="text-primary text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
