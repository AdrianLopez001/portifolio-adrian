"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Download, ChevronDown, FileText } from "lucide-react";
import { useI18n } from "./I18nProvider";
import type { Config } from "@/lib/data";

export default function CVDownloadButton({ config }: { config: Config }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = "cv-download-menu";
  const { t } = useI18n();

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard navigation: Escape closes, arrows navigate menu items
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        const trigger = ref.current?.querySelector("button");
        trigger?.focus();
        return;
      }

      const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>(
        '[role="menuitem"]'
      );
      if (!items || items.length === 0) return;

      const focused = document.activeElement;
      const currentIndex = Array.from(items).indexOf(focused as HTMLAnchorElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[next].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prev].focus();
      }
    },
    [isOpen]
  );

  // Focus first menu item when dropdown opens
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        const firstItem = menuRef.current?.querySelector<HTMLAnchorElement>(
          '[role="menuitem"]'
        );
        firstItem?.focus();
      });
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={ref} onKeyDown={handleKeyDown}>
      <button
        id="cv-download-btn"
        onClick={() => setIsOpen((o) => !o)}
        className="btn-primary"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={isOpen ? menuId : undefined}
      >
        <Download size={16} />
        {t("hero.downloadCv")}
        <ChevronDown
          size={14}
          style={{
            transition: "transform 200ms ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          id={menuId}
          ref={menuRef}
          role="menu"
          aria-label={t("cv.menuLabel")}
          className="absolute left-0 mt-2 rounded-xl overflow-hidden z-50"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            boxShadow: "var(--shadow-card-hover)",
            minWidth: "200px",
            animation: "slideDown 150ms ease",
          }}
        >
          <style>{`
            @keyframes slideDown {
              from { opacity: 0; transform: translateY(-8px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <a
            href={config.cvPtUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            tabIndex={0}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-card-hover)] transition-colors duration-150 outline-none focus:bg-[var(--bg-card-hover)]"
            style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.875rem" }}
          >
            <span className="text-lg">🇧🇷</span>
            <div>
              <div style={{ fontWeight: 500 }}>{t("cv.pt")}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t("cv.ptDesc")}</div>
            </div>
            <FileText size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
          </a>

          <div style={{ height: "1px", background: "var(--border)" }} />

          <a
            href={config.cvEnUrl}
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            tabIndex={0}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-card-hover)] transition-colors duration-150 outline-none focus:bg-[var(--bg-card-hover)]"
            style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.875rem" }}
          >
            <span className="text-lg">🇺🇸</span>
            <div>
              <div style={{ fontWeight: 500 }}>{t("cv.en")}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t("cv.enDesc")}</div>
            </div>
            <FileText size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
          </a>
        </div>
      )}
    </div>
  );
}
