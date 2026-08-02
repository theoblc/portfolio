"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "../nav-items";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const overlay = isHome && !isScrolled && !mobileOpen;

  return (
    <nav
      className={`${isHome ? "fixed" : "sticky"} top-0 w-full z-50 py-2 px-4 transition-all duration-300 ${
        overlay
          ? "bg-transparent border-b border-transparent"
          : "bg-background dark:bg-dark_background border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-2 md:mb-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                sizes="40px"
                className="object-contain rounded-full"
              />
            </div>
            <span className={`text-xl whitespace-nowrap ${overlay ? "text-white" : ""}`}>
              Théo Blanchonnet
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className={`ml-2 p-2 md:hidden ${overlay ? "text-white" : ""}`}
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`px-3 py-2 text-sm lg:text-base transition-colors ${
                pathname === path ? "font-medium text-secondary" : overlay ? "text-white" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 max-w-6xl mx-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`block py-2 text-lg transition-colors ${
                pathname === path ? "font-medium text-secondary" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
