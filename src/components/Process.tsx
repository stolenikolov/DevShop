import { useLanguage } from '../i18n/LanguageContext';
import { processIds } from '../data/process';
import styles from './Process.module.css';

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2>{t.process.title}</h2>
          <p>{t.process.subtitle}</p>
        </div>

        <ol className={styles.grid}>
          {processIds.map((id, index) => {
            const copy = t.process.steps[id];
            return (
              <li key={id} className={styles.card}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.tag}>{id}</span>
                <h3 className={styles.title}>{copy.title}</h3>
                <p className={styles.description}>{copy.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
