import { Box, Typography } from "@mui/material";

import imgennashe from "../../assets/img.jpg";
import { useState } from "react";

export const CardHorizontal = () => {
  const [hovered, setHovered] = useState(false);

  const card = {
    width: 450,
    height: 200,
    overflow: "hidden",
    border: "1px solid #fff",
    position: "relative",
    // zIndex: 1300, // Asegura que la tarjeta esté por encima del menú
  };

  const cardBody = {
    width: "100%",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const cardImgText = {
    position: "absolute",
    transition: "2s",
    backgroundColor: hovered ? "black" : "transparent",
    top: hovered ? 0 : "-100%",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imgennashe})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <Box
      bgcolor={"#525050"}
      sx={card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={cardImgText}>
        <Typography gutterBottom variant="h4" color="white">
          nashe
        </Typography>
      </Box>
      <Box sx={cardBody}>
        <Typography gutterBottom variant="h4" color="white">
          Lizard
        </Typography>
        <Typography variant="body2" color="white">
          Lizards are a widespread
        </Typography>
      </Box>
    </Box>
  );
};

