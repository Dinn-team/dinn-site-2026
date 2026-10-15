import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAV_LINKS, getSubmenu } from '@/components/ui/nav-header';
import { useTranslation } from '@/i18n/useTranslation';
import { setLanguage, Language } from '@/i18n/store';
import { contactUrl } from '@/lib/links';

const LANGS: Language[] = ['pt', 'en', 'es'];

function Chevron({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

interface MobileMenuProps {
  /** Header sobre fundo claro (muda a cor das barras do botão fechado). */
  isLightBg: boolean;
}

/**
 * Menu de tablet e celular (<1024px). O botão fica na barra do topo; o painel
 * abre em tela cheia, opaco, via portal no <body> (o header usa backdrop-filter,
 * que prenderia um elemento fixed dentro dele).
 */
export default function MobileMenu({ isLightBg }: MobileMenuProps) {
  const { t, lang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLElement | null>(null);
  const panelId = useId();
  const subId = useId();

  useEffect(() => setMounted(true), []);

  const close = (restoreFocus = true) => {
    setOpen(false);
    setOpenSub(null);
    if (restoreFocus) buttonRef.current?.focus();
  };

  // Trava a rolagem do fundo, Escape e armadilha de foco enquanto aberto.
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    firstItemRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      ).filter((el) => el.offsetParent !== null || el === document.activeElement);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    // Se a janela crescer para o desktop com o menu aberto, fecha.
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => { if (mq.matches) close(false); };
    mq.addEventListener('change', onMq);

    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const barClass = `mm-bars${isLightBg ? ' mm-bars--dark' : ''}${open ? ' mm-bars--x' : ''}`;

  const panel = (
    <div
      ref={panelRef}
      id={panelId}
      className="mm-panel"
      role="dialog"
      aria-modal="true"
      aria-label={t('nav.openMenu')}
    >
      <div className="mm-top">
        <a href="/" className="mm-logo" onClick={() => close(false)} aria-label="Dinn">
          <img src="/Logo_Dinn_Cinza.svg" alt="Dinn" width={1805} height={681} />
        </a>
        <button
          type="button"
          className="mm-toggle mm-toggle--close"
          onClick={() => close()}
          aria-label="Fechar menu"
        >
          <span className="mm-bars mm-bars--dark mm-bars--x" aria-hidden="true">
            <i /><i /><i />
          </span>
        </button>
      </div>

      <div className="mm-scroll">
        <nav className="mm-col" aria-label={t('nav.openMenu')}>
          <ul className="mm-list">
            {NAV_LINKS.map(({ key, href, menu }, idx) => {
              const isFirst = idx === 0;
              const sub = getSubmenu(menu, t, lang);
              if (menu && sub) {
                const isOpen = openSub === menu;
                const id = `${subId}-${menu}`;
                return (
                  <li key={href} className="mm-item">
                    <button
                      type="button"
                      className="mm-row mm-row--btn"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setOpenSub(isOpen ? null : menu)}
                      ref={isFirst ? (el) => { firstItemRef.current = el; } : undefined}
                    >
                      <span>{t(key)}</span>
                      <Chevron className={`mm-chev ${isOpen ? 'is-open' : ''}`} />
                    </button>
                    <div id={id} className={`mm-sub ${isOpen ? 'is-open' : ''}`}>
                      <div className="mm-sub-inner">
                        <ul className="mm-sublist">
                          {sub.items.map((a) => (
                            <li key={a.href}>
                              <a href={a.href} className="mm-subrow" onClick={() => close(false)}>
                                {a.label}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a href={sub.allHref} className="mm-subrow mm-subrow--all" onClick={() => close(false)}>
                              {sub.allLabel}
                              <Chevron className="mm-chev" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={href} className="mm-item">
                  <a
                    href={href}
                    className="mm-row"
                    onClick={() => close(false)}
                    ref={isFirst ? (el) => { firstItemRef.current = el; } : undefined}
                  >
                    <span>{t(key)}</span>
                    <Chevron className="mm-chev" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mm-foot">
        <div className="mm-col">
          <a
            href={contactUrl('menu-celular')}
            className="mm-cta"
            onClick={() => close(false)}
          >
            {t('nav.cta')}
          </a>
          <div className="mm-lang" role="group" aria-label={t('nav.languageLabel')}>
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                className={`mm-lang-btn ${lang === code ? 'is-active' : ''}`}
                aria-pressed={lang === code}
                onClick={() => setLanguage(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="mm-toggle mm-toggle--bar"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('nav.openMenu')}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? panelId : undefined}
      >
        <span className={barClass} aria-hidden="true">
          <i /><i /><i />
        </span>
      </button>
      {mounted && open ? createPortal(panel, document.body) : null}
    </>
  );
}
