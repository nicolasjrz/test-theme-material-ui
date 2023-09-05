import { Grid, Typography, useTheme } from "@mui/material";
import { LayoutPage } from "../ui/layout/LayoutPage";

export const HomePage = () => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <LayoutPage>
      <Grid
        spacing={1}
        container
        style={{ backgroundColor: theme.palette.background2.default }}
      >
        <Grid item sm={4}>
          <Typography
            variant="h1" // Especifica el estilo de tipografía primaria
            sx={{ fontFamily: theme.typography.primary.fontFamily }}
          >
            Texto1
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body1">Texto2</Typography>{" "}
          {/* Usando el estilo de tipografía predeterminado */}
        </Grid>
        <Grid item sm={4}>
          <Typography
            variant="h2" // Especifica el estilo de tipografía secundaria
            sx={{ fontFamily: theme.typography.secondary.fontFamily }}
          >
            Texto3
          </Typography>
        </Grid>
      </Grid>
    </LayoutPage>
  );
};
