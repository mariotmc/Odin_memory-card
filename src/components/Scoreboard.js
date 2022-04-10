const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div className="score current-score">Current Score: {props.score}</div>
      <div className="score best-score">Best Score: {props.highscore}</div>
    </div>
  );
};

export default Scoreboard;
