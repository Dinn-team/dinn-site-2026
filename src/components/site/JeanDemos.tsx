import { ArrowUp, Check, CheckCheck, ChevronRight, FileText, Lock, Mail, PanelLeft, Plus, SquarePen, X } from 'lucide-react';
import { useDemoT } from './demoI18n';
import { JeanOrb, JeanOrbIcon } from './JeanOrb';
import { Frame, useDemo, type Def, type DemoProps } from './AppDemos';
import { RCard, RFrame, RPage, RSeg } from './RealKit';

// Telas da Jean, animadas com o mesmo motor de AppDemos.tsx e desenhadas com o
// kit fiel ao app (RealKit.tsx + site-real-app.css). Base: a spec de negócio
// "Dinn Atividades e Jean" (30/10/2026) e o plano de Atividades: a pessoa delega
// um acompanhamento, confirma o combinado, controla conexões e autonomia nas
// configurações, vê o trabalho em Atividades e conversa pelo WhatsApp com o
// número da Jean. Dados e nomes fictícios. Não há print real destas telas.
//
// O texto-fonte fica em português. Tudo que aparece na tela passa por `t()`,
// que traduz pelo dicionário demo-i18n/jean.json. Datas e horas usam marcadores
// ({d0511}, {t0942}) para sair no formato de cada idioma.

const MON = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const p2 = (n: number) => String(n).padStart(2, '0');

function useJ() {
  const { t: base, lang } = useDemoT();
  const D = (d: number, m: number) => (lang === 'en' ? `${MON[m]} ${d}` : lang === 'es' ? `${d}/${m}` : `${p2(d)}/${p2(m)}`);
  const DY = (d: number, m: number, y: number) => (lang === 'en' ? `${MON[m]} ${d}, ${y}` : lang === 'es' ? `${d}/${m}/${y}` : `${p2(d)}/${p2(m)}/${y}`);
  const H = (h: number) => (lang === 'en' ? `${h % 12 || 12} ${h < 12 ? 'am' : 'pm'}` : `${h}h`);
  const TM = (hh: number, mm: number) => (lang === 'en' ? `${hh % 12 || 12}:${p2(mm)} ${hh < 12 ? 'am' : 'pm'}` : `${p2(hh)}:${p2(mm)}`);
  const V: Record<string, string> = {
    pa: 'Produto A 20 mg 30 cp', d0511: D(5, 11), d0711: D(7, 11), d2810: D(28, 10), d0211: D(2, 11),
    dy0211: DY(2, 11, 2026), dy0311: DY(3, 11, 2026), h8: H(8), h10: H(10),
    t0830: TM(8, 30), t0831: TM(8, 31), t0855: TM(8, 55), t0903: TM(9, 3), t0904: TM(9, 4), t0941: TM(9, 41), t0942: TM(9, 42),
  };
  const t = (pt: string) => base(pt, V);
  /** Texto digitado pelo cursor: mostra a tradução na mesma proporção do que já foi digitado em português. */
  const typedText = (partial: string | undefined, full: string) => {
    if (partial === undefined) return undefined;
    const out = t(full);
    return partial.length >= full.length ? out : out.slice(0, Math.ceil((partial.length / full.length) * out.length));
  };
  return { t, V, lang, typedText };
}

/** Barra do topo no desenho do app: caminho da página e atalho da Jean. */
function JTop({ crumb, sub, t }: { crumb: string; sub?: string; t: (s: string) => string }) {
  return (
    <header className="rl-top">
      <PanelLeft size={18} className="rl-top-ico" />
      <p className="rl-crumb"><span>{t('Início')}</span><ChevronRight size={14} /><b>{crumb}</b>{sub && <small>{sub}</small>}</p>
      <span className="rl-top-r"><span className="rl-pill rl-pill-jean"><JeanOrbIcon size={15} />Jean</span></span>
    </header>
  );
}

