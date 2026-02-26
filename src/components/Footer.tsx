import { ContactInfo } from '@/data/profile';

interface FooterProps {
  contact: ContactInfo;
}

export function Footer({ contact }: FooterProps) {
  return (
    <footer id="contact" className="scroll-mt-24 rounded-xl border border-paper-300/70 bg-paper-50/80 p-6 shadow-sm dark:border-paper-300/20 dark:bg-ink-900/30">
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900 dark:text-paper-50">Contato</h2>
      <p className="mt-2 text-sm text-ink-800/90 dark:text-paper-100/80">
        Aberta a oportunidades e conversas profissionais. Você pode me contatar pelos canais abaixo:
      </p>

      <ul className="mt-5 grid gap-3 text-sm md:grid-cols-2">
        <li>
          <span className="font-semibold text-ink-900 dark:text-paper-50">Email: </span>
          <a className="text-accent-teal underline-offset-4 hover:underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </li>

        {contact.phone ? (
          <li>
            <span className="font-semibold text-ink-900 dark:text-paper-50">Telefone: </span>
            <a className="text-accent-teal underline-offset-4 hover:underline" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
          </li>
        ) : null}

        {contact.linkedinUrl ? (
          <li>
            <span className="font-semibold text-ink-900 dark:text-paper-50">LinkedIn: </span>
            <a className="text-accent-teal underline-offset-4 hover:underline" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              Perfil profissional
            </a>
          </li>
        ) : null}

        {contact.githubUrl ? (
          <li>
            <span className="font-semibold text-ink-900 dark:text-paper-50">GitHub: </span>
            <a className="text-accent-teal underline-offset-4 hover:underline" href={contact.githubUrl} target="_blank" rel="noreferrer">
              Repositórios
            </a>
          </li>
        ) : null}
      </ul>
    </footer>
  );
}
