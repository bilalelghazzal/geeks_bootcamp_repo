import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

export default Theme;
//
