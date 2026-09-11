import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useCookieConsent } from '../hooks/useCookieConsent';
import styles from './CookieBanner.module.css';

export function CookieBanner() {
  const { t } = useLanguage();
  const { shouldShowBanner, accept, decline } = useCookieConsent();
  const dialogRef = useRef<HTMLDivElement>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!shouldShowBanner) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    acceptRef.current?.focus();
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        decline();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [shouldShowBanner, decline]);

  if (!shouldShowBanner) return null;

  return (
    <div className={styles.overlay}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Cookies"
        aria-describedby="cookie-text"
      >
        <p id="cookie-text" className={styles.text}>{t.cookies.text}</p>
        <div className={styles.actions}>
          <button ref={acceptRef} type="button" className="btn btn-primary" onClick={accept}>
            {t.cookies.accept}
          </button>
          <button type="button" className="btn btn-ghost" onClick={decline}>
            {t.cookies.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
