import React, { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Create a ThemeContext
const ThemeContext = createContext();

// ThemeProvider Component
export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Define the theme object based on the current theme state
  const themeObject = useMemo(() => 
    createTheme({
      palette: {
        mode: theme, // 'light' or 'dark'
      },
    }), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        <CssBaseline /> {/* This ensures that the baseline styles are applied */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
