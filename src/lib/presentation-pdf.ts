// PDF de uma apresentação: uma página 16:9 por slide, com as fontes da marca.
// Gerado no build por /apresentacoes/<slug>.pdf (ver src/pages/**/[slug].pdf.ts).

import { PDFDocument, PDFString, rgb, type PDFFont, type PDFImage, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import type { DeckSlide, PresentationPost } from '@/lib/presentations';
import { articlePath, type Lang } from '@/i18n/routes';
import { presentationLabels } from '@/lib/presentations';
import {
  backgroundJpeg,
  COLOR,
  loadFont,
  LOGO_RATIO,
  logoPng,
  PAD,
  quoteParagraphs,
  SLIDE,
  slideParagraphs,
  stripJpeg,
  type Para,
} from '@/lib/presentation-assets';

const K = 0.75; // pixel lógico (1280×720) para ponto do PDF (960×540)
const PAGE_W = SLIDE.w * K;
const PAGE_H = SLIDE.h * K;

const hex = (value: string) => {
  const n = parseInt(value, 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

interface Fonts {
  inter: PDFFont;
  interBold: PDFFont;
  display: PDFFont;
}

interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface TextStyle {
  font: 'inter' | 'display';
  size: number;
  minSize: number;
  lineHeight: number;
  color: string;
  valign?: 'top' | 'middle' | 'bottom';
  gap?: number; // espaço entre parágrafos, em px
}

type Word = { text: string; bold: boolean }[];
interface Line {
  words: Word[];
  width: number;
}

/** Divide os trechos de um parágrafo em palavras, mantendo o negrito de cada pedaço. */
function toWords(para: Para, allowBold: boolean): Word[] {
  const words: Word[] = [];
  let current: Word = [];
  for (const run of para.runs) {
    const bold = Boolean(run.strong) && allowBold;
    let chunk = '';
    for (const char of run.text) {
      if (/\s/.test(char)) {
        if (chunk) current.push({ text: chunk, bold });
        chunk = '';
        if (current.length > 0) {
          words.push(current);
          current = [];
        }
      } else chunk += char;
    }
    if (chunk) current.push({ text: chunk, bold });
  }
  if (current.length > 0) words.push(current);
  return words;
}

export async function buildPresentationPdf(post: PresentationPost, lang: Lang, site: URL): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);

  const [interBytes, boldBytes, displayBytes] = await Promise.all([
    loadFont('inter'),
    loadFont('interBold'),
    loadFont('display'),
  ]);
  const fonts: Fonts = {
    inter: await doc.embedFont(interBytes, { subset: true }),
    interBold: await doc.embedFont(boldBytes, { subset: true }),
    display: await doc.embedFont(displayBytes, { subset: true }),
  };

  const articleUrl = new URL(articlePath(lang, post.slug.current), site).href;
  const total = post.slides.length;

  // Cada imagem é embutida uma vez, mesmo que várias páginas a usem.
  const images = new Map<Buffer, PDFImage>();
  const jpg = async (buffer: Buffer) => {
    let image = images.get(buffer);
    if (!image) images.set(buffer, (image = await doc.embedJpg(buffer)));
    return image;
  };
  const png = async (buffer: Buffer) => {
    let image = images.get(buffer);
    if (!image) images.set(buffer, (image = await doc.embedPng(buffer)));
    return image;
  };

  // ---- Texto ----
  function layout(paras: Para[], style: TextStyle, size: number, width: number) {
    const regular = style.font === 'display' ? fonts.display : fonts.inter;
    const space = regular.widthOfTextAtSize(' ', size);
    const indent = size * 1.1;
    const lines: Line[] = [];
    for (const para of paras) {
      const avail = width - (para.bullet ? indent : 0);
      let row: Word[] = [];
      let rowWidth = 0;
      const widthOf = (word: Word) =>
        word.reduce((sum, seg) => {
          const font = seg.bold ? fonts.interBold : regular;
          return sum + font.widthOfTextAtSize(seg.text, size);
        }, 0);
      for (const word of toWords(para, style.font === 'inter')) {
        const w = widthOf(word);
        if (row.length > 0 && rowWidth + space + w > avail) {
          lines.push({ words: row, width: rowWidth });
          row = [];
          rowWidth = 0;
        }
        rowWidth += (row.length > 0 ? space : 0) + w;
        row.push(word);
      }
      if (row.length > 0) lines.push({ words: row, width: rowWidth });
    }
    return lines;
  }

  /** Desenha os parágrafos na caixa, reduzindo o corpo da letra até caber. */
  function drawParas(page: PDFPage, paras: Para[], box: Box, style: TextStyle) {
    if (paras.length === 0) return;
    const regular = style.font === 'display' ? fonts.display : fonts.inter;
    const gap = style.gap ?? 0;

    type Placed = { lines: Line[]; bullet: boolean };
    let size = style.size;
    let placed: Placed[] = [];
    let height = 0;
    for (; size >= style.minSize; size -= 2) {
      placed = paras.map((para) => ({ lines: layout([para], style, size, box.w), bullet: Boolean(para.bullet) }));
      const lineCount = placed.reduce((sum, p) => sum + p.lines.length, 0);
      height = lineCount * size * style.lineHeight + gap * (paras.length - 1);
      if (height <= box.h) break;
    }
    if (size < style.minSize) size = style.minSize;

    const lh = size * style.lineHeight;
    let top = box.y;
    if (style.valign === 'bottom') top = box.y + box.h - height;
    else if (style.valign === 'middle') top = box.y + (box.h - height) / 2;

    const color = hex(style.color);
    const ascent = 0.93;
    const descent = 0.24;
    let y = top;
    for (const p of placed) {
      const indent = p.bullet ? size * 1.1 : 0;
      p.lines.forEach((line, index) => {
        const baseline = y + (lh - (ascent + descent) * size) / 2 + ascent * size;
        let x = box.x + indent;
        if (p.bullet && index === 0) {
          page.drawCircle({
            x: (box.x + size * 0.28) * K,
            y: PAGE_H - (baseline - size * 0.3) * K,
            size: size * 0.15 * K,
            color: hex(COLOR.primary),
          });
        }
        line.words.forEach((word, wi) => {
          for (const seg of word) {
            const font = seg.bold ? fonts.interBold : regular;
            page.drawText(seg.text, { x: x * K, y: PAGE_H - baseline * K, size: size * K, font, color });
            x += font.widthOfTextAtSize(seg.text, size);
          }
          if (wi < line.words.length - 1) x += regular.widthOfTextAtSize(' ', size);
        });
        y += lh;
      });
      y += gap;
    }
  }

  function drawSingle(page: PDFPage, text: string, x: number, baselineTop: number, size: number, font: PDFFont, color: string) {
    page.drawText(text, { x: x * K, y: PAGE_H - baselineTop * K, size: size * K, font, color: hex(color) });
  }

  async function footer(page: PDFPage, index: number, tone: 'light' | 'dark', right?: { text: string; url: string }) {
    const h = 26;
    const w = h * LOGO_RATIO;
    const top = SLIDE.h - 48 - h;
    const logo = await png(await logoPng(tone));
    page.drawImage(logo, { x: PAD * K, y: PAGE_H - (top + h) * K, width: w * K, height: h * K });

    const color = tone === 'light' ? 'C9C9CB' : COLOR.muted;
    const size = 15;
    const text = right?.text ?? `${index + 1} / ${total}`;
    const textWidth = fonts.inter.widthOfTextAtSize(text, size);
    const x = SLIDE.w - PAD - textWidth;
    const baseline = top + h / 2 + size * 0.35;
    drawSingle(page, text, x, baseline, size, fonts.inter, color);
    if (right) {
      const link = doc.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [x * K, PAGE_H - (baseline + 6) * K, (x + textWidth) * K, PAGE_H - (baseline - size) * K],
        Border: [0, 0, 0],
        A: { Type: 'Action', S: 'URI', URI: PDFString.of(right.url) },
      });
      page.node.addAnnot(doc.context.register(link));
    }
  }

  // ---- Um slide por página ----
  async function drawSlide(slide: DeckSlide, index: number) {
    const page = doc.addPage([PAGE_W, PAGE_H]);
    const paras = slideParagraphs(slide.blocks);

    switch (slide.kind) {
      case 'capa': {
        page.drawImage(await jpg(await backgroundJpeg(post.gradient, 0.4)), { x: 0, y: 0, width: PAGE_W, height: PAGE_H });
        drawParas(page, [{ runs: [{ text: slide.title }] }], { x: PAD, y: 110, w: 1000, h: 350 }, {
          font: 'display', size: 64, minSize: 36, lineHeight: 1.05, color: COLOR.white, valign: 'bottom',
        });
        drawParas(page, paras, { x: PAD, y: 488, w: 760, h: 110 }, {
          font: 'inter', size: 24, minSize: 16, lineHeight: 1.4, color: COLOR.whiteSoft, gap: 10,
        });
        await footer(page, index, 'light', { text: presentationLabels(lang).fullArticle, url: articleUrl });
        break;
      }
      case 'sumario': {
        page.drawImage(await jpg(await backgroundJpeg('g03')), { x: 0, y: 0, width: PAGE_W, height: PAGE_H });
        drawParas(page, [{ runs: [{ text: slide.title }] }], { x: PAD, y: 150, w: 400, h: 200 }, {
          font: 'display', size: 48, minSize: 30, lineHeight: 1.08, color: COLOR.text,
        });
        drawParas(page, paras, { x: 520, y: 150, w: 688, h: 450 }, {
          font: 'inter', size: 22, minSize: 13, lineHeight: 1.4, color: COLOR.text, gap: 16,
        });
        await footer(page, index, 'dark');
        break;
      }
      case 'citacao': {
        page.drawImage(await jpg(await backgroundJpeg(post.gradient, 0.55)), { x: 0, y: 0, width: PAGE_W, height: PAGE_H });
        drawParas(page, [{ runs: [{ text: slide.title }] }], { x: 100, y: 120, w: 1080, h: 40 }, {
          font: 'inter', size: 20, minSize: 14, lineHeight: 1.4, color: COLOR.whiteSoft,
        });
        drawParas(page, quoteParagraphs(slide.blocks), { x: 100, y: 180, w: 1080, h: 430 }, {
          font: 'display', size: 46, minSize: 26, lineHeight: 1.2, color: COLOR.white, gap: 16,
        });
        await footer(page, index, 'light');
        break;
      }
      default: {
        page.drawImage(await jpg(await stripJpeg(post.gradient)), { x: 0, y: 0, width: 14 * K, height: PAGE_H });
        drawParas(page, [{ runs: [{ text: slide.title }] }], { x: PAD, y: 170, w: 420, h: 300 }, {
          font: 'display', size: 52, minSize: 30, lineHeight: 1.08, color: COLOR.text,
        });
        drawParas(page, paras, { x: 560, y: 176, w: 648, h: 430 }, {
          font: 'inter', size: 24, minSize: 13, lineHeight: 1.5, color: COLOR.body, gap: 14,
        });
        await footer(page, index, 'dark');
      }
    }
  }

  for (let i = 0; i < post.slides.length; i++) await drawSlide(post.slides[i], i);

  doc.setTitle(post.title);
  doc.setAuthor(post.authorProfile?.name || post.author || 'Dinn');
  doc.setSubject(post.excerpt || post.title);
  doc.setCreator('Dinn');
  doc.setProducer('Dinn');
  doc.setCreationDate(new Date(post.presentation?.generatedAt || post.publishedAt));
  doc.setLanguage(lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-419' : 'en-US');

  return doc.save();
}
