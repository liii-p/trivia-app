import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.tsx";
import QuestionCard from "./components/QuestionCard/QuestionCard";
//import { QuestionType } from "./types";

function App() {
  //const args = `?amount=1&difficulty=${selectDifficulty.toLowerCase()}&type=multiple`;
  //const [visible, setVisible] = useState<boolean>(true);
  const [selectDifficulty, setSelectDifficulty] = useState<string>("Easy");
  const difficulties = () => {
    return ["Easy", "Medium", "Hard"];
  };

  let notActive = false;

  const difficultySelection = (difficulty: string) => {
    setSelectDifficulty(difficulty);
  };

  const handleClick = () => {
    console.log("Handling click.");
    notActive = true;
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
