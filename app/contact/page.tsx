import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { socialLinks, contactInfo } from "../config";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto w-full">
      <h1 className="text-4xl mb-8 text-center">Me contacter</h1>
      <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-10">
        <Image src="/images/Banniere_contact.png" alt="Bannière de contact" fill className="object-cover" />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl mb-2">Par Email</h2>
          <p className="opacity-80 mb-4">
            Via l'adresse <code>{contactInfo.email}</code>.
          </p>
          <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> Email
            </button>
          </a>
        </div>

        <div>
          <h2 className="text-2xl mb-2">Sur LinkedIn</h2>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2">
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </button>
          </a>
        </div>

        <div>
          <h2 className="text-2xl mb-2">GitHub</h2>
          <p className="opacity-80 mb-4">Accéder à mon profil GitHub et découvrez mes projets.</p>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2">
              <FaGithub className="w-5 h-5" /> GitHub
            </button>
          </a>
        </div>


      </div>
    </section>
  );
}
