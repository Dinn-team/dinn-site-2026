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

export default function Header() {
  // O menu fica sempre sobre a barra de vidro clara: versão escura do logo e do texto.
  // Antes ele detectava a cor do fundo e nascia branco, e piscava ao carregar.
  const isLightBg = true;
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { t, lang } = useTranslation();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
  ];

  const currentLangObj = languages.find(l => l.code === lang) || languages[0];

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

  const iconColor = '#374151';

  return (
    <header className={`header scrolled ${hideHeader ? 'is-hidden' : ''}`}>
      <div className="wrap">
        <div className="header-bar flex items-center justify-between">

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
                  background: '#fff',
                  border: '1px solid rgba(8,9,10,0.14)',
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
