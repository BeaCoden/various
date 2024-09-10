import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LanguageContext from "../contexts/LanguageContext";

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "de" : "en");
  };

  return (
    <div className={`header ${theme}`}>
      <h1>{language === "en" ? "Header Component" : "Kopfzeilenkomponente"}</h1>
      <div className="switchBtnBox">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "🌙"}
            onChange={changeTheme}
          />
          <span className="slider round"></span>
        </label>

        <label className="switch language-switch">
          <input
            type="checkbox"
            checked={language === "de"}
            onChange={toggleLanguage}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
