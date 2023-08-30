/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

export const LayloutPage = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      //   className="animate__animated animate__fadeIn animate__faster"
    >
      {/* aca iria el navbar */}
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
