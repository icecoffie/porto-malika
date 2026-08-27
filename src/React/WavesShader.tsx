import { useEffect, useRef } from "react";

type WavesShaderProps = {
  className?: string;
};

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec2 u_resolution;
  uniform float u_time;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p = p * 2.0 + vec2(17.0, 9.0);
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 aspectUv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    float time = u_time * 0.18;
    float waves = sin(aspectUv.x * 3.4 + time) * 0.12;
    waves += sin(aspectUv.x * 7.0 - time * 1.4 + aspectUv.y * 2.0) * 0.06;
    waves += (fbm(aspectUv * 2.0 + time * 0.25) - 0.5) * 0.24;
    float field = clamp(uv.y + waves, 0.0, 1.0);

    vec3 deep = vec3(0.004, 0.025, 0.045);
    vec3 blue = vec3(0.015, 0.20, 0.38);
    vec3 cyan = vec3(0.20, 0.67, 0.86);
    vec3 color = mix(deep, blue, smoothstep(0.0, 0.7, field));
    color = mix(color, cyan, smoothstep(0.62, 1.0, field) * 0.45);

    float vignette = 1.0 - smoothstep(0.35, 0.95, length(uv - 0.5) * 1.35);
    float grain = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.025;
    gl_FragColor = vec4(max(color * (0.55 + vignette * 0.45) + grain, 0.0), 1.0);
  }
`;

export default function WavesShader({ className = "" }: WavesShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { antialias: false });
    if (!canvas || !gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "u_resolution");
    const time = gl.getUniformLocation(program, "u_time");
    let animationFrame = 0;
    let disposed = false;
    const startedAt = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bounds = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(bounds.width * dpr));
      canvas.height = Math.max(1, Math.round(bounds.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (now: number) => {
      if (disposed) return;
      resize();
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, (now - startedAt) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      animationFrame = requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    animationFrame = requestAnimationFrame(render);

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        display: "block",
        width: "100%",
        height: "100%",
        opacity: 0.82,
        pointerEvents: "none",
      }}
    />
  );
}
