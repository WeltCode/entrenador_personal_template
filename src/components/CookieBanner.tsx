import { useState } from "react";
import { IconShield } from "./icons/ServiceIcons";

const CookieBanner = () => {
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem("wb-cookies-consent") !== null;
    } catch {
      return false;
    }
  });

  const handle = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem("wb-cookies-consent", value);
    } catch {
      // noop si localStorage no está disponible
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[calc(100vw-3rem)] max-w-sm">
      <div className="relative bg-card/95 backdrop-blur-md border border-border rounded-2xl p-5 shadow-[0_0_40px_hsl(220_20%_3%_/_0.8)]">
        {/* Línea neon superior */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="flex items-start gap-3 mb-4">
          <div className="w-5 h-5 text-primary mt-0.5 shrink-0">
            <IconShield />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm mb-1">Cookies</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Usamos cookies propias para mejorar tu experiencia. Consulta nuestra{" "}
              <a href="/privacidad" className="text-primary hover:underline">
                política de privacidad
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handle("accepted")}
            className="flex-1 py-2 rounded-full gradient-neon text-primary-foreground font-semibold text-xs tracking-wider hover:opacity-90 transition-opacity"
          >
            ACEPTAR
          </button>
          <button
            onClick={() => handle("rejected")}
            className="flex-1 py-2 rounded-full border border-border text-muted-foreground font-semibold text-xs tracking-wider hover:border-primary/40 hover:text-foreground transition-colors"
          >
            RECHAZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
