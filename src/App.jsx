import { useContext } from "react";
import "./App.css";
import { AppTheme } from "./ui/theme/AppTheme";
// import { DarkModeProvider } from "./context/DarkModeProvider";
import { DarkModeContext } from "./context/DarkModeContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   setIsDarkMode(prefersDarkMode);
  // }, []);

  const { darkModeState } = useContext(DarkModeContext);
  return (
    <>
      <AppTheme mode={darkModeState ? "dark" : "light"}>
        <AppRouter />
        {/* aca iria el approter para que se implemente en todos los archivos */}
      </AppTheme>
    </>
  );
}

export default App;
