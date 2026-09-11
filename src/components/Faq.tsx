import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqIds } from '../data/faq';
import styles from './Faq.module.css';

export function Faq() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(faqIds[0]);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.faq.eyebrow}</span>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.subtitle}</p>
        </div>

        <ul className={styles.list}>
          {faqIds.map((id) => {
            const copy = t.faq.items[id];
            const isOpen = openId === id;
            return (
              <li key={id} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                    onClick={() => setOpenId(isOpen ? null : id)}
                  >
                    {copy.question}
                    <ChevronDown className={styles.chevron} size={18} strokeWidth={1.75} aria-hidden="true" />
                  </button>
                </h3>
                <div className={styles.answerWrap}>
                  <div className={styles.answerInner}>
                    <p id={`faq-answer-${id}`} className={styles.answer}>{copy.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
