import type { Metadata } from "next";
import { PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Écriture",
};

export default function EcriturePage() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto w-full text-center">
      <PenTool className="w-10 h-10 text-secondary mx-auto mb-6" />
      <h1 className="text-4xl mb-4">Écriture</h1>
      <p className="opacity-80 leading-relaxed max-w-xl mx-auto">
        L'écriture est pour moi un espace d'expression que j'explore à mon rythme, en dehors de l'ingénierie et
        de la technique. Cette page accueillera bientôt mes textes, réflexions et récits.
      </p>
      <p className="opacity-60 text-sm mt-8">Contenu à venir prochainement.</p>
    </section>
  );
}
