import React from 'react';
import { useDynamicTheme } from '../../../context/DynamicThemeContext';

const ThemeSwitch = () => {
  const { theme, setThemeFromSwitch } = useDynamicTheme();

  const handleThemeChange = (selectedTheme) => {
    setThemeFromSwitch(selectedTheme);
  };

  return (
    <div className='bg-contrast text-text'>
      <select
        id="themeSwitch"
        className='bg-contrast text-text'
        value={theme}
        onChange={(e) => handleThemeChange(e.target.value)}
      >
        <option value={theme}>{theme === 'dark' ? 'Dark' : 'Light'} Theme</option>
        <option value={theme === 'dark' ? 'light' : 'dark'}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'}
        </option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
