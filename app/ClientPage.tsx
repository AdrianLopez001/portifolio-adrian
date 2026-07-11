"use client";

import { useEffect } from "react";
import { GitBranch, Code2, BarChart3 } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import LanguageChart from "@/components/LanguageChart";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";

interface Project {
  id: string;
  repo: string;
  title: string;
  shortDescription: string;
  language: string;
  languageColor: string;
  demoUrl: string;
  githubUrl: string;
  problem: string;
  contribution: string;
  stack: string[];
}

interface ClientPageProps {
  projects: Project[];
}

export default function ClientPage({ projects }: ClientPageProps) {
  // Track unique visits (session-based, no cookies)
  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      sessionStorage.setItem("visited", "1");
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "visit" }),
      }).catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* ── Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "color-mix(in srgb, var(--bg-main) 80%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <a
          href="#sobre"
          className="font-bold text-lg tracking-tight"
          style={{ color: "var(--text-primary)", textDecoration: "none" }}
        >
          AL<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#projetos", label: "Projetos" },
            { href: "#linguagens", label: "Linguagens" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      {/* ── Main ── */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Projects */}
        <section
          id="projetos"
          className="px-6 py-20"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div className="mb-10">
            <div className="section-label flex items-center gap-2 mb-3">
              <Code2 size={12} />
              Projetos selecionados
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              5 sistemas em produção
            </h2>
            <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
              Clique em qualquer card para expandir e ver detalhes técnicos completos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Language Chart */}
        <section
          id="linguagens"
          className="px-6 py-20"
          style={{
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="mb-8">
              <div className="section-label flex items-center gap-2 mb-3">
                <BarChart3 size={12} />
                Perfil de linguagens
              </div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                Stack em números reais
              </h2>
              <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
                Distribuição real de bytes de código nos projetos públicos do GitHub.
              </p>
            </div>
            <LanguageChart />
          </div>
        </section>

        {/* Contact Footer */}
        <section className="px-6 py-20" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center">
            <div className="section-label flex items-center justify-center gap-2 mb-4">
              Contato
            </div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Vamos conversar?
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
              Aberto a oportunidades remotas, freelas e projetos técnicos desafiadores.
            </p>
            <div className="flex justify-center mb-8">
              <SocialLinks showLabel={true} />
            </div>
            <a
              href="https://wa.me/5584986126488?text=Olá%20Adrian%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto"
              style={{ display: "inline-flex" }}
            >
              💬 Iniciar conversa no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-6 text-center text-sm"
        style={{
          borderTop: "1px solid var(--border)",
          color: "var(--text-muted)",
        }}
      >
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span>© 2025 Adrian Lopes.</span>
          <span>·</span>
          <a
            href="https://github.com/AdrianLopez001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:opacity-75 transition-opacity"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            <GitBranch size={13} />
            AdrianLopez001
          </a>
          <span>·</span>
          <span>Natal, RN</span>
        </div>
      </footer>
    </div>
  );
}
