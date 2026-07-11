"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch } from "lucide-react";

interface LangData {
  language: string;
  percentage: number;
  color: string;
  bytes: number;
}

const LANG_COLORS: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#2b7489",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  Other: "#8b949e",
};

export default function LanguageChart() {
  const [langs, setLangs] = useState<LangData[]>([]);
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        setLangs(data);
        setLoading(false);
        setTimeout(() => setAnimated(true), 100);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-24 h-4 rounded animate-pulse" style={{ background: "var(--border)" }} />
            <div className="flex-1 h-2.5 rounded-full animate-pulse" style={{ background: "var(--border)" }} />
            <div className="w-10 h-4 rounded animate-pulse" style={{ background: "var(--border)" }} />
          </div>
        ))}
      </div>
    );
  }

  if (!langs.length) return null;

  return (
    <div>
      {/* Stacked bar */}
      <div className="flex rounded-full overflow-hidden h-3 mb-6" style={{ gap: "2px" }}>
        {langs.map((l) => (
          <motion.div
            key={l.language}
            title={`${l.language}: ${l.percentage}%`}
            initial={{ width: 0 }}
            animate={{ width: animated ? `${l.percentage}%` : "0%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ backgroundColor: l.color, borderRadius: "9999px" }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-4">
        {langs.map((l, i) => (
          <motion.div
            key={l.language}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 + 0.3 }}
            className="flex items-center gap-2"
          >
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: l.color }}
            />
            <span className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>
              {l.language}
            </span>
            <span className="text-xs ml-auto" style={{ color: "var(--text-muted)" }}>
              {l.percentage}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
