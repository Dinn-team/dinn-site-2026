// Rotas dos arquivos de uma apresentação (PDF e PPTX), uma por idioma e formato.
// Cada arquivo em src/pages/**/[slug].pdf.ts e [slug].pptx.ts só liga isto.
// Os arquivos saem prontos no build, ao lado das páginas: /apresentacoes/<slug>.pdf

import type { APIRoute } from 'astro';
import type { Lang } from '@/i18n/routes';
import { getPresentations, type PresentationPost } from '@/lib/presentations';
import { buildPresentationPdf } from '@/lib/presentation-pdf';
import { buildPresentationPptx } from '@/lib/presentation-pptx';
import { downloadName } from '@/lib/presentation-assets';

const TYPES = {
  pdf: 'application/pdf',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
} as const;

export function presentationFileRoute(lang: Lang, format: 'pdf' | 'pptx') {
  async function getStaticPaths() {
    const posts = await getPresentations(lang);
    return posts.map((post) => ({ params: { slug: post.slug.current }, props: { post } }));
  }

  const GET: APIRoute = async ({ props, site }) => {
    const post = props.post as PresentationPost;
    const origin = site ?? new URL('https://dinn.ai');
    const bytes =
      format === 'pdf'
        ? await buildPresentationPdf(post, lang, origin)
        : await buildPresentationPptx(post, lang, origin);
    // Cópia em ArrayBuffer próprio: é o tipo que o Response aceita como corpo.
    const body = new Uint8Array(bytes.byteLength);
    body.set(bytes);
    return new Response(body, {
      headers: {
        'Content-Type': TYPES[format],
        'Content-Disposition': `attachment; filename="${downloadName(post.slug.current, format)}"`,
      },
    });
  };

  return { getStaticPaths, GET };
}
