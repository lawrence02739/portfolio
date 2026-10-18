import React, { useEffect, useRef } from 'react';

export const MagicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    interface Sparkle {
      x: number;
      y: number;
      radius: number;
      r: number;
      g: number;
      b: number;
      speedY: number;
      speedX: number;
      alpha: number;
      alphaChange: number;
      maxAlpha: number;
    }

    const colorPalette = [
      { r: 192, g: 132, b: 252 }, // Lumos Violet
      { r: 216, g: 180, b: 254 }, // Soft Lilac
      { r: 168, g: 85, b: 247 },  // Royal Purple
      { r: 212, g: 175, b: 55 },  // Golden Snitch
      { r: 253, g: 224, b: 71 },  // Bright Gold
      { r: 243, g: 232, b: 255 }, // Starlight White
    ];

    const particleCount = 40;
    const particles: Sparkle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        r: col.r,
        g: col.g,
        b: col.b,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.6 + 0.2,
        alphaChange: (Math.random() * 0.008 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        maxAlpha: Math.random() * 0.55 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha += p.alphaChange;

        if (p.alpha <= 0.08 || p.alpha >= p.maxAlpha) {
          p.alphaChange = -p.alphaChange;
        }

        // Wrap around borders
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = Math.max(0, Math.min(1, p.alpha));

        // High-performance double-circle glow without expensive shadowBlur
        // Outer soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.25})`;
        ctx.fill();

        // Inner bright spark core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden will-change-transform">
      {/* Background radial violet magical nebulae */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-violet-950/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-950/25 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
    </div>
  );
};
