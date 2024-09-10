import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`main ${theme}`}>
      <h2>{language === "en" ? "Main Component" : "Hauptkomponente"}</h2>
    </div>
  );
};

export default Main;
