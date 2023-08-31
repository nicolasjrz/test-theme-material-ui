import { Grid, Typography, useTheme } from "@mui/material";
import { LayloutPage } from "../ui/layout/LayloutPage";

export const HomePage = () => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <LayloutPage>
      <Grid
        container
        style={{ backgroundColor: theme.palette.background2.default }}
      >
        <Grid item sm={4}>
          <Typography>Texto1</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography>Texto2</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography>Texto3</Typography>
        </Grid>
      </Grid>
    </LayloutPage>
  );
};
