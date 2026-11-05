import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import type { Lab, LogoCredit } from '@/lib/labs-types';
import { LabLogo, fmtNum } from './LabsParts';

// /laboratorios: ranking dos maiores laboratórios do mundo (por receita) e dos laboratórios com
// medicamento ativo no Brasil (por registros na Anvisa). Tabela sem bordas laterais: posição,
// logo com a bandeira do país, nome, se é cliente, gráfico de receita e valor. Ao passar o mouse
// sobre a linha aparece o botão de contato, que leva ao formulário com a origem `lab-<slug>`
// (o HubSpot lê a origem; ver src/lib/links.ts e contact-form.ts). No toque o botão fica visível.

const PAGE = 30;

function Spark({ series }: { series: [number, number][] }) {
  const w = 150, h = 36, pad = 4;
  const vs = series.map((p) => p[1]);
  const lo = Math.min(...vs), hi = Math.max(...vs);
  const x = (i: number) => pad + (i * (w - pad * 2)) / Math.max(1, series.length - 1);
  const y = (v: number) => pad + (1 - (hi === lo ? 0.5 : (v - lo) / (hi - lo))) * (h - pad * 2);
  const d = series.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p[1]).toFixed(1)}`).join('');
  const last = series.length - 1;
  return (
    <svg className="lb-spark" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <path className="a" d={`${d}L${x(last)},${h}L${x(0)},${h}Z`} />
      <path className="l" d={d} />
      <circle cx={x(last)} cy={y(series[last][1])} r="3" />
    </svg>
  );
}

const initials = (n: string) => n.replace(/\(.*\)/, '').split(/\s+/).filter((w) => /^[A-Za-zÀ-ú]/.test(w)).slice(0, 2).map((w) => w[0].toUpperCase()).join('');

function Row({ lab, max, lang }: { lab: Lab; max: number; lang: string }) {
  const { t } = useTranslation();
  const src = lab.source ? new URL(lab.source).hostname.replace('www.', '') : undefined;
  return (
    <tr id={lab.slug} className={`${lab.rank <= 3 ? 'is-top' : ''} ${lab.client ? 'is-client' : ''}`}>
      <td className="c-rank">{lab.rank}</td>
      <td className="c-lab">
        <div className="lb-lab">
          <span className="lb-badge">
            {lab.logo ? <LabLogo lab={lab} /> : <span className="lb-mono">{initials(lab.name)}</span>}
            <img className="lb-flag" src={`/flags/${lab.cc}.svg`} alt={lab.country} title={lab.country} width={20} height={20} loading="lazy" />
          </span>
          <span className="lb-name"><span className="lb-name-line"><b>{lab.name}</b>{lab.client && <span className="lb-client-tag"><i />{t('home2.labs.page.clientTag')}</span>}</span><small>{lab.country}</small></span>
        </div>
      </td>
      <td className="c-spark">
        {lab.group === 'global' && lab.series ? <Spark series={lab.series} /> : lab.regs ? <span className="lb-bar"><i style={{ width: `${Math.max(2, (lab.regs / max) * 100)}%` }} /></span> : null}
      </td>
      <td className="c-val" title={src}>
        {lab.group === 'global' && lab.revenueBn != null ? (
          <span className="lb-val">
            <b>{(t('home2.labs.page.revenue') as string).replace('{v}', fmtNum(lab.revenueBn, lang))}</b>
            <small>{lab.year}</small>
          </span>
        ) : (
          <span className="lb-val"><b>{lab.regs}</b><small>{t('home2.labs.page.colRegsVal')}</small></span>
        )}
      </td>
      <td className="c-act">
        {lab.client && (
          <a className="lb-act" href={`/clientes/${lab.client}`} aria-label={`${t('home2.labs.client')}: ${lab.name}`} title={t('home2.labs.client') as string}>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        )}
      </td>
    </tr>
  );
}

export function LabsRanking({ labs, credits }: { labs: Lab[]; credits: LogoCredit[] }) {
  const { t, lang } = useTranslation();
  const [tab, setTab] = useState<'global' | 'brasil' | 'clientes'>('global');
  const [q, setQ] = useState('');
  const [shown, setShown] = useState(PAGE);
  const legal = useRef<HTMLDialogElement>(null);
  const cc = credits.filter((c) => !/public domain/i.test(c.license));

  const global = useMemo(() => labs.filter((l) => l.group === 'global'), [labs]);
  const brasil = useMemo(() => labs.filter((l) => l.group === 'brasil'), [labs]);
  const clientList = useMemo(() => ['lilly', 'sanofi', 'eurofarma', 'libbs', 'marjan'].map((k) => labs.find((l) => l.client === k)).filter(Boolean).map((l, i) => ({ ...(l as Lab), rank: i + 1 })), [labs]);

  const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const base = tab === 'global' ? global : tab === 'brasil' ? brasil : clientList;
  const list = base.filter((l) => !q || norm(l.name).includes(norm(q)));
  const visible = tab === 'brasil' ? list.slice(0, shown) : list;
  const max = brasil[0]?.regs ?? 1;

  return (
    <section id="ranking" className="h2-section lb-page lb-sec" aria-labelledby="lb-rank-title">
        <div className="h2-wrap">
          <div className="h2-head is-stack">
            <h2 id="lb-rank-title" className="h2-title">{t('home2.labs.page.title')}</h2>
            <p className="h2-sub">{t('home2.labs.page.lead')}</p>
          </div>
          <div className="lb-controls">
            <div className="lb-tabs" role="tablist">
              {(['global', 'brasil', 'clientes'] as const).map((k) => (
                <button key={k} type="button" role="tab" aria-selected={tab === k} onClick={() => { setTab(k); setShown(PAGE); }}>
                  {k === 'global' ? t('home2.labs.page.tabGlobal') : k === 'brasil' ? t('home2.labs.page.tabBrasil') : t('home2.labs.page.tabClients')}
                </button>
              ))}
            </div>
            <label className="lb-search">
              <Search size={16} aria-hidden="true" />
              <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setShown(PAGE); }} placeholder={t('home2.labs.page.search') as string} aria-label={t('home2.labs.page.search') as string} />
            </label>
          </div>
          <p className="lb-table-note">{tab === 'global' ? t('home2.labs.page.globalSub') : tab === 'brasil' ? t('home2.labs.page.brasilSub') : t('home2.labs.page.clientsSub')}</p>
          <table className="lb-table">
            <thead>
              <tr>
                <th>#</th><th>{t('home2.labs.page.colLab')}</th>
                <th className="c-spark">{tab === 'brasil' ? t('home2.labs.page.colRegs') : t('home2.labs.page.colRevenue')}</th>
                <th className="num">{tab === 'brasil' ? t('home2.labs.page.colRegsVal') : t('home2.labs.page.colRevenueVal')}</th><th />
              </tr>
            </thead>
            <tbody>{visible.map((l) => <Row key={l.slug} lab={l} max={max} lang={lang} />)}</tbody>
          </table>
          {visible.length === 0 && <p className="lb-empty">{t('home2.labs.page.noResult')}</p>}
          {tab === 'brasil' && list.length > shown && (
            <div className="lb-more"><button type="button" onClick={() => setShown((n) => n + PAGE * 2)}>{t('home2.labs.page.more')} ({list.length - shown})</button></div>
          )}
          <p className="lb-legal-line">
            {t('home2.labs.page.legalShort')}{' '}
            <button type="button" onClick={() => legal.current?.showModal()}>{t('home2.labs.page.legalLink')}</button>
          </p>
          <dialog
            ref={legal}
            className="lb-legal-modal"
            aria-labelledby="lb-legal-title"
            onClick={(e) => { if (e.target === legal.current) legal.current?.close(); }}
          >
            <div className="lb-legal-box">
              <h3 id="lb-legal-title">{t('home2.labs.page.legalTitle')}</h3>
              <p>{t('home2.labs.page.disclaimer')}</p>
              <p>{t('home2.labs.page.sources')}</p>
              {cc.length > 0 && (
                <div>
                  <h4>{t('home2.labs.page.credits')}</h4>
                  <ul>{cc.map((c) => <li key={c.name}>{c.name}: <a href={c.page} rel="noopener noreferrer">{c.title.replace('File:', '')}</a>, {c.license}</li>)}</ul>
                </div>
              )}
              <button type="button" className="lb-legal-close" onClick={() => legal.current?.close()}>{t('home2.labs.page.close')}</button>
            </div>
          </dialog>
        </div>
    </section>
  );
}
