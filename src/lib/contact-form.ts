// Formulário de contato (/contato): primeira camada do funil de nutrição, o
// estágio "Captado". Envia direto para a API pública de Formulários do HubSpot
// (sem token no navegador), como descrito em
// dinn-admin-app/docs/marketing-hubspot-captura-leads-spec.md (fase 2).
//
// Duas coisas dependem do HubSpot e vêm por variável de ambiente:
//   PUBLIC_HUBSPOT_PORTAL_ID  portal da Dinn (default: 148211224, da spec)
//   PUBLIC_HUBSPOT_FORM_GUID  GUID do formulário criado no HubSpot (sem ele o
//                             envio falha de forma visível, não silenciosa)

const env = import.meta.env as Record<string, string | undefined>;

export const HUBSPOT_PORTAL_ID = env.PUBLIC_HUBSPOT_PORTAL_ID || '148211224';
export const HUBSPOT_FORM_GUID = env.PUBLIC_HUBSPOT_FORM_GUID || '';

/** Nomes das propriedades no HubSpot. Os `dinn_*` são os propostos na spec e
 *  ficam num lugar só: trocar aqui quando os nomes finais forem confirmados. */
export const FIELDS = {
  email: 'email',
  company: 'company',
  firstname: 'firstname',
  role: 'dinn_papel_declarado',
  decision: 'dinn_decisao_interesse',
  origin: 'dinn_origem_marketing',
  channel: 'dinn_canal_origem',
  campaign: 'dinn_campanha_origem',
  content: 'dinn_conteudo_origem',
  language: 'dinn_idioma_contato',
  // Perfil do pedido (rodada de 15/10/2026): o que a pessoa quer contratar.
  // Propriedades a criar no HubSpot e a incluir no formulário; enquanto não
  // existirem, o envio segue com os campos antigos (ver `buildPayload`).
  interest: 'dinn_tipo_contratacao',
  plan: 'dinn_plano_interesse',
  features: 'dinn_funcionalidades_interesse',
  context: 'dinn_contexto_pedido',
} as const;

/** Valor de `dinn_origem_marketing` para quem veio por este formulário. */
export const ORIGIN_VALUE = 'formulario';

export const ROLE_VALUES = ['comercial_trade', 'inteligencia_dados', 'marca_lancamento', 'operacao_campo', 'ti_seguranca_compras', 'direcao', 'outro'] as const;
export const DECISION_VALUES = ['disponibilidade_execucao', 'confianca_dado', 'lancamento', 'preco', 'integracao'] as const;

// O que a pessoa quer fazer: orienta o time sobre o perfil do lead (plano,
// pesquisa avulsa, funcionalidades ou integração) antes do primeiro contato.
export const INTEREST_VALUES = ['conhecer', 'plano', 'funcionalidade', 'integracao', 'pesquisa'] as const;
export const PLAN_VALUES = ['starter', 'essential', 'professional', 'nao_sei'] as const;
export const FEATURE_VALUES = ['tempo_real', 'estimado', 'historico', 'giro_preco', 'distribuicao', 'insights', 'alertas', 'exportacoes'] as const;

export type Interest = { interest: string; plan?: string; features?: string[] };

/** Interesse sugerido pela página de onde a pessoa chegou (`?origem=`). Também
 *  aceita `?interesse=plano&plano=essential` direto no link. */
export function interestFromSearch(search: string): Interest | null {
  const p = new URLSearchParams(search);
  const direct = (p.get('interesse') ?? '').trim();
  if ((INTEREST_VALUES as readonly string[]).includes(direct)) {
    const plan = (p.get('plano') ?? '').trim();
    return { interest: direct, plan: (PLAN_VALUES as readonly string[]).includes(plan) ? plan : undefined };
  }
  const origin = (p.get('origem') ?? '').trim().toLowerCase();
  if (origin.startsWith('plano-')) {
    const plan = origin.slice(6);
    return { interest: 'plano', plan: (PLAN_VALUES as readonly string[]).includes(plan) ? plan : undefined };
  }
  const MAP: Record<string, Interest> = {
    planos: { interest: 'plano' },
    pesquisas: { interest: 'pesquisa' },
    localizador: { interest: 'funcionalidade', features: ['tempo_real'] },
    funcionalidades: { interest: 'funcionalidade' },
    integracoes: { interest: 'integracao' },
    conecta: { interest: 'integracao' },
    cobertura: { interest: 'conhecer' },
  };
  return MAP[origin] ?? null;
}

