"use client";

import { useState, useRef, useEffect } from "react";
import { Download, ChevronDown, FileText } from "lucide-react";

export default function CVDownloadButton({ config }: { config: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        id="cv-download-btn"
        onClick={() => setIsOpen((o) => !o)}
        className="btn-primary"
      >
        <Download size={16} />
        Baixar Currículo
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
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-card-hover)] transition-colors duration-150"
            style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.875rem" }}
          >
            <span className="text-lg">🇧🇷</span>
            <div>
              <div style={{ fontWeight: 500 }}>Português</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>CV em português</div>
            </div>
            <FileText size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
          </a>

          <div style={{ height: "1px", background: "var(--border)" }} />

          <a
            href={config.cvEnUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--bg-card-hover)] transition-colors duration-150"
            style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.875rem" }}
          >
            <span className="text-lg">🇺🇸</span>
            <div>
              <div style={{ fontWeight: 500 }}>English</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Resume in English</div>
            </div>
            <FileText size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
          </a>
        </div>
      )}
    </div>
  );
}
