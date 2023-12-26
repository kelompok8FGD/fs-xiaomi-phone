import React, { createContext, useContext, useEffect, useState } from "react";

const getSystemTheme = (mediaQuery) =>
  window.matchMedia(mediaQuery).matches ? "dark" : "light";

const getInitialTheme = () => {
  const activeTheme = localStorage.getItem("theme");
  return activeTheme && (activeTheme === "dark" || activeTheme === "light")
    ? activeTheme
    : getSystemTheme("(prefers-color-scheme: dark)");
};

const DynamicThemeContext = createContext();

export const DynamicThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => getInitialTheme());

  const setTheme = (newTheme, source) => {
    if (theme !== newTheme) {
      localStorage.setItem("theme", newTheme);
      console.log(`Updated active theme from ${source}:`, newTheme);
    }

    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const changeTheme = (selectedTheme, source) => {
    console.log(`Setting theme from ${source}:`, selectedTheme);
    setTheme(selectedTheme, source);
  };

  const setThemeFromSwitch = (selectedTheme) =>
    changeTheme(selectedTheme, "switch");
  const setThemeFromSystem = () =>
    changeTheme(
      getSystemTheme("(prefers-color-scheme: dark)"),
      "system preference"
    );

  useEffect(() => {
    changeTheme(getInitialTheme(), "available theme");
    const systemPreferenceListener = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleSystemPreferenceChange = () => {
      console.log("System preference change detected. Updating theme...");
      console.log(
        "New system preference value:",
        systemPreferenceListener.matches
      );
      changeTheme(
        getSystemTheme("(prefers-color-scheme: dark)"),
        "user device"
      );
    };

    systemPreferenceListener.addEventListener(
      "change",
      handleSystemPreferenceChange
    );

    return () => {
      systemPreferenceListener.removeEventListener(
        "change",
        handleSystemPreferenceChange
      );
    };
  }, []);
  const contextValue = { theme, setThemeFromSwitch, setThemeFromSystem };

  return (
    <DynamicThemeContext.Provider value={contextValue}>
      {children}
    </DynamicThemeContext.Provider>
  );
};

export const useDynamicTheme = () => {
  const context = useContext(DynamicThemeContext);
  return context;
};
