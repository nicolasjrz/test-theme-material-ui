import { FormControlLabel, Grid, Typography, useTheme } from "@mui/material";
import { LayloutPage } from "../ui/layout/LayloutPage";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import { MaterialUISwitch } from "../components/MaterialUISwitch";

export const HomePage = () => {
  const theme = useTheme(); // Obtén el tema actual
  const { darkModeState, handleSwitchChange } = useContext(DarkModeContext);

  return (
    <LayloutPage>
      <Grid
        container
        style={{ backgroundColor: theme.palette.background2.default }}
      >
        <Grid item sm={3}>
          <Typography>Texto1</Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography>Texto2</Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography>Texto3</Typography>
        </Grid>
        <Grid item sm={3}>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={darkModeState}
                onChange={handleSwitchChange}
              />
            }
            // label="switch"
          />
        </Grid>
      </Grid>
    </LayloutPage>
  );
};
