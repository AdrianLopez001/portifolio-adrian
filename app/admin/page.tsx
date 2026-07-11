"use client";

import { useState, useEffect } from "react";
import {
  Lock, LogOut, Save, BarChart3, Eye,
  MousePointerClick, Edit3, ChevronDown, ChevronUp, Check
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortDescription: string;
  language: string;
  languageColor: string;
  problem: string;
  contribution: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  repo: string;
}

interface Analytics {
  visits: number;
  cardClicks: Record<string, number>;
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

// SHA-256 in browser
async function sha256(msg: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(msg));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

const CORRECT_HASH = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [config, setConfig] = useState<Config | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "config">("projects");
  const [saving, setSaving] = useState(false);
  const [savingConfig, setSavingConfig] = useState(false);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [configSaved, setConfigSaved] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(password);
    if (hash === CORRECT_HASH) {
      setAuthed(true);
      sessionStorage.setItem("admin_auth", "1");
    } else {
      setError("Senha incorreta.");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth")) setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetch("/api/projects").then((r) => r.json()).then((d) => setProjects(d.projects || []));
    fetch("/api/config").then((r) => r.json()).then(setConfig);
    fetch("/api/analytics").then((r) => r.json()).then(setAnalytics);
  }, [authed]);

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const saveProject = async (id: string) => {
    setSaving(true);
    await fetch("/api/projects", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projects }),
    });
    setSaving(false);
    setSavedId(id);
    setTimeout(() => setSavedId(null), 2000);
  };

  const updateConfig = (field: keyof Config, value: string) => {
    setConfig((prev) => prev ? { ...prev, [field]: value } : null);
  };

  const updateSocial = (field: keyof Config["social"], value: string) => {
    setConfig((prev) => prev ? { ...prev, social: { ...prev.social, [field]: value } } : null);
  };

  const saveConfig = async () => {
    if (!config) return;
    setSavingConfig(true);
    await fetch("/api/config", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    setSavingConfig(false);
    setConfigSaved(true);
    setTimeout(() => setConfigSaved(false), 2000);
  };

  const logout = () => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
  };

  // ── Login Screen ──
  if (!authed) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ background: "var(--bg-main)" }}
      >
        <div
          className="w-full max-w-sm rounded-2xl p-8"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", boxShadow: "var(--shadow-card-hover)" }}
        >
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
            >
              <Lock size={24} />
            </div>
            <h1 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              Painel Admin
            </h1>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Acesso restrito ao desenvolvedor
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                Senha
              </label>
              <input
                type="password"
                id="admin-password"
                autoFocus
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-150"
                style={{
                  background: "var(--bg-main)",
                  border: `1px solid ${error ? "#f44336" : "var(--border)"}`,
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = error ? "#f44336" : "var(--border)")}
              />
              {error && <p className="text-xs mt-1.5" style={{ color: "#f44336" }}>{error}</p>}
            </div>
            <button type="submit" className="btn-primary justify-center">
              <Lock size={14} />
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ──
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
        style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div>
          <h1 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
            🛡️ Painel Admin
          </h1>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Edição de conteúdo do portfólio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="btn-ghost"
            style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
          >
            <Eye size={13} />
            Ver site
          </a>
          <button onClick={logout} className="btn-ghost" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", color: "#f44336", borderColor: "#f44336" }}>
            <LogOut size={13} />
            Sair
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-8">

        {/* Analytics */}
        {analytics && (
          <section>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              <BarChart3 size={18} style={{ color: "var(--accent)" }} />
              Analytics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="card p-4">
                <div className="flex items-center gap-2 mb-1" style={{ color: "var(--text-muted)" }}>
                  <Eye size={14} />
                  <span className="text-xs font-medium uppercase tracking-wide">Visitas únicas</span>
                </div>
                <div className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
                  {analytics.visits}
                </div>
              </div>
              {Object.entries(analytics.cardClicks || {}).map(([id, clicks]) => {
                const proj = projects.find((p) => p.id === id);
                return (
                  <div key={id} className="card p-4">
                    <div className="flex items-center gap-2 mb-1" style={{ color: "var(--text-muted)" }}>
                      <MousePointerClick size={14} />
                      <span className="text-xs font-medium uppercase tracking-wide truncate">
                        {proj?.title?.split(" ")[0] || id}
                      </span>
                    </div>
                    <div className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {clicks}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>cliques</div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "projects" ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)]"
            }`}
          >
            Projetos
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === "config" ? "bg-[var(--accent)] text-white" : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)]"
            }`}
          >
            Configurações Globais
          </button>
        </div>

        {activeTab === "projects" && (
          <section>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              <Edit3 size={18} style={{ color: "var(--accent)" }} />
              Editar Projetos
            </h2>

            <div className="flex flex-col gap-3">
              {projects.map((project) => (
                <div key={project.id} className="card overflow-hidden">
                  {/* Accordion header */}
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-[var(--bg-card-hover)] transition-colors duration-150 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
                      <span className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                        {project.title}
                      </span>
                      <span className="badge">{project.language}</span>
                    </div>
                    {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {expandedId === project.id && (
                    <div className="p-5 border-t flex flex-col gap-5" style={{ borderColor: "var(--border)" }}>

                      <Field
                        label="Título"
                        value={project.title}
                        onChange={(v) => updateProject(project.id, "title", v)}
                      />
                      <Field
                        label="Descrição curta"
                        value={project.shortDescription}
                        multiline
                        onChange={(v) => updateProject(project.id, "shortDescription", v)}
                      />
                      <Field
                        label="URL da Demo (Vercel)"
                        value={project.demoUrl}
                        onChange={(v) => updateProject(project.id, "demoUrl", v)}
                      />
                      <Field
                        label="Problema que resolve"
                        value={project.problem}
                        multiline
                        rows={4}
                        onChange={(v) => updateProject(project.id, "problem", v)}
                      />
                      <Field
                        label="Minha contribuição"
                        value={project.contribution}
                        multiline
                        rows={5}
                        onChange={(v) => updateProject(project.id, "contribution", v)}
                      />
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
                          Stack (separado por vírgula)
                        </label>
                        <input
                          type="text"
                          value={project.stack.join(", ")}
                          onChange={(e) => updateProject(project.id, "stack", e.target.value.split(",").map((s) => s.trim()))}
                          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                          style={{ background: "var(--bg-main)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                      </div>

                      <button
                        id={`save-${project.id}`}
                        onClick={() => saveProject(project.id)}
                        disabled={saving}
                        className="btn-primary self-start"
                      >
                        {savedId === project.id ? <Check size={14} /> : <Save size={14} />}
                        {savedId === project.id ? "Salvo!" : saving ? "Salvando..." : "Salvar alterações"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "config" && config && (
          <section>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              <Edit3 size={18} style={{ color: "var(--accent)" }} />
              Configurações Globais
            </h2>
            
            <div className="card p-6 flex flex-col gap-6">
              <h3 className="text-md font-medium border-b pb-2" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                Perfil e Currículo (URLs)
              </h3>
              <Field
                label="URL da Foto de Perfil (Avatar)"
                value={config.avatarUrl}
                onChange={(v) => updateConfig("avatarUrl", v)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="URL do Currículo (PT)"
                  value={config.cvPtUrl}
                  onChange={(v) => updateConfig("cvPtUrl", v)}
                />
                <Field
                  label="URL do Currículo (EN)"
                  value={config.cvEnUrl}
                  onChange={(v) => updateConfig("cvEnUrl", v)}
                />
              </div>

              <h3 className="text-md font-medium border-b pb-2 mt-4" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                Redes Sociais e Contato
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="GitHub URL"
                  value={config.social.github}
                  onChange={(v) => updateSocial("github", v)}
                />
                <Field
                  label="LinkedIn URL"
                  value={config.social.linkedin}
                  onChange={(v) => updateSocial("linkedin", v)}
                />
                <Field
                  label="Instagram URL"
                  value={config.social.instagram}
                  onChange={(v) => updateSocial("instagram", v)}
                />
                <Field
                  label="WhatsApp URL"
                  value={config.social.whatsapp}
                  onChange={(v) => updateSocial("whatsapp", v)}
                />
                <Field
                  label="Email (mailto:)"
                  value={config.social.email}
                  onChange={(v) => updateSocial("email", v)}
                />
              </div>

              <button
                onClick={saveConfig}
                disabled={savingConfig}
                className="btn-primary self-start mt-4"
              >
                {configSaved ? <Check size={14} /> : <Save size={14} />}
                {configSaved ? "Salvo!" : savingConfig ? "Salvando..." : "Salvar Configurações"}
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, multiline = false, rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  const base = {
    width: "100%",
    padding: "0.5rem 0.75rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    outline: "none",
    background: "var(--bg-main)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    resize: "vertical" as const,
    fontFamily: "inherit",
  };
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          rows={rows}
          onChange={(e) => onChange(e.target.value)}
          style={base}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={base}
          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      )}
    </div>
  );
}
