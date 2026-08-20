"use client";

import { useState } from "react";
import { Menu, X, Code2, Briefcase, Cpu, User, Mail } from "lucide-react";
import { useI18n } from "./I18nProvider";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { href: "#sobre", labelKey: "nav.about" as const, icon: User },
    { href: "#skills", labelKey: "nav.skills" as const, icon: Cpu },
    { href: "#experiencia", labelKey: "nav.experience" as const, icon: Briefcase },
    { href: "#projetos", labelKey: "nav.projects" as const, icon: Code2 },
    { href: "#contato", labelKey: "nav.contact" as const, icon: Mail },
  ];

  return (
    <div className="md:hidden">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-colors cursor-pointer"
        style={{
          background: "var(--bg-card-hover)",
          color: "var(--text-primary)",
          border: "1px solid var(--border)",
        }}
        aria-label="Alternar Menu Nav"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[57px] z-40 flex flex-col p-6 shadow-2xl transition-all"
          style={{
            background: "color-mix(in srgb, var(--bg-main) 95%, transparent)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <nav className="flex flex-col gap-3 my-4">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-colors"
                  style={{
                    color: "var(--text-primary)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    textDecoration: "none",
                  }}
                >
                  <Icon size={18} className="text-[var(--accent)]" />
                  {t(item.labelKey)}
                </a>
              );
            })}
          </nav>

          <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
            <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              Preferências
            </span>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
