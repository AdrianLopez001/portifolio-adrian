import { readFileSync } from "fs";
import path from "path";
import ClientPage from "./ClientPage";

export default function Home() {
  const projRaw = readFileSync(path.join(process.cwd(), "data", "projects.json"), "utf-8");
  const confRaw = readFileSync(path.join(process.cwd(), "data", "config.json"), "utf-8");
  
  const { projects } = JSON.parse(projRaw);
  const config = JSON.parse(confRaw);
  
  return <ClientPage projects={projects} config={config} />;
}
