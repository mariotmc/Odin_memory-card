import { QuestionMarkCircleIcon } from "@heroicons/react/outline";

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="score current-score">Current Score: {props.score}</div>
      <QuestionMarkCircleIcon
        stroke="#383838"
        className="w-[46px] h-[46px] cursor-pointer"
        onClick={() => props.setOpen(true)}
      />
      <div className="score best-score">Best Score: {props.highscore}</div>
    </div>
  );
};

export default Scoreboard;
