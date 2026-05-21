import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { TRAINER } from "@/config/trainer";

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />

      <div className="container relative z-10">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} text-center mb-16 max-w-2xl mx-auto`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
              [09] — FAQ
            </span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-6xl lg:text-7xl leading-none">
            PREGUNTAS<br />
            <span className="gradient-neon-text">FRECUENTES.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {TRAINER.faq.map((item, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-primary/50 bg-card"
                  : "border-border bg-card/60 hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
              >
                <span className="font-semibold text-foreground leading-snug">{item.q}</span>
                <span
                  className={`font-display text-2xl text-primary shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
