import "./index.css";
import Container from "./components/Container";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LanguageContextProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
