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
                  Desenvolvedor Backend Java/Spring Boot, atuando com APIs REST, integração de sistemas, automação de processos, bancos de dados relacionais e Inteligência Artificial aplicada (Cartec Bosch). Autodidata e orientado a resultados, busco posição remota como Desenvolvedor Backend para expandir conhecimento técnico continuamente e contribuir com soluções escaláveis desde o primeiro dia.
                </p>
              </section>

              {/* HABILIDADES TÉCNICAS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  HABILIDADES TÉCNICAS
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p><strong style={{ color: "var(--text-primary)" }}>Linguagens:</strong> Java, Python, JavaScript/TypeScript, SQL</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Backend:</strong> Spring Boot 3.x, REST APIs, Mensageria (RabbitMQ / Spring AMQP), JPA/Hibernate, Node.js</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Banco de Dados:</strong> PostgreSQL, pgvector (HNSW Indexing), H2 Database</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>DevOps & CI/CD:</strong> Docker, Docker Compose, GitHub Actions</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Segurança:</strong> Spring Security 6, JWT (Stateless), BCrypt, Refresh Tokens, CORS & CSRF</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>IA/Automação:</strong> RAG (Retrieval-Augmented Generation), Spring AI, LLMs (OpenAI API, Claude API), Apache Tika, n8n, Evolution API, Scikit-learn, XGBoost, SHAP (interpretabilidade de modelos), Prompt Engineering</p>
                </div>
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
                      <li>Desenvolvimento de módulo de estoque em Java/Spring Boot com geração automática de itens de revisão, integrado a API REST e banco de dados PostgreSQL.</li>
                      <li>Dashboard financeiro com automação de processos (RPA) para análise automática de PDFs e NF-e, eliminando lançamento manual e reduzindo tempo operacional.</li>
                      <li>Atendimento automatizado via WhatsApp Business API, com agentes de IA generativa (n8n, Evolution API, Claude API).</li>
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
                      <li>Responsável técnico pelos processos digitais internos da empresa, atuando como ponto focal de tecnologia.</li>
                      <li>Desenvolvimento de automação de atendimento via WhatsApp, reduzindo tempo de resposta ao cliente.</li>
                      <li>Integração de dados entre filiais, garantindo consistência de informações em múltiplos pontos de venda.</li>
                      <li>Manutenção do sistema de controle de estoque, incluindo ajustes de banco de dados e correção de inconsistências.</li>
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
                      Corporate RAG Engine <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java 21, Spring Boot 3.3, Spring AI, pgvector, Apache Tika, OpenAI — Buscador semântico corporativo com RAG, tokenização com overlap e indexação HNSW de alta performance</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Corporate-RAG-Engine" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Corporate-RAG-Engine <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java, Spring Boot, Python, Scikit-learn, XGBoost — Plataforma de previsão de resultados esportivos com pipeline de Machine Learning</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Mutirão / System Lumiar <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Next.js 15.5, Tailwind CSS v4, TypeScript, Framer Motion — Plataforma beneficente moderna para conexão de voluntários e instituições com dashboard de impacto</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/System-lumiar" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/System-lumiar <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java, Spring Boot, PostgreSQL, RabbitMQ, Docker — Sistema de agendamento de consultas médicas com notificações assíncronas e arquitetura orientada a eventos</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Spring Security Guide <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java 21, Spring Boot, Spring Security 6, JWT, BCrypt — Guia prático com implementação incremental de autenticação JWT Stateless e Refresh Tokens</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/SpringSecurity" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/SpringSecurity <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— JavaScript, MapLibre GL JS, MapTiler, OpenStreetMap — Mapa 3D interativo da cidade de Natal com extrusão de terreno e edificações (Hackathon do Sol 2026)</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
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
                  Backend Developer with Java/Spring Boot, working with REST APIs, systems integration, process automation, relational databases, and applied Artificial Intelligence (Cartec Bosch). Self-taught and results-driven, seeking a remote Backend Developer position to continuously expand technical knowledge and contribute scalable solutions from day one.
                </p>
              </section>

              {/* TECHNICAL SKILLS */}
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b" style={{ color: "var(--accent)", borderColor: "var(--border)" }}>
                  TECHNICAL SKILLS
                </h2>
                <div className="space-y-1.5 text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  <p><strong style={{ color: "var(--text-primary)" }}>Languages:</strong> Java, Python, JavaScript/TypeScript, SQL</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Backend:</strong> Spring Boot 3.x, REST APIs, Messaging (RabbitMQ / Spring AMQP), JPA/Hibernate, Node.js</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Databases:</strong> PostgreSQL, pgvector (HNSW Indexing), H2 Database</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>DevOps & CI/CD:</strong> Docker, Docker Compose, GitHub Actions</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>Security:</strong> Spring Security 6, JWT (Stateless), BCrypt, Refresh Tokens, CORS & CSRF</p>
                  <p><strong style={{ color: "var(--text-primary)" }}>AI/Automation:</strong> RAG (Retrieval-Augmented Generation), Spring AI, LLMs (OpenAI API, Claude API), Apache Tika, n8n, Evolution API, Scikit-learn, XGBoost, SHAP (model interpretability), Prompt Engineering</p>
                </div>
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
                      <li>Developed an inventory module in Java/Spring Boot with automatic generation of revision items, integrated with a REST API and PostgreSQL database.</li>
                      <li>Built a financial dashboard with process automation (RPA) for automatic analysis of PDFs and Brazilian electronic invoices (NF-e), eliminating manual data entry and reducing operational time.</li>
                      <li>Implemented automated customer service via WhatsApp Business API, with generative AI agents (n8n, Evolution API, Claude API).</li>
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
                      <li>Served as the technical lead for the company's internal digital processes, acting as the main point of contact for technology.</li>
                      <li>Developed WhatsApp service automation, reducing customer response time.</li>
                      <li>Maintained the inventory control system, including database adjustments and inconsistency corrections.</li>
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
                      Corporate RAG Engine <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java 21, Spring Boot 3.3, Spring AI, pgvector, Apache Tika, OpenAI — Corporate semantic search engine using RAG, overlap tokenization, and high-performance HNSW indexing.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Corporate-RAG-Engine" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Corporate-RAG-Engine <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      MatchMind AI <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java, Spring Boot, Python, Scikit-learn, XGBoost — Sports results prediction platform with a Machine Learning pipeline.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/Now-or-Never" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/Now-or-Never <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Mutirão / System Lumiar <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Next.js 15.5, Tailwind CSS v4, TypeScript, Framer Motion — Modern volunteering platform connecting institutions and volunteers with impact dashboards.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/System-lumiar" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/System-lumiar <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      CareSync <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java, Spring Boot, PostgreSQL, RabbitMQ, Docker — Medical appointment scheduling system with asynchronous notifications and event-driven architecture.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/CareSync" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/CareSync <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      Spring Security Guide <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— Java 21, Spring Boot, Spring Security 6, JWT, BCrypt — Practical study guide and step-by-step implementation of JWT Stateless authentication and Refresh Tokens.</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/SpringSecurity" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/SpringSecurity <ExternalLink size={10} />
                    </a>
                  </div>

                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                      DunasTech <span className="font-normal" style={{ color: "var(--text-secondary)" }}>— JavaScript, MapLibre GL JS, MapTiler, OpenStreetMap — Interactive 3D map of Natal/RN with terrain and building extrusion (Hackathon do Sol 2026).</span>
                    </div>
                    <a href="https://github.com/AdrianLopez001/DunasTech" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline inline-flex items-center gap-1" style={{ color: "var(--accent)" }}>
                      github.com/AdrianLopez001/DunasTech <ExternalLink size={10} />
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
                    <span className="font-bold" style={{ color: "var(--text-primary)" }}>Technical Degree in Information Technology</span> — CE Senador Jesse Pinto Freire{" "}
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
