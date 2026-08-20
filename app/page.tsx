import { getProjects, getConfig } from "@/lib/data";
import ClientPage from "./ClientPage";

export default function Home() {
  const projects = getProjects();
  const config = getConfig();

  return <ClientPage projects={projects} config={config} />;
}
