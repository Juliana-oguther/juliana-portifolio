import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="mb-6 border-b border-paper-300/70 pb-4">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-paper-50 md:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm text-ink-800/80 dark:text-paper-100/80 md:text-base">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
