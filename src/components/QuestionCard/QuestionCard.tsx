import styles from "./QuestionCard.module.scss";
import { QuestionType } from "../../types";
import { useEffect, useState } from "react";
import useQuestions from "../../hooks/useQuestions/useQuestions";

type Props = {
  questions: QuestionType;
};

const QuestionCard = (selectDifficulty: string) => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    useQuestions(`${selectDifficulty}`).then((res) => {
      setQuestions(res.data);
      console.log(res.data);
    });
  }, []);
  const qu = questions.results[0];
  return (
    // Here we will either display the data or if it's not yet loaded, display some loading text

    <div className={styles.QuestionCard}>
      <h2>{qu.question}</h2>
      <button>{qu.correct_answer}</button>
      <button>{qu.incorrect_answers[0]}</button>
      <button>{qu.incorrect_answers[1]}</button>
      <button>{qu.incorrect_answers[2]}</button>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
