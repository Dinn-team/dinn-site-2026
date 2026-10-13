// Motor da conversa simulada do topo da página. Não chama servidor nenhum:
// lê a pergunta, reconhece o assunto (qual time perguntaria isso) e o recorte
// (cidade/estado e produto), e escolhe um dos roteiros do dicionário.
// Os números dos roteiros são de exemplo; o que é "real" é o raciocínio.

export type Column = { label: string; kind?: 'num' | 'level' | 'avail' | 'verdict' };
export type Widget =
  | { type: 'table'; title: string; columns: Column[]; rows: string[][] }
  | { type: 'kpis'; title: string; items: { label: string; value: string; tone?: 'good' | 'bad' }[] }
  | { type: 'trend'; title: string; unit: string; labels: string[]; series: { name: string; points: number[]; dashed?: boolean; tone?: string }[] }
  | { type: 'bars'; title: string; unit: string; rows: { label: string; value: number; tone?: string }[] }
  | { type: 'actions'; title: string; items: { priority: string; title: string; why: string; how: string }[] };

export type Scenario = {
  keywords?: string[];
  steps: string[];
  answer: string;
  widget?: Widget;
  method: string[];
  links: { label: string; href: string }[];
  followups: string[];
};

export type Context = { place: string | null; product: string | null };

// Lugares reconhecidos na pergunta. A forma escrita aqui é a que aparece na
// resposta; a comparação ignora acentos e maiúsculas.
const PLACES = [
  'São Paulo', 'Campinas', 'Santos', 'Sorocaba', 'Ribeirão Preto', 'São José dos Campos', 'Guarulhos',
  'Osasco', 'Santo André', 'São Bernardo do Campo', 'Rio de Janeiro', 'Niterói', 'Belo Horizonte',
  'Uberlândia', 'Juiz de Fora', 'Contagem', 'Curitiba', 'Londrina', 'Maringá', 'Porto Alegre', 'Caxias do Sul',
  'Florianópolis', 'Joinville', 'Blumenau', 'Goiânia', 'Anápolis', 'Brasília', 'Salvador', 'Feira de Santana',
  'Recife', 'Olinda', 'Fortaleza', 'Manaus', 'Belém', 'Vitória', 'Vila Velha', 'Natal', 'João Pessoa', 'Maceió',
  'Aracaju', 'Teresina', 'São Luís', 'Cuiabá', 'Campo Grande', 'Palmas', 'Porto Velho', 'Macapá', 'Boa Vista',
  'Rio Branco', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Bahia', 'Pernambuco', 'Ceará',
  'Goiás', 'Pará', 'Amazonas', 'Espírito Santo', 'Mato Grosso do Sul', 'Mato Grosso', 'Distrito Federal',
  'Paraíba', 'Alagoas', 'Sergipe', 'Piauí', 'Maranhão', 'Tocantins', 'Rondônia',
  'Nordeste', 'Sudeste', 'Centro-Oeste', 'Norte', 'Sul', 'Grande São Paulo', 'interior paulista',
  // espanhol / inglês para as versões traduzidas
  'Ciudad de México', 'Mexico City', 'Monterrey', 'Guadalajara', 'Puebla', 'Mérida', 'Tijuana',
  'Querétaro', 'León', 'Jalisco', 'Nuevo León', 'Yucatán', 'Estado de México', 'Bajío',
  'Northeast', 'Southeast', 'South', 'Midwest', 'North', 'Noreste', 'Sureste',
];

const UFS = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

// Palavras com inicial maiúscula que não são nome de produto.
const NOT_PRODUCT = new Set(
  ['dinn', 'sac', 'cd', 'cds', 'dc', 'dcs', 'cedis', 'i', 'we', 'our', 'sku', 'skus', 'pdv', 'pdvs', 'rede', 'redes', 'brasil', 'brazil', 'méxico', 'mexico', 'trade', 'kam',
    'gdn', 'crm', 'erp', 'bi', 'api', 'mcp', 'ia', 'ai', 'chatgpt', 'claude', 'copilot', 'gemini', 'power', 'iqvia',
    'close-up', 'insights', 'manager', 'conecta', 'qual', 'quais', 'onde', 'como', 'quem', 'quanto', 'quantos',
    'quantas', 'por', 'meu', 'minha', 'o', 'a', 'e', 'em', 'de', 'do', 'da', 'se', 'eu', 'sou', 'what', 'where',
    'which', 'who', 'how', 'is', 'my', 'dónde', 'donde', 'cuál', 'cual', 'cuáles', 'mi', 'el', 'la', 'semana', 'hoje'],
);

