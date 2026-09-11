import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getContactDetails } from '../data/contact';
import styles from './Contact.module.css';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialForm: ContactFormState = { name: '', email: '', message: '' };

export function Contact() {
  const { language, t } = useLanguage();
  const details = getContactDetails(language);

  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState(false);

  function validate(values: ContactFormState): ContactFormErrors {
    const next: ContactFormErrors = {};
    if (!values.name.trim()) next.name = language === 'mk' ? 'Внеси име.' : 'Enter your name.';
    if (!EMAIL_PATTERN.test(values.email))
      next.email = language === 'mk' ? 'Внеси валиден е-маил.' : 'Enter a valid email.';
    if (!values.message.trim())
      next.message = language === 'mk' ? 'Внеси порака.' : 'Enter a message.';
    return next;
  }

  function handleChange<K extends keyof ContactFormState>(field: K, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Demo only: нема поврзан бекенд. Замени со реален API повик.
      setSent(true);
      setForm(initialForm);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.subtitle}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>{t.contact.detailsTitle}</h3>
            <ul className={styles.details}>
              {details.map(({ id, Icon, value }) => (
                <li key={id} className={styles.detailRow}>
                  <Icon className={styles.detailIcon} strokeWidth={1.5} aria-hidden="true" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <p className={styles.availability}>{t.contact.availability}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="name">{t.contact.formName}</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{t.contact.formEmail}</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="message">{t.contact.formMessage}</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submit}`}>
              {t.contact.formSubmit}
            </button>

            {sent && <p className={styles.success}>{t.contact.formSent}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
