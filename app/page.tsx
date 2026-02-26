'use client';

import { useEffect, useMemo, useState } from 'react';
import { useScroll } from 'framer-motion';
import { CardSkillAnimated } from '@/components/CardSkillAnimated';
import { FooterAnimated } from '@/components/FooterAnimated';
import { HeaderAnimated } from '@/components/HeaderAnimated';
import { HeroSection } from '@/components/HeroSection';
import { SectionAnimated } from '@/components/SectionAnimated';
import { OrnamentDivider } from '@/components/OrnamentDivider';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { ParallaxSection, ParallaxDecorLeft, ParallaxDecorRight } from '@/components/ParallaxSection';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { ScrollProgress } from '@/components/ScrollProgress';
import { profile, portfolioSections, resumeFiles, skillCategories, skills } from '@/data/profile';

type SiteLanguage = 'pt' | 'en';

const languageStorageKey = 'juliana-language';

const categoryIcons: Record<string, string> = {
  'support-infra': '🛡️',
  'digital-health': '🏥',
  development: '💻',
  'cloud-devops': '☁️',
};

const sectionTitleByLanguage = {
  pt: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Competências',
    contact: 'Contato',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
  },
} as const;

const categoryNameEnById: Record<string, string> = {
  'support-infra': 'Support & Infrastructure',
  'digital-health': 'Digital Health',
  development: 'Development',
  'cloud-devops': 'Cloud & DevOps',
};

