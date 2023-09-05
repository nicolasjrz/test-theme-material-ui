/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Navbar } from "../../components/menu/Navbar";

export const LayoutPage = ({ children }) => {
  return (
    <Box
    // sx={{ display: "flex" }}
    //   className="animate__animated animate__fadeIn animate__faster"
    >
      {/* aca iria el navbar */}
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
