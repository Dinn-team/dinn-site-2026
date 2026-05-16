"use client";

import { Search, Handshake, Target, Crosshair, BarChart2 } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

import { useTranslation } from "@/i18n/useTranslation";

export function SolucoesSection() {
  const { t } = useTranslation();

  const solucoesData = [
    {
      id: 1,
      title: t('solucoes.items.0.title'),
      date: t('solucoes.items.0.date'),
      content: t('solucoes.items.0.content'),
      category: "Diagnóstico",
      icon: Search,
      relatedIds: [2, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 2,
      title: t('solucoes.items.1.title'),
      date: t('solucoes.items.1.date'),
      content: t('solucoes.items.1.content'),
      category: "Comercial",
      icon: Handshake,
      relatedIds: [1, 4],
      status: "completed" as const,
      energy: 88,
    },
    {
      id: 3,
      title: t('solucoes.items.2.title'),
      date: t('solucoes.items.2.date'),
      content: t('solucoes.items.2.content'),
      category: "Operações",
      icon: Target,
      relatedIds: [1, 5],
      status: "completed" as const,
      energy: 82,
    },
    {
      id: 4,
      title: t('solucoes.items.3.title'),
      date: t('solucoes.items.3.date'),
      content: t('solucoes.items.3.content'),
      category: "Análise",
      icon: Crosshair,
      relatedIds: [2, 5],
      status: "in-progress" as const,
      energy: 70,
    },
    {
      id: 5,
      title: t('solucoes.items.4.title'),
      date: t('solucoes.items.4.date'),
      content: t('solucoes.items.4.content'),
      category: "Inteligência",
      icon: BarChart2,
      relatedIds: [3, 4],
      status: "in-progress" as const,
      energy: 60,
    },
  ];

  return (
    <section
      id="solucoes"
      style={{
        background: "transparent",
        width: "100%",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
    >
      {/* Header */}
      <div className="wrap" style={{ textAlign: "center", marginBottom: "16px" }}>
        <p style={{
          fontFamily: "var(--font)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "20px",
        }}>
          {t('solucoes.tag')}
        </p>
        <h2 style={{
          fontFamily: "var(--font)",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          margin: "0 auto 16px",
          maxWidth: "640px",
        }}>
          {t('solucoes.title1')}<br />
          <span style={{
            background: "linear-gradient(135deg, #8350e8, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {t('solucoes.title2')}
          </span>
        </h2>
        <p style={{
          fontFamily: "var(--font)",
          fontSize: "var(--text-base)",
          color: "rgba(255,255,255,0.5)",
          maxWidth: "520px",
          margin: "0 auto",
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          {t('solucoes.description')}
        </p>
      </div>

      {/* Orbital timeline */}
      <RadialOrbitalTimeline timelineData={solucoesData} />

      {/* CTA */}
      <div style={{ textAlign: "center", paddingBottom: "24px" }}>
        <a
          href="https://meetings.hubspot.com/eduardo-fonseca?uuid=eeff79af-d416-4635-a673-4c678359d1b4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          {t('solucoes.cta')}
        </a>
      </div>
    </section>
  );
}
