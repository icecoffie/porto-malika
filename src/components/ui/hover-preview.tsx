import type React from "react";
import { useCallback, useEffect, useState } from "react";

type PreviewKey = "engineering" | "mentorship";

type Preview = {
  image: string;
  title: string;
  subtitle: string;
};

const previews: Record<PreviewKey, Preview> = {
  engineering: {
    image: "/me.jpeg",
    title: "Frontend Engineering",
    subtitle: "Building expressive, high-performance digital products",
  },
  mentorship: {
    image: "/mentor2.webp",
    title: "UI/UX Mentorship",
    subtitle: "Sharing practical design thinking with the next generation",
  },
};

function PreviewLink({
  previewKey,
  children,
  onStart,
  onMove,
  onEnd,
}: {
  previewKey: PreviewKey;
  children: React.ReactNode;
  onStart: (key: PreviewKey, event: React.MouseEvent<HTMLSpanElement>) => void;
  onMove: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onEnd: () => void;
}) {
  return (
    <span
      className="hero-preview-link"
      onMouseEnter={(event) => onStart(previewKey, event)}
      onMouseMove={onMove}
      onMouseLeave={onEnd}
    >
      {children}
    </span>
  );
}

export default function HoverPreview() {
  const [activePreview, setActivePreview] = useState<Preview | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Object.values(previews).forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  const updatePosition = useCallback((event: React.MouseEvent) => {
    const cardWidth = 280;
    const cardHeight = 250;
    const gap = 24;
    let x = event.clientX - cardWidth / 2;
    let y = event.clientY - cardHeight - gap;

    x = Math.max(20, Math.min(x, window.innerWidth - cardWidth - 20));
    if (y < 20) y = event.clientY + gap;

    setPosition({ x, y });
  }, []);

  const handleStart = useCallback(
    (key: PreviewKey, event: React.MouseEvent<HTMLSpanElement>) => {
      setActivePreview(previews[key]);
      setVisible(true);
      updatePosition(event);
    },
    [updatePosition],
  );

  return (
    <>
      <style>{`
        .hero-preview-link {
          background: linear-gradient(90deg, var(--sec), white, var(--sec));
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          display: inline-block;
          animation: heroPreviewShine 4s linear infinite;
          transition: filter .25s ease;
        }
        @keyframes heroPreviewShine {
          to { background-position: 200% center; }
        }
        .hero-preview-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -4px;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, var(--sec), #63d9ff);
          transition: width .35s ease;
        }
        .hero-preview-link:hover { filter: brightness(1.25); }
        .hero-preview-link:hover::after { width: 100%; }
        .hero-preview-card {
          position: fixed;
          z-index: 1000;
          width: 280px;
          padding: 8px;
          pointer-events: none;
          opacity: 0;
          transform: translateY(10px) scale(.95);
          transition: opacity .25s ease, transform .25s ease;
        }
        .hero-preview-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .hero-preview-card-inner {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 14px;
          background: rgba(20,20,20,.94);
          box-shadow: 0 24px 50px rgba(0,0,0,.55), 0 0 36px rgba(0,123,255,.16);
          backdrop-filter: blur(12px);
        }
        .hero-preview-card img {
          display: block;
          width: 100%;
          height: 156px;
          object-fit: cover;
        }
        .hero-preview-card-title {
          padding: 12px 12px 4px;
          color: var(--white);
          font-size: .85rem;
          font-weight: 700;
        }
        .hero-preview-card-subtitle {
          padding: 0 12px 12px;
          color: var(--white-icon);
          font-size: .72rem;
          line-height: 1.45;
        }
        @media (max-width: 767px) {
          .hero-preview-card { display: none; }
          .hero-preview-link::after { bottom: -2px; }
        }
      `}</style>

      <span>
        I turn ambitious ideas into thoughtful digital products through{" "}
        <PreviewLink previewKey="engineering" onStart={handleStart} onMove={updatePosition} onEnd={() => setVisible(false)}>
          frontend engineering
        </PreviewLink>{" "}
        and transform complex problems into clear, human experiences through{" "}
        <PreviewLink previewKey="mentorship" onStart={handleStart} onMove={updatePosition} onEnd={() => setVisible(false)}>
          UI/UX design and mentorship
        </PreviewLink>
        .
      </span>

      {activePreview && (
        <div
          className={`hero-preview-card ${visible ? "is-visible" : ""}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          aria-hidden="true"
        >
          <div className="hero-preview-card-inner">
            <img src={activePreview.image} alt="" />
            <div className="hero-preview-card-title">{activePreview.title}</div>
            <div className="hero-preview-card-subtitle">{activePreview.subtitle}</div>
          </div>
        </div>
      )}
    </>
  );
}
