import type { CSSProperties } from 'react';
import type { Lab } from '@/lib/labs-types';

/**
 * Logo do laboratório. Cliente: o arquivo é branco, então a tela pinta o desenho com a cor da
 * marca (máscara). Sem arquivo, mostra o nome em texto, no estilo de marca.
 */
export function LabLogo({ lab, className = '' }: { lab: Lab; className?: string }) {
  if (lab.logo && lab.tint) {
    const style = { ['--m' as string]: `url(${lab.logo})`, ['--c' as string]: lab.tint.color, ['--ar' as string]: `${lab.tint.w} / ${lab.tint.h}` } as CSSProperties;
    return <span className={`lb-logo lb-mask ${className}`} style={style} role="img" aria-label={lab.name} />;
  }
  if (lab.logo) return <img className={`lb-logo ${className}`} src={lab.logo} alt={lab.name} loading="lazy" decoding="async" />;
  return <span className={`lb-word ${className}`}>{lab.name.replace(/ \(.*\)$/, '')}</span>;
}

export const fmtNum = (v: number, lang: string, d = 1) =>
  v.toLocaleString(lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-419' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
