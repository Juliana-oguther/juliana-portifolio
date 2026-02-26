'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioSection, ResumeFile } from '@/data/profile';
import { CVDownloadDropdown } from './CVDownloadDropdown';

type SiteLanguage = 'pt' | 'en';

interface HeaderAnimatedProps {
  sections: PortfolioSection[];
  resumeFiles: ResumeFile[];
  language: SiteLanguage;
  onLanguageChange: (language: SiteLanguage) => void;
}

const storageKey = 'juliana-theme';

export function HeaderAnimated({ sections, resumeFiles, language, onLanguageChange }: HeaderAnimatedProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.documentElement;
    const current = root.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });

    const sectionEls = document.querySelectorAll('section[id]');
    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    const root = document.documentElement;
    root.classList.toggle('dark', next === 'dark');
    localStorage.setItem(storageKey, next);
    setTheme(next);
  };

  const visibleSections = sections
    .filter((s) => s.isVisible)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-paper-300/40 bg-paper-50/80 shadow-sm backdrop-blur-xl dark:border-paper-300/15 dark:bg-ink-900/80'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6"
          aria-label={language === 'en' ? 'Main navigation' : 'Navegação principal'}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent-teal transition-colors hover:text-accent-terracotta dark:text-paper-100"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-terracotta/10 font-display text-base font-bold text-accent-terracotta transition-transform group-hover:scale-110">
              J
            </span>
            <span className="hidden sm:inline">Juliana</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {visibleSections.map((section) => (
              <li key={section.id}>
                <a
                  href={section.anchor}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'text-accent-terracotta'
                      : 'text-ink-900/70 hover:text-accent-terracotta dark:text-paper-100/70 dark:hover:text-paper-50'
                  }`}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent-terracotta"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-lg border border-paper-300/50 bg-paper-50/50 p-1 backdrop-blur dark:border-paper-300/20 dark:bg-ink-800/50 md:flex">
              <button
                type="button"
                onClick={() => onLanguageChange('pt')}
                aria-label="Mudar idioma para Português"
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                  language === 'pt'
                    ? 'bg-accent-teal text-paper-50'
                    : 'text-ink-900/70 hover:text-accent-teal dark:text-paper-100/70 dark:hover:text-paper-50'
                }`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-label="Switch language to English"
                className={`rounded-md px-2 py-1 text-xs font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-accent-teal text-paper-50'
                    : 'text-ink-900/70 hover:text-accent-teal dark:text-paper-100/70 dark:hover:text-paper-50'
                }`}
              >
                EN
              </button>
            </div>

            <div className="hidden md:block">
              <CVDownloadDropdown resumeFiles={resumeFiles} language={language} />
            </div>

            {/* Theme toggle */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={
                theme === 'light'
                  ? language === 'en'
                    ? 'Enable dark mode'
                    : 'Ativar tema escuro'
                  : language === 'en'
                    ? 'Enable light mode'
                    : 'Ativar tema claro'
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-paper-300/50 bg-paper-50/50 text-ink-900 backdrop-blur transition-colors hover:border-accent-teal hover:text-accent-teal dark:border-paper-300/20 dark:bg-ink-800/50 dark:text-paper-50"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.span
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    🌙
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ☀️
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={
                mobileOpen
                  ? language === 'en'
                    ? 'Close menu'
                    : 'Fechar menu'
                  : language === 'en'
                    ? 'Open menu'
                    : 'Abrir menu'
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-paper-300/50 bg-paper-50/50 backdrop-blur md:hidden dark:border-paper-300/20 dark:bg-ink-800/50"
            >
              <motion.div className="flex flex-col gap-1" animate={mobileOpen ? 'open' : 'closed'}>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="block h-0.5 w-5 bg-ink-900 dark:bg-paper-50"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="block h-0.5 w-5 bg-ink-900 dark:bg-paper-50"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="block h-0.5 w-5 bg-ink-900 dark:bg-paper-50"
                />
              </motion.div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-paper-300/40 bg-paper-50/95 p-6 backdrop-blur-xl md:hidden dark:border-paper-300/15 dark:bg-ink-900/95"
          >
            <div className="mb-5">
              <CVDownloadDropdown resumeFiles={resumeFiles} language={language} />
            </div>

            <div className="mb-5 flex items-center rounded-lg border border-paper-300/50 bg-paper-50/60 p-1 dark:border-paper-300/20 dark:bg-ink-800/50">
              <button
                type="button"
                onClick={() => onLanguageChange('pt')}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  language === 'pt'
                    ? 'bg-accent-teal text-paper-50'
                    : 'text-ink-900/70 dark:text-paper-100/70'
                }`}
              >
                Português
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-accent-teal text-paper-50'
                    : 'text-ink-900/70 dark:text-paper-100/70'
                }`}
              >
                English
              </button>
            </div>

            <ul className="flex flex-col gap-2">
              {visibleSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={section.anchor}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-accent-terracotta/10 text-accent-terracotta'
                        : 'text-ink-900/70 hover:bg-paper-200/50 dark:text-paper-100/70'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
