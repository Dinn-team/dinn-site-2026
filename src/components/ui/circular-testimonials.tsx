"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
  readMoreLabel?: string;
  readLessLabel?: string;
}

const STACK_LAYERS = [
  { rotate: -2.2, y: 14, scale: 0.97, opacity: 0.45 },
  { rotate: 1.4, y: 7, scale: 0.985, opacity: 0.7 },
] as const;

/**
 * Espaçamento em px (inline) — garante aplicação mesmo quando
 * utilitários Tailwind em constantes não entram no bundle.
 */
const CARD_PADDING = {
  paddingTop: "clamp(32px, 4vw, 44px)",
  paddingRight: "clamp(36px, 6vw, 56px)",
  paddingBottom: "clamp(36px, 5vw, 48px)",
  paddingLeft: "clamp(36px, 6vw, 56px)",
} as const;

const QUOTE_LINE_CLAMP = 3;

const GAP = {
  stackTop: 24,
  stackBottom: 20,
  quoteMarkBottom: 20,
  readMoreTop: 20,
  footerMarginTop: 40,
  footerPaddingTop: 28,
  footerGap: 16,
  authorNameTop: 6,
  arrowsMarginTop: 48,
  arrowsGap: 24,
  dotsMarginTop: 24,
  dotsGap: 10,
} as const;

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
  readMoreLabel = "Ver mais",
  readLessLabel = "Ver menos",
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#1F2328";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#4b5563";
  const colorArrowBg = colors.arrowBackground ?? "#ffffff";
  const colorArrowFg = colors.arrowForeground ?? "#1F2328";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#5625F2";
  const fontSizeName = fontSizes.name ?? "0.9375rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.8125rem";
  const fontSizeQuote = fontSizes.quote ?? "1.0625rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);

  const quoteRef = useRef<HTMLParagraphElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  useEffect(() => {
    setIsExpanded(false);
    setIsTruncated(false);
  }, [activeIndex]);

  const measureTruncation = useCallback(() => {
    const el = quoteRef.current;
    if (!el) return;

    if (isExpanded) {
      setIsTruncated(true);
      return;
    }

    setIsTruncated(el.scrollHeight > el.clientHeight + 1);
  }, [isExpanded]);

  useLayoutEffect(() => {
    measureTruncation();
  }, [activeIndex, activeTestimonial.quote, measureTruncation]);

  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => measureTruncation());
    observer.observe(el);
    return () => observer.disconnect();
  }, [measureTruncation]);

  useEffect(() => {
    if (!autoplay) return;

    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 6000);

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength, activeIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength
    );
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  const quoteVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

  const showExpandControl = isTruncated || isExpanded;

  return (
    <motion.div
      className="testimonial-container mx-auto w-full max-w-2xl px-2 sm:px-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative"
        style={{
          paddingTop: GAP.stackTop,
          paddingBottom: GAP.stackBottom,
        }}
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {STACK_LAYERS.map((layer, i) => (
          <div
            key={i}
            aria-hidden
            className="absolute rounded-[20px] border border-[#E8EAED] bg-white"
            style={{
              left: "clamp(12px, 3vw, 20px)",
              right: "clamp(12px, 3vw, 20px)",
              top: 0,
              bottom: 0,
              transform: `rotate(${layer.rotate}deg) translateY(${layer.y}px) scale(${layer.scale})`,
              opacity: layer.opacity,
              boxShadow: "0 8px 28px rgba(15, 23, 42, 0.06)",
              zIndex: i,
            }}
          />
        ))}

        <AnimatePresence mode="wait">
          <motion.article
            key={activeIndex}
            className="relative z-10 rounded-[20px] border border-[#E5E7EB] bg-white"
            style={{
              ...CARD_PADDING,
              boxShadow:
                "0 16px 40px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04)",
            }}
            variants={quoteVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-0 h-3 w-14 -translate-x-1/2 rounded-b-full bg-[#F3F4F6]"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            <span
              className="block font-bold leading-none text-[#1F2328]"
              aria-hidden
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3rem)",
                marginBottom: GAP.quoteMarkBottom,
              }}
            >
              “
            </span>

            <motion.div className="quote-container relative">
              <motion.p
                ref={quoteRef}
                layout
                className="quote m-0"
                style={{
                  color: colorTestimony,
                  fontSize: fontSizeQuote,
                  lineHeight: 1.8,
                  display: isExpanded ? "block" : "-webkit-box",
                  WebkitLineClamp: isExpanded ? "unset" : QUOTE_LINE_CLAMP,
                  WebkitBoxOrient: "vertical",
                  overflow: isExpanded ? "visible" : "hidden",
                }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={`${activeIndex}-${i}`}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                      delay: 0.02 * Math.min(i, 24),
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              {showExpandControl && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="cursor-pointer border-0 bg-transparent p-0 font-semibold"
                  style={{
                    color: colorArrowHoverBg,
                    fontSize: "0.875rem",
                    marginTop: GAP.readMoreTop,
                  }}
                >
                  {isExpanded ? readLessLabel : readMoreLabel}
                </button>
              )}
            </motion.div>

            <footer
              className="flex items-center justify-between border-t border-[#ECEEF1]"
              style={{
                marginTop: GAP.footerMarginTop,
                paddingTop: GAP.footerPaddingTop,
              }}
            >
              <motion.div
                className="flex min-w-0 items-center"
                style={{ gap: GAP.footerGap }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <div
                  className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-[#E5E7EB]"
                  style={{ width: 44, height: 44 }}
                >
                  <img
                    src={activeTestimonial.src}
                    alt={activeTestimonial.name}
                    width={44}
                    height={44}
                    className="h-full w-full object-cover"
                    style={{
                      filter: "grayscale(100%)",
                      opacity: 0.88,
                      transform: "scale(1.08)",
                    }}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="name m-0 truncate font-bold"
                    style={{
                      color: colorName,
                      fontSize: fontSizeName,
                      lineHeight: 1.3,
                    }}
                  >
                    {activeTestimonial.name}
                  </p>
                  <p
                    className="designation m-0 truncate"
                    style={{
                      color: colorDesignation,
                      fontSize: fontSizeDesignation,
                      lineHeight: 1.45,
                      marginTop: GAP.authorNameTop,
                    }}
                  >
                    {activeTestimonial.designation}
                  </p>
                </div>
              </motion.div>
            </footer>
          </motion.article>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="arrow-buttons flex justify-center"
        style={{ marginTop: GAP.arrowsMarginTop, gap: GAP.arrowsGap }}
      >
        <button
          type="button"
          className="arrow-button prev-button"
          onClick={handlePrev}
          style={{
            backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
            width: "2.7rem",
            height: "2.7rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={22} color={hoverPrev ? "#fff" : colorArrowFg} />
        </button>
        <button
          type="button"
          className="arrow-button next-button"
          onClick={handleNext}
          style={{
            backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
            width: "2.7rem",
            height: "2.7rem",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s, border-color 0.3s",
            border: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
          aria-label="Next testimonial"
        >
          <ArrowRight size={22} color={hoverNext ? "#fff" : colorArrowFg} />
        </button>
      </motion.div>

      <motion.div
        className="flex justify-center"
        style={{ marginTop: GAP.dotsMarginTop, gap: GAP.dotsGap }}
        role="tablist"
        aria-label="Depoimentos"
      >
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Depoimento ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer border-0 p-0 transition-all duration-300"
            style={{
              width: index === activeIndex ? 22 : 8,
              height: 8,
              borderRadius: 999,
              background: index === activeIndex ? colorArrowHoverBg : "#D1D5DB",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CircularTestimonials;
