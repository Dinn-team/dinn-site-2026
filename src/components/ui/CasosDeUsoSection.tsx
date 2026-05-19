"use client";

import { useEffect, useRef, useState } from "react";

import { useTranslation } from "@/i18n/useTranslation";

/* ─────────────────────────────────────────────────── */
/*  COMPONENT                                          */
/* ─────────────────────────────────────────────────── */
export function CasosDeUsoSection() {
  const { t } = useTranslation();
  
  const topics = [
    {
      id: "trade-cs",
      title: t("casos.topics.0.title"),
      description: t("casos.topics.0.description"),
      image: "/prints_screns/trade-cs.avif",
    },
    {
      id: "forca-vendas",
      title: t("casos.topics.1.title"),
      description: t("casos.topics.1.description"),
      image: "/prints_screns/forca-vendas.avif",
    },
    {
      id: "inteligencia-marketing",
      title: t("casos.topics.2.title"),
      description: t("casos.topics.2.description"),
      image: "/prints_screns/inteligencia-marketing.avif",
    },
    {
      id: "diagnostico-diario",
      title: t("casos.topics.3.title"),
      description: t("casos.topics.3.description"),
      image: "/prints_screns/diagnostico-diario.avif",
    },
    {
      id: "evidencias-negociacao",
      title: t("casos.topics.4.title"),
      description: t("casos.topics.4.description"),
      image: "/prints_screns/evidencias-negociacao.avif",
    },
    {
      id: "monitoramento-concorrencia",
      title: t("casos.topics.5.title"),
      description: t("casos.topics.5.description"),
      image: "/prints_screns/monitoramento-concorrencia.avif",
    },
  ];
  const TOTAL = topics.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = el.offsetHeight;
      const scrolled = -rect.top;
      if (scrolled < 0 || scrolled > totalHeight) return;
      const ratio = scrolled / totalHeight;
      const raw = ratio * TOTAL;
      const idx = Math.min(Math.floor(raw), TOTAL - 1);
      setActiveIndex(idx);
      setProgress(raw - Math.floor(raw));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="casos-de-uso" style={{ background: "#ffffff", position: "relative" }}>

      {/* ── Header — scrolls normally, NOT sticky — aligned to left column ─── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "40% 60%",
          paddingTop: "clamp(64px, 8vh, 112px)",
          paddingBottom: "clamp(40px, 5vh, 72px)",
        }}
      >
        <div
          style={{
            paddingLeft: isMobile ? "24px" : "clamp(24px, 5vw, 80px)",
            paddingRight: isMobile ? "24px" : "clamp(24px, 3vw, 48px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font)",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "12px",
            }}
          >
            Casos de Uso
          </p>
          <h2
            style={{
              fontFamily: "var(--font)",
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 800,
              color: "#1F2328",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "20px",
            }}
          >
            {t('casos.title1')}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5625F2, #8350e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('casos.title2')}
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font)",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "var(--color-body)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            {t('casos.intro')}
          </p>
        </div>
      </div>

      {/* ── Scrollytelling zone or Mobile Stacked view ─────────────────────── */}
      {isMobile ? (
        <div style={{ padding: "0 24px 80px 24px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {topics.map((topic, i) => (
            <div
              key={topic.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "#F8F8FA",
                padding: "24px",
                borderRadius: "20px",
                border: "1px solid #E5E7EB",
              }}
            >
              <div>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "8px" }}>
                  0{i + 1} . {topic.title}
                </span>
                <h3 style={{ fontFamily: "var(--font)", fontSize: "20px", fontWeight: 800, color: "#1F2328", margin: "0 0 12px" }}>
                  {topic.title}
                </h3>
                <p style={{ fontFamily: "var(--font)", fontSize: "14px", color: "var(--color-body)", lineHeight: 1.6, margin: 0 }}>
                  {topic.description}
                </p>
              </div>
              <img
                src={topic.image}
                alt={topic.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "contain",
                  background: "transparent",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)"
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div ref={scrollRef} style={{ position: "relative", height: `${TOTAL * 100}vh` }}>
          {/* Sticky two-panel — only this part sticks */}
          <div
            style={{
              position: "sticky",
              top: "120px",
              height: "calc(100vh - 120px)",
              display: "grid",
              gridTemplateColumns: "40% 60%",
              overflow: "hidden",
            }}
          >
            {/* ── LEFT: topic list ─────────────────── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: "clamp(24px, 5vw, 80px)",
                paddingRight: "clamp(24px, 3vw, 48px)",
                paddingBottom: "24px",
              }}
            >
              {topics.map((topic, i) => {
                const isActive = i === activeIndex;
                return (
                  <TopicRow
                    key={topic.id}
                    topic={topic}
                    isActive={isActive}
                    progress={isActive ? progress : 0}
                  />
                );
              })}
            </div>

            {/* ── RIGHT: full-bleed image, no box ──── */}
            <div style={{ position: "relative", overflow: "hidden" }}>
              {topics.map((topic, i) => {
                const isActive = i === activeIndex;
                // Parallax: active image scrolls up as progress goes 0→1
                // Previous images are already scrolled up (-15%), next are at rest (0%)
                const translateY = isActive
                  ? `${-progress * 12}%`
                  : i < activeIndex
                  ? "-12%"
                  : "4%";

                return (
                  <img
                    key={topic.id}
                    src={topic.image}
                    alt={topic.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "left center",
                      opacity: isActive ? 1 : 0,
                      transform: `translateY(${translateY})`,
                      transition: isActive
                        ? "opacity 380ms ease, transform 380ms ease"
                        : "opacity 380ms ease",
                      willChange: "opacity, transform",
                      background: "transparent",
                    }}
                  />
                );
              })}

              {/* Counter */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(8px)",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#1F2328",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  zIndex: 2,
                  letterSpacing: "0.06em",
                }}
              >
                {activeIndex + 1} / {TOTAL}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────── */