const stripAccents = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '');
const fold = (s: string) => stripAccents(s).toLowerCase();

// Palavras de nomes de lugar nunca são lidas como produto ("Belém do Pará").
const NOT_PRODUCT_FOLDED = new Set([...NOT_PRODUCT].map(fold));
const PLACE_WORDS = new Set(PLACES.flatMap((p) => fold(p).split(/\s+/)));

// Lugares que também são palavras comuns ("dá para", "natal", "vitória",
// "zona sul"): só valem com inicial maiúscula e fora do começo da frase.
const AMBIGUOUS = new Set(['South', 'North', 'León', 'Pará', 'Natal', 'Vitória', 'Palmas', 'Santos', 'Salvador', 'Sul', 'Norte', 'Contagem']);

export function extractContext(question: string): Context {
  const q = fold(question);
  const plain = stripAccents(question);
  let place: string | null = null;
  // o nome mais longo vence: "Mato Grosso do Sul" antes de "Mato Grosso", "Rio Grande do Sul" antes de "Sul"
  for (const p of [...PLACES].sort((a, b) => b.length - a.length)) {
    if (AMBIGUOUS.has(p)) {
      const m = new RegExp(`(^|[^A-Za-z])${stripAccents(p)}([^A-Za-z]|$)`).exec(plain);
      if (m && m.index > 0) { place = p; break; }
      continue;
    }
    const re = new RegExp(`(^|[^a-z])${fold(p).replace(/[-]/g, '\\-')}([^a-z]|$)`);
    if (re.test(q)) { place = p; break; }
  }
  if (!place) {
    const uf = question.match(new RegExp(`\\b(${UFS.join('|')})\\b`));
    if (uf) place = uf[1];
  }

  // Produto: primeira palavra com inicial maiúscula (fora o começo da frase)
  // que não seja lugar nem termo do setor. Ex.: "Onde encontro Xarelto em Recife?"
  let product: string | null = null;
  const placeWords = new Set(place ? fold(place).split(/\s+/) : []);
  const tokens = question.replace(/[?!.,;:()"“”]/g, ' ').split(/\s+/).filter(Boolean);
  for (let i = 1; i < tokens.length; i++) {
    const tk = tokens[i];
    const f = fold(tk);
    if (!/^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(tk) || NOT_PRODUCT_FOLDED.has(f) || placeWords.has(f) || PLACE_WORDS.has(f) || UFS.includes(tk)) continue;
    // nome composto com dosagem: "Produto X 20 mg"
    let name = tk;
    const next = tokens[i + 1];
    const unit = tokens[i + 2];
    if (next && /^\d+([.,]\d+)?(mg|ml|g)?$/i.test(next)) {
      name += ` ${next}`;
      if (unit && /^(mg|ml|g|mcg)$/i.test(unit)) name += ` ${unit}`;
    }
    product = name;
    break;
  }
  return { place, product };
}

/** Escolhe o roteiro pela soma de palavras-chave encontradas na pergunta. */
export function pickScenario(question: string, scenarios: Record<string, Scenario>): string {
  const q = ` ${fold(question)} `;
  let best = 'fallback';
  let bestScore = 0;
  for (const [id, sc] of Object.entries(scenarios)) {
    if (!sc.keywords) continue;
    let score = 0;
    for (const k of sc.keywords) {
      if (q.includes(fold(k))) score += k.length > 5 ? 2 : 1;
    }
    // "dinn" aparece em muita pergunta: só decide quando nada mais casa
    if (id === 'sobre') score *= 0.5;
    if (score > bestScore) { best = id; bestScore = score; }
  }
  return best;
}

export function fill(text: string, ctx: Context, defaults: { place: string; product: string }) {
  return text
    .replaceAll('{lugar}', ctx.place ?? defaults.place)
    .replaceAll('{produto}', ctx.product ?? defaults.product);
}

/** Aplica o recorte a todo o roteiro (texto, widget e métodos). */
export function fillScenario(sc: Scenario, ctx: Context, defaults: { place: string; product: string }): Scenario {
  const f = (s: string) => fill(s, ctx, defaults);
  const walk = (v: unknown): unknown => {
    if (typeof v === 'string') return f(v);
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(sc) as Scenario;
}
