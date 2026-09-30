import { useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Card = { title: string; desc: string; tag?: string };
type TabKey = "outcome" | "team";

// Soluções explica problemas e resultados; o "Como funciona" explica a
// plataforma. Duas leituras do mesmo conteúdo: por resultado e por time.
export function SolucoesSection() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabKey>("outcome");
  const cards = ((tab === "outcome" ? t("solucoes.outcomes") : t("solucoes.teams")) as Card[]) ?? [];

  return (
    <section id="solucoes" className="hs hs--surface">
      <div className="wrap">
        <SectionHeading
          eyebrow={t("solucoes.eyebrow") as string}
          title={t("solucoes.title") as string}
          intro={t("solucoes.intro") as string}
        />

        <div className="tabs" role="tablist">
          {(["outcome", "team"] as TabKey[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className="tab"
              onClick={() => setTab(key)}
            >
              {t(`solucoes.tabs.${key}`)}
            </button>
          ))}
        </div>

        <div className="cards" role="tabpanel">
          {cards.map((card) => (
            <div key={card.title} className="sol-card">
              <p className="sol-title">{card.title}</p>
              <p className="sol-desc">{card.desc}</p>
              {card.tag && <span className="tag">{card.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
