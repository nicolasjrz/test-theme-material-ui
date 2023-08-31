/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { ButtonLink } from "./ButtonLink";

const navItems = [
  { title: "Home", url: "/" },
  { title: "News", url: "/news" },
  { title: "Team", url: "/team" },
  { title: "Contact", url: "/contact" },
];

export const ModalNavbar = ({ navRef, isNavbarVisible, showNavbar }) => {
  return (
    <Box
      bgcolor={"black"}
      ref={navRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        transition: "1s",
        transform: isNavbarVisible ? "translateY(0)" : "translateY(-100vh)",
        zIndex: 1200, // Asegura que el menú esté por encima de la tarjeta
      }}
    >
      {navItems.map((item, index) => (
        <ButtonLink key={index} item={item} />
      ))}

      <Button
        sx={{
          position: "absolute",
          top: 15,
          right: "2rem",
          border: "none", // Eliminar el borde
          color: "#f8f6f5",
          padding: "10px 20px",
          cursor: "pointer",
          "&:hover": {
            color: "#E9600E",
            backgroundColor: "transparent",
          },
        }}
        onClick={showNavbar}
      >
        <CloseIcon />
      </Button>
    </Box>
  );
};
