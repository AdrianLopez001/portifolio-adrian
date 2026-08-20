"use client";

import { useState, useMemo } from "react";
import { Code2, GitBranch, Search, Filter, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import SocialLinks from "@/components/SocialLinks";
import { I18nProvider, useI18n } from "@/components/I18nProvider";

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
  const { t, locale } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", labelKey: "filter.all" as const },
    { id: "fullstack", labelKey: "filter.fullstack" as const },
    { id: "java", labelKey: "filter.java" as const },
    { id: "ai", labelKey: "filter.ai" as const },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (selectedCategory === "fullstack" && project.category !== "fullstack") return false;
        if (selectedCategory === "java" && !project.language.includes("Java") && project.category !== "java") return false;
        if (selectedCategory === "ai" && project.category !== "ai" && !project.stack.some(s => s.toLowerCase().includes("rag") || s.toLowerCase().includes("ai"))) return false;
      }

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const title = project.title.toLowerCase();
      const desc = (locale === "en" ? (project.shortDescriptionEn || project.shortDescription) : project.shortDescription).toLowerCase();
      const stack = project.stack.join(" ").toLowerCase();
      const lang = project.language.toLowerCase();

      return title.includes(q) || desc.includes(q) || stack.includes(q) || lang.includes(q);
    });
  }, [projects, selectedCategory, searchQuery, locale]);

  return (
    <div className="min-h-screen">
      {/* ── Skip to Main Content link for accessibility ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:color-white focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* ── Header Nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "color-mix(in srgb, var(--bg-main) 85%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <a
          href="#sobre"
          className="font-bold text-lg tracking-tight flex items-center gap-1"
          style={{ color: "var(--text-primary)", textDecoration: "none" }}
        >
          AL<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "#sobre", labelKey: "nav.about" as const },
            { href: "#skills", labelKey: "nav.skills" as const },
            { href: "#experiencia", labelKey: "nav.experience" as const },
            { href: "#projetos", labelKey: "nav.projects" as const },
            { href: "#contato", labelKey: "nav.contact" as const },
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

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </header>

      {/* ── Background Glow ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-[var(--accent)] opacity-[0.12] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-[#8b5cf6] opacity-[0.12] blur-[140px]" />
      </div>

      {/* ── Main Content ── */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <Hero config={config} />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience & Education Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <section
          id="projetos"
          className="px-6 py-20"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <div className="mb-10">
            <div className="section-label flex items-center gap-2 mb-3">
              <Code2 size={14} />
              {t("projects.label")}
            </div>
            <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
              {t("projects.title").replace("{count}", filteredProjects.length.toString())}
            </h2>
            <p className="mt-2 text-base" style={{ color: "var(--text-secondary)" }}>
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Controls: Search + Filter Pills */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2"
                style={{ color: "var(--text-muted)" }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("search.placeholder")}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm transition-all outline-none"
                style={{
                  background: "var(--bg-card)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                }}
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <Filter size={14} className="text-[var(--text-muted)] mr-1 shrink-0 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id ? "shadow-sm" : ""
                  }`}
                  style={{
                    background: selectedCategory === cat.id ? "var(--accent)" : "var(--bg-card)",
                    color: selectedCategory === cat.id ? "#ffffff" : "var(--text-secondary)",
                    border: `1px solid ${selectedCategory === cat.id ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {t(cat.labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Project List */}
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="card p-12 text-center" style={{ background: "var(--bg-card)" }}>
              <p className="text-base" style={{ color: "var(--text-secondary)" }}>
                {t("search.empty")}
              </p>
            </div>
          )}
        </section>

        {/* Contact Footer Section */}
        <section id="contato" className="px-6 py-20" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="card p-10 text-center relative z-10 overflow-hidden" style={{ background: "var(--bg-card)" }}>
            <div className="section-label flex items-center justify-center gap-2 mb-4">
              <Mail size={14} />
              {t("contact.label")}
            </div>
            
            <div className="flex flex-col gap-4 max-w-xl mx-auto mb-8">
              <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                {t("contact.title")}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
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
        className="py-8 text-center text-sm"
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
          <span>Natal, RN — Brasil</span>
        </div>
      </footer>
    </div>
  );
}
