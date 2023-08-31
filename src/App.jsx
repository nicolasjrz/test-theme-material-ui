import { useContext } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AppTheme } from "./ui/theme/AppTheme";
// import { DarkModeProvider } from "./context/DarkModeProvider";
import { DarkModeContext } from "./context/DarkModeContext";

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
        {/* <AppRuoter/> */}
        {/* aca iria el approter para que se implemente en todos los archivos */}
        <HomePage />
      </AppTheme>
    </>
  );
}

export default App;
