import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { gainFor } from '@/data/client-gains';
import { homeLabs, type Lab } from '@/lib/labs-types';
import { LabLogo } from '@/components/site/LabsParts';

// "Quem a Dinn pode atender": três fileiras de cartões claros que rolam de lado sozinhas, em
// sentidos alternados, no modelo da faixa de confiança da Clay. Cinco clientes (com um dado
// do caso ou uma citação aprovada) e os maiores laboratórios do ranking, 20 no total.
// Só os clientes têm link (para o caso). Os outros logos não são clicáveis.
// Cada cartão de cliente mostra o mesmo número e a mesma frase do cartão em /clientes.
// "Ver todos" leva ao topo de /clientes, para o time ver os resultados gerais.
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
  const { clients, others } = homeLabs(labs);
  const byClient = new Map(clients.map((c) => [c.client!, c]));
  const queue = [...others];
  type Tile = { kind: 'logo' | 'client'; lab: Lab };
  const rows = ROWS.map((row) => ({
    ...row,
    tiles: row.items.flatMap((it): Tile[] => {
      if (typeof it === 'number') return queue.splice(0, it).map((lab) => ({ kind: 'logo', lab }));
      const lab = byClient.get(it);
      return lab ? [{ kind: 'client', lab }] : [];
    }),
  }));

  const Tile = ({ tile, hidden }: { tile: Tile; hidden: boolean }) => {
    const { lab, kind } = tile;
    if (kind === 'logo') {
      return <li className="lb-tile"><span className="lb-tile-in" role="img" aria-label={lab.name}><LabLogo lab={lab} /></span></li>;
    }
    // Mesmo número e mesma frase do cartão em /clientes (src/data/client-gains.ts).
    const g = gainFor(lab.client!, lang);
    return (
      <li className="lb-tile lb-client">
        <a href={`/clientes/${lab.client}`} tabIndex={hidden ? -1 : undefined} aria-label={`${lab.name}: ${t('home2.labs.client')}`}>
          <LabLogo lab={lab} />
          {g && <span className="lb-stat"><b>{g.num}</b><small>{g.text}</small></span>}
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
                  {row.tiles.map((tile) => <Tile key={tile.lab.slug} tile={tile} hidden={k > 0} />)}
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