// ── Pedido e combinado ─────────────────────────────────────────────────────
const ASK = 'Acompanha a disponibilidade destes produtos nas minhas redes. Antes das reuniões, prepara os pontos e me chama no WhatsApp.';
// [rótulo, valor, traduzir o valor?]. Nomes de produto e de rede do modo demonstração ficam como estão.
const DEAL: [string, string, boolean][] = [
  ['Objetivo', 'Acompanhar a disponibilidade e preparar as reuniões', true],
  ['Produtos', 'Produto A 20 mg 30 cp · Produto A 40 mg 30 cp', false],
  ['Redes', 'Rede Alfa · Rede Beta', false],
  ['Fontes', 'Dinn (D-1) · Google Calendar · Gmail', true],
  ['Quando', 'Todo dia útil às {h8} e 1 h antes de cada reunião', true],
  ['Canal', 'WhatsApp', false],
  ['Ações', 'Prepara resumos e rascunhos. Envio de e-mail pede aprovação.', true],
];
const SUGGEST = [
  'Prepara minha reunião com a Rede Beta amanhã.',
  'Toda segunda, revisa a disponibilidade e me manda um resumo.',
  'Acompanha a resposta da Rede Alfa e me avisa se o prazo chegar.',
];
const CONVS: [string, string[]][] = [
  ['Hoje', ['Acompanhamento de disponibilidade']],
  ['Últimos 7 dias', ['Prepara minha reunião com a Rede Beta', 'Resumo semanal de disponibilidade']],
  ['Mais antigas', ['Pendências da Rede Alfa', 'Disponibilidade por região']],
];
const CHAT_DEF: Def = {
  beats: [
    { wait: 1200 },
    { to: 'composer', click: true, type: ['q', ASK], phase: 1, wait: 300 },
    { to: 'send', click: true, phase: 2, wait: 1300, cam: 'out' },
    { phase: 3, wait: 2800, cam: { at: 'deal', z: 0.9 } },
    { to: 'activate', click: true, phase: 4, wait: 3400 },
  ],
  steps: [{ phase: 1, to: 'composer' }, { phase: 3, to: 'deal' }, { phase: 3, to: 'activate' }, { phase: 4, to: 'status' }],
  final: 4,
};

