import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { FlowField } from './FlowField';
import { useLive } from './useLive';

// Herói: a cena do Dinn no topo (da fábrica à farmácia e à compra online), o
// H1 por cima do rio e das árvores, e a base da imagem se dissolvendo no fundo
// escuro da página. A cena é uma imagem só; a vida vem de camadas por cima,
// recortadas por máscaras geradas da própria imagem (água, neon da esteira,
// hologramas, céu). Tudo em CSS/SVG: sem vídeo, sem biblioteca.
// As máscaras e texturas ficam em public/hero/.

const SCENE_W = 1672;
const SCENE_H = 941;

// 5 colunas das "barras" do Dinn, cada uma acende com um atraso: onda de cálculo
const BARS = [0, 1, 2, 3, 4];
const BARS_X0 = 742;
const BARS_W = 176 / BARS.length;
const pct = (x: number) => `${(x / SCENE_W) * 100}%`;

function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  useLive(ref); // fora da tela, as animações dormem

  return (
    <div className="dh-scene" ref={ref} aria-hidden="true">
      <img
        className="dh-scene-img"
        src="/hero/cena-dinn.webp"
        width={SCENE_W}
        height={SCENE_H}
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      {/* nuvens extras, só onde há céu */}
      <div className="dh-fx dh-fx-sky"><i /><i /><i /><i /></div>

      {/* rio: veios e brilhos correndo no sentido da correnteza */}
      <div className="dh-fx dh-fx-water"><div className="dh-flow dh-flow-a" /><div className="dh-flow dh-flow-b" /><div className="dh-flow dh-flow-c" /></div>
      <div className="dh-fx dh-fx-fall"><div className="dh-flow" /></div>

      {/* esteira: pulsos de luz percorrendo o neon, da fábrica ao cliente */}
      <div className="dh-fx dh-fx-belt"><div className="dh-sweep" /></div>

      {/* hologramas: respiram e são varridos por uma linha de leitura */}
      <div className="dh-fx dh-fx-holo"><div className="dh-holo-glow" /><div className="dh-holo-scan" /></div>
      <div className="dh-fx dh-fx-bars">
        {BARS.map((k) => (
          <i
            key={k}
            style={{
              clipPath: `inset(0 ${pct(SCENE_W - BARS_X0 - (k + 1) * BARS_W)} 0 ${pct(BARS_X0 + k * BARS_W)})`,
              animationDelay: `${k * 0.16}s`,
            }}
          />
        ))}
      </div>

      {/* detalhes pontuais: bolhas no frasco, sinal saindo do Dinn, pedido no tablet */}
      <svg className="dh-fx-svg" viewBox={`0 0 ${SCENE_W} ${SCENE_H}`} preserveAspectRatio="none">
        <g className="dh-bubbles">
          <circle cx="178" cy="296" r="3.2" />
          <circle cx="190" cy="304" r="2.4" style={{ animationDelay: '-0.9s' }} />
          <circle cx="170" cy="310" r="2" style={{ animationDelay: '-1.7s' }} />
          <circle cx="196" cy="292" r="2.6" style={{ animationDelay: '-2.4s' }} />
        </g>
        <g className="dh-data">
          <circle cx="792" cy="392" r="2.6" />
          <circle cx="812" cy="388" r="2" style={{ animationDelay: '-0.7s' }} />
          <circle cx="834" cy="394" r="2.8" style={{ animationDelay: '-1.4s' }} />
          <circle cx="858" cy="390" r="2.2" style={{ animationDelay: '-2.1s' }} />
          <circle cx="824" cy="398" r="2" style={{ animationDelay: '-2.8s' }} />
        </g>
        <ellipse className="dh-ring dh-ring-dinn" cx="831" cy="478" rx="130" ry="34" />
        <ellipse className="dh-ring dh-ring-dinn dh-ring-late" cx="831" cy="478" rx="130" ry="34" />
        <circle className="dh-ring dh-ring-order" cx="1609" cy="452" r="9" />
        <circle className="dh-ring dh-ring-order dh-ring-late" cx="1609" cy="452" r="9" />
      </svg>

      <div className="dh-scene-fade" />
    </div>
  );
}

type Logo = { name: string; src: string; width?: number; height?: number };

export function HeroSection({ logos = [] }: { logos?: Logo[] }) {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="dh">
      <div className="dh-vignette" aria-hidden="true" />
      <HeroScene />
      <FlowField />

      <div className="wrap dh-inner">
        <span className="dh-pill"><i />{t('hero.pill')}</span>
        <h1 className="dh-title"><Rich text={t('hero.title') as string} /></h1>
        <p className="dh-desc">{t('hero.description')}</p>
        <div className="dh-actions">
          <a href="/plataforma" className="btn btn-primary btn-lg">
            {t('hero.cta')}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a href="#areas" className="btn btn-on-dark btn-lg">{t('hero.secondary')}</a>
        </div>
      </div>

      {/* Âncora "Clientes" do menu: a faixa de logos fecha o herói */}
      <section id="clientes" className="dh-logos" aria-label={t('logos.title') as string}>
        <p>{t('logos.title')}</p>
        <ul>
          {logos.map((l) => (
            <li key={l.name} className={`dh-logo dh-logo-${l.name.toLowerCase()}`}>
              <img src={l.src} alt={l.name} width={l.width} height={l.height} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
