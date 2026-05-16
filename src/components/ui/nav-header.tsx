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

export function SlideTabs({ scrolled }: SlideTabsProps) {
  const { t } = useTranslation();
  
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems: NavItem[] = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.solutions"), href: "#solucoes" },
    { label: t("nav.useCases"), href: "#casos-de-uso" },
    { label: t("nav.blog"), href: "/blog" },
  ];

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
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  scrolled: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
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
