"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Code2, Brain, ChevronRight } from "lucide-react";
import SocialLinks from "./SocialLinks";
import CVDownloadButton from "./CVDownloadButton";

const skills = [
  { icon: "☕", label: "Java & Spring Boot", desc: "Sistemas backend escaláveis e seguros" },
  { icon: "🐍", label: "Python & AI", desc: "RAG, Machine Learning, automação de dados" },
  { icon: "🗄️", label: "Banco de Dados", desc: "PostgreSQL, pgvector, Flyway migrations" },
  { icon: "🐳", label: "DevOps & Cloud", desc: "Docker, CI/CD, Vercel, APIs REST" },
];

const interests = ["RAG & LLMs", "Microservices", "Spring Security", "Data Engineering", "Open Source"];

export default function Hero({ config }: { config: any }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      <div
        className="relative flex flex-col items-center justify-center gap-8 text-center max-w-3xl mx-auto"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        {/* Top: Avatar + Social */}
        <div className="flex flex-col items-center gap-5 shrink-0">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(var(--accent), #a78bfa, var(--accent))`,
                padding: "3px",
                borderRadius: "9999px",
                animation: "spin 8s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div
              className="relative rounded-full overflow-hidden"
              style={{ width: 128, height: 128, border: "4px solid var(--bg-main)" }}
            >
              <Image
                src={config.avatarUrl}
                alt="Adrian Lopes"
                width={128}
                height={128}
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Online indicator */}
            <div
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
              style={{
                background: "#34a853",
                borderColor: "var(--bg-main)",
                boxShadow: "0 0 6px #34a853",
              }}
            />
          </div>

          <SocialLinks social={config.social} />

          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <MapPin size={13} />
            Natal, RN — Brasil
          </div>
        </div>

        {/* Bottom: Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="section-label mb-3 flex items-center justify-center gap-2">
            <Briefcase size={12} />
            Disponível para oportunidades
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-tight" style={{ lineHeight: 1.2 }}>
            Adrian Lopes
          </h1>

          <h2 className="text-xl lg:text-2xl font-medium mb-5" style={{ color: "var(--text-secondary)" }}>
            <span className="gradient-text">Software Engineer</span>
          </h2>

          <p className="text-base leading-relaxed mb-8 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "600px" }}>
            Desenvolvedor backend focado em construir sistemas escaláveis e robustos com{" "}
            <strong style={{ color: "var(--text-primary)" }}>Java & Spring Boot</strong> e em aplicar
            técnicas de <strong style={{ color: "var(--text-primary)" }}>IA generativa</strong>{" "}
            (RAG, Machine Learning) para resolver problemas reais de negócios. Baseado em Natal, RN,
            buscando oportunidades remotas ou híbridas.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <CVDownloadButton config={config} />
            <a
              href="#projetos"
              className="btn-ghost"
            >
              Ver Projetos
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full max-w-2xl mx-auto">
            {skills.map((s) => (
              <div
                key={s.label}
                className="card flex flex-col items-center text-center gap-2 p-4 cursor-default"
                style={{ background: "var(--bg-card)" }}
              >
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {s.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interest tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div
              className="flex items-center gap-1.5 text-xs font-medium mr-1"
              style={{ color: "var(--text-muted)" }}
            >
              <Brain size={12} />
              Interesses:
            </div>
            {interests.map((tag) => (
              <span key={tag} className="badge">
                <Code2 size={10} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ opacity: 0.5 }}
      >
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          scroll
        </span>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
