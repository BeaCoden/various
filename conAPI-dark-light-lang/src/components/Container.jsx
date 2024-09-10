import React, { useContext } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import ThemeContext from "../contexts/ThemeContext";

const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Container;
