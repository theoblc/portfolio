import Link from "next/link";
import Image from "next/image";
import { Project } from "../projects/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-container dark:bg-dark_container rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl mb-2">{project.title}</h3>
        <p className="text-sm opacity-80">{project.summary}</p>
      </div>
    </Link>
  );
}
