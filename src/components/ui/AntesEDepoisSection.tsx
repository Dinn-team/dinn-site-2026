import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Item = { bad: string; good: string };

export function AntesEDepoisSection() {
  const { t } = useTranslation();
  const items = (t("antesDepois.items") as Item[]) ?? [];

  return (
    <section className="hs hs--dark hs--after-arc">
      <div className="wrap">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow={t("antesDepois.eyebrow") as string}
          title={t("antesDepois.title") as string}
          intro={t("antesDepois.description") as string}
        />

        <div className="compare">
          <div className="compare-head" aria-hidden="true">
            <span>{t("antesDepois.beforeLabel")}</span>
            <span />
            <span>{t("antesDepois.afterLabel")}</span>
          </div>
          {items.map((item) => (
            <div key={item.bad} className="compare-row">
              <p className="compare-cell compare-cell--bad">{item.bad}</p>
              <span className="compare-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <p className="compare-cell compare-cell--good">{item.good}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
