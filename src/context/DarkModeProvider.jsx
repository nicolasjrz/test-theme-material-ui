/* eslint-disable react/prop-types */
import { useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({ children }) => {
  const [darkModeState, setDarkModeState] = useState(false);

  const cambiarOscuro = () => {
    // Lógica para cambiar al tema oscuro
    setDarkModeState(true);
  };

  const cambiarClaro = () => {
    // Lógica para cambiar al tema claro
    setDarkModeState(false);
  };

  const handleSwitchChange = () => {
    if (darkModeState) {
      cambiarClaro();
    } else {
      cambiarOscuro();
    }
  };

  return (
    <DarkModeContext.Provider value={{ darkModeState, handleSwitchChange }}>
      {children}
    </DarkModeContext.Provider>
  );
};
