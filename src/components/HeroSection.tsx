'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CVDownloadDropdown } from './CVDownloadDropdown';
import { ProfessionalProfile, ResumeFile } from '@/data/profile';

type SiteLanguage = 'pt' | 'en';

interface HeroSectionProps {
  profile: ProfessionalProfile;
  resumeFiles: ResumeFile[];
  language: SiteLanguage;
}

export function HeroSection({ profile, resumeFiles, language }: HeroSectionProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const profileImageSrc = `${basePath}/profile.jpeg`;
  const photoRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="home" className="relative scroll-mt-24">
      {/* Decorative ink blots */}
      <div className="ink-blot -left-10 -top-10 h-[200px] w-[200px]" />
      <div className="ink-blot -right-10 bottom-0 h-[150px] w-[150px]" />

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        {/* Profile Photo with 3D tilt */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div
            ref={photoRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-shrink-0"
            style={{ perspective: '600px' }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="profile-photo-ring animate-gentle-pulse"
            >
              <div className="relative h-44 w-44 overflow-hidden rounded-full md:h-52 md:w-52">
                <Image
                  src={profileImageSrc}
                  alt={language === 'en' ? `Photo of ${profile.fullName}` : `Foto de ${profile.fullName}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 176px, 208px"
                />
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <ScrollReveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-teal dark:text-accent-teal/80">
              {language === 'en' ? 'Digital Resume' : 'Currículo Digital'}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-shimmer">{profile.fullName}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-lg text-ink-900/80 dark:text-paper-100/90 md:text-xl">
              {profile.headline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-ink-800/70 dark:text-paper-100/70 md:justify-start">
              <span aria-hidden="true">📍</span>
              {profile.location}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-800/90 dark:text-paper-100/85 md:text-lg">
              {profile.summary}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <CVDownloadDropdown resumeFiles={resumeFiles} language={language} />

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-accent-teal px-6 py-3.5 text-sm font-semibold text-accent-teal transition-all hover:bg-accent-teal hover:text-paper-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {language === 'en' ? 'Contact' : 'Contato'}
              </motion.a>
            </div>
          </ScrollReveal>


        </div>
      </div>
    </section>
  );
}
