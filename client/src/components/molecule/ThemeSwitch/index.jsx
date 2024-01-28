import React from 'react';
import { useDynamicTheme } from '../../../context/DynamicThemeContext';
import { useTranslation } from "react-i18next";

const ThemeSwitch = () => {
  const { theme, setThemeFromSwitch } = useDynamicTheme();
  const { t, i18n } = useTranslation();
  const handleThemeChange = () => {
    // Toggle between 'dark' and 'light' themes
    const selectedTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeFromSwitch(selectedTheme);
  };

  return (
    <div className='bg-contrast text-text h-fulll flex items-center'>
      {/* Toggle version */}
      <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === 'dark'}
          onChange={handleThemeChange}
        />
        <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
        <span className="ms-3 text-sm font-medium text-text">
          {theme === 'dark' ? `${t("darkmode")}` : `${t("lightmode")}`}
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;