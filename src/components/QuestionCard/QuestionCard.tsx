import styles from "./QuestionCard.module.scss";
import { QuestionType, QuestionCardType } from "../../types";
import { useEffect, useState } from "react";
import useQuestions from "../../hooks/useQuestions/useQuestions";

const QuestionCard = ({ selectDifficulty }: QuestionCardType) => {
  const [questions, setQuestions] = useState<QuestionType | null>(null);

  useEffect(() => {
    let res: any = useQuestions(`${selectDifficulty}`);
    setQuestions(res.data);
  }, []);

  // use non-null assertion operator
  const qu = questions!.results;

  return (
    <div className={styles.QuestionCard}>
      {qu ? (
        <div>
          <h2>{qu.question}</h2>
          <div className={styles.QuestionCard__buttons}>
            <div>
              <div className={styles.QuestionCard__buttonRow1}>
                <button>{qu.correct_answer}</button>
                <button>{qu.incorrect_answers[0]}</button>
              </div>
              <div className={styles.QuestionCard__buttonRow2}>
                <button>{qu.incorrect_answers[1]}</button>
                <button>{qu.incorrect_answers[2]}</button>
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
