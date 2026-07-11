import { readFileSync } from "fs";
import path from "path";
import ClientPage from "./ClientPage";

export default function Home() {
  const raw = readFileSync(path.join(process.cwd(), "data", "projects.json"), "utf-8");
  const { projects } = JSON.parse(raw);
  return <ClientPage projects={projects} />;
}
