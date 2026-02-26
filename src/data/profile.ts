export type ThemeMode = 'light' | 'dark';

export type SkillLevel = 'Básico' | 'Intermediário' | 'Avançado';

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface ProfessionalProfile {
  fullName: string;
  headline: string;
  location: string;
  summary: string;
  strengths: string[];
  contact: ContactInfo;
}

export interface SkillCategory {
  id: string;
  name: string;
  displayOrder: number;
}

export interface Skill {
  id: string;
  name: string;
  categoryId: string;
  level: SkillLevel;
  displayOrder: number;
}

export interface PortfolioSection {
  id: 'home' | 'about' | 'skills' | 'contact';
  title: string;
  anchor: string;
  displayOrder: number;
  isVisible: boolean;
}

export interface ResumeAsset {
  filePath: string;
  label: string;
  isAvailable: boolean;
  lastUpdated?: string;
}

export type ResumeLanguage = 'pt' | 'en';

export interface ResumeFile {
  language: ResumeLanguage;
  flag: string;
  filePath: string;
  label: string;
  filename: string;
  isAvailable: boolean;
  lastUpdated?: string;
}

export const portfolioSections: PortfolioSection[] = [
  { id: 'home', title: 'Início', anchor: '#home', displayOrder: 1, isVisible: true },
  { id: 'about', title: 'Sobre', anchor: '#about', displayOrder: 2, isVisible: true },
  { id: 'skills', title: 'Competências', anchor: '#skills', displayOrder: 3, isVisible: true },
  { id: 'contact', title: 'Contato', anchor: '#contact', displayOrder: 4, isVisible: true },
];

export const profile: ProfessionalProfile = {
  fullName: 'Juliana de Oliveira Gutierrez',
  headline: 'Analista de Suporte Técnico | Saúde Digital | PACS, DICOM e Integrações Hospitalares',
  location: 'Rio de Janeiro, Brasil',
  summary:
    'Analista de Suporte Técnico com quase 2 anos de experiência em monitoramento, atendimento técnico, diagnóstico de incidentes e suporte a sistemas críticos. Atuo com PACS em nuvem, DICOM, integrações hospitalares e suporte N1/N2, com foco em SLA, estabilidade operacional e experiência do cliente.',
  strengths: [
    'Suporte técnico N1/N2 com triagem e troubleshooting end-to-end',
    'Experiência com PACS, DICOM e integrações com sistemas hospitalares',
    'Comunicação clara com clientes e colaboração com times de desenvolvimento',
    'Criação de documentação técnica, tutoriais e treinamentos remotos',
  ],
  contact: {
    email: 'juliana.oguther@gmail.com',
    phone: '+55 (21) 99669-5856',
    linkedinUrl: 'https://www.linkedin.com/',
  },
};

export const skillCategories: SkillCategory[] = [
  { id: 'support-infra', name: 'Suporte e Infraestrutura', displayOrder: 1 },
  { id: 'digital-health', name: 'Saúde Digital', displayOrder: 2 },
  { id: 'development', name: 'Desenvolvimento', displayOrder: 3 },
  { id: 'cloud-devops', name: 'Cloud e DevOps', displayOrder: 4 },
];

