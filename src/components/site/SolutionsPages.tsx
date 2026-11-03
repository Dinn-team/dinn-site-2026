import { ArrowRight, BarChart3, Headset, Rocket, ShieldCheck, Truck, Users } from 'lucide-react';
import type { ComponentType } from 'react';
import { areaPath } from '@/lib/site-map';

export type Area = {
  slug: string;
  name: string;
  short: string;
  question: string;
  title: string;
  lead: string;
  decisions: string[];
  example: { title: string; steps: string[] };
  limits: string[];
  useCases: string[];
};

const ICONS: Record<string, ComponentType<{ size?: number; 'aria-hidden'?: boolean | 'true' }>> = {
  'inteligencia-pricing': BarChart3,
  'trade-kam-campo': Users,
  'supply-distribuicao': Truck,
  'sac-customer-experience': Headset,
  'marketing-lancamentos': Rocket,
  'ti-dados-governanca': ShieldCheck,
};

export function AreaCard({ area, cta, questionPrefix }: { area: Area; cta: string; questionPrefix: string }) {
  const Icon = ICONS[area.slug] ?? BarChart3;
  return (
    <a className="sp-area" href={areaPath(area.slug)}>
      <span className="sp-area-icon"><Icon size={20} aria-hidden="true" /></span>
      <h3>{area.name}</h3>
      <p className="sp-area-q">{questionPrefix} “{area.question}”</p>
      <p>{area.short}</p>
      <span className="sp-area-go">{cta}<ArrowRight size={15} aria-hidden="true" /></span>
    </a>
  );
}
