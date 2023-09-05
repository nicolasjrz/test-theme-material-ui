import { grey, deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {
  const isDarkMode = mode === "dark";

  // Define tus dos tipos de tipografía personalizados
  const typographyPrimary = {
    fontFamily: "prueba1, 'Roboto', sans-serif", // Usa la fuente personalizada 'prueba1' y si no está disponible, usa 'Roboto'
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    // ... Otros estilos de tipografía para la tipografía primaria
  };

  const typographySecondary = {
    fontFamily: "prueba2, sans-serif", // Usa la fuente personalizada 'prueba2' y si no está disponible, usa 'Arial'
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    // ... Otros estilos de tipografía para la tipografía secundaria
  };

  // Crea un objeto de tema utilizando createTheme
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        ...(isDarkMode ? deepPurple : grey),
        main: isDarkMode ? deepPurple[300] : grey[500],
      },
      background: {
        default: isDarkMode ? deepPurple[900] : "#fff",
        paper: isDarkMode ? deepPurple[900] : "#fff",
      },
      background2: {
        default: isDarkMode ? "#32a852" : "#b5417d",
        paper: isDarkMode ? deepPurple[900] : "#fff",
      },
      text: {
        primary: isDarkMode ? "#fff" : grey[900],
        secondary: isDarkMode ? grey[500] : grey[600],
      },
    },
    typography: {
      primary: typographyPrimary, // Asigna la tipografía primaria
      secondary: typographySecondary, // Asigna la tipografía secundaria
    },
  });

  return theme;
};
