import { useState, useEffect, ReactNode, useMemo } from "react";
import { motion, AnimatePresence, Transition } from "motion/react";
import { X } from "lucide-react";

// --- Types ---
type HeadingData = {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
};

// --- Shared Animation Configs ---
const islandTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
};

// --- Progress Circle Component ---
function CircleProgress({ percentage }: { percentage: number }) {
  const size = 26;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-accent, #5625F2)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        strokeLinecap="round"
      />
    </svg>
  );
}

// --- Main Component ---
type DynamicIslandTOCProps = {
  children?: ReactNode;
  selector?: string;
};

export function DynamicIslandTOC({
  children,
  selector = "article h1, article h2, article h3, article h4, .prose h1, .prose h2, .prose h3, .prose h4, [data-toc]",
}: DynamicIslandTOCProps) {
  const [headings, setHeadings] = useState<HeadingData[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. DOM Scanning
  useEffect(() => {
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];

      const validHeadings = elements
        .filter((el) => !el.hasAttribute("data-toc-ignore"))
        .map((el, index) => {
          if (!el.id) {
            const generatedId =
              el.textContent
                ?.toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "") || `toc-heading-${index}`;
            el.id = generatedId;
          }

          const depthAttr = el.getAttribute("data-toc-depth");
          let level = 2;

          if (depthAttr) {
            level = parseInt(depthAttr, 10);
          } else {
            const tagName = el.tagName.toUpperCase();
            if (tagName.startsWith("H") && tagName.length === 2) {
              level = parseInt(tagName[1], 10);
            }
          }

          const text = el.getAttribute("data-toc-title") || el.textContent || "Seção";
          return { id: el.id, text, level, element: el };
        });

      validHeadings.sort((a, b) =>
        a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
      );

      setHeadings(validHeadings);
    };

    const timer = setTimeout(getHeadings, 500);
    return () => clearTimeout(timer);
  }, [selector]);

  // 2. Scroll Spy & Progress
  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId: string | null = null;
      for (const heading of headings) {
        const top = heading.element.getBoundingClientRect().top;
        if (top <= 140) {
          currentActiveId = heading.id;
        } else {
          break;
        }
      }

      if (!currentActiveId && headings.length > 0) {
        currentActiveId = headings[0].id;
      }

      setActiveId(currentActiveId);

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const activeHeading = headings.find((h) => h.id === activeId);

  const minLevel = useMemo(() => {
    if (headings.length === 0) return 1;
    return Math.min(...headings.map((h) => h.level));
  }, [headings]);

  return (
    <>
      {children}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={islandTransition}
            style={{ position: 'fixed', inset: 0, zIndex: 9998, backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)' }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div
          onClick={() => {
            if (!isExpanded) setIsExpanded(true);
          }}
          initial={false}
          animate={{
            width: isExpanded ? 360 : 300,
            height: isExpanded ? 440 : 56,
            borderRadius: isExpanded ? 24 : 28,
          }}
          transition={islandTransition}
          style={{ 
            cursor: isExpanded ? "default" : "pointer",
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          {/* CLOSED PILL */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0.95 : 1,
              filter: isExpanded ? "blur(4px)" : "blur(0px)",
            }}
            transition={{ ...islandTransition, delay: isExpanded ? 0 : 0.1 }}
            style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', gap: '16px', padding: '0 20px',
              pointerEvents: isExpanded ? 'none' : 'auto'
            }}
          >
            <div style={{ width: '8px', height: '8px', flexShrink: 0, borderRadius: '50%', backgroundColor: '#111827' }} />

            <div style={{ position: 'relative', display: 'flex', height: '100%', flex: 1, alignItems: 'center', overflow: 'hidden' }}>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeId || "empty"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'block', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '14px', fontWeight: 600, color: '#111827' }}
                >
                  {activeHeading?.text || "Índice do Artigo"}
                </motion.span>
              </AnimatePresence>
            </div>

            <CircleProgress percentage={progress} />
          </motion.div>

          {/* EXPANDED MENU */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 1.05,
            }}
            transition={{ ...islandTransition, delay: isExpanded ? 0.1 : 0 }}
            style={{
              position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
              pointerEvents: !isExpanded ? 'none' : 'auto'
            }}
          >
            <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 16px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: '#6B7280', textTransform: 'uppercase' }}>
                Conteúdo do Artigo
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 24px', overscrollBehavior: 'contain' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {headings.map((h) => {
                  const isActive = activeId === h.id;
                  const isHovered = hoveredId === h.id;
                  const indentLevel = Math.max(0, h.level - minLevel);
                  const paddingLeft = indentLevel * 16 + 16; // 16px base + 16px per depth

                  return (
                    <button
                      key={h.id}
                      onMouseEnter={() => setHoveredId(h.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        const yOffset = -100;
                        const y = h.element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                        setIsExpanded(false);
                      }}
                      style={{
                        padding: `10px 16px 10px ${paddingLeft}px`,
                        display: 'flex',
                        width: '100%',
                        flexShrink: 0,
                        cursor: 'pointer',
                        alignItems: 'center',
                        borderRadius: '8px',
                        border: 'none',
                        textAlign: 'left',
                        fontSize: '15px',
                        transition: 'all 0.2s ease-out',
                        backgroundColor: isActive ? 'rgba(86, 37, 242, 0.08)' : (isHovered ? '#F3F4F6' : 'transparent'),
                        color: isActive ? 'var(--color-accent, #5625F2)' : (isHovered ? '#1F2328' : '#6B7280'),
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', transition: 'transform 0.2s', transform: (isHovered && !isActive) ? 'translateX(4px)' : 'none' }}>
                        {h.text}
                      </span>

                      <motion.div
                        initial={false}
                        animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ marginLeft: '12px', width: '6px', height: '6px', flexShrink: 0, borderRadius: '50%', backgroundColor: 'var(--color-accent, #5625F2)' }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
