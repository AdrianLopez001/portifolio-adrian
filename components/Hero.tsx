"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Code2, Brain, ChevronRight, Award, Layers, Terminal } from "lucide-react";
import SocialLinks from "./SocialLinks";
import CVDownloadButton from "./CVDownloadButton";
import CVModal from "./CVModal";
import { useI18n } from "./I18nProvider";
import type { Config } from "@/lib/data";

export default function Hero({ config }: { config: Config }) {
  const [visible, setVisible] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { valueKey: "stat.experience" as const, labelKey: "stat.experienceSub" as const, icon: Briefcase },
    { valueKey: "stat.projects" as const, labelKey: "stat.projectsSub" as const, icon: Layers },
    { valueKey: "stat.cert" as const, labelKey: "stat.certSub" as const, icon: Award },
  ];

  const interestKeys = [
    "interest.1",
    "interest.2",
    "interest.3",
    "interest.4",
    "interest.5",
  ] as const;

  return (
    <section
      id="sobre"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-28 pb-16 overflow-hidden"
      style={{ maxWidth: "1100px", margin: "0 auto" }}
    >
      <div
        className="relative flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto"
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
                background: `conic-gradient(var(--accent), #a78bfa, #34a853, var(--accent))`,
                padding: "3px",
                borderRadius: "9999px",
                animation: "spin 10s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div
              className="relative rounded-full overflow-hidden"
              style={{ width: 136, height: 136, border: "4px solid var(--bg-main)" }}
            >
              <Image
                src={config.avatarUrl}
                alt="Adrian Lopes"
                width={136}
                height={136}
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Online indicator */}
            <div
              className="absolute bottom-1 right-1 w-4.5 h-4.5 rounded-full border-2"
              style={{
                background: "#34a853",
                borderColor: "var(--bg-main)",
                boxShadow: "0 0 8px #34a853",
              }}
              title="Disponível para projetos"
            />
          </div>

          <SocialLinks social={config.social} />

          <div
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
              background: "var(--bg-card)",
            }}
          >
            <MapPin size={13} className="text-[var(--accent)]" />
            Natal, RN — Brasil
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="section-label mb-3 flex items-center justify-center gap-2">
            <Terminal size={12} />
            {t("hero.available")}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight" style={{ lineHeight: 1.15 }}>
            Adrian Lopes
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>
            <span className="gradient-text">{t("hero.role")}</span>
            <span className="block text-sm sm:text-base font-normal mt-1 text-[var(--text-muted)]">
              {t("hero.subrole")}
            </span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed mb-8 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "720px" }}>
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <CVDownloadButton config={config} onOpenModal={() => setIsCvModalOpen(true)} />
            <a href="#projetos" className="btn-ghost">
              {t("hero.viewProjects")}
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full max-w-3xl mx-auto">
            {stats.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.valueKey}
                  className="card p-4 flex flex-col items-center justify-center text-center gap-1 hover:border-[var(--accent)]"
                  style={{ background: "var(--bg-card)" }}
                >
                  <Icon size={20} className="text-[var(--accent)] mb-1" />
                  <div className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {t(st.valueKey)}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {t(st.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interest tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div
              className="flex items-center gap-1.5 text-xs font-medium mr-1"
              style={{ color: "var(--text-muted)" }}
            >
              <Brain size={12} />
              {t("hero.interests")}
            </div>
            {interestKeys.map((key) => (
              <span key={key} className="badge">
                <Code2 size={10} />
                {t(key)}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CV Modal */}
      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        config={config}
      />
    </section>
  );
}
