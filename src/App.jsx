import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AppTheme } from "./ui/theme/AppTheme";

function App() {
  return (
    <>
      <AppTheme>
        <HomePage />
      </AppTheme>
    </>
  );
}

export default App;
