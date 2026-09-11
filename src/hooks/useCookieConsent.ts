import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'devshop_cookie_consent';

type Consent = 'accepted' | 'declined' | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
    }
    setHydrated(true);
  }, []);

  const accept = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
  }, []);

  const decline = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
  }, []);

  const shouldShowBanner = hydrated && consent === null;

  return { consent, accept, decline, shouldShowBanner };
}