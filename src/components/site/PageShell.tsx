import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';

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

/** Capa com imagem: a foto ocupa a faixa toda e o texto, em branco, fica por
 *  cima com um véu escuro. `align` escolhe onde o texto cai conforme a foto:
 *  "center" (faixa de baixo, centralizado), "right" (bloco à direita) ou "left"
 *  (embaixo à esquerda). O fundo do bloco é escuro de propósito: o menu fixo
 *  escolhe a logo branca conforme o fundo que está sob ele. */
export function ImageHero({
  src,
  alt = '',
  position = '50% 40%',
  align = 'center',
  eyebrow,
  title,
  lead,
  back,
}: {
  src: string;
  alt?: string;
  position?: string;
  align?: 'center' | 'right' | 'left';
  eyebrow: string;
  title: string;
  lead?: string;
  back?: { label: string; href: string };
}) {
  return (
    <header className={`ih ih--${align}`}>
      <img
        className="ih-img"
        src={src}
        alt={alt}
        width={1671}
        height={941}
        style={{ objectPosition: position }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="wrap ih-inner">
        <div className="ih-copy">
          {back && (
            <a className="sp-back" href={back.href}>
              <ArrowLeft size={15} aria-hidden="true" />
              {back.label}
            </a>
          )}
          <p className="sp-eyebrow">{eyebrow}</p>
          <h1 className="sp-title"><Rich text={title} /></h1>
          {lead && <p className="sp-lead">{lead}</p>}
        </div>
      </div>
    </header>
  );
}

export function PageCta({
  title,
  desc,
  button,
  secondary,
  origin,
}: {
  title: string;
  desc: string;
  button: string;
  secondary?: { label: string; href: string };
  /** Onde esta chamada aparece (vai como `origem` para o formulário). */
  origin?: string;
}) {
  return (
    <section className="sp-cta" aria-labelledby="sp-cta-title">
      <div className="wrap sp-cta-inner">
        <h2 id="sp-cta-title">{title}</h2>
        <p>{desc}</p>
        <div className="sp-cta-actions">
          <a href={contactUrl(origin ?? 'fechamento')} className="btn btn-primary btn-lg">
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
      <h2 id={id}><Rich text={title} /></h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

/** Cabeçalho de seção no padrão da home (`.h2-head.is-stack`): título e apoio.
 *  Use dentro de `.h2-wrap`, em páginas já migradas para o Design System v2. */
export function H2Head({ title, intro, id }: { title: string; intro?: string; id?: string }) {
  return (
    <div className="h2-head is-stack">
      <h2 id={id} className="h2-title"><Rich text={title} /></h2>
      {intro && <p className="h2-sub">{intro}</p>}
    </div>
  );
}

/** Fechamento no padrão v2: cartão em degradê claro (texto escuro) com uma chamada e um botão. */
export function ClosingCard({
  title, desc, button, href, origin, secondary, gradient = 'g03',
}: {
  title: string; desc: string; button: string; href?: string; origin?: string;
  secondary?: { label: string; href: string }; gradient?: string;
}) {
  return (
    <section className="cc" aria-labelledby="cc-title">
      <div className="h2-wrap">
        <div className="cc-card" style={{ ['--cc-g' as string]: `url(/gradients/${gradient}.avif)` }}>
          <h2 id="cc-title">{title}</h2>
          <p>{desc}</p>
          <div className="h2-actions">
            <a className="btn btn-primary" href={href ?? contactUrl(origin ?? 'pagina')}>{button}</a>
            {secondary && <a className="h2-link" href={secondary.href}>{secondary.label} →</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
