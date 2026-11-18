// Cores de dado, as mesmas do Dinn Manager (lib/rupture-level.ts,
// lib/stock-level-colors.ts). Ficam só nos gráficos e selos: a marca do
// site continua sendo o roxo var(--primary).

export const LEVEL: Record<string, { dot: string; bg: string; fg: string }> = {
  critico: { dot: '#EF4444', bg: '#FEE2E2', fg: '#B91C1C' },
  alto: { dot: '#F97316', bg: '#FFEDD5', fg: '#C2410C' },
  moderado: { dot: '#FACC15', bg: '#FEF3C7', fg: '#B45309' },
  leve: { dot: '#22C55E', bg: '#D1FAE5', fg: '#047857' },
};

export const AVAIL: Record<string, { dot: string; bg: string; fg: string }> = {
  alta: { dot: '#10B981', bg: '#D1FAE5', fg: '#047857' },
  media: { dot: 'var(--primary)', bg: '#EEE9FF', fg: '#4A1FD6' },
  baixa: { dot: '#F59E0B', bg: '#FEF3C7', fg: '#B45309' },
  sem: { dot: '#EF4444', bg: '#FEE2E2', fg: '#B91C1C' },
};

export const SERIES = ['var(--primary)', '#0EA5E9', '#F59E0B', '#10B981', '#EC4899'];
export const TONE: Record<string, string> = {
  sky: '#0EA5E9',
  alert: '#EF4444',
  muted: '#9CA3AF',
  ...Object.fromEntries(Object.entries(LEVEL).map(([k, v]) => [k, v.dot])),
};

const fold = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

/** "Crítico" / "Critical" / "Crítico" → chave de nível. */
export function levelKey(label: string): keyof typeof LEVEL {
  const f = fold(label);
  if (f.startsWith('crit')) return 'critico';
  if (f.startsWith('alt') || f.startsWith('high')) return 'alto';
  if (f.startsWith('mod')) return 'moderado';
  return 'leve';
}

/** "Alta" / "Média" / "Sem estoque" (e traduções) → chave de disponibilidade. */
export function availKey(label: string): keyof typeof AVAIL {
  const f = fold(label);
  if (f.startsWith('sem') || f.startsWith('sin') || f.startsWith('out') || f.startsWith('no ')) return 'sem';
  if (f.startsWith('med') || f.startsWith('mid')) return 'media';
  if (f.startsWith('baix') || f.startsWith('baj') || f.startsWith('low')) return 'baixa';
  return 'alta';
}

export function priorityTone(label: string) {
  const f = fold(label);
  if (f.startsWith('alt') || f.startsWith('high')) return LEVEL.critico;
  if (f.startsWith('med')) return LEVEL.moderado;
  return { dot: '#9CA3AF', bg: '#F3F4F6', fg: '#4B5563' };
}
