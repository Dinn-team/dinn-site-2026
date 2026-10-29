import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';
import { Rich } from '@/lib/rich-text';
import { contactUrl } from '@/lib/links';
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller';

type Faq = { question: string; answer: string };

// Chat flutuante à direita (substitui a seção de dúvidas). O visitante escolhe
// uma pergunta do menu e o guia responde; "Voltar ao menu" abre a lista de novo.
// As perguntas e respostas vêm de faq.items, o mesmo texto de antes.
export function ChatWidget2() {
  const { t } = useTranslation();
  const items = (t('faq.items') as Faq[]) ?? [];
  const [open, setOpen] = useState(false);
  const [asked, setAsked] = useState<number[]>([]);
  const [menu, setMenu] = useState(true);

  const ask = (i: number) => {
    setAsked((a) => [...a, i]);
    setMenu(false);
  };

  return (
    <div className="h2-chat">
      {open && (
        <section className="h2-chat-panel" role="dialog" aria-label={t('home2.faq.label') as string}>
          <header className="h2-chat-head">
            <span className="h2-orb" aria-hidden="true" />
            <strong>{t('home2.faq.label')}</strong>
            <button type="button" className="h2-chat-x" onClick={() => setOpen(false)} aria-label={t('home2.faq.close') as string}>
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <MessageScrollerProvider>
            <MessageScroller className="h2-chat-scroll">
              <MessageScrollerViewport>
                <MessageScrollerContent className="h2-chat-list">
                  <MessageScrollerItem><p className="h2-msg is-bot">{t('home2.faq.hello')}</p></MessageScrollerItem>
                  {asked.map((qi, n) => (
                    <div key={`${qi}-${n}`} className="h2-chat-turn">
                      <MessageScrollerItem scrollAnchor={n === asked.length - 1}>
                        <p className="h2-msg is-user">{items[qi]?.question}</p>
                      </MessageScrollerItem>
                      <MessageScrollerItem>
                        <p className="h2-msg is-bot"><Rich text={items[qi]?.answer ?? ''} /></p>
                      </MessageScrollerItem>
                    </div>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>

          <footer className="h2-chat-foot">
            {menu ? (
              <>
                <p>{t('home2.faq.menu')}</p>
                <ul>
                  {items.map((q, i) => (
                    <li key={q.question}><button type="button" onClick={() => ask(i)}>{q.question}</button></li>
                  ))}
                </ul>
              </>
            ) : (
              <div className="h2-chat-actions">
                <button type="button" className="h2-chat-back" onClick={() => setMenu(true)}>
                  <ArrowLeft size={15} aria-hidden="true" /> {t('home2.faq.back')}
                </button>
                <a className="h2-link" href={contactUrl('chat')}>{t('home2.faq.ask')}</a>
              </div>
            )}
          </footer>
        </section>
      )}

      <button type="button" className="h2-chat-fab" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={t('home2.faq.open') as string}>
        <span className="h2-orb" aria-hidden="true" />
        <span>{t('home2.faq.title')}</span>
      </button>
    </div>
  );
}
