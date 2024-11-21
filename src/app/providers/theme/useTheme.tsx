import { useTheme as useThemeFromContext } from './ThemeProvider';

export const useTheme = () => {
  return useThemeFromContext();
};
