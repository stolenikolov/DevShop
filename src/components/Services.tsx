import { useLanguage } from '../i18n/LanguageContext';
import { serviceIds } from '../data/services';
import styles from './Services.module.css';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.title}</h2>
          <p>{t.services.subtitle}</p>
        </div>

        <ul className={styles.grid}>
          {serviceIds.map((id) => {
            const copy = t.services.items[id];
            return (
              <li key={id} className={styles.card}>
                <span className={styles.tag}>{id}</span>
                <h3 className={styles.title}>{copy.title}</h3>
                <p className={styles.description}>{copy.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
