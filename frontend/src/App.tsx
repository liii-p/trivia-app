import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import QuestionCard from "./components/QuestionCard/QuestionCard";

function App() {
  const [notActive, setNotActive] = useState<boolean>(true);
  const [selectDifficulty, setSelectDifficulty] = useState<string>("easy");

  const difficultySelection = (difficulty: string) => {
    setSelectDifficulty(difficulty);
  };

  const handleClick = () => {
    setNotActive(false);
  };

  return (
    <div className="App">
      <h1>Trivia App</h1>
      {notActive ? (
        <Menu
          setInvisible={handleClick}
          difficultyFunc={difficultySelection}
          selectDifficulty={selectDifficulty}
        />
      ) : (
        <QuestionCard selectDifficulty={selectDifficulty} />
      )}
    </div>
  );
}

export default App;
