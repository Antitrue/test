import { createContext, useState, useContext, ReactNode } from 'react';

type IThemeContext =
  | {
      theme: string;
      toggleTheme: () => void;
    }
  | Record<string, never>;

const ThemeContext = createContext<IThemeContext>({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