/*  TOPIC ROW                                          */
/* ─────────────────────────────────────────────────── */
interface TopicRowProps {
  topic: (typeof topics)[number];
  isActive: boolean;
  progress: number;
}

function TopicRow({ topic, isActive, progress }: TopicRowProps) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "20px",
        paddingTop: "clamp(8px, 1.4vh, 14px)",
        paddingBottom: "clamp(8px, 1.4vh, 14px)",
        borderLeft: `2px solid ${isActive ? "#5625F2" : "#E5E7EB"}`,
        transition: "border-color 0.35s ease",
      }}
    >
      {/* Animated progress line */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            left: "-2px",
            top: 0,
            width: "2px",
            height: `${progress * 100}%`,
            background: "#5625F2",
            borderRadius: "2px",
            zIndex: 1,
            transition: "height 0.05s linear",
          }}
        />
      )}

      {/* Title */}
      <p
        style={{
          fontFamily: "var(--font)",
          fontSize: isActive ? "clamp(16px, 1.8vw, 22px)" : "clamp(13px, 1.3vw, 16px)",
          fontWeight: isActive ? 800 : 500,
          color: isActive ? "#1F2328" : "#C0C5CE",
          letterSpacing: isActive ? "-0.02em" : "0",
          lineHeight: 1.2,
          marginBottom: isActive ? "8px" : "0",
          opacity: isActive ? 1 : 0.7,
          transform: isActive ? "translateY(0)" : "translateY(3px)",
          transition:
            "font-size 350ms ease-out, color 350ms ease-out, opacity 350ms ease-out, transform 350ms ease-out",
          willChange: "transform, opacity",
        }}
      >
        {topic.title}
      </p>

      {/* Description — grid-row animated reveal */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isActive ? "1fr" : "0fr",
          transition: "grid-template-rows 350ms ease-out",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              fontFamily: "var(--font)",
              fontSize: "clamp(12px, 1.1vw, 14px)",
              color: "#777D8B",
              lineHeight: 1.7,
              paddingTop: "2px",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 350ms ease-out 60ms, transform 350ms ease-out 60ms",
            }}
          >
            {topic.description}
          </p>
        </div>
      </div>
    </div>
  );
}
