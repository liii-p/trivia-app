import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu.tsx";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import nextQuestion from "./hooks/GetQuestions/useQuestions.ts";
import useQuestions from "./hooks/GetQuestions/useQuestions.ts";

function App() {
  //const args = `?amount=1&difficulty=${selectDifficulty.toLowerCase()}&type=multiple`;
  const [visible, setVisible] = useState<boolean>(true);
  const [selectDifficulty, setSelectDifficulty] = useState<string>("");
  const difficulties = () => {
    return ["Easy", "Medium", "Hard"];
  };

  let notActive = true;

  const difficultySelection = (difficulty: string) => {
    setSelectDifficulty(difficulty);
  };

  const handleClick = () => {
    setVisible(false);
    nextQuestion();
    notActive = false;
  };

  //const { questions, nextQuestion } = useQuestions();

  return (
    <div className="App">
      <h1>Trivia App</h1>
      {notActive ? (
        <Menu
          onStart={handleClick}
          difficultyFunc={difficultySelection}
          difficultyOptions={difficulties()}
          selectDifficulty={selectDifficulty}
        />
      ) : (
        //<QuestionCard data={questions} />
        <p>Hello, the game has started.</p>
      )}
    </div>
  );
}

export default App;
