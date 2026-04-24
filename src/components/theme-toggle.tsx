"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return window.localStorage.getItem("anbidev-theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("anbidev-theme", next);
  };

  return (
    <button onClick={toggleTheme} className="btn-utility" type="button" aria-label="Toggle theme">
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
