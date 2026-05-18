// Custom hand-drawn SVG icons — bespoke, not lucide
type P = { className?: string };

const base = "w-full h-full";

export const IconBarbell = ({ className = base }: P) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 28v8M10 22v20M54 22v20M58 28v8" />
    <path d="M14 32h36" />
    <circle cx="20" cy="32" r="3" fill="currentColor" opacity=".25" />
    <circle cx="44" cy="32" r="3" fill="currentColor" opacity=".25" />
  </svg>
);

export const IconPulse = ({ className = base }: P) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 34h12l5-14 8 24 6-16 5 6h20" />
    <circle cx="55" cy="34" r="3" fill="currentColor" />
  </svg>
);

export const IconLeaf = ({ className = base }: P) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 52c0-22 14-36 40-40-2 26-16 40-40 40z" />
    <path d="M12 52L40 24" />
    <path d="M22 40h8M30 32h8" />
  </svg>
);

export const IconSpark = ({ className = base }: P) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 6l4 18 18 4-18 4-4 18-4-18-18-4 18-4 4-18z" />
    <circle cx="32" cy="32" r="3" fill="currentColor" />
  </svg>
);

export const IconArrow = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlay = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7 5v14l12-7z" />
  </svg>
);
