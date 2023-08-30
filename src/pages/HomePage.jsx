import { Grid, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography>Texto1</Typography>
        </Grid>
        <Grid item>
          <Typography>Texto2</Typography>
        </Grid>
        <Grid item>
          <Typography>Texto3</Typography>
        </Grid>
      </Grid>
    </>
  );
};
