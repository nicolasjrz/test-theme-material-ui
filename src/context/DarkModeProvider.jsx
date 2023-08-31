/* eslint-disable react/prop-types */
import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({ children }) => {
  const [estado, setEstado] = useState("light");

  const cambiarOscuro = () => {
    setEstado("dark");
  };
  const cambiarClaro = () => {
    setEstado("light");
  };

  return (
    <DarkModeContext.Provider value={{ estado, cambiarOscuro, cambiarClaro }}>
      {children}
    </DarkModeContext.Provider>
  );
};
