import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <span className={styles.wordmark}>
            Dev<span className={styles.wordmarkAccent}>Shop</span>
          </span>
          <p className={styles.blurb}>{t.footer.blurb}</p>
          <div className={styles.social} aria-label="Social links">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="mailto:hello@devshop.mk" aria-label="Email">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className={styles.linkCol}>
          <h3 className={styles.colTitle}>{t.footer.quickLinks}</h3>
          <nav className={styles.links} aria-label="Footer">
            <a href="#services">{t.nav.services}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#faq">{t.nav.faq}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
        </div>

        <div className={styles.linkCol}>
          <h3 className={styles.colTitle}>{t.footer.contactTitle}</h3>
          <div className={styles.links}>
            <a href="mailto:hello@devshop.mk">hello@devshop.mk</a>
            <a href="tel:+38921234567">+389 2 123 4567</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.rights}>© {year} DevShop. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
