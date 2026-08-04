import type { Metadata } from "next";
import Image from "next/image";
import { experiences } from "../experiences-data";
import { withBasePath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Expériences professionnelles",
};

export default function ExperiencesPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full">
      <h1 className="text-4xl mb-2">Mes expériences professionnelles</h1>
      <p className="opacity-80 mb-10">
        Un aperçu des stages et missions qui ont façonné mon parcours d'ingénieur.
      </p>
      <div className="space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative h-16 w-16 shrink-0">
              <Image src={withBasePath(exp.logo)} alt={`${exp.company} logo`} fill className="object-contain" />
            </div>
            <div>
              <h2 className="text-xl mb-2">
                {exp.url ? (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h2>
              <p className="opacity-80 text-sm leading-relaxed">{exp.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
