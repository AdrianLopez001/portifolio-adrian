"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale, type TranslationKey } from "@/lib/i18n";

interface I18nContextValue {
  locale: Locale;
  t: (key: TranslationKey) => string;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "pt";
    const stored = localStorage.getItem("locale") as Locale | null;
    return stored === "en" ? "en" : "pt";
  });

  // Sync document lang attribute with current locale
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("locale", next);
      document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
      return next;
    });
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}
