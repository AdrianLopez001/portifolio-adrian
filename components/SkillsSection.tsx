"use client";

import { useI18n } from "./I18nProvider";
import { Server, Database, Bot, Cpu } from "lucide-react";

export default function SkillsSection() {
  const { t } = useI18n();

  const skillGroups = [
    {
      icon: Server,
      titleKey: "skills.backendTitle" as const,
      descKey: "skills.backendDesc" as const,
      color: "#1a73e8",
      tags: ["Java 21", "Spring Boot", "React", "TypeScript", "Next.js", "HTML5/CSS", "Chart.js", "Python"],
    },
    {
      icon: Database,
      titleKey: "skills.dbTitle" as const,
      descKey: "skills.dbDesc" as const,
      color: "#3572A5",
      tags: ["PostgreSQL", "H2", "pgvector"],
    },
    {
      icon: Bot,
      titleKey: "skills.aiTitle" as const,
      descKey: "skills.aiDesc" as const,
      color: "#8b5cf6",
      tags: ["LLMs", "RAG", "MCP", "Agentes/Bots", "n8n", "Evolution API", "Claude Vision API"],
    },
    {
      icon: Cpu,
      titleKey: "skills.infraTitle" as const,
      descKey: "skills.infraDesc" as const,
      color: "#10b981",
      tags: ["Docker", "AWS (EC2)", "Linux VPS", "Git"],
    },
  ];

  return (
    <section id="skills" className="px-6 py-16" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div className="mb-10 text-center">
        <div className="section-label flex items-center justify-center gap-2 mb-3">
          <Cpu size={14} />
          {t("skills.sectionLabel")}
        </div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          {t("skills.title")}
        </h2>
        <p className="mt-2 text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          {t("skills.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.titleKey}
              className="card p-6 flex flex-col justify-between hover:scale-[1.01] transition-all duration-200"
              style={{ background: "var(--bg-card)" }}
            >
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `color-mix(in srgb, ${group.color} 15%, transparent)`,
                    color: group.color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {t(group.titleKey)}
                </h3>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {t(group.descKey)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md"
                    style={{
                      background: "var(--bg-card-hover)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-card)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
