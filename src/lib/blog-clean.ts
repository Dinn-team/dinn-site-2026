// Limpeza dos textos do blog no build. O conteúdo vem do Sanity e o site só lê (sem token de escrita).
// Alguns artigos trazem rótulos internos de roadmap copiados de uma tabela: "Dinn Stock (disponível)",
// "Dinn Pulse (em desenvolvimento)", "classificado como disponível no portfólio atual". O site novo
// apresenta o produto como entregue e não usa os nomes Pulse, Share e Forecast. Aqui o texto sai limpo:
//  1. tira os rótulos de status entre parênteses e as orações "classificado como disponível...";
//  2. corta a oração final que cita Pulse, Share ou Forecast ("..., enquanto o Dinn Pulse ...");
//  3. remove a frase inteira que ainda cita um desses nomes.
// O corte vale por intervalo de caracteres, então negrito e link do parágrafo continuam no lugar.
// A correção definitiva é no Sanity (reescrever o artigo). Enquanto isso, esta função protege o site.

const STATUS = /\s*\((?:dispon[ií]vel no portf[oó]lio atual|disponible en el portafolio actual|available in the current portfolio|dispon[ií]vel|disponible|available|pr[oó]xima|em desenvolvimento|en desarrollo|in development)\)/i;

const CLAUSES: RegExp[] = [
  /,\s*(?:classificad[oa]s?|classified)\s+(?:como|as)\s+(?:dispon[ií]ve(?:l|is)|available)\s+(?:no|em|in)\s+(?:(?:nosso|o|our|the)\s+)?(?:current\s+)?portf[oó]lio(?:\s+atual)?,/i,
  /,\s*clasificad[oa]s?\s+como\s+disponibles?\s+en\s+(?:nuestro|el)\s+portafolio(?:\s+actual)?,/i,
  /,\s*(?:atualmente dispon[ií]vel|currently available|actualmente disponible)(?:\s+(?:no mercado|on the market|en el mercado))?,/i,
];

// Oração final: ", enquanto o Dinn Pulse ... ." Mantém o ponto final da frase.
const TAIL = /,\s*(?:enquanto|while|mientras que|mientras)\b[^.!?]*Dinn (?:Pulse|Share|Forecast)[^.!?]*(?=[.!?])/i;

// Frase inteira que cita um dos nomes (com o espaço que vem depois).
const SENTENCE = /(?:^|(?<=[.!?]\s))[^.!?]*Dinn (?:Pulse|Share|Forecast)[^.!?]*[.!?]\s*/i;

const WORTH_CHECKING = /Dinn|\(|dispon|available/i;

function firstCut(text: string): [number, number] | null {
  for (const re of [STATUS, ...CLAUSES, TAIL, SENTENCE]) {
    const m = re.exec(text);
    if (m && m[0].length > 0) return [m.index, m.index + m[0].length];
  }
  return null;
}

export function cleanPostText(input: string): string {
  if (!input || !WORTH_CHECKING.test(input)) return input;
  let s = input;
  for (let i = 0; i < 50; i++) {
    const cut = firstCut(s);
    if (!cut) break;
    s = s.slice(0, cut[0]) + s.slice(cut[1]);
  }
  return s.replace(/\s+([,.;:])/g, '$1').replace(/ {2,}/g, ' ').trim();
}

type Child = { _type?: string; text?: string; marks?: string[]; [k: string]: unknown };
type Block = { _type?: string; children?: Child[]; [k: string]: unknown };

function cutRange(spans: Child[], start: number, end: number) {
  let pos = 0;
  for (const c of spans) {
    const t = c.text as string;
    const a = pos;
    pos += t.length;
    const from = Math.max(start, a);
    const to = Math.min(end, pos);
    if (from < to) c.text = t.slice(0, from - a) + t.slice(to - a);
  }
}

/** Aplica a limpeza ao corpo do artigo (blocos do Portable Text) e remove blocos que ficam vazios. */
export function cleanPostBody(body: Block[] | undefined): Block[] | undefined {
  if (!Array.isArray(body)) return body;
  const out: Block[] = [];
  for (const block of body) {
    if (block?._type !== 'block' || !Array.isArray(block.children)) {
      out.push(block);
      continue;
    }
    const allSpans = block.children.every((c) => c?._type === 'span' && typeof c.text === 'string');
    const joined0 = allSpans ? block.children.map((c) => c.text as string).join('') : '';
    if (!allSpans || !WORTH_CHECKING.test(joined0) || !firstCut(joined0)) {
      out.push(block);
      continue;
    }
    const spans = block.children.map((c) => ({ ...c }));
    for (let i = 0; i < 50; i++) {
      const cut = firstCut(spans.map((c) => c.text as string).join(''));
      if (!cut) break;
      cutRange(spans, cut[0], cut[1]);
    }
    // Arruma o espaço que sobra antes de pontuação e o espaço duplo, trecho a trecho.
    for (const c of spans) c.text = (c.text as string).replace(/\s+([,.;:])/g, '$1').replace(/ {2,}/g, ' ');
    const children = spans.filter((c) => (c.text as string) !== '');
    if (children.length === 0 || children.every((c) => (c.text as string).trim() === '')) continue;
    out.push({ ...block, children });
  }
  return out;
}
