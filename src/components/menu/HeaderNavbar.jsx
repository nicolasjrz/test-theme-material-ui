/* eslint-disable react/prop-types */
import { Box, Button, FormControlLabel, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { MaterialUISwitch } from "../switch/MaterialUISwitch";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
export const HeaderNavbar = ({ isNavbarVisible, showNavbar }) => {
  const { darkModeState, handleSwitchChange } = useContext(DarkModeContext);

  return (
    <Box
      p={0.8}
      bgcolor={"transparent"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box p={0.5} sx={{ backgroundColor: "blue" }}>
        <Typography variant="h4" color={"black"}>
          LOGO
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box width={{ xs: 40, sm: 58 }} mr={1}>
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
        </Box>

        <Box>
          <Button
            sx={{
              visibility: isNavbarVisible ? "hidden" : "visible",
              opacity: isNavbarVisible ? 0 : 1,
              border: "none", // Eliminar el borde
              color: "#141414",
              // padding: "10px 20px",
              paddingTop: 1.1,
              cursor: "pointer",
              "&:hover": {
                color: "white",
                backgroundColor: "transparent",
              },
            }}
            onClick={showNavbar}
          >
            <DensityMediumIcon sx={{ fontSize: 30 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
