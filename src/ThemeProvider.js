import React, { createContext, useState, useCallback } from 'react';
import { COLORS } from './constants';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('theme1');

  const colors = COLORS[theme];

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme === 'theme1') {
        return 'theme2';
      } else if (currentTheme === 'theme2') {
        return 'theme3';
      } else if (currentTheme === 'theme3') {
        return 'theme1';
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ colors, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
