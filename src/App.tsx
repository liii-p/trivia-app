import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.tsx";
import QuestionCard from "./components/QuestionCard/QuestionCard";
//import { QuestionType } from "./types";

function App() {
  //const args = `?amount=1&difficulty=${selectDifficulty.toLowerCase()}&type=multiple`;
  const [notActive, setNotActive] = useState<boolean>(true);
  const [selectDifficulty, setSelectDifficulty] = useState<string>("easy");
  const difficulties = () => {
    return ["easy", "medium", "hard"];
  };

  const difficultySelection = (difficulty: string) => {
    setSelectDifficulty(difficulty);
  };

  const handleClick = () => {
    console.log("Handling click.");
    setNotActive(false);
    console.log(notActive);
  };

  return (
    <div className="App">
      <h1>Trivia App</h1>
      {notActive ? (
        <Menu
          setInvisible={handleClick}
          difficultyFunc={difficultySelection}
          difficultyOptions={difficulties()}
          selectDifficulty={selectDifficulty}
        />
      ) : (
        <QuestionCard selectDifficulty={selectDifficulty} />
      )}
    </div>
  );
}

export default App;
