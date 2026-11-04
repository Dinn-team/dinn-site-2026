import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { featurePath } from '@/lib/site-map';
import { FEATURE_DEMO } from '@/components/site/FeatureDemos';
import { FrameCamera } from '@/components/site/AppDemos';

type Item = { id: string; name: string; text: string };

// "Como a Dinn funciona": a seção fica fixada na tela e a rolagem percorre as
// funcionalidades, uma a uma. O texto da ativa abre na lista, a tela troca com
// um fade e uma leve subida, e uma linha fina mostra o avanço dentro de cada item.
// O visitante só sai da seção depois de ver todas.
// Cada slide mostra a tela do Dinn da funcionalidade (FEATURE_DEMO), sobre um
// degradê escuro. Para trocar por imagem, informe o arquivo em SHOTS.
const SHOTS: Record<string, string> = {};
const GRADIENTS = ['web/roxo-noite', 'web/verde-noite', 'web/laranja-noite', 'web/azul-noite', 'web/vinho-noite', 'web/grafite', 'web/roxo-noite', 'web/azul-noite', 'web/grafite'];

// Cada tela aparece inteira numa janela com o formato exato dela (nada cortado),
// colada embaixo e à direita sobre o degradê. Dentro, uma câmera acompanha o
// cursor: aproxima onde ele clica e abre para a tela inteira quando o resultado
// aparece (FrameCamera em AppDemos.tsx; o roteiro de cada tela está nos beats, campo cam).
// DA = proporção da maquete: 940 ÷ altura (h) da Frame da tela.
const DA: Record<string, number> = {
  ruptura: 940 / 620, giro: 940 / 520, preco: 940 / 540, localizador: 940 / 600, mercado: 940 / 450,
  oportunidades: 940 / 580, distribuicao: 940 / 640, jean: 940 / 600, conecta: 940 / 520,
};
// Tempo da troca entre telas: a que sai some enquanto a nova entra.
const SWAP_MS = 750;

// Distância de rolagem por funcionalidade, em vh.
const STEP_VH = 40;

export function Features2() {
  const { t } = useTranslation();
  const items = (t('home2.features.items') as Item[]) ?? [];
  const n = items.length;
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  // A tela anterior fica montada durante a troca, para sair com fade em vez de sumir.
  const [prev, setPrev] = useState(-1);
  const lastRef = useRef(0);
  useEffect(() => {
    if (active === lastRef.current) return;
    setPrev(lastRef.current);
    lastRef.current = active;
    const id = window.setTimeout(() => setPrev(-1), SWAP_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  // Progresso da rolagem dentro da seção: índice ativo e avanço (0 a 1) no item.
  useEffect(() => {
    const el = root.current;
    if (!el || n === 0) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const dist = rect.height - window.innerHeight;
      const p = dist > 0 ? Math.min(1, Math.max(0, -rect.top / dist)) : 0;
      const scaled = Math.min(n - 0.0001, p * n);
      const idx = Math.floor(scaled);
      el.style.setProperty('--p', (scaled - idx).toFixed(3));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  // Clicar num nome leva a rolagem ao começo daquela funcionalidade.
  const goTo = (i: number) => {
    const el = root.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const dist = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (dist * (i + 0.02)) / n, behavior: 'smooth' });
  };

  const style = { ['--n' as string]: n || 7, ['--step' as string]: `${STEP_VH}svh`, ['--i' as string]: active } as CSSProperties;

  return (
    <section id="como-funciona" ref={root} className="h2-features h2-pin" aria-labelledby="h2-features-title" style={style}>
      <div className="h2-feat-stage">
        <div className="h2-wrap">
          <div className="h2-head is-stack h2-feat-head">
            <div>
              <h2 id="h2-features-title" className="h2-title">{t('home2.features.title')}</h2>
              <p className="h2-sub">{t('home2.features.sub')}</p>
            </div>
          </div>
          <div className="h2-feat-grid">
            <ul className="h2-feat-list">
              {items.map((it, i) => (
                <li key={it.id} className={i === active ? 'is-active' : ''}>
                  <button type="button" className="h2-feat-name" aria-expanded={i === active} onClick={() => goTo(i)}>
                    <span>{it.name}</span>
                  </button>
                  <div className="h2-feat-body" aria-hidden={i !== active}>
                    <div>
                      <p>{it.text}</p>
                      <a className="h2-link" href={featurePath(it.id)} tabIndex={i === active ? 0 : -1}>{t('home2.features.more')} <ArrowRight size={14} aria-hidden="true" /></a>
                    </div>
                  </div>
                  {i === active && <span className="h2-feat-prog" aria-hidden="true" />}
                </li>
              ))}
            </ul>
            <div className="h2-feat-shot">
              <div className="h2-feat-track">
                {items.map((it, i) => {
                  const Demo = it.id in FEATURE_DEMO ? FEATURE_DEMO[it.id] : null;
                  return (
                    <div key={it.id} className={`h2-slide ${i === active ? 'is-active' : ''}`} data-placeholder={SHOTS[it.id] || Demo ? undefined : it.id} aria-hidden={i !== active}>
                      {SHOTS[it.id] ? (
                        <img src={SHOTS[it.id]} alt={it.name} loading="lazy" />
                      ) : (
                        <span className="h2-slide-bg" style={{ backgroundImage: `url(/gradients/${GRADIENTS[i % GRADIENTS.length]}.avif)` }} aria-hidden="true" />
                      )}
                      {/* A tela do Dinn roda só no slide ativo (e na que está saindo): uma animação por vez. */}
                      {Demo && (i === active || i === prev) && (
                        <div className="h2-slide-screen">
                          <div className="h2-window" style={{ ['--da' as string]: DA[it.id] ?? 1.6 } as CSSProperties}>
                            <FrameCamera.Provider value={i === active}><Demo /></FrameCamera.Provider>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
