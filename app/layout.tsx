import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const themeInitScript = `
(function() {
  try {
    const stored = localStorage.getItem('juliana-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldUseDark);
  } catch (_) {
    document.documentElement.classList.remove('dark');
  }
})();
`;

export const metadata: Metadata = {
  title: 'Juliana de Oliveira Gutierrez | Portfólio Profissional',
  description:
    'Portfólio profissional de Juliana de Oliveira Gutierrez — Analista de Suporte Técnico com foco em Cloud, PACS, DICOM, Integrações Hospitalares e DevOps.',
  openGraph: {
    title: 'Juliana de Oliveira Gutierrez | Portfólio Profissional',
    description:
      'Conheça o perfil profissional da Juliana, suas competências e baixe o currículo em um formato editorial moderno e interativo.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
