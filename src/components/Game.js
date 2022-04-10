import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Scoreboard from "./Scoreboard";
import Cards from "./Cards";
import InstructionsPopup from "./InstructionsPopup";

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [open, setOpen] = useState(false);

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
    <motion.div
      className="transition-animation-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <Link
        to="/Odin_memory-card/"
        className="block max-w-[100px] p-2 mt-10 mb-6 mx-auto text-lg text-center text-customGray font-bold rounded-full hover:bg-customRed hover:text-white"
      >
        Home
      </Link>
      <Scoreboard score={score} highscore={highscore} setOpen={setOpen} />
      <Cards />
      <InstructionsPopup open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Game;
