import type { Metadata } from "next";
import { projects } from "./data";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
  title: "Projets académiques",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full">
      <h1 className="text-4xl mb-2">Mes projets académiques</h1>
      <p className="opacity-80 mb-8">
        Voici quelques projets que j'ai eu la chance de mettre en oeuvre dans le cadre de mes études. Certains
        sont d'origine académique, d'autres plutôt personnels.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
