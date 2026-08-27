import { Sparkles } from "@/components/ui/sparkles"
import { useTranslation } from "@/i18n/useTranslation";

export function ClientLogos() {
  const { t } = useTranslation();
  return (
    <section style={{ background: "transparent", width: "100%", overflow: "hidden", position: "relative", paddingBottom: "0" }}>
      {/* Title + Logos */}
      <div className="wrap" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        {/* Title */}
        <p style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "40px",
        }}>
          {t('logos.title')}
        </p>

        {/* Logos row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "48px",
          opacity: 0.6,
          filter: "grayscale(1)",
        }}>
          {/* width/height são as dimensões reais dos arquivos: dão ao navegador
              a proporção para reservar o espaço antes da imagem chegar, evitando
              que a faixa de logos salte. O CSS acima segue mandando no tamanho. */}
          <img src="/clientes/2TT34cxYkS2JUU2rklS0yDIU5c.avif" alt="Eurofarma" width={512} height={92} loading="lazy" decoding="async" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          <img src="/clientes/YewE4auu86Zyxd9HTI5pPwyZujk.avif" alt="Libbs" width={512} height={189} loading="lazy" decoding="async" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          <img src="/clientes/marjanlogo-removebg-preview.png" alt="Marjan" width={392} height={129} loading="lazy" decoding="async" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          <img src="/clientes/q5GXskJxl7qrQpg4qttvwnhJI.avif" alt="Sanofi" width={512} height={132} loading="lazy" decoding="async" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        </div>
      </div>

      {/* Sparkles + arc — seamless transition to SolucoesSection */}
      <div style={{
        position: "relative",
        height: "280px",
        width: "100%",
        overflow: "hidden",
        background: "transparent",
        marginTop: "-16px",
      }}>
        {/* Purple glow */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at bottom center, rgba(131,80,232,0.28) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        {/* Curved arc that fills with dark color */}
        <div style={{
          position: "absolute",
          left: "-50%",
          top: "40%",
          width: "200%",
          aspectRatio: "1/0.55",
          borderRadius: "100%",
          borderTop: "1px solid rgba(131,80,232,0.18)",
          background: "#1F2328",
          zIndex: 10,
        }} />
        {/* Sparkles particles */}
        <Sparkles
          density={1000}
          className="absolute inset-x-0 bottom-0 h-full w-full"
          color="#ffffff"
        />
      </div>
    </section>
  )
}

