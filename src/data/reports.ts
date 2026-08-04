/**
 * Registro dos reports e apresentações do Dinn.
 *
 * Página restrita: /reports não aparece no menu, no rodapé nem nos buscadores
 * (as páginas usam <meta name="robots" content="noindex, nofollow">).
 * Para publicar um novo report, adicione uma entrada aqui e crie a página
 * correspondente em src/pages/reports/<slug>.astro.
 */

export interface ReportHighlight {
  value: string;
  label: string;
}

export interface Report {
  slug: string;
  title: string;
  client: string;
  /** Rótulo curto exibido como categoria no card. */
  category: string;
  excerpt: string;
  /** ISO (YYYY-MM-DD). */
  publishedAt: string;
  href: string;
  highlights?: ReportHighlight[];
}

export const reports: Report[] = [
  {
    slug: 'libbs-1o-ciclo',
    title: 'Dinn Report Libbs — 1º Ciclo',
    client: 'Libbs',
    category: 'Report de ciclo',
    excerpt:
      'Análise dos 17 feedbacks enviados pela equipe Libbs pelo formulário de pesquisa e pelo canal de suporte, com o CSAT do ciclo e as ações tomadas para cada ponto levantado.',
    publishedAt: '2026-07-31',
    href: '/reports/libbs-1o-ciclo',
    highlights: [
      { value: '17', label: 'feedbacks analisados' },
      { value: '3,35', label: 'CSAT de 5,0' },
      { value: '6', label: 'frentes de ação' },
    ],
  },
];

/** Mais recentes primeiro. */
export const reportsByDate: Report[] = [...reports].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
