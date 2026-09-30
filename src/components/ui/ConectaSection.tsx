import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEMO_URL } from "@/lib/links";

type Resp = { title: string; desc: string };

// Dinn Conecta conforme dinn-os/research/2026-09-17-dinn-data-offer-spec.md:
// fontes do cliente → Dinn Conecta → stack do cliente, que continua o mesmo.
export function ConectaSection() {
  const { t } = useTranslation();
  const sources = (t("conecta.sources") as string[]) ?? [];
  const destinations = (t("conecta.destinations") as string[]) ?? [];
  const responsibilities = (t("conecta.responsibilities") as Resp[]) ?? [];
  const stripItems = (t("conecta.stripItems") as string[]) ?? [];

  return (
    <section id="conecta" className="hs hs--light">
      <div className="wrap">
        <SectionHeading
          eyebrow={t("conecta.eyebrow") as string}
          title={t("conecta.title") as string}
          intro={t("conecta.description") as string}
        />

        <div className="conecta-diagram">
          <div className="cd-col">
            <span className="cd-label">{t("conecta.sourcesLabel")}</span>
            {sources.map((s) => <div key={s} className="cd-node">{s}</div>)}
          </div>

          <div className="cd-hub-wrap">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="cd-hub">
              <strong>{t("conecta.hub")}</strong>
              <span>{t("conecta.hubDesc")}</span>
            </div>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          <div className="cd-col">
            <span className="cd-label">{t("conecta.destLabel")}</span>
            <div className="cd-dests">
              {destinations.map((d) => <div key={d} className="cd-node">{d}</div>)}
            </div>
          </div>
        </div>

        <div className="resp">
          {responsibilities.map((r) => (
            <div key={r.title} className="resp-card">
              <p className="resp-title">{r.title}</p>
              <p className="resp-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="strip">
          <div>
            <p className="strip-text">{t("conecta.stripLabel")}</p>
            <div className="strip-items">
              {stripItems.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white btn-lg">
            {t("conecta.cta")}
          </a>
        </div>
        <p className="note">{t("conecta.note")}</p>
      </div>
    </section>
  );
}
