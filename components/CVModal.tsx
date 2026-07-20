"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Printer, Download, ExternalLink, Globe } from "lucide-react";
import { useI18n } from "./I18nProvider";
import type { Config } from "@/lib/data";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: Config;
}

export default function CVModal({ isOpen, onClose, config }: CVModalProps) {
  const { locale: appLocale } = useI18n();
  const [activeLang, setActiveLang] = useState<"pt" | "en">(appLocale || "pt");

  // Sync modal language with app locale when opened
  useEffect(() => {
    if (isOpen) {
      setActiveLang(appLocale || "pt");
    }
  }, [isOpen, appLocale]);

  // Handle ESC key to close
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "fadeIn 200ms ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .printable-cv-area, .printable-cv-area * {
            visibility: visible;
          }
          .printable-cv-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col my-auto shadow-2xl"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          maxHeight: "90vh",
          animation: "scaleUp 200ms ease",
        }}
      >
        {/* Modal Top Toolbar */}
        <div
          className="no-print flex items-center justify-between px-6 py-4 border-b shrink-0 flex-wrap gap-3"
          style={{
            background: "color-mix(in srgb, var(--bg-main) 90%, transparent)",
            borderColor: "var(--border)",
          }}
        >
          {/* Language Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl" style={{ background: "var(--bg-main)", border: "1px solid var(--border)" }}>
            <button
              onClick={() => setActiveLang("pt")}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeLang === "pt"
                  ? "shadow-sm"
                  : "hover:opacity-80"
              }`}
              style={{
                background: activeLang === "pt" ? "var(--accent)" : "transparent",
                color: activeLang === "pt" ? "#ffffff" : "var(--text-secondary)",
              }}
            >
              <span>🇧🇷</span> Português
            </button>
            <button
              onClick={() => setActiveLang("en")}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeLang === "en"
                  ? "shadow-sm"
                  : "hover:opacity-80"
              }`}
              style={{
                background: activeLang === "en" ? "var(--accent)" : "transparent",
                color: activeLang === "en" ? "#ffffff" : "var(--text-secondary)",
              }}
            >
              <span>🇺🇸</span> English
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all"
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
              }}
              title="Imprimir ou Salvar em PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>

            <a
              href={activeLang === "pt" ? config.cvPtUrl : config.cvEnUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all"
              style={{
                background: "var(--accent)",
                color: "#ffffff",
              }}
            >
              <Download size={14} />
              <span>Baixar PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl transition-all"
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 flex-1 printable-cv-area">
          {activeLang === "pt" ? (
            /* PORTUGUESE CV CONTENT */
            <div className="max-w-3xl mx-auto space-y-6 text-sm" style={{ color: "var(--text-primary)" }}>
              {/* Header */}
              <div className="border-b pb-5" style={{ borderColor: "var(--border)" }}>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                  Adrian Gonçalves Lopes
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span>Natal, RN</span>
                  <span>•</span>
                  <span>+55 (84) 98612-6488</span>
                  <span>•</span>
                  <a href="mailto:adrianlopes.dev@gmail.com" className="hover:underline" style={{ color: "var(--accent)" }}>
                    adrianlopes.dev@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> github.com/AdrianLopez001
                  </a>
                  <span>•</span>
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> linkedin.com/in/adrian-lopes-a42699371
                  </a>
                </div>
              </div>

              {/* OBJETIVO */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  OBJETIVO
                </h2>
                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                  Desenvolvedor Backend com experiência prática em automação e integração de sistemas (WhatsApp, estoque, dados financeiros), atuando atualmente na Cartec Bosch. Aprofundando conhecimentos em Spring Boot, PostgreSQL e JWT.
                </p>
              </section>

              {/* EXPERIÊNCIA */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  EXPERIÊNCIA
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Desenvolvedor Backend — <span style={{ color: "var(--accent)" }}>Cartec Bosch</span>
                      </span>
                      <span className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                        Fev/2026 – Atual
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Módulo de estoque com geração automática de itens de revisão</li>
                      <li>Dashboard financeiro com análise automática de PDFs e NF-e, eliminando lançamento manual</li>
                      <li>Atendimento automatizado via WhatsApp com agentes de IA</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Desenvolvedor Backend — <span style={{ color: "var(--accent)" }}>Loja Rei das Válvulas</span>
                      </span>
                      <span className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                        Jan/2024 – Fev/2025
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Responsável técnico pelos processos digitais internos</li>
                      <li>Automação de atendimento via WhatsApp</li>
                      <li>Integração de dados entre filiais</li>
                      <li>Manutenção do sistema de controle de estoque</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROJETOS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  PROJETOS
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Previsão de resultados de futebol com ML (Python) + API Java/Spring Boot</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Mapa 3D interativo de Natal (MapLibre GL JS), Hackathon do Sol 2026</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Agendamento de consultas com notificações assíncronas</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </section>

              {/* FORMAÇÃO */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  FORMAÇÃO
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold" style={{ color: "var(--text-primary)" }}>Tecnólogo em ADS</span> — UNINASSAU{" "}
                    <span className="italic text-xs" style={{ color: "var(--text-muted)" }}>(2026–2027, em andamento)</span>
                  </div>
                  <div>
                    <span className="font-bold" style={{ color: "var(--text-primary)" }}>Técnico em Informática</span> — CE Senador Jesse Pinto Freire{" "}
                    <span className="italic text-xs" style={{ color: "var(--text-muted)" }}>(2021–2023)</span>
                  </div>
                </div>
              </section>

              {/* IDIOMAS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  IDIOMAS
                </h2>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  Português (nativo) &nbsp;•&nbsp; Inglês (intermediário) &nbsp;•&nbsp; Espanhol (básico)
                </p>
              </section>
            </div>
          ) : (
            /* ENGLISH CV CONTENT */
            <div className="max-w-3xl mx-auto space-y-6 text-sm" style={{ color: "var(--text-primary)" }}>
              {/* Header */}
              <div className="border-b pb-5" style={{ borderColor: "var(--border)" }}>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--text-primary)" }}>
                  Adrian Gonçalves Lopes
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span>Natal, RN</span>
                  <span>•</span>
                  <span>+55 (84) 98612-6488</span>
                  <span>•</span>
                  <a href="mailto:adrianlopes.dev@gmail.com" className="hover:underline" style={{ color: "var(--accent)" }}>
                    adrianlopes.dev@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> github.com/AdrianLopez001
                  </a>
                  <span>•</span>
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> linkedin.com/in/adrian-lopes-a42699371
                  </a>
                </div>
              </div>

              {/* OBJECTIVE */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  OBJECTIVE
                </h2>
                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                  Backend Developer with hands-on experience in automation and systems integration (WhatsApp, inventory, financial data), currently working at Cartec Bosch. Deepening knowledge in Spring Boot, PostgreSQL, and JWT.
                </p>
              </section>

              {/* EXPERIENCE */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  EXPERIENCE
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Backend Developer — <span style={{ color: "var(--accent)" }}>Cartec Bosch</span>
                      </span>
                      <span className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                        Feb/2026 – Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Inventory module with automatic generation of basic revision items</li>
                      <li>Financial dashboard with automatic PDF and invoice (NF-e) analysis, eliminating manual data entry</li>
                      <li>Automated WhatsApp support powered by AI agents</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Backend Developer — <span style={{ color: "var(--accent)" }}>Loja Rei das Válvulas</span>
                      </span>
                      <span className="text-xs italic" style={{ color: "var(--text-muted)" }}>
                        Jan/2024 – Feb/2025
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Technical owner of internal digital processes</li>
                      <li>Automated WhatsApp customer support</li>
                      <li>Data integration across branch locations</li>
                      <li>Ongoing maintenance of the inventory control system</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROJECTS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  PROJECTS
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Football match outcome prediction using ML (Python) + Java/Spring Boot API</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Interactive 3D map of Natal (MapLibre GL JS), Hackathon do Sol 2026</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Appointment scheduling system with asynchronous notifications</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </section>

              {/* EDUCATION */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  EDUCATION
                </h2>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold" style={{ color: "var(--text-primary)" }}>Associate Degree in Systems Analysis and Development</span> — UNINASSAU{" "}
                    <span className="italic text-xs" style={{ color: "var(--text-muted)" }}>(2026–2027, in progress)</span>
                  </div>
                  <div>
                    <span className="font-bold" style={{ color: "var(--text-primary)" }}>Technical High School Diploma in IT</span> — CE Senador Jesse Pinto Freire{" "}
                    <span className="italic text-xs" style={{ color: "var(--text-muted)" }}>(2021–2023)</span>
                  </div>
                </div>
              </section>

              {/* LANGUAGES */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  LANGUAGES
                </h2>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  Portuguese (native) &nbsp;•&nbsp; English (intermediate) &nbsp;•&nbsp; Spanish (basic)
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
