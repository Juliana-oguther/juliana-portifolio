import { Skill } from '@/data/profile';

interface CardSkillProps {
  skill: Skill;
}

const levelStyle: Record<Skill['level'], string> = {
  Básico: 'bg-accent-sage/20 text-ink-900 dark:text-paper-50',
  Intermediário: 'bg-accent-teal/20 text-ink-900 dark:text-paper-50',
  Avançado: 'bg-accent-terracotta/20 text-ink-900 dark:text-paper-50',
};

export function CardSkill({ skill }: CardSkillProps) {
  return (
    <li className="rounded-xl border border-paper-300/70 bg-paper-50/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-paper-300/30 dark:bg-ink-900/30">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium leading-relaxed text-ink-900 dark:text-paper-50 md:text-base">{skill.name}</p>
        <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${levelStyle[skill.level]}`}>
          {skill.level}
        </span>
      </div>
    </li>
  );
}
