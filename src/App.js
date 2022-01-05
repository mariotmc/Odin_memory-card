import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./styles/style.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Scoreboard />
        <Cards />
      </main>
      <Footer />
    </>
  );
};

export default App;
