"use client";

import { useEffect } from "react";
import { Code2, GitBranch } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import SocialLinks from "@/components/SocialLinks";
import { I18nProvider, useI18n } from "@/components/I18nProvider";

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

interface Config {
  avatarUrl: string;
  cvPtUrl: string;
  cvEnUrl: string;
  social: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
    instagram: string;
  };
}

interface ClientPageProps {
  projects: Project[];
  config: Config;
}

export default function ClientPage({ projects, config }: ClientPageProps) {
  return (
    <I18nProvider>
      <ClientPageContent projects={projects} config={config} />
    </I18nProvider>
  );
}

function ClientPageContent({ projects, config }: ClientPageProps) {
  const { t } = useI18n();

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
            { href: "#sobre", labelKey: "nav.about" as const },
            { href: "#projetos", labelKey: "nav.projects" as const },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* ── Fixed Background Glow ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)] opacity-[0.15] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#a78bfa] opacity-[0.15] blur-[120px]" />
      </div>

      {/* ── Main ── */}
      <main className="relative z-10">
        {/* Hero */}
        <Hero config={config} />

        {/* Projects */}
        <section
          id="projetos"
          className="px-6 py-20"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div className="mb-10">
            <div className="section-label flex items-center gap-2 mb-3">
              <Code2 size={12} />
              {t("projects.label")}
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              {t("projects.title").replace("{count}", projects.length.toString())}
            </h2>
            <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
              {t("projects.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section className="px-6 py-20" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="text-center relative z-10">
            <div className="section-label flex items-center justify-center gap-2 mb-4">
              {t("contact.label")}
            </div>
            
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                {t("contact.title")}
              </h2>
              <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>
                {t("contact.subtitle")}
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <SocialLinks social={config.social} showLabel={true} />
            </div>
            <a
              href={config.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mx-auto"
              style={{ display: "inline-flex" }}
            >
              {t("contact.whatsapp")}
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
          <span>© {new Date().getFullYear()} {t("footer.copy")}</span>
          <span>·</span>
          <a
            href={config.social.github}
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
