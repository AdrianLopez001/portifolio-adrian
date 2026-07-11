"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  GitBranch,
  Lightbulb,
  User2,
  Layers,
  Code2,
} from "lucide-react";
import { useI18n } from "./I18nProvider";

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useI18n();

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${expanded ? "var(--accent)" : "var(--border-card)"}`,
        borderRadius: "16px",
        boxShadow: expanded ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        overflow: "hidden",
        transition: "border-color 300ms ease, box-shadow 300ms ease",
      }}
    >
      {/* Card Header — always visible */}
      <button
        onClick={handleToggle}
        id={`project-card-${project.id}`}
        className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-[var(--bg-card-hover)] transition-colors duration-150 cursor-pointer"
        aria-expanded={expanded}
      >
        <div className="flex-1 min-w-0">
          {/* Project number + language badge */}
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
              style={{
                background: "var(--accent-glow)",
                color: "var(--accent)",
                border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
            >
              #{String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: project.languageColor }}
              />
              {project.language}
            </span>
          </div>

          <h3
            className="text-lg font-semibold mb-1.5 truncate"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed line-clamp-2"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.shortDescription}
          </p>
        </div>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 25 }}
          className="shrink-0 mt-1"
          style={{ color: "var(--text-muted)" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 350, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                borderTop: "1px solid var(--border)",
                padding: "1.25rem 1.25rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Problem */}
              <div>
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  <Lightbulb size={13} />
                  {t("card.problem")}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.problem}
                </p>
              </div>

              {/* Contribution */}
              <div>
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  <User2 size={13} />
                  {t("card.contribution")}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.contribution}
                </p>
              </div>

              {/* Stack */}
              <div>
                <div
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  <Layers size={13} />
                  {t("card.stack")}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge">
                      <Code2 size={10} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`demo-${project.id}`}
                  className="btn-primary"
                >
                  <ExternalLink size={14} />
                  {t("card.demo")}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`github-${project.id}`}
                  className="btn-ghost"
                >
                  <GitBranch size={14} />
                  {t("card.code")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
