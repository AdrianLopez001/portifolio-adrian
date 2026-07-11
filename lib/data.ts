import { readFileSync } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

export interface Project {
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
