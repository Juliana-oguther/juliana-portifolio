'use client';

import { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionAnimatedProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  children: ReactNode;
}

export function SectionAnimated({ id, title, subtitle, icon, children }: SectionAnimatedProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative scroll-mt-24">
      <ScrollReveal>
        <div className="mb-8">
          <div className="flex items-center gap-3">
            {icon && (
              <span className="animate-ink-drop text-2xl" aria-hidden="true">
                {icon}
              </span>
            )}
            <h2
              id={`${id}-title`}
              className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-paper-50 md:text-3xl lg:text-4xl"
            >
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-800/75 dark:text-paper-100/75 md:text-base">
              {subtitle}
            </p>
          )}
          {/* Decorative underline */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-0.5 w-12 rounded-full bg-accent-terracotta" />
            <div className="h-0.5 w-6 rounded-full bg-accent-terracotta/50" />
            <div className="h-0.5 w-3 rounded-full bg-accent-terracotta/25" />
          </div>
        </div>
      </ScrollReveal>

      {children}
    </section>
  );
}
