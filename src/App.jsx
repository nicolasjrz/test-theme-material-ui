import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AppTheme } from "./ui/theme/AppTheme";
import { DarkModeProvider } from "./context/DarkModeProvider";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  console.log({ isDarkMode });

  return (
    <>
      <DarkModeProvider>
        <AppTheme mode={isDarkMode ? "dark" : "light"}>
          {/* <AppRuoter/> */}
          {/* aca iria el approter para que se implemente en todos los archivos */}
          <HomePage />
        </AppTheme>
      </DarkModeProvider>
    </>
  );
}

export default App;
