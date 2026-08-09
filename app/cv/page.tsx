import type { Metadata } from "next";
import Image from "next/image";
import { withBasePath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "CV",
};

export default function CvPage() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto w-full text-center">
      <h1 className="text-4xl mb-4">Curriculum Vitæ</h1>
      <p className="opacity-80 mb-6">Veuillez trouver ici mon CV à télécharger.</p>
      <a
        href={withBasePath("/CV_2027_FR.pdf")}
        download="CV_theo_blanchonnet.pdf"
        className="inline-block mb-8"
      >
        <button>Télécharger le .pdf</button>
      </a>
      <div className="relative w-full" style={{ aspectRatio: "1 / 1.414" }}>
        <Image
          src={withBasePath("/CV_2027_FR.png")}
          alt="Aperçu du CV de Théo Blanchonnet"
          fill
          className="object-contain rounded-2xl shadow-md"
        />
      </div>
    </section>
  );
}
