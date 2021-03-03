import { useEffect, useState } from "react";

const TUNTZ_THEME_KEY = 'theme'

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = mode => {
    window.localStorage.setItem(TUNTZ_THEME_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(TUNTZ_THEME_KEY);
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
