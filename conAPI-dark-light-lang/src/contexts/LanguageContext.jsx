import { createContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  useEffect(() => {
    const localLanguage = localStorage.getItem("language");
    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
