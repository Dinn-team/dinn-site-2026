import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Rich } from '@/lib/rich-text';
import { DEMO_URL } from '@/lib/links';

// Peças comuns das páginas internas: cabeçalho da página e chamada final.
// O fundo claro do topo é de propósito: o menu fixo troca de cor conforme o
// fundo que está sob ele.

export function PageHero({
  eyebrow,
  title,
  lead,
  back,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  back?: { label: string; href: string };
  children?: ReactNode;
}) {
  return (
    <header className="sp-hero">
      <div className="wrap sp-hero-inner">
        {back && (
          <a className="sp-back" href={back.href}>
            <ArrowLeft size={15} aria-hidden="true" />
            {back.label}
          </a>
        )}
        <p className="sp-eyebrow">{eyebrow}</p>
        <h1 className="sp-title"><Rich text={title} /></h1>
        {lead && <p className="sp-lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}

export function PageCta({
  title,
  desc,
  button,
  secondary,
}: {
  title: string;
  desc: string;
  button: string;
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="sp-cta" aria-labelledby="sp-cta-title">
      <div className="wrap sp-cta-inner">
        <h2 id="sp-cta-title">{title}</h2>
        <p>{desc}</p>
        <div className="sp-cta-actions">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            {button}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          {secondary && <a href={secondary.href} className="btn btn-on-dark btn-lg">{secondary.label}</a>}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ title, intro, id }: { title: string; intro?: string; id?: string }) {
  return (
    <div className="sp-head">
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
