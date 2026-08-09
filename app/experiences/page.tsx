import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { experiences } from "./data";
import { withBasePath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Expériences professionnelles",
};

// Parses simple `[text](url)` markdown-style links in content and renders them as <a> tags.
function renderContent(content: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<Fragment key={key++}>{content.slice(lastIndex, match.index)}</Fragment>);
    }
    parts.push(
      <a key={key++} href={match[2]} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 hover:opacity-80">
        {match[1]}
      </a>
    );
    lastIndex = linkPattern.lastIndex;
  }
  if (lastIndex < content.length) {
    parts.push(<Fragment key={key++}>{content.slice(lastIndex)}</Fragment>);
  }
  return parts;
}

export default function ExperiencesPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full">
      <h1 className="text-4xl mb-2">Mes expériences professionnelles</h1>
      <p className="opacity-80 mb-10">
        Un aperçu des stages et missions qui ont façonné mon parcours d'ingénieur.
      </p>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 sm:left-8 top-2 bottom-2 w-px bg-black/15 dark:bg-white/15" />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}-${exp.period}-${index}`} className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot + logo */}
              <div className="relative shrink-0 z-10">
                <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-container dark:bg-dark_container ring-4 ring-background dark:ring-dark_background overflow-hidden">
                  <Image src={withBasePath(exp.logo)} alt={`${exp.company} logo`} fill className="object-contain p-1.5" />
                </div>
              </div>
              <div className="pb-2">
                <span className="inline-block text-xs sm:text-sm font-medium uppercase tracking-wide opacity-60 mb-1">
                  {exp.period}
                </span>
                <h2 className="text-xl mb-1">
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h2>
                {exp.role && <p className="text-sm font-medium opacity-70 mb-2">{exp.role}</p>}
                <div className="space-y-3">
                  {exp.content.map((paragraph, i) => (
                    <p key={i} className="opacity-80 text-sm leading-relaxed">
                      {renderContent(paragraph)}
                    </p>
                  ))}
                </div>
                {exp.projects && (
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {exp.projects.map((project, i) => (
                      <div
                        key={i}
                        className="bg-container dark:bg-dark_container rounded-xl p-4 shadow-sm"
                      >
                        <h3 className="text-sm font-semibold mb-1.5">{project.title}</h3>
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {project.skills.map((skill, si) => (
                              <span
                                key={si}
                                className="text-xs px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 opacity-80"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="opacity-80 text-sm leading-relaxed">
                          {renderContent(project.description)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
