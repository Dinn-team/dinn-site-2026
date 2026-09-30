import { useTranslation } from "@/i18n/useTranslation";
import { Rich } from "@/lib/rich-text";
import { DEMO_URL } from "@/lib/links";

type Step = { tag: string; title: string; meta: string };
type Store = { name: string; level: string; value: string };

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Cartão do hero: o mesmo fluxo das apresentações comerciais (Biolab/Lilly),
// do sinal agregado até a lista de lojas. Dados sempre fictícios.
// A entrada em sequência é CSS puro (classe .rise): o cartão aparece no HTML
// inicial, sem esperar o JavaScript, e respeita "reduzir movimento".
function SignalCard() {
  const { t } = useTranslation();
  const steps = (t("hero.card.steps") as Step[]) ?? [];
  const stores = (t("hero.card.stores") as Store[]) ?? [];
  const delay = (i: number) => ({ animationDelay: `${0.3 + i * 0.45}s` });

  return (
    <div className="signal-card" aria-label={t("hero.card.label") as string}>
      <div className="signal-card-head">
        <span>{t("hero.card.label")}</span>
        <span>{t("hero.card.footnote")}</span>
      </div>
      {steps.map((step, i) => (
        <div key={step.tag} className="signal-step rise" style={delay(i)}>
          <span className="tag">{step.tag}</span>
          <div>
            <p className="signal-step-title">{step.title}</p>
            <p className="signal-step-meta">{step.meta}</p>
            {i === steps.length - 1 && (
              <div className="store-list">
                {stores.map((store, j) => (
                  <div key={store.name} className="store-row rise" style={delay(i + 0.5 + j * 0.35)}>
                    <span>{store.name}</span>
                    <span className={`level ${j === 0 ? "level--hot" : ""}`}>{store.level}</span>
                    <strong>{store.value}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function AnimatedHero() {
  const { t } = useTranslation();

  return (
    <section className="home-hero">
      <div className="home-hero-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="home-hero-grid">
          <div>
            <span className="home-hero-pill">{t("hero.pill")}</span>
            <h1 className="home-hero-title">
              <Rich text={t("hero.title") as string} />
            </h1>
            <p className="home-hero-desc">{t("hero.description")}</p>
            <div className="home-hero-actions">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                {t("hero.cta")}
                <ArrowIcon />
              </a>
              <a href="#como-funciona" className="btn btn-on-dark btn-lg">
                {t("hero.secondary")}
              </a>
            </div>
          </div>
          <SignalCard />
        </div>
      </div>
    </section>
  );
}

export { AnimatedHero };
