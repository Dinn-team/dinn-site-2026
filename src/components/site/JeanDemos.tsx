import { ArrowUp, Check, CheckCheck, FileText, Lock, Mail, X } from 'lucide-react';
import { JeanOrb } from './JeanOrb';
import { Bar, Frame, useDemo, type Def, type DemoProps } from './AppDemos';

// Telas da Jean, animadas com o mesmo motor de AppDemos.tsx. Base: a spec de
// negócio "Dinn Atividades e Jean" (30/10/2026) e o plano de Atividades: a
// pessoa delega um acompanhamento, confirma o combinado, controla conexões e
// autonomia nas configurações, vê o trabalho em Atividades e conversa pelo
// WhatsApp com o número da Jean. Dados e nomes fictícios.

// ── Pedido e combinado ─────────────────────────────────────────────────────
const ASK = 'Acompanha a disponibilidade destes produtos nas minhas redes. Antes das reuniões, prepara os pontos e me chama no WhatsApp.';
const DEAL: [string, string][] = [
  ['Objetivo', 'Acompanhar a disponibilidade e preparar as reuniões'],
  ['Produtos', 'Produto A 20 mg 30 cp · Produto A 40 mg 30 cp'],
  ['Redes', 'Rede Alfa · Rede Beta'],
  ['Fontes', 'Dinn (D-1) · Google Calendar · Gmail'],
  ['Quando', 'Todo dia útil às 8h e 1 h antes de cada reunião'],
  ['Canal', 'WhatsApp'],
  ['Ações', 'Prepara resumos e rascunhos. Envio de e-mail pede aprovação.'],
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
  const q = phase >= 2 ? '' : typed.q ?? (phase >= 1 ? ASK : '');
  return (
    <Frame app={app} h={600} nav="insights" cur={cur} label="Tela da Jean: a pessoa pede um acompanhamento, a Jean mostra o combinado com objetivo, recorte, fontes, canal e ações autorizadas, e a pessoa ativa.">
      <div className="fd-chat">
        {phase < 2 ? (
          <div className="fd-chat-hello">
            <span className="fd-chat-badge"><JeanOrb size={14} /> Jean</span>
            <h3>Olá, Ana. O que você quer que eu acompanhe?</h3>
            <p className="dd-muted">Para começar</p>
            <ul className="fd-suggest">
              {['Prepara minha reunião com a Rede Beta amanhã.', 'Toda segunda, revisa a disponibilidade e me manda um resumo.', 'Acompanha a resposta da Rede Alfa e me avisa se o prazo chegar.'].map((s, i) => (
                <li key={s} className="dd-in" style={{ animationDelay: `${i * 0.08}s` }}>{s}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="fd-chat-log">
            <p className="fd-msg-user dd-in">{ASK}</p>
            {phase === 2 && <p className="fd-thinking"><i /><i /><i /> Entendendo o pedido…</p>}
            {phase >= 3 && (
              <div className="fd-msg-bot dd-in">
                <p>Entendi. Confira o combinado antes de eu começar.</p>
                <div className="jd-deal" {...tg('deal')}>
                  <header><b>Acompanhamento</b>{phase >= 4 ? <span className="da-badge ok dd-in" {...tg('status')}><Check size={11} /> Ativo</span> : <span className="da-badge mod">Rascunho</span>}</header>
                  <dl>
                    {DEAL.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                  </dl>
                  <div className="dd-actions">
                    <span className="dd-btn-out">Ajustar</span>
                    <span className="da-btn" {...tg('activate')}>{phase >= 4 ? 'Acompanhamento ativo' : 'Ativar acompanhamento'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="fd-composer" {...tg('composer')}>
          <span className={q ? '' : 'dd-ph'}>{q || 'Peça um acompanhamento, uma rotina ou um relatório…'}</span>
          <i {...tg('send')}><ArrowUp size={16} /></i>
        </div>
        <p className="fd-chat-note">A Jean pode errar. Verifique os dados importantes.</p>
      </div>
    </Frame>
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
  const auto = phase >= 4;
  const ms = phase >= 3;
  return (
    <Frame app={app} h={560} nav="none" cur={cur} label="Configurações da Jean: a pessoa conecta a conta Microsoft escolhendo os acessos e depois define, por tipo de ação, o que a Jean faz sozinha e o que pede aprovação.">
      <Bar title="Configurações da Jean" sub="Conexões, canais e autonomia" />
      <div className="jd-tabs">
        <span className={!auto ? 'on' : ''}>Conexões</span><span>Canais</span><span className={auto ? 'on' : ''} {...tg('tab-auto')}>Autonomia</span>
      </div>
      {!auto ? (
        <div className="jd-conns" {...tg('conns')}>
          <div className="dd-conn">
            <span className="dd-app-ico jd-g">G</span>
            <div><b>Gmail e Google Calendar <span className="da-badge ok">Conectado</span></b><small>ana@exemplo.com.br · Ler e-mails dos acompanhamentos · Ver calendário</small></div>
            <span className="dd-btn-out">Gerenciar</span>
          </div>
          <div className="dd-conn">
            <span className="dd-app-ico jd-m">M</span>
            <div>
              <b>Outlook e calendário Microsoft {ms && <span className="da-badge ok dd-in">Conectado</span>}</b>
              <small>{ms ? 'ana@exemplo.onmicrosoft.com · Ler e-mails dos acompanhamentos · Ver calendário · Preparar rascunhos' : 'Não conectado'}</small>
            </div>
            <span className={ms ? 'dd-btn-out' : 'da-btn jd-sm'} {...tg('ms')}>{ms ? 'Gerenciar' : 'Conectar'}</span>
          </div>
          <div className="dd-conn">
            <span className="dd-app-ico jd-d"><img src="/logo/Dinn_logo_v2_Light.svg" alt="" width={22} height={9} /></span>
            <div><b>Dinn <span className="da-badge ok">Conectado</span></b><small>Laboratório Exemplo · Produtos, redes e regiões do seu plano</small></div>
            <span className="dd-btn-out">Gerenciar</span>
          </div>
          <p className="fd-scope-note"><Lock size={13} /> Você pode revogar cada acesso a qualquer momento. Conectar uma conta não autoriza qualquer ação nela.</p>
        </div>
      ) : (
        <div className="jd-auto dd-in" {...tg('auto')}>
          <div className="jd-auto-head"><span>Ação</span><span>O que a Jean faz</span></div>
          {AUTO.map(([label, v, locked]) => (
            <div key={label} className="jd-auto-row">
              <span>{label}</span>
              <span className="da-seg">
                {['Sozinha', 'Pede aprovação', 'Encaminha para você'].map((o, i) => (
                  <i key={o} className={i === v ? 'on' : ''}>{locked && i === v && <Lock size={10} />} {o}</i>
                ))}
              </span>
            </div>
          ))}
          <p className="fd-scope-note"><Lock size={13} /> Instruções dentro de e-mails ou documentos não mudam estas regras.</p>
        </div>
      )}
      {(phase === 1 || phase === 2) && (
        <div className="fd-veil">
          <div className="dd-dialog jd-consent dd-in" {...tg('consent')}>
            <header className="fd-cd-head"><b>Conectar Outlook e calendário Microsoft</b><X size={16} /></header>
            <p className="dd-muted">Escolha o que a Jean pode acessar nesta conta.</p>
            <ul className="jd-perms">
              {PERMS.map(([label, on], i) => {
                const checked = on || (i === 2 && phase >= 2);
                return (
                  <li key={label} {...tg(`perm-${i}`)}>
                    <i className={checked ? 'on' : ''}>{checked && <Check size={12} />}</i>
                    <span>{label}{i === 3 && <small>Sem isso, a Jean pede aprovação antes de enviar ou alterar.</small>}</span>
                  </li>
                );
              })}
            </ul>
            <div className="dd-actions"><span className="dd-btn-out">Cancelar</span><span className="da-btn" {...tg('allow')}>Permitir</span></div>
          </div>
        </div>
      )}
    </Frame>
  );
}

// ── Atividades: o que precisa de você, o que está em andamento, o entregue ──
type Item = { k: string; title: string; sub: string; chip: [string, string] };
const NEED: Item[] = [
  { k: 'item-a', title: 'Aprovar e-mail para a Rede Alfa', sub: 'Rascunho pronto · Pendência de reposição', chip: ['Aguarda você', 'mod'] },
  { k: 'item-b', title: 'Rede Beta: queda de disponibilidade', sub: '12 lojas · Produto A 20 mg 30 cp', chip: ['Decisão', 'mod'] },
];
const RUN: Item[] = [
  { k: 'item-m', title: 'Reunião com a Rede Beta, 05/11 10h', sub: 'Preparando os pontos', chip: ['Em andamento', 'low'] },
  { k: 'item-d', title: 'Disponibilidade · Redes Alfa e Beta', sub: 'Todo dia útil às 8h', chip: ['Acompanhando', 'low'] },
  { k: 'item-p', title: 'Resposta da Rede Alfa', sub: 'Prazo 07/11', chip: ['Aguardando resposta', 'low'] },
];
const DONE: Item[] = [
  { k: 'item-e', title: 'E-mail para a Rede Alfa', sub: 'Enviado pela sua conta · 09:42', chip: ['Entregue', 'ok'] },
  { k: 'item-w', title: 'Resumo semanal de disponibilidade', sub: 'Entregue 03/11 · 8h', chip: ['Entregue', 'ok'] },
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

export function JeanActivitiesDemo({ step, def = ACT_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  const tab = phase >= 6 ? 'done' : phase >= 4 ? 'run' : 'need';
  const need = phase >= 3 ? NEED.slice(1) : NEED;
  const list = tab === 'need' ? need : tab === 'run' ? RUN : DONE;
  const sel = phase === 2 || phase === 3 ? 'item-a' : phase === 5 ? 'item-m' : phase >= 6 ? 'item-e' : '';
  return (
    <Frame app={app} h={580} nav="none" cur={cur} label="Tela Atividades: a pessoa aprova um e-mail preparado pela Jean, vê a reunião que ela está preparando e o histórico do que já foi entregue.">
      <Bar title="Atividades" sub="O trabalho da Jean" />
      <div className="jd-tabs">
        <span className={tab === 'need' ? 'on' : ''}>Precisa de você <em>{need.length}</em></span>
        <span className={tab === 'run' ? 'on' : ''} {...tg('tab-run')}>Em andamento <em>3</em></span>
        <span className={tab === 'done' ? 'on' : ''} {...tg('tab-done')}>Concluído</span>
      </div>
      <div className="jd-act">
        <ul className="jd-list" {...tg('list')}>
          {phase >= 1 && list.map((it, i) => (
            <li key={it.k} className={`dd-in ${sel === it.k ? 'on' : ''}`} style={{ animationDelay: `${i * 0.06}s` }} {...tg(it.k)}>
              <b>{it.title}</b>
              <small>{it.sub}</small>
              <span className={`da-badge ${it.chip[1]}`}>{it.chip[0]}</span>
            </li>
          ))}
        </ul>
        <section className="jd-detail">
          {(phase === 2 || phase === 3) && (
            <div className="dd-in jd-pane">
              <h4>Aprovar e-mail para a Rede Alfa</h4>
              <p className="dd-muted">A Jean viu que a resposta sobre a reposição não chegou. Ela preparou uma cobrança.</p>
              <div className="jd-mail">
                <p><em>Para</em>compras@redealfa.exemplo</p>
                <p><em>Assunto</em>Reposição do Produto A 20 mg 30 cp</p>
                <p className="jd-mail-body">Olá, Carla. Seguimos sem retorno sobre a reposição combinada em 28/10. A disponibilidade caiu em 9 lojas da rede (dado de 02/11). Podemos alinhar até 07/11?</p>
              </div>
              {phase === 2 ? (
                <div className="dd-actions"><span className="dd-btn-out">Recusar</span><span className="dd-btn-out">Editar</span><span className="da-btn" {...tg('approve')}>Aprovar envio</span></div>
              ) : (
                <span className="da-badge ok dd-in jd-sent"><CheckCheck size={12} /> Enviado pela sua conta · 09:42</span>
              )}
            </div>
          )}
          {phase === 4 && <p className="dd-muted dd-center">Selecione uma atividade.</p>}
          {phase === 5 && (
            <div className="dd-in jd-pane" {...tg('detail')}>
              <h4>Reunião com a Rede Beta, 05/11 10h</h4>
              <dl className="jd-kv">
                <div><dt>Objetivo</dt><dd>Preparar os pontos da reunião</dd></div>
                <div><dt>O que a Jean fez</dt><dd>Leu 3 e-mails da conversa com a Rede Beta. Consultou a disponibilidade em 140 lojas (D-1, 02/11/2026). Achou 1 pendência no último e-mail.</dd></div>
                <div><dt>Resultado</dt><dd>Resumo pronto para revisar</dd></div>
                <div><dt>Próximo passo</dt><dd>Enviar o resumo no WhatsApp, 1 h antes da reunião</dd></div>
              </dl>
              <div className="fd-scope"><span><Mail size={11} /> Gmail</span><span>Google Calendar</span><span>Dinn · D-1</span></div>
            </div>
          )}
          {phase >= 6 && (
            <div className="dd-in jd-pane" {...tg('timeline')}>
              <h4>E-mail para a Rede Alfa</h4>
              <ol className="jd-line">
                <li><b>08:30</b>A Jean viu a pendência sem resposta</li>
                <li><b>08:31</b>Rascunho pronto para aprovação</li>
                <li><b>09:41</b>Ana aprovou o envio</li>
                <li><b>09:42</b>E-mail enviado pela conta da Ana</li>
                <li className="is-next"><b>Próximo</b>Acompanhar a resposta até 07/11</li>
              </ol>
            </div>
          )}
          {phase < 2 && <p className="dd-muted dd-center">Selecione uma atividade.</p>}
        </section>
      </div>
    </Frame>
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
  [1, '08:55', 'Resumo da reunião enviado no WhatsApp'],
  [2, '09:03', 'Ana pediu um e-mail com os pontos'],
  [4, '09:04', 'Rascunho pronto para aprovação'],
  [5, '09:41', 'Envio aprovado no WhatsApp'],
  [6, '09:42', 'E-mail enviado pela conta da Ana'],
];

export function JeanWhatsAppDemo({ step, def = WA_DEF }: DemoProps) {
  const { app, phase, cur, tg } = useDemo(def, step);
  return (
    <Frame app={app} h={560} nav="none" bare cur={cur} label="Conversa no WhatsApp com o número da Jean: ela envia os pontos da reunião, prepara um e-mail e pede aprovação. Ao lado, o mesmo histórico aparece em Atividades.">
      <div className="jd-wa-stage">
        <div className="jd-phone">
          <header><span className="jd-wa-av">J</span><span><b>Jean</b><small>Dinn</small></span></header>
          <div className="jd-wa-log">
            {phase >= 1 && (
              <div className="jd-in dd-in">
                <p>Bom dia, Ana. Preparei os pontos da reunião com a Rede Beta, hoje às 10h. Achei uma pendência no último e-mail e uma queda de disponibilidade em 12 lojas. Quer revisar?</p>
                <span className="jd-wa-card"><FileText size={14} /> Resumo da reunião · Rede Beta</span>
                <time>08:55</time>
              </div>
            )}
            {phase >= 2 && <div className="jd-out dd-in"><p>Prepara também um e-mail com esses pontos.</p><time>09:03</time></div>}
            {phase === 3 && <div className="jd-in jd-typing"><i /><i /><i /></div>}
            {phase >= 4 && (
              <div className="jd-in dd-in">
                <p>Preparei o rascunho para a Rede Beta. Revise antes do envio.</p>
                <div className="jd-wa-btns"><span {...tg('wa-approve')}>Aprovar envio</span><span>Ver no portal</span></div>
                <time>09:04</time>
              </div>
            )}
            {phase >= 5 && <div className="jd-out dd-in"><p>Aprovar envio</p><time>09:41</time></div>}
            {phase >= 6 && <div className="jd-in dd-in"><p>Enviei pela sua conta às 09:42. Continuo acompanhando a resposta até 07/11.</p><time>09:42</time></div>}
          </div>
        </div>
        <div className="jd-sync" {...tg('sync')}>
          <p className="dd-muted">Atividades · no portal</p>
          <h4>Reunião com a Rede Beta</h4>
          <span className={`da-badge ${phase === 4 ? 'mod' : 'low'}`}>{phase === 4 ? 'Aguarda você' : 'Em andamento'}</span>
          <ol className="jd-line">
            {SYNC.filter(([p]) => phase >= p).map(([, t, txt]) => <li key={t} className="dd-in"><b>{t}</b>{txt}</li>)}
            {phase >= 6 && <li className="is-next dd-in"><b>Próximo</b>Acompanhar a resposta até 07/11</li>}
          </ol>
        </div>
      </div>
    </Frame>
  );
}
