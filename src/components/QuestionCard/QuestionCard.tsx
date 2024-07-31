import styles from "./QuestionCard.module.scss";
import { QuestionType, QuestionCardType } from "../../types";
import { useEffect, useState } from "react";
import useQuestions from "../../hooks/useQuestions/useQuestions";

const baseURL = `https://opentdb.com/api.php`;

const QuestionCard = ({ selectDifficulty }: QuestionCardType) => {
  const [questions, setQuestions] = useState<QuestionType | null>(null);

  useEffect(() => {
    useQuestions(`${selectDifficulty}`).then((data) =>
      setQuestions(data?.results)
    );
    // const useQuestions = async () => {
    //   try {
    //     const req = await fetch(
    //       `${baseURL}?amount=1&difficulty=${selectDifficulty}&type=multiple`
    //     );
    //     const res = await req.json();
    //     setQuestions(res.results);
    //   } catch (err: any) {
    //     console.log(err.message);
    //   }
    //},

    // useQuestions();
  }, []);

  return (
    <div className={styles.QuestionCard}>
      {questions ? (
        <div>
          <h2>{questions.results.question}</h2>
          <div className={styles.QuestionCard__buttons}>
            <div>
              <div className={styles.QuestionCard__buttonRow1}>
                <button>{questions.results.correct_answer}</button>
                <button>{questions.results.incorrect_answers[0]}</button>
              </div>
              <div className={styles.QuestionCard__buttonRow2}>
                <button>{questions.results.incorrect_answers[1]}</button>
                <button>{questions.results.incorrect_answers[2]}</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
