// PPTX de uma apresentação: um slide 16:9 por slide do artigo, com texto
// editável. Gerado no build por /apresentacoes/<slug>.pptx.
//
// Fonte: Arial. O PowerPoint só mostra bem as fontes instaladas no computador de
// quem abre. Inter e Roboto (as fontes do site) quase nunca estão lá, e a troca
// automática desmancha o encaixe do texto. O PDF embute as fontes da marca.

import pptxgen from 'pptxgenjs';
import type { DeckSlide, PresentationPost } from '@/lib/presentations';
import { articlePath, type Lang } from '@/i18n/routes';
import { presentationLabels } from '@/lib/presentations';
import {
  backgroundJpeg,
  COLOR,
  LOGO_RATIO,
  logoPng,
  PAD,
  quoteParagraphs,
  SLIDE,
  slideParagraphs,
  stripJpeg,
  type Para,
} from '@/lib/presentation-assets';

const FONT = 'Arial';
const IN = 1 / 96; // pixel lógico (1280×720) para polegada (13,333 × 7,5)
const PT = 0.75; // pixel para ponto de fonte

const asData = (type: 'jpeg' | 'png', buffer: Buffer) => `image/${type};base64,${buffer.toString('base64')}`;

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

type TextRun = { text: string; options: pptxgen.TextPropsOptions };

/** Parágrafos para o PowerPoint: cada trecho com seu negrito, uma quebra por parágrafo. */
function runs(paras: Para[], color: string): TextRun[] {
  const out: TextRun[] = [];
  paras.forEach((para, pi) => {
    para.runs.forEach((run, ri) => {
      const last = ri === para.runs.length - 1;
      out.push({
        text: run.text,
        options: {
          bold: Boolean(run.strong),
          color,
          breakLine: last && pi < paras.length - 1,
          ...(para.bullet && ri === 0 ? { bullet: { characterCode: '2022', indent: 18 } } : {}),
        },
      });
    });
  });
  return out;
}

export async function buildPresentationPptx(post: PresentationPost, lang: Lang, site: URL): Promise<Buffer> {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_WIDE'; // 13,333 × 7,5 pol., 16:9
  pptx.title = post.title;
  pptx.subject = post.excerpt || post.title;
  pptx.author = post.authorProfile?.name || post.author || 'Dinn';
  pptx.company = 'Dinn';

  const articleUrl = new URL(articlePath(lang, post.slug.current), site).href;
  const total = post.slides.length;

  const [logoLight, logoDark] = await Promise.all([logoPng('light'), logoPng('dark')]);

  function text(
    slide: pptxgen.Slide,
    content: TextRun[] | string,
    box: Box,
    o: {
      size: number;
      color: string;
      valign?: 'top' | 'middle' | 'bottom';
      lineHeight?: number;
      gap?: number;
      align?: 'left' | 'right';
      link?: string;
    },
  ) {
    slide.addText(content, {
      x: box.x * IN,
      y: box.y * IN,
      w: box.w * IN,
      h: box.h * IN,
      fontFace: FONT,
      fontSize: Math.round(o.size * PT),
      color: o.color,
      valign: o.valign ?? 'top',
      align: o.align ?? 'left',
      margin: 0,
      lineSpacingMultiple: o.lineHeight ?? 1.15,
      paraSpaceAfter: o.gap ? Math.round(o.gap * PT) : 0,
      fit: 'shrink',
      ...(o.link ? { hyperlink: { url: o.link } } : {}),
    });
  }

  function footer(slide: pptxgen.Slide, index: number, tone: 'light' | 'dark', right?: { text: string; url: string }) {
    const h = 26;
    const w = h * LOGO_RATIO;
    const top = SLIDE.h - 48 - h;
    slide.addImage({
      data: asData('png', tone === 'light' ? logoLight : logoDark),
      x: PAD * IN,
      y: top * IN,
      w: w * IN,
      h: h * IN,
    });
    text(
      slide,
      right?.text ?? `${index + 1} / ${total}`,
      { x: SLIDE.w - PAD - 560, y: top, w: 560, h },
      {
        size: 15,
        color: tone === 'light' ? 'C9C9CB' : COLOR.muted,
        valign: 'middle',
        align: 'right',
        link: right?.url,
      },
    );
  }

  async function addSlide(deckSlide: DeckSlide, index: number) {
    const slide = pptx.addSlide();
    const paras = slideParagraphs(deckSlide.blocks);
    const title: TextRun[] = [{ text: deckSlide.title, options: {} }];

    switch (deckSlide.kind) {
      case 'capa':
        slide.background = { data: asData('jpeg', await backgroundJpeg(post.gradient, 0.4)) };
        text(slide, title, { x: PAD, y: 110, w: 1000, h: 350 }, { size: 62, color: COLOR.white, valign: 'bottom', lineHeight: 1.0 });
        text(slide, runs(paras, COLOR.whiteSoft), { x: PAD, y: 488, w: 760, h: 110 }, { size: 24, color: COLOR.whiteSoft, lineHeight: 1.2, gap: 10 });
        footer(slide, index, 'light', { text: presentationLabels(lang).fullArticle, url: articleUrl });
        break;
      case 'sumario':
        slide.background = { data: asData('jpeg', await backgroundJpeg('g03')) };
        text(slide, title, { x: PAD, y: 150, w: 400, h: 200 }, { size: 46, color: COLOR.text, lineHeight: 1.0 });
        text(slide, runs(paras, COLOR.text), { x: 520, y: 150, w: 688, h: 450 }, { size: 20, color: COLOR.text, lineHeight: 1.2, gap: 14 });
        footer(slide, index, 'dark');
        break;
      case 'citacao':
        slide.background = { data: asData('jpeg', await backgroundJpeg(post.gradient, 0.55)) };
        text(slide, title, { x: 100, y: 120, w: 1080, h: 40 }, { size: 20, color: COLOR.whiteSoft });
        text(slide, runs(quoteParagraphs(deckSlide.blocks), COLOR.white), { x: 100, y: 180, w: 1080, h: 430 }, { size: 44, color: COLOR.white, lineHeight: 1.1, gap: 14 });
        footer(slide, index, 'light');
        break;
      default:
        slide.background = { color: COLOR.white };
        slide.addImage({ data: asData('jpeg', await stripJpeg(post.gradient)), x: 0, y: 0, w: 14 * IN, h: SLIDE.h * IN });
        text(slide, title, { x: PAD, y: 170, w: 420, h: 300 }, { size: 50, color: COLOR.text, lineHeight: 1.0 });
        text(slide, runs(paras, COLOR.body), { x: 560, y: 176, w: 648, h: 430 }, { size: 24, color: COLOR.body, lineHeight: 1.25, gap: 12 });
        footer(slide, index, 'dark');
    }
  }

  for (let i = 0; i < post.slides.length; i++) await addSlide(post.slides[i], i);

  return (await pptx.write({ outputType: 'nodebuffer' })) as Buffer;
}
