import { Rich } from '@/lib/rich-text';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

// Padrão selo → título → introdução, repetido em todas as seções da home.
export function SectionHeading({ eyebrow, title, intro, tone = 'light', align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`sh sh--${tone} sh--${align}`}>
      {eyebrow && <p className="sh-eyebrow">{eyebrow}</p>}
      <h2 className="sh-title"><Rich text={title} /></h2>
      {intro && <p className="sh-intro">{intro}</p>}
    </div>
  );
}
