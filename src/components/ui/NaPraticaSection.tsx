import { useTranslation } from "@/i18n/useTranslation";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Step = { question: string; answer: string; data: string };

// O fluxo "produto → rede → lojas → verificação → responsável → rotina" do deck
// Biolab, contado como um exemplo único do começo ao fim.
export function NaPraticaSection() {
  const { t } = useTranslation();
  const steps = (t("naPratica.steps") as Step[]) ?? [];

  return (
    <section className="hs hs--surface">
      <div className="wrap">
        <SectionHeading
          eyebrow={t("naPratica.eyebrow") as string}
          title={t("naPratica.title") as string}
          intro={t("naPratica.intro") as string}
        />
        <ol className="steps" style={{ listStyle: "none" }}>
          {steps.map((step, i) => (
            <li key={step.question} className="step">
              <span className="step-num">{i + 1}</span>
              <p className="step-q">{step.question}</p>
              <p className="step-a">{step.answer}</p>
              <span className="tag tag--neutral step-data">{step.data}</span>
            </li>
          ))}
        </ol>
        <p className="note">{t("naPratica.note")}</p>
      </div>
    </section>
  );
}
