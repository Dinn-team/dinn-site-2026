import { useState, useEffect } from 'react';
import { SlideTabs } from '@/components/ui/nav-header';
import { useTranslation } from '@/i18n/useTranslation';
import { setLanguage, Language } from '@/i18n/store';

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
  const [isLightBg, setIsLightBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  
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
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (match) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
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
    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(onScroll, 100);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconColor = isLightBg ? '#6B7280' : 'rgba(255,255,255,0.7)';

  return (
    <header className={`header ${isLightBg ? 'scrolled' : ''}`}>
      <div className="wrap">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            {/* Logo do topo: fetchPriority alta e sem lazy — está acima da
                dobra e é um dos primeiros elementos que o visitante vê. */}
            <img
              src={isLightBg ? '/Logo_Dinn_Cinza.svg' : '/Logo_Dinn_Branca.svg'}
              alt="Dinn"
              width={1805}
              height={681}
              fetchPriority="high"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Nav — Sliding Tabs */}
          <nav className="hidden md:flex items-center">
            <SlideTabs scrolled={isLightBg} />
          </nav>

          {/* Right side: Globe + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label="Idioma"
                title="Trocar idioma"
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
                <span style={{ fontSize: '16px' }}>{currentLangObj.flag}</span>
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
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            <div className="flex flex-col gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 rounded-full transition-colors ${isLightBg ? 'bg-[#1F2328]' : 'bg-white'}`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#E5E7EB] shadow-lg">
          <div className="wrap py-6 flex flex-col gap-4">
            <a href="/" className="text-[16px] font-semibold text-[#1F2328]">{t('nav.home')}</a>
            <a href="#solucoes" className="text-[16px] font-semibold text-[#1F2328]">{t('nav.solutions')}</a>
            <a href="#casos-de-uso" className="text-[16px] font-semibold text-[#1F2328]">{t('nav.useCases')}</a>
            <a href="/blog" className="text-[16px] font-semibold text-[#1F2328]">{t('nav.blog')}</a>
            
            <hr className="border-[#E5E7EB] my-2" />
            
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">{t('nav.language')}</span>
              <div className="flex gap-4">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLanguage(l.code); setMobileOpen(false); }}
                    className={`flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-md ${lang === l.code ? 'bg-[#F3F4F6] text-[#1F2328]' : 'text-gray-500'}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
