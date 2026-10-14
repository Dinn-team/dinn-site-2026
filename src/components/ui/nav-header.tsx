"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { useTranslation } from "@/i18n/useTranslation";

type NavItem = {
  label: string;
  href: string;
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

interface SlideTabsProps {
  scrolled: boolean;
}

// Itens do menu principal, compartilhados entre desktop e celular. O menu
// espelha as perguntas do comprador (o que é, para a minha área, quem usa,
// posso confiar), não a árvore interna de páginas. "Soluções" abre a lista das
// áreas; as páginas seguem em /solucoes/<area>.
export const NAV_LINKS: { key: string; href: string; menu?: "solutions" }[] = [
  { key: "nav.platform", href: "/plataforma" },
  { key: "nav.solutions", href: "/solucoes", menu: "solutions" },
  { key: "nav.customers", href: "/clientes" },
  { key: "nav.resources", href: "/recursos" },
  { key: "nav.trust", href: "/confianca" },
];

export type NavArea = { slug: string; name: string };

export function SlideTabs({ scrolled }: SlideTabsProps) {
  const { t } = useTranslation();

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems: (NavItem & { menu?: "solutions" })[] = NAV_LINKS.map(({ key, href, menu }) => ({ label: t(key), href, menu }));
  const areas = (t("solutions.items") as NavArea[]) ?? [];

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        borderRadius: "9999px",
        padding: "4px",
        listStyle: "none",
        margin: 0,
        border: scrolled
          ? "1.5px solid rgba(86,37,242,0.15)"
          : "1.5px solid rgba(255,255,255,0.15)",
        background: scrolled
          ? "rgba(255,255,255,0.9)"
          : "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        gap: "2px",
      }}
    >
      {navItems.map((item) => (
        <Tab
          key={item.href}
          href={item.href}
          setPosition={setPosition}
          scrolled={scrolled}
          areas={item.menu === "solutions" ? areas : undefined}
          allLabel={item.menu === "solutions" ? t("nav.solutionsAll") : undefined}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} scrolled={scrolled} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  setPosition,
  scrolled,
  areas,
  allLabel,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  scrolled: boolean;
  areas?: NavArea[];
  allLabel?: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [open, setOpen] = useState(false);
  const hasMenu = Boolean(areas && areas.length);

  return (
    <li
      ref={ref}
      onFocus={() => hasMenu && setOpen(true)}
      onBlur={(e) => {
        if (hasMenu && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => {
        if (hasMenu) setOpen(true);
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      style={{
        position: "relative",
        zIndex: 10,
        display: "block",
        cursor: "pointer",
      }}
    >
      <a
        href={href}
        style={{
          display: "block",
          padding: "6px 16px",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          color: scrolled ? "#374151" : "rgba(255,255,255,0.85)",
          textDecoration: "none",
          mixBlendMode: "normal",
          transition: "color 0.2s",
        }}
      >
        {children}
      </a>
      {hasMenu && open && (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            paddingTop: "10px",
            zIndex: 60,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 18px 40px -16px rgba(31,35,40,0.35), 0 0 0 1px rgba(31,35,40,0.06)",
              padding: "8px",
              minWidth: "270px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {areas!.map((a) => (
              <a
                key={a.slug}
                role="menuitem"
                href={`/solucoes/${a.slug}`}
                style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "14px", fontWeight: 500, color: "#1F2328", textDecoration: "none", whiteSpace: "nowrap" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(86,37,242,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                {a.name}
              </a>
            ))}
            <a
              role="menuitem"
              href={href}
              style={{ marginTop: "4px", padding: "10px 12px", borderTop: "1px solid #ECEEF2", fontSize: "13.5px", fontWeight: 600, color: "#5625F2", textDecoration: "none" }}
            >
              {allLabel} →
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

const Cursor = ({
  position,
  scrolled,
}: {
  position: Position;
  scrolled: boolean;
}) => {
  return (
    <motion.li
      animate={position}
      style={{
        position: "absolute",
        zIndex: 0,
        height: "32px",
        borderRadius: "9999px",
        background: scrolled
          ? "rgba(86,37,242,0.1)"
          : "rgba(255,255,255,0.15)",
        listStyle: "none",
        pointerEvents: "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
};
