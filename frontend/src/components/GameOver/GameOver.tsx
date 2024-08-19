import { GameOverType } from "../../types";

const GameOver = ({ points }: GameOverType) => {
  const reload = () => window.location.reload();

  return (
    <div>
      <h2>Game Over!</h2>
      <p>You got {points} out of 10!</p>
      <button onClick={reload}>Play Again</button>
    </div>
  );
};

export default GameOver;
