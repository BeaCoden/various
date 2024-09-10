import React from "react";
import Header from "./components/common/Header";
import Main from "./components/specific/Main";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App container">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
