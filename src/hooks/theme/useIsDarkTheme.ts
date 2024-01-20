import { useState } from "react";

export function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(false);

  const validateTheme = (): void => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setIsDark((!userTheme && systemTheme) || userTheme === "dark");
  };

  const changeThemeToggle = (isDark: boolean): void => {
    const themeToggleDark = document.getElementById("theme-toggle-dark");
    const themeToggleLight = document.getElementById("theme-toggle-light");

    themeToggleDark?.classList.add("hidden");
    themeToggleLight?.classList.add("hidden");

    if (isDark) {
      document.documentElement.classList.add("dark");
      themeToggleDark?.classList.add("hidden");
      themeToggleLight?.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleDark?.classList.remove("hidden");
      themeToggleLight?.classList.add("hidden");
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDark(isDark);
  };

  const handleThemeToggle = () => {
    validateTheme();
    changeThemeToggle(!isDark);
  };

  const handleThemeToggleEfect = () => {
    validateTheme();
    changeThemeToggle(isDark);
  };

  return {
    changeThemeToggle,
    handleThemeToggle,
    handleThemeToggleEfect,
  };
}
