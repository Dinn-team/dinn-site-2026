import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { customerBySlug, type Lang } from '@/data/customers';
import { homeLabs, type Lab } from '@/lib/labs-types';
import { LabLogo } from '@/components/site/LabsParts';

// "Quem a Dinn pode atender": três fileiras de cartões claros que rolam de lado sozinhas, em
// sentidos alternados, no modelo da faixa de confiança da Clay. Cinco clientes (com um dado
// do caso ou uma citação aprovada) e os maiores laboratórios do ranking, 20 no total.
// Só os clientes têm link (para o caso). Os outros logos não são clicáveis.
// A citação só aparece se estiver com `approved: true` em src/data/customers.
// Sem movimento (prefers-reduced-motion), as fileiras ficam paradas e rolam com o dedo ou o mouse.
const STAT: Record<string, number> = { lilly: 2, sanofi: 0, eurofarma: 1, libbs: 1, marjan: 2 };
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
    const c = customerBySlug(lab.client!, lang as Lang);
    const stat = c?.metrics[STAT[lab.client!]];
    const quote = c?.quote?.approved ? c.quote : undefined;
    return (
      <li className={`lb-tile lb-client ${quote ? 'has-quote' : ''}`}>
        <a href={`/clientes/${lab.client}`} tabIndex={hidden ? -1 : undefined} aria-label={`${lab.name}: ${t('home2.labs.client')}`}>
          <LabLogo lab={lab} />
          {quote ? (
            <span className="lb-quote"><q>{quote.text}</q><small>{quote.role}</small></span>
          ) : (
            stat && <span className="lb-stat"><b>{stat.value}</b><small>{stat.label}</small></span>
          )}
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
        <p className="lb-home-more"><a className="h2-link" href="/clientes#ranking">{t('home2.labs.all')} <ArrowRight size={15} aria-hidden="true" /></a></p>
      </div>
    </section>
  );
}
