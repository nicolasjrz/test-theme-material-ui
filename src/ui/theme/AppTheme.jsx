/* eslint-disable react/prop-types */

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { getDesignTokens } from "./getDesignTokens";

export const AppTheme = ({ children, isDarkMode }) => {
  ///const mode = "dark"; //  "light"   Puedes cambiar esto según el modo que desees
  const darkModeTheme = createTheme(getDesignTokens(isDarkMode));
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      {/* Aquí podrías añadir más elementos si es necesario */}
      {children}
    </ThemeProvider>
  );
};
