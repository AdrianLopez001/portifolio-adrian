import { NextResponse } from "next/server";

const GITHUB_USER = "AdrianLopez001";
const REPOS = [
  "Corporate-RAG-Engine",
  "FINTRACK-SYSTEM",
  "CareSync",
  "System-lumiar",
  "Now-or-Never",
];

const LANG_COLORS: Record<string, string> = {
  Java: "#b07219",
  TypeScript: "#2b7489",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};

export const revalidate = 3600; // cache 1h

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const langTotals: Record<string, number> = {};

    await Promise.all(
      REPOS.map(async (repo) => {
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GITHUB_USER}/${repo}/languages`,
            { headers, next: { revalidate: 3600 } }
          );
          if (!res.ok) return;
          const data: Record<string, number> = await res.json();
          for (const [lang, bytes] of Object.entries(data)) {
            langTotals[lang] = (langTotals[lang] || 0) + bytes;
          }
        } catch {}
      })
    );

    const total = Object.values(langTotals).reduce((a, b) => a + b, 0);
    if (total === 0) return NextResponse.json([]);

    const sorted = Object.entries(langTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8);

    let remaining = 100;
    const result = sorted.map(([lang, bytes], i) => {
      const isLast = i === sorted.length - 1;
      const pct = isLast ? remaining : Math.round((bytes / total) * 100);
      remaining -= isLast ? remaining : pct;
      return {
        language: lang,
        percentage: pct,
        bytes,
        color: LANG_COLORS[lang] || "#8b949e",
      };
    });

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json([], { status: 500 });
  }
}
