'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ResumeFile } from '@/data/profile';

type SiteLanguage = 'pt' | 'en';

interface CVDownloadDropdownProps {
  resumeFiles: ResumeFile[];
  language: SiteLanguage;
}

interface PanelPosition {
  top: number;
  left: number;
  width: number;
}

export function CVDownloadDropdown({ resumeFiles, language }: CVDownloadDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [panelPos, setPanelPos] = useState<PanelPosition | null>(null);
  const [unavailableMsg, setUnavailableMsg] = useState<string>('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* Recalculate panel position whenever dropdown opens, window resizes or scrolls */
  useEffect(() => {
    if (!isOpen) return;

    function updatePosition() {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      setPanelPos({ top: rect.bottom + 8, left: rect.left, width: rect.width });
    }

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  /* Close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  function handleOptionClick(file: ResumeFile, e: React.MouseEvent<HTMLAnchorElement>) {
    if (!file.isAvailable) {
      e.preventDefault();
      setUnavailableMsg(
        language === 'en'
          ? `The ${file.label} resume is temporarily unavailable. Please contact me.`
          : `O currículo em ${file.label} está temporariamente indisponível. Fale comigo pelo contato.`
      );
      setIsOpen(false);
      return;
    }
    setUnavailableMsg('');
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      {/* Trigger button */}
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(188, 108, 76, 0.3)' }}
        whileTap={{ scale: 0.97 }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-accent-terracotta px-6 py-3.5 text-sm font-semibold text-paper-50 shadow-glow-sm transition-all"
      >
        <span className="relative z-10 flex items-center gap-2">
          {/* Download icon */}
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {language === 'en' ? 'Download CV' : 'Baixar CV'}
          {/* Animated chevron */}
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </span>
        {/* Shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </motion.button>

      {/*
        Panel uses position:fixed with coordinates from getBoundingClientRect.
        position:fixed escapes overflow:hidden on any ancestor, so no portal needed.
      */}
      <AnimatePresence>
        {isOpen && panelPos && (
          <motion.ul
            role="listbox"
            aria-label={language === 'en' ? 'Select resume language' : 'Selecionar idioma do currículo'}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: panelPos.top,
              left: panelPos.left,
              minWidth: Math.max(panelPos.width, 180),
              zIndex: 9999,
            }}
            className="overflow-hidden rounded-xl border border-paper-200 bg-[#fcf8ef] shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-[#2b2319]"
          >
            {resumeFiles.map((file, index) => (
              <motion.li
                key={file.language}
                role="option"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a
                  href={file.isAvailable ? file.filePath : undefined}
                  download={file.isAvailable ? file.filename : undefined}
                  onClick={(e) => handleOptionClick(file, e)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className={[
                    'flex w-full items-center gap-3 px-5 py-3.5 text-sm font-medium',
                    file.isAvailable
                      ? 'cursor-pointer text-[#18120c] hover:bg-[#f4ecdc] dark:text-[#fcf8ef] dark:hover:bg-[#18120c]/60'
                      : 'cursor-not-allowed opacity-50',
                    index < resumeFiles.length - 1
                      ? 'border-b border-[#e7d9ba] dark:border-white/10'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <span className="text-base leading-none" aria-hidden="true">
                    {file.flag}
                  </span>
                  <span className="flex-1">{file.label}</span>
                  {file.isAvailable && (
                    <svg
                      className="h-3.5 w-3.5 flex-shrink-0 text-[#bc6c4c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  )}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Unavailability message */}
      <AnimatePresence>
        {unavailableMsg && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            role="status"
            className="mt-2 w-72 rounded-lg border border-[#bc6c4c]/50 bg-[#bc6c4c]/10 px-4 py-3 text-xs text-[#18120c] dark:text-[#fcf8ef]"
          >
            {unavailableMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

