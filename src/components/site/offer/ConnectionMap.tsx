import { useEffect, useRef, useState } from 'react';
import { BarChart3, Check, Database, FileText, MessageCircle, Store } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import '@/styles/conecta-page.css';

// Mapa de conexão do Dinn Conecta: três fontes entram no núcleo e saem para o
// BI, a IA e os projetos. É o mesmo desenho na página /produtos/conecta e na
// tela do Conecta da home (ConnectionMapDemo), onde os sinais correm em loop.

type NameSub = { name: string; sub: string };

const WIRES_DESKTOP = [
  'M230 72 C355 72 360 180 500 180',
  'M230 180 H500',
  'M230 288 C355 288 360 180 500 180',
  'M500 180 C640 180 645 72 770 72',
  'M500 180 H770',
  'M500 180 C640 180 645 288 770 288',
];
const WIRES_MOBILE = [
  'M100 60 C100 165 300 140 300 240',
  'M300 60 V240',
  'M500 60 C500 165 300 140 300 240',
  'M300 240 C300 340 100 315 100 420',
  'M300 240 V420',
  'M300 240 C300 340 500 315 500 420',
];
const DELAYS = [0, 0.15, 0.3, 1.2, 1.35, 1.5];

function Wires({ paths, className, viewBox }: { paths: string[]; className: string; viewBox: string }) {
  return (
    <svg className={`connection-lines ${className}`} viewBox={viewBox} preserveAspectRatio="none" fill="none" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d}>
          <path className="wire" d={d} />
          <path className="signal" d={d} pathLength={1000} style={{ ['--delay' as string]: `${DELAYS[i]}s` }} />
        </g>
      ))}
    </svg>
  );
}

/** Superfície do mapa (rótulos, linhas, nós, núcleo e rodapé). */
export function ConnectionSurface() {
  const { t } = useTranslation();
  const L = (key: string) => t(`conecta.${key}`) as string;
  const node = (key: string) => t(`conecta.map.${key}`) as unknown as NameSub;
  const Node = ({ k, icon: I }: { k: string; icon: typeof Store }) => {
    const n = node(k);
    return (
      <div className={`map-node node-${k}`}>
        <I size={24} aria-hidden="true" />
        <div><strong>{n.name}</strong><span>{n.sub}</span></div>
      </div>
    );
  };
  const core = node('core');

  return (
    <div className="connection-surface">
      <div className="map-labels">
        <span>{L('map.sources').toUpperCase()}</span>
        <span>{L('map.environment').toUpperCase()}</span>
      </div>
      <div className="map-stage">
        <Wires paths={WIRES_DESKTOP} className="desktop-lines" viewBox="0 0 1000 360" />
        <Wires paths={WIRES_MOBILE} className="mobile-lines" viewBox="0 0 600 480" />
        <Node k="market" icon={BarChart3} />
        <Node k="company" icon={Database} />
        <Node k="pharmacy" icon={Store} />
        <div className="map-core">
          <div className="core-orbit" aria-hidden="true" />
          <div className="core-content">
            <img src="/logo/Dinn_logo_v2_Light.svg" alt="Dinn" width={94} height={36} loading="lazy" decoding="async" />
            <strong>{core.name}<span>.</span></strong>
            <span>{core.sub}</span>
          </div>
        </div>
        <Node k="bi" icon={BarChart3} />
        <Node k="ai" icon={MessageCircle} />
        <Node k="project" icon={FileText} />
      </div>
      <div className="map-bottom">
        <span><Check size={14} aria-hidden="true" /> {L('map.yours')}</span>
        <span>{L('map.dinn')}</span>
      </div>
    </div>
  );
}

// Tamanho de desenho da tela da home: o mapa é montado em 940 × 520 e escala
// inteiro para a janela, como as telas do Dinn (Frame em AppDemos.tsx).
const MAP_W = 940;
const MAP_H = 520;

/** Tela do Dinn Conecta nas listas de funcionalidades: o mapa com sinais em loop. */
export function ConnectionMapDemo(_: { step?: number }) {
  const { t } = useTranslation();
  const wrap = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.6);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const f = () => setS(el.clientWidth / MAP_W);
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrap} className="cnp cnp-demo" style={{ height: MAP_H * s }} role="img" aria-label={t('conecta.map.aria') as string}>
      <div className="cnp-demo-app" style={{ width: MAP_W, height: MAP_H, transform: `scale(${s})` }}>
        <ConnectionSurface />
      </div>
    </div>
  );
}
