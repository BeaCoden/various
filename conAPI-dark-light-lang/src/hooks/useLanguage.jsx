import { useState } from "react";

const defaultLanguage = localStorage.getItem("language") || "en";

const useLanguage = () => {
  const [language, setLanguage] = useState(defaultLanguage);

  const changeLanguage = () => {
    setLanguage((language) => (language === "en" ? "de" : "en"));
  };

  return { language, changeLanguage };
};

export default useLanguage;
