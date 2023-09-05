import { Grid } from "@mui/material";
import { Navbar } from "../components/menu/Navbar";
import { Card1 } from "../components/card/Card1";
import { CardHorizontal } from "../components/card/CardHorizontal";

export const NewsPage = () => {
  return (
    <>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height={500}
        flexDirection="row"
      >
        <Grid item container justifyContent="center" spacing={2} p={3}>
          {/* Aquí estamos utilizando otro contenedor Grid para centrar y espaciar las tarjetas */}
          <Grid item>
            <Card1 />
          </Grid>
          <Grid item>
            <Card1 />
          </Grid>
        </Grid>

        <Grid item container justifyContent="center" spacing={2} p={3}>
          {/* Aquí estamos utilizando otro contenedor Grid para centrar y espaciar las tarjetas */}
          <Grid item>
            <CardHorizontal />
          </Grid>
          <Grid item>
            <CardHorizontal />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
