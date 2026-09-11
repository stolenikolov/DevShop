import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <h2>{t.projects.title}</h2>
          <p>{t.projects.subtitle}</p>
        </div>

        <ul className={styles.grid}>
          {projects.map(({ id, year, stack, url, thumbnail }) => {
            const copy = t.projects.items[id];
            return (
              <li key={id} className={styles.card}>
                <div className={styles.thumb}>
                  <img src={thumbnail} alt={copy.title} loading="lazy" />
                </div>

                <div className={styles.body}>
                  <div className={styles.meta}>
                    <span className={styles.year}>{year}</span>
                    <a
                      className={styles.visit}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projects.visitLabel}: ${copy.title}`}
                    >
                      {t.projects.visitLabel}
                      <ExternalLink size={14} strokeWidth={2} />
                    </a>
                  </div>
                  <h3 className={styles.title}>{copy.title}</h3>
                  <p className={styles.description}>{copy.description}</p>
                  <ul className={styles.stack}>
                    {stack.map((tech) => (
                      <li key={tech} className="mono-tag">{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
