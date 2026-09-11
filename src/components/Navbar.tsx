import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Navbar.module.css';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#process', label: t.nav.process },
    { href: '#projects', label: t.nav.projects },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Dev<span className={styles.logoAccent}>Shop</span>
        </a>

        <nav className={styles.nav} aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className={styles.controls}>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            <button
              type="button"
              className={language === 'mk' ? styles.langActive : styles.langBtn}
              onClick={() => setLanguage('mk')}
              aria-pressed={language === 'mk'}
            >
              MK
            </button>
            <span className={styles.langDivider} aria-hidden="true">/</span>
            <button
              type="button"
              className={language === 'en' ? styles.langActive : styles.langBtn}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
