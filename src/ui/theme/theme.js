import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    // Cambio en esta línea: de paletteL a palette
    primary: { main: "#262254" },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A100,
    },
  },
});
