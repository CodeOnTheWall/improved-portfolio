"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "../Icons";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`ml-3 flex items-center justify-center rounded-full p-1
${theme === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {theme === "dark" ? (
        <SunIcon className=" fill-dark" />
      ) : (
        <MoonIcon className=" fill-dark" />
      )}
    </button>
  );
}
