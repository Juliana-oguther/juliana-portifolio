'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Skill } from '@/data/profile';

type SiteLanguage = 'pt' | 'en';

interface CardSkillAnimatedProps {
  skill: Skill;
  index: number;
  language: SiteLanguage;
}

const levelConfig: Record<Skill['level'], { color: string; width: string; glow: string }> = {
  Básico: {
    color: 'bg-accent-sage',
    width: 'w-[33%]',
    glow: 'shadow-[0_0_8px_rgba(112,139,117,0.3)]',
  },
  Intermediário: {
    color: 'bg-accent-teal',
    width: 'w-[66%]',
    glow: 'shadow-[0_0_8px_rgba(47,112,109,0.3)]',
  },
  Avançado: {
    color: 'bg-accent-terracotta',
    width: 'w-full',
    glow: 'shadow-[0_0_8px_rgba(188,108,76,0.3)]',
  },
};

const levelIcon: Record<Skill['level'], string> = {
  Básico: '🌱',
  Intermediário: '⚡',
  Avançado: '🔥',
};

export function CardSkillAnimated({ skill, index, language }: CardSkillAnimatedProps) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const config = levelConfig[skill.level];
  const levelLabel =
    language === 'en'
      ? ({ Básico: 'Basic', Intermediário: 'Intermediate', Avançado: 'Advanced' } as const)[skill.level]
      : skill.level;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="glass-card group relative overflow-hidden rounded-xl p-4 transition-shadow hover:shadow-glow-sm"
    >
      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(188, 108, 76, 0.06), transparent 70%)',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-medium leading-relaxed text-ink-900 dark:text-paper-50 md:text-base">
            {skill.name}
          </p>
          <span className="flex items-center gap-1 whitespace-nowrap rounded-full bg-paper-200/60 px-2.5 py-1 text-xs font-semibold text-ink-800 dark:bg-ink-800/60 dark:text-paper-100">
            <span aria-hidden="true">{levelIcon[skill.level]}</span>
            {levelLabel}
          </span>
        </div>

        {/* Skill bar */}
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-200/80 dark:bg-ink-800/60">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`skill-bar-fill h-full rounded-full ${config.color} ${config.width} ${config.glow}`}
          />
        </div>
      </div>
    </motion.li>
  );
}
