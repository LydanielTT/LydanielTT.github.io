import { useState } from 'react';

type Locale = 'en' | 'fr';

const STORAGE_KEY = 'locale';

const getInitialLocale = (): Locale => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'fr') return saved;
  return navigator.language.startsWith('fr') ? 'fr' : 'en';
};

export const useLocale = () => {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  const toggle = () => {
    setLocale((current) => {
      const next: Locale = current === 'en' ? 'fr' : 'en';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return { locale, toggle };
};
