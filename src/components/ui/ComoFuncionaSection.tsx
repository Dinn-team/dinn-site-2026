import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STAGE_VISUALS } from "@/components/ui/stage-visuals";

type Stage = { name: string; title: string; description: string; products: string };

// Altura de rolagem reservada para cada etapa no desktop.
const VH_PER_STAGE = 90;

export function ComoFuncionaSection() {
  const { t } = useTranslation();
  const stages = (t("comoFunciona.stages") as Stage[]) ?? [];
  const total = stages.length || 1;

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Rolagem "grudada": a lista fica à esquerda e o visual troca conforme o
  // visitante desce. Mesmo mecanismo da antiga seção Casos de Uso.
  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current;
      if (!el || el.offsetHeight === 0) return;
      const scrolled = -el.getBoundingClientRect().top;
      const span = el.offsetHeight - window.innerHeight * 0.5;
      const raw = Math.max(0, Math.min(scrolled / span, 0.9999)) * total;
      setActive(Math.floor(raw));
      setProgress(raw - Math.floor(raw));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight * 0.5;
    const top = el.getBoundingClientRect().top + window.scrollY + (span * (i + 0.05)) / total;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="como-funciona" className="hs hs--light">
      <div className="wrap">
        <SectionHeading
          eyebrow={t("comoFunciona.eyebrow") as string}
          title={t("comoFunciona.title") as string}
          intro={t("comoFunciona.intro") as string}
        />

        {/* Desktop: lista + visual fixos durante a rolagem */}
        <div ref={scrollRef} className="cf-scroll" style={{ height: `${total * VH_PER_STAGE}vh` }}>
          <div className="cf-sticky">
            <div className="cf-list">
              {stages.map((stage, i) => (
                <button
                  key={stage.name}
                  type="button"
                  className={`cf-item ${i === active ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-current={i === active ? "step" : undefined}
                >
                  {i === active && <span className="cf-item-progress" style={{ height: `${progress * 100}%` }} />}
                  <span className="cf-step">0{i + 1}</span>
                  <span className="cf-name">{stage.name}</span>
                  <span className="cf-detail">
                    <span style={{ display: "block" }}>
                      <span className="cf-title" style={{ display: "block" }}>{stage.title}</span>
                      <span className="cf-desc" style={{ display: "block" }}>{stage.description}</span>
                      <span className="cf-products">
                        {stage.products.split(" · ").map((p) => (
                          <span key={p} className="tag">{p}</span>
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="cf-visual-wrap">
              {STAGE_VISUALS.slice(0, total).map((Visual, i) => (
                <div
                  key={i}
                  className="cf-visual"
                  aria-hidden={i !== active}
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `translateY(${i === active ? 0 : i < active ? -16 : 16}px)`,
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  <Visual />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Celular: etapas empilhadas */}
        <div className="cf-mobile">
          {stages.map((stage, i) => {
            const Visual = STAGE_VISUALS[i];
            return (
              <div key={stage.name} className="cf-mobile-card">
                <div>
                  <span className="cf-step" style={{ color: "var(--color-accent)" }}>0{i + 1} · {stage.name}</span>
                  <p className="cf-title" style={{ fontSize: "var(--text-lg)" }}>{stage.title}</p>
                  <p className="cf-desc">{stage.description}</p>
                  <div className="cf-products">
                    {stage.products.split(" · ").map((p) => (
                      <span key={p} className="tag">{p}</span>
                    ))}
                  </div>
                </div>
                {Visual && <Visual />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
