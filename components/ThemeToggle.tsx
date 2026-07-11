"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={dark ? "Modo claro" : "Modo escuro"}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      style={{ color: "var(--text-secondary)" }}
    >
      <span
        className="absolute transition-all duration-300"
        style={{ opacity: dark ? 1 : 0, transform: dark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)" }}
      >
        <Sun size={18} />
      </span>
      <span
        className="absolute transition-all duration-300"
        style={{ opacity: dark ? 0 : 1, transform: dark ? "rotate(-90deg) scale(0)" : "rotate(0deg) scale(1)" }}
      >
        <Moon size={18} />
      </span>
    </button>
  );
}
