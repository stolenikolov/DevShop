import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">{t.hero.eyebrow}</span>

          <h1 className={styles.headline}>
            {t.hero.headlineLine1}
            <br />
            <span className={styles.accentLine}>{t.hero.headlineLine2}</span>
          </h1>

          <p className={styles.subtext}>
            {t.hero.subtext}{' '}
            <span className={styles.proof}>
              <strong>{t.hero.proofValue}</strong> {t.hero.proofLabel}.
            </span>
          </p>

          <div className={styles.actions}>
            <a href="#services" className="btn btn-primary">{t.hero.ctaPrimary}</a>
            <a href="#contact" className={styles.secondaryLink}>{t.hero.ctaSecondary}</a>
          </div>

          <p className={styles.meta}>{t.hero.meta}</p>
        </div>
      </div>
    </section>
  );
}
