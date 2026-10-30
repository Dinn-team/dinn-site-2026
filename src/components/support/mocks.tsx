import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowLeft, Check, CheckCheck, ChevronDown, ChevronRight, CircleCheck, CircleX, Home, ImagePlus, LifeBuoy,
  Lock, MapPin, Plus, Search, Send, Sparkles, Store, TrendingUp, TriangleAlert, Truck, UsersRound, X,
} from 'lucide-react';
import { goodRequest, zoeKey } from './content';

// Maquetes do portal (Suporte), reproduzindo as réplicas de
// docs/suporte/reference. Dados fictícios. O CSS está em support-portal.css (.pt).

const ZOE = '/suporte/zoe-256.webp';

/** Desenha o conteúdo na largura natural do portal e reduz para caber na coluna. */
export function Scaled({ width, children }: { width: number; children: ReactNode }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ scale: 1, height: 0 });
  useEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const update = () => {
      const scale = Math.min(1, o.clientWidth / width);
      setState({ scale, height: i.offsetHeight * scale });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [width]);
  return (
    <div ref={outer} className="pt-scaled" style={{ height: state.height || undefined }}>
      <div ref={inner} style={{ width, transform: `scale(${state.scale})`, transformOrigin: 'top left' }}>{children}</div>
    </div>
  );
}

const NAV = [
  { label: 'Início', Icon: Home },
  { label: 'Localizar Produtos', Icon: MapPin },
  { label: 'Mercado', Icon: TrendingUp },
  { label: 'Oportunidades', Icon: Sparkles },
  { label: 'Distribuição', Icon: Truck },
  { label: 'Dinn Insights', Icon: Search },
];

function Sidebar({ active }: { active?: boolean }) {
  return (
    <aside className="sidebar">
      <div className="logo"><img src="/logo/Dinn_logo_v2_Light.svg" alt="Dinn" /></div>
      <nav>
        {NAV.map(({ label, Icon }) => (
          <span key={label} className="nav-item"><Icon className="i" aria-hidden="true" /><span>{label}</span></span>
        ))}
      </nav>
      <div className="support-block">
        <span className={`nav-item ${active ? 'active' : ''}`}><LifeBuoy className="i" aria-hidden="true" /><span>Suporte</span></span>
      </div>
      <div className="spacer" />
      <div className="user">
        <span className="avatar-initials">RC</span>
        <div><div style={{ fontSize: 14, fontWeight: 500 }}>Nome da pessoa</div><div className="muted" style={{ fontSize: 12 }}>Laboratório</div></div>
      </div>
    </aside>
  );
}

export function Portal({ children, supportActive, overlay, label, bare, minHeight }: { children: ReactNode; supportActive?: boolean; overlay?: ReactNode; label?: string; bare?: boolean; minHeight?: number }) {
  return (
    <div className="pt pt-frame" role="img" aria-label={label} style={minHeight ? { minHeight } : undefined}>
      <div className="app">
        {!bare && <Sidebar active={supportActive} />}
        <main className="content">{children}</main>
      </div>
      {overlay}
    </div>
  );
}

const Badge = ({ tone, children }: { tone: string; children: ReactNode }) => <span className={`badge ${tone}`}>{children}</span>;

// ── Lista de pedidos ──────────────────────────────────────────────────────
type TabId = 'andamento' | 'aguardando' | 'encerrados';
export const TABS: { id: TabId; label: string; count: number; dot?: boolean }[] = [
  { id: 'andamento', label: 'Em andamento', count: 2 },
  { id: 'aguardando', label: 'Aguardando você', count: 1, dot: true },
  { id: 'encerrados', label: 'Encerrados', count: 2 },
];

