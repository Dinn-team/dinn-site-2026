import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { impactFor } from '@/data/client-gains';
import { CLIENT_LOGOS } from '@/lib/clients';
import { homeLabs, type Lab } from '@/lib/labs-types';
import { LabLogo } from '@/components/site/LabsParts';

// "Quem a Dinn pode atender": três fileiras de cartões claros que rolam de lado sozinhas, em
// sentidos alternados, no modelo da faixa de confiança da Clay. Cinco clientes (com um dado
// do caso ou uma citação aprovada) e os maiores laboratórios do ranking, 20 no total.
// Os cartões de cliente mostram o logo e uma frase de impacto, sem número (decisão de 16/11/2026).
// Todos levam ao topo de /clientes, e não à página de cada case. Os logos de laboratório não são clicáveis.
// "Ver todos" também leva ao topo de /clientes.
// Sem movimento (prefers-reduced-motion), as fileiras ficam paradas e rolam com o dedo ou o mouse.
// Fileiras: número = quantos logos; texto = cartão de cliente. Cada fileira roda em seu ritmo.
const ROWS: { items: (number | string)[]; s: number; rev?: boolean }[] = [
  { items: ['lilly', 4, 'eurofarma', 1], s: 80 },
  { items: ['sanofi', 3, 'marjan', 2], s: 96, rev: true },
  { items: [2, 'libbs', 3], s: 70 },
];
const COPIES = 4;

export function QuemAtende2({ labs }: { labs: Lab[] }) {
  const { t, lang } = useTranslation();
  const { others } = homeLabs(labs);
  const queue = [...others];
  type Tile = { kind: 'logo'; lab: Lab } | { kind: 'client'; key: string };
  const rows = ROWS.map((row) => ({
    ...row,
    tiles: row.items.flatMap((it): Tile[] => {
      if (typeof it === 'number') return queue.splice(0, it).map((lab) => ({ kind: 'logo', lab }));
      return [{ kind: 'client', key: it }];
    }),
  }));

  const Tile = ({ tile, hidden }: { tile: Tile; hidden: boolean }) => {
    if (tile.kind === 'logo') {
      const { lab } = tile;
      return <li className="lb-tile"><span className="lb-tile-in" role="img" aria-label={lab.name}><LabLogo lab={lab} /></span></li>;
    }
    // Logo do cliente pintado com a cor da marca, sobre o fundo branco dos demais logos, com uma frase de impacto sem número.
    // O cartão leva ao topo de /clientes, não à página do case.
    const logo = CLIENT_LOGOS[tile.key];
    const impact = impactFor(tile.key, lang)!;
    return (
      <li className="lb-tile lb-client">
        <a href="/clientes" tabIndex={hidden ? -1 : undefined} aria-label={`${logo.name}: ${impact}`}>
          <span
            className="lb-client-logo"
            role="img"
            aria-hidden="true"
            style={{ ['--m' as string]: `url(${logo.src})`, ['--c' as string]: logo.color, ['--r' as string]: logo.width / logo.height }}
          />
          <span className="lb-impact">{impact}</span>
          <ArrowRight className="lb-go" size={16} aria-hidden="true" />
        </a>
      </li>
    );
  };

  return (
    <section id="atende" className="h2-section lb-home" aria-labelledby="lb-home-title">
      <div className="h2-wrap">
        <div className="lb-home-head">
          <h2 id="lb-home-title" className="h2-title">{t('home2.labs.title')}</h2>
          <p className="lb-home-lead">{t('home2.labs.lead')}</p>
        </div>
      </div>
      <div className="lb-marquee">
        {rows.map((row, r) => (
          <div key={r} className="lb-lane">
            <div className={`lb-track ${row.rev ? 'is-rev' : ''}`} style={{ ['--s' as string]: `${row.s}s`, ['--n' as string]: COPIES }}>
              {Array.from({ length: COPIES }, (_, k) => (
                <ul key={k} className="lb-set" aria-hidden={k > 0 ? true : undefined}>
                  {row.tiles.map((tile) => <Tile key={tile.kind === 'client' ? tile.key : tile.lab.slug} tile={tile} hidden={k > 0} />)}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="h2-wrap">
        <p className="lb-home-more"><a className="h2-link" href="/clientes">{t('home2.labs.all')} <ArrowRight size={15} aria-hidden="true" /></a></p>
      </div>
    </section>
  );
}
