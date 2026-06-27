import { useMemo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import './OrbitImages.css';

function generateEllipsePath(cx: number, cy: number, rx: number, ry: number) {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}
function generateCirclePath(cx: number, cy: number, r: number) {
  return generateEllipsePath(cx, cy, r, r);
}
function generateSquarePath(cx: number, cy: number, size: number) {
  const h = size / 2;
  return `M ${cx - h} ${cy - h} L ${cx + h} ${cy - h} L ${cx + h} ${cy + h} L ${cx - h} ${cy + h} Z`;
}
function generateRectanglePath(cx: number, cy: number, w: number, h: number) {
  const hw = w / 2, hh = h / 2;
  return `M ${cx - hw} ${cy - hh} L ${cx + hw} ${cy - hh} L ${cx + hw} ${cy + hh} L ${cx - hw} ${cy + hh} Z`;
}
function generateTrianglePath(cx: number, cy: number, size: number) {
  const height = (size * Math.sqrt(3)) / 2, hs = size / 2;
  return `M ${cx} ${cy - height / 1.5} L ${cx + hs} ${cy + height / 3} L ${cx - hs} ${cy + height / 3} Z`;
}
function generateStarPath(cx: number, cy: number, outerR: number, innerR: number, points: number) {
  const step = Math.PI / points; let path = '';
  for (let i = 0; i < 2 * points; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = i * step - Math.PI / 2;
    path += i === 0 ? `M ${cx + r * Math.cos(angle)} ${cy + r * Math.sin(angle)}` : ` L ${cx + r * Math.cos(angle)} ${cy + r * Math.sin(angle)}`;
  }
  return path + ' Z';
}
function generateHeartPath(cx: number, cy: number, size: number) {
  const s = size / 30;
  return `M ${cx} ${cy + 12 * s} C ${cx - 20 * s} ${cy - 5 * s}, ${cx - 12 * s} ${cy - 18 * s}, ${cx} ${cy - 8 * s} C ${cx + 12 * s} ${cy - 18 * s}, ${cx + 20 * s} ${cy - 5 * s}, ${cx} ${cy + 12 * s}`;
}
function generateInfinityPath(cx: number, cy: number, w: number, h: number) {
  const hw = w / 2, hh = h / 2;
  return `M ${cx} ${cy} C ${cx + hw * 0.5} ${cy - hh}, ${cx + hw} ${cy - hh}, ${cx + hw} ${cy} C ${cx + hw} ${cy + hh}, ${cx + hw * 0.5} ${cy + hh}, ${cx} ${cy} C ${cx - hw * 0.5} ${cy + hh}, ${cx - hw} ${cy + hh}, ${cx - hw} ${cy} C ${cx - hw} ${cy - hh}, ${cx - hw * 0.5} ${cy - hh}, ${cx} ${cy}`;
}
function generateWavePath(cx: number, cy: number, w: number, amplitude: number, waves: number) {
  const pts: string[] = [], segs = waves * 20, hw = w / 2;
  for (let i = 0; i <= segs; i++) {
    const x = cx - hw + (w * i) / segs, y = cy + Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude;
    pts.push(i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`);
  }
  for (let i = segs; i >= 0; i--) {
    const x = cx - hw + (w * i) / segs, y = cy - Math.sin((i / segs) * waves * 2 * Math.PI) * amplitude;
    pts.push(`L ${x} ${y}`);
  }
  return pts.join(' ') + ' Z';
}

interface OrbitItemProps {
  item: React.ReactNode; index: number; totalItems: number;
  path: string; itemSize: number; rotation: number;
  progress: ReturnType<typeof useMotionValue<number>>; fill: boolean;
}

function OrbitItem({ item, index, totalItems, path, itemSize, rotation, progress, fill }: OrbitItemProps) {
  const itemOffset = fill ? (index / totalItems) * 100 : 0;
  const offsetDistance = useTransform(progress, (p: number) => {
    const offset = (((p + itemOffset) % 100) + 100) % 100;
    return `${offset}%`;
  });
  return (
    <motion.div
      className="orbit-item"
      style={{ width: itemSize, height: itemSize, offsetPath: `path("${path}")`, offsetRotate: '0deg', offsetAnchor: 'center center', offsetDistance } as unknown as React.CSSProperties}
    >
      <div style={{ transform: `rotate(${-rotation}deg)` }}>{item}</div>
    </motion.div>
  );
}

interface OrbitImagesProps {
  images?: string[]; altPrefix?: string; shape?: string; customPath?: string;
  baseWidth?: number; radiusX?: number; radiusY?: number; radius?: number;
  starPoints?: number; starInnerRatio?: number; rotation?: number; duration?: number;
  itemSize?: number; direction?: 'normal' | 'reverse'; fill?: boolean;
  width?: number | string; height?: number | string; className?: string;
  showPath?: boolean; pathColor?: string; pathWidth?: number; easing?: string;
  paused?: boolean; centerContent?: React.ReactNode; responsive?: boolean;
}

export default function OrbitImages({
  images = [], altPrefix = 'Orbiting image', shape = 'ellipse', customPath,
  baseWidth = 1400, radiusX = 700, radiusY = 170, radius = 300,
  starPoints = 5, starInnerRatio = 0.5, rotation = -8, duration = 40,
  itemSize = 64, direction = 'normal', fill = true, width = 100, height = 100,
  className = '', showPath = false, pathColor = 'rgba(0,0,0,0.1)', pathWidth = 2,
  easing = 'linear', paused = false, centerContent, responsive = false,
}: OrbitImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const cx = baseWidth / 2, cy = baseWidth / 2;

  const path = useMemo(() => {
    switch (shape) {
      case 'circle': return generateCirclePath(cx, cy, radius);
      case 'ellipse': return generateEllipsePath(cx, cy, radiusX, radiusY);
      case 'square': return generateSquarePath(cx, cy, radius * 2);
      case 'rectangle': return generateRectanglePath(cx, cy, radiusX * 2, radiusY * 2);
      case 'triangle': return generateTrianglePath(cx, cy, radius * 2);
      case 'star': return generateStarPath(cx, cy, radius, radius * starInnerRatio, starPoints);
      case 'heart': return generateHeartPath(cx, cy, radius * 2);
      case 'infinity': return generateInfinityPath(cx, cy, radiusX * 2, radiusY * 2);
      case 'wave': return generateWavePath(cx, cy, radiusX * 2, radiusY, 3);
      case 'custom': return customPath || generateCirclePath(cx, cy, radius);
      default: return generateEllipsePath(cx, cy, radiusX, radiusY);
    }
  }, [shape, customPath, cx, cy, radiusX, radiusY, radius, starPoints, starInnerRatio]);

  useLayoutEffect(() => {
    if (!responsive || !containerRef.current) return;
    const update = () => { if (containerRef.current) setScale(containerRef.current.clientWidth / baseWidth); };
    update();
    const obs = new ResizeObserver(update);
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [responsive, baseWidth]);

  const progress = useMotionValue(0);
  useEffect(() => {
    if (paused) return;
    const ctrl = animate(progress, direction === 'reverse' ? -100 : 100, {
      duration, ease: easing as any, repeat: Infinity, repeatType: 'loop',
    });
    return () => ctrl.stop();
  }, [progress, duration, easing, direction, paused]);

  const cw = responsive ? '100%' : (typeof width === 'number' ? width : '100%');
  const ch = responsive ? 'auto' : (typeof height === 'number' ? height : (typeof width === 'number' ? width : 'auto'));

  const items = images.map((src, i) => (
    <img key={src} src={src} alt={`${altPrefix} ${i + 1}`} draggable={false} className="orbit-image" />
  ));

  return (
    <div ref={containerRef} className={`orbit-container ${className}`}
      style={{ width: cw, height: ch, aspectRatio: responsive ? '1 / 1' : undefined }} aria-hidden="true">
      <div
        className={responsive ? 'orbit-scaling-container orbit-scaling-container--responsive' : 'orbit-scaling-container'}
        style={{
          width: responsive ? baseWidth : '100%', height: responsive ? baseWidth : '100%',
          transform: responsive && scale !== null ? `translate(-50%, -50%) scale(${scale})` : undefined,
          visibility: responsive && scale === null ? 'hidden' : undefined,
        }}
      >
        <div className="orbit-rotation-wrapper" style={{ transform: `rotate(${rotation}deg)` }}>
          {showPath && (
            <svg width="100%" height="100%" viewBox={`0 0 ${baseWidth} ${baseWidth}`} className="orbit-path-svg">
              <path d={path} fill="none" stroke={pathColor} strokeWidth={pathWidth / (scale ?? 1)} />
            </svg>
          )}
          {items.map((item, i) => (
            <OrbitItem key={i} item={item} index={i} totalItems={items.length}
              path={path} itemSize={itemSize} rotation={rotation} progress={progress} fill={fill} />
          ))}
        </div>
      </div>
      {centerContent && <div className="orbit-center-content">{centerContent}</div>}
    </div>
  );
}