const TICKETS: Record<TabId, { code: string; tone: string; status: string; subject: string; when: string; unread?: boolean }[]> = {
  andamento: [
    { code: 'SAU-0037', tone: 'blue', status: 'Em atendimento', subject: 'Dúvida sobre ruptura do produto no PDV', when: 'Última atividade ontem' },
    { code: 'SAU-0040', tone: 'brand', status: 'Com a equipe Dinn', subject: 'Preciso liberar Dinn Insights para outro usuário', when: 'Última atividade há 3 horas' },
  ],
  aguardando: [
    { code: 'SAU-0042', tone: 'amber', status: 'Aguardando sua resposta', subject: 'Estoque do PDV não atualiza', when: 'Última atividade há 5 minutos', unread: true },
  ],
  encerrados: [
    { code: 'SAU-0031', tone: 'grey', status: 'Encerrado', subject: 'Dúvida sobre ruptura', when: 'Última atividade em 12 de outubro' },
    { code: 'SAU-0028', tone: 'green', status: 'Resolvido', subject: 'Acesso ao Dinn Insights', when: 'Última atividade em 8 de outubro' },
  ],
};

function SupportHeader() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
      <div style={{ minWidth: 0 }}>
        <h1 style={{ fontSize: 24, lineHeight: 1.33, fontWeight: 500 }}>Suporte</h1>
        <p className="muted">Tire dúvidas e resolva problemas com a Zoe, nossa assistente. Quando precisar, a equipe Dinn assume.</p>
      </div>
      <span className="btn"><Plus className="i" aria-hidden="true" />Novo pedido</span>
    </div>
  );
}

export function Guide() {
  return (
    <div className="card">
      <div className="card-header"><div className="card-title"><LifeBuoy className="i muted" aria-hidden="true" />Como abrir um bom pedido</div></div>
      <div className="card-content stack-12">
        <p className="muted">{goodRequest.intro}</p>
        <ul className="guide-items">
          {goodRequest.items.map((t) => <li key={t}><CircleCheck className="i" aria-hidden="true" /><span>{t}</span></li>)}
        </ul>
        <p className="muted">{zoeKey}</p>
      </div>
    </div>
  );
}

