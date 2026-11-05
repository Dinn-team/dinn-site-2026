import { ArrowRight } from 'lucide-react';
import { Eye, FileCheck2, Layers, RefreshCw, Search, Send } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { PATHS } from '@/lib/site-map';
import type { CityPhotos } from '@/lib/city-photos';
import { ChatWidget2 } from '@/components/home2/ChatWidget2';
import { ClientCases } from './ClientCases';
import type { Lab } from '@/lib/labs-types';
import { H2Head } from './PageShell';
import { FlowChain, StatStrip } from './offer/FlowViz';
import { IlContact, IlPrivacy, IlSupport } from '@/components/illustrations/about';

type Info = { title: string; text: string };
type Place = { city: string; country: string; text: string };
type Contact = Info & { href: string; cta: string };

// Coordenadas das duas cidades (fatos, iguais em todos os idiomas).
const COORDS = ['26°18′ S · 48°51′ O', '39°28′ N · 0°22′ O'];
const CITY_GRADIENTS = ['g11', 'g09'];
const CONTACT_ART = [IlContact, IlSupport, IlPrivacy];

// Time da Dinn. Cargos e responsabilidades vêm de dinn-os/people/profiles.
// Fotos em public/sobre/time/<id>.webp (quadradas, rosto no centro; o cartão
// recorta em 4:5). Sem foto, o cartão mostra as iniciais sobre o degradê.
type Member = { id: string; name: string; role: string; text: string };
const TEAM_PHOTOS: Record<string, string> = { edu: '/sobre/time/edu.webp', renan: '/sobre/time/renan.webp', vini: '/sobre/time/vini.webp' };
const TEAM_GRADIENTS: Record<string, string> = { edu: 'web/roxo-noite', renan: 'web/azul-noite', vini: 'web/verde-noite' };
const initials = (name: string) => name.split(' ').map((w) => w[0]).slice(0, 2).join('');

// Sobre a Dinn no padrão da home (Design System v2). Tom sério, mas com
// imagem: fotos das cidades e degradês
// nos cartões para dar contraste com o fundo branco.
export function AboutPage({ labs = [], photos = {} }: { labs?: Lab[]; photos?: CityPhotos }) {
  const { t } = useTranslation();
  const places = (t('about.where.items') as Place[]) ?? [];
  const company = (t('about.company.rows') as string[][]) ?? [];
  const contacts = (t('about.contact.items') as Contact[]) ?? [];
  const stages = (t('inside.stages') as { name: string; title: string }[]) ?? [];
  const stats = t('aboutMore.stats') as unknown as { title: string; items: { value: number; suffix?: string; label: string }[] };
  const principles = t('aboutMore.principles') as unknown as { title: string; intro: string; items: Info[] };
  const map = t('aboutMore.map') as unknown as { aria: string; label: string };
  const team = t('aboutMore.team') as unknown as { title: string; intro: string; items: Member[] };
  const photoOf = [photos.joinville, photos.valencia];

  return (
    <div className="h2 abt">
      <header className="h2-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title"><Rich text={t('about.hero.title') as string} /></h1>
            <div className="h2-hero-side">
              <p className="h2-hero-sub">{t('about.hero.lead')}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="h2-section is-muted" aria-labelledby="abt-what">
        <div className="h2-wrap">
          <H2Head id="abt-what" title={t('about.what.title') as string} intro={t('about.what.text') as string} />
          <FlowChain
            title={t('aboutMore.how.title') as string}
            nodes={stages.map((s, i) => ({
              icon: [Eye, FileCheck2, Search, Layers, Send, RefreshCw][i] ?? Layers,
              title: s.name,
              sub: s.title,
              tone: i === 3 ? ('main' as const) : undefined,
            }))}
          />
          <p className="abt-note">{t('aboutMore.how.intro')}</p>
        </div>
      </section>

      <section className="h2-section abt-facts-band" aria-label={stats.title}>
        <div className="h2-wrap">
          <StatStrip title={stats.title} items={stats.items.filter((_, i) => i !== 2)} />
        </div>
      </section>

      <section className="h2-section is-muted" aria-labelledby="abt-principles">
        <div className="h2-wrap">
          <H2Head id="abt-principles" title={principles.title} intro={principles.intro} />
          <ol className="abt-principles">
            {principles.items.map((p, i) => (
              <li key={p.title}>
                <span className="abt-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="h2-section abt-team" aria-labelledby="abt-team">
        <div className="h2-wrap">
          <H2Head id="abt-team" title={team.title} intro={team.intro} />
          <ul className="abt-team-grid">
            {team.items.map((m) => (
              <li key={m.id} className="abt-member">
                <div className="abt-member-photo" style={{ backgroundImage: `url(/gradients/${TEAM_GRADIENTS[m.id] ?? 'web/roxo-noite'}.avif)` }}>
                  {TEAM_PHOTOS[m.id] ? (
                    <img src={TEAM_PHOTOS[m.id]} alt={m.name} loading="lazy" width={800} height={800} />
                  ) : (
                    <span className="abt-member-initials" aria-hidden="true">{initials(m.name)}</span>
                  )}
                </div>
                <h3>{m.name}</h3>
                <p className="abt-member-role">{m.role}</p>
                <p className="abt-member-text">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mesmo grid de /clientes */}
      {labs.length > 0 && <ClientCases labs={labs} title={t('home2.customers.title') as string} />}

      <section className="h2-section is-muted" aria-labelledby="abt-where">
        <div className="h2-wrap">
          <H2Head id="abt-where" title={t('about.where.title') as string} intro={map.label} />
          <ul className="abt-places" aria-label={map.aria}>
            {places.slice(0, 2).map((p, i) => (
              <li key={p.city}>
                <figure
                  className="abt-place"
                  data-placeholder={photoOf[i] ? undefined : ''}
                  style={{ backgroundImage: `url(${photoOf[i] ?? `/gradients/${CITY_GRADIENTS[i]}.avif`})` }}
                >
                  <span className="abt-place-shade" />
                  <figcaption>
                    <span className="abt-coord">{COORDS[i]}</span>
                    <strong>{p.city}</strong>
                    <span>{p.country}</span>
                    <em>{p.text}</em>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="abt-datacard" aria-labelledby="abt-company">
            <h3 id="abt-company">{t('about.company.title')}</h3>
            <dl>
              {company.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="h2-section" aria-labelledby="abt-contact">
        <div className="h2-wrap">
          <H2Head id="abt-contact" title={t('about.contact.title') as string} />
          <div className="abt-contacts">
            {contacts.map((c, i) => {
              const Art = CONTACT_ART[i] ?? IlContact;
              return (
                <a key={c.title} className="abt-contact il-host" href={c.href}>
                  <span className="abt-contact-art"><Art /></span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <span className="h2-link">{c.cta}<ArrowRight size={15} aria-hidden="true" /></span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fechamento sobre degradê colorido */}
      <section className="abt-cta" aria-labelledby="abt-trust">
        <div className="h2-wrap">
          <div className="abt-cta-card">
            <div className="abt-cta-copy">
              <h2 id="abt-trust">{t('about.trust.title')}</h2>
              <p>{t('about.trust.text')}</p>
              <a className="btn btn-primary" href={PATHS.trust}>{t('about.trust.cta')}</a>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget2 />
    </div>
  );
}
