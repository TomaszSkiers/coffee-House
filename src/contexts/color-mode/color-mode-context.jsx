import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';

export const ColorModeContext = createContext();

export function ColorModeProvider({ children }) {

  const storedMode = localStorage.getItem('theme'); // Pobierz zapisany motyw
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(storedMode || (prefersDarkMode ? 'dark' : 'light'));
  


  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode); // Zapisz nowy motyw
      return newMode;
    });
  },[]);
  

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }

  return context;
};