export const skills: Skill[] = [
  { id: 'n1-n2-support', name: 'Suporte Técnico N1/N2', categoryId: 'support-infra', level: 'Avançado', displayOrder: 1 },
  { id: 'incident-triage', name: 'Triagem e Diagnóstico de Incidentes', categoryId: 'support-infra', level: 'Avançado', displayOrder: 2 },
  { id: 'service-desk-sla', name: 'Service Desk com foco em SLA', categoryId: 'support-infra', level: 'Avançado', displayOrder: 3 },
  { id: 'remote-support-anydesk', name: 'Suporte Remoto (AnyDesk)', categoryId: 'support-infra', level: 'Intermediário', displayOrder: 4 },

  { id: 'pacs-cloud', name: 'Operação de PACS em Nuvem', categoryId: 'digital-health', level: 'Avançado', displayOrder: 1 },
  { id: 'dicom', name: 'Protocolo DICOM', categoryId: 'digital-health', level: 'Intermediário', displayOrder: 2 },
  { id: 'hospital-integrations', name: 'Integrações Hospitalares (Tasy, Totvs, Clinux, VX, RealClinic, MK Data, Navi)', categoryId: 'digital-health', level: 'Intermediário', displayOrder: 3 },
  { id: 'clinical-workflows', name: 'Fluxos de Saúde Digital e Telemedicina', categoryId: 'digital-health', level: 'Intermediário', displayOrder: 4 },

  { id: 'javascript-jquery', name: 'JavaScript e jQuery', categoryId: 'development', level: 'Intermediário', displayOrder: 1 },
  { id: 'php-laravel', name: 'PHP e Laravel (MVC)', categoryId: 'development', level: 'Intermediário', displayOrder: 2 },
  { id: 'api-rest', name: 'Integração com APIs REST', categoryId: 'development', level: 'Intermediário', displayOrder: 3 },
  { id: 'postgresql', name: 'PostgreSQL (consultas e manutenção)', categoryId: 'development', level: 'Intermediário', displayOrder: 4 },
  { id: 'python-automation', name: 'Python para automação (em evolução)', categoryId: 'development', level: 'Básico', displayOrder: 5 },

  { id: 'monitoring', name: 'Monitoramento e Observabilidade', categoryId: 'cloud-devops', level: 'Intermediário', displayOrder: 1 },
  { id: 'datadog-learning', name: 'DataDog (em evolução)', categoryId: 'cloud-devops', level: 'Básico', displayOrder: 2 },
  { id: 'cloud-foundations', name: 'Fundamentos de Cloud (AWS, GCP, Azure)', categoryId: 'cloud-devops', level: 'Básico', displayOrder: 3 },
  { id: 'linux-networking', name: 'Fundamentos de Linux e Redes', categoryId: 'cloud-devops', level: 'Intermediário', displayOrder: 4 },
  { id: 'devops-concepts', name: 'Conceitos de SRE/DevOps', categoryId: 'cloud-devops', level: 'Básico', displayOrder: 5 },
];

export const resume: ResumeAsset = {
  filePath: '/cv.pdf',
  label: 'Baixar CV',
  isAvailable: true,
  lastUpdated: '2026-02-15',
};

export const resumeFiles: ResumeFile[] = [
  {
    language: 'pt',
    flag: '🇧🇷',
    filePath: '/Julianacurriculo.pdf',
    label: 'Português',
    filename: 'Julianacurriculo.pdf',
    isAvailable: true,
    lastUpdated: '2026-02-15',
  },
  {
    language: 'en',
    flag: '🇬🇧',
    filePath: '/JulianaITSupport.pdf',
    label: 'English',
    filename: 'JulianaITSupport.pdf',
    isAvailable: true,
    lastUpdated: '2026-02-15',
  },
];

export const colorStudy = {
  concept: 'Paper-first editorial interface',
  palette: [
    {
      name: 'Warm Paper',
      token: 'paper-50 / paper-100',
      hex: ['#fcf8ef', '#f4ecdc'],
      use: 'Plano de fundo principal com textura suave para simular papel físico.',
    },
    {
      name: 'Deep Ink',
      token: 'ink-900 / ink-800',
      hex: ['#18120c', '#2b2319'],
      use: 'Texto primário de alta legibilidade no estilo tinta.',
    },
    {
      name: 'Terracotta Accent',
      token: 'accent.terracotta',
      hex: ['#bc6c4c'],
      use: 'CTA primária e destaques com sensação autoral e humana.',
    },
    {
      name: 'Teal Accent',
      token: 'accent.teal',
      hex: ['#2f706d'],
      use: 'Links, navegação e estados de foco acessíveis.',
    },
    {
      name: 'Sage Support',
      token: 'accent.sage',
      hex: ['#708b75'],
      use: 'Badges e elementos de apoio para equilíbrio visual.',
    },
  ],
};
