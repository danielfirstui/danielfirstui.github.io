import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NAV_LINKS = [
  { key: 'howItWorks', href: '#cum-functioneaza' },
  { key: 'pricing', href: '#pricing' },
  { key: 'destinations', href: '#destinatii' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' },
];

const LANGUAGES = ['en', 'de', 'ro'] as const;

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentLang = i18n.language as string;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 h-16
        transition-all duration-300 ease-out
        ${scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <div className="text-white font-bold text-lg tracking-tight">
          {t('brand')}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {t(`nav.${link.key}`)}
            </button>
          ))}
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 text-sm">
            {LANGUAGES.map((lang, index) => (
              <span key={lang} className="flex items-center">
                {index > 0 && <span className="text-slate-600 mx-1">·</span>}
                <button
                  onClick={() => handleLangChange(lang)}
                  className={`
                    transition-colors duration-200 font-medium
                    ${currentLang === lang
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                    }
                  `}
                  aria-label={`Switch to ${lang.toUpperCase()}`}
                >
                  {t(`lang.${lang}`)}
                </button>
              </span>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A]/98 backdrop-blur-md border-t border-slate-800">
          <nav className="flex flex-col px-6 py-4 gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-400 hover:text-white transition-colors duration-200 text-base font-medium py-2 text-left"
              >
                {t(`nav.${link.key}`)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}