export function JeanChatDemo({ step, def = CHAT_DEF }: DemoProps) {
  const { app, phase, typed, cur, tg } = useDemo(def, step);
  const { t, typedText } = useJ();
  const q = phase >= 2 ? '' : typedText(typed.q, ASK) ?? (phase >= 1 ? t(ASK) : '');
  return (
    <RFrame app={app} cur={cur} nav="jean" label={t('Tela da Jean: a pessoa pede um acompanhamento, a Jean mostra o combinado com objetivo, recorte, fontes, canal e ações autorizadas, e a pessoa ativa.')}>
      <div className="rl-page">
        <header className="rl-top"><PanelLeft size={18} className="rl-top-ico" /></header>
        <div className="rl-chat">
          <aside className="rl-convs">
            <span className="rl-newc"><SquarePen size={17} />{t('Nova conversa')}</span>
            <span className="rl-tabs2"><span className="on">{t('Todas')}</span><span>{t('Favoritas')}</span></span>
            {CONVS.map(([g, list]) => (
              <div key={g} style={{ display: 'grid', gap: 2 }}>
                <em>{t(g)}</em>
                {list.map((c, i) => <p key={c} className={g === 'Hoje' && i === 0 && phase >= 2 ? 'on' : ''}>{t(c)}</p>)}
              </div>
            ))}
          </aside>
          <div className="rl-thread">
            <div className="rl-log">
              {phase < 2 ? (
                <div className="jd-hello">
                  <JeanOrb size={42} />
                  <b>{t('Olá, Ana. O que você quer que eu acompanhe?')}</b>
                  <span>{t('Para começar')}</span>
                  <ul className="jd-sug">
                    {SUGGEST.map((s, i) => (
                      <li key={s} className="rl-in" style={{ animationDelay: `${i * 0.08}s` }}>{t(s)}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <p className="rl-u rl-in">{t(ASK)}</p>
                  {phase === 2 && <p className="rl-think rl-in"><JeanOrb size={18} />{t('Entendendo o pedido')}<i /><i /><i /></p>}
                  {phase >= 3 && (
                    <div className="rl-b rl-in">
                      <span><JeanOrb size={18} /></span>
                      <div>
                        <p>{t('Entendi. Confira o combinado antes de eu começar.')}</p>
                        <div className="rl-bcard rl-deal" {...tg('deal')}>
                          <header>
                            <span>{t('Acompanhamento')}</span>
                            {phase >= 4 ? <span className="rl-badge low rl-in" {...tg('status')}>✓ {t('Ativo')}</span> : <span className="rl-badge mod">{t('Rascunho')}</span>}
                          </header>
                          <dl>
                            {DEAL.map(([k, v, tr]) => <div key={k}><dt>{t(k)}</dt><dd>{tr ? t(v) : v}</dd></div>)}
                          </dl>
                          <footer>
                            <span className="rl-gen line">{t('Ajustar')}</span>
                            <span className="rl-gen" {...tg('activate')}>{phase >= 4 ? <><Check size={15} />{t('Acompanhamento ativo')}</> : t('Ativar acompanhamento')}</span>
                          </footer>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="rl-composer" {...tg('composer')}>
              <span className={q ? '' : 'ph'}>{q || t('Peça um acompanhamento, uma rotina ou um relatório…')}</span>
              <div><Plus size={18} /><i className={q ? 'ready' : ''} {...tg('send')}><ArrowUp size={17} /></i></div>
            </div>
            <p className="rl-disc">{t('A Jean pode errar. Verifique os dados importantes.')}</p>
          </div>
        </div>
      </div>
    </RFrame>
  );
}

// ── Configurações: conexões, canais e autonomia ────────────────────────────
const PERMS: [string, boolean][] = [
  ['Ler e-mails ligados aos acompanhamentos', true],
  ['Ver o calendário', true],
  ['Preparar rascunhos e convites', false],
  ['Enviar e-mail e alterar compromissos sem pedir', false],
];
const AUTO: [string, number, boolean?][] = [
  ['Consultar fontes e analisar', 0],
  ['Preparar resumo, relatório ou rascunho', 0],
  ['Enviar e-mail', 1],
  ['Criar ou alterar compromisso', 1],
  ['Assumir compromisso comercial', 2, true],
];
const AUTO_OPTS = ['Sozinha', 'Pede aprovação', 'Encaminha para você'];
const SET_DEF: Def = {
  beats: [
    { wait: 1400 },
    { to: 'ms', click: true, phase: 1, wait: 900 },
    { to: 'perm-2', click: true, phase: 2, wait: 900 },
    { to: 'allow', click: true, phase: 3, wait: 1800 },
    { to: 'tab-auto', click: true, phase: 4, wait: 3800 },
  ],
  steps: [{ phase: 1, to: 'consent' }, { phase: 3, to: 'conns' }, { phase: 4, to: 'auto' }, { phase: 4, to: 'auto' }],
  final: 4,
};

export function JeanSettingsDemo({ step, def = SET_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const { t } = useJ();
  const auto = phase >= 4;
  const ms = phase >= 3;
  const scope = 'Ler e-mails dos acompanhamentos · Ver calendário';
  return (
    <RFrame app={app} cur={cur} nav="jean" h={720} label={t('Configurações da Jean: a pessoa conecta a conta Microsoft escolhendo os acessos e depois define, por tipo de ação, o que a Jean faz sozinha e o que pede aprovação.')}>
      <RPage
        top={<JTop crumb={t('Configurações')} sub={t('Conexões, canais e autonomia')} t={t} />}
        filters={<RSeg items={[t('Conexões'), t('Canais'), t('Autonomia')]} on={auto ? 2 : 0} t={(i) => (i === 2 ? tg('tab-auto') : {})} />}
      >
        {!auto ? (
          <div className="jd-stack" {...tg('conns')}>
            <RCard>
              <div className="jd-conn">
                <span className="jd-ico">G</span>
                <div><b>{t('Gmail e Google Calendar')} <span className="rl-badge low">{t('Conectado')}</span></b><small>ana@exemplo.com.br · {t(scope)}</small></div>
                <span className="rl-gen line">{t('Gerenciar')}</span>
              </div>
            </RCard>
            <RCard>
              <div className="jd-conn">
                <span className="jd-ico">M</span>
                <div>
                  <b>{t('Outlook e calendário Microsoft')} {ms && <span className="rl-badge low rl-in">{t('Conectado')}</span>}</b>
                  <small>{ms ? `ana@exemplo.onmicrosoft.com · ${t(scope)} · ${t('Preparar rascunhos')}` : t('Não conectado')}</small>
                </div>
                <span className={ms ? 'rl-gen line' : 'rl-gen'} {...tg('ms')}>{ms ? t('Gerenciar') : t('Conectar')}</span>
              </div>
            </RCard>
            <RCard>
              <div className="jd-conn">
                <span className="jd-ico jd-logo"><img src="/logo/Dinn_logo_v2_Dark.png" alt="" width={26} height={10} /></span>
                <div><b>Dinn <span className="rl-badge low">{t('Conectado')}</span></b><small>Laboratório Exemplo · {t('Produtos, redes e regiões do seu plano')}</small></div>
                <span className="rl-gen line">{t('Gerenciar')}</span>
              </div>
            </RCard>
            <p className="jd-note"><Lock size={13} />{t('Você pode revogar cada acesso a qualquer momento. Conectar uma conta não autoriza qualquer ação nela.')}</p>
          </div>
        ) : (
          <div className="jd-stack rl-in" {...tg('auto')}>
            <RCard title={t('O que a Jean faz em cada ação')} sub={t('Defina por tipo de ação o que ela faz sozinha e o que pede aprovação.')}>
              <div className="jd-auto">
                {AUTO.map(([label, v, locked]) => (
                  <div key={label} className="jd-auto-row">
                    <span>{t(label)}</span>
                    <span className="rl-seg">
                      {AUTO_OPTS.map((o, i) => (
                        <i key={o} className={i === v ? 'on' : ''}>{locked && i === v && <Lock size={11} />}{t(o)}</i>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </RCard>
            <p className="jd-note"><Lock size={13} />{t('Instruções dentro de e-mails ou documentos não mudam estas regras.')}</p>
          </div>
        )}
      </RPage>
      {(phase === 1 || phase === 2) && (
        <>
          <div className="rl-veil" />
          <div className="jd-consent rl-in" {...tg('consent')}>
            <header><b>{t('Conectar Outlook e calendário Microsoft')}</b><X size={18} /></header>
            <p className="jd-muted">{t('Escolha o que a Jean pode acessar nesta conta.')}</p>
            <ul className="jd-perms">
              {PERMS.map(([label, on], i) => {
                const checked = on || (i === 2 && phase >= 2);
                return (
                  <li key={label} {...tg(`perm-${i}`)}>
                    <i className={checked ? 'on' : ''}>{checked && <Check size={12} strokeWidth={3} />}</i>
                    <span>{t(label)}{i === 3 && <small>{t('Sem isso, a Jean pede aprovação antes de enviar ou alterar.')}</small>}</span>
                  </li>
                );
              })}
            </ul>
            <footer><span className="rl-gen line">{t('Cancelar')}</span><span className="rl-gen" {...tg('allow')}>{t('Permitir')}</span></footer>
          </div>
        </>
      )}
    </RFrame>
  );
}

// ── Atividades: o que precisa de você, o que está em andamento, o entregue ──
type Chip = 'need' | 'run' | 'ok';
type Item = { k: string; title: string; sub: string; chip: [string, Chip] };
const NEED: Item[] = [
  { k: 'item-a', title: 'Aprovar e-mail para a Rede Alfa', sub: 'Rascunho pronto · Pendência de reposição', chip: ['Aguarda você', 'need'] },
  { k: 'item-b', title: 'Rede Beta: queda de disponibilidade', sub: '12 lojas · Produto A 20 mg 30 cp', chip: ['Decisão', 'need'] },
];
const RUN: Item[] = [
  { k: 'item-m', title: 'Reunião com a Rede Beta, {d0511} {h10}', sub: 'Preparando os pontos', chip: ['Em andamento', 'run'] },
  { k: 'item-d', title: 'Disponibilidade · Redes Alfa e Beta', sub: 'Todo dia útil às {h8}', chip: ['Acompanhando', 'run'] },
  { k: 'item-p', title: 'Resposta da Rede Alfa', sub: 'Prazo {d0711}', chip: ['Aguardando resposta', 'run'] },
];
const DONE: Item[] = [
  { k: 'item-e', title: 'E-mail para a Rede Alfa', sub: 'Enviado pela sua conta · {t0942}', chip: ['Entregue', 'ok'] },
  { k: 'item-w', title: 'Resumo semanal de disponibilidade', sub: 'Entregue {d0311} · {h8}', chip: ['Entregue', 'ok'] },
];
const ACT_DEF: Def = {
  beats: [
    { phase: 1, wait: 1300 },
    { to: 'item-a', click: true, phase: 2, wait: 1800 },
    { to: 'approve', click: true, phase: 3, wait: 1500 },
    { to: 'tab-run', click: true, phase: 4, wait: 900 },
    { to: 'item-m', click: true, phase: 5, wait: 2800 },
    { to: 'tab-done', click: true, phase: 6, wait: 3200 },
  ],
  steps: [{ phase: 2, to: 'approve' }, { phase: 4, to: 'list' }, { phase: 5, to: 'detail' }, { phase: 6, to: 'timeline' }],
  final: 6,
};

const chipClass = (c: Chip) => (c === 'need' ? 'rl-badge mod' : c === 'ok' ? 'rl-badge low' : 'rl-badge jd-run');

export function JeanActivitiesDemo({ step, def = ACT_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const { t, V } = useJ();
  const tab = phase >= 6 ? 'done' : phase >= 4 ? 'run' : 'need';
  const need = phase >= 3 ? NEED.slice(1) : NEED;
  const list = tab === 'need' ? need : tab === 'run' ? RUN : DONE;
  const sel = phase === 2 || phase === 3 ? 'item-a' : phase === 5 ? 'item-m' : phase >= 6 ? 'item-e' : '';
  const tabs = [`${t('Precisa de você')} ${need.length}`, `${t('Em andamento')} 3`, t('Concluído')];
  return (
    <RFrame app={app} cur={cur} nav="jean" h={720} label={t('Tela Atividades: a pessoa aprova um e-mail preparado pela Jean, vê a reunião que ela está preparando e o histórico do que já foi entregue.')}>
      <RPage
        top={<JTop crumb={t('Atividades')} sub={t('O trabalho da Jean')} t={t} />}
        filters={<RSeg items={tabs} on={tab === 'need' ? 0 : tab === 'run' ? 1 : 2} t={(i) => (i === 1 ? tg('tab-run') : i === 2 ? tg('tab-done') : {})} />}
      >
        <div className="jd-act">
          <RCard className="jd-listcard" t={tg('list')}>
            <ul className="jd-list">
              {phase >= 1 && list.map((it, i) => (
                <li key={it.k} className={`rl-in ${sel === it.k ? 'on' : ''}`} style={{ animationDelay: `${i * 0.06}s` }} {...tg(it.k)}>
                  <b>{t(it.title)}</b>
                  <small>{t(it.sub)}</small>
                  <span className={chipClass(it.chip[1])}>{t(it.chip[0])}</span>
                </li>
              ))}
            </ul>
          </RCard>
          <RCard className="jd-detail">
            {(phase === 2 || phase === 3) && (
              <div className="rl-in jd-pane">
                <h4>{t('Aprovar e-mail para a Rede Alfa')}</h4>
                <p className="jd-muted">{t('A Jean viu que a resposta sobre a reposição não chegou. Ela preparou uma cobrança.')}</p>
                <div className="jd-mail">
                  <p><em>{t('Para')}</em>compras@redealfa.exemplo</p>
                  <p><em>{t('Assunto')}</em>{t('Reposição do {pa}')}</p>
                  <p className="jd-mail-body">{t('Olá, Carla. Seguimos sem retorno sobre a reposição combinada em {d2810}. A disponibilidade caiu em 9 lojas da rede (dado de {d0211}). Podemos alinhar até {d0711}?')}</p>
                </div>
                {phase === 2 ? (
                  <div className="jd-actions"><span className="rl-gen line">{t('Recusar')}</span><span className="rl-gen line">{t('Editar')}</span><span className="rl-gen" {...tg('approve')}>{t('Aprovar envio')}</span></div>
                ) : (
                  <span className="rl-badge low rl-in jd-sent"><CheckCheck size={13} /> {t('Enviado pela sua conta · {t0942}')}</span>
                )}
              </div>
            )}
            {phase === 5 && (
              <div className="rl-in jd-pane" {...tg('detail')}>
                <h4>{t('Reunião com a Rede Beta, {d0511} {h10}')}</h4>
                <dl className="jd-kv">
                  <div><dt>{t('Objetivo')}</dt><dd>{t('Preparar os pontos da reunião')}</dd></div>
                  <div><dt>{t('O que a Jean fez')}</dt><dd>{t('Leu 3 e-mails da conversa com a Rede Beta. Consultou a disponibilidade em 140 lojas (D-1, {dy0211}). Achou 1 pendência no último e-mail.')}</dd></div>
                  <div><dt>{t('Resultado')}</dt><dd>{t('Resumo pronto para revisar')}</dd></div>
                  <div><dt>{t('Próximo passo')}</dt><dd>{t('Enviar o resumo no WhatsApp, 1 h antes da reunião')}</dd></div>
                </dl>
                <div className="jd-scope"><span><Mail size={12} /> Gmail</span><span>Google Calendar</span><span>Dinn · D-1</span></div>
              </div>
            )}
            {phase >= 6 && (
              <div className="rl-in jd-pane" {...tg('timeline')}>
                <h4>{t('E-mail para a Rede Alfa')}</h4>
                <ol className="jd-line">
                  <li><b>{V.t0830}</b>{t('A Jean viu a pendência sem resposta')}</li>
                  <li><b>{V.t0831}</b>{t('Rascunho pronto para aprovação')}</li>
                  <li><b>{V.t0941}</b>{t('Ana aprovou o envio')}</li>
                  <li><b>{V.t0942}</b>{t('E-mail enviado pela conta da Ana')}</li>
                  <li className="is-next"><b>{t('Próximo')}</b>{t('Acompanhar a resposta até {d0711}')}</li>
                </ol>
              </div>
            )}
            {(phase < 2 || phase === 4) && <p className="jd-empty">{t('Selecione uma atividade.')}</p>}
          </RCard>
        </div>
      </RPage>
    </RFrame>
  );
}

// ── WhatsApp: a conversa com o número da Jean e o mesmo histórico no portal ──
const WA_DEF: Def = {
  beats: [
    { phase: 1, wait: 2400 },
    { phase: 2, wait: 1200 },
    { phase: 3, wait: 1100 },
    { phase: 4, wait: 1400 },
    { to: 'wa-approve', click: true, phase: 5, wait: 900 },
    { phase: 6, wait: 3800 },
  ],
  steps: [{ phase: 1 }, { phase: 4, to: 'wa-approve' }, { phase: 6, to: 'sync' }, { phase: 6, to: 'sync' }],
  final: 6,
};
const SYNC: [number, string, string][] = [
  [1, '{t0855}', 'Resumo da reunião enviado no WhatsApp'],
  [2, '{t0903}', 'Ana pediu um e-mail com os pontos'],
  [4, '{t0904}', 'Rascunho pronto para aprovação'],
  [5, '{t0941}', 'Envio aprovado no WhatsApp'],
  [6, '{t0942}', 'E-mail enviado pela conta da Ana'],
];

export function JeanWhatsAppDemo({ step, def = WA_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const { t, V } = useJ();
  return (
    <Frame app={app} h={560} nav="none" bare kind="rl-app" cur={cur} label={t('Conversa no WhatsApp com o número da Jean: ela envia os pontos da reunião, prepara um e-mail e pede aprovação. Ao lado, o mesmo histórico aparece em Atividades.')}>
      <div className="jd-wa-stage">
        <div className="jd-phone">
          <header><span className="jd-wa-av">J</span><span><b>Jean</b><small>Dinn</small></span></header>
          <div className="jd-wa-log">
            {phase >= 1 && (
              <div className="jd-in rl-in">
                <p>{t('Bom dia, Ana. Preparei os pontos da reunião com a Rede Beta, hoje às {h10}. Achei uma pendência no último e-mail e uma queda de disponibilidade em 12 lojas. Quer revisar?')}</p>
                <span className="jd-wa-card"><FileText size={14} /> {t('Resumo da reunião · Rede Beta')}</span>
                <time>{V.t0855}</time>
              </div>
            )}
            {phase >= 2 && <div className="jd-out rl-in"><p>{t('Prepara também um e-mail com esses pontos.')}</p><time>{V.t0903}</time></div>}
            {phase === 3 && <div className="jd-in jd-typing"><i /><i /><i /></div>}
            {phase >= 4 && (
              <div className="jd-in rl-in">
                <p>{t('Preparei o rascunho para a Rede Beta. Revise antes do envio.')}</p>
                <div className="jd-wa-btns"><span {...tg('wa-approve')}>{t('Aprovar envio')}</span><span>{t('Ver no portal')}</span></div>
                <time>{V.t0904}</time>
              </div>
            )}
            {phase >= 5 && <div className="jd-out rl-in"><p>{t('Aprovar envio')}</p><time>{V.t0941}</time></div>}
            {phase >= 6 && <div className="jd-in rl-in"><p>{t('Enviei pela sua conta às {t0942}. Continuo acompanhando a resposta até {d0711}.')}</p><time>{V.t0942}</time></div>}
          </div>
        </div>
        <RCard className="jd-sync" t={tg('sync')}>
          <p className="jd-muted">{t('Atividades · no portal')}</p>
          <h4>{t('Reunião com a Rede Beta')}</h4>
          <span className={phase === 4 ? 'rl-badge mod' : 'rl-badge jd-run'}>{phase === 4 ? t('Aguarda você') : t('Em andamento')}</span>
          <ol className="jd-line">
            {SYNC.filter(([p]) => phase >= p).map(([, tm, txt]) => <li key={tm} className="rl-in"><b>{t(tm)}</b>{t(txt)}</li>)}
            {phase >= 6 && <li className="is-next rl-in"><b>{t('Próximo')}</b>{t('Acompanhar a resposta até {d0711}')}</li>}
          </ol>
        </RCard>
      </div>
    </Frame>
  );
}
