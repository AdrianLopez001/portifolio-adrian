"use client";

import { useI18n } from "./I18nProvider";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section id="experiencia" className="px-6 py-16" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div className="mb-12 text-center">
        <div className="section-label flex items-center justify-center gap-2 mb-3">
          <Briefcase size={14} />
          {t("exp.sectionLabel")}
        </div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          {t("exp.title")}
        </h2>
        <p className="mt-2 text-base max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          {t("exp.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Experience Timeline — 7 cols */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h3 className="text-xl font-bold flex items-center gap-2.5" style={{ color: "var(--text-primary)" }}>
            <Briefcase size={18} className="text-[var(--accent)]" />
            {t("nav.experience")}
          </h3>

          {/* Item 1: Core System */}
          <div
            className="card p-6 relative overflow-hidden transition-all duration-200 hover:border-[var(--accent)]"
            style={{ background: "var(--bg-card)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("exp.coreSystem.role")}
                </h4>
                <div className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {t("exp.coreSystem.company")}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] font-medium">
                <Calendar size={12} />
                {t("exp.coreSystem.period")}
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.coreSystem.desc1")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.coreSystem.desc2")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.coreSystem.desc3")}</span>
              </li>
            </ul>
          </div>

          {/* Item 2: Cartec */}
          <div
            className="card p-6 relative overflow-hidden transition-all duration-200 hover:border-[var(--accent)]"
            style={{ background: "var(--bg-card)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("exp.cartec.role")}
                </h4>
                <div className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {t("exp.cartec.company")}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] font-medium">
                <Calendar size={12} />
                {t("exp.cartec.period")}
              </div>
            </div>

            <ul className="mt-4 flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.cartec.desc1")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.cartec.desc2")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[var(--accent)]" />
                <span>{t("exp.cartec.desc3")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Education & Certs — 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="text-xl font-bold flex items-center gap-2.5" style={{ color: "var(--text-primary)" }}>
            <GraduationCap size={18} className="text-[var(--accent)]" />
            {t("edu.title")}
          </h3>

          <div className="flex flex-col gap-4">
            {/* ADS */}
            <div className="card p-5 flex items-start gap-3.5" style={{ background: "var(--bg-card)" }}>
              <div className="p-2.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("edu.ads.title")}
                </h4>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {t("edu.ads.inst")}
                </p>
              </div>
            </div>

            {/* Oracle Certified */}
            <div className="card p-5 flex items-start gap-3.5" style={{ background: "var(--bg-card)" }}>
              <div className="p-2.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("edu.oracle.title")}
                </h4>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {t("edu.oracle.inst")}
                </p>
              </div>
            </div>

            {/* Hackathon */}
            <div className="card p-5 flex items-start gap-3.5" style={{ background: "var(--bg-card)" }}>
              <div className="p-2.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("edu.hackathon.title")}
                </h4>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {t("edu.hackathon.inst")}
                </p>
              </div>
            </div>

            {/* Idiomas */}
            <div className="card p-5 flex items-start gap-3.5" style={{ background: "var(--bg-card)" }}>
              <div className="p-2.5 rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("edu.lang.title")}
                </h4>
                <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                  {t("edu.lang.inst")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
