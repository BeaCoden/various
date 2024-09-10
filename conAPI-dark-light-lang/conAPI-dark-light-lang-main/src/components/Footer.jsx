import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`footer ${theme}`}>
      <h3>{language === "en" ? "Footer Component" : "Fußzeilenkomponente"}</h3>
    </div>
  );
};

export default Footer;