export function ListScreen({ tab, onTab, guide = true, closed }: { tab: TabId; onTab?: (t: TabId) => void; guide?: boolean; closed?: boolean }) {
  // `closed`: o pedido SAU-0042 foi encerrado e passa para a aba Encerrados.
  const done: (typeof TICKETS)[TabId][number] = { code: 'SAU-0042', tone: 'grey', status: 'Encerrado', subject: 'Estoque do PDV não atualiza', when: 'Última atividade agora' };
  const items = closed
    ? tab === 'encerrados' ? [done, ...TICKETS.encerrados] : tab === 'aguardando' ? [] : TICKETS[tab]
    : TICKETS[tab];
  const count = (id: TabId, n: number) => (closed ? (id === 'aguardando' ? 0 : id === 'encerrados' ? n + 1 : n) : n);
  return (
    <div className="page">
      <SupportHeader />
      {guide && <Guide />}
      <div className="tabs-gap">
        <div className="tabs-list" role="tablist">
          {TABS.map((t) => {
            const Tag = onTab ? 'button' : 'span';
            return (
              <Tag
                key={t.id}
                className={`tab ${tab === t.id ? 'active' : ''}`}
                {...(onTab ? { type: 'button' as const, role: 'tab', 'aria-selected': tab === t.id, onClick: () => onTab(t.id) } : {})}
              >
                {t.label}<small>({count(t.id, t.count)})</small>{t.dot && !closed && <span className="dot" aria-label="Nova resposta" />}
              </Tag>
            );
          })}
        </div>
        <ul className="ticket-list">
          {items.map((t) => (
            <li key={t.code}>
              <div className="card row" style={{ display: 'block', borderRadius: 24 }}>
                <div className="ticket-link">
                  <div className="ticket-main">
                    <div className="ticket-meta">
                      <span className="code">{t.code}</span>
                      <Badge tone={t.tone}>{t.status}</Badge>
                      {t.unread && <span className="unread-label"><span className="dot" />Nova resposta</span>}
                    </div>
                    <p className={`ticket-subject ${t.unread ? 'strong' : ''}`}>{t.subject}</p>
                    <p className="ticket-when">{t.when}</p>
                  </div>
                  <ChevronRight className="i" aria-hidden="true" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Diálogos ──────────────────────────────────────────────────────────────
export function NewRequestDialog() {
  return (
    <div className="overlay">
      <div className="dialog wide" role="presentation">
        <div className="dialog-header">
          <h2 className="dialog-title">Novo pedido</h2>
          <p className="muted">Conte o que está acontecendo. A Zoe responde aqui mesmo.</p>
        </div>
        <div className="context-box">
          <p>Enviamos junto com o pedido</p>
          <ul><li>Tela: Localizar Produtos</li><li>Erro exibido: ERR-4F2A91</li></ul>
        </div>
        <div className="field"><span className="label">Assunto</span><div className="input placeholder">Ex.: Estoque do PDV não atualiza</div></div>
        <div className="field">
          <span className="label">O que está acontecendo?</span>
          <div className="textarea placeholder" style={{ height: 110 }}>Descreva o problema: o nome e o CNPJ do PDV, o produto, desde quando acontece e o que você esperava ver.</div>
          <p className="counter">0/4000</p>
        </div>
        <div className="field"><span className="label">Tipo de pedido (opcional)</span><div className="select"><span>Erro no sistema</span><ChevronDown className="i" aria-hidden="true" /></div></div>
        <div className="field">
          <span className="label">Print da tela</span>
          <div className="attach-row"><span className="btn outline sm"><ImagePlus className="i" aria-hidden="true" />Anexar print</span><span className="attach-hint">PNG, JPG, WEBP ou GIF. Até 3 imagens. Reduzimos o tamanho sozinhos.</span></div>
        </div>
        <div className="dialog-footer"><span className="btn outline">Cancelar</span><span className="btn">Enviar pedido</span></div>
        <span className="btn ghost icon-sm x"><X className="i" aria-hidden="true" /></span>
      </div>
    </div>
  );
}

export function EndDialog() {
  return (
    <div className="overlay">
      <div className="dialog" role="presentation">
        <div className="dialog-header">
          <h2 className="dialog-title">Encerrar este pedido?</h2>
          <p className="muted">Um pedido encerrado não pode ser reaberto. Se precisar de ajuda depois, abra um novo pedido.</p>
        </div>
        <div className="dialog-footer"><span className="btn outline">Voltar</span><span className="btn destructive">Encerrar pedido</span></div>
        <span className="btn ghost icon-sm x"><X className="i" aria-hidden="true" /></span>
      </div>
    </div>
  );
}

// ── Conversa ──────────────────────────────────────────────────────────────
function ZoeAvatar() {
  return <img className="zoe-avatar" src={ZOE} alt="" width={32} height={32} />;
}

export function ConversationScreen({ variant = 'zoe' }: { variant?: 'zoe' | 'team' }) {
  const team = variant === 'team';
  return (
    <div className="page tight">
      <span className="back"><ArrowLeft className="i" aria-hidden="true" />Voltar para Suporte</span>
      <div className="conv-head">
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
            <span className="code" style={{ fontSize: 14 }}>{team ? 'SAU-0040' : 'SAU-0042'}</span>
            <Badge tone={team ? 'brand' : 'blue'}>{team ? 'Com a equipe Dinn' : 'Em atendimento'}</Badge>
          </div>
          <h1 className="conv-title">{team ? 'Preciso liberar Dinn Insights para outro usuário' : 'Estoque do PDV não atualiza'}</h1>
        </div>
        <span className="btn outline sm"><CircleX className="i" aria-hidden="true" />Encerrar pedido</span>
      </div>
      {team && <p className="notice">Seu pedido foi encaminhado para a equipe Dinn. Eles respondem por aqui.</p>}
      <div className="card flush">
        <div className="messages" role="log">
          {team ? (
            <>
              <div className="day">29 de outubro de 2026</div>
              <div className="msg mine"><div className="bubble mine"><p className="who"><b>Você</b><time>14:20</time></p><p className="text">Preciso liberar o Dinn Insights para a Maria.</p><p className="receipt read"><CheckCheck className="i" aria-hidden="true" /><span>Lida</span></p></div></div>
              <div className="msg"><ZoeAvatar /><div className="bubble"><p className="who"><b>Zoe</b><time>14:21</time></p><p className="text">Entendi, obrigada. Alterar acesso precisa de uma pessoa da equipe. Encaminhei seu pedido com todo o contexto para eles.</p></div></div>
              <p className="day">Pedido encaminhado à equipe Dinn</p>
              <div className="msg"><span className="team-avatar"><UsersRound className="i" aria-hidden="true" /></span><div className="bubble team"><p className="who"><b>Equipe Dinn</b><time>15:02</time></p><p className="text">Oi! Já liberamos o acesso. Pode conferir e nos dizer se apareceu?</p></div></div>
            </>
          ) : (
            <>
              <div className="day">30 de outubro de 2026</div>
              <div className="msg mine"><div className="bubble mine"><p className="who"><b>Você</b><time>10:02</time></p><p className="text">O estoque da Drogaria Exemplo (CNPJ 00.000.000/0001-00) está parado desde segunda. Segue o print.</p><div className="attach-row"><div className="shot">print-da-tela.png</div></div><p className="receipt read"><CheckCheck className="i" aria-hidden="true" /><span>Lida</span></p></div></div>
              <div className="msg"><ZoeAvatar /><div className="bubble"><p className="who"><b>Zoe</b><time>10:03</time></p><p className="text">Olá, obrigada por avisar. Conferi o cadastro da Drogaria Exemplo e vi que a última leitura de estoque foi na segunda-feira. Vou olhar o produto que você citou antes de te responder.</p></div></div>
              <div className="msg mine"><div className="bubble mine"><p className="who"><b>Você</b><time>10:05</time></p><p className="text">É o Produto A, EAN 7890000000000.</p><p className="receipt"><Check className="i" aria-hidden="true" /><span>Enviada</span></p></div></div>
              <div className="typing"><ZoeAvatar /><div><p className="word"><span>Conferindo o estoque</span><span className="support-dots" aria-hidden="true"><span /><span /><span /></span></p></div></div>
            </>
          )}
        </div>
      </div>
      <div className="composer">
        <div className="textarea placeholder" style={{ height: 70 }}>Escreva sua resposta</div>
        {!team && <div className="attach-row"><span className="btn outline sm"><ImagePlus className="i" aria-hidden="true" />Anexar print</span></div>}
        <div className="composer-foot"><span>0/4000</span><span className="btn" style={{ opacity: 0.5 }}><Send className="i" aria-hidden="true" />Enviar</span></div>
      </div>
    </div>
  );
}

// ── Entradas ──────────────────────────────────────────────────────────────
export function ErrorScreen() {
  return (
    <div className="err-wrap">
      <div className="card">
        <div className="err-body">
          <TriangleAlert className="i muted" style={{ width: 32, height: 32 }} aria-hidden="true" />
          <h1>Algo deu errado nesta tela</h1>
          <p className="muted">Tente de novo. Se o problema continuar, abra um pedido no Suporte: enviamos junto a tela e o código do erro.</p>
          <p className="mono-break">Código do erro: ERR-4F2A91</p>
          <div className="err-actions"><span className="btn">Tentar de novo</span><span className="btn outline">Abrir pedido no Suporte</span></div>
        </div>
      </div>
    </div>
  );
}

export function LockedScreen() {
  return (
    <div className="lock-page">
      <div className="lock-circle"><Lock className="i" aria-hidden="true" /></div>
      <p className="locked-help">Dúvidas sobre esta funcionalidade? <span className="support-link">Suporte</span></p>
    </div>
  );
}

export function MenuHint() {
  return (
    <div className="card">
      <div className="card-content center">
        <Store className="i muted" style={{ width: 28, height: 28 }} aria-hidden="true" />
        <p style={{ fontWeight: 500 }}>Qualquer tela do portal</p>
        <p className="muted">O item <b>Suporte</b> fica no menu lateral, abaixo das telas do produto.</p>
      </div>
    </div>
  );
}

