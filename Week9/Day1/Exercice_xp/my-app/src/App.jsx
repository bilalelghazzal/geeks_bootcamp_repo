import { useContext } from "react";
import "./App.css";
import Theme from "./Theme.jsx";
import ThemeProvider, { ThemeContext } from "./ThemeContext.jsx";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <section className="theme-panel">
        <h1>Theme Switcher</h1>
        <Theme />
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
