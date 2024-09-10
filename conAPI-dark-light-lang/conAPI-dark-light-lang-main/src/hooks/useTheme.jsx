import { useState } from "react";

const defaultTheme = localStorage.getItem("theme") || "☀️";

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = () => {
    setTheme((theme) => (theme === "☀️" ? "🌙" : "☀️"));
  };

  return { theme, changeTheme };
};

export default useTheme;
