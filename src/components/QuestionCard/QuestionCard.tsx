import styles from "./QuestionCard.module.scss";
import { QuestionType, QuestionCardType } from "../../types";
import { MouseEventHandler, useEffect, useState, useRef } from "react";
import useQuestions from "../../hooks/useQuestions/useQuestions";
import GameOver from "../GameOver/GameOver";

const QuestionCard = ({ selectDifficulty }: QuestionCardType) => {
  const [questions, setQuestions] = useState<QuestionType | null>(null);
  const [num, setNum] = useState(0);
  const [pts, setPts] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const shuffle = (arr: [...any[], string]) => {
    let currentIndex = arr.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };

  useEffect(() => {
    useQuestions(`${selectDifficulty}`)
      .then((res: any) => {
        console.log(res);
        setQuestions(
          res.results.map((item: any) => ({
            question: item.question,
            options: shuffle([...item.incorrect_answers, item.correct_answer]),
            answer: item.correct_answer,
          }))
        );
      })
      .catch((err) => console.error(err));
    console.log(questions);
  }, []);

  let qu: any;
  if (questions) {
    qu = questions[num];
  }

  const getAnswer: MouseEventHandler<HTMLButtonElement> = () => {
    let userAnswer = buttonRef.current?.innerHTML;

    if (qu?.answer === userAnswer) {
      setPts(pts + 1);
    }
    setNum(num + 1);
  };

  return (
    <div className={styles.QuestionCard}>
      {qu ? (
        <div>
          {qu && (
            <>
              <h2 dangerouslySetInnerHTML={{ __html: qu.question }}></h2>
              <div className={styles.QuestionCard__buttons}>
                {qu.options?.map((item: any, index: number): JSX.Element => {
                  return (
                    <button key={index} onClick={getAnswer}>
                      {item}
                    </button>
                  );
                })}
              </div>
            </>
          )}
          {num === 10 && <GameOver points={pts} />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuestionCard;
