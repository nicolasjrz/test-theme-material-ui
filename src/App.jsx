import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AppTheme } from "./ui/theme/AppTheme";

function App() {
  return (
    <>
      <AppTheme>
        {/* <AppRuoter/> */}
        {/* aca iria el approter para que se implemente en todos los archivos */}
        <HomePage />
      </AppTheme>
    </>
  );
}

export default App;
