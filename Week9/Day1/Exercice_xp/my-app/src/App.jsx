import { useContext } from "react";
import "./App.css";
import Theme from "./Theme.jsx";
import ThemeProvider, { ThemeContext } from "./ThemeContext.jsx";
import Exercice2 from "./Exercice2.jsx";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <section className="theme-panel">
        <h1>Theme Switcher</h1>
        <Theme />
      </section>
      <section className="exercise-panel">
        <p>Exercice2 : </p>
        <Exercice2 />
      </section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
