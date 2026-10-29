import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';

type Faq = { question: string; answer: string };

// FAQ como bot guiado: um menu de perguntas. Clicar em uma mostra a resposta;
// "Voltar ao menu" abre o menu de novo.
export function FaqBot2() {
  const { t } = useTranslation();
  const items = (t('faq.items') as Faq[]) ?? [];
  const [sel, setSel] = useState<number | null>(null);
  const item = sel === null ? null : items[sel];

  return (
    <section id="duvidas" className="h2-section h2-faq" aria-labelledby="h2-faq-title">
      <div className="h2-wrap h2-faq-grid">
        <div className="h2-faq-intro">
          <h2 id="h2-faq-title" className="h2-title">{t('home2.faq.title')}</h2>
          <a className="h2-link" href={contactUrl('faq')}>{t('home2.faq.ask')} <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="h2-bot" aria-live="polite">
          <div className="h2-bot-head">
            <span className="h2-orb" aria-hidden="true" />
            <span>{t('home2.faq.label')}</span>
          </div>
          <div className="h2-bot-body">
            <p className="h2-msg is-bot">{t('home2.faq.hello')}</p>
            {item && (
              <>
                <p className="h2-msg is-user">{item.question}</p>
                <p className="h2-msg is-bot"><Rich text={item.answer} /></p>
              </>
            )}
          </div>
          {item ? (
            <button type="button" className="h2-bot-back" onClick={() => setSel(null)}>
              <ArrowLeft size={15} aria-hidden="true" /> {t('home2.faq.back')}
            </button>
          ) : (
            <div className="h2-bot-menu">
              <p>{t('home2.faq.menu')}</p>
              <ul>
                {items.map((q, i) => (
                  <li key={q.question}><button type="button" onClick={() => setSel(i)}>{q.question}</button></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
