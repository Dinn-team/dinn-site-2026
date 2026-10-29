import { useState, useEffect } from 'react';
import { SlideTabs } from '@/components/ui/nav-header';
import MobileMenu from '@/components/MobileMenu';
import { useTranslation } from '@/i18n/useTranslation';
import { setLanguage, Language } from '@/i18n/store';
import { contactUrl } from '@/lib/links';

// Globe / translate icon (lucide-style inline SVG)
function GlobeIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

let colorCtx: CanvasRenderingContext2D | null | undefined;
function cssColorToRgb(color: string): [number, number, number] | null {
  if (colorCtx === undefined) colorCtx = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  if (!colorCtx) return null;
  colorCtx.clearRect(0, 0, 1, 1);
  colorCtx.fillStyle = '#000';
  colorCtx.fillStyle = color;
  colorCtx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = colorCtx.getImageData(0, 0, 1, 1).data;
  return a === 0 ? null : [r, g, b];
}

export default function Header() {
  const [isLightBg, setIsLightBg] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { t, lang } = useTranslation();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const header = document.querySelector('header');
          const originalPointerEvents = header ? header.style.pointerEvents : '';
          if (header) header.style.pointerEvents = 'none';

          const el = document.elementFromPoint(window.innerWidth / 2, 36);
          
          if (header) header.style.pointerEvents = originalPointerEvents;

          if (el) {
            let currentEl = el as HTMLElement | null;
            let bg = 'rgba(0, 0, 0, 0)';
            while (currentEl && currentEl !== document.documentElement) {
              const style = window.getComputedStyle(currentEl);
              bg = style.backgroundColor;
              if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent' && bg !== '') break;
              currentEl = currentEl.parentElement;
            }
            // Os fundos do tema vêm em oklch(): o canvas converte qualquer cor para rgb.
            const rgb = cssColorToRgb(bg);
            if (rgb) {
              const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
              setIsLightBg(brightness >= 128);
            } else {
              setIsLightBg(window.scrollY > 20);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    // Reavalia também quando a rolagem para: em saltos longos (links, âncoras) o
    // conteúdo ainda se ajusta depois do último evento, e o menu, que não tem
    // faixa de fundo, ficaria com a cor errada para o fundo atrás dele.
    let settleTimer = 0;
    const settle = () => {
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(onScroll, 180);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', settle, { passive: true });
    setTimeout(onScroll, 100);
    return () => {
      window.clearTimeout(settleTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', settle);
    };
  }, []);

  // Descer = o visitante quer ler: o menu se recolhe com um movimento curto.
  // Subir = procura o topo ou o menu: ele volta. No topo da página, sempre visível.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - last;
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      if (Math.abs(delta) > 6) last = y;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Com a lista de idiomas aberta o menu não some.
  const hideHeader = hidden && !langDropdownOpen;

  const iconColor = isLightBg ? '#6B7280' : 'rgba(255,255,255,0.7)';

  return (
    <header className={`header ${isLightBg ? 'scrolled' : ''} ${hideHeader ? 'is-hidden' : ''}`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            {/* Logo do topo: fetchPriority alta e sem lazy — está acima da
                dobra e é um dos primeiros elementos que o visitante vê. */}
            <img
              src={isLightBg ? '/logo/Dinn_logo_v2_Light.svg' : '/logo/Dinn_logo_v2_Dark.svg'}
              alt="Dinn"
              width={394}
              height={152}
              fetchPriority="high"
              className="h-7 w-auto"
            />
          </a>

          {/* Desktop Nav — Sliding Tabs */}
          <nav className="hidden lg:flex items-center">
            <SlideTabs scrolled={isLightBg} />
          </nav>

          {/* Right side: Globe + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={langDropdownOpen}
                aria-label={t('nav.languageLabel')}
                title={t('nav.languageLabel')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 12px',
                  height: '36px',
                  borderRadius: '9999px',
                  background: isLightBg ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)',
                  border: isLightBg ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  gap: '6px'
                }}
              >
                <GlobeIcon color={iconColor} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: iconColor }}>{currentLangObj.code.toUpperCase()}</span>
              </button>
              
              {langDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: '8px',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  padding: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  minWidth: '130px',
                  zIndex: 50
                }}>
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangDropdownOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-md text-[14px] font-medium text-gray-800 text-left"
                    >
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href={contactUrl('menu')} className="btn btn-primary">
              {t('nav.cta')}
            </a>
          </div>

          {/* Menu de tablet e celular (<1024px): botão + painel em tela cheia */}
          <MobileMenu isLightBg={isLightBg} />
        </div>
      </div>
    </header>
  );
}
