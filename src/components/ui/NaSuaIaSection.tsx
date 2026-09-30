import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Dinn dentro do ChatGPT, Claude ou Copilot via MCP (somente leitura).
// Conversa reproduzida do deck Biolab; os ambientes aparecem só pelo nome,
// sem logos, para não sugerir parceria.
export function NaSuaIaSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const envs = (t("naSuaIa.envs") as string[]) ?? [];
  const bullets = (t("naSuaIa.bullets") as string[]) ?? [];
  const rows = (t("naSuaIa.chat.rows") as string[][]) ?? [];

  const inView = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { delay, duration: 0.45, ease: "easeOut" as const },
        };

  return (
    <section className="hs hs--dark">
      <div className="wrap">
        <div className="home-two-col">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow={t("naSuaIa.eyebrow") as string}
              title={t("naSuaIa.title") as string}
              intro={t("naSuaIa.description") as string}
            />
            <div className="env-list" style={{ marginTop: "calc(-1 * var(--sp-6))" }}>
              {envs.map((e) => <span key={e} className="env">{e}</span>)}
            </div>
            <ul className="check-list">
              {bullets.map((b) => (
                <li key={b}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="chat">
              <div className="chat-head">{t("naSuaIa.chat.header")}</div>
              <div className="chat-body">
                <motion.p className="bubble-user" {...inView(0.1)}>{t("naSuaIa.chat.user")}</motion.p>
                <motion.div className="bubble-ai" {...inView(0.7)}>
                  <p className="bubble-label">{t("naSuaIa.chat.aiLabel")}</p>
                  <p>{t("naSuaIa.chat.answer")}</p>
                  <div className="bars">
                    {rows.map(([name, value, detail]) => (
                      <div key={name} className="bar-row">
                        <span>{name}</span>
                        <div className="bar-track">
                          <motion.div
                            className="bar-fill"
                            initial={reduce ? false : { width: 0 }}
                            whileInView={{ width: `${parseFloat(value) * 2.5}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                            style={reduce ? { width: `${parseFloat(value) * 2.5}%` } : undefined}
                          />
                        </div>
                        <strong>{value}</strong>
                        <small>{detail}</small>
                      </div>
                    ))}
                  </div>
                  <p className="bubble-suggestion">{t("naSuaIa.chat.suggestion")}</p>
                </motion.div>
              </div>
            </div>
            <p className="note">{t("naSuaIa.note")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
