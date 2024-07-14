import { useState, useEffect } from "react";
import styles from "./QuestionCard.module.scss";
import GetQuestions from "../../function/GetQuestions/GetQuestions";

// interface QuestionsI {
//   question: string;
//   correct_answer: string;
//   incorrect_answers: string[];
// }

const QuestionCard = ({ BASE_URL }: { BASE_URL: String }) => {
  const [questions, setQuestions] = useState([]);
  console.log("QuestionCard activated");

  // useRef to count the game score

  async function fetchQuestions(BASE_URL: any) {
    setQuestions(await GetQuestions(`${BASE_URL}`));
  }

  useEffect(() => {
    // declare fetchQuestions outside of useEffect and call inside here
    fetchQuestions(BASE_URL);
  }, [BASE_URL]);

  return (
    // Here we will either display the data or if it's not yet loaded, display some loading text
    <div>{questions ? <RenderData data={questions} /> : <p>Loading...</p>}</div>
  );
};

type DataProps = {
  data: any;
};

const RenderData = ({ data }: DataProps) => {
  // Here is where the data is supposed to be rendered.
  return (
    <div className={styles.RenderData}>
      <h2>{data.question}</h2>
      <button>{data.correct_answer}</button>
      <button>{data.incorrect_answers}</button>
      <button>{data.incorrect_answers}</button>
      <button>{data.incorrect_answers}</button>
    </div>
  );
};

export default QuestionCard;
