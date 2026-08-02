"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Moon className="h-4 w-4" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      id="theme-toggle"
      aria-label={`${isDark ? "dark" : "light"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-80"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};