const skillNameEnById: Record<string, string> = {
  'n1-n2-support': 'L1/L2 Technical Support',
  'incident-triage': 'Incident Triage and Diagnosis',
  'service-desk-sla': 'Service Desk with SLA focus',
  'remote-support-anydesk': 'Remote Support (AnyDesk)',
  'pacs-cloud': 'Cloud PACS Operations',
  dicom: 'DICOM Protocol',
  'hospital-integrations': 'Hospital Integrations (Tasy, Totvs, Clinux, VX, RealClinic, MK Data, Navi)',
  'clinical-workflows': 'Digital Health and Telemedicine Workflows',
  'javascript-jquery': 'JavaScript and jQuery',
  'php-laravel': 'PHP and Laravel (MVC)',
  'api-rest': 'REST API Integration',
  postgresql: 'PostgreSQL (queries and maintenance)',
  'python-automation': 'Python for automation (in progress)',
  monitoring: 'Monitoring and Observability',
  'datadog-learning': 'DataDog (in progress)',
  'cloud-foundations': 'Cloud Foundations (AWS, GCP, Azure)',
  'linux-networking': 'Linux and Networking Foundations',
  'devops-concepts': 'SRE/DevOps Concepts',
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const [language, setLanguage] = useState<SiteLanguage>('pt');

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === 'pt' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
      return;
    }
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('en')) {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const localizedProfile = useMemo(
    () =>
      language === 'en'
        ? {
            ...profile,
            headline: 'Technical Support Analyst | Digital Health | PACS, DICOM, and Hospital Integrations',
            location: 'Rio de Janeiro, Brazil',
            summary:
              'Technical Support Analyst with nearly 2 years of experience in monitoring, technical support, incident diagnosis, and support for critical systems. I work with cloud PACS, DICOM, hospital integrations, and L1/L2 support, focused on SLA, operational stability, and customer experience.',
            strengths: [
              'L1/L2 technical support with end-to-end triage and troubleshooting',
              'Hands-on experience with PACS, DICOM, and hospital system integrations',
              'Clear communication with clients and collaboration with development teams',
              'Creation of technical documentation, tutorials, and remote training',
            ],
          }
        : profile,
    [language]
  );

  const localizedSections = useMemo(
    () =>
      portfolioSections.map((section) => ({
        ...section,
        title: sectionTitleByLanguage[language][section.id],
      })),
    [language]
  );

  const localizedCategories = useMemo(
    () =>
      skillCategories.map((category) => ({
        ...category,
        name: language === 'en' ? categoryNameEnById[category.id] || category.name : category.name,
      })),
    [language]
  );

  const localizedSkills = useMemo(
    () =>
      skills.map((skill) => ({
        ...skill,
        name: language === 'en' ? skillNameEnById[skill.id] || skill.name : skill.name,
      })),
    [language]
  );

  const sortedCategories = useMemo(
    () => [...localizedCategories].sort((a, b) => a.displayOrder - b.displayOrder),
    [localizedCategories]
  );

  const skillsByCategory = useMemo(
    () =>
      sortedCategories.map((category) => ({
        category,
        entries: localizedSkills
          .filter((item) => item.categoryId === category.id)
          .sort((a, b) => a.displayOrder - b.displayOrder),
      })),
    [localizedSkills, sortedCategories]
  );

  return (
    <main className="relative min-h-screen bg-parchment-gradient bg-fibers bg-[size:12px_12px] text-ink-900 transition-colors dark:bg-dark-parchment-gradient dark:text-paper-50">
      {/* Global scroll progress bar */}
      <ScrollProgress />

      {/* Floating particles in background */}
      <ParticlesBackground />

      {/* Parallax decorative blobs */}
      <ParallaxDecorLeft scrollYProgress={scrollYProgress} />
      <ParallaxDecorRight scrollYProgress={scrollYProgress} />

      {/* Animated header */}
      <HeaderAnimated
        sections={localizedSections}
        resumeFiles={resumeFiles}
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Main content paper */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-14">
        <article className="paper-sheet parchment-noise aged-edges relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-paper-300/60 bg-paper-50/95 px-5 py-10 shadow-sheet glow-border dark:border-paper-300/20 dark:bg-ink-800/95 md:px-12 md:py-16 lg:px-16">

          {/* ═══════════════════ HERO ═══════════════════ */}
          <ParallaxSection speed={0.15}>
            <HeroSection
              profile={localizedProfile}
              resumeFiles={resumeFiles}
              language={language}
            />
          </ParallaxSection>

          <OrnamentDivider />

          {/* ═══════════════════ SOBRE MIM ═══════════════════ */}
          <ParallaxSection speed={0.1}>
            <SectionAnimated
              id="about"
              title={language === 'en' ? 'About Me' : 'Sobre Mim'}
              subtitle={
                language === 'en'
                  ? 'A professional approach guided by care, clarity, and continuous improvement in the experience of people and teams.'
                  : 'Uma atuação orientada por cuidado, clareza e melhoria contínua na experiência de pessoas e times.'
              }
              icon="📜"
            >
              <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.12}>
                {localizedProfile.strengths.map((strength, i) => (
                  <StaggerItem key={strength}>
                    <div className="group glass-card relative overflow-hidden rounded-xl p-5 transition-all hover:shadow-glow-sm">
                      {/* Numbered badge */}
                      <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent-terracotta/10 font-display text-xs font-bold text-accent-terracotta">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="pr-6 text-sm leading-relaxed text-ink-800/90 dark:text-paper-100/85 md:text-base">
                        {strength}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SectionAnimated>
          </ParallaxSection>

          <OrnamentDivider />

          {/* ═══════════════════ COMPETÊNCIAS ═══════════════════ */}
          <ParallaxSection speed={0.08}>
            <SectionAnimated
              id="skills"
              title={language === 'en' ? 'Skills' : 'Competências'}
              subtitle={
                language === 'en'
                  ? 'Categories organized for quick recruiter review, with declared proficiency levels.'
                  : 'Categorias organizadas para leitura rápida de recrutadores, com nível declarado de proficiência.'
              }
              icon="⚔️"
            >
              <div className="space-y-10">
                {skillsByCategory.map(({ category, entries }) => (
                  <ScrollReveal key={category.id} delay={0.1}>
                    <section aria-labelledby={`category-${category.id}`}>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-xl" aria-hidden="true">
                          {categoryIcons[category.id] || '📁'}
                        </span>
                        <h3
                          id={`category-${category.id}`}
                          className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50 md:text-xl"
                        >
                          {category.name}
                        </h3>
                      </div>

                      {entries.length === 0 ? (
                        <p className="rounded-xl border border-dashed border-paper-300 px-4 py-3 text-sm text-ink-800/80 dark:border-paper-300/30 dark:text-paper-100/80">
                          {language === 'en'
                            ? 'No skills registered for this category at the moment.'
                            : 'Nenhuma competência cadastrada para esta categoria no momento.'}
                        </p>
                      ) : (
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {entries.map((skill, i) => (
                            <CardSkillAnimated key={skill.id} skill={skill} index={i} language={language} />
                          ))}
                        </ul>
                      )}
                    </section>
                  </ScrollReveal>
                ))}
              </div>
            </SectionAnimated>
          </ParallaxSection>

          <OrnamentDivider />

          {/* ═══════════════════ CONTATO ═══════════════════ */}
          <ParallaxSection speed={0.05}>
            <FooterAnimated contact={localizedProfile.contact} language={language} />
          </ParallaxSection>

        </article>
      </div>
    </main>
  );
}
