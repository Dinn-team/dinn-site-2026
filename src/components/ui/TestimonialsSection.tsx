import React from "react";
import { CircularTestimonials, Testimonial } from "./circular-testimonials";
import { useTranslation } from "@/i18n/useTranslation";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  // Map translations to Testimonial interface
  const testimonialsData = [0, 1, 2, 3].map((i) => ({
    quote: t(`testimonials.items.${i}.quote`),
    name: t(`testimonials.items.${i}.name`),
    designation: t(`testimonials.items.${i}.designation`),
    src: t(`testimonials.items.${i}.src`)
  })) as Testimonial[];

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fafbfc 45%, #ffffff 100%)",
        padding: "100px 0",
      }}
    >
      <div className="wrap">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontFamily: "var(--font)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            color: "#1F2328",
            letterSpacing: "-0.03em",
            lineHeight: 1.1
          }}>
            {t('testimonials.title')}
          </h2>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>
          <CircularTestimonials
            testimonials={testimonialsData}
            autoplay={true}
            readMoreLabel={t("testimonials.readMore")}
            readLessLabel={t("testimonials.readLess")}
            colors={{
              name: "#1F2328",
              designation: "#6B7280",
              testimony: "#4B5563",
              arrowBackground: "#ffffff",
              arrowForeground: "#1F2328",
              arrowHoverBackground: "#5625F2",
            }}
            fontSizes={{
              name: "15px",
              designation: "13px",
              quote: "clamp(16px, 1.8vw, 18px)",
            }}
          />
        </div>
      </div>
      
      <style>{`
        /* Overriding some default arrow button styles for Dinn's Design System */
        .arrow-button {
          border: 1px solid #E5E7EB !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05) !important;
        }
        .arrow-button:hover {
          border-color: #5625F2 !important;
        }
        .arrow-button:hover svg {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
