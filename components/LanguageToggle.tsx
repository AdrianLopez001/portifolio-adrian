"use client";

import { useI18n } from "./I18nProvider";

export default function LanguageToggle() {
  const { locale, t, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      aria-label={t("lang.label")}
      title={t("lang.label")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      style={{ color: "var(--text-secondary)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.02em" }}
    >
      {locale === "pt" ? "EN" : "PT"}
    </button>
  );
}
