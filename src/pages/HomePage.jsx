import { Button, Grid, Typography, useTheme } from "@mui/material";
import { LayloutPage } from "../ui/layout/LayloutPage";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const HomePage = () => {
  const theme = useTheme(); // Obtén el tema actual
  const { estado, cambiarOscuro, cambiarClaro } = useContext(DarkModeContext);

  //   console.log({ estado });

  return (
    <LayloutPage>
      <Grid
        container
        style={{ backgroundColor: theme.palette.background2.default }}
      >
        <Grid item sm={4}>
          <Typography>Texto1</Typography>
          <Button variant="contained" onClick={cambiarOscuro}>
            dark
          </Button>
        </Grid>
        <Grid item sm={4}>
          <Typography>Texto2</Typography>
          <Button variant="contained" onClick={cambiarClaro}>
            claro
          </Button>
        </Grid>
        <Grid item sm={4}>
          <Typography>Texto3</Typography>
        </Grid>
      </Grid>
    </LayloutPage>
  );
};
