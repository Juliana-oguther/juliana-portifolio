'use client';

import { motion } from 'framer-motion';
import { ContactInfo } from '@/data/profile';
import { ScrollReveal } from './ScrollReveal';

type SiteLanguage = 'pt' | 'en';

interface FooterAnimatedProps {
  contact: ContactInfo;
  language: SiteLanguage;
}

const contactItems = [
  {
    key: 'email' as const,
    label: { pt: 'Email', en: 'Email' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    getHref: (c: ContactInfo) => `mailto:${c.email}`,
    getValue: (c: ContactInfo, _language: SiteLanguage) => c.email,
  },
  {
    key: 'phone' as const,
    label: { pt: 'Telefone', en: 'Phone' },
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    getHref: (c: ContactInfo) => `tel:${c.phone}`,
    getValue: (c: ContactInfo, _language: SiteLanguage) => c.phone,
  },
  {
    key: 'linkedin' as const,
    label: { pt: 'LinkedIn', en: 'LinkedIn' },
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    getHref: (c: ContactInfo) => c.linkedinUrl || '#',
    getValue: (c: ContactInfo, language: SiteLanguage) =>
      language === 'en' ? 'Professional profile' : 'Perfil profissional',
    show: (c: ContactInfo) => !!c.linkedinUrl,
  },
  {
    key: 'github' as const,
    label: { pt: 'GitHub', en: 'GitHub' },
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    getHref: (c: ContactInfo) => c.githubUrl || '#',
    getValue: (c: ContactInfo, language: SiteLanguage) =>
      language === 'en' ? 'Repositories' : 'Repositórios',
    show: (c: ContactInfo) => !!c.githubUrl,
  },
];

export function FooterAnimated({ contact, language }: FooterAnimatedProps) {
  return (
    <footer id="contact" className="relative scroll-mt-24">
      <ScrollReveal>
        <div className="glass-card overflow-hidden rounded-2xl p-8">
          {/* Decorative corner ornaments */}
          <div className="pointer-events-none absolute left-4 top-4 text-xl text-accent-terracotta/20" aria-hidden="true">❧</div>
          <div className="pointer-events-none absolute bottom-4 right-4 rotate-180 text-xl text-accent-terracotta/20" aria-hidden="true">❧</div>

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">✉️</span>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900 dark:text-paper-50 md:text-3xl">
                {language === 'en' ? 'Contact' : 'Contato'}
              </h2>
            </div>

            <p className="mt-3 max-w-xl text-sm text-ink-800/80 dark:text-paper-100/75 md:text-base">
              {language === 'en'
                ? 'Open to opportunities and professional conversations. Reach out through the channels below:'
                : 'Aberta a oportunidades e conversas profissionais. Entre em contato pelos canais abaixo:'}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item, i) => {
                const shouldShow = item.show ? item.show(contact) : !!item.getValue(contact, language);
                if (!shouldShow) return null;

                return (
                  <motion.a
                    key={item.key}
                    href={item.getHref(contact)}
                    target={item.key === 'linkedin' || item.key === 'github' ? '_blank' : undefined}
                    rel={item.key === 'linkedin' || item.key === 'github' ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="group flex items-center gap-4 rounded-xl border border-paper-300/50 bg-paper-50/50 p-4 transition-all hover:border-accent-teal/50 hover:shadow-glow-sm dark:border-paper-300/15 dark:bg-ink-800/30"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-teal/10 text-accent-teal transition-colors group-hover:bg-accent-teal group-hover:text-paper-50">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-800/60 dark:text-paper-100/50">
                        {item.label[language]}
                      </p>
                      <p className="text-sm font-medium text-ink-900 dark:text-paper-50">
                        {item.getValue(contact, language)}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Copyright */}
      <ScrollReveal delay={0.3}>
        <p className="mt-8 text-center text-xs text-ink-800/50 dark:text-paper-100/40">
          © {new Date().getFullYear()} Juliana de Oliveira Gutierrez —{' '}
          {language === 'en' ? 'Built with Next.js & Tailwind CSS' : 'Construído com Next.js & Tailwind CSS'}
        </p>
      </ScrollReveal>
    </footer>
  );
}
