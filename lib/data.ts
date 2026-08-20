import { readFileSync } from "fs";
import path from "path";
import type { Project } from "@/components/ProjectCard";

const DATA_DIR = path.join(process.cwd(), "data");

export type { Project };

export interface Config {
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

/**
 * Read all projects from the data layer.
 * When migrating to a real database, only this function needs to change.
 */
export function getProjects(): Project[] {
  const raw = readFileSync(path.join(DATA_DIR, "projects.json"), "utf-8");
  const data = JSON.parse(raw);
  return data.projects;
}

/**
 * Read the global site configuration from the data layer.
 * When migrating to a real database, only this function needs to change.
 */
export function getConfig(): Config {
  const raw = readFileSync(path.join(DATA_DIR, "config.json"), "utf-8");
  return JSON.parse(raw);
}
