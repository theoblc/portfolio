"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { metaData, socialLinks, contactInfo } from "app/config";
import { navItems } from "../nav-items";
import { ThemeSwitch } from "./theme-switch";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-container dark:bg-dark_container py-12 mt-auto">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl mb-4">{metaData.title}</h2>
            <p className="mb-4">{metaData.description}</p>
            <div className="flex items-center gap-2">
              <span>Mode sombre/clair :</span>
              <ThemeSwitch />
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {Object.entries(navItems).map(([path, { name }]) => (
                <li key={path}>
                  <Link href={path} className="transition duration-300">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={socialLinks.email} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <a href={socialLinks.linkedin} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href={socialLinks.github} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {YEAR} {metaData.title}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
