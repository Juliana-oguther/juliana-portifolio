'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({ children, speed = 0.3, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 50}px`, `${-speed * 50}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="parallax-bg">
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxDecorProps {
  scrollYProgress: MotionValue<number>;
}

export function ParallaxDecorLeft({ scrollYProgress }: ParallaxDecorProps) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1]);

  return (
    <motion.div
      style={{ y, rotate, opacity }}
      className="pointer-events-none absolute -left-20 top-1/4 z-0 h-96 w-96 rounded-full bg-accent-terracotta/5 blur-3xl"
      aria-hidden="true"
    />
  );
}

export function ParallaxDecorRight({ scrollYProgress }: ParallaxDecorProps) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.2, 0.2, 0.1]);

  return (
    <motion.div
      style={{ y, rotate, opacity }}
      className="pointer-events-none absolute -right-20 top-1/2 z-0 h-80 w-80 rounded-full bg-accent-teal/5 blur-3xl"
      aria-hidden="true"
    />
  );
}
