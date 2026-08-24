"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Printer, Download, ExternalLink } from "lucide-react";
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
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setActiveLang(appLocale || "pt");
    }
  }

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
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                  ADRIAN LOPES
                </h1>
                <p className="text-base font-semibold mb-2" style={{ color: "var(--accent)" }}>
                  Desenvolvedor Fullstack
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span>Natal, RN, Brasil</span>
                  <span>•</span>
                  <a href="mailto:adrianlopes.dev@gmail.com" className="hover:underline" style={{ color: "var(--accent)" }}>
                    adrianlopes.dev@gmail.com
                  </a>
                  <span>•</span>
                  <span>(84) 986126488</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> linkedin.com/in/adrian-lopes-a42699371
                  </a>
                  <span>•</span>
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> github.com/AdrianLopez001
                  </a>
                </div>
              </div>

              {/* RESUMO PROFISSIONAL */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  RESUMO PROFISSIONAL
                </h2>
                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                  Desenvolvedor Fullstack com 2 anos de prática em desenvolvimento de software. Atua na construção de aplicações de ponta a ponta. Experiência prática na criação de ERPs, APIs RESTful, modelagem de bancos relacionais (PostgreSQL) e integração de serviços de IA/automação.
                </p>
              </section>

              {/* SKILLS TÉCNICAS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  SKILLS TÉCNICAS
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Linguagens & Frameworks:</strong> Java 21, Spring Boot, React, TypeScript, Next.js, HTML5/CSS, Chart.js, Python</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Banco de Dados:</strong> PostgreSQL, H2, pgvector</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● IA & Automação:</strong> LLMs, RAG, MCP, Agentes/Bots, n8n, Evolution API, Claude Vision API</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Infraestrutura & DevOps:</strong> Docker, AWS (EC2), Linux VPS, Git</p>
                </div>
              </section>

              {/* EXPERIÊNCIA PROFISSIONAL */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  EXPERIÊNCIA PROFISSIONAL
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Core System — <span style={{ color: "var(--accent)" }}>Cofundador & Desenvolvedor Fullstack</span>
                      </span>
                      <span className="text-xs italic font-medium" style={{ color: "var(--text-muted)" }}>
                        2023 – Atual
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Desenvolvimento do Controll-All ERP v2.0 (cliente JC Eventos), cobrindo 11 módulos operacionais.</li>
                      <li>Construção de APIs REST com Java 21 + Spring Boot e interface web em React/TypeScript.</li>
                      <li>Definição de requisitos (PRD), arquitetura das rotas e banco de dados, além de elaboração de propostas comerciais.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Cartec — <span style={{ color: "var(--accent)" }}>Desenvolvedor Fullstack / Sistemas Internos</span>
                      </span>
                      <span className="text-xs italic font-medium" style={{ color: "var(--text-muted)" }}>
                        Atual
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Otimização de rotinas operacionais através de dashboards dinâmicos (Chart.js) e automação de relatórios PDF, reduzindo gargalos na geração manual de dados.</li>
                      <li>Estruturação de código backend em Spring Boot e integração com banco de dados relacional.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PROJETOS DE DESTAQUE */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  PROJETOS DE DESTAQUE
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CARTEC 2.0 <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— ERP/CRM com agentes de IA e análise de imagens (Claude Vision API).</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Análise preditiva de futebol com Spring Boot e Python.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Gestão de saúde e acompanhamento de pacientes.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Trilha <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Acompanhamento de hábitos com Spring Boot e React.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Trilha" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Trilha <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Corporate RAG Engine <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Backend RAG com Java 21 e pgvector.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Corporate-RAG-Engine" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Corporate-RAG-Engine <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      System Lumiar <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Gestão de voluntários e campanhas sociais.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/System-lumiar" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/System-lumiar <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Projeto para o Hackathon do Sol 2026.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </section>

              {/* FORMAÇÃO & CERTIFICAÇÕES */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  FORMAÇÃO & CERTIFICAÇÕES
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Análise e Desenvolvimento de Sistemas</strong> — UNINASSAU (Cursando 2º Período)
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Oracle Java Foundations</strong> (Concluído)
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Idiomas:</strong> Português (Nativo) | Inglês (Intermediário)
                  </li>
                </ul>
              </section>
            </div>
          ) : (
            /* ENGLISH CV CONTENT */
            <div className="max-w-3xl mx-auto space-y-6 text-sm" style={{ color: "var(--text-primary)" }}>
              {/* Header */}
              <div className="border-b pb-5" style={{ borderColor: "var(--border)" }}>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1" style={{ color: "var(--text-primary)" }}>
                  ADRIAN LOPES
                </h1>
                <p className="text-base font-semibold mb-2" style={{ color: "var(--accent)" }}>
                  Fullstack Developer
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span>Natal, RN, Brazil</span>
                  <span>•</span>
                  <a href="mailto:adrianlopes.dev@gmail.com" className="hover:underline" style={{ color: "var(--accent)" }}>
                    adrianlopes.dev@gmail.com
                  </a>
                  <span>•</span>
                  <span>+55 (84) 986126488</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mt-2" style={{ color: "var(--text-secondary)" }}>
                  <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> linkedin.com/in/adrian-lopes-a42699371
                  </a>
                  <span>•</span>
                  <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: "var(--text-primary)" }}>
                    <ExternalLink size={11} /> github.com/AdrianLopez001
                  </a>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                  Fullstack Developer with 2 years of software engineering practice. Specializes in building end-to-end applications, ERPs, RESTful APIs, relational database modeling (PostgreSQL), and AI/automation service integrations.
                </p>
              </section>

              {/* TECHNICAL SKILLS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Languages & Frameworks:</strong> Java 21, Spring Boot, React, TypeScript, Next.js, HTML5/CSS, Chart.js, Python</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Databases:</strong> PostgreSQL, H2, pgvector</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● AI & Automation:</strong> LLMs, RAG, MCP, Agents/Bots, n8n, Evolution API, Claude Vision API</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>● Infrastructure & DevOps:</strong> Docker, AWS (EC2), Linux VPS, Git</p>
                </div>
              </section>

              {/* PROFESSIONAL EXPERIENCE */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Core System — <span style={{ color: "var(--accent)" }}>Co-founder & Fullstack Developer</span>
                      </span>
                      <span className="text-xs italic font-medium" style={{ color: "var(--text-muted)" }}>
                        2023 – Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Development of Controll-All ERP v2.0 (client JC Eventos), covering 11 operational modules.</li>
                      <li>Engineered REST APIs with Java 21 + Spring Boot and web interface in React/TypeScript.</li>
                      <li>Definition of product requirements (PRD), API route architecture, database modeling, and commercial proposals.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                        Cartec — <span style={{ color: "var(--accent)" }}>Fullstack Developer / Internal Systems</span>
                      </span>
                      <span className="text-xs italic font-medium" style={{ color: "var(--text-muted)" }}>
                        Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1" style={{ color: "var(--text-secondary)" }}>
                      <li>Optimization of operational routines through dynamic dashboards (Chart.js) and PDF report automation, reducing manual data bottlenecks.</li>
                      <li>Structuring backend codebase in Spring Boot and integration with relational databases.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FEATURED PROJECTS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  FEATURED PROJECTS
                </h2>
                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CARTEC 2.0 <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— ERP/CRM with AI agents and image analysis (Claude Vision API).</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Football predictive analytics with Spring Boot and Python.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Healthcare management and patient monitoring.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Trilha <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Habit tracking with Spring Boot and React.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Trilha" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Trilha <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Corporate RAG Engine <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Enterprise RAG backend with Java 21 and pgvector.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Corporate-RAG-Engine" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/Corporate-RAG-Engine <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      System Lumiar <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Volunteer management and social campaigns.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/System-lumiar" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/System-lumiar <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Project built for Hackathon do Sol 2026.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      https://github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </section>

              {/* EDUCATION & CERTIFICATIONS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  EDUCATION & CERTIFICATIONS
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Systems Analysis and Development</strong> — UNINASSAU (In Progress — 2nd Semester)
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Oracle Java Foundations</strong> (Completed)
                  </li>
                  <li>
                    <strong style={{ color: "var(--text-primary)" }}>Languages:</strong> Portuguese (Native) | English (Intermediate)
                  </li>
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
