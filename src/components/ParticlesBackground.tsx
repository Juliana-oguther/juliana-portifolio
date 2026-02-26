'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: 'dust' | 'spark' | 'ink';
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      type: (['dust', 'spark', 'ink'] as const)[Math.floor(Math.random() * 3)],
    }));
    setParticles(generated);
  }, []);

  const getColor = (type: Particle['type']) => {
    switch (type) {
      case 'dust':
        return 'bg-paper-400/30';
      case 'spark':
        return 'bg-accent-terracotta/20';
      case 'ink':
        return 'bg-ink-800/10 dark:bg-paper-200/10';
    }
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${getColor(p.type)} animate-float-slow`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Large ambient blobs */}
      <div className="ink-blot left-[10%] top-[20%]" style={{ animationDelay: '0s' }} />
      <div className="ink-blot right-[15%] top-[60%] h-[180px] w-[180px]" />
      <div className="ink-blot left-[50%] top-[80%] h-[100px] w-[100px]" />
    </div>
  );
}
