'use client';

import { useEffect, useState } from 'react';
import { PortfolioSection } from '@/data/profile';

interface HeaderProps {
  sections: PortfolioSection[];
}

const storageKey = 'juliana-theme';

export function Header({ sections }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    const root = document.documentElement;
    root.classList.toggle('dark', next === 'dark');
    localStorage.setItem(storageKey, next);
    setTheme(next);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-paper-300/60 bg-paper-100/95 backdrop-blur dark:border-paper-300/20 dark:bg-ink-900/90">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6" aria-label="Navegação principal">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-teal dark:text-paper-100">
          CV Digital
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {sections.filter((section) => section.isVisible).sort((a, b) => a.displayOrder - b.displayOrder).map((section) => (
            <li key={section.id}>
              <a href={section.anchor} className="text-sm text-ink-900 transition hover:text-accent-terracotta dark:text-paper-100 dark:hover:text-paper-50">
                {section.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
          className="rounded-lg border border-paper-300/70 bg-paper-50 px-3 py-2 text-xs font-semibold text-ink-900 transition hover:border-accent-teal hover:text-accent-teal dark:border-paper-300/30 dark:bg-ink-800 dark:text-paper-50"
        >
          {theme === 'light' ? 'Tema escuro' : 'Tema claro'}
        </button>
      </nav>
    </header>
  );
}
