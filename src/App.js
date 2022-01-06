import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./styles/style.css";

const App = () => {
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const guessing = useCallback(
    (e) => {
      let newGuess = e.target.parentNode.children[1].innerText;
      if (!guesses.includes(newGuess)) {
        setGuesses([...guesses, newGuess]);
        setScore(score + 1);
      } else if (guesses.includes(newGuess)) {
        setGuesses([]);
        setScore(0);
      }
    },
    [guesses, score]
  );

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((element) => element.addEventListener("click", guessing));

    if (score > highscore) setHighscore(score);

    return () => {
      cards.forEach((element) => element.removeEventListener("click", guessing));
    };
  }, [guessing, highscore, score]);

  return (
    <>
      <Header />
      <main>
        <Scoreboard score={score} highscore={highscore} />
        <Cards />
      </main>
      <Footer />
    </>
  );
};

export default App;