// Provedores de e-mail pessoal: a spec pede e-mail corporativo (plano §6.7).
const PERSONAL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.com.br', 'outlook.com', 'outlook.com.br', 'live.com', 'msn.com',
  'yahoo.com', 'yahoo.com.br', 'ymail.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'uol.com.br', 'bol.com.br',
  'terra.com.br', 'ig.com.br', 'globo.com', 'globomail.com', 'r7.com', 'zipmail.com.br', 'oi.com.br', 'proton.me',
  'protonmail.com', 'gmx.com', 'mail.com', 'zoho.com',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const isValidEmail = (value: string) => EMAIL_RE.test(value.trim());

export const isPersonalEmail = (value: string) => {
  const domain = value.trim().toLowerCase().split('@')[1] ?? '';
  return PERSONAL_DOMAINS.has(domain);
};

export type ContactValues = {
  email: string;
  company: string;
  role: string;
  decision: string;
  name: string;
  interest: string;
  plan: string;
  features: string[];
  context: string;
};

type Utm = { source: string; medium: string; campaign: string; content: string };

/** Lê os parâmetros UTM da URL atual (convenção da spec: site, linkedin, newsletter…). */
export function readUtm(search: string): Utm {
  const p = new URLSearchParams(search);
  const get = (k: string) => (p.get(k) ?? '').trim().slice(0, 120);
  return {
    source: get('utm_source'),
    medium: get('utm_medium'),
    campaign: get('utm_campaign'),
    // utm_content (links de campanha) ou `origem` (CTAs internos do site)
    content: get('utm_content') || get('origem'),
  };
}

export function buildPayload(values: ContactValues, ctx: { lang: string; pageUri: string; utm: Utm; consentText: string }) {
  const fields: { name: string; value: string }[] = [
    { name: FIELDS.email, value: values.email.trim().toLowerCase() },
    { name: FIELDS.company, value: values.company.trim() },
    { name: FIELDS.role, value: values.role },
    { name: FIELDS.decision, value: values.decision },
    { name: FIELDS.origin, value: ORIGIN_VALUE },
    { name: FIELDS.language, value: ctx.lang },
  ];
  if (values.name.trim()) fields.push({ name: FIELDS.firstname, value: values.name.trim() });
  if (values.interest) fields.push({ name: FIELDS.interest, value: values.interest });
  if (values.interest === 'plano' && values.plan) fields.push({ name: FIELDS.plan, value: values.plan });
  if (values.interest === 'funcionalidade' && values.features.length) {
    // lista de seleção múltipla do HubSpot: valores separados por ponto e vírgula
    fields.push({ name: FIELDS.features, value: values.features.join(';') });
  }
  if (values.context.trim()) fields.push({ name: FIELDS.context, value: values.context.trim().slice(0, 500) });
  const channel = [ctx.utm.source || 'site', ctx.utm.medium || 'organic'].join('/');
  fields.push({ name: FIELDS.channel, value: channel });
  if (ctx.utm.campaign) fields.push({ name: FIELDS.campaign, value: ctx.utm.campaign });
  if (ctx.utm.content) fields.push({ name: FIELDS.content, value: ctx.utm.content });

  return {
    submittedAt: Date.now(),
    fields,
    context: { pageUri: ctx.pageUri, pageName: 'Contato | Dinn' },
    legalConsentOptions: {
      consent: { consentToProcess: true, text: ctx.consentText },
    },
  };
}

export type SubmitResult = { ok: true } | { ok: false; reason: 'not-configured' | 'rejected' | 'network' };

export async function submitToHubSpot(payload: ReturnType<typeof buildPayload>): Promise<SubmitResult> {
  if (!HUBSPOT_FORM_GUID) {
    console.warn('[contato] PUBLIC_HUBSPOT_FORM_GUID não está definido: o envio não foi feito.');
    return { ok: false, reason: 'not-configured' };
  }
  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) },
    );
    return res.ok ? { ok: true } : { ok: false, reason: 'rejected' };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
