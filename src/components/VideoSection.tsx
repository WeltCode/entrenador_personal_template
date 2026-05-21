import { TRAINER } from "@/config/trainer";
import { useReveal } from "@/hooks/useReveal";

const VideoSection = () => {
  if (!TRAINER.youtubeId) return null;

  const { ref, visible } = useReveal();

  return (
    <section className="py-20 relative">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} container`}>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-12 bg-primary" />
          <span className="font-mono-display text-[11px] uppercase tracking-[0.3em] text-primary">
            // Mira cómo trabajo
          </span>
          <span className="h-px w-12 bg-primary" />
        </div>

        <div className="relative rounded-2xl overflow-hidden neon-border border max-w-4xl mx-auto aspect-video">
          {/* HUD corners */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary z-10 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary z-10 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary z-10 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary z-10 pointer-events-none" />

          <iframe
            src={`https://www.youtube.com/embed/${TRAINER.youtubeId}?rel=0&modestbranding=1`}
            title={`${TRAINER.name} — Vídeo de presentación`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
