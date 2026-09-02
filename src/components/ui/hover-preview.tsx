import type React from "react";
import { useCallback, useEffect, useState } from "react";

type PreviewKey = "chaotic_code" | "engineering" | "mentorship";

interface Preview {
  image: string;
  title: string;
  subtitle: string;
}

interface Position {
  x: number;
  y: number;
}

const CARD_WIDTH = 280;
const CARD_HEIGHT = 250;
const CARD_GAP = 24;
const EDGE_PADDING = 20;

const PREVIEWS: Record<PreviewKey, Preview> = {
  chaotic_code: {
    image: "/kopie.jpeg",
    title: "Chaotic Code",
    subtitle:
      "a beautiful disaster of nested loops, uncommitted changes, and sheer willpower.",
  },
  engineering: {
    image: "/me.jpeg",
    title: "All the work",
    subtitle:
      "watching an abstract idea successfully compile into a real live application.",
  },
  mentorship: {
    image: "/water.png",
    title: "Drink More",
    subtitle:
      "anxious cycle of drinking coffee for energy and water for survival.",
  },
};

function computeCardPosition(event: React.MouseEvent): Position {
  let x = event.clientX - CARD_WIDTH / 2;
  let y = event.clientY - CARD_HEIGHT - CARD_GAP;

  x = Math.max(EDGE_PADDING, Math.min(x, window.innerWidth - CARD_WIDTH - EDGE_PADDING));
  if (y < EDGE_PADDING) {
    y = event.clientY + CARD_GAP;
  }

  return { x, y };
}

interface InlineAnimatedIconProps {
  src: string;
  alt: string;
  size?: number;
}

function InlineAnimatedIcon({ src, alt, size = 34 }: InlineAnimatedIconProps) {
  const [replayToken, setReplayToken] = useState(0);

  const handleClick = useCallback(() => {
    setReplayToken((prev) => prev + 1);
  }, []);

  // Request pertama pakai src polos (kena cache normal).
  // Klik berikutnya nambahin query unik biar browser fetch ulang & replay.
  const resolvedSrc = replayToken === 0 ? src : `${src}?replay=${replayToken}`;

  return (
    <span className="inline-icon-wrapper" onClick={handleClick}>
      <img
        key={replayToken}
        src={resolvedSrc}
        alt={alt}
        width={size}
        height={size}
        className="inline-animated-icon"
        draggable={false}
      />
    </span>
  );
}

interface PreviewLinkProps {
  previewKey: PreviewKey;
  children: React.ReactNode;
  onStart: (key: PreviewKey, event: React.MouseEvent<HTMLSpanElement>) => void;
  onMove: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onEnd: () => void;
}

function PreviewLink({ previewKey, children, onStart, onMove, onEnd }: PreviewLinkProps) {
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

interface PreviewCardProps {
  preview: Preview;
  position: Position;
  visible: boolean;
}

function PreviewCard({ preview, position, visible }: PreviewCardProps) {
  return (
    <div
      className={`hero-preview-card ${visible ? "is-visible" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      aria-hidden="true"
    >
      <div className="hero-preview-card-inner">
        <img src={preview.image} alt="" />
        <div className="hero-preview-card-title">{preview.title}</div>
        <div className="hero-preview-card-subtitle">{preview.subtitle}</div>
      </div>
    </div>
  );
}

function HeroPreviewStyles() {
  return (
    <style>{`
      .hero-preview-link {
        background: linear-gradient(90deg, var(--sec), white, var(--sec));
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
        cursor: pointer;
        position: relative;
        display: inline-block;
        animation: heroPreviewShine 4s linear infinite;
        transition: filter .25s ease;
      }

      .hero-preview-link:hover {
        filter: brightness(1.25);
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

      .hero-preview-link:hover::after {
        width: 100%;
      }

      @keyframes heroPreviewShine {
        to { background-position: 200% center; }
      }

      .hero-preview-card {
        position: fixed;
        z-index: 1000;
        width: ${CARD_WIDTH}px;
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
        border: 1px solid rgba(255, 255, 255, .14);
        border-radius: 14px;
        background: rgba(20, 20, 20, .94);
        box-shadow: 0 24px 50px rgba(0, 0, 0, .55), 0 0 36px rgba(0, 123, 255, .16);
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
        .hero-preview-card {
          display: none;
        }
        .hero-preview-link::after {
          bottom: -2px;
        }
      }

      .inline-icon-wrapper {
        display: inline-block;
        vertical-align: -8px;
        margin: 0 2px;
        cursor: pointer;
        transition: transform .2s ease;
      }

      .inline-icon-wrapper:hover {
        transform: scale(1.15);
      }

      .inline-icon-wrapper:active {
        transform: scale(0.92);
      }

      .inline-animated-icon {
        display: block;
        width: 34px;
        height: 34px;
        border-radius: 6px;
        object-fit: cover;
        user-select: none;
        transform-origin: 50% 70%;
      }

      .inline-icon-wrapper:hover .inline-animated-icon {
        animation: iconWiggle .9s cubic-bezier(.36, .07, .19, .97) both;
      }

      @keyframes iconWiggle {
        0%   { transform: rotate(0deg); }
        15%  { transform: rotate(-28deg); }
        32%  { transform: rotate(22deg); }
        48%  { transform: rotate(-16deg); }
        64%  { transform: rotate(10deg); }
        80%  { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }

      @media (max-width: 767px) {
        .inline-animated-icon {
          width: 26px;
          height: 26px;
        }
      }
    `}</style>
  );
}

export default function HoverPreview() {
  const [activePreview, setActivePreview] = useState<Preview | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Object.values(PREVIEWS).forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  const updatePosition = useCallback((event: React.MouseEvent) => {
    setPosition(computeCardPosition(event));
  }, []);

  const handleStart = useCallback(
    (key: PreviewKey, event: React.MouseEvent<HTMLSpanElement>) => {
      setActivePreview(PREVIEWS[key]);
      setVisible(true);
      updatePosition(event);
    },
    [updatePosition],
  );

  const handleEnd = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <HeroPreviewStyles />

      <span>
        As a frontend engineer <InlineAnimatedIcon src="/mug.avif" alt="mug" />,
        UI/UX designer, and owner who blends{" "}
        <PreviewLink previewKey="chaotic_code" onStart={handleStart} onMove={updatePosition} onEnd={handleEnd}>
          chaotic code,
        </PreviewLink>{" "}
        pixel perfect designs, and executive decisions into real products. She leads
        projects end to end mostly because she does{" "}
        <PreviewLink previewKey="engineering" onStart={handleStart} onMove={updatePosition} onEnd={handleEnd}>
          all the work
        </PreviewLink>{" "}
        From dreaming <InlineAnimatedIcon src="/egg.avif" alt="egg" /> up concepts
        to fixing bugs she accidentally created, Malika stays aggressively hands
        on, turning wild ideas into reality with a lot{" "}
        <InlineAnimatedIcon src="/sea.webp" alt="sea" /> of love, coffee, and{" "}
        <PreviewLink previewKey="mentorship" onStart={handleStart} onMove={updatePosition} onEnd={handleEnd}>
          water
        </PreviewLink>
        .
      </span>

      {activePreview && (
        <PreviewCard preview={activePreview} position={position} visible={visible} />
      )}
    </>
  );
}