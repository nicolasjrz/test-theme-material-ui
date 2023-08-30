import { grey, deepPurple } from "@mui/material/colors";

export const getDesignTokens = (mode) => {
  const isDarkMode = mode === "dark";

  return {
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
  };
};
