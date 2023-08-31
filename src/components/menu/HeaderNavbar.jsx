/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
export const HeaderNavbar = ({ isNavbarVisible, showNavbar }) => {
  return (
    <Box
      p={1}
      bgcolor={"transparent"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box pl={4}>
        <Typography variant="h4" color={"black"}>
          LOGO
        </Typography>
      </Box>
      <Box pr={4}>
        <Button
          sx={{
            visibility: isNavbarVisible ? "hidden" : "visible",
            opacity: isNavbarVisible ? 0 : 1,
            border: "none", // Eliminar el borde
            color: "#141414",
            padding: "10px 20px",
            cursor: "pointer",
            "&:hover": {
              color: "white",
              backgroundColor: "transparent",
            },
          }}
          onClick={showNavbar}
        >
          <DensityMediumIcon />
        </Button>
      </Box>
    </Box>
  );
};
