import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import { getProject, projects } from "../data";
import { withBasePath } from "../../lib/asset-path";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? project.title : "Projet" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 px-4 max-w-4xl mx-auto w-full">
      <h1 className="text-4xl mb-6">{project.title}</h1>
      <div className="relative h-64 md:h-96 w-full mb-8 rounded-2xl overflow-hidden">
        <Image src={withBasePath(project.image)} alt={project.title} fill className="object-cover" priority />
      </div>

      <h2 className="text-2xl mb-4">Description du projet</h2>
      <div className="space-y-4 opacity-90 leading-relaxed">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6"
        >
          <button className="flex items-center gap-2">
            <FaGithub className="w-5 h-5" /> GitHub
          </button>
        </a>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl mb-4">Résultats</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.gallery.map((item, i) => (
              <figure key={i}>
                <div className="relative h-56 w-full rounded-2xl overflow-hidden">
                  <Image src={withBasePath(item.src)} alt={item.caption ?? project.title} fill className="object-contain" />
                </div>
                {item.caption && (
                  <figcaption className="text-sm opacity-70 mt-2">{item.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
