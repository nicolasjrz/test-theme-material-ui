/* eslint-disable react/prop-types */
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const ButtonLink = ({ item }) => {
  const { title, url } = item;

  return (
    <Button
      component={RouterLink}
      to={url}
      sx={{
        border: "none", // Eliminar el borde
        color: "#E9600E",
        padding: "10px 20px",
        cursor: "pointer",
        "&:hover": {
          color: "white",
          backgroundColor: "transparent",
        },
      }}
    >
      <Typography variant="h2">{title}</Typography>
    </Button>
  );
};
